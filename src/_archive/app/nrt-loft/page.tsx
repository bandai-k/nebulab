import type { Metadata } from "next";
import NrtLoftClient from "./NrtLoftClient";

export const metadata: Metadata = {
    title: "NRT LOFT | NEBULAB - 成田エリアのお店のIT・Web支援",
    description:
        "成田の旧釣具屋2階をDIYでリノベーションしたNEBULABの拠点。相談・打ち合わせ・少人数ワークショップを行っています。",
};

export default function NrtLoftPage() {
    return <NrtLoftClient />;
}
