import Image from "next/image";
import ProjectThumb from "@/components/ProjectThumb";
import type { Project } from "@/data/projects";

type ProjectImageProps = {
  project: Project;
};

export default function ProjectImage({ project }: ProjectImageProps) {
  if (!project.imageUrl) {
    return <ProjectThumb project={project} />;
  }

  // SVG: serve as-is via plain img (Next/Image rejects SVG by default for security).
  if (project.imageUrl.endsWith(".svg")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.imageUrl}
        alt={project.name}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  // Raster (jpg/png/webp): use Next/Image for optimization.
  return (
    <Image
      src={project.imageUrl}
      alt={project.name}
      fill
      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
      className="object-cover"
    />
  );
}
