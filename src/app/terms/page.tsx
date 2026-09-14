import type { Metadata } from "next";
import SectionHeading from "@/components/decor/SectionHeading";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "利用規約 — Nebulab",
  description: "Nebulabの利用規約です。",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-20 pt-32 md:px-12 lg:px-16 md:pt-40">
      <SectionHeading
        level="h1"
        label="TERMS"
        heading="利用規約"
        color="indigo"
      />

      <div className="mt-12 max-w-3xl space-y-0">
        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">第1条（適用）</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            {`本規約は、${company.name}（以下、「当社」）が提供するサービスの利用条件を定めるものです。本サービスを利用するすべてのユーザーは、本規約に同意したものとみなします。`}
          </p>
        </section>

        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">第2条（禁止事項）</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm leading-7 text-ink-sub">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当社のサーバーまたはネットワークに負荷をかける行為</li>
            <li>当社のサービスの運営を妨害する行為</li>
            <li>他のユーザーに関する個人情報を収集する行為</li>
            <li>不正アクセス行為</li>
            <li>本サイトのコンテンツ（文章、画像、データを含む）を、生成AI・機械学習の学習、ファインチューニング、データセットの作成に利用する行為</li>
            <li>前号の目的で、クローラー・スクレイピングツール等により本サイトのコンテンツを自動的に収集する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>
        </section>

        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">第3条（著作権）</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            本サイトに掲載されている文章、画像、データその他のコンテンツの著作権は、当社または正当な権利者に帰属します。
          </p>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            当社は、本サイトのコンテンツについて、テキスト・データマイニング（TDM）および生成AI・機械学習の学習データとしての利用を許諾しません（権利を留保します）。この方針は{" "}
            <a href="/robots.txt" className="underline hover:text-accent">
              robots.txt
            </a>
            、各ページの meta タグ、TDM 権利留保の宣言（
            <a href="/.well-known/tdmrep.json" className="underline hover:text-accent">
              TDMRep
            </a>
            ）でも示しています。
          </p>
        </section>

        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">第4条（サービスの提供の停止等）</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            当社は、以下のいずれかに該当する場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm leading-7 text-ink-sub">
            <li>本サービスに係るコンピュータシステムの保守点検または更新を行う場合</li>
            <li>地震、落雷、火災、停電または天災などの不可抗力により本サービスの提供が困難となった場合</li>
            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>その他、当社が本サービスの提供が困難と判断した場合</li>
          </ul>
        </section>

        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">第5条（免責事項）</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
          </p>
        </section>

        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">第6条（規約の変更）</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            当社は、必要と判断した場合、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の規約は、当サイトに掲載された時点で効力を生じるものとします。
          </p>
        </section>

        <section className="border-t border-rule py-8">
          <h2 className="text-sm font-medium text-ink">第7条（お問い合わせ）</h2>
          <p className="mt-3 text-sm leading-7 text-ink-sub">
            本規約に関するお問い合わせは、以下までご連絡ください。
          </p>
          <p className="mt-3">
            <a
              href="mailto:contact@nebulab.jp"
              className="text-sm text-ink-sub hover:text-accent"
            >
              contact@nebulab.jp
            </a>
          </p>
        </section>

        <section className="border-t border-rule py-8">
          <p className="text-sm leading-7 text-ink-sub">
            改定日：2026年9月14日（AIの学習目的の利用の禁止を追加）
          </p>
        </section>
      </div>
    </main>
  );
}
