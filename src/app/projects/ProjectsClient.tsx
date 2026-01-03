"use client";

import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";

type ProjectStatus = "Active" | "Beta" | "Draft" | "Done";

type Project = {
    slug: string;
    title: string;
    catch: string;
    desc: string;
    status: ProjectStatus;
    tags: string[];
    highlights?: string[];
    links?: Array<{ href: string; label: string; external?: boolean }>;
};

type Stream = {
    title: string;
    desc: string;
    items: string[];
};

const streams: Stream[] = [
    {
        title: "Product",
        desc: "ユーザーに届く形を優先。小さく出して学び、改善を回します。",
        items: ["要件の言語化 / 仕様整理", "UI/UX設計と検証", "実装〜運用までの仕組み化"],
    },
    {
        title: "Place",
        desc: "集中できる環境と、継続できるリズムを設計します。",
        items: ["拠点（NRT-LOFT）運営の実践", "運用ルール・導線設計", "静かで強いコミュニティのつくり方"],
    },
    {
        title: "Experiments",
        desc: "仮説の実験場。失敗も含めて知見として残します。",
        items: ["プロトタイプ検証", "テンプレート化 / 再現性", "学びの公開（できる範囲で）"],
    },
];

const projects: Project[] = [
    {
        slug: "nrt-loft",
        title: "NRT-LOFT（拠点運営）",
        catch: "集中を守るための、小さな拠点。",
        desc: "生活リズムと集中を守るための運用設計。場のルール、導線、居心地、継続性を「仕組み」として整えています。",
        status: "Active",
        tags: ["Place", "Ops", "Community"],
        highlights: ["紹介制に近い運用", "混み合わない前提の設計", "継続できるルール化"],
        links: [{ href: "https://nrt-loft.jp", label: "NRT-LOFT 公式サイト", external: true }],
    },
    {
        slug: "nebula-templates",
        title: "NEBULAB テンプレート群",
        catch: "現場で使える形に落とす。",
        desc: "案件・プロダクトで得た知見を、再利用できるテンプレートとして整備。仕様整理、運用手順、改善サイクルの型を作ります。",
        status: "Active",
        tags: ["Product", "Docs", "Process"],
        highlights: ["仕様整理の型", "改善が回る運用テンプレ", "最小の一歩を切るためのフレーム"],
        links: [{ href: "/contact", label: "導入相談する" }],
    },
    {
        slug: "micro-products",
        title: "小さなプロダクト群（準備中）",
        catch: "小さく出して、育てる。",
        desc: "公開可能な形に整い次第、順次リリースしていく予定。学びを蓄積し、次の改善につなげます。",
        status: "Draft",
        tags: ["Product", "Prototype", "Iterate"],
        highlights: ["小さく公開 → 反応で改善", "運用コストを意識した設計", "積み上げて資産化"],
        links: [{ href: "/news", label: "更新情報を見る" }],
    },
    {
        slug: "experiments",
        title: "実験ログ（取り組み）",
        catch: "思考は、まだ途中だ。",
        desc: "試行錯誤のログを残し、どこで何を学んだかを可視化。失敗も含めて、次の判断材料にします。",
        status: "Beta",
        tags: ["Experiments", "Learning", "Log"],
        highlights: ["検証→学び→型化", "小さく試す設計", "公開できる範囲で共有"],
        links: [{ href: "/experiments", label: "取り組みを見る" }],
    },
];

const statusBadge: Record<ProjectStatus, { label: string; className: string }> = {
    Active: { label: "ACTIVE", className: "bg-[#e8f3ea] text-[#1f5b2e] border-[#b7d6bf]" },
    Beta: { label: "BETA", className: "bg-[#eef3ff] text-[#2442a2] border-[#c7d3ff]" },
    Draft: { label: "DRAFT", className: "bg-[#fff3e3] text-[#7a4b12] border-[#f1d1a8]" },
    Done: { label: "DONE", className: "bg-[#f3f3f3] text-[#444] border-[#ddd]" },
};

