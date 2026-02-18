"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Card from "@/components/ui/Card";
import { BRAND } from "@/constants/brand";
import { VALUES } from "@/constants/mvv";

export default function AboutClient() {
    return (
        <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
            {/* Hero */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-14">
                <Reveal>
                    <p className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">
                        ABOUT
                    </p>
                    <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                        NEBULABについて
                    </h1>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5c4d3c] sm:text-base">
                        成田エリアの飲食店・小売店・個人事業主のための、
                        小さなIT支援の会社です。
                    </p>
                </Reveal>
            </section>

            {/* 代表紹介 */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-10">
                <div className="grid gap-6 lg:grid-cols-3">
                    <Reveal className="lg:col-span-2">
                        <Card className="p-7">
                            <h2 className="text-lg font-semibold text-[#3d2f24]">代表について</h2>
                            <div className="mt-4 space-y-4 text-sm leading-7 text-[#5c4d3c]">
                                <p>
                                    <span className="font-semibold text-[#3d2f24]">萬代 晃生（Koki）</span>
                                    — エンジニアとして10年以上の経験があります。
                                    Webアプリケーション開発を中心に、企業のシステム構築や業務改善に携わってきました。
                                </p>
                                <p>
                                    「小さなお店にも、ITの力を届けたい。」
                                    そう思って、成田でNEBULABを始めました。
                                </p>
                                <p>
                                    大きな会社のように何十人もスタッフがいるわけではありません。
                                    でも、だからこそ
                                    <span className="font-semibold text-[#3d2f24]">
                                        一つひとつのお店に丁寧に向き合える
                                    </span>
                                    と思っています。
                                </p>
                                <p>
                                    専門用語は使いません。分かりやすい言葉で説明します。
                                    「こんなこと聞いていいのかな？」ということも、お気軽にどうぞ。
                                </p>
                            </div>
                        </Card>
                    </Reveal>

                    <Reveal delayMs={120}>
                        <Card className="p-7 bg-[#fef3d9]">
                            <h3 className="text-base font-semibold text-[#3d2f24]">
                                思想：小さく始めて、循環させる
                            </h3>
                            <p className="mt-3 text-sm leading-7 text-[#5c4d3c]">
                                完璧を目指す前に、まず小さく始める。
                                試してみて、うまくいったことを広げる。
                                うまくいかなかったことは、やり方を変える。
                            </p>
                            <p className="mt-3 text-sm leading-7 text-[#5c4d3c]">
                                この「小さく始めて、循環させる」というやり方が、
                                お店にとっても、NEBULABにとっても、
                                一番いい進め方だと信じています。
                            </p>
                        </Card>
                    </Reveal>
                </div>
            </section>

            {/* 大切にしていること */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-10">
                <Reveal>
                    <h2 className="text-lg font-semibold text-[#3d2f24]">
                        大切にしていること
                    </h2>
                </Reveal>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    {VALUES.map((v, i) => (
                        <Reveal key={v.no} delayMs={80 * i}>
                            <Card className="h-full p-6">
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#ddc9a3] bg-[#fef3d9] text-xs font-semibold text-[#3d2f24]">
                                        {v.no}
                                    </span>
                                    <div>
                                        <div className="text-sm font-semibold text-[#3d2f24]">
                                            {v.title}
                                        </div>
                                        <div className="text-xs text-[#8b7355]">{v.subtitle}</div>
                                    </div>
                                </div>
                                <p className="mt-3 text-sm leading-6 text-[#5c4d3c]">
                                    {v.description}
                                </p>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* NAME / COLOR */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-10">
                <div className="grid gap-6 sm:grid-cols-2">
                    <Reveal delayMs={80}>
                        <Card className="p-7">
                            <p className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">
                                NAME
                            </p>
                            <h2 className="mt-2 text-lg font-semibold text-[#3d2f24]">
                                NEBULAB という名前
                            </h2>
                            <p className="mt-4 text-sm leading-7 text-[#5c4d3c]">
                                NEBULAB は「Nebula（星雲）」と「Lab（実験場）」を組み合わせた名前です。
                                星雲は、まだ形になっていない可能性が集まり、やがて新しい星が生まれる場所。
                            </p>
                            <p className="mt-3 text-sm leading-7 text-[#5c4d3c]">
                                完成された答えではなく、
                                <span className="font-semibold text-[#3d2f24]">
                                    試しながら育っていく過程
                                </span>
                                そのものを大切にしたい。そんな思いを込めています。
                            </p>
                        </Card>
                    </Reveal>

                    <Reveal delayMs={160}>
                        <Card className="p-7 bg-[#FFF8E7]">
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
                                です。「宇宙の平均色」とも呼ばれる色。
                                強い主張をせず、すべてを包み込む、あたたかな色です。
                            </p>

                            <div className="mt-5 flex items-center gap-3">
                                <span className="inline-block h-6 w-6 rounded-full border border-[#ddc9a3] bg-[#FFF8E7]" />
                                <span className="text-xs text-[#8b7355]">#FFF8E7</span>
                            </div>
                        </Card>
                    </Reveal>
                </div>
            </section>

            {/* 基本情報 */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-16">
                <Reveal>
                    <Card className="p-7">
                        <h2 className="text-lg font-semibold text-[#3d2f24]">基本情報</h2>

                        <dl className="mt-6 divide-y divide-[#ddc9a3]">
                            <div className="grid gap-2 py-4 md:grid-cols-4 md:gap-6">
                                <dt className="text-sm font-semibold text-[#3d2f24]">屋号</dt>
                                <dd className="text-sm text-[#5c4d3c] md:col-span-3">
                                    {BRAND.name}（{BRAND.nameKana}）
                                </dd>
                            </div>

                            <div className="grid gap-2 py-4 md:grid-cols-4 md:gap-6">
                                <dt className="text-sm font-semibold text-[#3d2f24]">代表</dt>
                                <dd className="text-sm text-[#5c4d3c] md:col-span-3">
                                    萬代 晃生（Koki）
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
                                    2025年7月
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
                                    <Link href="/nrt-loft" className="font-medium text-[#b87333] hover:underline">
                                        NRT LOFT（成田）
                                    </Link>
                                </dd>
                            </div>

                            <div className="grid gap-2 py-4 md:grid-cols-4 md:gap-6">
                                <dt className="text-sm font-semibold text-[#3d2f24]">事業内容</dt>
                                <dd className="text-sm text-[#5c4d3c] md:col-span-3">
                                    <ul className="list-inside list-disc space-y-1">
                                        <li>Googleマップ集客サポート</li>
                                        <li>お店のホームページ制作</li>
                                        <li>AI活用の業務効率化</li>
                                        <li>拠点運営（NRT LOFT）</li>
                                    </ul>
                                    <div className="mt-3">
                                        <Link
                                            href="/services"
                                            className="text-sm font-medium text-[#b87333] hover:underline"
                                        >
                                            サービス一覧を見る →
                                        </Link>
                                    </div>
                                </dd>
                            </div>

                            <div className="grid gap-2 py-4 md:grid-cols-4 md:gap-6">
                                <dt className="text-sm font-semibold text-[#3d2f24]">お問い合わせ</dt>
                                <dd className="text-sm text-[#5c4d3c] md:col-span-3">
                                    <a
                                        href={BRAND.emailMailto}
                                        className="font-medium text-[#b87333] hover:underline"
                                    >
                                        {BRAND.email}
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
                    </Card>
                </Reveal>
            </section>
        </main>
    );
}
