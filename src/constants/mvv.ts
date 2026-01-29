/**
 * Mission / Vision / Values の定義
 * サイト全体で参照する理念・思想の単一ソース
 */

/** メインビジョン（キャッチコピー） */
export const VISION_TAGLINE = "つくる。整える。そして、循環させる。";

/** ミッション（存在意義） */
export const MISSION =
  "プロダクト開発を軸に、「働く場所」や「学びの場」も含めた環境づくりを行う小さなラボです。";

/** ミッション補足（循環の説明） */
export const MISSION_SUPPLEMENT =
  "成田の拠点「NRT-LOFT」を運営し、集まる・試す・改善するという循環を、現場から設計しています。";

/** スローガン */
export const SLOGAN = "小さくはじめて、確かに積み上げる。";

/** 4つの思想（Values） */
export type Value = {
  no: string;
  title: string;
  subtitle: string;
  description: string;
};

export const VALUES: Value[] = [
  {
    no: "01",
    title: "小さくはじめて、確かに積み上げる",
    subtitle: "Small start, steady progress",
    description:
      "完璧を目指すのではなく、まず小さく始める。そして、確実に一歩ずつ積み上げていく。この姿勢が、持続可能な成長と、本当に価値のあるものづくりにつながると信じています。",
  },
  {
    no: "02",
    title: "プロダクトと場づくりの両輪",
    subtitle: "Product × Place",
    description:
      "優れたプロダクトも、それを生み出す場がなければ持続しません。プロダクト開発と拠点づくり（Place）を両輪として捉え、両方を同時に育てていくことが重要だと考えています。",
  },
  {
    no: "03",
    title: "思考は、まだ途中だ",
    subtitle: "Thinking in progress",
    description:
      "答えは最初からあるものではなく、試行錯誤の過程で見つけていくもの。思考は常に進行中であり、完結しない。その過程そのものに価値があると考えています。",
  },
  {
    no: "04",
    title: "現場で使える形に",
    subtitle: "From idea to practice",
    description:
      "理論や理想だけでなく、実際の現場で使える形に落とし込む。ユーザーや利用者の声に耳を傾け、実践を通じて改善を重ねていく。それが本当の意味での価値創造につながります。",
  },
];

/** WHAT WE DO（私たちがやること） */
export const WHAT_WE_DO = [
  "最短距離での実装と運用設計",
  "小さく回せる仕組みづくり",
  "拠点運営で得た現場ベースの知見",
];

/** HOW WE THINK（私たちの考え方） */
export const HOW_WE_THINK = [
  "要件が固まる前から一緒に考える",
  "現状と目的を整理し、最短ルートを選ぶ",
  "人と場が続くための運用を設計する",
];
