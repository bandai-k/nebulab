import type { Metadata } from "next";
import StatusBar from "@/components/StatusBar";
import { company } from "@/data/company";

const APP_NAME = "整備手帳";
const APP_EMAIL = company.email;
const LAST_UPDATED = "2026年8月27日";
const PAGE_PATH = "/apps/seibi-techo/privacy";
const DESCRIPTION =
  "iOSアプリ「整備手帳」のプライバシーポリシー。本アプリは利用者の情報を収集せず、記録した内容や写真はすべて端末内に保存されます。";

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
const sectionClass = "border-t border-cyber-border-dim py-10";
const headingClass =
  "scroll-mt-24 text-lg font-medium tracking-wide text-cyber-text md:text-xl";
const bodyClass =
  "mt-5 space-y-5 text-sm leading-[2.1] text-cyber-text-secondary md:text-base";
const linkClass =
  "break-all text-cyber-accent underline underline-offset-4 transition-colors hover:text-white";

export default function SeibiTechoPrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24 md:px-10">
      {/* ── Page Header ── */}
      <StatusBar
        items={[{ label: "DOC:PRIVACY — APP:SEIBI-TECHO", pulse: true }]}
        className="mb-10"
      />

      <h1
        id="privacy-policy"
        className="scroll-mt-24 font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl"
      >
        プライバシーポリシー
      </h1>

      <p className="mt-4 font-mono text-[10px] tracking-[0.3em] text-cyber-text-muted">
        iOSアプリ「{APP_NAME}」／ 最終更新 {LAST_UPDATED}
      </p>

      {/* ── 結論（要約ではなく原文） ── */}
      <div className="glass-card corner-accent mt-12 p-6 md:p-10">
        <p className="text-sm leading-[2.1] text-cyber-text md:text-base">
          このアプリは、利用者の情報を収集しません。記録した内容や写真はすべて端末の中に保存され、開発者が閲覧することはできません。外部のサーバーへ送信する仕組みも、利用状況を計測する仕組みも組み込んでいません。
        </p>
      </div>

      <div className="mt-12">
        <section id="stored-data" className={sectionClass}>
          <h2 className={headingClass}>1. 保存される情報と保存場所</h2>
          <div className={bodyClass}>
            <p>アプリの利用にあたって、次の情報が端末内に保存されます。</p>
            <ul className="list-inside list-disc space-y-1.5">
              <li>登録した車種、走行距離</li>
              <li>点検および整備の記録（日付、距離、内容、費用、メモ）</li>
              <li>不調の記録とその経過</li>
              <li>走行の記録（日付、距離、天気、本文）</li>
              <li>登録した写真</li>
              <li>表示テーマなどのアプリの設定</li>
            </ul>
            <p>
              これらはすべて端末内のアプリ専用領域に保存されます。開発者はこれらにアクセスできません。端末のバックアップ設定によっては、利用者自身のiCloudまたはコンピュータ上のバックアップに含まれる場合があります。その取り扱いはAppleおよび利用者の設定に従います。
            </p>
          </div>
        </section>

        <section id="photos" className={sectionClass}>
          <h2 className={headingClass}>2. 写真へのアクセス</h2>
          <div className={bodyClass}>
            <p>
              写真を登録する操作を行ったときにのみ、iOSの写真選択画面が表示されます。アプリが受け取るのは利用者が選んだ写真だけで、写真ライブラリ全体を読み取ることはありません。選ばれた写真は端末内にコピーされ、外部へ送信されることはありません。
            </p>
          </div>
        </section>

        <section id="location" className={sectionClass}>
          <h2 className={headingClass}>3. 位置情報</h2>
          <div className={bodyClass}>
            <p>取得しません。位置情報の利用許可を求めることもありません。</p>
          </div>
        </section>

        <section id="analytics" className={sectionClass}>
          <h2 className={headingClass}>4. 利用状況の計測</h2>
          <div className={bodyClass}>
            <p>
              行っていません。解析ツール、クラッシュレポート収集ツール、広告に関する仕組みは一切組み込んでいません。利用者を識別する番号を作成・保存することもありません。
            </p>
          </div>
        </section>

        <section id="in-app-purchase" className={sectionClass}>
          <h2 className={headingClass}>5. アプリ内課金</h2>
          <div className={bodyClass}>
            <p>
              開発者への任意の支援を目的とした課金機能を用意しています。機能の制限はなく、課金しなくてもアプリのすべての機能を利用できます。
            </p>
            <p>
              支払いの処理はすべてApple社が行います。開発者が受け取るのは購入が成立したという事実のみで、氏名、住所、クレジットカード情報などを受け取ることはありません。Apple社における個人情報の取り扱いについては、Appleのプライバシーポリシー（
              <a
                href="https://www.apple.com/legal/privacy/ja/"
                target="_blank"
                rel="noreferrer noopener"
                className={linkClass}
              >
                https://www.apple.com/legal/privacy/ja/
              </a>
              ）をご確認ください。
            </p>
          </div>
        </section>

        <section id="external-links" className={sectionClass}>
          <h2 className={headingClass}>6. 外部サイトへのリンク</h2>
          <div className={bodyClass}>
            <p>
              消耗品の記録画面に、Amazon.co.jpの検索結果へのリンクを表示しています。これはAmazonアソシエイト・プログラムによるものであり、リンクを経由して商品が購入された場合、開発者に紹介料が支払われます。この旨はアプリ内のリンク付近にも明記しています。
            </p>
            <p>
              リンクを開くと端末の標準ブラウザまたはAmazonのアプリに移動します。移動先での情報の取り扱いは、Amazon.co.jpのプライバシー規約に従います。リンクを経由したかどうかを開発者が個人単位で把握することはできません。
            </p>
            <p>このリンクの表示は、アプリの設定でオフにできます。</p>
          </div>
        </section>

        <section id="third-party" className={sectionClass}>
          <h2 className={headingClass}>7. 第三者への提供</h2>
          <div className={bodyClass}>
            <p>
              収集している情報がないため、第三者へ提供する情報はありません。
            </p>
          </div>
        </section>

        <section id="deletion" className={sectionClass}>
          <h2 className={headingClass}>8. 情報の削除</h2>
          <div className={bodyClass}>
            <p>
              記録は端末内にのみ保存されているため、アプリを削除すると同時にすべて消去されます。個別の記録は、アプリ内の各画面から削除できます。開発者に削除を依頼する必要はありません。
            </p>
            <p>
              記録を残しておきたい場合は、アプリの設定にあるバックアップ機能でテキストとして書き出してください。
            </p>
          </div>
        </section>

        <section id="children" className={sectionClass}>
          <h2 className={headingClass}>9. 子どもの利用について</h2>
          <div className={bodyClass}>
            <p>
              年齢による制限は設けていませんが、利用者の情報を収集しないため、子どもの個人情報を取得することもありません。
            </p>
          </div>
        </section>

        <section id="changes" className={sectionClass}>
          <h2 className={headingClass}>10. このポリシーの変更</h2>
          <div className={bodyClass}>
            <p>
              内容を変更する場合は、このページを更新し、冒頭の最終更新日を改めます。情報の取り扱いに実質的な変更が生じる場合は、アプリの更新情報にも記載します。
            </p>
          </div>
        </section>

        <section id="contact" className={sectionClass}>
          <h2 className={headingClass}>11. 問い合わせ</h2>
          <div className={bodyClass}>
            <p>
              このポリシーおよびアプリに関するお問い合わせは、次の宛先までお願いします。
            </p>
            <p>
              <a href={`mailto:${APP_EMAIL}`} className={linkClass}>
                {APP_EMAIL}
              </a>
            </p>
          </div>
        </section>
      </div>

      {/* ── 運営者情報 ── */}
      <div className="mt-4 border-t border-cyber-border-dim pt-10">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyber-text-muted">
          Operator
        </p>
        <p className="mt-4 text-sm leading-7 text-cyber-text md:text-base">
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
