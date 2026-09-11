import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/decor/SectionHeading";
import { BRUSH, type BrushName } from "@/components/decor/brushAssets";
import { PARTNERS } from "@/data/partners";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumbLd = breadcrumbJsonLd([{ name: "パートナー", path: "/partners" }]);

export const metadata: Metadata = {
  title: "パートナー",
  description:
    "Nebulab合同会社が協業しているパートナー企業。生成AI活用研修の株式会社AIM、MMPR合同会社。",
  alternates: { canonical: "/partners" },
  openGraph: {
    url: "/partners",
    title: "パートナー | Nebulab合同会社",
    description: "Nebulab合同会社が協業しているパートナー企業。",
  },
  twitter: {
    title: "パートナー | Nebulab合同会社",
    description: "Nebulab合同会社が協業しているパートナー企業。",
  },
};

/**
 * カード隅にごく薄く敷く水彩(§4)。新規素材は作らず既存の筆ストロークを
 * 再利用する。ロゴの色調に合わせて選び、MMPR側はモノトーンに近づけるため
 * grayscale をかける。
 */
const CARD_DECOR: Record<string, { asset: BrushName; className: string }> = {
  "合同会社MMPR": { asset: "label-teal", className: "opacity-[0.10] grayscale" },
  "株式会社AIM": { asset: "label-indigo", className: "opacity-[0.14]" },
};

export default function PartnersPage() {
  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {/* タイトル */}
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-12 lg:px-16 md:pb-24 md:pt-40">
        <SectionHeading
          level="h1"
          label="PARTNERS"
          heading="パートナー"
          color="indigo"
          headingSize="lg"
          lead="得意なところを、それぞれが持ち寄る。"
        />

        <div className="relative mt-6 h-px w-16 bg-rule" />
      </div>

      {/* 各社。カードが1枚ずつ現れるので、セクション自体のフェードは重ねない。 */}
      <section className="section-reveal-skip relative pb-24 md:pb-32">
        <div className="relative mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
          <ul className="grid gap-6 md:grid-cols-2 md:gap-8">
            {PARTNERS.map((p, i) => {
              const decor = CARD_DECOR[p.name];
              return (
                <li
                  key={p.name}
                  className="card-reveal-in panel relative flex flex-col overflow-hidden p-6 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-ink/25 md:p-12"
                  style={{ "--card-delay": `${i * 200}ms` } as React.CSSProperties}
                >
                  {decor && (
                    <div
                      aria-hidden="true"
                      className={`pointer-events-none absolute right-0 top-0 w-2/3 max-w-[19rem] ${decor.className}`}
                      style={{
                        aspectRatio: `${BRUSH[decor.asset].width} / ${BRUSH[decor.asset].height}`,
                      }}
                    >
                      <Image
                        src={BRUSH[decor.asset].src}
                        alt=""
                        fill
                        sizes="320px"
                        className="object-contain object-right-top"
                      />
                    </div>
                  )}

                  <div className="relative flex flex-1 flex-col">
                    {p.logo && (
                      <div className="mb-8 flex h-14 items-center">
                        <Image
                          src={p.logo}
                          alt={`${p.name}のロゴ`}
                          width={160}
                          height={56}
                          className="h-full w-auto object-contain object-left"
                        />
                      </div>
                    )}

                    <h2 className="font-display text-xl font-medium tracking-[0.05em] text-ink md:text-2xl">
                      {p.name}
                    </h2>

                    {p.representative && (
                      <p className="mt-2 text-xs text-ink-sub">
                        {p.representative}
                      </p>
                    )}

                    {p.catchphrase && (
                      <p className="mt-5 font-display text-base font-normal tracking-[0.03em] text-ink md:text-lg">
                        {p.catchphrase}
                      </p>
                    )}

                    <p className="mt-6 grow max-w-md text-sm leading-[2.2] text-ink-sub">
                      {p.description ?? "事業内容は確認中です。"}
                    </p>

                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link mt-8 inline-flex w-fit items-center self-start text-[11px] tracking-[0.2em] text-ink-sub transition-colors duration-200 hover:text-ink"
                      >
                        <span className="border-b border-transparent pb-0.5 transition-[border-color,transform] duration-200 group-hover/link:translate-x-0.5 group-hover/link:border-ink-sub">
                          {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                        </span>
                        <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-0.5">
                          ↗
                        </span>
                      </a>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}
