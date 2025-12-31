import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー - NEBULAB",
  description: "NEBULABのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#fff8e7] py-20 text-[#3d2f24]">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-bold">プライバシーポリシー</h1>
        <p className="mt-4 text-sm text-[#8b7355]">最終更新日: 2024年12月1日</p>

        <div className="mt-12 space-y-8">
          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">
              個人情報の取り扱いについて
            </h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              NEBULAB（以下、「当ラボ」）は、お客様の個人情報の保護に最大限の注意を払い、以下の方針に基づいて個人情報を取り扱います。
            </p>
          </section>

          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">
              1. 個人情報の収集
            </h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              当ラボは、お問い合わせフォームやメールでのやり取りの際に、お名前、メールアドレス、電話番号などの個人情報を収集する場合があります。
            </p>
          </section>

          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">
              2. 個人情報の利用目的
            </h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              収集した個人情報は、以下の目的で利用いたします：
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-[#5c4d3c]">
              <li>お問い合わせへの対応</li>
              <li>サービスの提供・改善</li>
              <li>重要なお知らせの配信</li>
              <li>統計データの作成（個人を特定できない形式）</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">
              3. 個人情報の第三者提供
            </h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              当ラボは、法令に基づく場合を除き、お客様の同意なく第三者に個人情報を提供することはありません。
            </p>
          </section>

          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">
              4. 個人情報の管理
            </h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              当ラボは、個人情報の漏洩、紛失、破損などを防止するため、適切な安全管理措置を講じます。
            </p>
          </section>

          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">
              5. Cookieの使用について
            </h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              当サイトでは、利便性の向上やアクセス解析のためにCookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定で無効にすることができます。
            </p>
          </section>

          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">
              6. お問い合わせ
            </h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
            </p>
            <p className="mt-3 text-[#5c4d3c]">
              <a
                href="mailto:hello@nebulab.jp"
                className="text-[#b87333] hover:underline"
              >
                hello@nebulab.jp
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
