import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recruit - NEBULAB",
  description: "NEBULABの採用情報について。",
};

export default function RecruitPage() {
  return (
    <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
      <section className="mx-auto w-full max-w-5xl px-6 py-14">
        <h1 className="text-2xl font-semibold tracking-tight">Recruit</h1>
        <p className="mt-3 text-sm leading-7 text-[#5c4d3c]">
          NEBULABと一緒に働く仲間を募集しています。
        </p>
      </section>

      <section className="mx-auto w-full max-w-5xl px-6 pb-14">
        <div className="space-y-8">
          <div className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
            <h2 className="text-xl font-bold text-[#3d2f24]">採用情報</h2>
            <p className="mt-4 leading-relaxed text-[#5c4d3c]">
              小さくはじめて、確かに積み上げる。そんな姿勢で一緒に働ける仲間を探しています。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

