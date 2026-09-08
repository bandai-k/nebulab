import type { Metadata } from "next";
import Link from "next/link";
import IntroPreview from "@/components/home/IntroPreview";

/**
 * イントロ(オープニング)の確認用ページ。
 *
 * トップページのイントロは1セッションに1回しか出ないため、実機で見比べるのが
 * 難しい。ここでは何度でも頭から再生できるようにしている。
 *
 * 公開はするが検索には載せない(noindex + robots.ts の disallow)。
 * sitemap.ts は明示した URL だけを列挙する作りなので、そちらは触らなくてよい。
 */
export const metadata: Metadata = {
  title: "イントロ確認用",
  robots: { index: false, follow: false },
};

const TIMELINE = [
  { at: "0.2 〜 0.8s", what: "「小さく始めて、」が1文字ずつ打たれる(1文字 75ms)" },
  { at: "0.8 〜 1.3s", what: "間(かん)。1行目を読ませる" },
  { at: "1.3 〜 1.9s", what: "「無限に広がる。」が同じ速さで続く" },
  { at: "2.0 〜 2.5s", what: "コピーが画面中央へ縮んで吸い込まれる" },
  {
    at: "2.3 〜 4.2s",
    what: "入れ替わりにロゴが同じ中心から開く。広がるほど遅くなり、色も薄くなる",
  },
  { at: "3.9 〜 4.4s", what: "幕が引き、トップページが現れる" },
];

const CHECKS = [
  "打鍵の速さ(1文字 75ms)が、速すぎず遅すぎないか",
  "1行目と2行目の間(かん)が、読むテンポとして自然か",
  "2行目が出るときに、1行目の位置が動いていないか",
  "コピーが画面の幅に収まっているか(小さい端末ほど厳しい)",
  "コピーが中央へ縮むのと、ロゴが開くのが、つながって見えるか",
  "ロゴの拡大が滑らかか。カクついたり、途中で固まったりしないか",
  "広がるにつれて遅くなる効き方が、狙いどおりか(終盤はほぼ止まって見える)",
  "再生中、ヘッダー(ロゴとメニュー)が見えていないか",
  "ロゴの色の薄れ方が、最後まで自然か",
  "ロゴが画面を覆いきってから、トップページが現れているか",
  "全体の尺(約4.4秒)が長すぎないか",
  "画面のどこかを触ると、途中で飛ばせるか",
];

export default function IntroPreviewPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 pb-24 pt-28 md:px-12 md:pt-32">
      <p className="section-label">PREVIEW</p>

      <h1 className="mt-8 font-display text-2xl font-light leading-[1.7] tracking-[0.04em] text-ink md:text-3xl">
        イントロ確認用
      </h1>

      {/*
        日本語の本文は途中で改行しない。JSX は行間の改行を半角スペース1つに
        変換するため、折り返すと「できます。 本番の」のように空きができる。
      */}
      <p className="mt-6 text-sm leading-[2.1] text-ink-sub md:text-base">
        トップページのオープニングを、何度でも頭から再生できます。本番のトップページは1セッションに1回しか再生しませんが、このページはその判定を通さないので、再生済みの記録も残りません。
      </p>

      <div className="mt-10">
        <IntroPreview />
      </div>

      <section className="mt-16 border-t border-rule pt-10">
        <h2 className="font-display text-lg font-normal tracking-[0.04em] text-ink">
          流れ
        </h2>
        <dl className="mt-6">
          {TIMELINE.map((row) => (
            <div
              key={row.at}
              className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
            >
              <dt className="font-mono text-xs text-ink-sub">{row.at}</dt>
              <dd className="text-sm leading-[1.9] text-ink">{row.what}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16 border-t border-rule pt-10">
        <h2 className="font-display text-lg font-normal tracking-[0.04em] text-ink">
          見てほしいところ
        </h2>
        <ul className="mt-6 space-y-4">
          {CHECKS.map((c) => (
            <li
              key={c}
              className="flex gap-3 text-sm leading-[1.9] text-ink-sub"
            >
              <span aria-hidden="true" className="text-accent">
                —
              </span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-rule pt-10">
        <h2 className="font-display text-lg font-normal tracking-[0.04em] text-ink">
          本番の挙動
        </h2>
        <ul className="mt-6 space-y-4 text-sm leading-[1.9] text-ink-sub">
          <li>
            トップページを開いたときだけ、1セッションに1回再生します。ページを移動して戻ってきても、再読み込みしても、もう出ません。
          </li>
          <li>
            端末で「視差効果を減らす / アニメーションを減らす」を有効にしている場合は、最初から再生しません(このページは、確認のため再生します)。
          </li>
          <li>
            もう一度だけ本番の再生を見たいときは、ブラウザを一度閉じるか、プライベートウィンドウでトップページを開いてください。
          </li>
        </ul>

        <p className="mt-10">
          <Link
            href="/"
            className="text-sm tracking-[0.08em] text-accent underline underline-offset-4"
          >
            トップページを開く
          </Link>
        </p>
      </section>
    </main>
  );
}
