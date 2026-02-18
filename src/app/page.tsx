import type { Metadata } from "next";
import HomeClient from "@/components/pages/HomeClient";

export const metadata: Metadata = {
  title: "Nebulab — AIプロダクト開発ラボ",
  description:
    "Nebulab は「思考と行動の間」を埋めるAIプロダクトを開発するラボです。能動型ナビゲーター Navi を筆頭に、複数のAIプロダクトを開発しています。",
};

export default function HomePage() {
  return <HomeClient />;
}
