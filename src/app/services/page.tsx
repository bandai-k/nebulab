import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "事業内容 - NEBULAB",
  description: "NEBULABの事業内容です。プロダクトと場づくりの両輪で前に進めます。",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
