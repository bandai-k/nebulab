import Image from "next/image";
import { LABEL_ASSETS, type LabelColor } from "./brushAssets";

/**
 * セクションの見出し(指示書 v2 §3.6 / §5)。
 *
 * 英字ラベルを筆の上に置き、日本語の見出しは地の上に置く。
 * 文字はすべて HTML のテキストで書く。画像に文字を焼き込まない。
 *
 * 色はセクションごとに固定する(呼び出し側で決め、途中で変えない)。
 * 筆の4色は装飾専用で、文字色やボタンには使わない(§3.3)。
 *
 * 不透明度 0.55 の根拠(§9):
 * 素材の最も濃い画素に本文色 #1C1A17 を乗せたときのコントラストを実測し、
 * 4色すべてが AA(4.5:1)を満たす値にしている。最も厳しいのは indigo で、
 * 素の状態では 1.8:1 しかない。ここを上げるときは必ず測り直すこと。
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
        筆は英字ラベルの帯だけを覆う。日本語の見出しには掛けない(§3.4)。
        ラベルの左端より少し外から始めて、筆の入りが切れないようにする。

        素材は 3:1 の横長で、ストロークは上下中央付近にある。帯の高さに
        合わせて切り出すため object-fit: cover を使い、object-position の
        縦位置に素材ごとの罫線位置(ruleY)を渡している。こうすると幅が
        変わっても罫線と文字の関係が保たれる。
        (この方式でも色ごとに 4px ほどの差が残る。罫線なし版に
         差し替えれば ruleY ごと不要になる。)
      */}
      <div className="pointer-events-none absolute -left-[6%] top-0 h-14 w-[min(34rem,88%)] overflow-hidden md:h-16">
        <Image
          src={asset.src}
          alt=""
          fill
          aria-hidden="true"
          sizes="(min-width: 768px) 34rem, 88vw"
          style={{
            opacity: BRUSH_OPACITY,
            objectFit: "cover",
            objectPosition: `center ${(asset.ruleY * 100).toFixed(1)}%`,
          }}
        />
      </div>

      <p className="relative flex h-14 items-center text-[0.6875rem] font-medium leading-none tracking-[0.24em] text-ink md:h-16 md:text-xs">
        {label}
      </p>

      {heading && (
        <h2
          id={id}
          className="relative mt-6 max-w-2xl font-display text-lg font-light leading-[1.85] tracking-[0.04em] text-ink md:text-xl"
        >
          {heading}
        </h2>
      )}
    </div>
  );
}
