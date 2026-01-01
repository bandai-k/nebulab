import Image from "next/image";
import type { Metadata } from "next";
import MotionSection from "@/components/ui/MotionSection";

export const metadata: Metadata = {
  title: "思想 - NEBULAB",
  description: "NEBULABが大切にしている思想と価値観。小さく始め、確かに積み上げるための考え方。",
};

const philosophies = [
  {
    no: "01",
    title: "小さくはじめて、確かに積み上げる",
    desc: "完璧を目指すのではなく、まず小さく始める。そして、確実に一歩ずつ積み上げていく。この姿勢が、持続可能な成長と、本当に価値のあるものづくりにつながると信じています。",
    note: "Small start, steady progress",
  },
  {
    no: "02",
    title: "プロダクトと場づくりの両輪",
    desc: "優れたプロダクトも、それを生み出す場がなければ持続しません。プロダクト開発と拠点づくり（Place）を両輪として捉え、両方を同時に育てていくことが重要だと考えています。",
    note: "Product × Place",
  },
  {
    no: "03",
    title: "思考は、まだ途中だ",
    desc: "答えは最初からあるものではなく、試行錯誤の過程で見つけていくもの。思考は常に進行中であり、完結しない。その過程そのものに価値があると考えています。",
    note: "Thinking in progress",
  },
  {
    no: "04",
    title: "現場で使える形に",
    desc: "理論や理想だけでなく、実際の現場で使える形に落とし込む。ユーザーや利用者の声に耳を傾け、実践を通じて改善を重ねていく。それが本当の意味での価値創造につながります。",
    note: "From idea to practice",
  },
];

export default function PhilosophyPage() {
  return (
    <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
      {/* Hero */}
      <MotionSection >
        <section className="mx-auto w-full max-w-5xl px-6 pt-16 pb-12">
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            思想
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-sm leading-7 text-[#5c4d3c] sm:text-base">
            NEBULABは、完成された答えよりも、考え続ける姿勢を大切にしています。
            小さく試し、学び、積み上げる。その循環を支えるための思想です。
          </p>
        </section>
      </MotionSection>
      {/* Philosophy blocks */}
      <MotionSection>
        <section className="mx-auto w-full max-w-5xl px-6 pb-12">
          <div className="space-y-8">
            {philosophies.map((p) => (
              <div
                key={p.no}
                className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-[#b87333]">
                    {p.no}
                  </span>
                  <span className="text-xs text-[#8b7355]">{p.note}</span>
                </div>

                <h2 className="mt-3 text-xl font-bold text-[#3d2f24]">
                  {p.title}
                </h2>

                <p className="mt-4 leading-relaxed text-[#5c4d3c]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </MotionSection>
      {/* Quiet image */}
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
              NEBULABの思想は、ここで完結するものではありません。
              実践の中で問い直され、更新され続けます。
              <br />
              <span className="font-semibold">
                思考は、まだ途中だ。
              </span>
            </p>
          </div>
        </section>
      </MotionSection>
    </main>
  );
}
