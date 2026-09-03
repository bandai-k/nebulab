import type { Metadata } from "next";
import { STATUS_TONE } from "@/lib/statusStyle";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BRAND } from "@/constants/brand";

export const metadata: Metadata = {
  title: "HP お試し公開プラン",
  description:
    "最低 ¥0 から始められる、Nebulab合同会社の HP お試し公開プラン。事例化のご協力と引き換えに、1 ページの Web ページを制作してお届けします。先着 10 社・成田と近隣の事業者さま限定。",
  alternates: { canonical: "/hp-trial" },
  openGraph: {
    url: "/hp-trial",
    title: "HP お試し公開プラン — 最低 ¥0 から | Nebulab",
    description:
      "事例化のご協力と引き換えに、1 ページの Web ページを無料で制作。先着 10 社・地域限定の独立プランです。",
  },
  twitter: {
    title: "HP お試し公開プラン — 最低 ¥0 から | Nebulab",
    description: "事例化のご協力と引き換えに、1 ページの Web ページを無料で制作。",
  },
};

const reasons = [
  {
    num: "01",
    title: "地域での実績を、まず作りたい",
    body: "Nebulab合同会社は 2026 年 5 月設立。HP 制作の受注は「過去にどんなサイトを作ったか」が決め手になりますが、設立直後の弊社にはまだその実績がありません。最初の数社のサイトを、有料案件と同じ品質基準で作らせてください。",
  },
  {
    num: "02",
    title: "nebulab.jp に事例として並べたい",
    body: "制作したサイトを nebulab.jp/pt/<お店の名前> 配下のサブパスで公開し、Nebulab の事例集として並べさせていただきます。お客様の「お声」も短いインタビュー形式で掲載させてください。",
  },
  {
    num: "03",
    title: "長くお付き合いしたい",
    body: "無料で公開した後、運用が必要になったら HP 保守 Light(¥10,000/月)等で継続をご相談いただけたら嬉しいです。もちろん強制ではありません。「気に入ったから引き続き」となるよう、無料でも手は抜きません。",
  },
];

const includes = [
  "1 ページ完結型のサイト 1 つ(縦長スクロール)",
  "スマートフォン完全対応",
  "連絡導線(電話 / SNS / メールリンク等の設置)",
  "Google マップ埋め込み",
  "お客様提供写真 3 点まで無料で編集・配置(4 点目以降は別途)",
  "ヒアリング 30 分・修正対応 1 回",
  "サブパス公開: nebulab.jp/pt/<お店の名前>",
  "SSL 対応(常時 HTTPS)",
  "公開後 30 日間の軽微修正(無料)",
];

const requests = [
  {
    badge: "REQUIRED",
    title: "事例として nebulab.jp に掲載させていただく",
    body: "サイト URL・店舗写真・サービス概要を nebulab.jp/showcase/ に事例として並べます。公開前にプレビュー確認いただきます。",
  },
  {
    badge: "REQUIRED",
    title: "公開後にお客様の声インタビュー(30 分)",
    body: "「なぜ Nebulab に依頼したか」「制作中の体験」「使ってみての変化」を 30 分でお話しいただき、要約を事例ページに掲載させていただきます。",
  },
  {
    badge: "OPTIONAL",
    title: "知り合いの事業者を 1 名ご紹介(任意)",
    body: "もし「使ってみて良かった」と感じていただけたら、HP が必要そうなご友人・取引先を 1 名ご紹介いただけると大変助かります。義務ではありません。",
  },
];

const conditions = [
  ["対象エリア", "成田市・印西市・佐倉市・八街市・四街道市の事業者さま(その他近隣も応相談)"],
  ["対象事業者", "法人 / 個人事業主(開業届をお持ちの方)。趣味目的のサイトは対象外"],
  ["事業内容", "公序良俗に反しないこと"],
  ["HP 状況", "原則、現在 HP をお持ちでない方"],
  ["募集数", "先着 10 社(2026 年 12 月末まで / 上限到達時点で募集終了)"],
  ["制作期間", "ヒアリングから公開まで 2-3 週間"],
];

const flow = [
  { num: "01", title: "お問い合わせ", detail: "メール / LINE\n(2 営業日以内に返信)" },
  { num: "02", title: "簡易ヒアリング", detail: "30 分の対面 or\nオンライン面談" },
  { num: "03", title: "採択ご連絡", detail: "条件確認後 1 週間以内\nに可否をお伝え" },
  { num: "04", title: "制作開始 → 公開", detail: "2-3 週間で公開\n事例掲載 → 運用へ" },
];

