import type { Metadata } from "next";
import SectionHeading from "@/components/decor/SectionHeading";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MISSION, VISION, VALUES } from "@/constants/mvv";

export const metadata: Metadata = {
  title: "Mission / Vision / Values",
  description:
    "Nebulab合同会社のミッション、ビジョン、3つのバリュー(先回り / 主役は人 / 小さく壊して、速く学ぶ)。",
  alternates: { canonical: "/about/mvv" },
  openGraph: {
    url: "/about/mvv",
    title: "Mission / Vision / Values | Nebulab合同会社",
    description:
      "Nebulab合同会社のミッション、ビジョン、3つのバリュー。",
  },
  twitter: {
    title: "Mission / Vision / Values | Nebulab合同会社",
    description:
      "Nebulab合同会社のミッション、ビジョン、3つのバリュー。",
  },
};

export default function MvvPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 pb-24 pt-28 md:px-10 md:pt-32">
      {/* ── Breadcrumb ── */}
      <nav
        aria-label="パンくずリスト"
        className="mb-8 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase"
      >
        <Link
          href="/about"
          className="text-ink-sub transition-colors hover:text-accent"
        >
          About
        </Link>
        <span className="text-ink-sub">/</span>
        <span className="text-ink-sub">Mission · Vision · Values</span>
      </nav>

      {/* ── Page Header ── */}
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <SectionHeading
            level="h1"
            label="MISSION / VISION / VALUES"
            heading="理念"
            color="teal"
          />
          <p className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-ink-sub md:text-base">
            Nebulab が日々の判断軸として大切にしている、ミッション・ビジョン・3 つのバリュー。
          </p>
        </div>
        <div className="hidden md:block">
        </div>
      </div>      {/* ── Mission ── */}
      <section className="mt-12 border-t border-rule pt-12">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              Mission
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-display text-2xl leading-[1.7] tracking-wide text-ink md:text-3xl lg:text-4xl">
            {MISSION}
          </p>
        </ScrollReveal>
      </section>

      {/* ── Vision ── */}
      <section className="mt-16 border-t border-rule pt-12">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              Vision
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-display text-2xl leading-[1.7] tracking-wide text-ink md:text-3xl lg:text-4xl">
            {VISION}
          </p>
        </ScrollReveal>
      </section>

      {/* ── Values ── */}
      <section className="mt-16 border-t border-rule pt-12">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              Values
            </span>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <ScrollReveal key={value.code} delay={i * 0.1}>
              <div className="panel  h-full p-6 md:p-8">
                <span className="text-[9px] font-bold tracking-[0.3em] text-ink-sub">
                  {value.code}
                </span>
                <h2 className="mt-3 text-base font-medium text-ink">
                  {value.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-ink-sub">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Back link ── */}
      <section className="mt-16 border-t border-rule pt-12">
        <ScrollReveal>
          <Link
            href="/about"
            className="text-xs tracking-[0.25em] text-ink-sub transition-colors hover:text-ink-sub"
          >
            ← About に戻る
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
