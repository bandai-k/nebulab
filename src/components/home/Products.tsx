import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/decor/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * 自社プロダクト(指示書 v2 §5.3)。カードを横一列。
 * 各カードに画面キャプチャ、名前、1〜2行の説明、詳細ボタンと外部リンクボタン。
 *
 * 掲載は実在するプロダクトのみ。Navi は掲載を停止しているため含めない
 * (data/projects.ts にもエントリを置いていない)。
 */
type Product = {
  name: string;
  summary: string;
  detailHref: string;
  external?: { href: string; label: string };
  image: string;
  /** カード画像の種類。icon は iOS アプリアイコン(正方形、contain)。 */
  imageKind: "icon" | "site";
};

const products: Product[] = [
  {
    name: "BizRelay",
    summary: "止まっている案件が、毎朝わかる。",
    detailHref: "/projects/bizrelay",
    external: { href: "https://bizrelay.biz", label: "サイト" },
    image: "/projects/bizrelay.png",
    imageKind: "site",
  },
  {
    name: "みどりっこ",
    summary: "育てている植物との時間を、そのまま残す。",
    detailHref: "/apps/midorikko",
    external: {
      href: "https://apps.apple.com/jp/app/midorikko/id6803494534",
      label: "App Store",
    },
    image: "/apps/midorikko/midorikko_app_icon.svg",
    imageKind: "icon",
  },
  {
    name: "ガレージ手帳",
    summary: "バイクの点検・整備・ツーリング日記。",
    detailHref: "/apps/garage-techo",
    external: {
      href: "https://apps.apple.com/jp/app/id6805839454",
      label: "App Store",
    },
    image: "/apps/garage-techo/icon-256.png",
    imageKind: "icon",
  },
  {
    name: "narita-guide.com",
    summary: "成田の観光・生活情報を地元の視点で発信するメディア。",
    detailHref: "/projects/narita-guide",
    external: { href: "https://www.narita-guide.com", label: "サイト" },
    image: "/projects/narita-guide.png",
    imageKind: "site",
  },
];

export default function Products() {
  return (
    <section id="products" className="border-b border-rule py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-16">
        <Reveal stagger={0}>
          <SectionHeading
            label="SELF PRODUCTS"
            heading="自分たちで使うものを、つくっています。"
            color="pink"
          />
        </Reveal>

        <Reveal
          as="ul"
          className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          delay={120}
        >
          {products.map((p) => (
            <li key={p.name} className="flex flex-col">
              {/*
                画像自体はリンクにしない。カードに詳細と外部リンクの
                ボタンが並ぶため、同じ行き先のリンクが重複してしまう。
              */}
              <div className="panel relative aspect-4/3 overflow-hidden">
                {p.imageKind === "icon" ? (
                  <div className="flex h-full w-full items-center justify-center p-8">
                    <div className="relative aspect-square w-full max-w-28 overflow-hidden rounded-[22%]">
                      <Image
                        src={p.image}
                        alt={`${p.name} のアイコン`}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <Image
                    src={p.image}
                    alt={`${p.name} の画面`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-80"
                  />
                )}
              </div>

              <h3 className="mt-5 font-display text-base font-normal tracking-[0.04em] text-ink">
                {p.name}
              </h3>
              <p className="mt-2 grow text-xs leading-6 text-ink-sub">
                {p.summary}
              </p>

              {/*
                詳細ボタンと外部リンクボタン(§5.3)。形はサイト共通(§3.1)。
                カード内に8個並ぶため、塗りのある副ボタンでは画面が
                うるさくなる。輪郭だけの btn-outline を使う。
              */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Link
                  href={p.detailHref}
                  className="btn btn-outline btn-sm"
                >
                  {`${p.name} の詳細`}
                </Link>
                {p.external && (
                  <a
                    href={p.external.href}
                    {...(p.external.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="btn btn-outline btn-sm"
                  >
                    {p.external.label}
                    {p.external.href.startsWith("http") && " ↗"}
                  </a>
                )}
              </div>
            </li>
          ))}
        </Reveal>

        <Reveal className="mt-16" stagger={0} delay={260}>
          <Link href="/projects" className="btn btn-ghost">
            すべてのプロダクトを見る
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
