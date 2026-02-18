import type { Metadata } from "next";
import DemoClient from "./DemoClient";

export const metadata: Metadata = {
  title: "Demo — Nebulab",
  description: "Naviのデモ体験。完成品ではなく、体験の核だけを公開しています。",
};

export default function DemoPage() {
  return <DemoClient />;
}
