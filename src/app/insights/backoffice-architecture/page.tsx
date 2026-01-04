import type { Metadata } from "next";

import { Intro } from "./sections/Intro";
import { InlineToc } from "./sections/InlineToc";
import { Architecture } from "./sections/Architecture";
import { Overview } from "./sections/Overview";
import { Layers } from "./sections/Layers";
import { DiAndNaming } from "./sections/DiAndNaming";
import { CsvDesign } from "./sections/CsvDesign";
import { Exclusion } from "./sections/Exclusion";
import { Future } from "./sections/Future";
import { Fit } from "./sections/Fit";
import { Summary } from "./sections/Summary";

export const metadata: Metadata = {
    title: "安全に拡張できるバックオフィス設計 | NEBULAB",
    description:
        "レガシーMVC基盤に業務ロジック層（UseCase）とDIを組み合わせ、データ抽出・CSV出力などのバックオフィス機能を安全に拡張するための設計パターン。",
};

export default function Page() {
    return (
        <main className="w-full" style={{ backgroundColor: "var(--cosmic-latte)" }}>
            <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
                <Intro />

                <div className="mt-8">
                    <InlineToc />
                </div>

                <article className="mt-10 space-y-12">
                    <Architecture />
                    <Overview />
                    <Layers />
                    <DiAndNaming />
                    <CsvDesign />
                    <Exclusion />
                    <Future />
                    <Fit />
                    <Summary />
                </article>
            </div>
        </main>
    );
}
