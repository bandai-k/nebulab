import type { Metadata } from "next";
import { STATUS_TONE } from "@/lib/statusStyle";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProjectImage from "@/components/ProjectImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import {
  projects,
  type Project,
  type ProjectStatus,
} from "@/data/projects";

const STATUS_STYLES: Record<ProjectStatus, string> = {
  ACTIVE: STATUS_TONE.live,
  LAUNCHING: STATUS_TONE.upcoming,
  PROTOTYPE: STATUS_TONE.early,
  "R&D": STATUS_TONE.early,
  CONCEPT: STATUS_TONE.early,
};

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
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-28 md:px-12 lg:px-16 md:pt-32">
      {/* ── Breadcrumb ── */}
      <nav
        aria-label="パンくずリスト"
        className="mb-8 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase"
      >
        <Link
          href="/projects"
          className="text-ink-sub transition-colors hover:text-accent"
        >
          Projects
        </Link>
        <span className="text-ink-sub">/</span>
        <span className="text-ink-sub">{project.name}</span>
      </nav>

      {/* ── Page Header ── */}
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <h1 className="font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 text-[10px] tracking-[0.4em] text-ink-sub">
            {project.category}
          </p>
          <p className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-ink md:text-base">
            {project.tagline}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-[10px] tracking-wider ${statusClass}`}
            >
              {project.status}
            </span>
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-wider text-ink-sub"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
        </div>
      </div>      {/* ── Hero image ── */}
      <section className="mt-16">
        <div className="relative aspect-[16/9] overflow-hidden border border-rule bg-black/20">
          <ProjectImage project={project} />
        </div>
      </section>

      {/* ── Body ── */}
      {project.body && project.body.length > 0 && (
        <section className="mt-12 border-t border-rule pt-12">
          <ScrollReveal>
            <div className="section-eyebrow-line mb-12">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink-sub">
                Overview
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="space-y-6 text-sm leading-[2.1] text-ink-sub md:text-base">
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
          className="mt-16 border-t border-rule pt-12"
        >
          <ScrollReveal>
            <div className="section-eyebrow-line mb-12">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink-sub">
                {section.heading}
              </span>
            </div>
          </ScrollReveal>

          {section.body && (
            <ScrollReveal delay={0.1}>
              <p className="text-sm leading-8 text-ink-sub md:text-base">
                {section.body}
              </p>
            </ScrollReveal>
          )}

          {section.steps && (
            <div className="grid gap-6 md:grid-cols-2">
              {section.steps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i * 0.1}>
                  <div className="panel  h-full p-6 md:p-8">
                    <span className="text-[9px] font-bold tracking-[0.3em] text-ink-sub">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-base font-medium text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-ink-sub">
                      {step.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          {section.items && (
            <ScrollReveal delay={0.1}>
              <ul className="space-y-3 text-sm leading-7 text-ink-sub md:text-base">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[10px] tracking-wider text-ink-sub">
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
        <section className="mt-16 border-t border-rule pt-12">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-5">
              {project.links?.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-sm bg-accent/80 px-9 py-3.5 text-[11px] tracking-[0.3em] text-white"
                  >
                    {link.label} ↗
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-sm bg-accent/80 px-9 py-3.5 text-[11px] tracking-[0.3em] text-white"
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
                    className="text-xs tracking-[0.25em] text-ink-sub transition-colors hover:text-ink-sub"
                  >
                    {project.externalUrl.replace(/^https?:\/\//, "")} ↗
                  </a>
                )}
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* ── Back link ── */}
      <section className="mt-16 border-t border-rule pt-12">
        <ScrollReveal>
          <Link
            href="/projects"
            className="text-xs tracking-[0.25em] text-ink-sub transition-colors hover:text-ink-sub"
          >
            ← 他のプロジェクトを見る
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
