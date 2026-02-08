import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "サービス一覧 | NEBULAB - 成田エリアのお店のIT・Web支援",
  description:
    "Googleマップ集客、ホームページ制作、AI業務効率化。成田エリアの飲食店・小売店・個人事業主に合わせたサービスを提供します。",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
