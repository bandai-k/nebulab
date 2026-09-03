/**
 * 背景装飾の筆のストローク(指示書 v2 §3.3 / §3.4)。
 *
 * hero-main と number-* は支給素材。それ以外は
 * scripts/generate-brush-strokes.py が生成する(生成分の色や形を変えたい
 * ときはスクリプトの STROKES を書き換えて再実行する)。
 * ここで手を入れるのは配置と濃さだけにする。
 *
 * 4色(ピンク / 藍 / 青緑 / 琥珀)は装飾専用。文字色・ボタン・アイコンには
 * 使わない(§3.3)。
 */
export type BrushName =
  | "hero-main"
  | "hero-teal"
  | "hero-indigo"
  | "hero-pink"
  | "divider-amber"
  | "divider-indigo"
  | "loft-indigo"
  | "loft-pink";

type BrushAsset = {
  src: string;
  /** 元画像の実寸。縦横比の確保と next/image の srcSet 生成に使う。 */
  width: number;
  height: number;
};

export const BRUSH: Record<BrushName, BrushAsset> = {
  // 支給素材。PNG(1.7MB)を WebP に変換したもの。LCP になるため軽さが要る。
  "hero-main": { src: "/brush/hero-main.webp", width: 1672, height: 941 },
  "hero-teal": { src: "/brush/hero-teal.webp", width: 2400, height: 820 },
  "hero-indigo": { src: "/brush/hero-indigo.webp", width: 2400, height: 820 },
  "hero-pink": { src: "/brush/hero-pink.webp", width: 2400, height: 820 },
  "divider-amber": { src: "/brush/divider-amber.webp", width: 2400, height: 300 },
  "divider-indigo": { src: "/brush/divider-indigo.webp", width: 2400, height: 300 },
  "loft-indigo": { src: "/brush/loft-indigo.webp", width: 2200, height: 760 },
  "loft-pink": { src: "/brush/loft-pink.webp", width: 2200, height: 760 },
};

/**
 * セクション見出しの下敷き(§3.6)。支給素材。
 *
 * 罫線なし版に差し替え済み。下線は CSS で引く(§3.6「小さな英字＋短い下線」)。
 * ストロークは画像高さの約 15%〜84% に入っている。
 *
 * 本文色 #1C1A17 を最も濃い画素に乗せたときのコントラスト実測:
 *   pink 8.0:1 / amber 9.7:1 / teal 7.3:1 / indigo 5.5:1 (いずれも不透明度 0.55)
 * 最も厳しい indigo でも AA を満たす。濃さを上げるときは測り直すこと。
 */
export type LabelColor = "pink" | "amber" | "teal" | "indigo";

export const LABEL_ASSETS: Record<
  LabelColor,
  { src: string; width: number; height: number }
> = {
  pink: { src: "/brush/label-pink.webp", width: 2172, height: 724 },
  amber: { src: "/brush/label-amber.webp", width: 2172, height: 724 },
  teal: { src: "/brush/label-teal.webp", width: 2172, height: 724 },
  indigo: { src: "/brush/label-indigo.webp", width: 2172, height: 724 },
};

/**
 * サービスの番号(§5.4)。支給素材 script-text.png(中身は 01〜04)から
 * 実測した位置で切り出したもの。等分割では字間が合わない。
 * 装飾なので aria-hidden を付け、サービス名はテキストで書くこと。
 */
export const NUMBER_ASSETS = {
  "01": { src: "/brush/number-01.webp", width: 403, height: 568 },
  "02": { src: "/brush/number-02.webp", width: 529, height: 665 },
  "03": { src: "/brush/number-03.webp", width: 470, height: 572 },
  "04": { src: "/brush/number-04.webp", width: 514, height: 477 },
} as const;

/**
 * パララックスの係数(§4.2)。手前ほど速く動く。
 * 実際の見え方はブラウザで詰める前提の出発点(§4.6)。
 */
export const DEPTH = {
  near: 0.35,
  mid: 0.25,
  far: 0.15,
} as const;

export type Depth = (typeof DEPTH)[keyof typeof DEPTH];
