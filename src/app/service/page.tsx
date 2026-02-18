import type { Metadata } from "next";
import ServiceClient from "./ServiceClient";

export const metadata: Metadata = {
  title: "Service — Nebulab",
  description:
    "Nebulabが提供するサービス。AIプロダクト開発・地域DX支援。",
};

export default function ServicePage() {
  return <ServiceClient />;
}
