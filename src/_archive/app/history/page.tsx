import type { Metadata } from "next";
import HistoryClient from "./HistoryClient";

export const metadata: Metadata = {
  title: "歩み - NEBULAB",
  description: "NEBULABの歩みと歴史について。",
};

export default function HistoryPage() {
  return <HistoryClient />;
}
