/**
 * Insights（判断の記録）データの単一ソース
 * InsightsClient.tsx（一覧ページ用）で共有
 */

/** 分類軸（Product / Place / Process） */
export type InsightTrack = "Product" | "Place" | "Process";

/** ステータス */
export type InsightStatus = "Published" | "InProgress" | "Archived";

/** Insight 型 */
export type Insight = {
  id: string;
  title: string;
  track: InsightTrack;
  status: InsightStatus;
  summary: string;
  context: string;
  keyPoints: string[];
  next: string[];
  links?: Array<{ href: string; label: string; external?: boolean }>;
};

/** ステータスバッジの定義 */
export const INSIGHT_STATUS_BADGE: Record<
  InsightStatus,
  { label: string; className: string }
> = {
  Published: {
    label: "PUBLISHED",
    className: "bg-[#e8f3ea] text-[#1f5b2e] border-[#b7d6bf]",
  },
  InProgress: {
    label: "IN PROGRESS",
    className: "bg-[#fff3e3] text-[#7a4b12] border-[#f1d1a8]",
  },
  Archived: {
    label: "ARCHIVED",
    className: "bg-[#f3f3f3] text-[#444] border-[#ddd]",
  },
};

/**
 * Insights 一覧
 */
export const INSIGHTS: Insight[] = [
  {
    id: "ins-001",
    title: "バックヤード機能を安全に拡張する：MVC + UseCase + DI + SQL分離",
    track: "Process",
    status: "Published",
    summary:
      "レガシー基盤でも、責務分離と差し替え点の設計で「壊れにくい拡張」を作る。CSV抽出や除外管理のような運用機能を題材に整理。",
    context:
      "決済・請求などの業務領域では、変更の安全性（壊れない/説明できる/後から伸ばせる）が最優先。Controllerを薄くし、UseCaseに業務フローを集約、DIで差し替え点を明示、SQLテンプレで抽出条件を安定化します。",
    keyPoints: [
      "Controllerは入力とレスポンス（CSV/画面）に専念",
      "UseCaseに業務フローを集約して拡張ポイントを固定",
      "DB操作はModelへ寄せ、業務ルールはUseCaseへ",
      "抽出条件はSQLテンプレートで差分が追える形に",
    ],
    next: [
      "PDF生成・履歴管理など「後から積む機能」の設計ポイントを追記",
      "監査/権限が絡む場合の分岐パターンを整理",
    ],
    links: [{ href: "/insights/backoffice-architecture", label: "記事を読む →" }],
  },
  {
    id: "ins-002",
    title: "NRT-LOFT：混み合わない前提で「集中を守る」運用設計",
    track: "Place",
    status: "Published",
    summary:
      "場の体験は備品より運用で決まる。導線・案内文・ルールの微調整で、静かさと継続性のバランスを取る。",
    context:
      "拠点運営は「混雑を捌く」より「混雑しない」を設計する方が、体験も運用負荷も安定します。紹介制に近い運用や、期待値調整の文章設計など。",
    keyPoints: [
      "混雑回避は予約/紹介/案内文が効く",
      "ルールは「体験を守る」ための最小セットに",
      "継続できる運用チェックリストを持つ",
    ],
    next: [
      "案内ページの改善（期待値調整）",
      "運用チェックリストの公開できる範囲を整備",
    ],
    links: [
      { href: "https://nrt-loft.jp", label: "NRT-LOFT を見る ↗", external: true },
    ],
  },
  {
    id: "ins-003",
    title: "改善を循環させる：ふりかえり→テンプレ化→再利用",
    track: "Process",
    status: "InProgress",
    summary:
      "学びを「個人の経験」で終わらせず、テンプレ/チェックリストに落として再利用する。更新の運用まで含めて型化する。",
    context:
      "改善は発見より「再現」が難しい。短い雛形（仕様整理/ふりかえり/改善ログ）を作り、現場で回る更新ルールを決めます。",
    keyPoints: [
      "雛形は「埋めれば進む」粒度にする",
      "更新ルール（いつ/誰が/どう）まで設計する",
      "公開できる範囲で「判断の理由」を残す",
    ],
    next: [
      "雛形を公開可能な形に整える",
      "更新ルールを決めて運用に乗せる",
    ],
    links: [{ href: "/services", label: "事業内容を見る →" }],
  },
];
