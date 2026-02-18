import Link from "next/link";
import Card from "@/components/ui/Card";
import { getTopProjects, STATUS_BADGE } from "@/constants/projects";

export default function Projects() {
  const topProjects = getTopProjects(2);

  return (
    <section id="projects" className="mx-auto w-full max-w-5xl px-6 pb-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-[#3d2f24]">今やっていること</h2>
          <p className="mt-1 text-sm leading-6 text-[#8b7355]">
            "場"で試して、プロダクトに落とし込み、また現場へ還元する。
          </p>
        </div>
        <span className="text-xs text-[#8b7355]">順次更新</span>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {topProjects.map((project) => (
          <Card key={project.slug} className="p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-base font-semibold text-[#3d2f24]">{project.title}</div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {project.tags.slice(0, 1).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#ddc9a3] bg-[#fef3d9] px-2 py-0.5 text-[11px] text-[#5c4d3c]"
                    >
                      {tag}
                    </span>
                  ))}
                  <span
                    className={[
                      "rounded-full border px-2 py-0.5 text-[11px] font-medium",
                      STATUS_BADGE[project.status].className,
                    ].join(" ")}
                  >
                    {STATUS_BADGE[project.status].label}
                  </span>
                </div>
              </div>

              {project.links?.[0] ? (
                <Link
                  href={project.links[0].href}
                  className="text-sm text-[#b87333] hover:underline"
                  target={project.links[0].external ? "_blank" : undefined}
                  rel={project.links[0].external ? "noreferrer" : undefined}
                >
                  見る →
                </Link>
              ) : null}
            </div>

            <p className="mt-4 text-sm leading-6 text-[#5c4d3c]">{project.catchphrase}</p>
            <p className="mt-2 text-sm leading-6 text-[#5c4d3c]">{project.description}</p>
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
