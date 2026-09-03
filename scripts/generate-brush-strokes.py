#!/usr/bin/env python3
"""
背景装飾の筆のストローク(指示書 v2 §3.3 / §3.4)を生成する。

出力は public/brush/*.webp(アルファ付き)。実行しなくてもサイトはビルドできる。
色や形を調整したくなったら STROKES を書き換えて再実行すること。

    python3 scripts/generate-brush-strokes.py

作り方の考え方:
  1. ベジェ曲線に沿って丸ブラシのスタンプを置き、芯となる被覆率を作る
  2. fBm ノイズで座標を歪ませ、輪郭を不規則にする(滲み)
  3. 進行方向に引き伸ばしたノイズを掛けて筆のかすれを出す
  4. 被覆率とそのぼかしの差分を縁に足す(水彩の縁溜まり)
  5. 低周波ノイズで明度を揺らして単調な塗りを避ける
"""

from __future__ import annotations

import math
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

OUT_DIR = Path(__file__).resolve().parent.parent / "public" / "brush"

# 指示書 §3.3。装飾専用の4色。
PINK = (0xC6, 0x47, 0x8A)
INDIGO = (0x2F, 0x3A, 0x8C)
TEAL = (0x2E, 0x8F, 0x8A)
AMBER = (0xE0, 0x91, 0x2F)


def value_noise(h: int, w: int, res_h: int, res_w: int, rng: np.random.Generator) -> np.ndarray:
    """低解像度の乱数を滑らかに拡大した値ノイズ。"""
    res_h = max(1, res_h)
    res_w = max(1, res_w)
    grid = (rng.random((res_h + 1, res_w + 1)) * 255).astype(np.uint8)
    img = Image.fromarray(grid, "L").resize((w, h), Image.BICUBIC)
    return np.asarray(img, dtype=np.float32) / 255.0


def fbm(h, w, res_h, res_w, rng, octaves=5) -> np.ndarray:
    """res_h / res_w を変えるとノイズの伸びる向きが変わる。"""
    out = np.zeros((h, w), np.float32)
    amp, total = 1.0, 0.0
    for _ in range(octaves):
        out += amp * value_noise(h, w, res_h, res_w, rng)
        total += amp
        amp *= 0.5
        res_h *= 2
        res_w *= 2
    return out / total


def sample(img: np.ndarray, mx: np.ndarray, my: np.ndarray) -> np.ndarray:
    """バイリニア補間。歪ませた座標から元画像を引く。"""
    h, w = img.shape
    x0 = np.clip(np.floor(mx), 0, w - 1).astype(np.int32)
    y0 = np.clip(np.floor(my), 0, h - 1).astype(np.int32)
    x1 = np.clip(x0 + 1, 0, w - 1)
    y1 = np.clip(y0 + 1, 0, h - 1)
    fx = np.clip(mx - x0, 0, 1).astype(np.float32)
    fy = np.clip(my - y0, 0, 1).astype(np.float32)
    return (
        img[y0, x0] * (1 - fx) * (1 - fy)
        + img[y0, x1] * fx * (1 - fy)
        + img[y1, x0] * (1 - fx) * fy
        + img[y1, x1] * fx * fy
    )


def bezier_pts(ctrl, steps):
    """ベジェ(de Casteljau)を等間隔にサンプルした点列を返す。"""
    ts = np.linspace(0.0, 1.0, steps)
    pts = np.array(ctrl, dtype=np.float64)
    acc = np.empty((steps, 2))
    for i, t in enumerate(ts):
        cur = pts
        while len(cur) > 1:
            cur = cur[:-1] * (1 - t) + cur[1:] * t
        acc[i] = cur[0]
    return acc


