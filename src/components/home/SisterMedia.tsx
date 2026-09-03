import BrushField from "@/components/decor/BrushField";
import { DEPTH } from "@/components/decor/brushAssets";

/**
 * NRT LOFT への導線(指示書 v2 §5.7)。
 *
 * 画像は置かない。カンプのコワーキングスペース内装写真も、成田の線画も
 * 使わない。他のセクションより筆のストロークを濃く入れることだけで
 * 印象を変える。
 *
 * 文面は §5.7 の指定をそのまま使う。ここを書き換えないこと。
 * (生成AIに任せると旧サイトのコワーキングスペースの説明に戻る)
 */

/*
 * 濃さは他のセクションの倍程度(§5.7)。ただし本文の裏には回り込ませない(§3.4)。
 *
 * shift は層自身の高さに対する割合。素材はストロークが上下 25%〜75% に
 * 入っているので、下の値ならストロークはセクションの上端・下端から
 * 層高の 30% ぶんだけ内側に入り、本文の余白の中に収まる。
 * パララックスで層は上下に動く(近い層で層高の約 10%)。その移動ぶんを
 * 見込んで本文との間に余裕を取ってある。数値を変えるときは 375px 〜
 * 1440px のすべてで、移動後も本文と重ならないことを確認すること。
 */
const LAYERS = [
  { name: "loft-indigo", depth: DEPTH.far, opacity: 0.5, anchor: "top", shift: "-46%" },
  {
    name: "loft-pink",
    depth: DEPTH.near,
    opacity: 0.45,
    anchor: "bottom",
    shift: "53%",
    reveal: true,
  },
] as const;

export default function SisterMedia() {
  return (
    <section className="relative overflow-hidden border-t border-rule">
      <BrushField layers={[...LAYERS]} sizes="130vw" />

      <div className="relative mx-auto max-w-6xl px-5 py-36 md:px-10 md:py-56">
        <div className="max-w-xl">
          <p className="section-label">SISTER MEDIA</p>

          <p className="mt-8 text-sm font-medium tracking-[0.28em] text-ink">
            NRT LOFT
          </p>

          <h2 className="mt-8 font-display text-xl font-light leading-[1.9] tracking-[0.04em] text-ink md:text-2xl">
            欲しいものが無かったので、自分で作ることにした。
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-[2.1] text-ink-sub">
            {"AIを使って「自分の困りごとを解決する小さな仕組み」をつくる過程を発信しています。非エンジニア向けのメディアです。"}
          </p>

          <a
            href="https://www.nrt-loft.jp"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline mt-12"
          >
            NRT LOFT を見る ↗
          </a>
        </div>
      </div>
    </section>
  );
}