export default function HpTrialPage() {
  return (
    <main>
      {/* === Hero === */}
      <section className="relative overflow-hidden border-b border-rule">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ground/40 to-cyber-bg pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">

          <p className="text-[10px] tracking-[0.4em] uppercase text-ink-sub">
            無料 / HP お試し公開プラン
          </p>
          <h1 className="mt-6 font-display text-4xl font-normal leading-[1.3] tracking-wide md:text-5xl lg:text-6xl">
            ホームページを、
            <br />
            持ちませんか?
          </h1>

          <div className="mt-10 flex items-baseline gap-4 md:gap-6">
            <span className="text-xs tracking-[0.25em] text-ink-sub">
              最低
            </span>
            <span className="font-display text-6xl font-normal text-ink md:text-7xl">
              ¥0
              <sup className="ml-1 text-xs text-ink-sub">※</sup>
            </span>
            <span className="text-xs tracking-[0.25em] text-ink-sub">
              から始められます
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-[2.1] text-ink-sub md:text-base">
            Nebulab合同会社は 2026 年 5 月に成田で設立されたばかり。
            まず「実際に動いている事例」を必要としています。
            事例化のご協力と引き換えに、1 ページの Web ページを無料でお作りします。
            先着 10 社・成田と近隣の事業者さま限定の期間限定プランです。
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="btn btn-primary"
            >
              申込・相談する →
            </Link>
            <a
              href="/docs/hp-trial"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-ghost"
            >
              詳細資料(PDF 風)↗
            </a>
            <Link
              href="/showcase"
              className="text-xs tracking-wider text-ink-sub transition-colors hover:text-ink-sub"
            >
              事例を見る →
            </Link>
          </div>

          <p className="mt-6 text-[10px] tracking-[0.2em] text-ink-sub">
            ※ 条件あり(下記の応募条件・対価をご確認ください)
          </p>
        </div>
      </section>

      {/* === なぜ無料か === */}
      <section className="section-divider">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
          <ScrollReveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              Why Free
            </p>
            <h2 className="mt-6 font-display text-3xl leading-[1.4] tracking-wide md:text-4xl">
              「無料」には、Nebulab 側にも
              <br />
              はっきりした理由があります。
            </h2>
            <p className="mt-8 max-w-2xl text-sm leading-[2.1] text-ink-sub md:text-base">
              無料で出す以上、その理由を曖昧にせず、3 つの本音をはっきり書きます。
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.num} delay={i * 0.08}>
                <div className="panel flex h-full flex-col p-6 md:p-8">
                  <span className="text-[10px] tracking-[0.3em] text-ink-sub">
                    REASON {r.num}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-normal leading-tight tracking-wide text-ink md:text-2xl">
                    {r.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-ink-sub">
                    {r.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === 何が手に入るか === */}
      <section className="section-divider section-tinted">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
          <ScrollReveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              What You Get
            </p>
            <h2 className="mt-6 font-display text-3xl leading-[1.4] tracking-wide md:text-4xl">
              何が、手に入るか。
            </h2>
            <p className="mt-8 max-w-2xl text-sm leading-[2.1] text-ink-sub md:text-base">
              制作期間は 2-3 週間(ヒアリングから公開まで)。
              Nebulab 管理のサーバー・サブパスで公開するため、お客様側でのドメイン・サーバー契約は不要です。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-12 border border-rule bg-surface p-8 md:p-10">
              <p className="text-[10px] tracking-[0.3em] text-ink-sub mb-6">
                含まれるもの(無料)
              </p>
              <ul className="grid gap-3 md:grid-cols-2 md:gap-x-8">
                {includes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm leading-7 text-ink"
                  >
                    <span className="mt-2 inline-block size-1 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-8 border-l-2 border-accent bg-ground/60 p-5 md:p-6">
              <p className="text-sm leading-7 text-ink-sub">
                <strong className="text-ink">
                  HP Superlight ¥30,000 との違い:
                </strong>{" "}
                Superlight は<strong className="text-ink"> 独自ドメイン</strong>
                (例: yourshop.com)での公開、写真も少し多く、修正も 2 回。
                お試し公開プランは
                <strong className="text-ink"> nebulab.jp サブパス</strong>
                での公開、つまり「住所が Nebulab 内」になる代わりに無料、というトレードオフです。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === お願いしたいこと === */}
      <section className="section-divider">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
          <ScrollReveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              In Exchange
            </p>
            <h2 className="mt-6 font-display text-3xl leading-[1.4] tracking-wide md:text-4xl">
              お客様にお願いしたいこと。
            </h2>
            <p className="mt-8 max-w-2xl text-sm leading-[2.1] text-ink-sub md:text-base">
              本プランの「対価」として、以下にご協力いただきます。
            </p>
          </ScrollReveal>

          <div className="mt-12 space-y-5">
            {requests.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex flex-col gap-4 border border-rule bg-surface p-6 md:flex-row md:items-start md:gap-6 md:p-8">
                  <span
                    className={`inline-flex shrink-0 self-start rounded-sm px-3 py-1 text-[10px] tracking-[0.25em] ${
                      r.badge === "REQUIRED"
                        ? "bg-accent/85 text-white"
                        : `border ${STATUS_TONE.live}`
                    }`}
                  >
                    {r.badge}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-normal leading-tight tracking-wide text-ink md:text-xl">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-ink-sub">
                      {r.body}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === 応募条件 === */}
      <section className="section-divider section-tinted">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
          <ScrollReveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              Terms
            </p>
            <h2 className="mt-6 font-display text-3xl leading-[1.4] tracking-wide md:text-4xl">
              ご応募の条件。
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <dl className="mt-12 grid gap-x-10 gap-y-0 border-t border-rule md:grid-cols-[180px_1fr]">
              {conditions.map(([label, value], i) => (
                <div key={i} className="contents">
                  <dt className="border-b border-rule py-4 text-[10px] tracking-[0.25em] text-ink-sub md:py-5">
                    {label}
                  </dt>
                  <dd className="border-b border-rule py-4 text-sm leading-7 text-ink md:py-5">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-8 border-l-2 border-accent bg-ground/60 p-5 md:p-6">
              <p className="text-sm leading-7 text-ink-sub">
                <strong className="text-ink">採択について:</strong>
                先着順を基本としますが、事業内容・地域・公開後の継続可能性などを踏まえ Nebulab 側で最終判断をさせていただきます。お断りする場合もある旨、あらかじめご了承ください。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === 申込の流れ === */}
      <section className="section-divider">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
          <ScrollReveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              How to Apply
            </p>
            <h2 className="mt-6 font-display text-3xl leading-[1.4] tracking-wide md:text-4xl">
              お申込みの流れ。
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-4 md:gap-6">
            {flow.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.08}>
                <div className="relative h-full border border-rule bg-surface p-6 md:p-7">
                  <span className="text-[10px] tracking-[0.3em] text-ink-sub">
                    STEP {step.num}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-normal tracking-wide text-ink md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 whitespace-pre-line text-xs leading-6 text-ink-sub">
                    {step.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* === Showcase 導線 === */}
      <section className="section-divider section-tinted">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
          <ScrollReveal>
            <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-ink-sub">
                  Showcase
                </p>
                <h2 className="mt-6 font-display text-3xl leading-[1.4] tracking-wide md:text-4xl">
                  すでに、公開されている事例。
                </h2>
                <p className="mt-8 max-w-xl text-sm leading-[2.1] text-ink-sub md:text-base">
                  プランで実際に作ったサイトは、Web ページとしてそのままご覧いただけます。
                  デザイン・構成・操作感をご確認のうえ、お申込みをご検討ください。
                </p>
                <Link
                  href="/showcase"
                  className="btn btn-ghost mt-8"
                >
                  事例集を見る →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === CTA === */}
      <section className="section-divider">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-10 md:py-28">
          <ScrollReveal>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              Apply Now
            </p>
            <h2 className="mt-8 font-display text-2xl leading-10 tracking-wide text-ink md:text-3xl">
              一緒に &ldquo;最初の事例&rdquo; を、
              <br />
              作ってくださる方へ。
            </h2>
            <p className="mt-8 text-sm leading-[2.1] text-ink-sub md:text-base">
              このプランが合いそうかどうか、30 分の無料相談で一緒に見極めます。
              「HP お試し公開プランの件」とお伝えください。
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn btn-primary"
              >
                申込・相談する →
              </Link>
              <a
                href={`mailto:${BRAND.email}`}
                className="text-xs tracking-wider text-ink-sub transition-colors hover:text-ink-sub"
              >
                {BRAND.email}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
