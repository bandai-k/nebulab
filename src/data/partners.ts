/**
 * パートナー企業(指示書 §5.6 / §6)。3社ではなく2社。
 *
 * 重要: §10-3 / §10-4 のとおり、MMPR合同会社の事業内容と掲載可否、
 * および AIM の掲載許諾はいずれも未確認。公開前に必ず確認すること。
 * MMPR は事業内容が確定していないため、事実を作らず社名のみを出している。
 *
 * デザイン案にあった「ヒカリコンサルティング」「ナリタデザイン」
 * 「クラウドプランツ」(架空)および「cloudpack」「GOODLIFE」
 * 「SMARTCAMP」(無関係な実在企業)は使用しない(§11)。
 */
export type Partner = {
  name: string;
  url?: string;
  representative?: string;
  description?: string;
  /** Nebulab とどう組んでいるか。 */
  relationship?: string;
};

export const PARTNERS: Partner[] = [
  {
    name: "MMPR合同会社",
    // 事業内容は確認中。確認でき次第 description と relationship を追加する。
  },
  {
    name: "株式会社AIM",
    url: "https://ai-management.biz/",
    representative: "代表取締役 石井一之",
    description:
      "生成AI活用の企業研修。初級者向けに、ChatGPTなどの生成AIを業務にどう活かすかを、企業の課題に合わせて設計した研修として提供。",
    relationship:
      "研修で生成AIの使い方を掴んだ企業が、次に「自社の業務に合わせた仕組みが欲しい」という段階に進んだとき、Nebulab が開発を引き受けます。",
  },
];

/** NRT LOFT → AIM → NEBULAB の三層構造(§5.6)。 */
export const LAYERS: { label: string; note: string }[] = [
  { label: "NRT LOFT", note: "一般向けにAIものづくりを発信" },
  { label: "AIM", note: "法人向けに生成AI活用研修" },
  { label: "NEBULAB", note: "本格的なシステム・サービス開発" },
];
