import type { Metadata } from "next";
import NaviClient from "./NaviClient";

export const metadata: Metadata = {
  title: "Navi — Nebulab",
  description:
    "答えではなく、次の一歩を作るAI。Naviは能動型のAIナビゲーターです。",
};

export default function NaviPage() {
  return <NaviClient />;
}
