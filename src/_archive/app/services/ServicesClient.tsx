"use client";

import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import Reveal from "@/components/ui/Reveal";

// ============================================================
// データ定義
// ============================================================

type Plan = {
    label: string;
    labelColor: string;
    accentBorder: string;
    title: string;
    price: string;
    priceNote: string;
    description: string;
    includes: string[];
    href: string;
};

type Step = {
    title: string;
    desc: string;
    free?: boolean;
};

type Faq = {
    q: string;
    a: string;
};

const plans: Plan[] = [
    {
        label: "まずはここから",
        labelColor: "bg-emerald-600 text-white",
        accentBorder: "border-t-emerald-600",
        title: "Googleマップ集客サポート",
        price: "5,000〜15,000",
        priceNote: "円/月",
        description:
            "スマホで「成田 ランチ」と検索した時に、お店が上位に表示されるようにします。",
        includes: [
            "Googleビジネスプロフィールの初期設定・最適化",
            "営業時間・メニュー・写真の定期更新",
            "口コミへの返信テンプレート作成",
            "毎月の閲覧数・来店数レポート",
        ],
        href: "/services/meo",
    },
    {
        label: "一番人気",
        labelColor: "bg-[#b87333] text-white",
        accentBorder: "border-t-[#b87333]",
        title: "お店のホームページ制作",
        price: "50,000〜150,000",
        priceNote: "円",
        description:
            "メニュー・アクセス・予約がスマホ1画面で完結する、シンプルで速いサイトを作ります。",
        includes: [
            "スマホ対応の1ページ完結サイト",
            "LINE・電話・予約フォームとの連携",
            "メニュー表・ギャラリー付き",
            "外国人向け多言語対応もOK（英・中・韓）",
            "公開後1ヶ月の修正対応つき",
        ],
        href: "/contact",
    },
    {
        label: "おまかせ効率化",
        labelColor: "bg-blue-600 text-white",
        accentBorder: "border-t-blue-600",
        title: "AI活用のお店の業務かんたん化",
        price: "30,000〜100,000",
        priceNote: "円/スポット",
        description:
            "「手作業でめんどくさい」を、AIとITの力で自動化・時短します。",
        includes: [
            "SNS投稿の下書きをAIが自動作成",
            "売上管理・在庫管理のかんたんシステム構築",
            "外国人対応の翻訳ツール導入",
            "予約・問い合わせの自動応答",
            "お店に合わせたカスタマイズ提案",
        ],
        href: "/contact",
    },
];

const steps: Step[] = [
    { title: "お問い合わせ", desc: "フォームまたはメールからお気軽にご連絡ください。", free: true },
    { title: "ヒアリング", desc: "お店にお伺いして、困りごとを聞かせてください。", free: true },
    { title: "ご提案・お見積り", desc: "必要なことだけを分かりやすくご説明します。", free: true },
    { title: "作業開始", desc: "ご納得いただいてからスタートします。" },
    { title: "納品・サポート", desc: "使い方が分からなければいつでも聞いてください。" },
];

const faqs: Faq[] = [
    {
        q: "ITのことが全く分からないのですが、大丈夫ですか？",
        a: "もちろん大丈夫です。専門用語は一切使わず、かんたんな言葉でご説明します。パソコンが苦手な方でも安心してご利用いただけます。",
    },
    {
        q: "相談は無料ですか？",
        a: "はい、お問い合わせ・ヒアリング・ご提案まで完全無料です。ご納得いただいてから作業を開始します。",
    },
    {
        q: "成田エリア以外でも対応していますか？",
        a: "オンラインでの対応は全国可能です。直接お伺いできるのは成田エリアが中心ですが、近隣エリアもご相談ください。",
    },
    {
        q: "契約期間の縛りはありますか？",
        a: "Googleマップ集客サポートは月額契約ですが、いつでも解約可能です。ホームページ制作・業務効率化はスポット対応です。",
    },
    {
        q: "営業電話はかかってきますか？",
        a: "営業電話はしません。お問い合わせいただいた内容に対して、メールまたはご希望の方法でご連絡します。",
    },
];

// ============================================================
// コンポーネント
// ============================================================

