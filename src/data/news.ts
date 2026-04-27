export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  /** Optional body — when set, /news shows it as a brief description. */
  body?: string;
  href: string;
};

export const news: NewsItem[] = [
  {
    id: "company-launch",
    date: "2026.05.01",
    category: "COMPANY",
    title: "Nebulab合同会社を設立しました",
    body: "成田を拠点とするテクノロジーカンパニーとして、Nebulab合同会社を設立しました。",
    href: "/about",
  },
];
