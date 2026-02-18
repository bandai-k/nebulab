import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About — Nebulab",
  description:
    "Nebulabは「思考と行動の間」を埋めるAIプロダクトを開発するラボです。",
};

export default function AboutPage() {
  return <AboutClient />;
}