export default function ServicesClient() {
    return (
        <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
            {/* Hero */}
            <section className="mx-auto w-full max-w-6xl px-6 pt-12">
                <Reveal>
                    <div className="flex flex-wrap gap-2">
                        <Pill>成田エリア対応</Pill>
                        <Pill>飲食店・小売店向け</Pill>
                        <Pill>無料相談あり</Pill>
                    </div>
                </Reveal>

                <Reveal delayMs={60}>
                    <div className="mt-6">
                        <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                            お店に合わせたサービスを、
                            <br className="hidden sm:block" />
                            必要な分だけ。
                        </h1>

                        <p className="mt-5 max-w-xl text-pretty text-sm leading-7 text-[#5c4d3c] sm:text-base">
                            Googleマップ集客、ホームページ制作、AI活用の業務効率化。
                            <br className="hidden sm:block" />
                            <span className="font-semibold text-[#3D2F24]">
                                難しい専門用語は使いません。
                            </span>
                            お店の状況に合わせてご提案します。
                        </p>

                        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                            <Button as="a" href="/contact" variant="primary">
                                無料で相談する
                            </Button>
                            <Button as="a" href="#plans" variant="secondary">
                                料金プランを見る
                            </Button>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Plans */}
            <section id="plans" className="mx-auto w-full max-w-6xl px-6 pb-4 pt-16">
                <Reveal>
                    <div className="flex items-end justify-between gap-4">
                        <h2 className="text-lg font-semibold text-[#3d2f24]">サービス・料金</h2>
                        <span className="text-xs text-[#8b7355]">税別</span>
                    </div>
                </Reveal>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                    {plans.map((plan, i) => (
                        <Reveal key={plan.title} delayMs={80 * i}>
                            <Card
                                variant="highlight"
                                className={[
                                    "relative flex h-full flex-col overflow-visible border-t-4 p-6",
                                    plan.accentBorder,
                                ].join(" ")}
                            >
                                <span
                                    className={[
                                        "absolute right-3 top-0 -translate-y-1/2 z-10 rounded-full px-3 py-1 text-[11px] font-semibold shadow-sm",
                                        plan.labelColor,
                                    ].join(" ")}
                                >
                                    {plan.label}
                                </span>

                                <div className="text-sm font-semibold text-[#3d2f24]">
                                    {plan.title}
                                </div>

                                <div className="mt-3">
                                    <span className="text-2xl font-bold text-[#3d2f24]">
                                        {plan.price}
                                    </span>
                                    <span className="ml-1 text-sm text-[#8b7355]">
                                        {plan.priceNote}
                                    </span>
                                </div>

                                <p className="mt-3 text-sm leading-6 text-[#5c4d3c]">
                                    {plan.description}
                                </p>

                                <div className="mt-4 flex-1 rounded-xl border border-[#f0e1c0] bg-[#fff8e7] p-4">
                                    <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">
                                        含まれるもの
                                    </div>
                                    <ul className="mt-3 space-y-2 text-sm text-[#5c4d3c]">
                                        {plan.includes.map((item) => (
                                            <li key={item} className="flex items-start gap-2">
                                                <span className="mt-[3px] h-2 w-2 shrink-0 rounded-full bg-[#b87333]" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-5">
                                    <Link
                                        href={plan.href}
                                        className="inline-flex h-10 w-full items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-5 text-sm font-medium text-white transition hover:bg-[#a0622b]"
                                    >
                                        相談する
                                    </Link>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Process */}
            <section className="mx-auto w-full max-w-6xl px-6 pb-4 pt-12">
                <Reveal>
                    <h2 className="text-lg font-semibold text-[#3d2f24]">ご依頼の流れ</h2>
                </Reveal>

                <div className="mt-5 grid gap-4 sm:grid-cols-5">
                    {steps.map((s, i) => (
                        <Reveal key={s.title} delayMs={60 * i}>
                            <Card className="h-full p-5">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#ddc9a3] bg-[#fef3d9] text-xs font-semibold text-[#3d2f24]">
                                        {i + 1}
                                    </span>
                                    <div className="text-sm font-semibold">{s.title}</div>
                                </div>
                                {s.free && (
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
                            まずはお気軽にご連絡ください
                        </div>
                        <p className="mt-3 text-sm leading-6 text-[#5c4d3c]">
                            「こんなこと聞いていいのかな？」も大歓迎です。
                        </p>
                        <div className="mt-6 flex justify-center gap-3">
                            <Button as="a" href="/contact" variant="primary">
                                無料で相談する
                            </Button>
                        </div>
                    </Card>
                </Reveal>
            </section>
        </main>
    );
}
