import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "歩み - NEBULAB",
  description: "NEBULABの歩みと歴史について。",
};

type TimelineItem = {
  year: string;
  label?: string; // "NOW" / "NEXT" など
  title: string;
  desc: string;
  bullets?: string[];
};

const timeline: TimelineItem[] = [
  {
    year: "2024",
    label: "START",
    title: "NEBULAB 立ち上げ",
    desc: "プロダクト開発と拠点づくり（Place）を両輪として、小さく始める。",
    bullets: [
      "小さく早く試す開発スタイルを定義",
      "成田を起点に、実験の場を育てる構想を開始",
    ],
  },
  {
    year: "2025",
    label: "NOW",
    title: "循環の設計",
    desc: "作る → 試す → 改善する。現場に根づく“運用”まで含めて整えるフェーズへ。",
    bullets: [
      "案件・プロダクトで得た知見をテンプレート化",
      "Place運営の実践から、働きやすさを再現できる形に",
    ],
  },
  {
    year: "NEXT",
    label: "FUTURE",
    title: "小さな星雲を、星へ",
    desc: "まだ形になっていない可能性を集め、プロダクトと場を育てながら、持続する仕組みにする。",
    bullets: [
      "公開できるプロダクト群を順次リリース",
      "コミュニティ／学びの機会を拡張",
    ],
  },
];

export default function HistoryPage() {
  return (
    <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-10 pt-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">
              HISTORY
            </p>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              歩み
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#5c4d3c] sm:text-base">
              NEBULABのこれまでと、これから。完成された物語ではなく、
              試しながら育っていく過程を記録していきます。
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#ddc9a3] bg-white/60 px-3 py-1 text-xs text-[#5c4d3c]">
                Small steps
              </span>
              <span className="rounded-full border border-[#ddc9a3] bg-white/60 px-3 py-1 text-xs text-[#5c4d3c]">
                Product × Place
              </span>
              <span className="rounded-full border border-[#ddc9a3] bg-white/60 px-3 py-1 text-xs text-[#5c4d3c]">
                Iterate & Improve
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white/70 px-5 text-sm font-medium text-[#3d2f24] transition hover:bg-white"
              >
                会社概要を見る →
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-10 items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-5 text-sm font-medium text-white transition hover:bg-[#a0622b]"
              >
                今やっていること →
              </Link>
            </div>
          </div>

          {/* 右側：ビジュアル（画像なしでも成立する“年表サマリー”） */}
          <div className="rounded-3xl border border-[#ddc9a3] bg-white/60 p-7">
            <div className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">
              SNAPSHOT
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#ddc9a3] bg-white/70 p-4">
                <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">
                  START
                </div>
                <div className="mt-1 text-sm font-semibold">2024</div>
                <p className="mt-1 text-xs leading-6 text-[#5c4d3c]">
                  立ち上げと方向づけ
                </p>
              </div>
              <div className="rounded-2xl border border-[#ddc9a3] bg-white/70 p-4">
                <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">
                  NOW
                </div>
                <div className="mt-1 text-sm font-semibold">2025</div>
                <p className="mt-1 text-xs leading-6 text-[#5c4d3c]">
                  循環の設計へ
                </p>
              </div>
              <div className="rounded-2xl border border-[#ddc9a3] bg-white/70 p-4">
                <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">
                  NEXT
                </div>
                <div className="mt-1 text-sm font-semibold">Future</div>
                <p className="mt-1 text-xs leading-6 text-[#5c4d3c]">
                  仕組みを育てる
                </p>
              </div>
            </div>

            <div className="mt-6 text-sm leading-7 text-[#5c4d3c]">
              <span className="font-semibold text-[#3d2f24]">思考は、まだ途中だ。</span>
              <br />
              だからこそ、試して、磨いて、更新していく。
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-[#ddc9a3] bg-white/60 p-7 sm:p-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-semibold text-[#3d2f24]">タイムライン</h2>
            <span className="text-xs text-[#8b7355]">順次更新</span>
          </div>

          <ol className="mt-8 space-y-6">
            {timeline.map((item, idx) => (
              <li key={`${item.year}-${idx}`} className="relative">
                <div className="grid gap-4 md:grid-cols-[120px,1fr] md:gap-8">
                  {/* 左：年 */}
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center gap-2">
                      <span className="text-2xl font-semibold tracking-tight text-[#3d2f24]">
                        {item.year}
                      </span>
                      {item.label && (
                        <span className="rounded-full border border-[#ddc9a3] bg-[#fef3d9] px-2 py-0.5 text-[11px] font-semibold text-[#5c4d3c]">
                          {item.label}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 右：内容 */}
                  <div className="rounded-2xl border border-[#ddc9a3] bg-white/70 p-6">
                    <h3 className="text-base font-semibold text-[#3d2f24]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#5c4d3c]">
                      {item.desc}
                    </p>

                    {item.bullets?.length ? (
                      <ul className="mt-4 space-y-2 text-sm text-[#5c4d3c]">
                        {item.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b87333]" />
                            <span className="leading-7">{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#8b7355]">
              ※ 実績や公開可能な取り組みは、整い次第「Projects」に反映します。
            </p>
            <Link
              href="/projects"
              className="text-sm font-medium text-[#b87333] hover:underline"
            >
              Projects を見る →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
