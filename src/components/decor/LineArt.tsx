import Image from "next/image";

/**
 * 成田の線画イラスト。背景に薄く敷いて「成田の会社である」ことを
 * 説明文なしに伝えるための素材(指示書 §4)。
 *
 * 素材ごとにインクの量がかなり違う(実測で実効被覆率 4.9%〜15.4%)。
 * 同じ不透明度で並べると五重塔だけが 3 倍濃く出るため、素材ごとの
 * 係数 `k` で正規化してから、サイト共通の濃さ(--lineart-intensity)を
 * 掛ける。濃さを変えるときは globals.css の変数 1 箇所だけ触ればよい。
 */
type Tone = "light" | "dark";

type Asset = {
  src: string;
  width: number;
  height: number;
  /** 実効被覆率 5% を基準にした正規化係数。 */
  k: number;
  /** light = 白線(暗い背景用) / dark = 黒線(反転ブロック用)。 */
  tone: Tone;
};

export const LINE_ART = {
  "airplane-clouds": {
    src: "/decor/airplane-clouds.png",
    width: 1672,
    height: 941,
    k: 1.01,
    tone: "light",
  },
  "control-tower": {
    src: "/decor/control-tower.png",
    width: 1672,
    height: 941,
    k: 1.03,
    tone: "light",
  },
  "express-train": {
    src: "/decor/express-train.png",
    width: 1672,
    height: 941,
    k: 0.51,
    tone: "light",
  },
  pagoda: {
    src: "/decor/pagoda.png",
    width: 1086,
    height: 1448,
    k: 0.32,
    tone: "light",
  },
  townscape: {
    src: "/decor/townscape.png",
    width: 2172,
    height: 724,
    k: 0.73,
    tone: "light",
  },
  // 反転ブロック(#F7F6F1)専用。線が黒いので暗い背景には置かないこと。
  "nrt-loft-building": {
    src: "/decor/nrt-loft-building.png",
    width: 1448,
    height: 1086,
    k: 0.71,
    tone: "dark",
  },
} as const satisfies Record<string, Asset>;

export type LineArtName = keyof typeof LINE_ART;

type LineArtProps = {
  name: LineArtName;
  /** 位置と大きさは呼び出し側が決める。 */
  className?: string;
  /**
   * この 1 枚だけ濃さを変えたいときに指定する。
   * 省略時はサイト共通の --lineart-intensity に従う。
   */
  intensity?: number;
  /** ヒーローなど初期表示に入る場所では true。 */
  priority?: boolean;
  sizes?: string;
  /** 既定は contain(線画の形を保つ)。帯状に使うときは cover。 */
  fit?: "contain" | "cover";
};

export default function LineArt({
  name,
  className,
  intensity,
  priority = false,
  sizes = "200vw",
  fit = "contain",
}: LineArtProps) {
  const asset = LINE_ART[name];
  const variable =
    asset.tone === "dark"
      ? "var(--lineart-intensity-invert, 0.1)"
      : "var(--lineart-intensity, 0.08)";
  const base = intensity !== undefined ? String(intensity) : variable;

  return (
    <div aria-hidden="true" className={className}>
      <Image
        src={asset.src}
        alt=""
        fill
        sizes={sizes}
        priority={priority}
        className={fit === "cover" ? "object-cover" : "object-contain"}
        style={{ opacity: `calc(${base} * ${asset.k})` }}
      />
    </div>
  );
}
