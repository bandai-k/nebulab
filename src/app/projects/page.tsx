import type { Metadata } from "next";
import SectionHeading from "@/components/decor/SectionHeading";
import { STATUS_TONE } from "@/lib/statusStyle";
import Link from "next/link";
import ProjectImage from "@/components/ProjectImage";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects, type Project, type ProjectStatus } from "@/data/projects";

export const metadata: Metadata = {
  title: "プロジェクト一覧",
  description:
    "Nebulabが運営・開発・実験している全プロジェクトの一覧。NRT LOFT, narita-guide.com, NAJIMI, Navi, SuperMindMap など。",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: "プロジェクト一覧 | Nebulab合同会社",
    description:
      "Nebulabが運営・開発・実験している全プロジェクト。NRT LOFT, narita-guide.com, NAJIMI, Navi 他。",
  },
  twitter: {
    title: "プロジェクト一覧 | Nebulab合同会社",
    description:
      "Nebulabが運営・開発・実験している全プロジェクト。",
  },
};

const STATUS_STYLES: Record<ProjectStatus, string> = {
  ACTIVE: STATUS_TONE.live,
  LAUNCHING: STATUS_TONE.upcoming,
  PROTOTYPE: STATUS_TONE.early,
  "R&D": STATUS_TONE.early,
  CONCEPT: STATUS_TONE.early,
};

function ProjectCard({ project }: { project: Project }) {
  const statusClass = STATUS_STYLES[project.status];
  const cardClass = `panel ${
    project.featured ? "" : ""
  } flex h-full flex-col overflow-hidden scroll-mt-24`;

  return (
    <article id={project.id} className={cardClass}>
      <div className="relative aspect-[16/9] overflow-hidden border-b border-rule bg-black/20">
        <ProjectImage project={project} />
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span
            className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-[10px] tracking-wider ${statusClass}`}
          >
            {project.status}
          </span>
          {project.statusNote && (
            <span className="text-[10px] tracking-wider text-ink-sub">
              {project.statusNote}
            </span>
          )}
        </div>

        <p className="mt-5 text-[10px] tracking-[0.3em] uppercase text-ink-sub">
          {project.category}
        </p>

        <h2 className="mt-3 font-display text-2xl font-normal tracking-wide text-ink md:text-3xl">
          {project.name}
        </h2>

        <p className="mt-4 text-sm leading-7 text-ink">
          {project.tagline}
        </p>

        <p className="mt-3 text-sm leading-7 text-ink-sub">
          {project.description}
        </p>

        {(project.externalUrl || project.internalUrl) && (
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 pt-4">
            {project.internalUrl && (
              <Link
                href={project.internalUrl}
                className="text-xs tracking-wider text-ink-sub transition-colors hover:text-accent"
              >
                詳細 →
              </Link>
            )}
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs tracking-wider text-ink-sub transition-colors hover:text-accent"
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
    <main className="mx-auto max-w-5xl px-5 pb-24 pt-28 md:px-10 md:pt-32">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <SectionHeading
            level="h1"
            label="PROJECTS"
            heading="進行中のプロジェクト"
            color="pink"
          />
          <p className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-ink-sub md:text-base">
            Nebulabが運営・開発・実験している全プロジェクトの一覧です。
          </p>
        </div>
        <div className="hidden md:block">
        </div>
      </div>      <section className="mt-12 border-t border-rule pt-12">
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
