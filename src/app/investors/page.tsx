import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investors - NEBULAB",
  description: "NEBULABの投資家情報について。",
};

export default function InvestorsPage() {
  return (
    <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
      <section className="mx-auto w-full max-w-5xl px-6 py-14">
        <h1 className="text-2xl font-semibold tracking-tight">Investors</h1>
        <p className="mt-3 text-sm leading-7 text-[#5c4d3c]">
          NEBULABの投資家情報について。
        </p>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-14">
        <div className="space-y-8">
          <div className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">投資家情報</h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              投資家の皆様向けの情報を掲載しています。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

