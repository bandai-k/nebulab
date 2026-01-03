"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function AboutClient() {
    return (
        <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
            {/* Hero */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-14">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                    {/* 左：説明 */}
                    <div className="lg:col-span-5">
                        <Reveal>
                            <p className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">
                                COMPANY
                            </p>
                            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                                会社概要
                            </h1>
                            <p className="mt-4 max-w-xl text-sm leading-7 text-[#5c4d3c] sm:text-base">
                                NEBULABについての基本情報です。プロダクト開発を軸に、「働く場所」や「学びの場」も含めた環境づくりを行う小さなラボとして活動しています。
                            </p>
                        </Reveal>

                        <Reveal delayMs={120}>
                            <div className="mt-6 flex flex-wrap gap-2">
                                <span className="rounded-full border border-[#ddc9a3] bg-white/60 px-3 py-1 text-xs text-[#5c4d3c]">
                                    Product Development
                                </span>
                                <span className="rounded-full border border-[#ddc9a3] bg-white/60 px-3 py-1 text-xs text-[#5c4d3c]">
                                    Place / Community
                                </span>
                                <span className="rounded-full border border-[#ddc9a3] bg-white/60 px-3 py-1 text-xs text-[#5c4d3c]">
                                    Narita / NRT-LOFT
                                </span>
                            </div>
                        </Reveal>

                        <Reveal delayMs={220}>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/contact"
                                    className="inline-flex h-10 items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-5 text-sm font-medium text-white transition hover:bg-[#a0622b]"
                                >
                                    お問い合わせ
                                </Link>
                                <Link
                                    href="/philosophy"
                                    className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white/70 px-5 text-sm font-medium text-[#3d2f24] transition hover:bg-white"
                                >
                                    思想を読む →
                                </Link>
                            </div>
                        </Reveal>
                    </div>

                    {/* 右：NAME/COLOR */}
                    <div className="lg:col-span-7">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <Reveal delayMs={80} y={12}>
                                <div className="rounded-3xl border border-[#ddc9a3] bg-white/60 p-7">
                                    <p className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">
                                        NAME
                                    </p>
                                    <h2 className="mt-2 text-lg font-semibold text-[#3d2f24]">
                                        NEBULAB という名前
                                    </h2>
                                    <p className="mt-4 text-sm leading-7 text-[#5c4d3c]">
                                        NEBULAB は「Nebula（星雲）」と「Lab（実験場）」を組み合わせた名前です。
                                        星雲は、まだ形になっていない可能性が集まり、やがて新しい星が生まれる場所。
                                        <br />
                                        <br />
                                        私たちは、完成された答えではなく、
                                        <span className="font-semibold text-[#3d2f24]">
                                            試しながら育っていく過程
                                        </span>
                                        そのものを価値だと考えています。
                                    </p>
                                </div>
                            </Reveal>

                            <Reveal delayMs={160} y={12}>
                                <div className="rounded-3xl border border-[#ddc9a3] bg-[#FFF8E7] p-7">
                                    <p className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">
                                        COLOR
                                    </p>
                                    <h2 className="mt-2 text-lg font-semibold text-[#3d2f24]">
                                        Cosmic Latte
                                    </h2>
                                    <p className="mt-4 text-sm leading-7 text-[#5c4d3c]">
                                        NEBULABのイメージカラーは
                                        <span className="font-semibold text-[#3d2f24]">
                                            Cosmic Latte（#FFF8E7）
                                        </span>
                                        です。
                                        <br />
                                        <br />
                                        これは「宇宙の平均色」とも呼ばれる色。
                                        強い主張をせず、すべてを包み込み、
                                        思考や対話の余白をつくる色だと考えています。
                                    </p>

                                    <div className="mt-5 flex items-center gap-3">
                                        <span className="inline-block h-6 w-6 rounded-full border border-[#ddc9a3] bg-[#FFF8E7]" />
                                        <span className="text-xs text-[#8b7355]">#FFF8E7</span>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Body */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-16">
                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Company facts */}
                    <Reveal className="lg:col-span-2" delayMs={60}>
                        <section className="rounded-3xl border border-[#ddc9a3] bg-white/60 p-7">
                            <h2 className="text-lg font-semibold text-[#3d2f24]">基本情報</h2>
                            <p className="mt-2 text-sm leading-7 text-[#5c4d3c]">
                                まずは必要な情報だけを、見やすく整理しています。
                            </p>

                            <dl className="mt-6 divide-y divide-[#ddc9a3]">
                                <div className="grid gap-2 py-4 md:grid-cols-4 md:gap-6">
                                    <dt className="text-sm font-semibold text-[#3d2f24]">屋号</dt>
                                    <dd className="text-sm text-[#5c4d3c] md:col-span-3">
                                        NEBULAB（ネビュラボ）
                                    </dd>
                                </div>

                                <div className="grid gap-2 py-4 md:grid-cols-4 md:gap-6">
                                    <dt className="text-sm font-semibold text-[#3d2f24]">代表</dt>
                                    <dd className="text-sm text-[#5c4d3c] md:col-span-3">
                                        萬代 晃生
                                    </dd>
                                </div>

                                <div className="grid gap-2 py-4 md:grid-cols-4 md:gap-6">
                                    <dt className="text-sm font-semibold text-[#3d2f24]">事業形態</dt>
                                    <dd className="text-sm text-[#5c4d3c] md:col-span-3">
                                        個人事業主
                                        <span className="ml-2 text-xs text-[#8b7355]">
                                            （2026年4月 法人登記予定）
                                        </span>
                                    </dd>
                                </div>

                                <div className="grid gap-2 py-4 md:grid-cols-4 md:gap-6">
                                    <dt className="text-sm font-semibold text-[#3d2f24]">活動開始</dt>
                                    <dd className="text-sm text-[#5c4d3c] md:col-span-3">
                                        2024年
                                    </dd>
                                </div>

                                <div className="grid gap-2 py-4 md:grid-cols-4 md:gap-6">
                                    <dt className="text-sm font-semibold text-[#3d2f24]">所在地</dt>
                                    <dd className="text-sm text-[#5c4d3c] md:col-span-3">
                                        千葉県成田市
                                    </dd>
                                </div>

                                <div className="grid gap-2 py-4 md:grid-cols-4 md:gap-6">
                                    <dt className="text-sm font-semibold text-[#3d2f24]">拠点</dt>
                                    <dd className="text-sm text-[#5c4d3c] md:col-span-3">
                                        NRT-LOFT（成田）
                                    </dd>
                                </div>

                                <div className="grid gap-2 py-4 md:grid-cols-4 md:gap-6">
                                    <dt className="text-sm font-semibold text-[#3d2f24]">事業内容</dt>
                                    <dd className="text-sm text-[#5c4d3c] md:col-span-3">
                                        <ul className="list-inside list-disc space-y-1">
                                            <li>Webアプリケーション開発</li>
                                            <li>システム開発・保守運用</li>
                                            <li>UI/UXデザイン</li>
                                            <li>業務改善コンサルティング</li>
                                            <li>拠点運営（NRT-LOFT）</li>
                                        </ul>
                                        <div className="mt-3">
                                            <Link
                                                href="/services"
                                                className="text-sm font-medium text-[#b87333] hover:underline"
                                            >
                                                事業内容を詳しく見る →
                                            </Link>
                                        </div>
                                    </dd>
                                </div>

                                <div className="grid gap-2 py-4 md:grid-cols-4 md:gap-6">
                                    <dt className="text-sm font-semibold text-[#3d2f24]">お問い合わせ</dt>
                                    <dd className="text-sm text-[#5c4d3c] md:col-span-3">
                                        <a
                                            href="mailto:hello@nebulab.jp"
                                            className="font-medium text-[#b87333] hover:underline"
                                        >
                                            hello@nebulab.jp
                                        </a>
                                        <div className="mt-2 text-xs text-[#8b7355]">
                                            または{" "}
                                            <Link href="/contact" className="underline">
                                                お問い合わせフォーム
                                            </Link>{" "}
                                            より
                                        </div>
                                    </dd>
                                </div>
                            </dl>
                        </section>
                    </Reveal>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        <Reveal delayMs={120}>
                            <section className="rounded-3xl border border-[#ddc9a3] bg-white/60 p-7">
                                <h2 className="text-lg font-semibold text-[#3d2f24]">理念</h2>
                                <p className="mt-3 leading-relaxed text-[#5c4d3c]">
                                    小さくはじめて、確かに積み上げる。
                                    <br />
                                    プロダクト開発を軸に、「働く場所」や「学びの場」も含めた環境づくりを行う小さなラボです。
                                    <br />
                                    <br />
                                    成田の拠点（NRT-LOFT）運営をはじめ、集まる・試す・改善する――その循環を設計します。
                                </p>

                                <div className="mt-5">
                                    <Link
                                        href="/philosophy"
                                        className="text-sm font-medium text-[#b87333] hover:underline"
                                    >
                                        思想ページへ →
                                    </Link>
                                </div>
                            </section>
                        </Reveal>

                        <Reveal delayMs={200}>
                            <section className="rounded-3xl border border-[#ddc9a3] bg-[#fef3d9] p-7">
                                <h3 className="text-base font-semibold text-[#3d2f24]">
                                    まずは相談から
                                </h3>
                                <p className="mt-2 text-sm leading-7 text-[#5c4d3c]">
                                    仕様が固まっていなくても大丈夫です。現状と目的を伺い、最短ルートを一緒に考えます。
                                </p>
                                <div className="mt-5">
                                    <Link
                                        href="/contact"
                                        className="inline-flex h-10 w-full items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-5 text-sm font-medium text-white transition hover:bg-[#a0622b]"
                                    >
                                        お問い合わせへ
                                    </Link>
                                </div>
                                <div className="mt-3 text-xs text-[#8b7355]">
                                    目安：30分のヒアリングから
                                </div>
                            </section>
                        </Reveal>
                    </aside>
                </div>
            </section>
        </main>
    );
}
