import type { Metadata } from "next";
import { BRAND } from "@/constants/brand";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";
import CtaLink from "./CtaLink";
import ReviewForm from "./ReviewForm";

/**
 * ツールカルテ（AIツールの健康診断）・申込LP。
 *
 * 正: `~/company/dev/ai-tool-review/docs/ui/karte.md` 8章(実装の指示)、2・6・7章。
 * 画面イメージ: `~/company/dev/ai-tool-review/docs/ui/mockups/K2-lp-1〜3.jpg`。
 * このページは②(2026-09-23 経営会議の順番)。申込はフォームとメールのみで受ける。
 *
 * ヘッダー(ロゴ＋料金＋申し込む)とフッター(簡素)は
 * `src/app/(lp)/review/layout.tsx` が持つ(2026-09-23 修正: 広告から来た人を
 * 他ページへ逃がさないための独立レイアウト)。ここでは本文の節だけを持つ。
 */

const breadcrumbLd = breadcrumbJsonLd([{ name: "ツールカルテ", path: "/review" }]);

export const metadata: Metadata = {
  title: "ツールカルテ — AIツールの健康診断",
  description:
    "AIで作った業務ツール、そのまま使って大丈夫ですか。コードが読めなくても大丈夫。8つの観点で診て、危ないところと直し方を「カルテ」にしてお渡しします。",
  // ★ 公開の準備（特商法の電話番号・Resend・契約の文面）が揃うまで検索エンジンに載せない。
  //   揃ったら外して広告を出す（2026-09-29 社長。push が本番へのデプロイになるため、先に入れた）。
  robots: { index: false, follow: false },
  alternates: { canonical: "/review" },
  openGraph: {
    url: "/review",
    title: "ツールカルテ — AIツールの健康診断 | Nebulab",
    description: "8つの観点で診て、危ないところと直し方をカルテにしてお渡しします。",
    images: [{ url: "/review/og.jpg", width: 1200, height: 630, alt: "ツールカルテ AIツールの健康診断" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/review/og.jpg"],
    title: "ツールカルテ — AIツールの健康診断 | Nebulab",
    description: "8つの観点で診て、危ないところと直し方をカルテにしてお渡しします。",
  },
};

/** 大きな主ボタン(高さ52px以上・ベタの紺・グラデーションなし)。 */
const PRIMARY_BUTTON =
  "inline-flex min-h-[56px] w-full items-center justify-center rounded-lg bg-accent px-8 text-base font-semibold tracking-wide text-white transition hover:brightness-110 sm:w-auto";

const OBSERVATIONS: { num: string; title: string; body: string; icon: IconName }[] = [
  { num: "01", title: "鍵の置き場所", body: "AIの鍵やパスワードが、見える場所に書かれていないか", icon: "key" },
  { num: "02", title: "ログインと権限", body: "他の人のデータが見えてしまわないか", icon: "person" },
  { num: "03", title: "データの公開設定", body: "顧客名簿が、誰でも読める状態になっていないか", icon: "database" },
  { num: "04", title: "個人情報の扱い", body: "個人情報や社外秘を、どこに置いているか", icon: "document" },
  { num: "05", title: "お金が膨らむ仕組み", body: "使われすぎて、請求が膨らむ形になっていないか", icon: "yen" },
  { num: "06", title: "入力の悪用", body: "入力欄から、乗っ取られる余地がないか", icon: "input" },
  { num: "07", title: "止まったときに困らないか", body: "作った人が辞めても、業務が止まらないか", icon: "power" },
  { num: "08", title: "古い部品", body: "使っている部品に、既に知られた穴がないか", icon: "gear" },
];

const DELIVERABLES: { icon: IconName; title: string; example: string }[] = [
  {
    icon: "search",
    title: "所見（何が危ないか）",
    example: "例「APIキーがコード内に記載されています」",
  },
  {
    icon: "document",
    title: "処方（AIにこう頼めば直ります）",
    example:
      "例「このAPIキーを環境変数に移し、コードからは削除してください、と頼めます」",
  },
  {
    icon: "refresh",
    title: "再検査の案内",
    example: "例「直した内容は、30日以内なら22,000円で再検査できます」",
  },
];

const STEPS: { num: string; title: string; detail: string; icon: IconName }[] = [
  { num: "01", title: "問診票に答える", detail: "所要3分です。", icon: "input" },
  { num: "02", title: "コードを預ける", detail: "預け方はメールで個別にご案内します。", icon: "upload" },
  { num: "03", title: "カルテが届く", detail: "3〜5営業日でお渡しします。", icon: "mail" },
  { num: "04", title: "直す", detail: "処方（AIにこう頼めば直ります）に従って直します。", icon: "wrench" },
  { num: "05", title: "再検査（任意）", detail: "直せているかを確かめられます。", icon: "refresh" },
];

const PRICING = [
  {
    menu: "小さなツール（Google Apps Script・1画面程度）",
    price: "66,000円",
    note: "税込・本体60,000円",
  },
  {
    menu: "Webアプリ（ログイン・データベースあり）",
    price: "132,000円",
    note: "税込・本体120,000円",
  },
  { menu: "再検査（直した後・30日以内）", price: "22,000円", note: "税込・本体20,000円" },
  { menu: "説明（オンライン30分）", price: "11,000円", note: "税込・本体10,000円" },
];

const HONESTY = [
  "カルテは「見た範囲で見つかったことのご報告」です。すべての問題がないことを保証するものではありません",
  "無料の自動ツールでも、鍵の漏れは見つかります。私たちの値打ちは、どれが本当に危ないかの判断と、直し方（処方）まで示すことです",
  "本番の環境に負荷をかける検査（攻撃のまねごと）はしません",
  "お預かりしたコードは、決めた期間で削除します。秘密保持の約束をします",
  "セキュリティ専門会社の監査の代わりになるものではありません。法律の助言も行いません",
  "見本は、当社の自社ツールを診たカルテです",
];

const FAQ = [
  {
    q: "コードがありません（DifyやMakeで作りました）",
    a: "いまはコードのあるものが対象です。ご相談ください。",
  },
  {
    q: "個人で作ったツールでも申し込めますか？",
    a: "はい。個人の方も申し込めます。問診票の最初で「個人」を選んでください。",
  },
  { q: "何を渡せばいいですか", a: "コード一式、または画面の共有です。問診票の後にご案内します。" },
  {
    q: "社外にコードを出すのが不安です",
    a: "秘密保持の約束と、削除の期限を契約に入れます。AIに読ませる部分も、読むだけで書き換えません。",
  },
  {
    q: "直すところまでお願いできますか",
    a: "カルテは「所見と処方（直し方）の提示」までです。直す作業のご相談は別途承ります。",
  },
  { q: "支払いはどうなりますか", a: "カルテのお渡し後に請求書をお送りします（銀行振込）。お見積りは無料です。" },
];


/** 節見出し。左に藍色の短い縦線を添える(karte.md 12.1)。 */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="relative pl-4 text-2xl tracking-tight text-ink md:text-[32px]">
      <span
        aria-hidden
        className="absolute top-1 bottom-1 left-0 w-1 rounded-full bg-accent"
      />
      {children}
    </h2>
  );
}

