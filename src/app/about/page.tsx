import type { Metadata } from "next";
import StatusBar from "@/components/StatusBar";
import HeroVisual from "@/components/HeroVisual";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { company, history } from "@/data/company";

export const metadata: Metadata = {
  title: "会社概要",
  description:
    "Nebulab合同会社の会社概要、代表メッセージ、沿革、アクセス情報。",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "会社概要 | Nebulab合同会社",
    description:
      "Nebulab合同会社の会社概要、代表メッセージ、沿革、アクセス情報。",
  },
  twitter: {
    title: "会社概要 | Nebulab合同会社",
    description:
      "Nebulab合同会社の会社概要、代表メッセージ、沿革、アクセス情報。",
  },
};

const ceoMessage = [
  "私は成田で生まれ育ちました。\n実家は農家で、長男として地域と共に歩んできました。",
  "フリーランスエンジニアとして独立後、SES契約による\n安定した事業基盤を築く中で、技術を地域社会の実課題と\n結びつけたいという想いが年々強くなりました。",
  "成田空港という世界的インフラがありながら、地域の知的生産活動\nの拠点が少ないこと。地域の小規模事業者がIT化で機会を逸している\nこと。働き方改革の中でサードプレイスのニーズが高まっていること。",
  "これらの課題に対し、単一の事業ではなく、コワーキング・EC・\n受託開発・地域情報発信を統合的に展開することで、小さくても\n確かな循環を生み出せると考えています。",
  "「小さく始めて、無限に広がる」\nこれが、Nebulabの掲げる理念です。",
];

const companyInfoRows: { label: string; value: string }[] = [
  { label: "商号", value: company.name },
  { label: "英文表記", value: company.nameEn },
  { label: "所在地", value: company.address.full },
  { label: "代表社員", value: `${company.ceo}（${company.ceoEn}）` },
  { label: "設立年月日", value: company.foundedDate },
  { label: "資本金", value: company.capital },
  { label: "事業年度", value: company.fiscalYear },
];

const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  "千葉県成田市花崎町"
)}&output=embed`;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  alternateName: [company.nameEn, company.shortName],
  url: company.website,
  email: company.email,
  founder: {
    "@type": "Person",
    name: company.ceo,
    alternateName: company.ceoEn,
  },
  foundingDate: "2026-05-01",
  address: {
    "@type": "PostalAddress",
    postalCode: company.address.zip,
    addressCountry: "JP",
    addressRegion: company.address.prefecture,
    addressLocality: company.address.city,
    streetAddress: company.address.street,
  },
  sameAs: ["https://www.nrt-loft.jp", "https://www.narita-guide.com"],
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24 md:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      {/* ── Page Header ── */}
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <StatusBar
            items={[{ label: "ABOUT:NEBULAB", pulse: true }]}
            className="mb-10"
          />
          <h1 className="font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl">
            会社概要
          </h1>
          <p className="mt-4 font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
            ABOUT
          </p>
        </div>
        <div className="hidden md:block">
          <HeroVisual seed={11} className="h-[240px] w-[240px] lg:h-[300px] lg:w-[300px]" />
        </div>
      </div>      {/* ── 代表メッセージ ── */}
      <section
        id="message"
        className="mt-12 border-t border-cyber-border-dim pt-12"
      >
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Message
            </span>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-14 lg:grid-cols-[340px_1fr]">
          <ScrollReveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-cyber-border-dim">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about/ceo-portrait.svg"
                alt={`${company.ceo}(${company.ceoEn})`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-xl font-medium tracking-wide text-cyber-text md:text-2xl">
              代表メッセージ
            </h2>
            <div className="mt-8 space-y-6 text-sm leading-[2.1] text-cyber-text-secondary md:text-base">
              {ceoMessage.map((paragraph, i) => (
                <p key={i} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-10 font-mono text-xs tracking-wider text-cyber-text-muted">
              {company.name} 代表社員 {company.ceo}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── COMPANY INFORMATION ── */}
      <section
        id="company"
        className="mt-16 border-t border-cyber-border-dim pt-12"
      >
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Company Information
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <dl className="divide-y divide-cyber-border-dim">
            {companyInfoRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 py-5 md:grid-cols-[200px_1fr] md:gap-8"
              >
                <dt className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyber-text-muted">
                  {row.label}
                </dt>
                <dd className="text-sm leading-7 text-cyber-text md:text-base">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </section>

      {/* ── HISTORY ── */}
      <section className="mt-16 border-t border-cyber-border-dim pt-12">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              History
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ol className="space-y-6">
            {history.map((entry, i) => (
              <li
                key={i}
                className="grid gap-2 md:grid-cols-[160px_1fr] md:gap-8"
              >
                <span className="font-mono text-xs tracking-wider text-cyber-accent">
                  {entry.year}
                  {entry.month
                    ? `.${String(entry.month).padStart(2, "0")}`
                    : ""}
                </span>
                <span className="text-sm leading-7 text-cyber-text-secondary md:text-base">
                  {entry.event}
                </span>
              </li>
            ))}
          </ol>
        </ScrollReveal>
      </section>

      {/* ── ACCESS ── */}
      <section className="mt-16 border-t border-cyber-border-dim pt-12">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Access
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-12">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyber-text-muted">
                Address
              </p>
              <p className="mt-3 text-sm leading-7 text-cyber-text md:text-base">
                {company.address.full}
              </p>
              <p className="mt-6 font-mono text-[10px] tracking-[0.3em] uppercase text-cyber-text-muted">
                Contact
              </p>
              <p className="mt-3 font-mono text-sm text-cyber-accent">
                <a href={`mailto:${company.email}`} className="hover:underline">
                  {company.email}
                </a>
              </p>
            </div>
            <div className="relative overflow-hidden border border-cyber-border-dim">
              <iframe
                src={mapsEmbedSrc}
                title="Nebulab合同会社 所在地"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
