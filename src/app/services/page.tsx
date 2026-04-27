import type { Metadata } from "next";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import HeroVisual from "@/components/HeroVisual";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "事業内容 | Nebulab合同会社",
  description:
    "Nebulab合同会社の4つの事業領域 — SES・受託開発、自社AIプロダクト、地域 × テクノロジー、オリジナルブランド。",
};

type AreaBlock = {
  heading: string;
  items: string[];
};

type AreaCTA = {
  label: string;
  href: string;
  external?: boolean;
};

type Area = {
  code: string;
  name: string;
  nameJa: string;
  description: string;
  blocks: AreaBlock[];
  note?: string;
  cta: AreaCTA;
  imageUrl: string;
};

const areas: Area[] = [
  {
    code: "01",
    name: "DEVELOPMENT",
    nameJa: "SES・受託開発",
    description:
      "既存クライアントへのSES契約による安定した開発リソース提供と、パートナー企業経由での受託開発案件を展開しています。",
    blocks: [
      {
        heading: "対応領域",
        items: [
          "Web系システム開発(Next.js, TypeScript, Python等)",
          "AI/LLM活用システム設計・開発",
          "クラウドインフラ構築・運用(AWS, Vercel等)",
          "プロジェクトマネジメント支援",
          "技術コンサルティング",
        ],
      },
    ],
    cta: { label: "お問い合わせ", href: "/contact" },
    imageUrl: "/services/development.png",
  },
  {
    code: "02",
    name: "LOCAL × TECH",
    nameJa: "地域 × テクノロジー",
    description:
      "成田を拠点に、地域資源とテクノロジーを結ぶ事業を展開しています。",
    blocks: [
      {
        heading: "プロジェクト",
        items: [
          "NRT-LOFT : 成田の3席限定コワーキングスペース",
          "narita-guide.com : 成田の観光・生活情報メディア",
          "農業IT支援 : 地域農家のEC・販路開拓支援",
        ],
      },
    ],
    note: "「地域に住むからこそできる事業」をテーマに、代表者の地縁を活かした活動を継続しています。",
    cta: {
      label: "NRT-LOFT を見る",
      href: "https://www.nrt-loft.jp",
      external: true,
    },
    imageUrl: "/services/local-tech.png",
  },
  {
    code: "03",
    name: "EC BRAND",
    nameJa: "オリジナルブランド「NAJIMI」",
    description:
      "デスクワークの実用性と質感を両立させるオリジナルブランド「NAJIMI」を運営しています。",
    blocks: [
      {
        heading: "第一弾商品",
        items: [
          "PUレザーリストレスト(2026年秋発売予定)",
          "日本刀の柄(つかまき)から着想を得たデザイン",
          "国産品質、長く使える設計",
        ],
      },
      {
        heading: "販売チャネル",
        items: ["未定"],
      },
    ],
    cta: { label: "More", href: "/projects" },
    imageUrl: "/services/ec-brand.png",
  },
  {
    code: "04",
    name: "AI PRODUCTS",
    nameJa: "自社AIプロダクト",
    description:
      "「AIに質問する」のではなく「AIが動く」プロダクトを開発。人間の意思決定を加速させるツール群を設計・実装しています。",
    blocks: [
      {
        heading: "プロダクト",
        items: [
          "Navi : 能動型AIナビゲーター(プロトタイプ)",
          "SuperMindMap : 思考の構造可視化AI(R&D)",
          "その他、Lab部門で複数プロジェクト進行中",
        ],
      },
      {
        heading: "特徴",
        items: [
          "受動ではなく能動 - AIが状況を観察し先に動く",
          "自律ではなく拡張 - 最終判断は必ず人間が行う",
          "高速反復 - 小さく作り、試し、壊し、また作る",
        ],
      },
    ],
    cta: { label: "Lab を見る", href: "/lab" },
    imageUrl: "/services/ai-products.png",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24 md:px-10">
      {/* ── Page Header ── */}
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <StatusBar
            items={[{ label: `SERVICES:${areas.length}LINES`, pulse: true }]}
            className="mb-10"
          />
          <h1 className="font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl">
            事業内容
          </h1>
          <p className="mt-4 font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
            SERVICES
          </p>
          <p className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-cyber-text-secondary md:text-base">
            Nebulabは、4つの事業領域を統合的に展開しています。
            <br />
            それぞれが独立しながら、相互に補完しあう構造です。
          </p>
        </div>
        <div className="hidden md:block">
          <HeroVisual seed={23} className="h-[360px] w-[360px] lg:h-[440px] lg:w-[440px]" />
        </div>
      </div>

      <div className="vertical-divider mx-auto mt-16" />

      {/* ── 4 Business Areas ── */}
      <div className="mt-16">
        {areas.map((area, idx) => (
          <section
            key={area.code}
            id={area.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            className={`border-t border-cyber-border-dim pt-16 ${
              idx > 0 ? "mt-20" : ""
            }`}
          >
            <ScrollReveal>
              <div className="border border-cyber-border-dim">
                {/* Header with background image */}
                <div className="relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={area.imageUrl}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover opacity-55"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyber-bg/95 via-cyber-bg/70 to-cyber-bg/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/85 via-cyber-bg/30 to-transparent" />

                  <div className="relative z-10 px-6 py-14 md:px-10 md:py-20">
                    <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                      <span className="font-display text-5xl font-normal text-cyber-accent md:text-6xl">
                        {area.code}
                      </span>
                      <span className="font-mono text-xs tracking-[0.4em] text-cyber-text-muted">
                        / {area.name}
                      </span>
                    </div>
                    <h2 className="mt-4 text-xl font-medium tracking-wide text-cyber-text md:text-2xl">
                      {area.nameJa}
                    </h2>
                    <p className="mt-6 max-w-3xl text-sm leading-8 text-cyber-text-secondary md:text-base">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* Body (solid black fill) */}
                <div className="bg-cyber-bg px-6 py-12 md:px-10 md:py-14">
                  <div className="grid gap-10 md:grid-cols-2">
                    {area.blocks.map((block, bi) => (
                      <ScrollReveal key={bi} delay={0.1 + bi * 0.08}>
                        <p className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-cyber-accent">
                          {block.heading}
                        </p>
                        <ul className="mt-5 space-y-3 text-sm leading-7 text-cyber-text-secondary md:text-base">
                          {block.items.map((item, ii) => (
                            <li key={ii} className="flex gap-3">
                              <span className="mt-[0.65em] block h-px w-3 shrink-0 bg-cyber-text-muted" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </ScrollReveal>
                    ))}
                  </div>

                  {area.note && (
                    <ScrollReveal delay={0.2}>
                      <p className="mt-10 max-w-3xl text-sm leading-8 text-cyber-text-secondary md:text-base">
                        {area.note}
                      </p>
                    </ScrollReveal>
                  )}

                  <ScrollReveal delay={0.25}>
                    <div className="mt-12">
                      {area.cta.external ? (
                        <a
                          href={area.cta.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-cyber-accent transition-colors hover:text-white"
                        >
                          {area.cta.label} ↗
                        </a>
                      ) : (
                        <Link
                          href={area.cta.href}
                          className="inline-flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-cyber-accent transition-colors hover:text-white"
                        >
                          {area.cta.label} →
                        </Link>
                      )}
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
          </section>
        ))}
      </div>
    </main>
  );
}
