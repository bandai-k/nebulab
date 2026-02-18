"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";

// ============================================================
// データ定義
// ============================================================

type Feature = {
    title: string;
    desc: string;
    points: string[];
};

type Plan = {
    name: string;
    price: string;
    priceNote: string;
    desc: string;
    features: string[];
    recommended?: boolean;
};

type Step = {
    title: string;
    desc: string;
};

type Faq = {
    q: string;
    a: string;
};

const features: Feature[] = [
    {
        title: "Googleビジネスプロフィールの整備",
        desc: "お店の情報を正しく、魅力的に整えます。",
        points: [
            "営業時間・住所・電話番号の最適化",
            "メニュー・写真のアップロード",
            "カテゴリ設定の見直し",
        ],
    },
    {
        title: "運用サポート・改善提案",
        desc: "数字を見ながら、次にやることを一緒に考えます。",
        points: [
            "毎月の閲覧数・来店数レポート",
            "口コミへの返信テンプレート作成",
            "投稿・写真の定期更新サポート",
        ],
    },
    {
        title: "予約・問い合わせにつなげる導線",
        desc: "見つけてもらった後に、電話や予約につなげます。",
        points: [
            "予約ボタン・メニューリンクの設置",
            "電話・経路ボタンの最適な配置",
            "WebサイトやSNSとの接続",
        ],
    },
];

const plans: Plan[] = [
    {
        name: "ライト",
        price: "5,000",
        priceNote: "円/月",
        desc: "まずは情報を整えたい方向け。",
        features: [
            "Googleビジネスプロフィール初期整備",
            "基本情報・カテゴリの最適化",
            "写真アップロード（10枚まで）",
            "口コミ返信テンプレート提供",
        ],
    },
    {
        name: "スタンダード",
        price: "10,000",
        priceNote: "円/月",
        desc: "整備＋毎月の改善サポート。",
        features: [
            "ライトの内容すべて",
            "毎月の閲覧数・来店数レポート",
            "改善提案（月1回）",
            "投稿・写真の更新サポート",
        ],
        recommended: true,
    },
    {
        name: "プロ",
        price: "15,000",
        priceNote: "円/月",
        desc: "投稿・更新もおまかせしたい方向け。",
        features: [
            "スタンダードの内容すべて",
            "投稿代行（月4回）",
            "写真撮影・加工（月1回訪問）",
            "競合分析レポート",
        ],
    },
];

const steps: Step[] = [
    {
        title: "お問い合わせ",
        desc: "フォームからお気軽にご連絡ください。現状のお悩みを教えてください。",
    },
    {
        title: "無料ヒアリング",
        desc: "お店にお伺いして、Googleマップの現状を一緒に確認します。",
    },
    {
        title: "ご提案・お見積り",
        desc: "お店に合ったプランを分かりやすくご説明します。",
    },
    {
        title: "整備・運用開始",
        desc: "初期整備を実施し、運用をスタート。最短1週間で反映されます。",
    },
];

const faqs: Faq[] = [
    {
        q: "「Googleマップで上位に表示される」って保証できるの？",
        a: "表示順位の保証はできません。Googleの仕組み上、順位を確約することは誰にもできません。代わりに、お店の情報を正しく整えて、見つけてもらいやすく・選ばれやすくすることをお手伝いします。",
    },
    {
        q: "どのくらいで効果が出ますか？",
        a: "業種や競合の状況によりますが、整備後1〜3ヶ月で検索表示回数やお店の閲覧数に変化が見えてくることが多いです。",
    },
    {
        q: "口コミを増やしたいのですが…",
        a: "口コミをお願いする声かけのタイミングや、QRコードの設置など、自然に口コミが集まる仕組みづくりをご提案します。口コミの購入や不正な方法は一切行いません。",
    },
    {
        q: "パソコンが苦手でも大丈夫？",
        a: "もちろん大丈夫です。初期整備から運用まで、すべてこちらで対応できます。お店では普段通りのお仕事に集中してください。",
    },
    {
        q: "契約の縛りはある？",
        a: "最低契約期間は3ヶ月です。3ヶ月以降はいつでも解約可能です。まずは3ヶ月試してみて、効果を確認してから継続するかお決めいただけます。",
    },
    {
        q: "営業電話はかかってきますか？",
        a: "営業電話はしません。お問い合わせいただいた内容に対して、メールまたはご希望の方法でご連絡します。",
    },
];

// ============================================================
// コンポーネント
// ============================================================

