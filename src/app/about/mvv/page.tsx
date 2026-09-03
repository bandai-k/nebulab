import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/decor/SectionHeading";
import { LABEL_ASSETS } from "@/components/decor/brushAssets";
import { MVV_ICONS } from "@/components/decor/mvvIcons";
import { MVV_TITLES } from "@/components/decor/mvvTitles";
import HeroDevices from "@/components/home/HeroDevices";
import Reveal from "@/components/ui/Reveal";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { MISSION, VISION, VALUES } from "@/constants/mvv";

export const metadata: Metadata = {
  title: "理念 / ミッション・ビジョン・バリュー",
  description:
    "Nebulab合同会社が日々の判断軸として大切にしている、ミッション・ビジョン・バリューの考え方をご紹介します。",
  alternates: { canonical: "/about/mvv" },
  openGraph: {
    url: "/about/mvv",
    title: "理念 / ミッション・ビジョン・バリュー | Nebulab合同会社",
    description:
      "Nebulab合同会社が日々の判断軸として大切にしている、ミッション・ビジョン・バリューの考え方をご紹介します。",
  },
  twitter: {
    title: "理念 / ミッション・ビジョン・バリュー | Nebulab合同会社",
    description:
      "Nebulab合同会社が日々の判断軸として大切にしている、ミッション・ビジョン・バリューの考え方をご紹介します。",
  },
};

/** カード/セクションのアクセントに使う水彩の色を、視覚的に単調にならないよう振る。 */
const VALUE_ACCENTS = [LABEL_ASSETS.pink, LABEL_ASSETS.amber, LABEL_ASSETS.teal];

/**
 * VALUES(V1〜V3)のアイコン。V1=先回り/双眼鏡, V2=主役は人/人々,
 * V3=小さく壊して速く学ぶ/フラスコ、の順で VALUE_ACCENTS の色とも一致させている。
 */
const VALUE_ICONS = [MVV_ICONS.foresight, MVV_ICONS.people, MVV_ICONS.experiment];

