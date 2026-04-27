import type { Metadata } from "next";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import HeroVisual from "@/components/HeroVisual";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MISSION, VISION, VALUES } from "@/constants/mvv";

export const metadata: Metadata = {
  title: "Mission / Vision / Values | Nebulab合同会社",
  description:
    "Nebulab合同会社のミッション、ビジョン、3つのバリュー(能動性 / 判断は人間に / 小さく壊して、速く学ぶ)。",
};

export default function MvvPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24 md:px-10">
      {/* ── Breadcrumb ── */}
      <nav
        aria-label="パンくずリスト"
        className="mb-8 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase"
      >
        <Link
          href="/about"
          className="text-cyber-text-muted transition-colors hover:text-white"
        >
          About
        </Link>
        <span className="text-cyber-text-muted">/</span>
        <span className="text-cyber-accent">Mission · Vision · Values</span>
      </nav>

      {/* ── Page Header ── */}
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <StatusBar
            items={[{ label: "MVV:CORE", pulse: true }]}
            className="mb-10"
          />
          <h1 className="font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl">
            理念
          </h1>
          <p className="mt-4 font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
            MISSION / VISION / VALUES
          </p>
          <p className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-cyber-text-secondary md:text-base">
            Nebulab が日々の判断軸として大切にしている、ミッション・ビジョン・3 つのバリュー。
          </p>
        </div>
        <div className="hidden md:block">
          <HeroVisual seed={113} className="h-[360px] w-[360px] lg:h-[440px] lg:w-[440px]" />
        </div>
      </div>

      <div className="vertical-divider mx-auto mt-16" />

      {/* ── Mission ── */}
      <section className="mt-20 border-t border-cyber-border-dim pt-16">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Mission
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-display text-2xl leading-[1.7] tracking-wide text-cyber-text md:text-3xl lg:text-4xl">
            {MISSION}
          </p>
        </ScrollReveal>
      </section>

      {/* ── Vision ── */}
      <section className="mt-24 border-t border-cyber-border-dim pt-16">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Vision
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="font-display text-2xl leading-[1.7] tracking-wide text-cyber-text md:text-3xl lg:text-4xl">
            {VISION}
          </p>
        </ScrollReveal>
      </section>

      {/* ── Values ── */}
      <section className="mt-24 border-t border-cyber-border-dim pt-16">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Values
            </span>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <ScrollReveal key={value.code} delay={i * 0.1}>
              <div className="glass-card corner-accent h-full p-6 md:p-8">
                <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-cyber-accent">
                  {value.code}
                </span>
                <h2 className="mt-3 text-base font-medium text-cyber-text">
                  {value.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-cyber-text-secondary">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Back link ── */}
      <section className="mt-24 border-t border-cyber-border-dim pt-16">
        <ScrollReveal>
          <Link
            href="/about"
            className="font-mono text-xs tracking-[0.25em] text-cyber-text-secondary transition-colors hover:text-cyber-accent"
          >
            ← About に戻る
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
