export type ProjectStatus = "ACTIVE" | "BETA" | "LAUNCHING" | "PROTOTYPE" | "R&D" | "CONCEPT";
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
  /** 画像の alt テキスト。省略すると project.name を使う。 */
  imageAlt?: string;
  /**
   * 画像の object-fit。省略すると "cover"(枠いっぱいに拡大・トリミング)。
   * 画面キャプチャなど、上下左右が切れると意味を失う画像は "contain" にする。
   */
  imageFit?: "cover" | "contain";
  /** Hero intro paragraphs shown on detail page. */
  body?: string[];
  sections?: ProjectSection[];
  tags?: string[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "bizrelay",
    name: "BizRelay",
    status: "BETA",
    statusNote: "2026.09-",
    category: "AI PRODUCT",
    tagline: "止まっている案件が、毎朝わかる。",
    description:
      "返信・見積・請求・入金が止まった案件を、Gmail とカレンダーから読み取って毎朝1通にまとめて届けます。見積書・請求書の作成と送付、入金の消し込みまで同じ画面で。やり取りがメールに残る3〜15人の会社(Web制作・システム受託・士業・コンサルティング)向けのSaaSです。",
    externalUrl: "https://bizrelay.biz",
    internalUrl: "/projects/bizrelay",
    featured: true,
    imageUrl: "/projects/bizrelay.png",
    imageAlt: "BizRelay のタイトル画像。ロゴと『止まっている案件が、毎朝わかる。』の一言、朝礼の 1 通の見本",
    imageFit: "cover",
    body: [
      "返信・見積・請求・入金が止まった案件を、Gmail とカレンダーから読み取って毎朝1通にまとめて届けます。",
      "見積書・請求書の作成と送付、入金の消し込みまで同じ画面ででき、やり取りがメールに残る3〜15人の会社(Web制作・システム受託・士業・コンサルティング)向けのSaaSです。",
      "現在はベータ版公開中で、導入相談を受け付けています。",
    ],
    tags: ["AI", "業務効率化", "SaaS", "Gmail連携"],
    links: [
      {
        label: "サイトを見る",
        href: "https://bizrelay.biz",
        external: true,
      },
      {
        label: "デモを見る",
        href: "https://bizrelay.biz/demo",
        external: true,
      },
    ],
  },
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
