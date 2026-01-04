"use client";

import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";

type Track = "Product" | "Place" | "Process";

type InsightStatus = "Published" | "InProgress" | "Archived";

type Insight = {
  id: string;
  title: string;
  track: Track;
  status: InsightStatus;
  summary: string;
  context: string;
  keyPoints: string[];
  next: string[];
  links?: Array<{ href: string; label: string; external?: boolean }>;
};

const statusBadge: Record<InsightStatus, { label: string; className: string }> = {
  Published: { label: "PUBLISHED", className: "bg-[#e8f3ea] text-[#1f5b2e] border-[#b7d6bf]" },
  InProgress: { label: "IN PROGRESS", className: "bg-[#fff3e3] text-[#7a4b12] border-[#f1d1a8]" },
  Archived: { label: "ARCHIVED", className: "bg-[#f3f3f3] text-[#444] border-[#ddd]" },
};

const insights: Insight[] = [
  {
    id: "ins-001",
    title: "バックヤード機能を安全に拡張する：MVC + UseCase + DI + SQL分離",
    track: "Process",
    status: "Published",
    summary:
      "レガシー基盤でも、責務分離と差し替え点の設計で“壊れにくい拡張”を作る。CSV抽出や除外管理のような運用機能を題材に整理。",
    context:
      "決済・請求などの業務領域では、変更の安全性（壊れない/説明できる/後から伸ばせる）が最優先。Controllerを薄くし、UseCaseに業務フローを集約、DIで差し替え点を明示、SQLテンプレで抽出条件を安定化します。",
    keyPoints: [
      "Controllerは入力とレスポンス（CSV/画面）に専念",
      "UseCaseに業務フローを集約して拡張ポイントを固定",
      "DB操作はModelへ寄せ、業務ルールはUseCaseへ",
      "抽出条件はSQLテンプレートで差分が追える形に",
    ],
    next: ["PDF生成・履歴管理など“後から積む機能”の設計ポイントを追記", "監査/権限が絡む場合の分岐パターンを整理"],
    links: [{ href: "/insights/backoffice-architecture", label: "記事を読む →" }],
  },
  {
    id: "ins-002",
    title: "NRT-LOFT：混み合わない前提で“集中を守る”運用設計",
    track: "Place",
    status: "Published",
    summary:
      "場の体験は備品より運用で決まる。導線・案内文・ルールの微調整で、静かさと継続性のバランスを取る。",
    context:
      "拠点運営は“混雑を捌く”より“混雑しない”を設計する方が、体験も運用負荷も安定します。紹介制に近い運用や、期待値調整の文章設計など。",
    keyPoints: ["混雑回避は予約/紹介/案内文が効く", "ルールは“体験を守る”ための最小セットに", "継続できる運用チェックリストを持つ"],
    next: ["案内ページの改善（期待値調整）", "運用チェックリストの公開できる範囲を整備"],
    links: [{ href: "https://nrt-loft.jp", label: "NRT-LOFT を見る ↗", external: true }],
  },
  {
    id: "ins-003",
    title: "改善を循環させる：ふりかえり→テンプレ化→再利用",
    track: "Process",
    status: "InProgress",
    summary:
      "学びを“個人の経験”で終わらせず、テンプレ/チェックリストに落として再利用する。更新の運用まで含めて型化する。",
    context:
      "改善は発見より“再現”が難しい。短い雛形（仕様整理/ふりかえり/改善ログ）を作り、現場で回る更新ルールを決めます。",
    keyPoints: ["雛形は“埋めれば進む”粒度にする", "更新ルール（いつ/誰が/どう）まで設計する", "公開できる範囲で“判断の理由”を残す"],
    next: ["雛形を公開可能な形に整える", "更新ルールを決めて運用に乗せる"],
    links: [{ href: "/services", label: "事業内容を見る →" }],
  },
];

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
            {insights.map((e) => (
              <div key={e.id} className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={[
                          "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold",
                          statusBadge[e.status].className,
                        ].join(" ")}
                      >
                        {statusBadge[e.status].label}
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
