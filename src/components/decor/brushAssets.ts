/**
 * 背景装飾の筆のストローク(指示書 v2 §3.3 / §3.4)。
 *
 * 画像は scripts/generate-brush-strokes.py が生成する。色や形を変えたい
 * ときはスクリプト側の STROKES を書き換えて再実行すること。ここで
 * 手を入れるのは配置と濃さだけにする。
 *
 * 4色(ピンク / 藍 / 青緑 / 琥珀)は装飾専用。文字色・ボタン・アイコンには
 * 使わない(§3.3)。
 */
export type BrushName =
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
  "hero-teal": { src: "/brush/hero-teal.webp", width: 2400, height: 820 },
  "hero-indigo": { src: "/brush/hero-indigo.webp", width: 2400, height: 820 },
  "hero-pink": { src: "/brush/hero-pink.webp", width: 2400, height: 820 },
  "divider-amber": { src: "/brush/divider-amber.webp", width: 2400, height: 300 },
  "divider-indigo": { src: "/brush/divider-indigo.webp", width: 2400, height: 300 },
  "loft-indigo": { src: "/brush/loft-indigo.webp", width: 2200, height: 760 },
  "loft-pink": { src: "/brush/loft-pink.webp", width: 2200, height: 760 },
};

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
