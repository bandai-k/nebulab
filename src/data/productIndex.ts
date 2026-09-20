import { apps } from "@/data/apps";
import { projects } from "@/data/projects";

/**
 * 自社プロダクトの唯一の一覧。
 *
 * 経緯: プロダクトの情報が apps.ts(App Store のアプリ)と projects.ts
 * (それ以外)の2箇所に分かれており、一覧ページも /projects・/apps・/lab の
 * 3つに散っていた。その結果、トップの「すべてのプロダクトを見る」が飛ぶ
 * /projects に、公開中のアプリ2本が載っていないという食い違いが起きていた。
 * ここで両方を1つの並びにまとめ、一覧はこのモジュールだけを見る。
 *
 * 詳細ページ(/apps/[appId] と /projects/[id])はそのまま。URL は変えない。
 */
export type ProductEntry = {
  key: string;
  name: string;
  /** 表示用の分類。 */
  category: string;
  /** 公開状況。カードのバッジに出す。 */
  status: string;
  /** 時期などの補足。 */
  statusNote?: string;
  tagline: string;
  description: string;
  /** サイト内の詳細ページ。 */
  href: string;
  /** 外部の公開先(App Store / 実サイト)。無ければ出さない。 */
  externalUrl?: string;
  externalLabel?: string;
  /** カードに敷く画像。無ければ筆のプレースホルダーになる。 */
  imageUrl?: string;
  /** true なら imageUrl は正方形のアプリアイコン(contain 表示)。 */
  imageIsIcon?: boolean;
};

/**
 * 並び順の重み。小さいほど先。
 * 実際に使えるものを先に出す。「自社で開発し、運用している」の裏づけとして
 * 一番強いのは公開済みのプロダクトのため。
 */
const ORDER: Record<string, number> = {
  公開中: 0,
  "ベータ版公開中": 1,
  運営中: 2,
  提供準備中: 3,
  プロトタイプ: 4,
  "研究開発": 5,
  構想中: 6,
};

const PROJECT_STATUS_JA: Record<string, string> = {
  ACTIVE: "運営中",
  BETA: "ベータ版公開中",
  LAUNCHING: "提供準備中",
  PROTOTYPE: "プロトタイプ",
  "R&D": "研究開発",
  CONCEPT: "構想中",
};

const appEntries: ProductEntry[] = apps.map((a) => ({
  key: `app-${a.id}`,
  name: a.name,
  category: a.category,
  status: a.status === "PUBLISHED" ? "公開中" : "提供準備中",
  statusNote: a.released?.replace("-", "."),
  tagline: a.tagline,
  description: a.description,
  href: `/apps/${a.id}`,
  externalUrl: a.appStoreUrl || undefined,
  externalLabel: a.appStoreUrl ? "App Store" : undefined,
  imageUrl: a.icon,
  imageIsIcon: true,
}));

const projectEntries: ProductEntry[] = projects.map((p) => ({
  key: `project-${p.id}`,
  name: p.name,
  category: p.category,
  status: PROJECT_STATUS_JA[p.status] ?? p.status,
  statusNote: p.statusNote,
  tagline: p.tagline,
  description: p.description,
  href: p.internalUrl ?? `/projects/${p.id}`,
  externalUrl: p.externalUrl,
  externalLabel: p.externalUrl ? "サイト" : undefined,
  imageUrl: p.imageUrl,
}));

export const productIndex: ProductEntry[] = [...appEntries, ...projectEntries].sort(
  (a, b) => (ORDER[a.status] ?? 9) - (ORDER[b.status] ?? 9),
);
