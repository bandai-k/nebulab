"use client";

import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { BRAND } from "@/constants/brand";
import {
    NEWS_ITEMS,
    CATEGORY_COLORS,
    CATEGORY_HELP,
    type NewsCategory,
} from "@/constants/news";

function formatDate(dateStr: string) {
    // "YYYY-MM-DD" → "YYYY.MM.DD"
    return dateStr.replaceAll("-", ".");
}

export default function NewsClient() {
    const count = NEWS_ITEMS.length;

    return (
        <main className="min-h-dvh bg-[#fff8e7] text-[#3d2f24]">
            {/* Hero */}
            <MotionSection>
                <section className="mx-auto w-full max-w-4xl px-6 pb-10 pt-16">
                    <p className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">NEWS</p>
                    <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                        お知らせ
                    </h1>
                    <p className="mt-4 text-sm leading-7 text-[#5c4d3c] sm:text-base">
                        {BRAND.name}からの最新情報をお届けします。
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-[#8b7355]">全 {count} 件</p>

                        {/* 連動CTA */}
                        <div className="flex flex-wrap gap-2">
                            <Link
                                href="/projects"
                                className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white/70 px-5 text-sm font-medium text-[#3d2f24] transition hover:bg-white"
                            >
                                Projects を見る →
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex h-10 items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-5 text-sm font-medium text-white transition hover:bg-[#a0622b]"
                            >
                                お問い合わせ →
                            </Link>
                        </div>
                    </div>
                </section>
            </MotionSection>

            {/* Category guide */}
            <MotionSection>
                <section className="mx-auto w-full max-w-4xl px-6 pb-6">
                    <div className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-5">
                        <div className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">
                            CATEGORIES
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {(Object.keys(CATEGORY_HELP) as NewsCategory[]).map((k) => (
                                <span
                                    key={k}
                                    className={[
                                        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium",
                                        CATEGORY_COLORS[k] ?? "bg-[#ddd] text-[#3d2f24]",
                                    ].join(" ")}
                                    title={CATEGORY_HELP[k]}
                                >
                                    {k}
                                    <span className="text-[11px] opacity-80">・{CATEGORY_HELP[k]}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            </MotionSection>

            {/* List */}
            <MotionSection>
                <section className="mx-auto w-full max-w-4xl px-6 pb-16">
                    <div className="space-y-4">
                        {NEWS_ITEMS.map((item) => (
                            <article
                                key={item.id}
                                className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-6 transition hover:bg-white/80"
                            >
                                <div className="flex flex-wrap items-center gap-3">
                                    <time className="text-sm text-[#8b7355]">{formatDate(item.date)}</time>
                                    <span
                                        className={[
                                            "rounded-full px-3 py-1 text-xs font-medium",
                                            CATEGORY_COLORS[item.category] ?? "bg-[#ddd] text-[#3d2f24]",
                                        ].join(" ")}
                                    >
                                        {item.category}
                                    </span>
                                    <span className="text-xs text-[#8b7355]">#{item.id}</span>
                                </div>

                                <h2 className="mt-3 text-lg font-semibold text-[#3d2f24]">
                                    {item.title}
                                </h2>

                                {item.excerpt && (
                                    <p className="mt-2 text-sm leading-7 text-[#5c4d3c]">{item.excerpt}</p>
                                )}

                                <div className="mt-4 flex items-center justify-end">
                                    <Link
                                        href="/contact"
                                        className="text-sm font-medium text-[#b87333] hover:underline"
                                    >
                                        詳しく聞く →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Footer note */}
                    <div className="mt-8 rounded-2xl border border-[#ddc9a3] bg-[#fef3d9] p-7">
                        <p className="text-sm leading-7 text-[#3d2f24]">
                            公開できる範囲で、活動の更新を続けます。
                            <br />
                            もし「この取り組みの詳細が知りたい」「一緒に進めたい」があれば、気軽に連絡ください。
                        </p>
                        <div className="mt-5">
                            <Link
                                href="/contact"
                                className="inline-flex h-10 items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-5 text-sm font-medium text-white transition hover:bg-[#a0622b]"
                            >
                                お問い合わせ →
                            </Link>
                        </div>
                    </div>
                </section>
            </MotionSection>
        </main>
    );
}
