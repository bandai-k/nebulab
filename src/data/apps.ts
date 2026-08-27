export type AppStatus = "PUBLISHED" | "COMING_SOON";

export type AppSection = {
  heading: string;
  body?: string;
  items?: string[];
};

export type AppEntry = {
  id: string;
  name: string;
  nameEn: string;
  platform: string;
  category: string;
  tagline: string;
  /** 一覧カード / meta description に使う短い説明。 */
  description: string;
  status: AppStatus;
  statusNote?: string;
  /** App Store の配信URL。未公開または未確定の間は undefined。 */
  appStoreUrl?: string;
  /** プライバシーポリシーページ（/apps/{id}/privacy）。 */
  privacyUrl: string;
  /** サムネイルの背景。アイコン画像が用意できたら thumbLogo を足す。 */
  thumbStyle: string;
  thumbLogo?: string;
  /** 詳細ページ冒頭の本文。 */
  body?: string[];
  sections?: AppSection[];
  tags?: string[];
};

// 記載内容は各アプリのプライバシーポリシー（App Store Connect の申告と整合済み）に
// 基づく事実のみで構成している。実態と異なる機能を追記しないこと。
export const apps: AppEntry[] = [
  {
    id: "midorikko",
    name: "みどりっこ",
    nameEn: "MIDORIKKO",
    platform: "iOS",
    category: "植物日記アプリ",
    tagline: "育てている植物との時間を、そのまま残す。",
    description:
      "育てている植物の記録を、写真と一緒に残しておける iOS 向けの植物日記アプリ。アカウント登録は不要で、記録はすべて端末内に保存されます。",
    status: "PUBLISHED",
    statusNote: "APP STORE 公開中",
    privacyUrl: "/apps/midorikko/privacy",
    thumbStyle:
      "linear-gradient(135deg, #4E7A55 0%, #345738 60%, #1F3324 100%)",
    body: [
      "育てている植物を「みどりっこ」として登録し、日々の様子を写真と文章で記録していくアプリです。",
      "アカウント登録の仕組みそのものがありません。記録した内容も写真も、すべてお使いの端末の中だけに保存されます。解析ツール、広告ネットワーク、サードパーティ SDK は一切導入していません。",
    ],
    sections: [
      {
        heading: "Features",
        items: [
          "みどりっこ（植物）の登録と、日々の記録",
          "記録への写真の追加",
          "記念日のお知らせ（端末内で完結する通知）",
          "アカウント登録なしで、すぐに使いはじめられる",
        ],
      },
      {
        heading: "Privacy",
        body:
          "写真をアプリ内に保存する際、位置情報などの撮影時メタデータを引き継がない形で保存しています。撮影場所はご自宅であることが多く、記録アプリが保持し続ける理由がないためです。",
      },
    ],
    tags: ["iOS", "植物", "記録", "オフライン"],
  },
  {
    id: "seibi-techo",
    name: "整備手帳",
    nameEn: "SEIBI TECHO",
    platform: "iOS",
    category: "整備記録アプリ",
    tagline: "点検も、不調も、走った日も。一冊にまとめておく。",
    description:
      "愛車の点検・整備・不調・走行を記録しておける iOS 向けの整備記録アプリ。記録はすべて端末内に保存され、外部へ送信されることはありません。",
    status: "COMING_SOON",
    statusNote: "リリース準備中",
    privacyUrl: "/apps/seibi-techo/privacy",
    thumbStyle:
      "linear-gradient(135deg, #3C4A5A 0%, #26313D 60%, #161C24 100%)",
    body: [
      "登録した車種の点検・整備の記録、気になる不調とその経過、走った日の記録を、写真と一緒に一冊にまとめておくアプリです。",
      "記録はすべて端末内のアプリ専用領域に保存されます。外部のサーバーへ送信する仕組みも、利用状況を計測する仕組みも組み込んでいません。",
    ],
    sections: [
      {
        heading: "Features",
        items: [
          "車種と走行距離の登録",
          "点検・整備の記録（日付、距離、内容、費用、メモ）",
          "不調の記録と、その経過の追跡",
          "走行の記録（日付、距離、天気、本文）",
          "記録への写真の追加、表示テーマの切り替え",
          "消耗品の記録と、記録内容のテキスト書き出し",
        ],
      },
      {
        heading: "Pricing",
        body:
          "アプリ内課金は開発者への任意の支援を目的としたものです。機能の制限はなく、課金しなくてもアプリのすべての機能を利用できます。",
      },
    ],
    tags: ["iOS", "整備記録", "車", "オフライン"],
  },
];

export function findApp(id: string): AppEntry | undefined {
  return apps.find((a) => a.id === id);
}
