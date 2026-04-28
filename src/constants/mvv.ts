export const VISION =
  "想いが、行動として流れていく社会をつくる。";

export const MISSION =
  "思考と行動の間を、埋め続ける。";

export type Value = {
  code: string;
  title: string;
  description: string;
};

export const VALUES: Value[] = [
  {
    code: "V1",
    title: "先回り",
    description:
      "問われる前に動く。状況を観察し、提案し、流れを生む。受け身ではなく、能動的なパートナーであり続ける。",
  },
  {
    code: "V2",
    title: "主役は人",
    description:
      "私たちは代替ではなく、拡張を作る。最後の意志は、常に人の側にある。",
  },
  {
    code: "V3",
    title: "小さく壊して、速く学ぶ",
    description:
      "完璧を目指して止まるより、小さなプロトタイプを壊し続ける。検証の速度が、プロダクトの質を決める。",
  },
];
