"use client";

import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";

type Track = "Product" | "Place" | "Process";

type ExperimentStatus = "Running" | "Planned" | "Archived";

type Experiment = {
    id: string;
    title: string;
    track: Track;
    status: ExperimentStatus;
    goal: string;
    approach: string;
    learnings: string[];
    next: string[];
    links?: Array<{ href: string; label: string }>;
};

const tracks: Array<{ title: Track; desc: string; items: string[] }> = [
    {
        title: "Product",
        desc: "小さく出して、反応から改善する。",
        items: ["仮説を言語化", "最小実装で検証", "学びをプロダクトに反映"],
    },
    {
        title: "Place",
        desc: "集中できる環境は“運用”で作る。",
        items: ["ルール・導線の設計", "居心地を崩さない運営", "再現できる型に落とす"],
    },
    {
        title: "Process",
        desc: "現場で回る開発・改善の型。",
        items: ["仕様整理のテンプレ化", "改善サイクルの設計", "チームが迷わない手順化"],
    },
];

const statusBadge: Record<ExperimentStatus, { label: string; className: string }> = {
    Running: { label: "RUNNING", className: "bg-[#e8f3ea] text-[#1f5b2e] border-[#b7d6bf]" },
    Planned: { label: "PLANNED", className: "bg-[#fff3e3] text-[#7a4b12] border-[#f1d1a8]" },
    Archived: { label: "ARCHIVED", className: "bg-[#f3f3f3] text-[#444] border-[#ddd]" },
};

const experiments: Experiment[] = [
    {
        id: "exp-001",
        title: "小さく作って試す：検証用プロトタイプ運用",
        track: "Product",
        status: "Running",
        goal: "“作る前の迷い”を減らし、最短で仮説検証できる状態を作る。",
        approach:
            "仮説→最小仕様→実装→計測/観察→振り返り、の流れを固定化。スコープを小さく切るルールを持つ。",
        learnings: [
            "仕様は“完成形”より“検証できる最小形”を先に定義した方が早い",
            "見せる相手（ユーザー/関係者）が明確だと意思決定が速い",
        ],
        next: [
            "検証テンプレ（仮説/成功条件/観察項目）を標準化",
            "公開できる範囲でログを整備していく",
        ],
        links: [{ href: "/projects", label: "Projects も見る →" }],
    },
    {
        id: "exp-002",
        title: "NRT-LOFT：混み合わない前提の運用設計",
        track: "Place",
        status: "Running",
        goal: "集中を守りつつ、継続運営できる“静かな場”の型を作る。",
        approach:
            "利用導線・ルール・案内文・料金/時間設計を微調整しながら、居心地と運用負荷のバランスを取る。",
        learnings: [
            "場の体験は“備品”より“運用ルール”で決まる",
            "混雑回避は、予約/紹介の設計と案内文が効く",
        ],
        next: ["案内ページの改善（期待値調整）", "運用チェックリストを整備して再現性を上げる"],
        links: [{ href: "https://nrt-loft.jp", label: "NRT-LOFT を見る ↗" }],
    },
    {
        id: "exp-003",
        title: "改善を循環させる：ふりかえり→テンプレ化",
        track: "Process",
        status: "Planned",
        goal: "学びを“個人の経験”で終わらせず、再利用できる形にする。",
        approach:
            "案件/運用/プロダクトの学びを、テンプレ・チェックリスト・短いガイドに落とし込み、使い回す。",
        learnings: ["（準備中）"],
        next: ["雛形（仕様整理 / ふりかえり / 改善ログ）を公開可能な形に整える", "更新の運用ルールを決める"],
        links: [{ href: "/services", label: "事業内容を見る →" }],
    },
];

