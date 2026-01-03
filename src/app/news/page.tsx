import type { Metadata } from "next";
import NewsClient from "./NewsClient";

export const metadata: Metadata = {
  title: "お知らせ - NEBULAB",
  description: "NEBULABからのお知らせ・ニュースです。",
};

export default function NewsPage() {
  return <NewsClient />;
}
