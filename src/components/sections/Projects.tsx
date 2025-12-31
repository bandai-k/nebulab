import Card from "@/components/ui/Card";
import type { Project } from "@/types";

const projects: Project[] = [
  {
    title: "NRT-LOFT",
    desc: "成田の小さな拠点。静かに作業できて、つながりの質も守れる運用を設計中。",
    tag: "Place",
  },
  {
    title: "NEBULAB Products",
    desc: `業務で生まれた"良い仕組み"を、再利用できる形に整えていくプロダクト群。`,
    tag: "Product",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 pb-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-lg font-semibold">今やっていること</h2>
        <span className="text-xs text-neutral-400">順次公開</span>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">{project.title}</div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-neutral-200">
                {project.tag}
              </span>
            </div>
            <p className="mt-2 text-sm leading-6 text-neutral-200">
              {project.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