export default function ProjectsClient() {
    return (
        <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
            {/* Hero */}
            <MotionSection>
                <section className="mx-auto w-full max-w-5xl px-6 py-14">
                    <p className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">PROJECTS</p>
                    <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                        Projects
                    </h1>
                    <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-[#5c4d3c] sm:text-base">
                        NEBULABが取り組むプロジェクトの一覧です。
                        <br />
                        <span className="font-semibold text-[#3d2f24]">小さく試し、学び、積み上げる。</span>
                        その過程を、プロダクトと場づくりの両輪で進めています。
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex h-10 items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-5 text-sm font-medium text-white transition hover:bg-[#a0622b]"
                        >
                            相談する →
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white/70 px-5 text-sm font-medium text-[#3d2f24] transition hover:bg-white"
                        >
                            事業内容を見る →
                        </Link>
                    </div>
                </section>
            </MotionSection>

            {/* Streams */}
            <MotionSection>
                <section className="mx-auto w-full max-w-5xl px-6 pb-10">
                    <div className="grid gap-4 sm:grid-cols-3">
                        {streams.map((s) => (
                            <div key={s.title} className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-6">
                                <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">
                                    {s.title.toUpperCase()}
                                </div>
                                <div className="mt-2 text-sm font-semibold text-[#3d2f24]">{s.desc}</div>
                                <ul className="mt-4 space-y-2 text-sm text-[#5c4d3c]">
                                    {s.items.map((it) => (
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

            {/* Project list */}
            <MotionSection>
                <section className="mx-auto w-full max-w-5xl px-6 pb-14">
                    <div className="flex items-end justify-between gap-4">
                        <h2 className="text-lg font-semibold text-[#3d2f24]">プロジェクト一覧</h2>
                        <span className="text-xs text-[#8b7355]">順次更新</span>
                    </div>

                    <div className="mt-5 space-y-4">
                        {projects.map((p) => (
                            <div
                                key={p.slug}
                                className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-7"
                            >
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span
                                                className={[
                                                    "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold",
                                                    statusBadge[p.status].className,
                                                ].join(" ")}
                                            >
                                                {statusBadge[p.status].label}
                                            </span>

                                            <div className="flex flex-wrap gap-2">
                                                {p.tags.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="rounded-full border border-[#ddc9a3] bg-white/70 px-2 py-0.5 text-[11px] text-[#5c4d3c]"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <h3 className="mt-3 text-xl font-semibold text-[#3d2f24]">{p.title}</h3>
                                        <p className="mt-2 text-sm font-medium text-[#8b7355]">{p.catch}</p>
                                        <p className="mt-4 text-sm leading-7 text-[#5c4d3c]">{p.desc}</p>

                                        {p.highlights?.length ? (
                                            <ul className="mt-4 space-y-2 text-sm text-[#5c4d3c]">
                                                {p.highlights.map((h) => (
                                                    <li key={h} className="flex items-start gap-2">
                                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b87333]" />
                                                        <span className="leading-7">{h}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : null}
                                    </div>

                                    {p.links?.length ? (
                                        <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                                            {p.links.map((l) =>
                                                l.external ? (
                                                    <a
                                                        key={l.href}
                                                        href={l.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white px-4 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
                                                    >
                                                        {l.label} ↗
                                                    </a>
                                                ) : (
                                                    <Link
                                                        key={l.href}
                                                        href={l.href}
                                                        className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white px-4 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
                                                    >
                                                        {l.label} →
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer note + CTA */}
                    <div className="mt-8 rounded-2xl border border-[#ddc9a3] bg-[#fef3d9] p-7">
                        <p className="text-sm leading-7 text-[#3d2f24]">
                            プロジェクトは「完成品」ではなく、運用しながら育てるものだと考えています。
                            <br />
                            もし「今の状況に合う進め方」を一緒に考えたい場合は、気軽に声をかけてください。
                        </p>

                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/contact"
                                className="inline-flex h-10 items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-5 text-sm font-medium text-white transition hover:bg-[#a0622b]"
                            >
                                相談する →
                            </Link>
                            <Link
                                href="/news"
                                className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white px-5 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
                            >
                                更新情報を見る →
                            </Link>
                        </div>
                    </div>
                </section>
            </MotionSection>
        </main>
    );
}