def smooth1d(n, res, rng, octaves=3):
    """1次元の fBm。筆圧やかすれの縦筋に使う。"""
    out = np.zeros(n, np.float32)
    amp, total = 1.0, 0.0
    for _ in range(octaves):
        g = rng.random(max(2, res) + 1).astype(np.float32)
        out += amp * np.interp(np.linspace(0, len(g) - 1, n), np.arange(len(g)), g)
        total += amp
        amp *= 0.5
        res *= 2
    return out / total


def ribbon(h, w, pts, press, thickness, rng):
    """
    ストロークの本体。中心線の上下に太さを振り分けた帯を塗る。

    輪郭を「毛の集合」から作ると束がほどけて糸に見えるため、
    本体は1枚の面として作り、かすれは後段の変調で入れる。
    """
    half = thickness * 0.5 * press
    # 上下で太さをわずかに変え、左右対称の帯に見せない。
    up = half * (smooth1d(len(pts), 4, rng) * 0.5 + 0.75)
    dn = half * (smooth1d(len(pts), 4, rng) * 0.5 + 0.75)

    top = [(float(x), float(y - o)) for (x, y), o in zip(pts, up)]
    bot = [(float(x), float(y + o)) for (x, y), o in zip(pts, dn)]

    img = Image.new("L", (w, h), 0)
    ImageDraw.Draw(img).polygon(top + bot[::-1], fill=255)
    return np.asarray(img, np.float32) / 255.0


def hair_texture(h, w, pts, press, thickness, rng, hairs=80):
    """
    かすれ用のテクスチャ(0..1)。本体の内側を筋状に抜くために使う。
    毛どうしを重ねるので、単体では束に見えるが面として均される。
    """
    acc = np.zeros((h, w), np.float32)
    for i in range(hairs):
        u = i / (hairs - 1) - 0.5
        wander = (smooth1d(len(pts), 3, rng) - 0.5) * thickness * 0.05
        offs = u * thickness * press * 0.98 + wander

        hair = Image.new("L", (w, h), 0)
        xy = [(float(x), float(y + o)) for (x, y), o in zip(pts, offs)]
        wid = max(2, int(round(thickness / hairs * rng.uniform(3.0, 5.5))))
        ImageDraw.Draw(hair).line(xy, fill=255, width=wid, joint="curve")

        # この毛が紙に触れている割合。抜けは控えめにし、面を保つ。
        prof = smooth1d(w, int(rng.integers(4, 11)), rng, octaves=3)
        prof = np.clip((prof - 0.30) / 0.55, 0, 1)
        acc += (np.asarray(hair, np.float32) / 255.0) * prof[None, :].astype(np.float32)

    tex = np.clip(acc / (acc.mean() * 6.0 + 1e-6), 0, 1)
    # 筋だけだと等高線に見える。まだらを掛けて紙離れを面で起こす。
    patch = fbm(h, w, 5, 9, rng, octaves=3)
    return np.clip(tex * (np.clip((patch - 0.30) / 0.45, 0, 1) * 0.75 + 0.35), 0, 1)


