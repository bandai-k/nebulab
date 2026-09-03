/**
 * 全ページ共通の背景装飾(AmbientBackground)専用の水彩素材。
 *
 * BrushField / SectionHeading が使う brushAssets.ts の label-* とは別物。
 * あちらはセクション単位の演出、こちらは固定背景として画面全体に
 * 薄く散らす用途のため、名前空間を分けている。
 */
type WatercolorAsset = {
  src: string;
  width: number;
  height: number;
};

export const AMBIENT = {
  "pink-band": {
    src: "/assets/watercolor-pink-band.webp",
    width: 2172,
    height: 724,
  },
  "pink-soft": {
    src: "/assets/watercolor-pink-soft.webp",
    width: 2172,
    height: 724,
  },
  "pink-diagonal": {
    src: "/assets/watercolor-pink-diagonal.webp",
    width: 2172,
    height: 724,
  },
  "amber-band": {
    src: "/assets/watercolor-amber-band.webp",
    width: 2172,
    height: 724,
  },
  "amber-vertical": {
    src: "/assets/watercolor-amber-vertical.webp",
    width: 724,
    height: 2172,
  },
  "teal-band": {
    src: "/assets/watercolor-teal-band.webp",
    width: 2172,
    height: 724,
  },
  "teal-vertical": {
    src: "/assets/watercolor-teal-vertical.webp",
    width: 887,
    height: 1774,
  },
  "lavender-blotch": {
    src: "/assets/watercolor-lavender-blotch.webp",
    width: 2172,
    height: 724,
  },
  "lavender-corner": {
    src: "/assets/watercolor-lavender-corner.webp",
    width: 1254,
    height: 1254,
  },
} as const satisfies Record<string, WatercolorAsset>;

export type AmbientName = keyof typeof AMBIENT;