export default function MeoClient() {
    return (
        <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
            {/* Hero */}
            <section className="mx-auto w-full max-w-6xl px-6 pt-12">
                <Reveal>
                    <div className="flex flex-wrap gap-2">
                        <Pill>Googleマップ集客</Pill>
                        <Pill>成田エリア対応</Pill>
                        <Pill>月額5,000円〜</Pill>
                    </div>
                </Reveal>

                <Reveal delayMs={60}>
                    <div className="mt-6">
                        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                            「成田 ランチ」で検索された時に、
                            <br className="hidden sm:block" />
                            お店が見つかるようにします
                        </h1>

                        <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-[#5c4d3c] sm:text-base">
                            Googleマップでお店を検索した時に上位に表示されるよう、
                            <span className="font-semibold text-[#3D2F24]">
                                お店の情報を整えて、見つけてもらいやすく
                            </span>
                            します。
                            さらに、電話・経路案内・予約につなげる導線も整備します。
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <Button as="a" href="/contact?topic=meo" variant="primary">
                                無料で相談する
                            </Button>
                            <Button as="a" href="#plans" variant="secondary">
                                料金プランを見る
                            </Button>
                        </div>

                        <div className="mt-6 space-y-1 text-xs text-[#8b7355]">
                            <p>※ 営業電話はしません</p>
                            <p>※ 順位保証ではなく、お店の情報を正しく整えるサービスです</p>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Features */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-4 pt-16">
                <Reveal>
                    <h2 className="text-lg font-semibold text-[#3d2f24]">できること</h2>
                </Reveal>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {features.map((f, i) => (
                        <Reveal key={f.title} delayMs={80 * i}>
                            <Card variant="highlight" className="h-full p-6">
                                <div className="text-sm font-semibold text-[#3d2f24]">{f.title}</div>
                                <p className="mt-2 text-sm leading-6 text-[#5c4d3c]">{f.desc}</p>

                                <div className="mt-4 rounded-xl border border-[#f0e1c0] bg-[#fff8e7] p-4">
                                    <ul className="space-y-2 text-sm text-[#5c4d3c]">
                                        {f.points.map((p) => (
                                            <li key={p} className="flex items-start gap-2">
                                                <span className="mt-[3px] h-2 w-2 shrink-0 rounded-full bg-[#b87333]" />
                                                <span>{p}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Plans */}
            <section id="plans" className="mx-auto w-full max-w-6xl px-6 pb-4 pt-12">
                <Reveal>
                    <div className="flex items-end justify-between gap-4">
                        <h2 className="text-lg font-semibold text-[#3d2f24]">料金プラン</h2>
                        <span className="text-xs text-[#8b7355]">税別</span>
                    </div>
                </Reveal>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {plans.map((plan, i) => (
                        <Reveal key={plan.name} delayMs={80 * i}>
                            <Card
                                variant={plan.recommended ? "highlight" : "default"}
                                className={[
                                    "relative h-full p-6",
                                    plan.recommended ? "ring-1 ring-[#b87333]/30" : "",
                                ].join(" ")}
                            >
                                {plan.recommended && (
                                    <span className="absolute right-4 top-4 rounded-full border border-[#b87333] bg-[#b87333] px-3 py-1 text-[11px] font-semibold text-white">
                                        おすすめ
                                    </span>
                                )}

                                <div className="text-sm font-semibold text-[#3d2f24]">{plan.name}</div>
                                <div className="mt-2">
                                    <span className="text-2xl font-bold text-[#3d2f24]">¥{plan.price}</span>
                                    <span className="text-sm text-[#8b7355]">/{plan.priceNote.replace("円/月", "月")}</span>
                                </div>
                                <p className="mt-2 text-sm leading-6 text-[#5c4d3c]">{plan.desc}</p>

                                <div className="mt-4 border-t border-[#ddc9a3] pt-4">
                                    <ul className="space-y-2 text-sm text-[#5c4d3c]">
                                        {plan.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2">
                                                <span className="mt-[3px] h-2 w-2 shrink-0 rounded-full bg-[#b87333]" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>

                <Reveal delayMs={120}>
                    <p className="mt-4 text-center text-xs text-[#8b7355]">
                        ※ 最低契約期間は3ヶ月です。3ヶ月以降はいつでも解約可能です。
                    </p>
                </Reveal>
            </section>

            {/* Steps */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-4 pt-12">
                <Reveal>
                    <h2 className="text-lg font-semibold text-[#3d2f24]">ご依頼の流れ</h2>
                </Reveal>

                <div className="mt-5 grid gap-4 sm:grid-cols-4">
                    {steps.map((s, i) => (
                        <Reveal key={s.title} delayMs={60 * i}>
                            <Card className="h-full p-5">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#ddc9a3] bg-[#fef3d9] text-xs font-semibold text-[#3d2f24]">
                                        {i + 1}
                                    </span>
                                    <div className="text-sm font-semibold">{s.title}</div>
                                </div>
                                {i < 3 && (
                                    <span className="mt-2 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                                        無料
                                    </span>
                                )}
                                <p className="mt-2 text-sm leading-6 text-[#5c4d3c]">{s.desc}</p>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-4 pt-12">
                <Reveal>
                    <h2 className="text-lg font-semibold text-[#3d2f24]">よくある質問</h2>
                </Reveal>

                <div className="mt-5 grid gap-4">
                    {faqs.map((faq, i) => (
                        <Reveal key={faq.q} delayMs={40 * i}>
                            <Card className="p-5">
                                <div className="text-sm font-semibold text-[#3d2f24]">Q. {faq.q}</div>
                                <p className="mt-2 text-sm leading-6 text-[#5c4d3c]">{faq.a}</p>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12">
                <Reveal>
                    <Card className="p-6 text-center sm:p-8">
                        <div className="text-lg font-semibold">
                            まずはお気軽にご相談ください
                        </div>
                        <p className="mt-3 text-sm leading-6 text-[#5c4d3c]">
                            お店のGoogleマップの現状を確認して、改善ポイントをお伝えします。
                            <br className="hidden sm:block" />
                            営業電話はしません。お気軽にどうぞ。
                        </p>
                        <div className="mt-6 flex justify-center gap-3">
                            <Button as="a" href="/contact?topic=meo" variant="primary">
                                無料で相談する
                            </Button>
                            <Link
                                href="/services"
                                className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white px-5 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
                            >
                                サービス一覧へ
                            </Link>
                        </div>
                    </Card>
                </Reveal>
            </section>
        </main>
    );
}
