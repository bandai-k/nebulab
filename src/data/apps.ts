export type AppStatus = "PUBLISHED" | "COMING_SOON";

/** 段落中のリンク。href が "/" 始まりなら内部リンクとして描画する。 */
export type AppInlineLink = { text: string; href: string };

/** 文字列だけの段落と、リンクを含む段落の両方を表せる型。 */
export type AppParagraph = string | (string | AppInlineLink)[];

/** h3 見出しを持つ機能ブロック。 */
export type AppFeature = {
  title: string;
  body: string;
};

export type AppSection = {
  /** URL フラグメント（#id）。ページ内リンクで飛べるようにする。 */
  id: string;
  /** セクション上部の英字ラベル。 */
  eyebrow: string;
  /** h2 見出し。 */
  heading: string;
  /** 見出し直下の段落。 */
  body?: AppParagraph[];
  /** h3 付きの機能ブロック。 */
  features?: AppFeature[];
  /** 箇条書き。 */
  items?: string[];
  /** 箇条書きのあとに続く段落。 */
  afterItems?: AppParagraph[];
  /** 囲みで見せる補足。 */
  callout?: { lead: string; body?: string };
  /** スクリーンショットなど、本文以外の要素を差し込む位置の指定。 */
  media?: "screenshots";
};

export type AppScreenshot = {
  /** /public 配下のパス。ファイルが無い場合はプレースホルダーを表示する。 */
  src: string;
  alt: string;
  /** 元画像の実寸。縦横比の確保と next/image の srcSet 生成に使う。 */
  width: number;
  height: number;
};

export type AppEntry = {
  /** 動的ルート /apps/[appId] の slug を兼ねる。 */
  id: string;
  name: string;
  nameEn: string;
  platform: string;
  /** 詳細ページに出す対応OS表記。 */
  osRequirement: string;
  /** 価格表記。 */
  price: string;
  category: string;
  tagline: string;
  /** 一覧カード / meta description に使う短い説明。 */
  description: string;
  /** 指定した場合、詳細ページの <title> をこの文字列そのままにする。 */
  metaTitle?: string;
  status: AppStatus;
  statusNote?: string;
  /** 公開年月（YYYY-MM）。 */
  released?: string;
  /** App Store の配信URL。未公開または未確定の間は空文字。空なら「近日公開」を表示する。 */
  appStoreUrl?: string;
  /** プライバシーポリシーページ。 */
  privacyUrl: string;
  /** 一覧カード / ヒーローで使うアプリアイコン。未配置でもビルドは通る。 */
  icon?: string;
  /** OG 画像（1200×630）。未指定のときは icon を使う。 */
  ogImage?: { src: string; width: number; height: number };
  /** スクリーンショット（1320×2868）。未配置でもビルドは通る。 */
  screenshots?: AppScreenshot[];
  /** サムネイルの背景。アイコン画像が用意できたら thumbLogo を足す。 */
  thumbStyle: string;
  thumbLogo?: string;
  /** 詳細ページ冒頭の本文。 */
  body?: AppParagraph[];
  sections?: AppSection[];
  tags?: string[];
};

