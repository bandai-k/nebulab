import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "会社概要 - NEBULAB",
  description: "NEBULABの会社概要です。",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fff8e7] py-20 text-[#3d2f24]">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-bold">会社概要</h1>
        <p className="mt-4 text-[#5c4d3c]">
          NEBULABについての基本情報です。
        </p>

        <div className="mt-12 space-y-8">
          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <dl className="space-y-6">
              <div className="grid grid-cols-1 gap-2 border-b border-[#ddc9a3] pb-4 md:grid-cols-3">
                <dt className="font-semibold text-[#3d2f24]">屋号</dt>
                <dd className="text-[#5c4d3c] md:col-span-2">NEBULAB（ネビュラボ）</dd>
              </div>

              <div className="grid grid-cols-1 gap-2 border-b border-[#ddc9a3] pb-4 md:grid-cols-3">
                <dt className="font-semibold text-[#3d2f24]">代表</dt>
                <dd className="text-[#5c4d3c] md:col-span-2">未定</dd>
              </div>

              <div className="grid grid-cols-1 gap-2 border-b border-[#ddc9a3] pb-4 md:grid-cols-3">
                <dt className="font-semibold text-[#3d2f24]">設立</dt>
                <dd className="text-[#5c4d3c] md:col-span-2">2024年</dd>
              </div>

              <div className="grid grid-cols-1 gap-2 border-b border-[#ddc9a3] pb-4 md:grid-cols-3">
                <dt className="font-semibold text-[#3d2f24]">所在地</dt>
                <dd className="text-[#5c4d3c] md:col-span-2">
                  千葉県成田市<br />
                  NRT-LOFT（拠点）
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-2 border-b border-[#ddc9a3] pb-4 md:grid-cols-3">
                <dt className="font-semibold text-[#3d2f24]">事業内容</dt>
                <dd className="text-[#5c4d3c] md:col-span-2">
                  <ul className="list-inside list-disc space-y-1">
                    <li>Webアプリケーション開発</li>
                    <li>システム開発・保守運用</li>
                    <li>UI/UXデザイン</li>
                    <li>業務改善コンサルティング</li>
                    <li>拠点運営（NRT-LOFT）</li>
                  </ul>
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                <dt className="font-semibold text-[#3d2f24]">お問い合わせ</dt>
                <dd className="text-[#5c4d3c] md:col-span-2">
                  <a
                    href="mailto:hello@nebulab.jp"
                    className="text-[#b87333] hover:underline"
                  >
                    hello@nebulab.jp
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">理念</h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              小さくはじめて、確かに積み上げる。<br />
              プロダクト開発を軸に、「働く場所」や「学びの場」も含めた環境づくりを行う小さなラボです。<br />
              <br />
              成田の拠点（NRT-LOFT）運営をはじめ、集まる・試す・改善する――その循環を設計します。
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
