import type { Metadata } from "next";
import Image from "next/image";
import { BRAND } from "@/constants/brand";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import CtaLink from "./CtaLink";
import ReviewForm from "./ReviewForm";

/**
 * AIで作ったツールの安全点検・申込LP。
 *
 * 正: `~/company/dev/ai-tool-review/docs/web/lp-spec.html`(要素・状態・遷移)、
 *     `~/company/business/ideas-ai-tool-review-lp-script.md`(文言。機密・Git管理外)。
 * このページは②(2026-09-23 経営会議の順番)。申込はフォームとメールのみで受ける。
 *
 * ヘッダー(ロゴ＋料金＋申し込む)とフッター(簡素)は
 * `src/app/(lp)/review/layout.tsx` が持つ(2026-09-23 修正: 広告から来た人を
 * 他ページへ逃がさないための独立レイアウト)。ここでは本文の節だけを持つ。
 */

const breadcrumbLd = breadcrumbJsonLd([{ name: "AIで作ったツールの安全点検", path: "/review" }]);

export const metadata: Metadata = {
  title: "AIで作ったツールの安全点検 — Nebulab",
  description:
    "AIで作った業務ツール、そのまま使って大丈夫ですか。コードが読めなくても大丈夫。8つの観点で点検し、危ないところと直し方の指示文をお渡しします。",
  alternates: { canonical: "/review" },
  openGraph: {
    url: "/review",
    title: "AIで作ったツールの安全点検 — Nebulab",
    description: "8つの観点で点検して、危ないところと直し方の指示文をお渡しします。",
  },
  twitter: {
    title: "AIで作ったツールの安全点検 — Nebulab",
    description: "8つの観点で点検して、危ないところと直し方の指示文をお渡しします。",
  },
};

/** 大きな主ボタン(高さ52px以上・ベタの紺・グラデーションなし)。 */
const PRIMARY_BUTTON =
  "inline-flex min-h-[56px] w-full items-center justify-center rounded-lg bg-accent px-8 text-base font-semibold tracking-wide text-white transition hover:brightness-110 sm:w-auto";

const OBSERVATIONS = [
  { num: "01", title: "鍵の置き場所", body: "AIの鍵やパスワードが、見える場所に書かれていないか" },
  { num: "02", title: "ログインと権限", body: "他の人のデータが見えてしまわないか" },
  { num: "03", title: "データの公開設定", body: "顧客名簿が、誰でも読める状態になっていないか" },
  { num: "04", title: "個人情報の扱い", body: "個人情報や社外秘を、どこに置いているか" },
  { num: "05", title: "料金のふくらみ", body: "使われすぎて、請求が膨らむ形になっていないか" },
  { num: "06", title: "入力の悪用", body: "入力欄から、乗っ取られる余地がないか" },
  { num: "07", title: "止まったときの備え", body: "作った人が辞めても、業務が止まらないか" },
  { num: "08", title: "古い部品", body: "使っている部品に、既に知られた穴がないか" },
];

const DELIVERABLES = [
  {
    num: "01",
    title: "レポート",
    body: "危ない・注意・問題なしの3段階でお伝えします。専門用語は使いません。",
  },
  {
    num: "02",
    title: "直し方の指示文",
    body: "作ったときに使ったAI（ChatGPT・Claudeなど）に、そのまま貼り付けて頼める文をお渡しします。",
  },
  {
    num: "03",
    title: "直した後の確認",
    body: "再診断（任意）で、直せているかを確かめられます。",
  },
];

const STEPS = [
  { num: "01", title: "フォームで申し込む", detail: "所要3分です。" },
  {
    num: "02",
    title: "コードか画面の共有方法をご相談",
    detail: "メールで個別にご案内します（1営業日以内に返信）。",
  },
  {
    num: "03",
    title: "レポートをお渡し",
    detail: "3〜5営業日でお渡しします。30分の説明も可能です（任意）。",
  },
];

const PRICING = [
  {
    menu: "小さなツール（Google Apps Script・1画面程度）",
    price: "66,000円",
    note: "税込・本体60,000円",
  },
  {
    menu: "Webアプリ（ログイン・データベースあり）",
    price: "132,000円",
    note: "税込・本体120,000円",
  },
  { menu: "再診断（直した後・30日以内）", price: "22,000円", note: "税込・本体20,000円" },
  { menu: "説明（オンライン30分）", price: "11,000円", note: "税込・本体10,000円" },
];

const HONESTY = [
  "診断は「見た範囲で見つかったことのご報告」です。すべての問題がないことを保証するものではありません",
  "鍵の漏れや設定の不備の一部は、無料の自動ツールでも見つかります。私たちの値打ちは、どれが本当に危ないかの判断と、直し方まで示すことです",
  "本番の環境に負荷をかける検査（攻撃のまねごと）はしません",
  "お預かりしたコードは、決めた期間で削除します。秘密保持の約束をします",
  "セキュリティ専門会社の監査の代わりになるものではありません。法律の助言も行いません",
];

const FAQ = [
  {
    q: "コードがありません（DifyやMakeで作りました）",
    a: "いまはコードのあるものが対象です。ご相談ください。",
  },
  { q: "何を渡せばいいですか", a: "コード一式、または画面の共有です。フォームの後にご案内します。" },
  {
    q: "社外にコードを出すのが不安です",
    a: "秘密保持の約束と、削除の期限を契約に入れます。AIに読ませる部分も、読むだけで書き換えません。",
  },
  {
    q: "直すところまでお願いできますか",
    a: "診断は「点検と直し方の提示」までです。直す作業のご相談は別途承ります。",
  },
  { q: "支払いはどうなりますか", a: "診断の後に請求書をお送りします（銀行振込）。お見積りは無料です。" },
];

