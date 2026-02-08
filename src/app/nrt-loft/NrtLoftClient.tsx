"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";
import { BRAND } from "@/constants/brand";

const uses = [
    {
        title: "相談・打ち合わせ",
        desc: "お店の困りごとを、直接お聞きする場所として。リラックスした雰囲気でお話しできます。",
    },
    {
        title: "少人数ワークショップ",
        desc: "Googleマップの使い方、SNSの活用法など、お店のオーナー向けの勉強会を不定期開催。",
    },
    {
        title: "時間貸しスペース",
        desc: "ちょっとした作業や打ち合わせに。少人数でのご利用が可能です。",
    },
];

export default function NrtLoftClient() {
    return (
        <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
            {/* Hero */}
            <section className="mx-auto w-full max-w-6xl px-6 pt-12">
                <Reveal>
                    <div className="flex flex-wrap gap-2">
                        <Pill>成田</Pill>
                        <Pill>旧山中釣具店2F</Pill>
                        <Pill>DIYリノベーション</Pill>
                    </div>
                </Reveal>

                <Reveal delayMs={60}>
                    <div className="mt-6">
                        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                            NRT LOFT
                        </h1>
                        <p className="mt-2 text-sm text-[#8b7355]">
                            NEBULABの拠点 — 成田の旧釣具屋2階
                        </p>

                        <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-[#5c4d3c] sm:text-base">
                            成田の旧山中釣具店の2階を、DIYでリノベーションした小さなスペース。
                            <br className="hidden sm:block" />
                            ここで相談を受けたり、打ち合わせをしたり、
                            少人数のワークショップを開催しています。
                        </p>
                    </div>
                </Reveal>
            </section>

            {/* 写真ギャラリー（プレースホルダー） */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-4 pt-12">
                <Reveal>
                    <h2 className="text-lg font-semibold text-[#3d2f24]">スペースの様子</h2>
                </Reveal>

                <Reveal delayMs={60}>
                    <div className="mt-5 grid gap-4 sm:grid-cols-3">
                        {[1, 2, 3].map((n) => (
                            <div
                                key={n}
                                className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#ddc9a3] bg-[#fef3d9]"
                            >
                                <div className="flex h-full items-center justify-center text-sm text-[#8b7355]">
                                    写真 {n}（近日追加予定）
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* 使い方 */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-4 pt-12">
                <Reveal>
                    <h2 className="text-lg font-semibold text-[#3d2f24]">使い方</h2>
                </Reveal>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {uses.map((u, i) => (
                        <Reveal key={u.title} delayMs={80 * i}>
                            <Card className="h-full p-6">
                                <div className="text-sm font-semibold text-[#3d2f24]">
                                    {u.title}
                                </div>
                                <p className="mt-2 text-sm leading-6 text-[#5c4d3c]">
                                    {u.desc}
                                </p>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* アクセス */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-4 pt-12">
                <Reveal>
                    <h2 className="text-lg font-semibold text-[#3d2f24]">アクセス</h2>
                </Reveal>

                <Reveal delayMs={60}>
                    <Card className="mt-5 p-6">
                        <dl className="space-y-4">
                            <div>
                                <dt className="text-sm font-semibold text-[#3d2f24]">住所</dt>
                                <dd className="mt-1 text-sm text-[#5c4d3c]">
                                    千葉県成田市（詳細はお問い合わせ時にお伝えします）
                                </dd>
                            </div>
                            <div>
                                <dt className="text-sm font-semibold text-[#3d2f24]">建物</dt>
                                <dd className="mt-1 text-sm text-[#5c4d3c]">
                                    旧山中釣具店 2階
                                </dd>
                            </div>
                        </dl>

                        {/* 地図プレースホルダー */}
                        <div className="mt-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#ddc9a3] bg-[#fef3d9]">
                            <div className="flex h-full items-center justify-center text-sm text-[#8b7355]">
                                地図は近日追加予定
                            </div>
                        </div>
                    </Card>
                </Reveal>
            </section>

            {/* 外部リンク + CTA */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12">
                <Reveal>
                    <Card className="p-6 text-center sm:p-8">
                        <div className="text-lg font-semibold">
                            NRT LOFTに来てみませんか？
                        </div>
                        <p className="mt-3 text-sm leading-6 text-[#5c4d3c]">
                            相談・打ち合わせのご予約はお問い合わせフォームからどうぞ。
                        </p>

                        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Button as="a" href="/contact" variant="primary">
                                お問い合わせ
                            </Button>
                            <a
                                href={BRAND.nrtLoftUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-10 items-center justify-center gap-1 rounded-full border border-[#ddc9a3] bg-white px-5 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
                            >
                                NRT-LOFT 公式サイト
                                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </Card>
                </Reveal>
            </section>
        </main>
    );
}
