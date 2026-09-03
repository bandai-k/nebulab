import Link from "next/link";
import { PARTNERS, LAYERS } from "@/data/partners";

/**
 * Partners(指示書 §5.6)。3社ではなく2社。
 * 掲載内容と許諾の注意書きは data/partners.ts を参照。
 * 詳細版は /partners。
 */
export default function Partners() {
  return (
    <section
      id="partners"
      className="border-b border-cyber-border-dim py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <p className="font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
          PARTNERS
        </p>

        <ul className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          {PARTNERS.map((p) => (
            <li
              key={p.name}
              className="border-t border-cyber-border-dim pt-8"
            >
              <h3 className="font-display text-lg font-normal tracking-[0.06em] text-cyber-text">
                {p.name}
              </h3>
              {p.representative && (
                <p className="mt-2 text-xs text-cyber-text-muted">
                  {p.representative}
                </p>
              )}
              {p.description && (
                <p className="mt-4 max-w-md text-sm leading-[2] text-cyber-text-secondary">
                  {p.description}
                </p>
              )}
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-5 inline-block font-mono text-[10px] tracking-[0.2em] text-cyber-text-secondary transition-colors hover:text-cyber-text"
                >
                  {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* 三層構造 — 単なる相互リンクではないことを示す */}
        <ol className="mt-20 border-t border-cyber-border-dim pt-10">
          {LAYERS.map((l, i) => (
            <li
              key={l.label}
              className="grid grid-cols-[7rem_1fr] items-baseline gap-4 py-3 md:grid-cols-[10rem_1fr]"
            >
              <span className="font-mono text-[11px] tracking-[0.2em] text-cyber-text">
                {l.label}
              </span>
              <span className="text-xs leading-6 text-cyber-text-secondary">
                {l.note}
                {i < LAYERS.length - 1 && (
                  <span className="ml-3 text-cyber-text-muted">↓</span>
                )}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Link
            href="/partners"
            className="font-mono text-[10px] tracking-[0.25em] text-cyber-text-secondary transition-colors hover:text-cyber-text"
          >
            パートナーの詳細 →
          </Link>
        </div>
      </div>
    </section>
  );
}
