import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AppIcon from "@/components/apps/AppIcon";
import AppScreenshots from "@/components/apps/AppScreenshots";
import AppParagraphs from "@/components/apps/AppParagraphs";
import { apps, findApp, type AppEntry, type AppStatus } from "@/data/apps";
import { company } from "@/data/company";

const STATUS_STYLES: Record<AppStatus, string> = {
  PUBLISHED: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  COMING_SOON: "border-sky-400/40 bg-sky-400/10 text-sky-300",
};

const STATUS_LABELS: Record<AppStatus, string> = {
  PUBLISHED: "PUBLISHED",
  COMING_SOON: "COMING SOON",
};

const bodyTextClass =
  "text-sm leading-[2.1] text-cyber-text-secondary md:text-base";

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
  const ogTitle = app.metaTitle ?? `${app.name} | ${company.name}`;
  // OG は 1200×630 の専用画像を優先し、無ければアイコンで代替する
  const ogImage = app.ogImage ?? (app.icon ? { src: app.icon, width: 256, height: 256 } : undefined);
  const ogImages = ogImage
    ? [{ url: ogImage.src, width: ogImage.width, height: ogImage.height, alt: app.name }]
    : undefined;

  return {
    // metaTitle があるときは指定どおりの文字列をそのまま <title> にする
    title: app.metaTitle ? { absolute: app.metaTitle } : app.name,
    description: app.description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: ogTitle,
      description: app.description,
      ...(ogImages ? { images: ogImages } : {}),
    },
    twitter: {
      title: ogTitle,
      description: app.description,
      ...(ogImage ? { images: [ogImage.src] } : {}),
    },
  };
}

