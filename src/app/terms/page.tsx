import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 - NEBULAB",
  description: "NEBULABの利用規約です。",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fff8e7] py-20 text-[#3d2f24]">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-bold">利用規約</h1>
        <p className="mt-4 text-sm text-[#8b7355]">最終更新日: 2024年12月1日</p>

        <div className="mt-12 space-y-8">
          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">第1条（適用）</h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              本規約は、NEBULAB（以下、「当ラボ」）が提供するサービスの利用条件を定めるものです。本サービスを利用するすべてのユーザーは、本規約に同意したものとみなします。
            </p>
          </section>

          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">
              第2条（禁止事項）
            </h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-[#5c4d3c]">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>当ラボのサーバーまたはネットワークに負荷をかける行為</li>
              <li>当ラボのサービスの運営を妨害する行為</li>
              <li>他のユーザーに関する個人情報を収集する行為</li>
              <li>不正アクセス行為</li>
              <li>その他、当ラボが不適切と判断する行為</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">
              第3条（サービスの提供の停止等）
            </h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              当ラボは、以下のいずれかに該当する場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：
            </p>
            <ul className="mt-3 list-inside list-disc space-y-2 text-[#5c4d3c]">
              <li>本サービスに係るコンピュータシステムの保守点検または更新を行う場合</li>
              <li>
                地震、落雷、火災、停電または天災などの不可抗力により本サービスの提供が困難となった場合
              </li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>その他、当ラボが本サービスの提供が困難と判断した場合</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">
              第4条（免責事項）
            </h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              当ラボは、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
            </p>
          </section>

          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">
              第5条（規約の変更）
            </h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              当ラボは、必要と判断した場合、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の規約は、当サイトに掲載された時点で効力を生じるものとします。
            </p>
          </section>

          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">
              第6条（お問い合わせ）
            </h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              本規約に関するお問い合わせは、以下までご連絡ください。
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
