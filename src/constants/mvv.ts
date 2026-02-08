/**
 * Mission / Vision / Values の定義
 * サイト全体で参照する理念・思想の単一ソース
 */

/** メインビジョン（キャッチコピー） */
export const VISION_TAGLINE = "お店の「困った」を、ITの力で解決します。";

/** ミッション（存在意義） */
export const MISSION =
  "成田エリアの飲食店・小売店・個人事業主のためのWeb・IT支援サービス。難しい専門用語は使いません。";

/** ミッション補足 */
export const MISSION_SUPPLEMENT =
  "成田の拠点「NRT-LOFT」で、相談・打ち合わせ・ワークショップを行っています。";

/** スローガン */
export const SLOGAN = "小さなお店の「IT担当」を目指します。";

/** 4つの思想（Values） — aboutページで使用 */
export type Value = {
  no: string;
  title: string;
  subtitle: string;
  description: string;
};

export const VALUES: Value[] = [
  {
    no: "01",
    title: "専門用語は使いません",
    subtitle: "Plain words, honest advice",
    description:
      "全部かんたんな言葉で説明します。必要ないものは「必要ない」と正直にお伝えします。",
  },
  {
    no: "02",
    title: "小さく始めて、確かに積み上げる",
    subtitle: "Small start, steady progress",
    description:
      "完璧を目指すのではなく、まず小さく始める。そして、確実に一歩ずつ積み上げていく。この姿勢が、持続可能な成長につながると信じています。",
  },
  {
    no: "03",
    title: "現場で使える形に",
    subtitle: "From idea to practice",
    description:
      "理論や理想だけでなく、実際のお店で使える形に落とし込む。お店の声に耳を傾け、実践を通じて改善を重ねていきます。",
  },
  {
    no: "04",
    title: "お店のIT担当として",
    subtitle: "Your IT partner",
    description:
      "成田エリアなら直接お伺いできます。小さなことでも気軽に相談できる「お店のIT担当」を目指します。",
  },
];

/** WHAT WE DO（廃止 — 互換性のため空配列を維持） */
export const WHAT_WE_DO: string[] = [];

/** HOW WE THINK（廃止 — 互換性のため空配列を維持） */
export const HOW_WE_THINK: string[] = [];
