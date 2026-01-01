import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NRT-LOFT - NEBULAB",
  description: "NRT-LOFTについて。",
};

export default function NrtLoftPage() {
  return (
    <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
      <section className="mx-auto w-full max-w-5xl px-6 py-14">
        <h1 className="text-2xl font-semibold tracking-tight">NRT-LOFT</h1>
        <p className="mt-3 text-sm leading-7 text-[#5c4d3c]">
          NEBULABが運営する成田の拠点「NRT-LOFT」について。
        </p>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-14">
        <div className="space-y-8">
          <div className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">NRT-LOFTについて</h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              NRT-LOFTは、千葉県成田市にあるNEBULABの拠点です。
              働く場所・学びの場としての環境づくりに取り組んでいます。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

