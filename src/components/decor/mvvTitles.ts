/**
 * MVV(理念)ページの MISSION / VISION / VALUES 見出し画像。
 *
 * 文字が焼き込み済みの水彩素材。about/page.tsx などの
 * section-eyebrow-line(英字テキスト+線)パターンとは違い、
 * 画像そのものが見出しとして完成しているため、テキストは重ねない。
 */
export const MVV_TITLES = {
  mission: {
    src: "/about/mvv-titles/title-mission.webp",
    width: 2172,
    height: 724,
  },
  vision: {
    src: "/about/mvv-titles/title-vision.webp",
    width: 2172,
    height: 724,
  },
  values: {
    src: "/about/mvv-titles/title-values.webp",
    width: 2172,
    height: 724,
  },
} as const;
