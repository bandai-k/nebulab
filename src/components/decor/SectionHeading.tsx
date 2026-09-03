import Image from "next/image";
import { LABEL_ASSETS, type LabelColor } from "./brushAssets";

/**
 * セクションの見出し(指示書 v2 §3.6 / §5)。
 *
 * 英字ラベルを筆の上に置き、日本語の見出しは地の上に置く。
 * 文字はすべて HTML のテキストで書く。画像に文字を焼き込まない。
 *
 * 筆は素材の縦横比のまま丸ごと出す。帯の高さに合わせて切り取ると
 * ストロークの上下が平らに切れて、筆に見えなくなる。
 * (素材の縦の内訳: ストロークは高さの約 15%〜84%。残りは余白。)
 *
 * 色はセクションごとに固定する(呼び出し側で決め、途中で変えない)。
 * 筆の4色は装飾専用で、文字色やボタンには使わない(§3.3)。
 *
 * 不透明度 0.55 の根拠(§9):
 * 素材の最も濃い画素に本文色 #1C1A17 を乗せたときのコントラストを実測した値。
 * pink 8.0:1 / amber 9.7:1 / teal 7.3:1 / indigo 5.5:1。
 * 最も厳しい indigo は 0.6 が AA の上限なので、ここを上げるときは測り直すこと。
 */
const BRUSH_OPACITY = 0.55;

type Props = {
  /** 英字ラベル。筆の上に乗る。 */
  label: string;
  /** 日本語の見出し。地の上に置く。 */
  heading?: string;
  color: LabelColor;
  /** 見出しの id(ページ内アンカー用)。 */
  id?: string;
};

export default function SectionHeading({ label, heading, color, id }: Props) {
  const asset = LABEL_ASSETS[color];

  return (
    <div className="relative">
      {/*
        筆とラベルの箱。素材と同じ縦横比を持たせ、画像を切らずに収める。
        左に少しはみ出させて、筆の入りが列の外から始まるようにする。
      */}
      <div
        className="relative -ml-[4%] w-[min(26rem,92%)]"
        style={{ aspectRatio: `${asset.width} / ${asset.height}` }}
      >
        <Image
          src={asset.src}
          alt=""
          fill
          aria-hidden="true"
          sizes="(min-width: 768px) 26rem, 92vw"
          className="object-contain"
          style={{ opacity: BRUSH_OPACITY }}
        />

        {/*
          ラベルはストロークの中心に置く。下線は §3.6 のとおり CSS で
          短く引く(素材に罫線は含まれない)。
        */}
        <p className="absolute left-[4%] top-1/2 -translate-y-1/2 border-b border-ink/45 pb-2 text-[0.6875rem] font-medium leading-none tracking-[0.24em] text-ink md:text-xs">
          {label}
        </p>
      </div>

      {heading && (
        <h2
          id={id}
          className="relative mt-4 max-w-2xl font-display text-lg font-light leading-[1.85] tracking-[0.04em] text-ink md:text-xl"
        >
          {heading}
        </h2>
      )}
    </div>
  );
}
