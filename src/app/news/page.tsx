import type { Metadata } from "next";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import HeroVisual from "@/components/HeroVisual";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "News | Nebulab合同会社",
  description:
    "Nebulab および各プロジェクト(NRT-LOFT, NAJIMI, Navi 等)の最新情報。",
};

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24 md:px-10">
      {/* ── Page Header ── */}
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <StatusBar
            items={[
              { label: "NEWS:LATEST", pulse: true },
              { label: `ENTRIES:${news.length}` },
            ]}
            className="mb-10"
          />
          <h1 className="font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl">
            ニュース
          </h1>
          <p className="mt-4 font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
            NEWS
          </p>
          <p className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-cyber-text-secondary md:text-base">
            Nebulab および各プロジェクトの最新情報をお知らせします。
          </p>
        </div>
        <div className="hidden md:block">
          <HeroVisual seed={97} className="h-[360px] w-[360px] lg:h-[440px] lg:w-[440px]" />
        </div>
      </div>

      <div className="vertical-divider mx-auto mt-16" />

      {/* ── News list ── */}
      <section className="mt-20 border-t border-cyber-border-dim pt-16">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              All Entries
            </span>
          </div>
        </ScrollReveal>

        <ul className="space-y-6">
          {news.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.06}>
              <li>
                <Link
                  href={item.href}
                  className="group relative flex flex-col overflow-hidden border border-cyber-border-dim bg-cyber-surface p-6 pl-7 transition-all hover:border-cyber-accent/60 hover:bg-[#101820] md:flex-row md:items-start md:gap-10 md:p-8 md:pl-10"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-[3px] bg-cyber-border-dim transition-colors group-hover:bg-cyber-accent"
                  />

                  <div className="md:w-[160px] md:shrink-0">
                    <time className="font-mono text-sm tracking-wider text-cyber-text-muted">
                      {item.date}
                    </time>
                    <span className="mt-3 inline-flex items-center rounded-sm border border-cyber-accent/40 bg-cyber-accent/10 px-2 py-0.5 font-mono text-[9px] tracking-[0.3em] uppercase text-cyber-accent">
                      {item.category}
                    </span>
                  </div>

                  <div className="mt-5 flex-1 md:mt-0">
                    <h2 className="text-base leading-7 text-cyber-text transition-colors group-hover:text-cyber-accent md:text-lg">
                      {item.title}
                    </h2>
                    {item.body && (
                      <p className="mt-3 text-sm leading-7 text-cyber-text-secondary">
                        {item.body}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] tracking-wider text-cyber-text-muted transition-colors group-hover:text-cyber-accent">
                      READ
                      <span
                        aria-hidden="true"
                        className="transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </section>
    </main>
  );
}
