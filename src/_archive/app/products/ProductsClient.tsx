"use client";

import Link from "next/link";
import MotionSection from "@/components/ui/MotionSection";
import { BRAND } from "@/constants/brand";
import { getProductItems, STATUS_BADGE } from "@/constants/projects";

export default function ProductsClient() {
  const products = getProductItems();

  return (
    <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
      {/* Hero */}
      <MotionSection>
        <section className="mx-auto w-full max-w-5xl px-6 py-14">
          <p className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">
            PRODUCTS
          </p>

          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Products
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-[#5c4d3c] sm:text-base">
            {BRAND.name}が開発・運用するプロダクト群です。
            <br />
            <span className="font-semibold text-[#3d2f24]">小さく作って、育てて、公開していく。</span>
            その過程で得た学びを、次のプロダクトに活かします。
          </p>
        </section>
      </MotionSection>

      {/* Product list */}
      <MotionSection>
        <section className="mx-auto w-full max-w-5xl px-6 pb-14">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-semibold text-[#3d2f24]">
              プロダクト一覧
            </h2>
            <span className="text-xs text-[#8b7355]">順次更新</span>
          </div>

          <div className="mt-5 space-y-4">
            {products.map((p) => (
              <div
                key={p.slug}
                className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-7"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={[
                          "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold",
                          STATUS_BADGE[p.status].className,
                        ].join(" ")}
                      >
                        {STATUS_BADGE[p.status].label}
                      </span>

                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-[#ddc9a3] bg-white/70 px-2 py-0.5 text-[11px] text-[#5c4d3c]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="mt-3 text-xl font-semibold text-[#3d2f24]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[#8b7355]">
                      {p.catchphrase}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-[#5c4d3c]">
                      {p.description}
                    </p>

                    {p.highlights?.length ? (
                      <ul className="mt-4 space-y-2 text-sm text-[#5c4d3c]">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b87333]" />
                            <span className="leading-7">{h}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  {p.links?.length ? (
                    <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                      {p.links.map((l) =>
                        l.external ? (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white px-4 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
                          >
                            {l.label} ↗
                          </a>
                        ) : (
                          <Link
                            key={l.href}
                            href={l.href}
                            className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white px-4 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
                          >
                            {l.label} →
                          </Link>
                        )
                      )}
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note + CTA */}
          <div className="mt-8 rounded-2xl border border-[#ddc9a3] bg-[#fef3d9] p-7">
            <p className="text-sm leading-7 text-[#3d2f24]">
              プロダクトは「完成品」ではなく、
              運用しながら育てていくものだと考えています。
              <br />
              フィードバックや改善案があれば、気軽に声をかけてください。
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-10 items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-5 text-sm font-medium text-white transition hover:bg-[#a0622b]"
              >
                お問い合わせ →
              </Link>
              <Link
                href="/projects"
                className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white px-5 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
              >
                Projects を見る →
              </Link>
            </div>
          </div>
        </section>
      </MotionSection>
    </main>
  );
}
