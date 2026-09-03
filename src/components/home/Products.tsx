import Image from "next/image";
import Link from "next/link";

/**
 * 自社プロダクト(指示書 §5.3)。カード4枚を横一列。
 *
 * 指示書は「確定3枚: Capture Box / Navi / みどりっこ」としているが、
 * Capture Box はリポジトリ内に名称・説明・キャプチャのいずれも存在しない。
 * 事実を作れないため、実在して画面のあるものだけで4枚を構成している。
 * データが揃い次第この配列に1件足せば差し替えられる。
 *
 * 4枚目の候補(narita-guide.com / NAJIMI / SuperMindMap)は narita-guide.com を採用。
 * NAJIMI は 2026年秋発売予定の物理プロダクトで画面が無く、
 * SuperMindMap は R&D 段階で公開された実体が無いため。
 */
type Product = {
  name: string;
  summary: string;
  tags: string[];
  href: string;
  image: string;
  /** 端末の実キャプチャか、そうでないか。前者は上端を揃えて見せる。 */
  isScreen: boolean;
};

const products: Product[] = [
  {
    name: "みどりっこ",
    summary: "育てている植物との時間を、そのまま残す。",
    tags: ["iOS", "App Store 公開中"],
    href: "/apps/midorikko",
    image: "/apps/midorikko/01_home.png",
    isScreen: true,
  },
  {
    name: "ガレージ手帳",
    summary: "バイクの点検・整備・ツーリング日記。",
    tags: ["iOS", "App Store 公開中"],
    href: "/apps/garage-techo",
    image: "/apps/garage-techo/shot-01.webp",
    isScreen: true,
  },
  {
    name: "Navi",
    summary: "状況を読み、次の一歩を提案する能動型AIナビゲーター。",
    tags: ["AI", "LLM", "プロトタイプ"],
    href: "/projects/navi",
    image: "/projects/navi.png",
    isScreen: false,
  },
  {
    name: "narita-guide.com",
    summary: "成田の観光・生活情報を地元の視点で発信するメディア。",
    tags: ["Web", "メディア", "運営中"],
    href: "/projects/narita-guide",
    image: "/projects/narita-guide.png",
    isScreen: false,
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="border-b border-cyber-border-dim py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <p className="font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
          PRODUCTS
        </p>
        <h2 className="mt-6 font-display text-xl font-light leading-[1.8] tracking-[0.06em] text-cyber-text md:text-2xl">
          自分たちで使うものを、つくっています。
        </h2>

        <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <li key={p.name}>
              <Link href={p.href} className="group block">
                <div className="relative aspect-4/3 overflow-hidden border border-cyber-border-dim bg-surface transition-colors group-hover:border-rule">
                  <Image
                    src={p.image}
                    alt={`${p.name} の画面`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className={
                      p.isScreen
                        ? "object-cover object-top"
                        : "object-cover opacity-70"
                    }
                  />
                </div>
                <h3 className="mt-5 font-display text-base font-normal tracking-[0.04em] text-cyber-text">
                  {p.name}
                </h3>
                <p className="mt-2 text-xs leading-6 text-cyber-text-secondary">
                  {p.summary}
                </p>
                <p className="mt-3 font-mono text-[9px] tracking-[0.2em] text-cyber-text-muted">
                  {p.tags.join("  /  ")}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
