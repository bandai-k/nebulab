export const VISION =
  "小さな場所・小さな事業から、テクノロジーと地域資源を結びつけ、豊かな循環を生み出す世界を作る。";

export const MISSION =
  "「思考と行動の間」を埋めるテクノロジーで、地域と人の可能性を拡張する。";

export type Value = {
  code: string;
  title: string;
  description: string;
};

export const VALUES: Value[] = [
  {
    code: "V1",
    title: "能動性",
    description:
      "AIは聞かれるのを待たない。状況を観察し、先に動く。受動的なツールではなく、能動的なパートナーを作る。",
  },
  {
    code: "V2",
    title: "判断は人間に",
    description:
      "どれだけAIが賢くなっても、最終判断は人間が行う。実行は必ず承認制。自律ではなく拡張を目指す。",
  },
  {
    code: "V3",
    title: "小さく壊して、速く学ぶ",
    description:
      "完璧を目指して止まるより、小さなプロトタイプを壊し続ける。検証の速度が、プロダクトの質を決める。",
  },
];
