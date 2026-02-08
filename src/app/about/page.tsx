import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "NEBULABについて | NEBULAB - 成田エリアのお店のIT・Web支援",
  description:
    "NEBULABは成田エリアの飲食店・小売店・個人事業主のためのIT支援を行う小さな会社です。代表のKokiが1人で始めました。",
};

export default function AboutPage() {
  return <AboutClient />;
}
