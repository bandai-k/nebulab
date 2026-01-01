import Link from "next/link";
import Card from "@/components/ui/Card";
import type { Project } from "@/types";

type ProjectPlus = Project & {
  status: "運用中" | "準備中" | "構想中";
  next?: string;
  href?: string;
};

const projects: ProjectPlus[] = [
  {
    title: "NRT-LOFT",
    desc: "成田の小さな拠点。静かに作業できて、つながりの質も守れる運用を設計中。",
    tag: "Place",
    status: "準備中",
    next: "利用導線・ルールの整備 / 情報公開の拡充",
    href: "https://nrt-loft.jp",
  },
  {
    title: "NEBULAB Products",
    desc: `業務で生まれた"良い仕組み"を、再利用できる形に整えていくプロダクト群。`,
    tag: "Product",
    status: "準備中",
    next: "最初のプロダクトを順次公開",
    href: "/projects",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 pb-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-[#3d2f24]">今やっていること</h2>
          <p className="mt-1 text-sm leading-6 text-[#8b7355]">
            “場”で試して、プロダクトに落とし込み、また現場へ還元する。
          </p>
        </div>
        <span className="text-xs text-[#8b7355]">順次公開</span>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-base font-semibold text-[#3d2f24]">{project.title}</div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#ddc9a3] bg-[#fef3d9] px-2 py-0.5 text-[11px] text-[#5c4d3c]">
                    {project.tag}
                  </span>
                  <span className="rounded-full border border-[#ddc9a3] bg-white/60 px-2 py-0.5 text-[11px] text-[#5c4d3c]">
                    {project.status}
                  </span>
                </div>
              </div>

              {project.href ? (
                <Link
                  href={project.href}
                  className="text-sm text-[#b87333] hover:underline"
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  見る →
                </Link>
              ) : null}
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5c4d3c]">{project.desc}</p>

            {project.next ? (
              <div className="mt-4 rounded-xl border border-[#ddc9a3] bg-white/50 p-3">
                <div className="text-[11px] font-semibold text-[#3d2f24]">次に公開すること</div>
                <div className="mt-1 text-[12px] leading-5 text-[#5c4d3c]">{project.next}</div>
              </div>
            ) : null}
          </Card>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Link href="/projects" className="text-sm text-[#b87333] hover:underline">
          取り組み一覧を見る →
        </Link>
      </div>
    </section>
  );
}
