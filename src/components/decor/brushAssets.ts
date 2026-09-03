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
 * 画像には細い罫線が含まれており、その位置が4色で揃っていない。
 * 実測(画像高さに対する比):
 *   pink 53.4% / amber 53.5% / teal 54.5% / indigo 61.6%
 * indigo だけ約7%下にあるため、そのままでは下線がずれる。
 * ruleY を使って層を上下にずらし、見た目の下線位置を揃えている。
 *
 * 罫線なし版を支給いただいたら ruleY ごと削除し、下線は CSS で引くこと。
 */
export type LabelColor = "pink" | "amber" | "teal" | "indigo";

export const LABEL_ASSETS: Record<
  LabelColor,
  { src: string; width: number; height: number; ruleY: number }
> = {
  pink: { src: "/brush/label-pink.webp", width: 2172, height: 724, ruleY: 0.534 },
  amber: { src: "/brush/label-amber.webp", width: 2172, height: 724, ruleY: 0.535 },
  teal: { src: "/brush/label-teal.webp", width: 2172, height: 724, ruleY: 0.545 },
  indigo: { src: "/brush/label-indigo.webp", width: 2172, height: 724, ruleY: 0.616 },
};

/** 下線を揃える基準。pink / amber の実測値。 */
export const LABEL_RULE_BASE = 0.534;

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
