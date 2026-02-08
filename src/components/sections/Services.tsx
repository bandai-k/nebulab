import Link from "next/link";
import Card from "@/components/ui/Card";

type ServicePlan = {
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

const plans: ServicePlan[] = [
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

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-5xl px-6 pb-16">
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">
          SERVICES
        </p>
        <h2 className="mt-1 text-lg font-semibold text-[#3d2f24]">
          サービス紹介
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5c4d3c]">
          お店の状況に合わせて、必要なサービスだけお選びいただけます。
        </p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.title}
            variant="highlight"
            className={[
              "relative flex flex-col overflow-visible border-t-4 p-6",
              plan.accentBorder,
            ].join(" ")}
          >
            {/* ラベル */}
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
              <ul className="space-y-2 text-sm text-[#5c4d3c]">
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
        ))}
      </div>
    </section>
  );
}
