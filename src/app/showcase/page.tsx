import type { Metadata } from "next";
import { STATUS_TONE } from "@/lib/statusStyle";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import HeroVisual from "@/components/HeroVisual";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { apps, type AppEntry } from "@/data/apps";

export const metadata: Metadata = {
  title: "ショーケース",
  description:
    "Nebulab合同会社「HP お試し公開プラン」で制作・公開している事例集。実際の Web ページとして、デザイン・構成・操作感をそのままご確認いただけます。",
  alternates: { canonical: "/showcase" },
  openGraph: {
    url: "/showcase",
    title: "ショーケース | Nebulab合同会社",
    description:
      "「HP お試し公開プラン」で制作した事例を、実物の Web ページとしてご覧いただけます。",
  },
  twitter: {
    title: "ショーケース | Nebulab合同会社",
    description: "「HP お試し公開プラン」で制作した事例集。",
  },
};

type ShowcaseItem = {
  id: string;
  name: string;
  nameEn: string;
  category: string;
  tagline: string;
  description: string;
  url: string;
  thumbStyle: string;
  thumbLogo?: string;
  thumbBg?: string;
};

const items: ShowcaseItem[] = [
  {
    id: "bandai-noen",
    name: "萬代農園",
    nameEn: "BANDAI FARM",
    category: "農園 / 1ページLP",
    tagline: "成田の畑から、季節の恵みを。",
    description:
      "成田市で 3 代続く家族経営の農園を想定したサンプル。直売所の営業情報、季節の野菜、アクセス、お問い合わせフォームを 1 ページに収めた構成。暖色系の配色と明朝体で、土に向き合う事業者らしい質感を狙っています。",
    url: "/pt/bandai-noen",
    thumbStyle:
      "linear-gradient(135deg, #5D7A4E 0%, #3F5734 60%, #2D3A24 100%)",
    thumbLogo: "/pt/bandai-noen/logo.svg",
    thumbBg: "#FAF7F0",
  },
];

function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer noopener"
      className="group glass-card flex h-full flex-col overflow-hidden transition-colors"
    >
      <div
        className="relative aspect-[16/9] overflow-hidden border-b border-cyber-border-dim"
        style={{ background: item.thumbBg ?? item.thumbStyle }}
        aria-hidden="true"
      >
        {item.thumbLogo ? (
          <div className="absolute inset-0 flex items-center justify-center px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.thumbLogo}
              alt={item.name}
              className="h-auto w-[70%] max-w-[320px]"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="font-display text-3xl tracking-wide md:text-4xl">
              {item.name}
            </div>
            <div className="mt-2 font-mono text-[10px] tracking-[0.3em] opacity-75">
              {item.nameEn}
            </div>
          </div>
        )}
        <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-sm border border-black/15 bg-white/70 px-2 py-0.5 font-mono text-[9px] tracking-wider text-black/70 backdrop-blur-sm">
          LIVE ↗
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className={`inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[10px] tracking-wider ${STATUS_TONE.live}`}>
            PUBLISHED
          </span>
          <span className="font-mono text-[10px] tracking-wider text-cyber-text-muted">
            HP TRIAL SAMPLE
          </span>
        </div>

        <p className="mt-5 font-mono text-[10px] tracking-[0.3em] uppercase text-cyber-accent">
          {item.category}
        </p>

        <h2 className="mt-3 font-display text-2xl font-normal tracking-wide text-cyber-text md:text-3xl">
          {item.name}
        </h2>

        <p className="mt-4 text-sm leading-7 text-cyber-text">{item.tagline}</p>

        <p className="mt-3 text-sm leading-7 text-cyber-text-secondary">
          {item.description}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 pt-4 font-mono text-xs tracking-wider text-cyber-accent transition-colors group-hover:text-white">
          公開サイトを見る
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </span>
      </div>
    </a>
  );
}