/**
 * カードの小さなアイコン(karte.md 12.1・案Bから取り入れ)。
 * 藍色の丸の中に白い線画。package.json にアイコン部品を追加しないため、
 * すべてインラインの SVG で描く。8つの観点は観点ごとに意味の合う簡単な形。
 */
type IconName =
  | "key"
  | "person"
  | "database"
  | "document"
  | "yen"
  | "input"
  | "power"
  | "gear"
  | "search"
  | "refresh"
  | "upload"
  | "mail"
  | "wrench";

function CardIcon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    key: (
      <>
        <circle cx="8" cy="12" r="3" />
        <path d="M11 10l9-9M17 2l3 3M14 5l2 2" />
      </>
    ),
    person: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="2.6" />
        <path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
        <path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6" />
      </>
    ),
    document: (
      <>
        <path d="M7 3h7l3 3v15H7z" />
        <path d="M14 3v3h3" />
        <path d="M9.5 12h5M9.5 15.5h5" />
      </>
    ),
    yen: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M8.5 8l3.5 5 3.5-5M12 13v4M9 13.5h6M9 16h6" />
      </>
    ),
    input: (
      <>
        <rect x="3.5" y="8" width="17" height="8" rx="1.6" />
        <path d="M7 12h10" />
      </>
    ),
    power: (
      <>
        <path d="M12 3v8" />
        <path d="M7 6.5a7.2 7.2 0 1 0 10 0" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3.4" />
        <path d="M12 2.5v3M12 18.5v3M4.4 6.4l2.1 2.1M17.5 15.5l2.1 2.1M2.5 12h3M18.5 12h3M4.4 17.6l2.1-2.1M17.5 8.5l2.1-2.1" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="M15.5 15.5L20 20" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 11a8 8 0 0 0-14.9-3.2M4 13a8 8 0 0 0 14.9 3.2" />
        <path d="M4 4v5h5M20 20v-5h-5" />
      </>
    ),
    upload: (
      <>
        <path d="M12 15V4M8 8l4-4 4 4" />
        <path d="M4.5 15v3.5A1.5 1.5 0 0 0 6 20h12a1.5 1.5 0 0 0 1.5-1.5V15" />
      </>
    ),
    mail: (
      <>
        <rect x="3.5" y="6" width="17" height="12" rx="1.6" />
        <path d="M4.5 7.5l7.5 6 7.5-6" />
      </>
    ),
    wrench: (
      <>
        <path d="M14.5 6.5a3.5 3.5 0 1 0-4.9 4.9L4 17l3 3 5.6-5.6a3.5 3.5 0 0 0 4.9-4.9l-3-3z" />
      </>
    ),
  };

  return (
    <span className="mb-2 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-accent md:size-9">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4.5 md:size-5"
        aria-hidden
      >
        {paths[name]}
      </svg>
    </span>
  );
}

