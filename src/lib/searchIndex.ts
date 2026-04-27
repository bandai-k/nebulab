import { businessAreas } from "@/data/company";
import { projects } from "@/data/projects";

export type SearchCategory = "PAGE" | "BUSINESS" | "PROJECT";

export type SearchItem = {
  id: string;
  title: string;
  category: SearchCategory;
  description: string;
  href: string;
  keywords?: string[];
};

const pageItems: SearchItem[] = [
  {
    id: "page-home",
    title: "Home",
    category: "PAGE",
    description: "Nebulab合同会社 — 成田を拠点とするテクノロジーカンパニー",
    href: "/",
  },
  {
    id: "page-about",
    title: "About / 会社概要",
    category: "PAGE",
    description: "代表メッセージ、会社情報、沿革、アクセス。",
    href: "/about",
    keywords: ["会社概要", "代表", "沿革", "アクセス", "成田", "company"],
  },
  {
    id: "page-mvv",
    title: "Mission / Vision / Values",
    category: "PAGE",
    description: "Nebulab のミッション、ビジョン、3 つのバリュー。",
    href: "/about/mvv",
    keywords: [
      "MVV",
      "理念",
      "ミッション",
      "ビジョン",
      "バリュー",
      "ミッションビジョンバリュー",
    ],
  },
  {
    id: "page-services",
    title: "Services / 事業内容",
    category: "PAGE",
    description: "4つの事業領域 — DEVELOPMENT / LOCAL×TECH / EC BRAND / AI PRODUCTS。",
    href: "/services",
    keywords: ["事業内容", "サービス", "ses", "受託開発"],
  },
  {
    id: "page-projects",
    title: "Projects / 進行中のプロジェクト",
    category: "PAGE",
    description: "Nebulabが運営・開発・実験している全プロジェクト。",
    href: "/projects",
    keywords: ["プロジェクト一覧"],
  },
  {
    id: "page-news",
    title: "News / ニュース",
    category: "PAGE",
    description: "プロジェクトとサービスの最新情報。",
    href: "/news",
    keywords: ["ニュース", "お知らせ"],
  },
  {
    id: "page-lab",
    title: "Lab / 実験と検証の場",
    category: "PAGE",
    description: "自社AIプロダクトのR&Dと技術的な実験・検証。",
    href: "/lab",
    keywords: ["R&D", "研究開発", "実験", "検証"],
  },
  {
    id: "page-contact",
    title: "Contact / お問い合わせ",
    category: "PAGE",
    description: "サービスのご相談・事業提携など。",
    href: "/contact",
    keywords: ["連絡", "問い合わせ", "メール"],
  },
];

const businessItems: SearchItem[] = businessAreas.map((area) => ({
  id: `area-${area.id}`,
  title: `${area.code} / ${area.name}`,
  category: "BUSINESS",
  description: area.nameJa,
  href: `/services#${area.id}`,
  keywords: [area.name, area.nameJa],
}));

const projectItems: SearchItem[] = projects.map((p) => {
  const fallback = p.internalUrl ?? p.externalUrl ?? "/projects";
  return {
    id: `project-${p.id}`,
    title: p.name,
    category: "PROJECT",
    description: p.tagline,
    href: fallback,
    keywords: [
      p.category,
      p.status,
      ...(p.statusNote ? [p.statusNote] : []),
      p.description,
    ],
  };
});

export const searchIndex: SearchItem[] = [
  ...pageItems,
  ...businessItems,
  ...projectItems,
];

export function scoreItem(item: SearchItem, query: string): number {
  const q = query.trim().toLowerCase();
  if (!q) return 0;

  const title = item.title.toLowerCase();
  if (title === q) return 120;
  if (title.startsWith(q)) return 90;
  if (title.includes(q)) return 70;

  if (item.description.toLowerCase().includes(q)) return 40;

  if (item.keywords) {
    for (const kw of item.keywords) {
      const lkw = kw.toLowerCase();
      if (lkw === q) return 80;
      if (lkw.includes(q)) return 50;
    }
  }
  return 0;
}

export function searchSite(query: string, limit = 8): SearchItem[] {
  const q = query.trim();
  if (!q) return [];
  return searchIndex
    .map((item) => ({ item, s: scoreItem(item, q) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((r) => r.item);
}
