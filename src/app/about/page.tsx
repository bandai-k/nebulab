import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "会社概要 - NEBULAB",
  description: "NEBULABの会社概要です。",
};

export default function AboutPage() {
  return <AboutClient />;
}
