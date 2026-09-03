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
    // 画像は旧事業の内装写真だったため外している。キャプチャが用意でき次第 imageUrl を足す。
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
  {
    id: "najimi",
    name: "NAJIMI",
    status: "LAUNCHING",
    statusNote: "2026 AUTUMN",
    category: "EC BRAND",
    tagline: "デスクワークに、長く使える質感を",
    description:
      "日本刀の柄(つかまき)から着想を得たPUレザーリストレストを第一弾として開発中。",
    internalUrl: "/projects/najimi",
    featured: true,
    imageUrl: "/projects/najimi.png",
    body: [
      "デスクワークの実用性と質感を両立させるオリジナルブランド「NAJIMI」を企画・開発しています。",
      "毎日触れる仕事道具を、長く付き合える質感のあるものに。第一弾商品として、PUレザー製のリストレストを 2026 年秋に発売予定です。",
    ],
    sections: [
      {
        heading: "第一弾商品",
        items: [
          "PUレザーリストレスト(2026年秋発売予定)",
          "日本刀の柄(つかまき)から着想を得たデザイン",
          "国産品質、長く使える設計",
        ],
      },
      {
        heading: "販売チャネル",
        items: ["未定"],
      },
    ],
    tags: ["EC", "ブランド", "デスクアクセサリー"],
  },
  {
    id: "navi",
    name: "Navi",
    status: "PROTOTYPE",
    category: "AI PRODUCT",
    tagline: "能動型AIナビゲーター",
    description:
      "ユーザーが質問する前に状況を読み、次の一歩を提案する。実行はすべて承認制。",
    internalUrl: "/projects/navi",
    featured: true,
    imageUrl: "/projects/navi.png",
    body: [
      "Navi は機能の集合ではありません。",
      "体験の流れそのものが、Navi の設計です。",
    ],
    sections: [
      {
        heading: "Experience Flow",
        steps: [
          {
            title: "Navi が問いかける",
            body: "ユーザーが何も聞かなくても、Navi は状況を観察し、適切なタイミングで問いを投げかけます。",
          },
          {
            title: "状況を整理する",
            body: "散らばった情報や思考を構造化し、今何が起きているかを明確にします。",
          },
          {
            title: "提案を1つ出す",
            body: "選択肢を10個並べるのではなく、文脈に合った次の一歩を1つだけ提示します。",
          },
          {
            title: "実行は必ず承認制",
            body: "Navi が勝手に動くことはありません。すべての実行は、人間の承認を経て行われます。",
          },
        ],
      },
    ],
    tags: ["AI", "LLM", "プロトタイプ"],
    links: [{ label: "LAUNCH DEMO", href: "/demo" }],
  },
  {
    id: "supermindmap",
    name: "SuperMindMap",
    status: "R&D",
    category: "AI PRODUCT",
    tagline: "思考の構造可視化AI",
    description: "思考の構造をAIがリアルタイムで可視化・拡張するマインドマップ。",
    internalUrl: "/projects/supermindmap",
    body: [
      "思考の断片やメモを入力すると、AI がリアルタイムで構造を解釈し、関係性を持ったマインドマップとして可視化・拡張するツールを R&D しています。",
      "現在は Lab 内で技術検証フェーズ。公開時期・形態は今後決定します。",
    ],
    tags: ["AI", "LLM", "可視化", "R&D"],
  },
  {
    id: "nebula-place",
    name: "Nebula Place",
    status: "CONCEPT",
    category: "LOCAL × TECH",
    tagline: "地域活性化ハブ構想",
    description:
      "成田・花崎町の一角を起点に、ゲストハウス・カフェ・アウトドアスペースを統合した地域活性化ハブを構想中。",
    internalUrl: "/projects/nebula-place",
    body: [
      "成田・花崎町の一角を起点に、ゲストハウス・カフェ・アウトドアスペースを統合した、成田エリアの地域活性化ハブを構想中です。",
      "現在は事業計画と物件選定を並行して進める段階。具体化次第、随時お知らせします。",
    ],
    sections: [
      {
        heading: "構想する要素",
        items: [
          "ゲストハウス機能 — 出張ワーカー・国内外旅行者向け",
          "カフェ機能 — 地域住民との交流の場",
          "アウトドアスペース — 季節のイベント・地域連携",
        ],
      },
    ],
    tags: ["構想", "地域活性化", "成田"],
  },
];
