import type { Metadata } from "next";
import PhilosophyClient from "./PhilosophyClient";

export const metadata: Metadata = {
  title: "思想 - NEBULAB",
  description:
    "NEBULABが大切にしている思想と価値観。小さく始め、確かに積み上げるための考え方。",
};

export default function PhilosophyPage() {
  return <PhilosophyClient />;
}
