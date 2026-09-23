import type { Metadata } from "next";
import SectionHeading from "@/components/decor/SectionHeading";
import { company } from "@/data/company";

/**
 * 特定商取引法に基づく表示。
 *
 * 事業者名・所在地・代表者名・メールアドレスは `src/data/company.ts` の
 * 既存の値（サイト内で既に公開している情報）で埋める（2026-09-23、コーディ
 * ネーターの指示）。電話番号だけは値が無いため「〔記入〕」のまま残す。
 * 料金・支払い方法・引渡しの時期・キャンセルの扱いは、LP仕様書と台本の
 * 範囲で記載している。
 */

export const metadata: Metadata = {
  title: "特定商取引法に基づく表示 — Nebulab",
  description: "AIで作ったツールの安全点検サービスに関する、特定商取引法に基づく表示です。",
  alternates: { canonical: "/tokushoho" },
  robots: { index: false, follow: true },
};

const ROWS: { label: string; value: React.ReactNode }[] = [
  {
    label: "事業者名",
    value: company.name,
  },
  {
    label: "代表者名",
    value: `代表社員　${company.ceo}`,
  },
  {
    label: "所在地",
    value: company.address.full,
  },
  {
    label: "電話番号",
    value: (
      <>
        {/* TODO(社長が記入) */}
        〔記入〕（お問い合わせはメールでも受け付けています）
      </>
    ),
  },
  {
    label: "メールアドレス",
    value: company.email,
  },
  {
    label: "サービス名",
    value: "AIで作ったツールの安全点検",
  },
  {
    label: "販売価格",
    value: (
      <>
        小さなツール（Google Apps Script・1画面程度）: 66,000円（税込・本体60,000円）
        <br />
        Webアプリ（ログイン・データベースあり）: 132,000円（税込・本体120,000円）
        <br />
        再診断（直した後・30日以内）: 22,000円（税込・本体20,000円）
        <br />
        説明（オンライン30分）: 11,000円（税込・本体10,000円）
        <br />
        上記のほか、大きさが分からない場合の個別見積りは無料です。
      </>
    ),
  },
  {
    label: "商品代金以外の必要料金",
    value: "特にありません（振込手数料はお客様のご負担となります）。",
  },
  {
    label: "支払方法",
    value: "銀行振込（診断の完了後、請求書をお送りします）。",
  },
  {
    label: "支払時期",
    value: "請求書発行後、記載の期日までにお支払いください（原則、発行日から2週間以内）。",
  },
  {
    label: "サービスの提供時期",
    value: "お申込み内容のご確認後、3〜5営業日でレポートをお渡しします。",
  },
  {
    label: "キャンセル・返品について",
    value:
      "診断作業に着手する前のキャンセルは、料金は発生しません。診断作業に着手した後のキャンセルは、実施した範囲に応じて料金をご請求する場合があります。診断は「見た範囲の報告」であり、性質上、提供後の返金には応じられません。",
  },
  {
    label: "動作環境",
    value: "対象のツールのコード一式、または画面の共有をいただけることが前提です。",
  },
];

export default function TokushohoPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-12 lg:px-16 md:pt-40">
      <SectionHeading
        level="h1"
        label="LEGAL"
        heading="特定商取引法に基づく表示"
        color="indigo"
      />

      <p className="mt-10 max-w-2xl text-sm leading-7 text-ink-sub">
        本ページは「AIで作ったツールの安全点検」サービス（
        <a href="/review" className="underline hover:text-accent">
          /review
        </a>
        ）に関する、特定商取引法に基づく表示です。
      </p>

      <dl className="mt-10 max-w-3xl border-t border-rule">
        {ROWS.map((row) => (
          <div key={row.label} className="grid gap-1 border-b border-rule py-5 md:grid-cols-[180px_1fr] md:gap-6">
            <dt className="text-xs tracking-[0.15em] text-ink-sub">{row.label}</dt>
            <dd className="text-sm leading-7 text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