function AppCard({ app }: { app: AppEntry }) {
  const published = app.status === "PUBLISHED";
  return (
    <Link
      href={`/apps/${app.id}`}
      className="group glass-card flex h-full flex-col overflow-hidden transition-colors"
    >
      <div
        className="relative aspect-[16/9] overflow-hidden border-b border-cyber-border-dim"
        style={{ background: app.thumbStyle }}
        aria-hidden="true"
      >
        {app.thumbLogo ? (
          <div className="absolute inset-0 flex items-center justify-center px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={app.thumbLogo}
              alt={app.name}
              className="h-auto w-[45%] max-w-[180px]"
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <div className="font-display text-3xl tracking-wide md:text-4xl">
              {app.name}
            </div>
            <div className="mt-2 font-mono text-[10px] tracking-[0.3em] opacity-75">
              {app.nameEn}
            </div>
          </div>
        )}
        <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-sm border border-black/15 bg-white/70 px-2 py-0.5 font-mono text-[9px] tracking-wider text-black/70 backdrop-blur-sm">
          {app.platform}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span
            className={`inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[10px] tracking-wider ${
              published
                ? STATUS_TONE.live
                : STATUS_TONE.upcoming
            }`}
          >
            {published ? "PUBLISHED" : "COMING SOON"}
          </span>
          {app.statusNote && (
            <span className="font-mono text-[10px] tracking-wider text-cyber-text-muted">
              {app.statusNote}
            </span>
          )}
        </div>

        <p className="mt-5 font-mono text-[10px] tracking-[0.3em] uppercase text-cyber-accent">
          {app.category}
        </p>

        <h3 className="mt-3 font-display text-2xl font-normal tracking-wide text-cyber-text md:text-3xl">
          {app.name}
        </h3>

        <p className="mt-4 text-sm leading-7 text-cyber-text">{app.tagline}</p>

        <p className="mt-3 text-sm leading-7 text-cyber-text-secondary">
          {app.description}
        </p>

        <span className="mt-6 inline-flex items-center gap-2 pt-4 font-mono text-xs tracking-wider text-cyber-accent transition-colors group-hover:text-white">
          アプリの詳細を見る
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function ShowcasePage() {
  return (
    <main className="mx-auto max-w-5xl px-5 pb-24 pt-28 md:px-10 md:pt-32">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <StatusBar
            items={[{ label: `SHOWCASE:${items.length + apps.length}ITEM`, pulse: true }]}
            className="mb-10"
          />
          <h1 className="font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl">
            事例集 / ショーケース
          </h1>
          <p className="mt-4 font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
            SHOWCASE
          </p>
          <p className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-cyber-text-secondary md:text-base">
            Nebulab の「HP お試し公開プラン」で制作・公開している事例集です。
            実際の Web ページとして、デザイン・構成・操作感をそのままご確認いただけます。
          </p>
          <p className="mt-4 max-w-xl text-sm leading-[2.1] tracking-wide text-cyber-text-secondary md:text-base">
            あわせて、自社で開発・公開している iOS アプリも掲載しています。
          </p>
        </div>
        <div className="hidden md:block">
          <HeroVisual seed={42} className="h-[240px] w-[240px] lg:h-[300px] lg:w-[300px]" />
        </div>
      </div>

      {/* ── HP お試し公開プランの事例 ── */}
      <section className="mt-12 border-t border-cyber-border-dim pt-12">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              HP Trial Samples
            </span>
          </div>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <ScrollReveal key={item.id} delay={(i % 2) * 0.08}>
              <ShowcaseCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── 自社開発の iOS アプリ ── */}
      <section className="mt-20 border-t border-cyber-border-dim pt-12">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              iOS Apps
            </span>
          </div>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {apps.map((app, i) => (
            <ScrollReveal key={app.id} delay={(i % 2) * 0.08}>
              <AppCard app={app} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA: HP お試し公開プラン */}
      <section className="mt-20 border-t border-cyber-border-dim pt-12">
        <ScrollReveal>
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyber-accent">
            For Local Businesses
          </p>
          <h2 className="mt-4 font-display text-2xl leading-[1.4] tracking-wide md:text-3xl">
            一緒に &ldquo;最初の事例&rdquo; を
            <br className="md:hidden" />
            作ってくださる方へ。
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-[2.1] text-cyber-text-secondary md:text-base">
            事例化のご協力と引き換えに、1 ページの Web ページを無料で制作してお届けします。
            先着 10 社・成田と近隣の事業者さま限定、2026 年 5〜12 月の期間限定プランです。
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              href="/hp-trial"
              className="inline-flex items-center gap-3 rounded-sm bg-cyber-accent/85 px-7 py-3 font-mono text-xs tracking-[0.25em] text-white"
            >
              プラン詳細 →
            </Link>
            <Link
              href="/contact"
              className="font-mono text-xs tracking-wider text-cyber-text-secondary transition-colors hover:text-cyber-accent"
            >
              まずは相談する →
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
