"use client";

import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { INSIGHTS, INSIGHT_STATUS_BADGE } from "@/constants/insights";

export default function InsightsClient() {
  return (
    <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
      {/* Hero */}
      <MotionSection>
        <section className="mx-auto w-full max-w-5xl px-6 py-14">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">INSIGHTS</p>

          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">Insights</h1>

          <p className="mt-4 max-w-3xl text-pretty text-sm leading-7 text-[#5c4d3c] sm:text-base">
            NEBULABの <span className="font-semibold text-[#3d2f24]">設計・運用・意思決定</span> の記録です。
            <br />
            「何を選び、なぜそうしたか」を残し、次の判断材料にします。
          </p>

          <p className="mt-6 text-xs text-[#8b7355]">
            ※ 守秘のある内容は抽象化しています。個別案件の固有情報・数値・顧客識別情報は掲載しません。
          </p>
        </section>
      </MotionSection>


      {/* Insight cards */}
      <MotionSection>
        <section className="mx-auto w-full max-w-5xl px-6 pb-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-semibold text-[#3d2f24]">記事・メモ</h2>
            <span className="text-xs text-[#8b7355]">順次更新</span>
          </div>

          <p className="mt-2 max-w-3xl text-sm leading-7 text-[#5c4d3c]">
            ここに載せるのは“唯一の正解”ではありません。
            現場の制約に合わせて選択肢を組み替え、判断の理由を残すためのログです。
          </p>

          <div className="mt-5 space-y-4">
            {INSIGHTS.map((e) => (
              <div key={e.id} className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={[
                          "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold",
                          INSIGHT_STATUS_BADGE[e.status].className,
                        ].join(" ")}
                      >
                        {INSIGHT_STATUS_BADGE[e.status].label}
                      </span>

                      <span className="rounded-full border border-[#ddc9a3] bg-white/70 px-2 py-0.5 text-[11px] text-[#5c4d3c]">
                        {e.track}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-semibold text-[#3d2f24]">{e.title}</h3>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-[#ddc9a3] bg-white/70 p-4">
                        <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">SUMMARY</div>
                        <p className="mt-2 text-sm leading-7 text-[#5c4d3c]">{e.summary}</p>
                      </div>

                      <div className="rounded-xl border border-[#ddc9a3] bg-white/70 p-4">
                        <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">CONTEXT</div>
                        <p className="mt-2 text-sm leading-7 text-[#5c4d3c]">{e.context}</p>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-xl border border-[#ddc9a3] bg-white/70 p-4">
                        <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">KEY POINTS</div>
                        <ul className="mt-2 space-y-2 text-sm text-[#5c4d3c]">
                          {e.keyPoints.map((l) => (
                            <li key={l} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b87333]" />
                              <span className="leading-7">{l}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-xl border border-[#ddc9a3] bg-white/70 p-4">
                        <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">NEXT</div>
                        <ul className="mt-2 space-y-2 text-sm text-[#5c4d3c]">
                          {e.next.map((n) => (
                            <li key={n} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b87333]" />
                              <span className="leading-7">{n}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {e.links?.length ? (
                    <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                      {e.links.map((l) =>
                        l.external ? (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white px-4 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
                          >
                            {l.label}
                          </a>
                        ) : (
                          <Link
                            key={l.href}
                            href={l.href}
                            className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white px-4 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
                          >
                            {l.label}
                          </Link>
                        )
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {/* Closing CTA */}
          <div className="mt-8 rounded-2xl border border-[#ddc9a3] bg-[#fef3d9] p-7">
            <p className="text-sm leading-7 text-[#3d2f24]">
              設計や運用は、状況によって最適解が変わります。
              <br />
              「いまの制約の中で、どう進めるのが良いか」を一緒に整理したい場合は、気軽に相談してください。
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-5 text-sm font-medium text-white transition hover:bg-[#a0622b]"
              >
                相談する →
              </Link>
            </div>
          </div>
        </section>
      </MotionSection>
    </main>
  );
}
