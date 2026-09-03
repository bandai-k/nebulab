import type { Metadata } from "next";
import { company } from "@/data/company";

const APP_NAME = "みどりっこ";
const APP_EMAIL = company.email;
const LAST_UPDATED = "最終更新日: 2026年8月23日";
const PAGE_PATH = "/apps/midorikko/privacy";
const DESCRIPTION =
  "iOSアプリ「みどりっこ」のプライバシーポリシー。本アプリは利用者の情報を収集せず、記録した内容や写真はすべて端末内に保存されます。";

export const metadata: Metadata = {
  title: `${APP_NAME} プライバシーポリシー`,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    url: PAGE_PATH,
    title: `${APP_NAME} プライバシーポリシー | ${company.name}`,
    description: DESCRIPTION,
  },
  twitter: {
    title: `${APP_NAME} プライバシーポリシー | ${company.name}`,
    description: DESCRIPTION,
  },
};

// 法務文書のため、本文は原文のまま掲載する（要約・言い換えを行わない）
const sectionClass = "border-t border-rule py-10";
const headingClass =
  "scroll-mt-24 text-lg font-medium tracking-wide text-ink md:text-xl";
const bodyClass =
  "mt-5 space-y-5 text-sm leading-[2.1] text-ink-sub md:text-base";
const linkClass =
  "break-all text-ink-sub underline underline-offset-4 transition-colors hover:text-accent";

export default function MidorikkoPrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 pb-24 pt-28 md:px-10 md:pt-32">
      {/* ── Page Header ── */}

      <h1
        id="privacy-policy"
        className="scroll-mt-24 font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl"
      >
        プライバシーポリシー
      </h1>

      <p className="mt-4 text-[10px] tracking-[0.3em] text-ink-sub">
        iOSアプリ「{APP_NAME}」／ {LAST_UPDATED}
      </p>

      {/* ── 結論（要約ではなく原文） ── */}
      <div className="panel  mt-12 p-6 md:p-10">
        <p className="text-sm leading-[2.1] text-ink md:text-base">
          みどりっこは、あなたの情報を収集しません。アカウント登録は不要で、記録した内容や写真はすべてお使いの端末の中に保存されます。開発者がそれらを見ることはできません。
        </p>
      </div>

      <div className="mt-12">
        <section id="no-collection" className={sectionClass}>
          <h2 className={headingClass}>1. 収集しない情報</h2>
          <div className={bodyClass}>
            <p>みどりっこは、以下のいずれの情報も収集・送信しません。</p>
            <ul className="list-inside list-disc space-y-1.5">
              <li>氏名、メールアドレス、電話番号などの個人情報</li>
              <li>登録した植物の情報、記録の内容、写真</li>
              <li>位置情報</li>
              <li>連絡先、カレンダー、その他の端末内データ</li>
              <li>アプリの利用状況や行動履歴（解析ツールを一切導入していません）</li>
              <li>広告識別子</li>
            </ul>
            <p>
              アカウント登録の仕組みそのものがないため、あなたが誰であるかを開発者が知る手段はありません。
            </p>
          </div>
        </section>

        <section id="storage" className={sectionClass}>
          <h2 className={headingClass}>2. データの保存場所</h2>
          <div className={bodyClass}>
            <p>
              登録したみどりっこの情報、日々の記録、写真は、すべてお使いの端末内に保存されます。開発者のサーバーに送信されることはなく、開発者がその内容を閲覧することはできません。
            </p>
          </div>
        </section>

        <section id="photos" className={sectionClass}>
          <h2 className={headingClass}>3. 写真の取り扱い</h2>
          <div className={bodyClass}>
            <p>
              記録に写真を追加すると、アプリが写真ライブラリへのアクセス許可を求めます。この許可は、あなたが選んだ写真を記録に保存するためだけに使用します。写真ライブラリ全体を読み取ったり、選ばれていない写真を扱ったりすることはありません。
            </p>
            <p>
              選ばれた写真は、アプリ内に保存する際に、位置情報などの撮影時メタデータを引き継がない形で保存されます。撮影場所はご自宅であることが多く、記録アプリが保持し続ける理由がないためです。
            </p>
          </div>
        </section>

        <section id="notifications" className={sectionClass}>
          <h2 className={headingClass}>4. 通知について</h2>
          <div className={bodyClass}>
            <p>
              記念日のお知らせを有効にすると、端末内で通知が設定されます。この通知はすべて端末内で完結しており、外部のサーバーを経由しません。通知の内容が開発者や第三者に送信されることはありません。
            </p>
          </div>
        </section>

        <section id="third-party" className={sectionClass}>
          <h2 className={headingClass}>5. 第三者への提供</h2>
          <div className={bodyClass}>
            <p>
              収集している情報がないため、第三者に提供する情報もありません。広告ネットワーク、解析サービス、その他のサードパーティSDKは一切導入していません。
            </p>
          </div>
        </section>

        <section id="children" className={sectionClass}>
          <h2 className={headingClass}>6. お子様のプライバシー</h2>
          <div className={bodyClass}>
            <p>
              みどりっこは特定の年齢層を対象としたアプリではありませんが、個人情報を収集しないため、年齢を問わず安心してご利用いただけます。
            </p>
          </div>
        </section>

        <section id="deletion" className={sectionClass}>
          <h2 className={headingClass}>7. データの削除</h2>
          <div className={bodyClass}>
            <p>
              アプリ内で記録やみどりっこを削除すると、そのデータは端末から削除されます。アプリ自体を削除した場合、端末内のデータはすべて削除されます。
            </p>
            <p>
              開発者側に保存されているデータは存在しないため、削除を依頼していただく必要はありません。
            </p>
          </div>
        </section>

        <section id="changes" className={sectionClass}>
          <h2 className={headingClass}>8. ポリシーの変更</h2>
          <div className={bodyClass}>
            <p>
              本ポリシーを変更する場合は、このページを更新します。重要な変更がある場合は、アプリのアップデート情報でもお知らせします。
            </p>
          </div>
        </section>

        <section id="contact" className={sectionClass}>
          <h2 className={headingClass}>9. お問い合わせ</h2>
          <div className={bodyClass}>
            <p>
              本ポリシーに関するご質問は、
              <a href={`mailto:${APP_EMAIL}`} className={linkClass}>
                {APP_EMAIL}
              </a>
              までご連絡ください。
            </p>
          </div>
        </section>
      </div>

      {/* ── 運営者情報 ── */}
      <div className="mt-4 border-t border-rule pt-10">
        <p className="text-[10px] tracking-[0.3em] uppercase text-ink-sub">
          Operator
        </p>
        <p className="mt-4 text-sm leading-7 text-ink md:text-base">
          {company.name}
        </p>
        <p className="mt-1 text-sm leading-7">
          <a href={`mailto:${APP_EMAIL}`} className={linkClass}>
            {APP_EMAIL}
          </a>
        </p>
      </div>
    </main>
  );
}
