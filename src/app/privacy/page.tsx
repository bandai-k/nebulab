import type { Metadata } from "next";
import SectionHeading from "@/components/decor/SectionHeading";

export const metadata: Metadata = {
  title: "プライバシーポリシー — Nebulab",
  description: "Nebulabのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 pb-20 pt-32 md:px-10 md:pt-40">
      <SectionHeading
        level="h1"
        label="PRIVACY POLICY"
        heading="プライバシーポリシー"
        color="indigo"
      />

      <div className="mt-12 space-y-0">
        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">個人情報の取り扱いについて</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            NEBULAB（以下、「当ラボ」）は、お客様の個人情報の保護に最大限の注意を払い、以下の方針に基づいて個人情報を取り扱います。
          </p>
        </section>

        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">1. 個人情報の収集</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            当ラボは、お問い合わせフォームやメールでのやり取りの際に、お名前、メールアドレス、電話番号などの個人情報を収集する場合があります。
          </p>
        </section>

        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">2. 個人情報の利用目的</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            収集した個人情報は、以下の目的で利用いたします：
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm leading-7 text-ink-sub">
            <li>お問い合わせへの対応</li>
            <li>サービスの提供・改善</li>
            <li>重要なお知らせの配信</li>
            <li>統計データの作成（個人を特定できない形式）</li>
          </ul>
        </section>

        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">3. 個人情報の第三者提供</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            当ラボは、法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。
          </p>
        </section>

        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">4. 個人情報の管理</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            当ラボは、個人情報の漏洩、紛失、破損などを防止するため、適切な安全管理措置を講じます。
          </p>
        </section>

        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">5. Cookieの使用について</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            当サイトでは、利便性の向上やアクセス解析のためにCookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。
          </p>
        </section>

        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">6. お問い合わせ</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
          </p>
          <p className="mt-3">
            <a
              href="mailto:contact@nebulab.jp"
              className="text-sm text-ink-sub hover:text-accent"
            >
              contact@nebulab.jp
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
