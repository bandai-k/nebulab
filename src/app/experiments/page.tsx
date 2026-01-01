import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "取り組み・実験 - NEBULAB",
  description: "NEBULABの取り組みと実験について。",
};

export default function ExperimentsPage() {
  return (
    <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
      <section className="mx-auto w-full max-w-5xl px-6 py-14">
        <h1 className="text-2xl font-semibold tracking-tight">取り組み・実験</h1>
        <p className="mt-3 text-sm leading-7 text-[#5c4d3c]">
          NEBULABでは、プロダクトと拠点づくり（Place）の実験を通じて、現場で使える形に落とし込みます。
        </p>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-14">
        <div className="space-y-8">
          <div className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">プロダクト開発</h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              小さく作り、早く試し、継続して育てる。ユーザーの課題を解決するプロダクトを、アジャイルな開発手法で実現します。
            </p>
          </div>

          <div className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">拠点づくり（NRT-LOFT）</h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              成田の拠点「NRT-LOFT」を運営し、働く場所・学びの場としての環境づくりに取り組んでいます。
              集まる・試す・改善する――その循環を設計します。
            </p>
          </div>

          <div className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">実験と改善</h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              新しいアイデアを小さく試し、フィードバックを得て、継続的に改善していく。
              失敗を恐れず、学びを積み重ねることで、より良いソリューションを生み出します。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

