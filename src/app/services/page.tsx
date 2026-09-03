import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "Nebulab合同会社の事業内容 — 受託開発、内製化支援、自社プロダクト開発、地域のIT支援。設計から運用まで一貫して手がけます。",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "事業内容 | Nebulab合同会社",
    description:
      "受託開発、内製化支援、自社プロダクト開発、地域のIT支援。設計から運用まで一貫して手がけます。",
  },
  twitter: {
    title: "事業内容 | Nebulab合同会社",
    description: "受託開発、内製化支援、自社プロダクト開発、地域のIT支援。",
  },
};

type Block = { heading: string; items: string[] };
type Area = {
  code: string;
  id: string;
  name: string;
  description: string;
  body: string;
  blocks: Block[];
  cta: { label: string; href: string };
};

/**
 * トップページの4分類(指示書 §5.4)に合わせて再編(§6)。
 *
 * NRT LOFT はここから外している。受注する事業ではなく自社メディアであり、
 * PROJECTS 側でのみ扱うため。
 * 04「地域のIT支援」は削除せず、最下段に置くことで優先度を表現する。
 */
const areas: Area[] = [
  {
    code: "01",
    id: "development",
    name: "受託開発",
    description: "業務システムやWebサービスの設計・開発・運用までワンストップで",
    body: "要件の整理から設計・実装・リリース後の運用まで、一貫して引き受けます。既存クライアントへのSES契約による開発リソース提供と、パートナー企業経由での受託開発の双方を手がけています。",
    blocks: [
      {
        heading: "対応領域",
        items: [
          "Web系システム開発(Next.js, TypeScript, Python 等)",
          "AI / LLM 活用システムの設計・開発",
          "クラウドインフラ構築・運用(AWS, Vercel 等)",
          "プロジェクトマネジメント支援",
          "技術コンサルティング",
        ],
      },
    ],
    cta: { label: "相談する", href: "/contact" },
  },
  {
    code: "02",
    id: "enablement",
    name: "内製化支援",
    description: "技術力向上や開発プロセスの整備を通じて、チームの自走をサポート",
    body: "開発を丸ごと請け負うのではなく、お客様のチームが自分たちで作れる状態を目指します。現状の進め方を一緒に見直し、必要なところに伴走します。",
    blocks: [
      {
        heading: "支援の内容",
        items: [
          "開発プロセスの整備",
          "技術選定と設計方針の策定支援",
          "チームの技術力向上に向けた伴走",
        ],
      },
    ],
    cta: { label: "相談する", href: "/contact" },
  },
  {
    code: "03",
    id: "products",
    name: "自社プロダクト",
    description: "自ら課題を見つけ、プロダクトを開発・運用。得た知見を還元",
    body: "自分たちが欲しいものをつくり、実際に使い、運用しています。運用して初めて分かることを、受託開発や内製化支援の現場に還元しています。",
    blocks: [
      {
        heading: "公開中",
        items: [
          "みどりっこ — 植物の記録を残す iOS アプリ",
          "ガレージ手帳 — バイクの点検・整備・ツーリング記録の iOS アプリ",
        ],
      },
      {
        heading: "開発中",
        items: [
          "Navi — 能動型AIナビゲーター(プロトタイプ)",
          "SuperMindMap — 思考の構造可視化(R&D)",
          "NAJIMI — デスクまわりのオリジナルブランド(2026年秋 発売予定)",
        ],
      },
    ],
    cta: { label: "プロダクトを見る", href: "/projects" },
  },
  {
    code: "04",
    id: "local",
    name: "地域のIT支援",
    description: "成田市を中心に、中小企業や地域団体のIT活用・DXを支援",
    body: "「これって誰に聞けばいいの?」という段階からご相談いただけます。成田で生まれ育った代表が直接対応します。",
    blocks: [
      {
        heading: "取り組み",
        items: [
          "narita-guide.com — 成田の観光・生活情報メディアの運営",
          "小規模事業者へのIT支援 — HP制作・運用、業務IT全般のサポート",
          "HP お試し公開プラン — 事例化のご協力と引き換えに1ページを制作",
        ],
      },
    ],
    cta: { label: "HP お試し公開プランを見る", href: "/hp-trial" },
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-cyber-border-dim">
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40">
          <p className="font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
            SERVICES
          </p>
          <h1 className="mt-8 font-display text-[1.4rem] font-light leading-[1.8] tracking-[0.06em] text-cyber-text md:text-[1.7rem]">
            事業内容
          </h1>
          <p className="mt-8 max-w-lg text-sm leading-[2.1] text-cyber-text-secondary">
            {"4つの事業を、それぞれ独立させつつ相互に補完する形で展開しています。自社でつくって運用した経験を、受託や支援の現場に持ち込むのが基本の考え方です。"}
          </p>
        </div>
      </section>

      {areas.map((area) => (
        <section
          key={area.code}
          id={area.id}
          className="border-b border-cyber-border-dim py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="grid gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-16">
              <span className="font-display text-3xl font-extralight tracking-[0.08em] text-cyber-text-muted md:text-4xl">
                {area.code}
              </span>

              <div>
                <h2 className="font-display text-lg font-normal tracking-[0.06em] text-cyber-text md:text-xl">
                  {area.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-cyber-text-secondary">
                  {area.description}
                </p>
                <p className="mt-8 max-w-2xl text-sm leading-[2.1] text-cyber-text-secondary">
                  {area.body}
                </p>

                <div className="mt-12 grid gap-10 md:grid-cols-2">
                  {area.blocks.map((block) => (
                    <div key={block.heading}>
                      <p className="font-mono text-[9px] tracking-[0.3em] text-cyber-text-muted">
                        {block.heading}
                      </p>
                      <ul className="mt-5 space-y-3">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm leading-7 text-cyber-text-secondary"
                          >
                            <span className="mt-[0.85em] block h-px w-3 shrink-0 bg-rule" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <Link
                    href={area.cta.href}
                    className="font-mono text-[10px] tracking-[0.25em] text-cyber-text-secondary transition-colors hover:text-cyber-text"
                  >
                    {area.cta.label} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