/** App Store ボタン。appStoreUrl が空のときは「近日公開」の非活性表示にする。 */
function AppStoreButton({ app }: { app: AppEntry }) {
  if (app.appStoreUrl) {
    return (
      <a
        href={app.appStoreUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex rounded-sm bg-cyber-accent/80 px-8 py-3.5 font-mono text-[11px] tracking-[0.3em] text-white shadow-[0_0_30px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.3)] transition-shadow hover:shadow-[0_0_50px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.5)]"
      >
        App Store で見る ↗
      </a>
    );
  }

  // URL 未設定。公開済みのアプリに「近日公開」と出すのは誤りなので状態に合わせる。
  const label = app.status === "PUBLISHED" ? "APP STORE 公開中" : "近日公開";

  return (
    <button
      type="button"
      disabled
      className="inline-flex cursor-not-allowed rounded-sm border border-cyber-border px-8 py-3.5 font-mono text-[11px] tracking-[0.3em] text-cyber-text-muted"
    >
      {label}
    </button>
  );
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
    <main className="mx-auto max-w-5xl px-5 pb-24 pt-28 md:px-10 md:pt-32">
      {/* ── Breadcrumb ── */}
      <nav
        aria-label="パンくずリスト"
        className="mb-8 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase"
      >
        <Link
          href="/apps"
          className="text-cyber-text-muted transition-colors hover:text-white"
        >
          Apps
        </Link>
        <span className="text-cyber-text-muted">/</span>
        <span className="text-cyber-accent">{app.name}</span>
      </nav>

      {/* ── Hero ── */}
      <section id="hero" className="scroll-mt-28 md:scroll-mt-32">
        <StatusBar
          items={[
            { label: `${app.nameEn}:${STATUS_LABELS[app.status]}`, pulse: true },
            ...(app.statusNote ? [{ label: app.statusNote }] : []),
            ...(app.released ? [{ label: `RELEASE:${app.released}` }] : []),
          ]}
          className="mb-10"
        />

        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <AppIcon
            src={app.icon}
            name={app.name}
            nameEn={app.nameEn}
            fallbackStyle={app.thumbStyle}
            className="w-24 md:w-36 lg:w-40"
          />

          <div className="min-w-0">
            <h1 className="font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl">
              {app.name}
            </h1>
            <p className="mt-3 font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
              {app.nameEn} / {app.category}
            </p>
            <p className="mt-6 max-w-xl text-sm leading-[2.1] tracking-wide text-cyber-text md:text-base">
              {app.tagline}
            </p>

            <div className="mt-8">
              <AppStoreButton app={app} />
            </div>

            <p className="mt-5 font-mono text-[11px] tracking-[0.2em] text-cyber-text-secondary">
              {app.osRequirement} ／ {app.price}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
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
      </section>

      {/* ── Overview ── */}
      {app.body && app.body.length > 0 && (
        <section
          id="overview"
          className="section-tinted mt-10 scroll-mt-28 rounded-sm border border-cyber-border-dim p-6 md:mt-12 md:scroll-mt-32 md:p-10"
        >
          <ScrollReveal>
            <div className="section-eyebrow-line mb-8">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
                Overview
              </span>
            </div>
            <h2 className="font-display text-2xl leading-[1.4] tracking-wide md:text-3xl">
              概要
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <AppParagraphs items={app.body} className={`mt-8 ${bodyTextClass}`} />
          </ScrollReveal>
        </section>
      )}

      {/* ── Sections ── */}
      {app.sections?.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="section-tinted mt-10 scroll-mt-28 rounded-sm border border-cyber-border-dim p-6 md:mt-12 md:scroll-mt-32 md:p-10"
        >
          <ScrollReveal>
            <div className="section-eyebrow-line mb-8">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
                {section.eyebrow}
              </span>
            </div>
            <h2 className="font-display text-2xl leading-[1.4] tracking-wide md:text-3xl">
              {section.heading}
            </h2>
          </ScrollReveal>

          {section.body && (
            <ScrollReveal delay={0.1}>
              <AppParagraphs
                items={section.body}
                className={`mt-8 ${bodyTextClass}`}
              />
            </ScrollReveal>
          )}

          {section.features && (
            <ScrollReveal delay={0.1}>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                {section.features.map((feature, i) => (
                  <div
                    key={feature.title}
                    className="glass-card flex h-full flex-col p-6 md:p-7"
                  >
                    <span className="font-mono text-[10px] tracking-[0.3em] text-cyber-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-base font-medium leading-[1.7] tracking-wide text-cyber-text">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-sm leading-[2] text-cyber-text-secondary">
                      {feature.body}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          {section.media === "screenshots" && app.screenshots && (
            <ScrollReveal delay={0.1}>
              <div className="mt-8">
                <AppScreenshots shots={app.screenshots} />
              </div>
            </ScrollReveal>
          )}

          {section.items && (
            <ScrollReveal delay={0.1}>
              <ul className="mt-8 space-y-3 text-sm leading-7 text-cyber-text-secondary md:text-base">
                {section.items.map((item, i) => (
                  <li key={item} className="flex gap-4">
                    <span className="shrink-0 font-mono text-[10px] leading-7 tracking-wider text-cyber-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          )}

          {section.afterItems && (
            <ScrollReveal delay={0.1}>
              <AppParagraphs
                items={section.afterItems}
                className={`mt-8 ${bodyTextClass}`}
              />
            </ScrollReveal>
          )}

          {section.callout && (
            <ScrollReveal delay={0.1}>
              <div className="glass-card corner-accent mt-8 p-6 md:p-8">
                <p className="text-sm leading-[2.1] text-cyber-text md:text-base">
                  {section.callout.lead}
                </p>
                {section.callout.body && (
                  <p className="mt-3 text-sm leading-[2.1] text-cyber-text-secondary md:text-base">
                    {section.callout.body}
                  </p>
                )}
              </div>
            </ScrollReveal>
          )}
        </section>
      ))}

      {/* ── Links / CTA ── */}
      <section
        id="links"
        className="section-tinted mt-10 scroll-mt-28 rounded-sm border border-cyber-border-dim p-6 md:mt-12 md:scroll-mt-32 md:p-10"
      >
        <ScrollReveal>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-5">
            <AppStoreButton app={app} />
            <Link
              href={app.privacyUrl}
              className="font-mono text-xs tracking-[0.25em] text-cyber-text-secondary transition-colors hover:text-cyber-accent"
            >
              プライバシーポリシー →
            </Link>
            <a
              href={`mailto:${company.email}`}
              className="font-mono text-xs tracking-[0.25em] text-cyber-text-secondary transition-colors hover:text-cyber-accent"
            >
              {company.email} →
            </a>
          </div>
          <p className="mt-8 font-mono text-[10px] tracking-[0.25em] text-cyber-text-muted">
            提供: {company.name}
          </p>
        </ScrollReveal>
      </section>

      {/* ── Back link ── */}
      <section className="mt-10 md:mt-12">
        <ScrollReveal>
          <Link
            href="/apps"
            className="font-mono text-xs tracking-[0.25em] text-cyber-text-secondary transition-colors hover:text-cyber-accent"
          >
            ← アプリ一覧に戻る
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
