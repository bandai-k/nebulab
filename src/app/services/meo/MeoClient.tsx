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
        title: "Googleビジネスプロフィール整備",
        desc: "検索結果で選ばれるために、情報の質と鮮度を整えます。",
        points: [
            "基本情報・カテゴリの最適化",
            "写真・投稿の定期更新",
            "口コミ返信の運用設計",
        ],
    },
    {
        title: "運用サポート・改善提案",
        desc: "数値を見ながら、次のアクションを一緒に考えます。",
        points: [
            "月次レポート（検索/閲覧/行動）",
            "競合分析と改善提案",
            "投稿・写真の運用代行",
        ],
    },
    {
        title: "導線整備・予約連携",
        desc: "見つけてもらった後、行動につなげる導線を整えます。",
        points: [
            "予約ボタン・メニュー連携",
            "WebサイトやSNSとの接続",
            "電話/経路ボタンの最適配置",
        ],
    },
];

const plans: Plan[] = [
    {
        name: "ライト",
        price: "9,800",
        desc: "まずは整備だけ。自分で運用したい方向け。",
        features: [
            "初期整備（1回）",
            "基本情報・カテゴリ最適化",
            "写真アップロード（10枚まで）",
            "運用マニュアル提供",
        ],
    },
    {
        name: "スタンダード",
        price: "29,800",
        desc: "整備＋月次レポートで改善サイクルを回す。",
        features: [
            "ライトの内容すべて",
            "月次レポート（検索/閲覧/行動）",
            "改善提案（月1回）",
            "口コミ返信テンプレート作成",
        ],
        recommended: true,
    },
    {
        name: "プロ",
        price: "49,800",
        desc: "投稿・写真の運用代行まで。手離れしたい方向け。",
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
        title: "無料診断",
        desc: "現状のGoogleビジネスプロフィールを15分で診断。改善ポイントをお伝えします。",
    },
    {
        title: "プラン提案",
        desc: "目的と予算に合わせて、最適なプランをご提案します。",
    },
    {
        title: "整備・運用開始",
        desc: "初期整備を実施し、運用をスタート。最短1週間で公開できます。",
    },
    {
        title: "改善サイクル",
        desc: "月次レポートをもとに、次の改善アクションを一緒に決めます。",
    },
];

const faqs: Faq[] = [
    {
        q: "順位保証はありますか？",
        a: "順位保証はしていません。Googleのアルゴリズムは公開されておらず、順位を確約することは不可能です。代わりに「検索→閲覧→行動」の導線全体を改善し、電話・経路・予約などの成果につなげます。",
    },
    {
        q: "どのくらいで効果が出ますか？",
        a: "業種や競合状況によりますが、整備後1〜3ヶ月で検索表示回数や閲覧数の変化が見えてくることが多いです。行動（電話・経路）への影響はさらに時間がかかる場合があります。",
    },
    {
        q: "口コミを増やす施策はありますか？",
        a: "口コミ依頼の仕組みづくり（声かけのタイミング、QRコード設置など）をご提案します。ただし、口コミの購入や不正なレビュー誘導は行いません。",
    },
    {
        q: "複数店舗でも対応できますか？",
        a: "はい、対応可能です。店舗数に応じたボリュームディスカウントもご用意しています。まずは1店舗から始めて、効果を見てから拡大することをおすすめします。",
    },
    {
        q: "契約期間の縛りはありますか？",
        a: "ライトプランは単発、スタンダード・プロは月額契約（最低3ヶ月〜）です。3ヶ月以降はいつでも解約可能です。",
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
                        <Pill>MEO対策</Pill>
                        <Pill>Googleマップ集客</Pill>
                        <Pill>導線整備</Pill>
                    </div>
                </Reveal>

                <Reveal delayMs={60}>
                    <div className="mt-6">
                        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                            Googleマップ集客（MEO）と導線整備で、
                            <br className="hidden sm:block" />
                            電話・経路・予約につなげる
                        </h1>

                        <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-[#5c4d3c] sm:text-base">
                            「検索で見つかる」だけでは不十分。
                            <span className="font-semibold text-[#3D2F24]">
                                見つけてもらった後に「行動してもらう」導線
                            </span>
                            まで整えることで、問い合わせや来店につなげます。
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <Button as="a" href="/contact?topic=meo" variant="primary">
                                無料診断（15分）を申し込む
                            </Button>
                            <Button as="a" href="#plans" variant="secondary">
                                料金プランを見る
                            </Button>
                        </div>

                        <div className="mt-6 space-y-1 text-xs text-[#8b7355]">
                            <p>※ 営業電話はしません</p>
                            <p>※ 順位保証ではなく「行動導線」を改善します</p>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Features */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-4 pt-16">
                <Reveal>
                    <div className="flex items-end justify-between gap-4">
                        <h2 className="text-lg font-semibold text-[#3d2f24]">できること</h2>
                        <span className="text-xs text-[#8b7355]">整備・運用・導線の3本柱</span>
                    </div>
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
                        <span className="text-xs text-[#8b7355]">税別・初期費用込み</span>
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
                                    <span className="text-sm text-[#8b7355]">/月</span>
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
                        ※ ライトプランは初期整備のみ（単発）。スタンダード・プロは月額契約（最低3ヶ月〜）です。
                    </p>
                </Reveal>
            </section>

            {/* Steps */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-4 pt-12">
                <Reveal>
                    <div className="flex items-end justify-between gap-4">
                        <h2 className="text-lg font-semibold text-[#3d2f24]">進め方</h2>
                        <span className="text-xs text-[#8b7355]">まずは無料診断から</span>
                    </div>
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
                                <p className="mt-3 text-sm leading-6 text-[#5c4d3c]">{s.desc}</p>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* FAQ */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-4 pt-12">
                <Reveal>
                    <div className="flex items-end justify-between gap-4">
                        <h2 className="text-lg font-semibold text-[#3d2f24]">よくある質問</h2>
                        <span className="text-xs text-[#8b7355]">FAQ</span>
                    </div>
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
                    <Card className="p-6 sm:p-8">
                        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                            <div>
                                <div className="text-sm font-semibold">
                                    まずは無料診断（15分）から
                                </div>
                                <p className="mt-2 text-sm leading-6 text-[#5c4d3c]">
                                    現状のGoogleビジネスプロフィールを診断し、改善ポイントをお伝えします。
                                    <br className="hidden sm:block" />
                                    営業電話はしません。お気軽にどうぞ。
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <Button as="a" href="/contact?topic=meo" variant="primary">
                                    無料診断を申し込む
                                </Button>
                                <Link
                                    href="/services"
                                    className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white px-5 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
                                >
                                    サービス一覧へ
                                </Link>
                            </div>
                        </div>
                    </Card>
                </Reveal>
            </section>
        </main>
    );
}
