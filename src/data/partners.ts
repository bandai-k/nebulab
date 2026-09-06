/**
 * パートナー企業(指示書 §5.6 / §6)。3社ではなく2社。
 *
 * デザイン案にあった「ヒカリコンサルティング」「ナリタデザイン」
 * 「クラウドプランツ」(架空)および「cloudpack」「GOODLIFE」
 * 「SMARTCAMP」(無関係な実在企業)は使用しない(§11)。
 */
export type Partner = {
  name: string;
  url?: string;
  representative?: string;
  /** 会社のキャッチコピー。 */
  catchphrase?: string;
  description?: string;
  /** public/ 配下のロゴ画像パス。 */
  logo?: string;
};

export const PARTNERS: Partner[] = [
  {
    name: "合同会社MMPR",
    url: "https://mmpr.co.jp/",
    representative: "村上光義 様",
    catchphrase: "人や社会へ「もっと、身近に」",
    description:
      "創業及び協業支援、デザイン・Web・販促企画、映像制作、システム開発・導入支援、コミュニケーションスペース運営。",
    logo: "/partners/mmpr-logo.png",
  },
  {
    name: "株式会社AIM",
    url: "https://ai-management.biz/",
    representative: "代表取締役 石井一之 様",
    catchphrase: "生成AIもっと働きやすく",
    description:
      "生成AI活用の企業研修。初級者向けに、ChatGPTなどの生成AIを業務にどう活かすかを、企業の課題に合わせて設計した研修として提供。",
    logo: "/partners/aim-logo.png",
  },
];

/** NRT LOFT → AIM → NEBULAB の三層構造(§5.6)。 */
export const LAYERS: { label: string; note: string }[] = [
  { label: "NRT LOFT", note: "一般向けにAIものづくりを発信" },
  { label: "AIM", note: "法人向けに生成AI活用研修" },
  { label: "NEBULAB", note: "本格的なシステム・サービス開発" },
];
