import type { Metadata } from "next";
import Link from "next/link";
import { PARTNERS, LAYERS } from "@/data/partners";

export const metadata: Metadata = {
  title: "パートナー",
  description:
    "Nebulab合同会社が協業しているパートナー企業。生成AI活用研修の株式会社AIM、MMPR合同会社。",
  alternates: { canonical: "/partners" },
  openGraph: {
    url: "/partners",
    title: "パートナー | Nebulab合同会社",
    description: "Nebulab合同会社が協業しているパートナー企業。",
  },
  twitter: {
    title: "パートナー | Nebulab合同会社",
    description: "Nebulab合同会社が協業しているパートナー企業。",
  },
};

export default function PartnersPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-cyber-border-dim">
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40">
          <p className="font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
            PARTNERS
          </p>
          <h1 className="mt-8 font-display text-[1.4rem] font-light leading-[1.8] tracking-[0.06em] text-cyber-text md:text-[1.7rem]">
            パートナー
          </h1>
          <p className="mt-8 max-w-lg text-sm leading-[2.1] text-cyber-text-secondary">
            {"相互リンクではなく、実際に案件や役割を分担している相手です。得意な領域が重ならないため、入口から本格的な開発まで途切れずに引き渡せます。"}
          </p>
        </div>
      </section>

      {/* 各社 */}
      <section className="border-b border-cyber-border-dim py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <ul className="grid gap-12 md:grid-cols-2 md:gap-16">
            {PARTNERS.map((p) => (
              <li key={p.name} className="border-t border-cyber-border-dim pt-8">
                <h2 className="font-display text-lg font-normal tracking-[0.06em] text-cyber-text md:text-xl">
                  {p.name}
                </h2>
                {p.representative && (
                  <p className="mt-2 text-xs text-cyber-text-muted">
                    {p.representative}
                  </p>
                )}

                {p.description ? (
                  <p className="mt-6 max-w-md text-sm leading-[2.1] text-cyber-text-secondary">
                    {p.description}
                  </p>
                ) : (
                  <p className="mt-6 max-w-md text-sm leading-[2.1] text-cyber-text-muted">
                    事業内容は確認中です。
                  </p>
                )}

                {p.relationship && (
                  <div className="mt-8">
                    <p className="font-mono text-[9px] tracking-[0.3em] text-cyber-text-muted">
                      協業の形
                    </p>
                    <p className="mt-4 max-w-md text-sm leading-[2.1] text-cyber-text-secondary">
                      {p.relationship}
                    </p>
                  </div>
                )}

                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-8 inline-block font-mono text-[10px] tracking-[0.2em] text-cyber-text-secondary transition-colors hover:text-cyber-text"
                  >
                    {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 三層構造 */}
      <section className="border-b border-cyber-border-dim py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <p className="font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
            STRUCTURE
          </p>
          <h2 className="mt-8 font-display text-lg font-light leading-[1.9] tracking-[0.06em] text-cyber-text md:text-xl">
            入口から開発まで、役割を分けています。
          </h2>

          <ol className="mt-12 border-t border-cyber-border-dim">
            {LAYERS.map((l) => (
              <li
                key={l.label}
                className="grid grid-cols-1 gap-2 border-b border-cyber-border-dim py-7 md:grid-cols-[12rem_minmax(0,1fr)] md:items-baseline md:gap-8"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-cyber-text">
                  {l.label}
                </span>
                <span className="text-sm leading-7 text-cyber-text-secondary">
                  {l.note}
                </span>
              </li>
            ))}
          </ol>

          <div className="mt-12">
            <Link
              href="/contact"
              className="font-mono text-[10px] tracking-[0.25em] text-cyber-text-secondary transition-colors hover:text-cyber-text"
            >
              相談する →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
