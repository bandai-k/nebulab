/**
 * MVV(理念)ページ専用のアイコン素材。
 *
 * MISSION / VISION / VALUES の各セクション見出しと、VALUES の3枚の
 * カード(V1〜V3)の両方で使い回す。色は既存の VALUES カラー割り当て
 * (V1=pink / V2=amber / V3=teal)とそのまま一致させている。
 */
export const MVV_ICONS = {
  foresight: {
    src: "/about/mvv-icons/icon-foresight.webp",
    width: 1254,
    height: 1254,
    /** V1「先回り」/ MISSION に対応。 */
    alt: "",
  },
  people: {
    src: "/about/mvv-icons/icon-people.webp",
    width: 1254,
    height: 1254,
    /** V2「主役は人」/ VISION に対応。 */
    alt: "",
  },
  experiment: {
    src: "/about/mvv-icons/icon-experiment.webp",
    width: 1254,
    height: 1254,
    /** V3「小さく壊して、速く学ぶ」/ VALUES に対応。 */
    alt: "",
  },
} as const;

export type MvvIconName = keyof typeof MVV_ICONS;
