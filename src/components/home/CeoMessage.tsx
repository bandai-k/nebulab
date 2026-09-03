import Link from "next/link";
import LineArt from "@/components/decor/LineArt";
import { company } from "@/data/company";

/**
 * 代表メッセージ(指示書 §5.5)。左に写真、右に短いメッセージ。背景に線画を薄く。
 *
 * 写真は暗所での撮影が未了のためプレースホルダ(§10-1)。
 * 明るい写真を暗い背景に置くと浮くため、差し替え時は撮影条件に注意。
 * 代表者名はデザイン案の架空名ではなく data/company.ts の実データを使う(§11)。
 */
export default function CeoMessage() {
  return (
    <section
      id="message"
      className="relative overflow-hidden border-b border-cyber-border-dim py-24 md:py-32"
    >
      <LineArt
        name="pagoda"
        sizes="(min-width: 768px) 50vw, 100vw"
        className="pointer-events-none absolute -left-[10%] top-0 h-full w-[70%] md:w-[42%]"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-10">
        <p className="font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
          MESSAGE
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)] md:gap-16 lg:gap-20">
          {/* 写真 — 暗所撮影の素材が用意でき次第差し替える */}
          <div className="relative aspect-3/4 w-full max-w-[300px] border border-cyber-border-dim bg-surface">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[9px] tracking-[0.28em] text-cyber-text-muted">
                PHOTO PENDING
              </span>
            </div>
          </div>

          <div>
            <p className="font-display text-lg font-light leading-[2] tracking-[0.06em] text-cyber-text md:text-xl">
              小さく始めて、無限に広がる。
            </p>

            <div className="mt-8 space-y-6 text-sm leading-[2.1] text-cyber-text-secondary">
              <p>
                {"私は成田で生まれ育ちました。フリーランスエンジニアとして独立し、開発の現場で経験を重ねる中で、技術を地域社会の実課題と結びつけたいという想いが強くなりました。"}
              </p>
              <p>
                {"受託開発と内製化支援に加えて、自分たちのプロダクトを開発し、運用しています。自分で使い続けているからこそ、つくった後に何が起きるかを具体的に話せる。それがNebulabの提供価値だと考えています。"}
              </p>
            </div>

            <div className="mt-10 flex items-baseline gap-4">
              <span className="font-display text-base tracking-[0.08em] text-cyber-text">
                {company.ceo}
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] text-cyber-text-muted">
                {company.ceoEn.toUpperCase()}
              </span>
            </div>
            <p className="mt-1 text-xs text-cyber-text-muted">
              {company.name} 代表社員
            </p>

            <Link
              href="/about"
              className="mt-8 inline-block font-mono text-[10px] tracking-[0.25em] text-cyber-text-secondary transition-colors hover:text-cyber-text"
            >
              会社概要を見る →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
