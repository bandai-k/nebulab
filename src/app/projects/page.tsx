import type { Metadata } from "next";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import HeroVisual from "@/components/HeroVisual";
import ProjectImage from "@/components/ProjectImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects, type Project, type ProjectStatus } from "@/data/projects";

export const metadata: Metadata = {
  title: "プロジェクト一覧 | Nebulab合同会社",
  description:
    "Nebulabが運営・開発・実験している全プロジェクトの一覧。NRT-LOFT, narita-guide.com, NAJIMI, Navi, SuperMindMap など。",
};

const STATUS_STYLES: Record<ProjectStatus, string> = {
  ACTIVE: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  LAUNCHING: "border-sky-400/40 bg-sky-400/10 text-sky-300",
  PROTOTYPE: "border-violet-400/40 bg-violet-400/10 text-violet-300",
  "R&D": "border-cyber-border bg-white/5 text-cyber-text-secondary",
  CONCEPT: "border-cyber-border-dim text-cyber-text-muted",
};

function ProjectCard({ project }: { project: Project }) {
  const statusClass = STATUS_STYLES[project.status];
  const cardClass = `glass-card ${
    project.featured ? "corner-accent" : ""
  } flex h-full flex-col overflow-hidden scroll-mt-24`;

  return (
    <article id={project.id} className={cardClass}>
      <div className="relative aspect-[16/9] overflow-hidden border-b border-cyber-border-dim bg-black/20">
        <ProjectImage project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span
            className={`inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[10px] tracking-wider ${statusClass}`}
          >
            {project.status}
          </span>
          {project.statusNote && (
            <span className="font-mono text-[10px] tracking-wider text-cyber-text-muted">
              {project.statusNote}
            </span>
          )}
        </div>

        <p className="mt-5 font-mono text-[10px] tracking-[0.3em] uppercase text-cyber-accent">
          {project.category}
        </p>

        <h2 className="mt-3 font-display text-2xl font-normal tracking-wide text-cyber-text md:text-3xl">
          {project.name}
        </h2>

        <p className="mt-4 text-sm leading-7 text-cyber-text">
          {project.tagline}
        </p>

        <p className="mt-3 text-sm leading-7 text-cyber-text-secondary">
          {project.description}
        </p>

        {(project.externalUrl || project.internalUrl) && (
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 pt-4">
            {project.internalUrl && (
              <Link
                href={project.internalUrl}
                className="font-mono text-xs tracking-wider text-cyber-accent transition-colors hover:text-white"
              >
                詳細 →
              </Link>
            )}
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-xs tracking-wider text-cyber-accent transition-colors hover:text-white"
              >
                外部サイト ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24 md:px-10">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <StatusBar
            items={[{ label: `PROJECTS:${projects.length}ITEMS`, pulse: true }]}
            className="mb-10"
          />
          <h1 className="font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl">
            進行中のプロジェクト
          </h1>
          <p className="mt-4 font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
            PROJECTS
          </p>
          <p className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-cyber-text-secondary md:text-base">
            Nebulabが運営・開発・実験している全プロジェクトの一覧です。
          </p>
        </div>
        <div className="hidden md:block">
          <HeroVisual seed={37} className="h-[360px] w-[360px] lg:h-[440px] lg:w-[440px]" />
        </div>
      </div>

      <div className="vertical-divider mx-auto mt-16" />

      <section className="mt-16 border-t border-cyber-border-dim pt-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={(i % 3) * 0.08}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
