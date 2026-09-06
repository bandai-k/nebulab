import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/decor/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { PARTNERS } from "@/data/partners";

/**
 * パートナー(指示書 v2 §5.6)。2社。ロゴ枠＋社名＋2行程度の説明を横並び。
 * 下に「すべてのパートナーを見る」。詳細版は /partners。
 */

export default function Partners() {
  return (
    <section id="partners" className="border-b border-rule py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <Reveal stagger={0}>
          <SectionHeading
            label="PARTNERS"
            heading="得意なところを、それぞれが持ち寄る。"
            color="indigo"
          />
        </Reveal>

        <Reveal as="ul" className="mt-16 grid gap-10 md:grid-cols-2 md:gap-12" delay={120}>
          {PARTNERS.map((p) => (
            <li
              key={p.name}
              className="panel flex flex-col p-8 transition-transform duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg md:p-10"
            >
              <div className="flex h-16 items-center">
                {p.logo ? (
                  <Image
                    src={p.logo}
                    alt={`${p.name}のロゴ`}
                    width={160}
                    height={64}
                    className="h-full w-auto object-contain object-left"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-16 w-16 items-center justify-center border border-rule font-display text-xl font-light text-ink-sub"
                  >
                    {p.name.slice(0, 1)}
                  </div>
                )}
              </div>

              <h3 className="mt-6 font-display text-lg font-normal tracking-[0.04em] text-ink">
                {p.name}
              </h3>

              {p.representative && (
                <p className="mt-2 text-xs text-ink-sub">{p.representative}</p>
              )}

              {p.catchphrase && (
                <p className="mt-4 font-display text-sm font-normal tracking-[0.04em] text-ink">
                  {p.catchphrase}
                </p>
              )}

              <p className="mt-4 grow text-sm leading-[2] text-ink-sub">
                {p.description ?? "事業内容は確認中です。"}
              </p>

              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-outline btn-sm mt-6 self-start"
                >
                  {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                </a>
              )}
            </li>
          ))}
        </Reveal>

        {/*
          NRT LOFT → AIM → NEBULAB の三層構造(§5.6)。
          単なる相互リンクではないことを示す。
        */}
        {/* <ol className="mt-16 border-t border-rule pt-10">
          {LAYERS.map((l, i) => (
            <li
              key={l.label}
              className="grid grid-cols-[7rem_1fr] items-baseline gap-4 py-3 md:grid-cols-[10rem_1fr]"
            >
              <span className="text-xs font-medium tracking-[0.18em] text-ink">
                {l.label}
              </span>
              <span className="text-xs leading-6 text-ink-sub">
                {l.note}
                {i < LAYERS.length - 1 && (
                  <span aria-hidden="true" className="ml-3">
                    ↓
                  </span>
                )}
              </span>
            </li>
          ))}
        </ol> */}

        <div className="mt-12">
          <Link href="/partners" className="btn btn-ghost">
            すべてのパートナーを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
