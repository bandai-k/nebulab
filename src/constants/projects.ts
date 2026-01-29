/**
 * プロジェクトデータの単一ソース
 * Projects.tsx（トップページ用）と ProjectsClient.tsx（一覧ページ用）で共有
 */

export type ProjectStatus = "Active" | "Beta" | "Draft" | "Done";

export type Project = {
  slug: string;
  title: string;
  /** 短いキャッチコピー */
  catchphrase: string;
  /** 説明文 */
  description: string;
  /** ステータス */
  status: ProjectStatus;
  /** タグ（複数可） */
  tags: string[];
  /** ハイライト項目 */
  highlights?: string[];
  /** 外部/内部リンク */
  links?: Array<{ href: string; label: string; external?: boolean }>;
};

/**
 * プロジェクト一覧
 */
export const PROJECTS: Project[] = [
  {
    slug: "nrt-loft",
    title: "NRT-LOFT（拠点運営）",
    catchphrase: "集中を守るための、小さな拠点。",
    description:
      "生活リズムと集中を守るための運用設計。場のルール、導線、居心地、継続性を「仕組み」として整えています。",
    status: "Active",
    tags: ["Place", "Ops", "Community"],
    highlights: [
      "紹介制に近い運用",
      "混み合わない前提の設計",
      "継続できるルール化",
    ],
    links: [
      { href: "https://nrt-loft.jp", label: "NRT-LOFT 公式サイト", external: true },
    ],
  },
  {
    slug: "nebula-templates",
    title: "NEBULAB テンプレート群",
    catchphrase: "現場で使える形に落とす。",
    description:
      "案件・プロダクトで得た知見を、再利用できるテンプレートとして整備。仕様整理、運用手順、改善サイクルの型を作ります。",
    status: "Active",
    tags: ["Product", "Docs", "Process"],
    highlights: [
      "仕様整理の型",
      "改善が回る運用テンプレ",
      "最小の一歩を切るためのフレーム",
    ],
    links: [{ href: "/contact", label: "導入相談する" }],
  },
  {
    slug: "micro-products",
    title: "小さなプロダクト群",
    catchphrase: "小さく出して、育てる。",
    description:
      "公開可能な形に整い次第、順次リリース予定。学びを蓄積し、次の改善につなげます。",
    status: "Draft",
    tags: ["Product", "Prototype", "Iterate"],
    highlights: [
      "小さく公開 → 反応で改善",
      "運用コストを意識した設計",
      "積み上げて資産化",
    ],
    links: [{ href: "/news", label: "更新情報を見る" }],
  },
  {
    slug: "insights",
    title: "判断の記録",
    catchphrase: "思考は、まだ途中だ。",
    description:
      "試行錯誤のログを残し、どこで何を学んだかを可視化。失敗も含めて、次の判断材料にします。",
    status: "Beta",
    tags: ["Insights", "Learning", "Log"],
    highlights: [
      "検証→学び→型化",
      "小さく試す設計",
      "公開できる範囲で共有",
    ],
    links: [{ href: "/insights", label: "取り組みを見る" }],
  },
  {
    slug: "narita-guide",
    title: "Narita Guide",
    catchphrase: "成田の情報を、もっと手軽に。",
    description:
      "成田エリアの情報を集約・発信するWebメディア。地域の魅力や暮らしに役立つ情報を、試験運用しながら育てています。",
    status: "Beta",
    tags: ["Media", "Local", "Narita"],
    highlights: [
      "成田エリアの情報を集約",
      "ローカル視点での発信",
      "フィードバックを受けながら改善中",
    ],
    links: [
      { href: "https://narita-guide.com/", label: "Narita Guide", external: true },
    ],
  },
];

/** トップページ用：表示するプロジェクト（最大2件） */
export const getTopProjects = (count = 2): Project[] => {
  // Activeのものを優先して取得
  const active = PROJECTS.filter((p) => p.status === "Active");
  return active.slice(0, count);
};

/** ステータスバッジの定義 */
export const STATUS_BADGE: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  Active: {
    label: "ACTIVE",
    className: "bg-[#e8f3ea] text-[#1f5b2e] border-[#b7d6bf]",
  },
  Beta: {
    label: "BETA",
    className: "bg-[#eef3ff] text-[#2442a2] border-[#c7d3ff]",
  },
  Draft: {
    label: "DRAFT",
    className: "bg-[#fff3e3] text-[#7a4b12] border-[#f1d1a8]",
  },
  Done: {
    label: "DONE",
    className: "bg-[#f3f3f3] text-[#444] border-[#ddd]",
  },
};
