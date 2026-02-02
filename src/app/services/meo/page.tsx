import type { Metadata } from "next";
import MeoClient from "./MeoClient";

export const metadata: Metadata = {
    title: "Googleマップ集客（MEO） - NEBULAB",
    description:
        "Googleマップ集客（MEO）と導線整備で、電話・経路・予約につなげる。順位保証ではなく「行動導線」を改善します。",
};

export default function MeoPage() {
    return <MeoClient />;
}