export default function ReviewPage() {
  return (
    <main className="text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* === ヒーロー === */}
      <section className="border-b border-rule">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-10 md:py-24">
          <div>
            <h1 className="text-[32px] font-bold leading-[1.35] tracking-tight text-ink sm:text-[40px] md:text-[44px]">
              AIで作ったツール、
              <br />
              そのまま使って大丈夫ですか。
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-ink-sub md:text-lg">
              コードが読めなくても大丈夫です。8つの観点で点検して、危ないところと、直し方の指示文をお渡しします。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CtaLink href="#form" position="hero" className={PRIMARY_BUTTON}>
                診断を申し込む（所要3分）
              </CtaLink>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xs md:max-w-sm">
            <Image
              src="/review/report-placeholder.svg"
              alt="診断レポートのイメージ（見本準備中）"
              width={620}
              height={820}
              priority
              className="h-auto w-full rounded-lg border border-rule shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* === ある日の出来事 === */}
      <section className="border-b border-rule bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-ink-sub">ある日の出来事</p>
          <div className="mt-6 space-y-4 text-base leading-[1.9] text-ink md:text-lg">
            <p>社員がChatGPTで作った、問い合わせを整理するツール。半年、問題なく動いている。</p>
            <p>
              ある朝、AIの利用料の請求が<span className="font-bold text-red-700">いつもの30倍</span>
              になっていた。
            </p>
            <p>公開ページの中に、AIの鍵がそのまま書かれていた。誰でも見られる場所に。</p>
          </div>
          <p className="mt-6 text-sm leading-7 text-ink-sub">
            作った本人に悪気はありません。AIは「動くもの」は作れますが、「安全に使えるか」は教えてくれません。
          </p>
        </div>
      </section>

      {/* === 見るのはこの8つ === */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-[32px]">見るのは、この8つ。</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {OBSERVATIONS.map((o) => (
              <div key={o.num} className="rounded-lg border border-rule bg-surface p-4 md:p-5">
                <span className="text-[10px] tracking-[0.2em] text-ink-sub">{o.num}</span>
                <h3 className="mt-2 text-sm font-semibold text-ink md:text-base">{o.title}</h3>
                <p className="mt-2 text-xs leading-6 text-ink-sub">{o.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink-sub">
            このうち2・4・5・6・7は、無料の自動ツールではほとんど拾えません。人が見て判断します。
          </p>
        </div>
      </section>

      {/* === 受け取るもの3つ === */}
      <section className="border-b border-rule bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-[32px]">受け取るもの、3つ。</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {DELIVERABLES.map((d) => (
              <div key={d.num} className="rounded-lg border border-rule bg-ground p-6">
                <span className="text-[10px] tracking-[0.2em] text-ink-sub">{d.num}</span>
                <h3 className="mt-3 text-base font-semibold text-ink">{d.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-sub">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 進め方 === */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-[32px]">進め方。</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.num} className="rounded-lg border border-rule bg-surface p-6">
                <span className="text-[10px] tracking-[0.2em] text-ink-sub">STEP {s.num}</span>
                <h3 className="mt-3 text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-sub">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 料金 === */}
      <section id="pricing" className="scroll-mt-20 border-b border-rule bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-[32px]">料金。</h2>
          <div className="mt-12 overflow-hidden rounded-lg border border-rule">
            <table className="w-full border-collapse text-sm">
              <tbody>
                {PRICING.map((row, i) => (
                  <tr key={row.menu} className={i % 2 === 0 ? "bg-ground" : "bg-surface"}>
                    <td className="border-b border-rule px-4 py-4 align-top leading-6 text-ink md:px-6">
                      {row.menu}
                    </td>
                    <td className="border-b border-rule px-4 py-4 text-right align-top whitespace-nowrap md:px-6">
                      <span className="text-base font-bold text-ink md:text-lg">{row.price}</span>
                      <br />
                      <span className="text-xs text-ink-sub">{row.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-ink-sub">
            お見積りは無料です。大きさが分からない場合は、フォームからご相談ください。
          </p>
        </div>
      </section>

      {/* === 正直に書くこと === */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-[32px]">正直に、書きます。</h2>
          <ul className="mt-10 space-y-4">
            {HONESTY.map((line, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-7 text-ink-sub">
                <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* === よくある質問 === */}
      <section className="border-b border-rule bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-[32px]">よくある質問。</h2>
          <div className="mt-10 divide-y divide-rule border-t border-b border-rule">
            {FAQ.map((item, i) => (
              <details key={item.q} className="group py-4" open={i === 0 ? undefined : false}>
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-ink md:text-base">
                  {item.q}
                  <span className="ml-4 shrink-0 text-ink-sub transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-ink-sub">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* === 申込フォーム === */}
      <section id="form" className="scroll-mt-20 border-b border-rule">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl font-bold tracking-tight text-ink md:text-[32px]">
            そのツール、点検してから使いませんか。
          </h2>
          <p className="mt-4 text-sm leading-7 text-ink-sub">
            以下のフォームからお申込みください。1営業日以内にご返信します。
          </p>
          <ReviewForm />
        </div>
      </section>

      {/* === 末尾 === */}
      <section className="bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:px-10 md:py-24">
          <p className="text-sm leading-7 text-ink-sub">ご不明な点は、お気軽にお問い合わせください。</p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CtaLink href="#form" position="footer" className={PRIMARY_BUTTON}>
              診断を申し込む（所要3分）
            </CtaLink>
            <a href={BRAND.emailMailto} className="text-xs tracking-wider text-ink-sub hover:text-accent">
              {BRAND.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