/**
 * ヒーローに描くカルテ1ページ目の見本(HTML/CSSで描く。画像にしない。karte.md 8.2)。
 *
 * 中身は実物（自社ツール BizRelay を診たカルテの1ページ目、TK-20260929-54EB）。
 * 直していない所見（No.2・3・4・5・7）は `masked: true` にし、本当のコメント文は
 * 持たせていない（ソース・ビルド成果物のどちらにも入らない）。伏せを外すのは、
 * BizRelay でその所見を直してから（2026-09-28 経営会議: LP に載せる所見は
 * 直し終えたものか伏せたもの）。直したら該当行の `masked` を外し、`note` に
 * 実際のコメントを書けば表示される。
 */
type KarteRow = { num: string; title: string; verdict: "危険" | "注意" | "問題なし" } & (
  | { masked: true }
  | { masked: false; note: string }
);

const KARTE_SAMPLE_ROWS: KarteRow[] = [
  { num: "1", title: "鍵・パスワードの漏れ", verdict: "問題なし", masked: false, note: "—" },
  { num: "2", title: "ログインと権限", verdict: "注意", masked: true },
  { num: "3", title: "データベースの公開設定", verdict: "注意", masked: true },
  { num: "4", title: "個人情報・社内情報の扱い", verdict: "注意", masked: true },
  { num: "5", title: "お金が膨らむ仕組み", verdict: "注意", masked: true },
  {
    num: "6",
    title: "入力の悪用",
    verdict: "注意",
    masked: false,
    note: "ログイン画面に、他人が決めた文章を表示させられる（ほか2件）",
  },
  { num: "7", title: "止まったときに困らないか", verdict: "注意", masked: true },
  { num: "8", title: "古い部品", verdict: "問題なし", masked: false, note: "—" },
];

