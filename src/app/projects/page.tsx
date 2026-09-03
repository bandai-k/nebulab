import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/decor/SectionHeading";
import { LABEL_ASSETS, type LabelColor } from "@/components/decor/brushAssets";
import { productIndex, type ProductEntry } from "@/data/productIndex";

export const metadata: Metadata = {
  title: "プロダクト",
  description:
    "Nebulab合同会社が開発・運用している自社プロダクトの一覧。みどりっこ、ガレージ手帳、Navi、narita-guide.com、NAJIMI など。",
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    title: "プロダクト | Nebulab合同会社",
    description:
      "Nebulab合同会社が開発・運用している自社プロダクトの一覧。みどりっこ、ガレージ手帳、Navi、narita-guide.com、NAJIMI など。",
  },
  twitter: {
    title: "プロダクト | Nebulab合同会社",
    description: "Nebulab合同会社が開発・運用している自社プロダクトの一覧。",
  },
};

/**
 * 自社プロダクトの一覧(指示書 v2 §5.3 の「すべてのプロダクトを見る」の飛び先)。
 *
 * 以前は /projects・/apps・/lab の3ページに分かれており、しかもこのページに
 * 公開中のアプリ2本が載っていなかった。data/productIndex.ts で1つの並びに
 * まとめ、一覧はここだけにしている。
 * URL は /projects のまま変えていない(既存リンクと sitemap を切らないため)。
 */

// 分類ごとに筆の色を固定する。画像が無いカードの下敷きに使う。
const COLOR_BY_CATEGORY: Record<string, LabelColor> = {
  "LOCAL × TECH": "teal",
  "EC BRAND": "amber",
  "AI PRODUCT": "indigo",
};

function ProductCard({ entry }: { entry: ProductEntry }) {
  const brush = LABEL_ASSETS[COLOR_BY_CATEGORY[entry.category] ?? "pink"];

  return (
    <li className="panel flex h-full flex-col overflow-hidden">
      <div className="relative aspect-16/10 overflow-hidden bg-surface">
        {entry.imageUrl ? (
          <Image
            src={entry.imageUrl}
            alt={`${entry.name} の画面`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          <Image
            src={brush.src}
            alt=""
            aria-hidden="true"
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            style={{ opacity: 0.2 }}
          />
        )}
      </div>

      <div className="flex grow flex-col p-6 md:p-7">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="rounded-full border border-rule px-3 py-1 text-[10px] tracking-[0.14em] text-ink-sub">
            {entry.status}
          </span>
          {entry.statusNote && (
            <span className="text-[10px] tracking-[0.14em] text-ink-sub">
              {entry.statusNote}
            </span>
          )}
        </div>

        <p className="mt-5 text-[10px] font-medium tracking-[0.22em] text-ink-sub">
          {entry.category}
        </p>
        <h2 className="mt-2 font-display text-lg font-normal tracking-[0.04em] text-ink">
          {entry.name}
        </h2>
        <p className="mt-3 text-sm leading-7 text-ink">{entry.tagline}</p>
        <p className="mt-3 grow text-xs leading-6 text-ink-sub">
          {entry.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Link href={entry.href} className="btn btn-outline btn-sm">
            {`${entry.name} の詳細`}
          </Link>
          {entry.externalUrl && (
            <a
              href={entry.externalUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-outline btn-sm"
            >
              {entry.externalLabel} ↗
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-24 pt-32 md:px-12 lg:px-16 md:pt-40">
      <SectionHeading
        level="h1"
        label="SELF PRODUCTS"
        heading="つくって、使って、運用しているもの。"
        color="pink"
        lead="受託だけでなく、自分たちで課題を見つけてつくったプロダクトです。日々使いながら運用しているので、つくった後に何が起きるかを具体的にお話しできます。"
      />

      <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {productIndex.map((entry) => (
          <ProductCard key={entry.key} entry={entry} />
        ))}
      </ul>
    </main>
  );
}
