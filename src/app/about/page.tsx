import type { Metadata } from "next";
import SectionHeading from "@/components/decor/SectionHeading";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { company, history, businessAreas } from "@/data/company";

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

/**
 * 代表メッセージ。Phase 1 で「コワーキング」「サードプレイス」を削除したうえで、
 * Phase 4 で新しい事業構成(受託開発 / 内製化支援 / 自社プロダクト / 地域のIT支援)
 * に合わせて書き直したもの(指示書 §6)。
 */
const ceoMessage = [
  "私は成田で生まれ育ちました。\n実家は農家で、長男として地域と共に歩んできました。",
  "フリーランスエンジニアとして独立し、開発の現場で経験を重ねる中で、\n技術を地域社会の実課題と結びつけたいという想いが年々\n強くなりました。",
  "成田空港という世界的インフラがありながら、地域の小規模事業者が\nIT化で機会を逸していること。作り手が少ないために、身近な課題ほど\n手つかずのまま残されていること。",
  "だから、受託開発と内製化支援に加えて、自分たちのプロダクトを\nつくり、日々使い、運用しています。自分で使い続けているからこそ、\nつくった後に何が起きるかを具体的にお話しできます。",
  "設計だけでも実装だけでもなく、運用して初めて分かることまで\n含めてお渡しする。それがNebulabの提供価値だと考えています。",
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
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-28 md:px-12 lg:px-16 md:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      {/* ── Page Header ── */}
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <SectionHeading
            level="h1"
            label="ABOUT"
            heading="会社概要"
            color="teal"
          />
        </div>
        <div className="hidden md:block">
        </div>
      </div>      {/* ── 代表メッセージ ── */}
      <section
        id="message"
        className="mt-12 border-t border-rule pt-12"
      >
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              Message
            </span>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-14 lg:grid-cols-[340px_1fr]">
          <ScrollReveal>
            <div className="relative aspect-[4/5] overflow-hidden border border-rule">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/about/ceo-photo.png"
                alt={`${company.ceo}(${company.ceoEn})`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-xl font-medium tracking-wide text-ink md:text-2xl">
              代表メッセージ
            </h2>
            <div className="mt-8 space-y-6 text-sm leading-[2.1] text-ink-sub md:text-base">
              {ceoMessage.map((paragraph, i) => (
                <p key={i} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-10 text-xs tracking-wider text-ink-sub">
              {company.name} 代表社員 {company.ceo}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 事業領域(/services の4分類と対応) ── */}
      <section
        id="business"
        className="mt-16 border-t border-rule pt-12"
      >
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              Business
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ul className="border-t border-rule">
            {businessAreas.map((area) => (
              <li key={area.code} className="border-b border-rule">
                <Link
                  href={`/services#${area.id}`}
                  className="group grid grid-cols-[auto_1fr] items-baseline gap-6 py-6 md:gap-10"
                >
                  <span className="font-display text-xl font-extralight tracking-[0.08em] text-ink-sub transition-colors group-hover:text-ink-sub">
                    {area.code}
                  </span>
                  <span className="font-display text-base font-normal tracking-[0.06em] text-ink">
                    {area.nameJa}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </section>

      {/* ── COMPANY INFORMATION ── */}
      <section
        id="company"
        className="mt-16 border-t border-rule pt-12"
      >
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              Company Information
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <dl className="divide-y divide-rule">
            {companyInfoRows.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 py-5 md:grid-cols-[200px_1fr] md:gap-8"
              >
                <dt className="text-[10px] tracking-[0.3em] uppercase text-ink-sub">
                  {row.label}
                </dt>
                <dd className="text-sm leading-7 text-ink md:text-base">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </section>

      {/* ── HISTORY ── */}
      <section className="mt-16 border-t border-rule pt-12">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink-sub">
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
                <span className="text-xs tracking-wider text-ink-sub">
                  {entry.year}
                  {entry.month
                    ? `.${String(entry.month).padStart(2, "0")}`
                    : ""}
                </span>
                <span className="text-sm leading-7 text-ink-sub md:text-base">
                  {entry.event}
                </span>
              </li>
            ))}
          </ol>
        </ScrollReveal>
      </section>

      {/* ── ACCESS ── */}
      <section className="mt-16 border-t border-rule pt-12">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              Access
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-12">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-ink-sub">
                Address
              </p>
              <p className="mt-3 text-sm leading-7 text-ink md:text-base">
                {company.address.full}
              </p>
              <p className="mt-6 text-[10px] tracking-[0.3em] uppercase text-ink-sub">
                Contact
              </p>
              <p className="mt-3 text-sm text-ink-sub">
                <a href={`mailto:${company.email}`} className="hover:underline">
                  {company.email}
                </a>
              </p>
            </div>
            <div className="relative overflow-hidden border border-rule">
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
