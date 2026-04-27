export const company = {
  name: "Nebulab合同会社",
  nameEn: "Nebulab LLC",
  shortName: "Nebulab",
  address: {
    zip: "286-0033",
    prefecture: "千葉県",
    city: "成田市",
    street: "花崎町",
    full: "〒286-0033 千葉県成田市花崎町(NRT-LOFT内)",
  },
  ceo: "萬代 晃生",
  ceoEn: "Bandai Koki",
  foundedDate: "2026年5月1日",
  capital: "1,000,000円",
  fiscalYear: "毎年10月1日〜翌年9月30日",
  email: "koki.bandai@nebulab.jp",
  website: "https://www.nebulab.jp",
} as const;

export type BusinessArea = {
  code: string;
  id: string;
  name: string;
  nameJa: string;
};

export const businessAreas: BusinessArea[] = [
  { code: "01", id: "development", name: "DEVELOPMENT", nameJa: "SES・受託開発" },
  { code: "02", id: "local-tech", name: "LOCAL × TECH", nameJa: "地域 × テクノロジー" },
  { code: "03", id: "ec-brand", name: "EC BRAND", nameJa: "オリジナルブランド" },
  { code: "04", id: "ai-products", name: "AI PRODUCTS", nameJa: "自社AIプロダクト" },
];

export const businessScope: string[] = [
  "インターネットを利用した各種情報提供サービス",
  "ソフトウェア・アプリケーションの企画、開発、保守、販売",
  "コンサルティング業務",
  "コンテンツの企画、制作、販売",
  "コワーキングスペース等のシェアオフィス運営",
  "アフィリエイト広告事業",
  "動画制作・配信業務",
  "古物商に基づく中古品の売買",
  "雑貨等の企画、製造、輸出入、販売",
  "上記各号に附帯または関連する一切の事業",
];

export type HistoryEntry = {
  year: number;
  month?: number;
  event: string;
};

export const history: HistoryEntry[] = [
  { year: 2025, event: "フリーランスエンジニアとして個人事業開業" },
  { year: 2026, month: 1, event: "地域情報メディア「narita-guide.com」運営開始" },
  { year: 2026, month: 2, event: "旧山中釣具店2階のDIYリノベーション開始" },
  { year: 2026, month: 3, event: "NRT-LOFT運営準備、NAJIMIブランド設計着手" },
  { year: 2026, month: 5, event: "Nebulab合同会社設立、NRT-LOFTオープン" },
];
