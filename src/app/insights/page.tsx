import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "取り組み・実験 - NEBULAB",
  description:
    "NEBULABの取り組みと実験。プロダクトと拠点づくり（Place）を横断し、小さく試して学びを積み上げます。",
};

export default function InsightsPage() {
  return <InsightsClient />;
}