export default function ExperimentsClient() {
    return (
        <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
            {/* Hero */}
            <MotionSection>
                <section className="mx-auto w-full max-w-5xl px-6 py-14">
                    <p className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">EXPERIMENTS</p>
                    <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                        取り組み・実験
                    </h1>
                    <p className="mt-4 max-w-3xl text-pretty text-sm leading-7 text-[#5c4d3c] sm:text-base">
                        NEBULABでは、プロダクトと拠点づくり（Place）の実験を通じて、
                        <span className="font-semibold text-[#3d2f24]">現場で使える形</span>
                        に落とし込みます。
                        <br />
                        大きく賭けない。小さく試して、学びを積み上げる。そのためのログです。
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex h-10 items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-5 text-sm font-medium text-white transition hover:bg-[#a0622b]"
                        >
                            相談する →
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white/70 px-5 text-sm font-medium text-[#3d2f24] transition hover:bg-white"
                        >
                            Projects を見る →
                        </Link>
                    </div>

                    <p className="mt-6 text-xs text-[#8b7355]">
                        ※ 公開できる範囲で更新します。個別案件の守秘がある場合は抽象化して掲載します。
                    </p>
                </section>
            </MotionSection>

            {/* Tracks */}
            <MotionSection>
                <section className="mx-auto w-full max-w-5xl px-6 pb-10">
                    <div className="grid gap-4 sm:grid-cols-3">
                        {tracks.map((t) => (
                            <div key={t.title} className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-6">
                                <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">
                                    {t.title.toUpperCase()}
                                </div>
                                <div className="mt-2 text-sm font-semibold text-[#3d2f24]">{t.desc}</div>
                                <ul className="mt-4 space-y-2 text-sm text-[#5c4d3c]">
                                    {t.items.map((it) => (
                                        <li key={it} className="flex items-start gap-2">
                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b87333]" />
                                            <span className="leading-7">{it}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>
            </MotionSection>

            {/* Experiment cards */}
            <MotionSection>
                <section className="mx-auto w-full max-w-5xl px-6 pb-14">
                    <div className="flex items-end justify-between gap-4">
                        <h2 className="text-lg font-semibold text-[#3d2f24]">実験ログ</h2>
                        <span className="text-xs text-[#8b7355]">順次更新</span>
                    </div>

                    <div className="mt-5 space-y-4">
                        {experiments.map((e) => (
                            <div key={e.id} className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-7">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span
                                                className={[
                                                    "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold",
                                                    statusBadge[e.status].className,
                                                ].join(" ")}
                                            >
                                                {statusBadge[e.status].label}
                                            </span>

                                            <span className="rounded-full border border-[#ddc9a3] bg-white/70 px-2 py-0.5 text-[11px] text-[#5c4d3c]">
                                                {e.track}
                                            </span>
                                        </div>

                                        <h3 className="mt-3 text-xl font-semibold text-[#3d2f24]">{e.title}</h3>

                                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                            <div className="rounded-xl border border-[#ddc9a3] bg-white/70 p-4">
                                                <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">
                                                    GOAL
                                                </div>
                                                <p className="mt-2 text-sm leading-7 text-[#5c4d3c]">{e.goal}</p>
                                            </div>

                                            <div className="rounded-xl border border-[#ddc9a3] bg-white/70 p-4">
                                                <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">
                                                    APPROACH
                                                </div>
                                                <p className="mt-2 text-sm leading-7 text-[#5c4d3c]">{e.approach}</p>
                                            </div>
                                        </div>

                                        <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                            <div className="rounded-xl border border-[#ddc9a3] bg-white/70 p-4">
                                                <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">
                                                    LEARNINGS
                                                </div>
                                                <ul className="mt-2 space-y-2 text-sm text-[#5c4d3c]">
                                                    {e.learnings.map((l) => (
                                                        <li key={l} className="flex items-start gap-2">
                                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b87333]" />
                                                            <span className="leading-7">{l}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="rounded-xl border border-[#ddc9a3] bg-white/70 p-4">
                                                <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">
                                                    NEXT
                                                </div>
                                                <ul className="mt-2 space-y-2 text-sm text-[#5c4d3c]">
                                                    {e.next.map((n) => (
                                                        <li key={n} className="flex items-start gap-2">
                                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b87333]" />
                                                            <span className="leading-7">{n}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {e.links?.length ? (
                                        <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                                            {e.links.map((l) => (
                                                <Link
                                                    key={l.href}
                                                    href={l.href}
                                                    className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white px-4 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
                                                >
                                                    {l.label}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Closing CTA */}
                    <div className="mt-8 rounded-2xl border border-[#ddc9a3] bg-[#fef3d9] p-7">
                        <p className="text-sm leading-7 text-[#3d2f24]">
                            実験は「成功」だけが価値ではありません。
                            <br />
                            何を試し、何を学び、次にどう活かすか——その積み重ねが、確かな前進になります。
                        </p>

                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex h-10 items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-5 text-sm font-medium text-white transition hover:bg-[#a0622b]"
                            >
                                相談する →
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white px-5 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
                            >
                                事業内容を見る →
                            </Link>
                        </div>
                    </div>
                </section>
            </MotionSection>
        </main>
    );
}
