import type { Metadata } from "next";
import SectionHeading from "@/components/decor/SectionHeading";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "News",
  description:
    "Nebulab および各プロジェクトの最新情報。",
  alternates: { canonical: "/news" },
  openGraph: {
    url: "/news",
    title: "News | Nebulab合同会社",
    description:
      "Nebulab および各プロジェクトの最新情報。",
  },
  twitter: {
    title: "News | Nebulab合同会社",
    description:
      "Nebulab および各プロジェクトの最新情報。",
  },
};

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:px-10 md:pt-32">
      {/* ── Page Header ── */}
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <SectionHeading
            level="h1"
            label="NEWS"
            heading="ニュース"
            color="teal"
          />
          <p className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-ink-sub md:text-base">
            Nebulab および各プロジェクトの最新情報をお知らせします。
          </p>
        </div>
        <div className="hidden md:block">
        </div>
      </div>      {/* ── News list ── */}
      <section className="mt-12 border-t border-rule pt-12">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink-sub">
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
                  className="group relative flex flex-col overflow-hidden border border-rule bg-surface p-6 pl-7 transition-all hover:border-accent/60 hover:bg-[#101820] md:flex-row md:items-start md:gap-10 md:p-8 md:pl-10"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-[3px] bg-rule transition-colors group-hover:bg-accent"
                  />

                  <div className="md:w-[160px] md:shrink-0">
                    <time className="text-sm tracking-wider text-ink-sub">
                      {item.date}
                    </time>
                    <span className="mt-3 inline-flex items-center rounded-sm border border-accent/40 bg-accent/10 px-2 py-0.5 text-[9px] tracking-[0.3em] uppercase text-ink-sub">
                      {item.category}
                    </span>
                  </div>

                  <div className="mt-5 flex-1 md:mt-0">
                    <h2 className="text-base leading-7 text-ink transition-colors group-hover:text-ink-sub md:text-lg">
                      {item.title}
                    </h2>
                    {item.body && (
                      <p className="mt-3 text-sm leading-7 text-ink-sub">
                        {item.body}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-wider text-ink-sub transition-colors group-hover:text-ink-sub">
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
