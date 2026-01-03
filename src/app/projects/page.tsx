import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects - NEBULAB",
  description: "NEBULABのプロジェクト。プロダクト・実験・場づくりを横断して、小さく試しながら育てています。",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
