import type { Metadata } from "next";
import MeoClient from "./MeoClient";

export const metadata: Metadata = {
    title: "Googleマップ集客サポート | NEBULAB - 成田エリアのお店のIT・Web支援",
    description:
        "スマホで「成田 ランチ」と検索した時にお店が上位に表示されるようにします。Googleビジネスプロフィールの整備・運用・改善をサポート。",
};

export default function MeoPage() {
    return <MeoClient />;
}
