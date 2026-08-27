import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import HeroVisual from "@/components/HeroVisual";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { apps, findApp, type AppStatus } from "@/data/apps";
import { company } from "@/data/company";

const STATUS_STYLES: Record<AppStatus, string> = {
  PUBLISHED: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  COMING_SOON: "border-sky-400/40 bg-sky-400/10 text-sky-300",
};

const STATUS_LABELS: Record<AppStatus, string> = {
  PUBLISHED: "PUBLISHED",
  COMING_SOON: "COMING SOON",
};

function hashSeed(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

export async function generateStaticParams() {
  return apps.map((a) => ({ appId: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ appId: string }>;
}): Promise<Metadata> {
  const { appId } = await params;
  const app = findApp(appId);
  if (!app) return { title: "App Not Found" };

  const url = `/apps/${app.id}`;
  const ogTitle = `${app.name} | ${company.name}`;

  return {
    title: app.name,
    description: app.description,
    alternates: { canonical: url },
    openGraph: { url, title: ogTitle, description: app.description },
    twitter: { title: ogTitle, description: app.description },
  };
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ appId: string }>;
}) {
  const { appId } = await params;
  const app = findApp(appId);
  if (!app) notFound();

  return (
    <main className="mx-auto max-w-5xl px-5 py-24 md:px-10">
      {/* ── Breadcrumb ── */}
      <nav
        aria-label="パンくずリスト"
        className="mb-8 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase"
      >
        <Link
          href="/showcase"
          className="text-cyber-text-muted transition-colors hover:text-white"
        >
          Showcase
        </Link>
        <span className="text-cyber-text-muted">/</span>
        <span className="text-cyber-accent">{app.name}</span>
      </nav>

      {/* ── Page Header ── */}
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <StatusBar
            items={[
              { label: `${app.nameEn}:${STATUS_LABELS[app.status]}`, pulse: true },
              ...(app.statusNote ? [{ label: app.statusNote }] : []),
            ]}
            className="mb-10"
          />
          <h1 className="font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl">
            {app.name}
          </h1>
          <p className="mt-4 font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
            {app.platform} / {app.category}
          </p>
          <p className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-cyber-text md:text-base">
            {app.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[10px] tracking-wider ${STATUS_STYLES[app.status]}`}
            >
              {STATUS_LABELS[app.status]}
            </span>
            {app.tags?.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-wider text-cyber-text-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <HeroVisual
            seed={hashSeed(app.id)}
            className="h-[240px] w-[240px] lg:h-[300px] lg:w-[300px]"
          />
        </div>
      </div>

      {/* ── Hero visual ── */}
      <section className="mt-16">
        <div
          className="relative flex aspect-[16/9] items-center justify-center overflow-hidden border border-cyber-border-dim"
          style={{ background: app.thumbStyle }}
          aria-hidden="true"
        >
          {app.thumbLogo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={app.thumbLogo}
              alt={app.name}
              className="h-auto w-[40%] max-w-[220px]"
            />
          ) : (
            <div className="flex flex-col items-center text-white">
              <div className="font-display text-3xl tracking-wide md:text-5xl">
                {app.name}
              </div>
              <div className="mt-3 font-mono text-[10px] tracking-[0.4em] opacity-75">
                {app.nameEn}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Overview ── */}
      {app.body && app.body.length > 0 && (
        <section className="mt-12 border-t border-cyber-border-dim pt-12">
          <ScrollReveal>
            <div className="section-eyebrow-line mb-12">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
                Overview
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="space-y-6 text-sm leading-[2.1] text-cyber-text-secondary md:text-base">
              {app.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ── Sections ── */}
      {app.sections?.map((section) => (
        <section
          key={section.heading}
          className="mt-16 border-t border-cyber-border-dim pt-12"
        >
          <ScrollReveal>
            <div className="section-eyebrow-line mb-12">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
                {section.heading}
              </span>
            </div>
          </ScrollReveal>

          {section.body && (
            <ScrollReveal delay={0.1}>
              <p className="text-sm leading-8 text-cyber-text-secondary md:text-base">
                {section.body}
              </p>
            </ScrollReveal>
          )}

          {section.items && (
            <ScrollReveal delay={0.1}>
              <ul className="space-y-3 text-sm leading-7 text-cyber-text-secondary md:text-base">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-[10px] tracking-wider text-cyber-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          )}
        </section>
      ))}

      {/* ── Links / CTA ── */}
      <section className="mt-16 border-t border-cyber-border-dim pt-12">
        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-5">
            {app.appStoreUrl ? (
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-sm bg-cyber-accent/80 px-9 py-3.5 font-mono text-[11px] tracking-[0.3em] text-white shadow-[0_0_30px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.3)] transition-shadow hover:shadow-[0_0_50px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.5)]"
              >
                App Store で見る ↗
              </a>
            ) : (
              <span className="rounded-sm border border-cyber-border px-9 py-3.5 font-mono text-[11px] tracking-[0.3em] text-cyber-text-muted">
                {app.status === "PUBLISHED" ? "APP STORE 公開中" : "COMING SOON"}
              </span>
            )}
            <Link
              href={app.privacyUrl}
              className="font-mono text-xs tracking-[0.25em] text-cyber-text-secondary transition-colors hover:text-cyber-accent"
            >
              プライバシーポリシー →
            </Link>
            <Link
              href="/contact"
              className="font-mono text-xs tracking-[0.25em] text-cyber-text-secondary transition-colors hover:text-cyber-accent"
            >
              お問い合わせ →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Back link ── */}
      <section className="mt-16 border-t border-cyber-border-dim pt-12">
        <ScrollReveal>
          <Link
            href="/showcase"
            className="font-mono text-xs tracking-[0.25em] text-cyber-text-secondary transition-colors hover:text-cyber-accent"
          >
            ← ショーケースに戻る
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
