import type { Metadata } from "next";
import SitemapClient from "./SitemapClient";

export const metadata: Metadata = {
  title: "サイトマップ — Nebulab",
  description: "Nebulabのサイトマップです。",
};

export default function SitemapPage() {
  return <SitemapClient />;
}
