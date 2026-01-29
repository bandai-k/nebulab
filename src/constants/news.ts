/**
 * ニュースデータの単一ソース
 * News.tsx（トップページ用）と NewsClient.tsx（一覧ページ用）で共有
 */

export type NewsCategory = "お知らせ" | "プレスリリース" | "イベント" | "メディア";

export type NewsItem = {
  id: string;
  date: string; // YYYY-MM-DD
  category: NewsCategory;
  title: string;
  excerpt?: string;
  /** トップページのNews用タグ（Release/Update/Note） */
  tag?: "Release" | "Update" | "Note";
};

/**
 * ニュース一覧（新しい順）
 */
export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "001",
    date: "2026-01-03",
    category: "お知らせ",
    title: "NEBULAB コーポレートサイトを公開しました",
    excerpt: "NEBULABの公式サイトをリニューアルしました。",
    tag: "Release",
  },
  {
    id: "002",
    date: "2025-12-28",
    category: "お知らせ",
    title: "Orbital Steel をブランドサブカラーとして採用しました",
    excerpt: "ブランドカラーにサブカラーを追加しました。",
    tag: "Update",
  },
  {
    id: "003",
    date: "2025-12-20",
    category: "お知らせ",
    title: "NRT-LOFT の取り組みを事業ページに追記しました",
    excerpt: "拠点運営の詳細を追加しました。",
    tag: "Note",
  },
  {
    id: "004",
    date: "2024-10-01",
    category: "お知らせ",
    title: "NEBULAB 構想開始",
    excerpt: "プロダクト開発と拠点づくりを行うNEBULABの構想を開始しました。",
  },
];

/** トップページ用：最新3件のみ取得 */
export const getRecentNews = (count = 3): NewsItem[] => {
  return NEWS_ITEMS.slice(0, count);
};

/** カテゴリの色定義 */
export const CATEGORY_COLORS: Record<NewsCategory, string> = {
  お知らせ: "bg-[#e8b86d] text-[#3d2f24]",
  プレスリリース: "bg-[#d4a574] text-white",
  イベント: "bg-[#b87333] text-white",
  メディア: "bg-[#8b7355] text-white",
};

/** カテゴリの説明 */
export const CATEGORY_HELP: Record<NewsCategory, string> = {
  お知らせ: "更新情報・告知",
  プレスリリース: "対外発表・正式情報",
  イベント: "開催・参加募集",
  メディア: "掲載・取材など",
};
