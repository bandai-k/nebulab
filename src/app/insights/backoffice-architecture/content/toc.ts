export type TocItem = { label: string; id: string };

export const toc: TocItem[] = [
  { label: "前提となる構成", id: "prereq" },
  { label: "全体アーキテクチャ", id: "overview" },
  { label: "各レイヤーの責務", id: "layers" },
  { label: "DIと命名規約の併用", id: "di" },
  { label: "データ抽出・CSV出力の設計例", id: "csv" },
  { label: "対象外マスタの管理（追加/削除）", id: "exclusion" },
  { label: "将来拡張（帳票/履歴）", id: "future" },
  { label: "この構成が向いているケース", id: "fit" },
  { label: "まとめ", id: "summary" },
];
