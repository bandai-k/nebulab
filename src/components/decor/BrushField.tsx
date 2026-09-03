"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { BRUSH, type BrushName, type Depth } from "./brushAssets";

/**
 * 筆のストロークの層をまとめて置き、動かす(指示書 v2 §3.4 / §4)。
 *
 * 配置のルールをここで強制する。呼び出し側が破れないようにするため。
 *   - 親セクションを覆う絶対配置 + overflow hidden(はみ出しを切る §4.2)
 *   - 左右に抜けさせて断ち切りにする(枠内に収めると挿絵になる §3.4)
 *   - pointer-events: none / aria-hidden(§9)
 *
 * 動くのは筆だけ(§4.1)。テキスト・カード・画像は動かさない。
 *
 * 使う場所はヒーローと NRT LOFT ブロック、そしてセクションの境界に限る
 * (§3.4)。本文が乗る面には置かないこと。
 */

export type BrushLayerSpec = {
  name: BrushName;
  /** パララックス係数。brushAssets の DEPTH を使う。 */
  depth: Depth;
  /** 基調色の上に薄く重ねる(§3.4)。0.2〜0.5 程度。 */
  opacity: number;
  /** どちらのセクション端に寄せるか。 */
  anchor: "top" | "bottom";
  /**
   * 端からのずらし量。層自身の高さに対する % で書く。
   * 素材はストロークが上下 25%〜75% に入っているので、たとえば
   * anchor:"top" / shift:"-45%" ならストロークの下端がセクション上端から
   * 層高の 30% の位置に来る。画面幅が変わっても関係が崩れない。
   */
  shift: string;
  /**
   * 横方向の置き方を Tailwind で指定する。
   *
   * 既定は左右に -8% ずつはみ出す全幅の帯(§3.4 の基本形)。
   * 段組みが変わるブレークポイントで置き方を変えたい場合に使う。
   * 例: 本文が左半分に来る幅では、筆を右へ寄せて文字の裏に
   * 回り込ませない ―― "-left-[8%] w-[116%] lg:left-auto lg:-right-[6%] lg:w-[50%]"
   */
  position?: string;
  /** 滲み出し(§4.3)を掛けるか。1セクションにつき最大2箇所まで。 */
  reveal?: boolean;
  /**
   * 画面表示時にゆっくり落ち着かせるか。transform だけを動かすので、
   * LCP になる要素に掛けても一瞬空にならない。
   */
  entrance?: boolean;
};

/** 素材の最大表示幅(px)。これ以上に拡大しないこと(支給時の指定)。 */
const MAX_ASSET_WIDTH = 2172;

type Props = {
  layers: BrushLayerSpec[];
  /** ヒーローなど初期表示に入る場所では true。 */
  priority?: boolean;
  sizes?: string;
};

/**
 * 移動量の上限。層の高さに対する割合。
 *
 * §4.2 は「スクロール量の 0.2〜0.35 倍」と書いているが、素直に
 * スクロール量へ比例させると移動量が層の高さの 35% を超え、同じ §4.2 が
 * 求める「層はセクションより 20〜30% 高く作る」と両立しない。
 * そこで移動量の上限をここで決め、depth は層どうしの相対的な速さ
 * (奥行き)を決める係数として使う。見え方は実機で詰める(§4.6)。
 */
const MAX_TRAVEL_RATIO = 0.12;

export default function BrushField({ layers, priority = false, sizes = "120vw" }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const section = root.parentElement ?? root;

    // §4.5: 動きを完全に停止し、最終状態(移動量ゼロ)を表示する。
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      layerRefs.current.forEach((el) => el?.classList.add("is-drawn"));
      return;
    }

    // ── 滲み出し(§4.3)。一度だけ実行し、繰り返さない ──
    const drawObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-drawn");
          drawObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );
    layerRefs.current.forEach((el) => {
      if (!el?.classList.contains("brush-reveal")) return;
      // 既に視界にある層は、観測を待たずに最終状態にする。
      // バックグラウンドタブでは IntersectionObserver が止まるため、
      // これが無いと筆がマスクされたまま出てこない。
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-drawn");
        return;
      }
      drawObserver.observe(el);
    });

    // ── パララックス(§4.2)。可視のときだけ rAF を回す ──
    let frame = 0;
    let running = false;
    // 毎フレーム offsetHeight を読むとレイアウトを何度も強制するため、
    // 移動量は開始時とリサイズ時にだけ測る。
    let travels: number[] = [];

    const measure = () => {
      // depth は DOM の data 属性から読む。呼び出し側が配列リテラルを渡しても
      // effect を張り直さずに済み、値がずれることもない。
      travels = layerRefs.current.map((el) => {
        if (!el) return 0;
        const depth = Number(el.dataset.depth) || 0;
        return el.offsetHeight * MAX_TRAVEL_RATIO * (depth / 0.35);
      });
    };

    const tick = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      // セクションが画面を通り抜ける間で -1 → +1 に動く進捗。
      const span = (viewport + rect.height) / 2;
      const progress = (viewport / 2 - (rect.top + rect.height / 2)) / span;

      for (let i = 0; i < layerRefs.current.length; i++) {
        const el = layerRefs.current[i];
        if (!el) continue;
        // 基準位置(--brush-shift)は CSS 側で合成する。ここは移動量だけ書く。
        el.style.transform = `translate3d(0, ${(progress * travels[i]).toFixed(2)}px, 0)`;
      }

      if (running) frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      measure();
      // will-change は動作中のみ付ける。付けっぱなしにしない(§4.2)。
      layerRefs.current.forEach((el) => el?.classList.add("is-animating"));
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(frame);
      layerRefs.current.forEach((el) => el?.classList.remove("is-animating"));
    };

    const visibility = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "10% 0px" },
    );
    visibility.observe(section);

    const onResize = () => {
      if (running) measure();
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      stop();
      visibility.disconnect();
      drawObserver.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {layers.map((layer, i) => {
        const asset = BRUSH[layer.name];
        return (
          <div
            key={`${layer.name}-${i}`}
            className={`brush-layer ${layer.position ?? "-left-[8%] w-[116%]"}`}
            style={{
              [layer.anchor]: 0,
              maxWidth: MAX_ASSET_WIDTH,
              opacity: layer.opacity,
              // 層自身の高さに対するずらし。画面幅が変わっても関係が保たれる。
              transform: `translate3d(0, ${layer.shift}, 0)`,
            }}
          >
            <div
              ref={(el) => {
                layerRefs.current[i] = el;
              }}
              className={`brush-shift${layer.reveal ? " brush-reveal" : ""}`}
              data-depth={layer.depth}
            >
              <Image
                src={asset.src}
                alt=""
                width={asset.width}
                height={asset.height}
                priority={priority}
                sizes={sizes}
                className={`h-auto w-full${layer.entrance ? " brush-settle" : ""}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
