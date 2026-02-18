"use client";

import MotionSection from "@/components/ui/MotionSection";
import { BRAND } from "@/constants/brand";
import { VALUES } from "@/constants/mvv";

export default function PhilosophyClient() {
    return (
        <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
            {/* Hero */}
            <MotionSection>
                <section className="mx-auto w-full max-w-5xl px-6 pb-12 pt-16">
                    <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                        思想
                    </h1>
                    <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-[#5c4d3c] sm:text-base">
                        {BRAND.name}は、完成された答えよりも、考え続ける姿勢を大切にしています。
                        小さく試し、学び、積み上げる。その循環を支えるための思想です。
                    </p>
                </section>
            </MotionSection>

            {/* Philosophy blocks */}
            <MotionSection>
                <section className="mx-auto w-full max-w-5xl px-6 pb-12">
                    <div className="space-y-8">
                        {VALUES.map((v) => (
                            <div
                                key={v.no}
                                className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold text-[#b87333]">
                                        {v.no}
                                    </span>
                                    <span className="text-xs text-[#8b7355]">{v.subtitle}</span>
                                </div>

                                <h2 className="mt-3 text-xl font-bold text-[#3d2f24]">
                                    {v.title}
                                </h2>

                                <p className="mt-4 leading-relaxed text-[#5c4d3c]">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </MotionSection>

            {/* Quiet */}
            <MotionSection>
                <section className="mx-auto w-full max-w-5xl px-6 pb-14">
                    <p className="mt-4 text-xs text-[#8b7355]">
                        思考は、静かな場所で、時間をかけて育っていく。
                    </p>
                </section>
            </MotionSection>

            {/* Closing */}
            <MotionSection>
                <section className="mx-auto w-full max-w-5xl px-6 pb-20">
                    <div className="rounded-2xl border border-[#ddc9a3] bg-[#fef3d9] p-8">
                        <p className="text-sm leading-7 text-[#3d2f24]">
                            {BRAND.name}の思想は、ここで完結するものではありません。
                            実践の中で問い直され、更新され続けます。
                            <br />
                            <span className="font-semibold">思考は、まだ途中だ。</span>
                        </p>
                    </div>
                </section>
            </MotionSection>
        </main>
    );
}