export default function MvvPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-28 md:px-12 lg:px-16 md:pt-32">
      {/* ── Breadcrumb ── */}
      <nav
        aria-label="breadcrumb"
        className="flex flex-wrap items-center gap-2 text-[10px] tracking-[0.16em] text-ink-sub"
      >
        <Link href="/" className="transition-colors hover:text-accent">
          TOP
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/about" className="transition-colors hover:text-accent">
          ABOUT
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-ink">理念 / MISSION・VISION・VALUES</span>
      </nav>

      {/* ── Intro ── */}
      <div className="relative mt-10 grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] md:items-center md:gap-16">
        <ScrollReveal>
          <SectionHeading
            level="h1"
            label="ABOUT NEBULAB"
            heading="理念 / ミッション・ビジョン・バリュー"
            color="indigo"
            lead="Nebulab が日々の判断軸として大切にしている、ミッション・ビジョン・バリューの考え方をご紹介します。"
          />
        </ScrollReveal>

        <div className="relative hidden md:block">
          <HeroDevices />
        </div>
      </div>

      {/* ── MISSION ── */}
      <section className="mt-20 border-t border-rule pt-12 md:mt-28">
        <Reveal stagger={0}>
          <div className="mb-12 flex justify-center">
            <Image
              src={MVV_TITLES.mission.src}
              alt="MISSION"
              width={MVV_TITLES.mission.width}
              height={MVV_TITLES.mission.height}
              className="h-16 w-auto md:h-20"
            />
          </div>

          <div className="relative grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
            <div>
              <h2 className="font-display text-xl font-light leading-[1.9] tracking-[0.04em] text-ink md:text-2xl">
                {MISSION}
              </h2>
              <div className="mt-8 space-y-6 text-sm leading-[2.1] text-ink-sub md:text-base">
                <p>問われる前に動く。</p>
                <p>状況を観察し、提案し、流れを生む。</p>
                <p>受け身ではなく、能動的なパートナーであり続ける。</p>
              </div>
            </div>

            <div className="relative flex aspect-3/2 w-full items-center justify-center">
              <Image
                src="/about/mission-bridge.webp"
                alt="考えることと動くことの間に橋を架け、渡っていくイメージ"
                width={2172}
                height={724}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── VISION(MISSION と左右を反転) ── */}
      <section className="mt-20 border-t border-rule pt-12 md:mt-28">
        <Reveal stagger={0}>
          <div className="mb-12 flex justify-center">
            <Image
              src={MVV_TITLES.vision.src}
              alt="VISION"
              width={MVV_TITLES.vision.width}
              height={MVV_TITLES.vision.height}
              className="h-16 w-auto md:h-20"
            />
          </div>

          <div className="relative grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
            <div className="relative flex aspect-video w-full items-center justify-center">
              <Image
                src="/about/vision-flow.webp"
                alt="アイデアが形になり、検証を経て人に届いていくイメージ"
                width={1672}
                height={941}
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <h2 className="font-display text-xl font-light leading-[1.9] tracking-[0.04em] text-ink md:text-2xl">
                {VISION}
              </h2>
              <div className="mt-8 space-y-6 text-sm leading-[2.1] text-ink-sub md:text-base">
                <p>完璧を目指して止まるより、</p>
                <p>小さなプロトタイプを置き続ける。</p>
                <p>検証の連鎖が、プロダクトの質を高める。</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── VALUES ── */}
      <section className="mt-20 border-t border-rule pt-12 md:mt-28">
        <Reveal stagger={0}>
          <div className="mb-12 flex justify-center">
            <Image
              src={MVV_TITLES.values.src}
              alt="VALUES"
              width={MVV_TITLES.values.width}
              height={MVV_TITLES.values.height}
              className="h-16 w-auto md:h-20"
            />
          </div>

          <ul className="grid gap-8 md:grid-cols-3 md:gap-10">
            {VALUES.map((v, i) => {
              const accent = VALUE_ACCENTS[i % VALUE_ACCENTS.length];
              const icon = VALUE_ICONS[i % VALUE_ICONS.length];
              return (
                <li key={v.code} className="relative px-4 py-2">
                  {/* カード隅の小さな水彩アクセント。文字には重ねない。 */}
                  <Image
                    src={accent.src}
                    alt=""
                    aria-hidden="true"
                    width={accent.width}
                    height={accent.height}
                    className="pointer-events-none absolute -right-[4%] top-0 w-[40%] max-w-none opacity-[0.14]"
                  />
                  {/* アイコンはカード上部中央、丸い枠で囲む。 */}
                  <div className="relative flex justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-rule bg-surface">
                      <Image
                        src={icon.src}
                        alt=""
                        aria-hidden="true"
                        width={icon.width}
                        height={icon.height}
                        className="h-10 w-10"
                      />
                    </div>
                  </div>
                  <p className="relative mt-6 text-center text-[10px] tracking-[0.3em] text-ink-sub">
                    {v.code}
                  </p>
                  <h3 className="relative mt-4 text-center font-display text-base font-normal tracking-[0.04em] text-ink md:text-lg">
                    {v.title}
                  </h3>
                  <p className="relative mt-4 text-sm leading-[2.1] text-ink-sub">
                    {v.description}
                  </p>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </section>

      {/* ── 自社プロダクトへの接続 ──
          MVV は理念の紹介が主目的のため、プロダクト一覧の再掲(/projects, TOP と重複)は
          最小限に留め、短い文章とリンク1本だけにしている。
      */}
      <section className="mt-20 border-t border-rule pt-12 md:mt-28">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-ink-sub">
              Products
            </span>
          </div>

          <h2 className="font-display text-xl font-light leading-[1.9] tracking-[0.04em] text-ink md:text-2xl">
            自社プロダクトをつくり、育てる。
          </h2>
          <p className="mt-8 max-w-xl text-sm leading-[2.1] text-ink-sub md:text-base">
            机上の思想ではなく、自社プロダクトを開発・運用する現場から学び、改善し続けることで、Nebulab
            の価値観そのものを検証しています。
          </p>
          <Link href="/projects" className="btn btn-ghost mt-8">
            すべてのプロダクトを見る
          </Link>
        </ScrollReveal>
      </section>

      {/* ── Back link ── */}
      <div className="mt-20 md:mt-28">
        <Link
          href="/about"
          className="text-xs tracking-[0.12em] text-ink-sub transition-colors hover:text-accent"
        >
          ← About に戻る
        </Link>
      </div>
    </main>
  );
}
