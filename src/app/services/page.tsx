import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/decor/SectionHeading";
import { NUMBER_ASSETS } from "@/components/decor/brushAssets";
import ServiceCta, {
  type ServiceCtaVariant,
} from "@/components/services/ServiceCta";
import ServicesHeaderOffset from "@/components/services/ServicesHeaderOffset";
import ScrollGauge from "@/components/services/ScrollGauge";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbLd = breadcrumbJsonLd([{ name: "事業内容", path: "/services" }]);

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

/**
 * セクションごとの水彩背景(依頼により新規追加)。透明PNG。
 * 01 ピンク/コーラル、02 ゴールド/ボタニカル、03 シアン/湖、
 * 04 ラベンダー/成田の風景、というテーマ配色。
 *
 * 番号素材(NUMBER_ASSETS)は増やさず、既存のものをそのまま使う。
 * 縦位置(anchor)をセクションごとに変え、4つ並んでも単調にならないようにする。
 */
const AREA_BG: Record<
  string,
  { src: string; width: number; height: number; anchor: "top" | "center" | "bottom" }
> = {
  "01": {
    src: "/services/services-bg-01.webp",
    width: 1415,
    height: 1081,
    anchor: "top",
  },
  "02": {
    src: "/services/services-bg-02.webp",
    width: 1448,
    height: 1066,
    anchor: "bottom",
  },
  "03": {
    src: "/services/services-bg-03.webp",
    width: 1448,
    height: 1067,
    anchor: "center",
  },
  "04": {
    src: "/services/services-bg-04.webp",
    width: 1448,
    height: 1086,
    anchor: "top",
  },
};

/*
 * 上下の区切り線(border-b)に水彩が触れないよう、セクション端から
 * 一定の余白(inset)を空けてから anchor する。
 */
const ANCHOR_CLASS: Record<string, string> = {
  top: "top-8 md:top-10",
  center: "top-1/2 -translate-y-1/2",
  bottom: "bottom-8 md:bottom-10",
};

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ServicesHeaderOffset />
      <section className="border-b border-rule">
        <div className="mx-auto max-w-6xl px-6 pb-14 pt-32 md:px-12 lg:px-16 md:pb-16 md:pt-40">
          <SectionHeading
            level="h1"
            label="SERVICES"
            heading="事業内容"
            color="amber"
            headingSize="lg"
            lead="4つの事業を、それぞれ独立させつつ相互に補完する形で展開しています。自社でつくって運用した経験を、受託や支援の現場に持ち込むのが基本の考え方です。"
          />
          <div className="mt-6 h-px w-16 bg-rule" />
        </div>
      </section>

      {/*
        スクロールロック(依頼により追加)。.services-scroller が唯一の
        スナップコンテナで、各セクションはビューポート高さぶん占有する。
        中身が長ければセクション自身が内側スクロールし、末尾まで来て
        初めて次のセクションへ移る。詳細は globals.css を参照。
      */}
      <div className="services-scroller">
        {areas.map((area, i) => {
          const bg = AREA_BG[area.code];
          const hasNext = i < areas.length - 1;

          return (
            <section
              key={area.code}
              id={area.id}
              className="services-section"
            >
              {/*
                セクション固有の水彩背景。sticky + height:0 で画面に対して
                静止させ(スクロールしない)、本文には重ねず可読性優先で
                opacity を抑える。モバイルでは非表示。
              */}
              <div className="services-section-bg-sticky" aria-hidden="true">
                <div
                  className={`pointer-events-none absolute right-0 ${ANCHOR_CLASS[bg.anchor]} hidden aspect-[4/3] w-[46vw] max-w-[680px] opacity-60 md:block`}
                >
                  <Image
                    src={bg.src}
                    alt=""
                    fill
                    loading="eager"
                    sizes="680px"
                    className="object-contain object-right"
                  />
                </div>

                {hasNext && <ScrollGauge />}
              </div>

              <div className="services-section-content mx-auto max-w-6xl px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-32 lg:px-16">
                <div className="grid gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:gap-16">
                  <Image
                    src={NUMBER_ASSETS[area.code as keyof typeof NUMBER_ASSETS].src}
                    alt=""
                    aria-hidden="true"
                    width={NUMBER_ASSETS[area.code as keyof typeof NUMBER_ASSETS].width}
                    height={NUMBER_ASSETS[area.code as keyof typeof NUMBER_ASSETS].height}
                    loading="eager"
                    sizes="96px"
                    className="pointer-events-none h-auto w-16 md:w-20"
                  />

                  <div className="md:border-l md:border-rule md:pl-10">
                    <h2 className="font-display text-lg font-normal tracking-[0.04em] text-ink md:text-xl">
                      {area.name}
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-7 text-ink md:text-base">
                      {area.description}
                    </p>
                    <p className="mt-8 max-w-xl text-sm leading-[2.2] text-ink-sub">
                      {area.body}
                    </p>

                    <div className="mt-12 grid gap-10 md:grid-cols-2">
                      {area.blocks.map((block) => (
                        <div key={block.heading}>
                          <p className="text-[10px] font-medium tracking-[0.22em] text-ink-sub">
                            {block.heading}
                          </p>
                          <ul className="mt-5 space-y-4">
                            {block.items.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 text-sm leading-7 text-ink-sub"
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
                      <ServiceCta
                        href={area.cta.href}
                        variant={area.code as ServiceCtaVariant}
                      >
                        {area.cta.label}
                      </ServiceCta>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
