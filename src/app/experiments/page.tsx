import type { Metadata } from "next";
import ExperimentsClient from "./ExperimentsClient";

export const metadata: Metadata = {
  title: "取り組み・実験 - NEBULAB",
  description:
    "NEBULABの取り組みと実験。プロダクトと拠点づくり（Place）を横断し、小さく試して学びを積み上げます。",
};

export default function ExperimentsPage() {
  return <ExperimentsClient />;
}
