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
  alternates: { canonical: "/review" },
  openGraph: {
    url: "/review",
    title: "ツールカルテ — AIツールの健康診断 | Nebulab",
    description: "8つの観点で診て、危ないところと直し方をカルテにしてお渡しします。",
  },
  twitter: {
    title: "ツールカルテ — AIツールの健康診断 | Nebulab",
    description: "8つの観点で診て、危ないところと直し方をカルテにしてお渡しします。",
  },
};

/** 大きな主ボタン(高さ52px以上・ベタの紺・グラデーションなし)。 */
const PRIMARY_BUTTON =
  "inline-flex min-h-[56px] w-full items-center justify-center rounded-lg bg-accent px-8 text-base font-semibold tracking-wide text-white transition hover:brightness-110 sm:w-auto";

const OBSERVATIONS = [
  { num: "01", title: "鍵の置き場所", body: "AIの鍵やパスワードが、見える場所に書かれていないか" },
  { num: "02", title: "ログインと権限", body: "他の人のデータが見えてしまわないか" },
  { num: "03", title: "データの公開設定", body: "顧客名簿が、誰でも読める状態になっていないか" },
  { num: "04", title: "個人情報の扱い", body: "個人情報や社外秘を、どこに置いているか" },
  { num: "05", title: "お金が膨らむ仕組み", body: "使われすぎて、請求が膨らむ形になっていないか" },
  { num: "06", title: "入力の悪用", body: "入力欄から、乗っ取られる余地がないか" },
  { num: "07", title: "止まったときに困らないか", body: "作った人が辞めても、業務が止まらないか" },
  { num: "08", title: "古い部品", body: "使っている部品に、既に知られた穴がないか" },
];

const DELIVERABLES = [
  {
    icon: "所見",
    title: "所見（何が危ないか）",
    example: "例「APIキーがコード内に記載されています」",
  },
  {
    icon: "処方",
    title: "処方（AIにこう頼めば直ります）",
    example:
      "例「このAPIキーを環境変数に移し、コードからは削除してください、と頼めます」",
  },
  {
    icon: "再検査",
    title: "再検査の案内",
    example: "例「直した内容は、30日以内なら22,000円で再検査できます」",
  },
];

const STEPS = [
  { num: "01", title: "問診票に答える", detail: "所要3分です。" },
  { num: "02", title: "コードを預ける", detail: "預け方はメールで個別にご案内します。" },
  { num: "03", title: "カルテが届く", detail: "3〜5営業日でお渡しします。" },
  { num: "04", title: "直す", detail: "処方（AIにこう頼めば直ります）に従って直します。" },
  { num: "05", title: "再検査（任意）", detail: "直せているかを確かめられます。" },
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
      <div className="rounded-lg border border-rule bg-surface p-4 shadow-sm md:p-6">
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
      <section className="border-b border-rule">
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
      <section className="border-b border-rule bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <p className="text-[11px] font-semibold tracking-[0.3em] text-ink-sub">ある日の出来事</p>
          <div className="mt-6 space-y-4 text-base leading-[1.9] text-ink md:text-lg">
            <p>社員がChatGPTで作った、問い合わせを整理するツール。半年、問題なく動いている。</p>
            <p>
              ある朝、AIの利用料の請求が<span className="font-bold text-red-700">いつもの30倍</span>
              になっていた。
            </p>
            <p>公開ページの中に、AIの鍵がそのまま書かれていた。誰でも見られる場所に。</p>
          </div>
          <p className="mt-6 text-sm leading-7 text-ink-sub">
            作った本人に悪気はありません。AIは「動くもの」は作れますが、「安全に使えるか」は教えてくれません。
          </p>
        </div>
      </section>

      {/* === 診るのはこの8つ === */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl tracking-tight text-ink md:text-[32px]">診るのは、この8つ。</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {OBSERVATIONS.map((o) => (
              <div key={o.num} className="rounded-lg border border-rule bg-surface p-4 md:p-5">
                <span className="text-[10px] tracking-[0.2em] text-ink-sub">{o.num}</span>
                <h3 className="mt-2 text-sm font-semibold text-ink md:text-base">{o.title}</h3>
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
      <section id="deliverables" className="scroll-mt-20 border-b border-rule bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl tracking-tight text-ink md:text-[32px]">受け取るもの＝カルテ。</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {DELIVERABLES.map((d) => (
              <div key={d.title} className="rounded-lg border border-rule bg-ground p-6">
                <span className="text-[10px] tracking-[0.2em] text-ink-sub">{d.icon}</span>
                <h3 className="mt-3 text-base font-semibold text-ink">{d.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-sub">{d.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 受け方 === */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl tracking-tight text-ink md:text-[32px]">受け方。</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {STEPS.map((s) => (
              <div key={s.num} className="rounded-lg border border-rule bg-surface p-5">
                <span className="text-[10px] tracking-[0.2em] text-ink-sub">STEP {s.num}</span>
                <h3 className="mt-3 text-sm font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-xs leading-6 text-ink-sub">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === 料金 === */}
      <section id="pricing" className="scroll-mt-20 border-b border-rule bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl tracking-tight text-ink md:text-[32px]">料金。</h2>
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
      <section className="border-b border-rule">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl tracking-tight text-ink md:text-[32px]">正直に、書きます。</h2>
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
      <section className="border-b border-rule bg-surface">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl tracking-tight text-ink md:text-[32px]">よくある質問。</h2>
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
      <section id="form" className="scroll-mt-20 border-b border-rule">
        <div className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
          <h2 className="text-2xl tracking-tight text-ink md:text-[32px]">
            そのツール、診てもらいませんか。
          </h2>
          <p className="mt-4 text-sm leading-7 text-ink-sub">
            以下の問診票からお申込みください。1営業日以内にご返信します。
          </p>
          <ReviewForm />
        </div>
      </section>

      {/* === 末尾 === */}
      <section className="bg-surface">
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
