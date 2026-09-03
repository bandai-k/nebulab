export type ProjectStatus = "ACTIVE" | "LAUNCHING" | "PROTOTYPE" | "R&D" | "CONCEPT";
export type ProjectCategory = "LOCAL × TECH" | "EC BRAND" | "AI PRODUCT";

export type ProjectStep = {
  title: string;
  body: string;
};

export type ProjectSection = {
  heading: string;
  body?: string;
  items?: string[];
  steps?: ProjectStep[];
};

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  id: string;
  name: string;
  status: ProjectStatus;
  statusNote?: string;
  category: ProjectCategory;
  tagline: string;
  description: string;
  externalUrl?: string;
  /** Internal detail route — typically `/projects/${id}`. */
  internalUrl?: string;
  featured?: boolean;
  /** /public 配下のパス。省略すると ProjectPlaceholder(名前と分類の面)になる。 */
  imageUrl?: string;
  /** Hero intro paragraphs shown on detail page. */
  body?: string[];
  sections?: ProjectSection[];
  tags?: string[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "nrt-loft",
    name: "NRT LOFT",
    status: "ACTIVE",
    statusNote: "2026.05-",
    category: "LOCAL × TECH",
    tagline: "AIでものづくりを発信するメディア／ラボ",
    description:
      "AIで自分のための道具をつくる。その記録を発信するメディア／ラボ。",
    externalUrl: "https://www.nrt-loft.jp",
    internalUrl: "/projects/nrt-loft",
    featured: true,
    imageUrl: "/projects/nrt-loft.png",
    body: [
      "AIで自分のための道具をつくる。その記録を発信するメディア／ラボです。",
      "非エンジニア向けに、AIを使った小さな仕組みづくりを発信しています。",
    ],
    tags: ["メディア", "AI", "ものづくり", "成田"],
    links: [
      {
        label: "サイトを見る",
        href: "https://www.nrt-loft.jp",
        external: true,
      },
    ],
  },
  {
    id: "narita-guide",
    name: "narita-guide.com",
    status: "ACTIVE",
    statusNote: "2026.01-",
    category: "LOCAL × TECH",
    tagline: "成田の観光・生活情報メディア",
    description: "成田エリアの観光・生活情報を発信するメディアサイト。",
    externalUrl: "https://www.narita-guide.com",
    internalUrl: "/projects/narita-guide",
    imageUrl: "/projects/narita-guide.png",
    body: [
      "成田エリアの観光情報と生活情報を、地元の視点でまとめている独立系メディアサイトです。",
      "空港利用者向けのトランジット情報、地元住民向けの店舗・施設情報、季節のイベント情報など、訪問者と住民双方に役立つコンテンツを発信しています。",
    ],
    tags: ["メディア", "観光", "成田", "地域"],
    links: [
      {
        label: "サイトを見る",
        href: "https://www.narita-guide.com",
        external: true,
      },
    ],
  },
];
