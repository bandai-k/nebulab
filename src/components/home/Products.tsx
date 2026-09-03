import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/decor/SectionHeading";

/**
 * 自社プロダクト(指示書 v2 §5.3)。カード4枚を横一列。
 * 各カードに画面キャプチャ、名前、1〜2行の説明、詳細ボタンと外部リンクボタン。
 *
 * 掲載は実在するプロダクトのみ。指示書は「確定3枚: Capture Box / Navi /
 * みどりっこ」としているが、Capture Box はリポジトリ内に名称・説明・
 * キャプチャのいずれも存在せず、事実を作れないため出していない。
 * 素材が揃ったらこの配列に1件足せば差し替えられる。
 *
 * 4枚目は narita-guide.com。ガレージ手帳は App Store 公開中で実キャプチャと
 * 外部リンクが揃っており、§5.3 のカード要件を満たす唯一の残り候補だった。
 */
type Product = {
  name: string;
  summary: string;
  detailHref: string;
  external?: { href: string; label: string };
  image: string;
  /** 端末の実キャプチャか。前者は上端を揃えて見せる。 */
  isScreen: boolean;
};

const products: Product[] = [
  {
    name: "みどりっこ",
    summary: "育てている植物との時間を、そのまま残す。",
    detailHref: "/apps/midorikko",
    external: {
      href: "https://apps.apple.com/jp/app/midorikko/id6803494534",
      label: "App Store",
    },
    image: "/apps/midorikko/01_home.png",
    isScreen: true,
  },
  {
    name: "ガレージ手帳",
    summary: "バイクの点検・整備・ツーリング日記。",
    detailHref: "/apps/garage-techo",
    external: {
      href: "https://apps.apple.com/jp/app/id6805839454",
      label: "App Store",
    },
    image: "/apps/garage-techo/shot-01.webp",
    isScreen: true,
  },
  {
    name: "Navi",
    summary: "状況を読み、次の一歩を提案する能動型AIナビゲーター。",
    detailHref: "/projects/navi",
    external: { href: "/demo", label: "デモ" },
    image: "/projects/navi.png",
    isScreen: false,
  },
  {
    name: "narita-guide.com",
    summary: "成田の観光・生活情報を地元の視点で発信するメディア。",
    detailHref: "/projects/narita-guide",
    external: { href: "https://www.narita-guide.com", label: "サイト" },
    image: "/projects/narita-guide.png",
    isScreen: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="border-b border-rule py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <SectionHeading
          label="SELF PRODUCTS"
          heading="自分たちで使うものを、つくっています。"
          color="pink"
        />

        <ul className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <li key={p.name} className="flex flex-col">
              {/*
                画像自体はリンクにしない。カードに詳細と外部リンクの
                ボタンが並ぶため、同じ行き先のリンクが重複してしまう。
              */}
              <div className="panel relative aspect-4/3 overflow-hidden">
                <Image
                  src={p.image}
                  alt={`${p.name} の画面`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className={
                    p.isScreen
                      ? "object-cover object-top"
                      : "object-cover opacity-80"
                  }
                />
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
        </ul>

        <div className="mt-16">
          <Link href="/projects" className="btn btn-ghost">
            すべてのプロダクトを見る
          </Link>
        </div>
      </div>
    </section>
  );
}