def make_stroke(w, h, ctrl, color, thickness, taper, seed, warp=0.045, dry=0.55) -> Image.Image:
    rng = np.random.default_rng(seed)
    pts = bezier_pts(ctrl, 420)

    t = np.linspace(0, 1, len(pts))
    ends = np.minimum(1.0, (t / 0.07) ** 0.6) * np.minimum(1.0, ((1 - t) / taper) ** 0.5)
    # 振れ幅を大きく取る。太さが一定だと筆ではなくリボンに見える。
    press = (smooth1d(len(pts), 3, rng, octaves=4) * 0.95 + 0.32) * ends

    body = ribbon(h, w, pts, press, thickness, rng)
    tex = hair_texture(h, w, pts, press, thickness, rng)

    # 本体を毛のテクスチャで変調する。dry が大きいほどかすれる。
    core = body * (1.0 - dry) + body * tex * dry

    yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)

    # ── 輪郭の歪み(滲み)。大きなうねりと細かい揺らぎの2段 ──
    nx = (fbm(h, w, 2, 3, rng, octaves=2) - 0.5) * 2.0
    ny = (fbm(h, w, 2, 4, rng, octaves=2) - 0.5) * 2.0
    fx_ = (fbm(h, w, 7, 14, rng, octaves=2) - 0.5) * 2.0
    fy_ = (fbm(h, w, 8, 16, rng, octaves=2) - 0.5) * 2.0
    big, fine = h * warp * 2.0, h * warp * 0.5
    cov = sample(core, xx + nx * big + fx_ * fine, yy + ny * big + fy_ * fine)

    cov = np.asarray(
        Image.fromarray((np.clip(cov, 0, 1) * 255).astype(np.uint8)).filter(
            ImageFilter.GaussianBlur(max(1.2, h * 0.004))
        ),
        np.float32,
    ) / 255.0

    # ── 縁溜まり。水彩は乾くときに縁へ顔料が寄る ──
    blurred = np.asarray(
        Image.fromarray((cov * 255).astype(np.uint8)).filter(
            ImageFilter.GaussianBlur(max(2.0, h * 0.014))
        ),
        np.float32,
    ) / 255.0
    rim = np.clip(cov - blurred, 0, 1)
    alpha = np.clip(cov * 0.82 + rim * 1.9, 0, 1) * 0.95

    # ── 色の揺らぎ。均一な塗りを避ける ──
    shade = fbm(h, w, 2, 4, rng, octaves=3) * 0.28 + 0.86
    base = np.array(color, np.float32).reshape(1, 1, 3)
    rgb = np.clip(base * shade[..., None], 0, 255)

    return Image.fromarray(np.dstack([rgb, alpha * 255]).astype(np.uint8))


# (ファイル名, 幅, 高さ, 制御点, 色, 太さ, 抜けの鋭さ, seed, 歪み, かすれ)
STROKES = [
    # ── ヒーロー。奥・中・手前の3枚を重ねてパララックスの層にする(§4.2) ──
    ("hero-teal", 2400, 820, [(-140, 470), (620, 250), (1500, 640), (2540, 330)], TEAL, 205, 0.16, 11, 0.055, 0.60),
    ("hero-indigo", 2400, 820, [(-140, 330), (700, 560), (1620, 240), (2540, 520)], INDIGO, 150, 0.13, 23, 0.050, 0.50),
    ("hero-pink", 2400, 820, [(-140, 560), (760, 330), (1560, 520), (2540, 250)], PINK, 112, 0.10, 37, 0.045, 0.46),
    # ── セクション境界の細い帯(§3.4) ──
    ("divider-amber", 2400, 300, [(-140, 170), (700, 110), (1600, 190), (2540, 120)], AMBER, 52, 0.12, 51, 0.075, 0.62),
    ("divider-indigo", 2400, 300, [(-140, 120), (820, 185), (1700, 105), (2540, 175)], INDIGO, 44, 0.12, 67, 0.075, 0.62),
    # ── NRT LOFT 導線。ここだけ濃く入れる(§5.7) ──
    ("loft-indigo", 2200, 760, [(-130, 250), (620, 540), (1450, 220), (2330, 470)], INDIGO, 195, 0.15, 83, 0.052, 0.44),
    ("loft-pink", 2200, 760, [(-130, 520), (700, 250), (1500, 500), (2330, 260)], PINK, 140, 0.12, 97, 0.048, 0.48),
]


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for name, w, h, ctrl, color, thickness, taper, seed, warp, dry in STROKES:
        img = make_stroke(w, h, ctrl, color, thickness, taper, seed, warp, dry)
        path = OUT_DIR / f"{name}.webp"
        # 柔らかいグラデーションなので PNG では肥大する。アルファ付き WebP を使う。
        img.save(path, format="WEBP", quality=84, method=6)
        print(f"{path.relative_to(OUT_DIR.parent.parent)}  {w}x{h}  {path.stat().st_size / 1024:.0f} KB")


if __name__ == "__main__":
    main()
