import type { Metadata } from "next";
import type { NewsItem } from "@/types";

export const metadata: Metadata = {
  title: "お知らせ - NEBULAB",
  description: "NEBULABからのお知らせ・ニュースです。",
};

const newsItems: NewsItem[] = [
  {
    id: "001",
    date: "2024-12-01",
    category: "お知らせ",
    title: "Webサイトをリニューアルしました",
    excerpt: "NEBULABの公式サイトをリニューアルしました。",
  },
  {
    id: "002",
    date: "2024-11-15",
    category: "イベント",
    title: "NRT-LOFTオープンのお知らせ",
    excerpt: "成田に新しい拠点「NRT-LOFT」をオープンしました。",
  },
  {
    id: "003",
    date: "2024-10-01",
    category: "お知らせ",
    title: "NEBULAB 始動",
    excerpt: "プロダクト開発と拠点づくりを行うNEBULABを始動しました。",
  },
];

const categoryColors = {
  お知らせ: "bg-[#e8b86d] text-[#3d2f24]",
  プレスリリース: "bg-[#d4a574] text-white",
  イベント: "bg-[#b87333] text-white",
  メディア: "bg-[#8b7355] text-white",
};

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#fff8e7] py-20 text-[#3d2f24]">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-bold">お知らせ</h1>
        <p className="mt-4 text-[#5c4d3c]">
          NEBULABからの最新情報をお届けします。
        </p>

        <div className="mt-12 space-y-4">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-6 transition hover:bg-white/80"
            >
              <div className="flex flex-wrap items-center gap-3">
                <time className="text-sm text-[#8b7355]">{item.date}</time>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    categoryColors[item.category]
                  }`}
                >
                  {item.category}
                </span>
              </div>
              <h2 className="mt-3 text-lg font-semibold text-[#3d2f24]">
                {item.title}
              </h2>
              {item.excerpt && (
                <p className="mt-2 text-sm text-[#5c4d3c]">{item.excerpt}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
