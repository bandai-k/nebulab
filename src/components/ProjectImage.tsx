import Image from "next/image";
import ProjectPlaceholder from "@/components/ProjectPlaceholder";
import type { Project } from "@/data/projects";

type ProjectImageProps = {
  project: Project;
};

export default function ProjectImage({ project }: ProjectImageProps) {
  if (!project.imageUrl) {
    return <ProjectPlaceholder project={project} />;
  }

  const alt = project.imageAlt ?? project.name;
  const fitClass = project.imageFit === "contain" ? "object-contain" : "object-cover";

  // SVG: serve as-is via plain img (Next/Image rejects SVG by default for security).
  if (project.imageUrl.endsWith(".svg")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.imageUrl}
        alt={alt}
        className={`absolute inset-0 h-full w-full ${fitClass}`}
      />
    );
  }

  // Raster (jpg/png/webp): use Next/Image for optimization.
  return (
    <Image
      src={project.imageUrl}
      alt={alt}
      fill
      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      className={fitClass}
    />
  );
}