function KarteSample() {
  const badgeClass: Record<string, string> = {
    危険: "bg-red-100 text-red-700",
    注意: "bg-amber-100 text-amber-700",
    問題なし: "bg-emerald-100 text-emerald-700",
  };

  return (
    <div>
      <div className="rounded-lg border border-rule bg-surface p-4 shadow-lg shadow-accent/10 md:p-6">
        <div className="flex items-start justify-between border-b border-rule pb-3">
          <div>
            <p className="text-base font-bold text-ink md:text-lg">ツールカルテ</p>
            <p className="text-[10px] text-ink-sub">AIツールの健康診断</p>
          </div>
          <p className="text-right text-[10px] leading-5 text-ink-sub">
            カルテ番号 TK-20260929-54EB
            <br />
            診た日 2026年9月29日
            <br />
            診たもの BizRelay（業務SaaS）
            <br />
            診た人 Nebulab合同会社
          </p>
        </div>
        <div className="mt-4 rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-center">
          <p className="text-[10px] font-semibold tracking-widest text-amber-700">総合判定</p>
          <p className="mt-1 text-sm font-bold text-amber-700">
            近いうちに直したいことがあります
          </p>
        </div>
        <p className="mt-4 text-center text-xs font-semibold text-ink">
          危険 0件・注意 9件・問題なし 2観点
        </p>
        <div className="mt-3 overflow-hidden rounded-md border border-rule">
          <table className="w-full border-collapse text-[10px] md:text-[11px]">
            <thead>
              <tr className="bg-ground text-ink-sub">
                <th className="border-b border-rule px-2 py-1.5 text-left font-medium">No.</th>
                <th className="border-b border-rule px-2 py-1.5 text-left font-medium">観点</th>
                <th className="border-b border-rule px-2 py-1.5 text-left font-medium">結果</th>
                <th className="border-b border-rule px-2 py-1.5 text-left font-medium">
                  ひとことコメント
                </th>
              </tr>
            </thead>
            <tbody>
              {KARTE_SAMPLE_ROWS.map((r) => (
                <tr key={r.num} className="bg-surface">
                  <td className="border-b border-rule px-2 py-1.5 text-ink-sub">{r.num}</td>
                  <td className="min-w-[6.5em] border-b border-rule px-2 py-1.5 text-ink">{r.title}</td>
                  <td className="border-b border-rule px-2 py-1.5">
                    <span
                      className={`inline-block whitespace-nowrap rounded px-1.5 py-0.5 font-medium ${badgeClass[r.verdict]}`}
                    >
                      {r.verdict}
                    </span>
                  </td>
                  <td className="border-b border-rule px-2 py-1.5 text-ink-sub">
                    {r.masked ? (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="h-2.5 w-20 rounded-full bg-ink-sub/20 md:w-28" />
                        <span className="text-[9px] text-ink-sub/70">
                          公開前に直すため、伏せています
                        </span>
                      </span>
                    ) : (
                      r.note
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-ink-sub">
        当社の自社ツール（BizRelay）を診たカルテの見本（1ページ目）。
        直していない所見は伏せています
      </p>
    </div>
  );
}

export default function ReviewPage() {
  return (
    <main className="text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* === ヒーロー === */}
      <section className="lp-glow">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-10 md:py-24">
          <div>
            <h1 className="text-[32px] leading-[1.35] tracking-tight text-ink sm:text-[40px] md:text-[44px]">
              AIで作ったツール、
              <br />
              健康診断しませんか。
            </h1>
            <p className="mt-6 text-base leading-[1.9] text-ink-sub md:text-lg">
              コードが読めなくても大丈夫です。8つの観点で診て、危ないところと直し方を
              「カルテ」にしてお渡しします。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaLink href="#form" position="hero" className={PRIMARY_BUTTON}>
                問診票に答える（3分）
              </CtaLink>
              <a href="#deliverables" className="text-sm font-medium text-accent hover:underline">
                カルテの見本を見る
              </a>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xs md:max-w-sm">
            <KarteSample />
          </div>
        </div>
      </section>


      {/* === ある日の出来事 === */}
      <section className="lp-band">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24 [&>*]:max-w-3xl">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-ink-sub">ある日の出来事</p>
          <div className="mt-6 space-y-4 text-base leading-[1.9] text-ink md:text-lg">
            <p>社員がAIで作った、お客さんを管理するツール。半年、問題なく動いている。</p>
            <p>
              ある日、ツールがテスト用に撮っていた画面の画像が
              <span className="font-bold text-red-700">アドレスを打てば、誰でも見られる状態</span>
              だとわかった。
            </p>
            <p>画像には、お客さんの名前と電話番号が写っていた。作った本人も、画像が残っていることを知らなかった。</p>
          </div>
          <p className="mt-6 text-sm leading-7 text-ink-sub">
            作った本人に悪気はありません。AIは「動くもの」は作れますが、「安全に使えるか」は教えてくれません。
          </p>
        </div>
      </section>

      {/* === 診るのはこの8つ === */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <SectionHeading>診るのは、この8つ。</SectionHeading>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {OBSERVATIONS.map((o) => (
              <div
                key={o.num}
                className="rounded-lg border border-rule bg-surface p-4 shadow-sm md:p-5"
              >
                <CardIcon name={o.icon} />
                <span className="block text-[10px] tracking-[0.2em] text-ink-sub">{o.num}</span>
                <h3 className="mt-1 text-sm font-semibold text-ink md:text-base">{o.title}</h3>
                <p className="mt-2 text-xs leading-6 text-ink-sub">{o.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-7 text-ink-sub">
            このうち2・4・5・6・7は、無料の自動ツールではほとんど拾えません。人が見て判断します。
          </p>
        </div>
      </section>


      {/* === 受け取るもの＝カルテ === */}
      <section id="deliverables" className="lp-band scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <SectionHeading>受け取るもの＝カルテ。</SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {DELIVERABLES.map((d) => (
              <div key={d.title} className="rounded-lg border border-rule bg-surface p-6 shadow-sm">
                <CardIcon name={d.icon} />
                <h3 className="mt-1 text-base font-semibold text-ink">{d.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-sub">{d.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* === 受け方 === */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <SectionHeading>受け方。</SectionHeading>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {STEPS.map((s) => (
              <div key={s.num} className="rounded-lg border border-rule bg-surface p-5 shadow-sm">
                <CardIcon name={s.icon} />
                <span className="block text-[10px] tracking-[0.2em] text-ink-sub">STEP {s.num}</span>
                <h3 className="mt-1 text-sm font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-xs leading-6 text-ink-sub">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* === 料金 === */}
      <section id="pricing" className="lp-band scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24 [&>*]:max-w-3xl">
          <SectionHeading>料金。</SectionHeading>
          <div className="mt-12 overflow-hidden rounded-lg border border-rule">
            <table className="w-full border-collapse text-sm">
              <tbody>
                {PRICING.map((row, i) => (
                  <tr key={row.menu} className={i % 2 === 0 ? "bg-ground" : "bg-surface"}>
                    <td className="border-b border-rule px-4 py-4 align-top leading-6 text-ink md:px-6">
                      {row.menu}
                    </td>
                    <td className="border-b border-rule px-4 py-4 text-right align-top whitespace-nowrap md:px-6">
                      <span className="text-base font-bold text-ink md:text-lg">{row.price}</span>
                      <br />
                      <span className="text-xs text-ink-sub">{row.note}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-ink-sub">
            お見積りは無料です。大きさが分からない場合は、問診票からご相談ください。
          </p>
        </div>
      </section>


      {/* === 正直に書くこと === */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24 [&>*]:max-w-3xl">
          <SectionHeading>正直に、書きます。</SectionHeading>
          <ul className="mt-10 space-y-4">
            {HONESTY.map((line, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-7 text-ink-sub">
                <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* === よくある質問 === */}
      <section className="lp-band">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24 [&>*]:max-w-3xl">
          <SectionHeading>よくある質問。</SectionHeading>
          <div className="mt-10 divide-y divide-rule border-t border-b border-rule">
            {FAQ.map((item, i) => (
              <details key={item.q} className="group py-4" open={i === 0 ? undefined : false}>
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-ink md:text-base">
                  {item.q}
                  <span className="ml-4 shrink-0 text-ink-sub transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-ink-sub">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>


      {/* === 問診票 === */}
      <section id="form" className="lp-glow lp-glow-soft scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24 [&>*]:max-w-3xl">
          <SectionHeading>そのツール、診てもらいませんか。</SectionHeading>
          <p className="mt-4 text-sm leading-7 text-ink-sub">
            以下の問診票からお申込みください。1営業日以内にご返信します。
          </p>
          <ReviewForm />
        </div>
      </section>


      {/* === 末尾 === */}
      <section className="lp-band">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:px-10 md:py-24">
          <p className="text-sm leading-7 text-ink-sub">ご不明な点は、お気軽にお問い合わせください。</p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CtaLink href="#form" position="footer" className={PRIMARY_BUTTON}>
              問診票に答える（3分）
            </CtaLink>
            <a href={BRAND.emailMailto} className="text-xs tracking-wider text-ink-sub hover:text-accent">
              {BRAND.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
