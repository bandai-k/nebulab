import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import HeroVisual from "@/components/HeroVisual";
import ProjectImage from "@/components/ProjectImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  projects,
  type Project,
  type ProjectStatus,
} from "@/data/projects";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  ACTIVE: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  LAUNCHING: "border-sky-400/40 bg-sky-400/10 text-sky-300",
  PROTOTYPE: "border-violet-400/40 bg-violet-400/10 text-violet-300",
  "R&D": "border-cyber-border bg-white/5 text-cyber-text-secondary",
  CONCEPT: "border-cyber-border-dim text-cyber-text-muted",
};

function hashSeed(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function findProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = findProject(id);
  if (!project) return { title: "Project Not Found" };

  const url = `/projects/${project.id}`;
  const ogTitle = `${project.name} | Nebulab合同会社`;
  const ogImages = project.imageUrl
    ? [
        {
          url: project.imageUrl,
          width: 1792,
          height: 1024,
          alt: project.name,
        },
      ]
    : undefined;

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title: ogTitle,
      description: project.description,
      images: ogImages,
    },
    twitter: {
      title: ogTitle,
      description: project.description,
      images: project.imageUrl ? [project.imageUrl] : undefined,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = findProject(id);
  if (!project) notFound();

  const statusClass = STATUS_STYLES[project.status];

  return (
    <main className="mx-auto max-w-5xl px-5 py-24 md:px-10">
      {/* ── Breadcrumb ── */}
      <nav
        aria-label="パンくずリスト"
        className="mb-8 flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase"
      >
        <Link
          href="/projects"
          className="text-cyber-text-muted transition-colors hover:text-white"
        >
          Projects
        </Link>
        <span className="text-cyber-text-muted">/</span>
        <span className="text-cyber-accent">{project.name}</span>
      </nav>

      {/* ── Page Header ── */}
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <StatusBar
            items={[
              { label: `${project.name.toUpperCase()}:${project.status}`, pulse: true },
              ...(project.statusNote ? [{ label: project.statusNote }] : []),
            ]}
            className="mb-10"
          />
          <h1 className="font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
            {project.category}
          </p>
          <p className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-cyber-text md:text-base">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[10px] tracking-wider ${statusClass}`}
            >
              {project.status}
            </span>
            {project.tags?.map((tag) => (
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
            seed={hashSeed(project.id)}
            className="h-[240px] w-[240px] lg:h-[300px] lg:w-[300px]"
          />
        </div>
      </div>      {/* ── Hero image ── */}
      <section className="mt-16">
        <div className="relative aspect-[16/9] overflow-hidden border border-cyber-border-dim bg-black/20">
          <ProjectImage project={project} />
        </div>
      </section>

      {/* ── Body ── */}
      {project.body && project.body.length > 0 && (
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
              {project.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ── Sections ── */}
      {project.sections?.map((section) => (
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

          {section.steps && (
            <div className="grid gap-6 md:grid-cols-2">
              {section.steps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 0.1}>
                  <div className="glass-card corner-accent h-full p-6 md:p-8">
                    <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-cyber-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-base font-medium text-cyber-text">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-cyber-text-secondary">
                      {step.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
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
      {(project.links?.length || project.externalUrl) && (
        <section className="mt-16 border-t border-cyber-border-dim pt-12">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-5">
              {project.links?.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-sm bg-cyber-accent/80 px-9 py-3.5 font-mono text-[11px] tracking-[0.3em] text-white shadow-[0_0_30px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.3)] transition-shadow hover:shadow-[0_0_50px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.5)]"
                  >
                    {link.label} ↗
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-sm bg-cyber-accent/80 px-9 py-3.5 font-mono text-[11px] tracking-[0.3em] text-white shadow-[0_0_30px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.3)] transition-shadow hover:shadow-[0_0_50px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.5)]"
                  >
                    {link.label} →
                  </Link>
                )
              )}
              {project.externalUrl &&
                !project.links?.some((l) => l.href === project.externalUrl) && (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-mono text-xs tracking-[0.25em] text-cyber-text-secondary transition-colors hover:text-cyber-accent"
                  >
                    {project.externalUrl.replace(/^https?:\/\//, "")} ↗
                  </a>
                )}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ── Back link ── */}
      <section className="mt-16 border-t border-cyber-border-dim pt-12">
        <ScrollReveal>
          <Link
            href="/projects"
            className="font-mono text-xs tracking-[0.25em] text-cyber-text-secondary transition-colors hover:text-cyber-accent"
          >
            ← 他のプロジェクトを見る
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