// 記載内容は各アプリのプライバシーポリシー（App Store Connect の申告と整合済み）に
// 基づく事実のみで構成している。実態と異なる機能を追記しないこと。
export const apps: AppEntry[] = [
  {
    id: "garage-techo",
    name: "ガレージ手帳",
    nameEn: "GARAGE TECHO",
    platform: "iOS",
    osRequirement: "iOS 16.0 以降",
    price: "無料",
    category: "整備記録アプリ",
    tagline: "バイクの点検・整備・ツーリング日記",
    description:
      "ZRX1200Rの持ち主が自分のために作った整備手帳。開いた瞬間に次にやるべき整備がわかる。ZRX / ZZR1100 / Z900RS 対応。iOS向け、無料。",
    metaTitle: "ガレージ手帳 — バイクの点検・整備・ツーリング日記",
    status: "PUBLISHED",
    statusNote: "APP STORE 公開中",
    released: "2026-08",
    appStoreUrl: "https://apps.apple.com/jp/app/id6805839454",
    // App Store 審査に提出済みの URL。移動・リダイレクトを設定しないこと。
    privacyUrl: "/apps/seibi-techo/privacy",
    icon: "/apps/garage-techo/icon-256.png",
    ogImage: { src: "/apps/garage-techo/og.png", width: 1200, height: 630 },
    screenshots: [
      {
        src: "/apps/garage-techo/shot-01.webp",
        alt: "ホーム画面。期限切れのエンジンオイルが赤いバーで表示されている",
        width: 640,
        height: 1391,
      },
      {
        src: "/apps/garage-techo/shot-02.webp",
        alt: "点検タブ。日常点検8項目のうち5項目にチェックが入っている",
        width: 640,
        height: 1391,
      },
      {
        src: "/apps/garage-techo/shot-03.webp",
        alt: "記録タブ。ツーリングの記録が写真と本文つきで並んでいる",
        width: 640,
        height: 1391,
      },
      {
        src: "/apps/garage-techo/shot-04.webp",
        alt: "不調の詳細。疑うべき箇所の一覧と経過の記録",
        width: 640,
        height: 1391,
      },
      {
        src: "/apps/garage-techo/shot-05.webp",
        alt: "記録タブのカレンダー表示。写真のある日にサムネイルが出ている",
        width: 640,
        height: 1391,
      },
    ],
    thumbStyle:
      "linear-gradient(135deg, #3C4A5A 0%, #26313D 60%, #161C24 100%)",
    sections: [
      {
        id: "why",
        eyebrow: "Why",
        heading: "なぜ作ったか",
        body: [
          "前回オイルを換えたのがいつだったか、思い出せませんでした。",
          "紙の手帳に書けば失くします。汎用の記録アプリを試すと、項目が自分のバイクと合いません。空冷車の項目にキャブ同調がなかったり、逆に自分には関係のない項目が並んでいたり。ZRX1200Rという20年以上前のキャブ車に乗っていると、だいたいそういうことになります。",
          "それなら自分で作るか、と思って作ったのがこのアプリです。",
        ],
      },
      {
        id: "features",
        eyebrow: "Three Things",
        heading: "3つのことだけ",
        features: [
          {
            title: "次に何をすべきかが、開いた瞬間にわかる",
            body: "走行距離を入れておけば、オイル、チェーン、キャリパーの揉み出しまで、残りの距離がバーで出ます。期限を超えたものがあるときだけ、赤いカードが現れます。何もなければ、何も出ません。",
          },
          {
            title: "乗る前の点検が30秒で終わる",
            body: "日常点検は8項目のチェックだけ。ブレーキ、タイヤ、灯火、チェーン、クラッチ、漏れ、ミラー、始動と異音。上から順に触って終わりです。翌日には自動でリセットされます。",
          },
          {
            title: "不調を、症状と原因に分けて追える",
            body: "「始動性が悪い」のような不調は、原因が分かるまで数ヶ月かかることがあります。疑ったところ、試したこと、シロだったものを積み上げていけます。気温やエンジンの冷温も一緒に残せるので、条件が見えてきます。",
          },
        ],
      },
      {
        id: "screenshots",
        eyebrow: "Screenshots",
        heading: "スクリーンショット",
        media: "screenshots",
      },
      {
        id: "models",
        eyebrow: "Supported Models",
        heading: "対応車種",
        body: [
          "車種を選ぶと、点検の項目が変わります。キャブ車には「キャブ同調」が出て、FI車には「スロットルボディ清掃」が出ます。関係のない項目は表示されません。",
        ],
        items: [
          "ZRX1200R（ZRT20A / 2001–2008）",
          "ZRX1100（ZRT10C / 1997–2000）",
          "ZRX1200 DAEG（ZRT20D / 2009–2016）",
          "ZZR1100（ZXT10C・D / 1990–2001）",
          "Z900RS（ZR900C / 2018–）",
          "Z900RS CAFE（ZR900C / 2018–）",
        ],
        afterItems: [
          "ZRX系とZZR1100は、1,052〜1,188ccの水冷直列4気筒という同じ系統です。Z900RSは948ccの別系統ですが、レトロネイキッドという立ち位置が近いので入れました。",
        ],
        callout: {
          lead: "この車種も入れてほしい、という要望は歓迎します。",
          body: "諸元と点検項目のデータを足すだけなので、対応は難しくありません。",
        },
      },
      {
        id: "privacy",
        eyebrow: "Data",
        heading: "記録の扱いについて",
        body: [
          "記録と写真はすべて端末の中に保存されます。外部のサーバーへ送信する仕組みはありません。位置情報も取得しません。利用状況を計測するツールも入れていません。",
          "アプリを削除すると記録も消えます。残しておきたい場合は、設定のバックアップ機能でテキストとして書き出せます。",
          [
            "詳しくは",
            { text: "プライバシーポリシー", href: "/apps/seibi-techo/privacy" },
            "をご覧ください。",
          ],
        ],
      },
      {
        id: "roadmap",
        eyebrow: "Roadmap",
        heading: "これから",
        items: [
          "点検の期限が近づいたときの通知",
          "ホーム画面ウィジェット",
          "対応車種の追加",
          "アプリアイコンの着せ替え",
        ],
        afterItems: [
          [
            "要望や不具合の報告は ",
            { text: "contact@nebulab.jp", href: "mailto:contact@nebulab.jp" },
            " までお願いします。ZRXやZ900RSに乗っている方からの指摘は特に助かります。",
          ],
        ],
      },
    ],
    tags: ["iOS", "バイク", "整備記録", "オフライン"],
  },
  {
    id: "midorikko",
    name: "みどりっこ",
    nameEn: "MIDORIKKO",
    platform: "iOS",
    osRequirement: "iOS 16.0 以降",
    price: "無料",
    category: "植物日記アプリ",
    tagline: "育てている植物との時間を、そのまま残す。",
    description:
      "育てている植物の記録を、写真と一緒に残しておける iOS 向けの植物日記アプリ。アカウント登録は不要で、記録はすべて端末内に保存されます。",
    status: "PUBLISHED",
    statusNote: "APP STORE 公開中",
    appStoreUrl: "https://apps.apple.com/jp/app/midorikko/id6803494534",
    privacyUrl: "/apps/midorikko/privacy",
    icon: "/apps/midorikko/midorikko_app_icon.svg",
    ogImage: { src: "/apps/midorikko/og.png", width: 1200, height: 630 },
    // 並びは画面の流れ（ホーム → 各みどりっこの詳細）に合わせている。
    // ファイル名と実際の画面が一致していないため、alt は中身に合わせて記述した。
    screenshots: [
      {
        src: "/apps/midorikko/02_detail_monchan.png",
        alt: "ホーム画面「うちのみどりっこ」。モンちゃんとバジルくんが写真つきのカードで並んでいる",
        width: 1320,
        height: 2868,
      },
      {
        src: "/apps/midorikko/03_detail_basil.png",
        alt: "モンちゃん（モンステラ）の詳細画面。写真とメモ、一緒に暮らした日数が表示されている",
        width: 1320,
        height: 2868,
      },
      {
        src: "/apps/midorikko/01_home.png",
        alt: "バジルくん（バジル）の詳細画面。思い出の枚数と、水やりや今日の一枚といった成長の記録が並んでいる",
        width: 1320,
        height: 2868,
      },
    ],
    thumbStyle:
      "linear-gradient(135deg, #4E7A55 0%, #345738 60%, #1F3324 100%)",
    body: [
      "育てている植物を「みどりっこ」として登録し、日々の様子を写真と文章で記録していくアプリです。",
      "アカウント登録の仕組みそのものがありません。記録した内容も写真も、すべてお使いの端末の中だけに保存されます。解析ツール、広告ネットワーク、サードパーティ SDK は一切導入していません。",
    ],
    sections: [
      {
        id: "features",
        eyebrow: "Features",
        heading: "機能",
        items: [
          "みどりっこ（植物）の登録と、日々の記録",
          "記録への写真の追加",
          "記念日のお知らせ（端末内で完結する通知）",
          "アカウント登録なしで、すぐに使いはじめられる",
        ],
      },
      {
        id: "screenshots",
        eyebrow: "Screenshots",
        heading: "スクリーンショット",
        media: "screenshots",
      },
      {
        id: "privacy",
        eyebrow: "Privacy",
        heading: "記録の扱いについて",
        body: [
          "写真をアプリ内に保存する際、位置情報などの撮影時メタデータを引き継がない形で保存しています。撮影場所はご自宅であることが多く、記録アプリが保持し続ける理由がないためです。",
        ],
      },
    ],
    tags: ["iOS", "植物", "記録", "オフライン"],
  },
];

export function findApp(id: string): AppEntry | undefined {
  return apps.find((a) => a.id === id);
}
