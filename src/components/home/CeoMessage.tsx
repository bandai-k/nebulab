import Link from "next/link";
import SectionHeading from "@/components/decor/SectionHeading";
import { company } from "@/data/company";

/**
 * 代表メッセージ(指示書 v2 §5.5)。左に代表の写真、右に見出しと本文、
 * 末尾に役職と氏名。
 *
 * 写真は未用意のためプレースホルダ(§12-1)。ライトテーマになったので
 * 暗所撮影の制約は無くなっている。
 * 代表者名はカンプの架空名ではなく data/company.ts の実データを使う(§11)。
 */
export default function CeoMessage() {
  return (
    <section
      id="message"
      className="border-b border-rule py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <SectionHeading label="MESSAGE" color="teal" />

        <div className="mt-16 grid gap-12 md:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)] md:gap-16 lg:gap-20">
          {/* 写真 — 素材が用意でき次第差し替える(§12-1) */}
          <div className="panel relative aspect-3/4 w-full max-w-[300px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[10px] tracking-[0.24em] text-ink-sub">
                PHOTO PENDING
              </span>
            </div>
          </div>

          <div>
            <h2 className="font-display text-lg font-light leading-[1.95] tracking-[0.04em] text-ink md:text-xl">
              小さく始めて、無限に広がる。
            </h2>

            <div className="mt-8 space-y-6 text-sm leading-[2.1] text-ink-sub">
              <p>
                {"私は成田で生まれ育ちました。フリーランスエンジニアとして独立し、開発の現場で経験を重ねる中で、技術を地域社会の実課題と結びつけたいという想いが強くなりました。"}
              </p>
              <p>
                {"受託開発と内製化支援に加えて、自分たちのプロダクトを開発し、運用しています。自分で使い続けているからこそ、つくった後に何が起きるかを具体的に話せる。それがNebulabの提供価値だと考えています。"}
              </p>
            </div>

            {/* 末尾に役職と氏名(§5.5) */}
            <div className="mt-10 border-t border-rule pt-6">
              <p className="text-xs tracking-[0.12em] text-ink-sub">
                {company.name} 代表社員
              </p>
              <div className="mt-2 flex items-baseline gap-4">
                <span className="font-display text-base tracking-[0.06em] text-ink">
                  {company.ceo}
                </span>
                <span className="text-[10px] tracking-[0.24em] text-ink-sub">
                  {company.ceoEn.toUpperCase()}
                </span>
              </div>
            </div>

            <Link href="/about" className="btn btn-ghost mt-8">
              会社概要を見る
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
