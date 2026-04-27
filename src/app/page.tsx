import type { Metadata } from "next";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BRAND } from "@/constants/brand";
import { news } from "@/data/news";

export const metadata: Metadata = {
  title: "Nebulab合同会社 | 成田を拠点とするテクノロジーカンパニー",
  description:
    "Nebulab合同会社は、成田を拠点にSES・受託開発、自社AIプロダクト、コワーキング(NRT-LOFT)、ECブランド(NAJIMI)を展開するテクノロジーカンパニーです。",
};

const heroSlides = [
  "/projects/nrt-loft.png",
  "/projects/najimi.png",
  "/projects/narita-guide.png",
  "/projects/navi.png",
];

const localShopConcerns: { code: string; title: string; sub: string }[] = [
  {
    code: "01",
    title: "ホームページが古い・無い",
    sub: "刷新・新規制作・スマホ対応",
  },
  {
    code: "02",
    title: "予約・問い合わせ管理",
    sub: "紙・電話を Web に置き換えたい",
  },
  {
    code: "03",
    title: "Google マップに店が出ない",
    sub: "ビジネスプロフィール整備・口コミ対応",
  },
  {
    code: "04",
    title: "生成AIの活用方法について知りたい",
    sub: "ChatGPT 等を業務にどう取り入れる?",
  },
  {
    code: "05",
    title: "ネット販売を始めたい",
    sub: "EC サイト構築・予約販売の導線",
  },
  {
    code: "06",
    title: "IT 補助金で何ができる?",
    sub: "対象事業の整理・申請サポート",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero: full-bleed carousel + overlay copy ── */}
      <section className="relative h-[88dvh] min-h-[640px] overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt=""
              className="hero-slide hero-slide-zoom"
              style={{ animationDelay: `${i * 7}s` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-cyber-bg/65 to-cyber-bg/20" />
        <div className="absolute inset-0 bg-cyber-bg/35" />

        <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 md:px-10 md:pb-24">
          <div className="mx-auto w-full max-w-6xl">
            <StatusBar
              items={[
                { label: "SYS:ONLINE", pulse: true },
                { label: "FY2026" },
                { label: "NARITA, JP" },
              ]}
              className="mb-8"
            />
            <h1 className="font-display text-4xl font-normal leading-[1.1] tracking-wide text-white md:text-6xl lg:text-7xl">
              Nebulab
              <span className="ml-4 align-baseline font-mono text-sm tracking-[0.4em] text-cyber-accent md:ml-6 md:text-base lg:text-lg">
                ネビュラボ
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/90 md:text-xl">
              ── 小さく始めて、無限に広がる
            </p>
            <p className="mt-3 font-mono text-xs tracking-[0.3em] text-cyber-accent md:text-sm">
              SMALL START, INFINITE REACH.
            </p>
            <p className="mt-6 max-w-xl text-sm leading-[2.1] text-white/70 md:text-base">
              成田を拠点に、テクノロジーで地域と人の可能性を拡張する。
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="rounded-sm border border-white/40 bg-white/5 px-7 py-3 font-mono text-xs tracking-[0.25em] text-white backdrop-blur-sm transition-all hover:border-cyber-accent hover:bg-cyber-accent/30"
              >
                ABOUT →
              </Link>
              <Link
                href="/services"
                className="rounded-sm bg-cyber-accent/85 px-7 py-3 font-mono text-xs tracking-[0.25em] text-white shadow-[0_0_30px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.4)] transition-shadow hover:shadow-[0_0_50px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.6)]"
              >
                SERVICES →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── For Local Shops ── */}
      <section className="section-divider relative overflow-hidden">
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/local-shops.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-cyber-bg/85 to-cyber-bg/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-bg/70 via-transparent to-cyber-bg/70" />

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <ScrollReveal>
            <div className="section-eyebrow-line mb-12">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
                For Local Shops
              </span>
            </div>
          </ScrollReveal>

          <div className="grid items-start gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <ScrollReveal>
              <p className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-cyber-text-muted">
                成田のお店の方へ
              </p>
              <h2 className="mt-6 font-display text-3xl leading-[1.4] tracking-wide text-cyber-text md:text-4xl">
                お店の IT、
                <br />
                まとめて相談できます。
              </h2>
              <p className="mt-8 text-sm leading-8 text-cyber-text-secondary md:text-base">
                POS・予約・ホームページ・Google マップ・EC・補助金活用。
                <br />
                「これって誰に聞けばいいの?」という小さな疑問から、お気軽にどうぞ。
              </p>
              <p className="mt-6 text-sm leading-8 text-cyber-text-secondary md:text-base">
                まずは <span className="text-cyber-text">30 分、無料</span>{" "}
                でお話を聞かせてください。
                <br />
                成田で生まれ育った代表が、直接対応します。
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-sm bg-cyber-accent/85 px-7 py-3 font-mono text-xs tracking-[0.25em] text-white shadow-[0_0_30px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.3)] transition-shadow hover:shadow-[0_0_50px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.5)]"
                >
                  まずは相談する →
                </Link>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="font-mono text-xs tracking-wider text-cyber-text-secondary transition-colors hover:text-cyber-accent"
                >
                  {BRAND.email}
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="mb-6 text-sm leading-7 text-cyber-text-muted">
                こんなお悩み、ありませんか?
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {localShopConcerns.map((c) => (
                  <li
                    key={c.code}
                    className="border border-cyber-border-dim bg-cyber-bg/80 p-5 backdrop-blur-sm transition-colors hover:border-cyber-accent/60"
                  >
                    <span className="font-mono text-[9px] tracking-[0.3em] text-cyber-accent">
                      {c.code}
                    </span>
                    <h3 className="mt-2 text-sm font-medium leading-6 text-cyber-text">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-cyber-text-secondary">
                      {c.sub}
                    </p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── News (3-col) ── */}
      <section id="news" className="section-divider">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
          <ScrollReveal>
            <div className="section-eyebrow-line mb-14">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
                News
              </span>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {news.slice(0, 3).map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.08}>
                <Link
                  href={item.href}
                  className="group relative flex h-full flex-col overflow-hidden border border-cyber-border-dim bg-cyber-surface p-6 pl-7 transition-all hover:border-cyber-accent/60 hover:bg-[#101820] md:p-7 md:pl-8"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-full w-[3px] bg-cyber-border-dim transition-colors group-hover:bg-cyber-accent"
                  />

                  <div className="flex flex-wrap items-center gap-3">
                    <time className="font-mono text-xs tracking-wider text-cyber-text-muted">
                      {item.date}
                    </time>
                    <span className="inline-flex items-center rounded-sm border border-cyber-accent/40 bg-cyber-accent/10 px-2 py-0.5 font-mono text-[9px] tracking-[0.3em] uppercase text-cyber-accent">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base leading-7 text-cyber-text transition-colors group-hover:text-cyber-accent md:text-lg">
                    {item.title}
                  </h3>

                  <span className="mt-auto flex items-center gap-2 pt-8 font-mono text-[11px] tracking-wider text-cyber-text-muted transition-colors group-hover:text-cyber-accent">
                    READ
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-14">
              <Link
                href="/news"
                className="font-mono text-xs tracking-[0.25em] text-cyber-accent transition-colors hover:text-white"
              >
                すべてのニュース →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="section-divider section-tinted">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-10 md:py-32">
          <ScrollReveal>
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Contact
            </span>
            <p className="mt-8 font-display text-2xl leading-10 tracking-wide text-cyber-text md:text-3xl">
              サービスのご相談・事業提携など、
              <br />
              お気軽にご連絡ください。
            </p>
            <Link
              href="/contact"
              className="mt-12 inline-block rounded-sm bg-cyber-accent/80 px-12 py-4 font-mono text-[11px] tracking-[0.3em] text-white shadow-[0_0_30px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.3)] transition-shadow hover:shadow-[0_0_60px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.5)]"
            >
              CONTACT →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
