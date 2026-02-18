import type { Metadata } from "next";
import LabClient from "./LabClient";

export const metadata: Metadata = {
  title: "Lab — Nebulab",
  description: "Naviの開発ログ。Phase進捗、設計メモ、試作記録。",
};

export default function LabPage() {
  return <LabClient />;
}
