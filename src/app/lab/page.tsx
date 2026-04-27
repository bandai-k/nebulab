import type { Metadata } from "next";
import Link from "next/link";
import StatusBar from "@/components/StatusBar";
import HeroVisual from "@/components/HeroVisual";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects, type Project, type ProjectStatus } from "@/data/projects";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Nebulab Lab — 自社AIプロダクトのR&Dと技術的な実験・検証を行う部門。",
  alternates: { canonical: "/lab" },
  openGraph: {
    url: "/lab",
    title: "Lab | Nebulab合同会社",
    description:
      "Nebulab Lab — 自社AIプロダクトのR&Dと技術的な実験・検証を行う部門。",
  },
  twitter: {
    title: "Lab | Nebulab合同会社",
    description:
      "Nebulab Lab — 自社AIプロダクトのR&Dと技術的な実験・検証を行う部門。",
  },
};

const principles: string[] = [
  "小さく作り、試し、壊し、また作る",
  "完璧を目指して止まるより、検証の速度を重視",
  "Lab で検証されたものが、Services に昇格する",
];

const STATUS_STYLES: Record<ProjectStatus, string> = {
  ACTIVE: "border-emerald-400/40 bg-emerald-400/10 text-emerald-300",
  LAUNCHING: "border-sky-400/40 bg-sky-400/10 text-sky-300",
  PROTOTYPE: "border-violet-400/40 bg-violet-400/10 text-violet-300",
  "R&D": "border-cyber-border bg-white/5 text-cyber-text-secondary",
  CONCEPT: "border-cyber-border-dim text-cyber-text-muted",
};

function LabProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-card corner-accent flex h-full flex-col p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span
          className={`inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[10px] tracking-wider ${STATUS_STYLES[project.status]}`}
        >
          {project.status}
        </span>
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyber-accent">
          {project.category}
        </span>
      </div>

      <h3 className="mt-5 font-display text-2xl font-normal tracking-wide text-cyber-text md:text-3xl">
        {project.name}
      </h3>

      <p className="mt-4 text-sm leading-7 text-cyber-text">
        {project.tagline}
      </p>
      <p className="mt-3 text-sm leading-7 text-cyber-text-secondary">
        {project.description}
      </p>

      {project.internalUrl && (
        <div className="mt-6">
          <Link
            href={project.internalUrl}
            className="font-mono text-xs tracking-wider text-cyber-accent transition-colors hover:text-white"
          >
            詳細 →
          </Link>
        </div>
      )}
    </article>
  );
}

export default function LabPage() {
  const labProjects = projects.filter((p) => p.category === "AI PRODUCT");

  return (
    <main className="mx-auto max-w-5xl px-5 py-24 md:px-10">
      {/* ── Page Header ── */}
      <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div>
          <StatusBar
            items={[
              { label: "LAB:OPEN", pulse: true },
              { label: `R&D:${labProjects.length}` },
            ]}
            className="mb-10"
          />
          <h1 className="font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl">
            実験と検証の場
          </h1>
          <p className="mt-4 font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
            LAB
          </p>
          <p className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-cyber-text-secondary md:text-base">
            Nebulab Lab は、自社AIプロダクトのR&amp;Dと
            <br />
            技術的な実験・検証を行う部門です。
          </p>
        </div>
        <div className="hidden md:block">
          <HeroVisual seed={53} className="h-[360px] w-[360px] lg:h-[440px] lg:w-[440px]" />
        </div>
      </div>

      <div className="vertical-divider mx-auto mt-16" />

      {/* ── Lab の活動 ── */}
      <section id="principles" className="mt-20 border-t border-cyber-border-dim pt-16">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Principles
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-xl font-medium tracking-wide text-cyber-text md:text-2xl">
            Lab の活動方針
          </h2>
          <ol className="mt-8 space-y-5">
            {principles.map((p, i) => (
              <li
                key={i}
                className="flex gap-5 text-sm leading-8 text-cyber-text-secondary md:text-base"
              >
                <span className="font-mono text-[10px] tracking-[0.3em] text-cyber-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </ScrollReveal>
      </section>

      {/* ── Active Projects (AI PRODUCT only) ── */}
      <section id="rd" className="mt-24 border-t border-cyber-border-dim pt-16">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Active Projects
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-xl font-medium tracking-wide text-cyber-text md:text-2xl">
            進行中の R&amp;D プロジェクト
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {labProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={0.1 + i * 0.08}>
              <LabProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <Link
              href="/projects"
              className="font-mono text-xs tracking-wider text-cyber-accent transition-colors hover:text-white"
            >
              全プロジェクトを見る →
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* ── 技術ブログ ── */}
      <section id="blog" className="mt-24 border-t border-cyber-border-dim pt-16">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Tech Blog
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="glass-card p-8 md:p-10">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyber-text-muted">
              Status
            </p>
            <p className="mt-3 font-display text-2xl tracking-wide text-cyber-text">
              準備中
            </p>
            <p className="mt-4 text-sm leading-7 text-cyber-text-secondary md:text-base">
              開発ログ、設計メモ、検証記録は近日公開予定です。
              <br />
              R&amp;Dの過程を、可能な限り公開していきます。
            </p>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
