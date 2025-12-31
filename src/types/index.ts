export interface Service {
  title: string;
  desc: string;
}

export interface Project {
  title: string;
  desc: string;
  tag: string;
}

export interface NewsItem {
  id: string;
  date: string;
  category: "お知らせ" | "プレスリリース" | "イベント" | "メディア";
  title: string;
  excerpt?: string;
}
