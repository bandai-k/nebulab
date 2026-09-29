import Link from "next/link";
import { BRAND } from "@/constants/brand";
import { company } from "@/data/company";

/**
 * /review（診断LP）専用の独立レイアウト。
 *
 * サイト共通の Header/Footer は SiteChrome が /review では出さないため、
 * ここでヘッダー(ロゴ＋「料金」＋「申し込む」だけ)とフッター(簡素)を持つ。
 * 広告から来た人を ABOUT / SERVICES などの他ページへ逃がさないための構成。
 *
 * フォント(karte.md 7章・8.1): BIZ UDPGothic(本文)・Zen Kaku Gothic New(見出し)。
 * `next/font/google` は使わず、Google Fonts の css2 API を <link> で読み込む。
 * 理由: next/font/google の自動サブセットは "japanese" サブセットを持たない
 * 和文フォントでは latin 系サブセットしか取得できず、日本語グリフが欠落する
 * (font-data.json 実測で確認)。css2 API はスクリプトごとの unicode-range を
 * 複数 @font-face で返すため、ブラウザが日本語グリフを正しく取得できる。
 * globals.css 先頭の共通 @import は全ページが読み込むため、/review だけで
 * 使うこのフォントはそこに足さず、この layout の <link> でこのルートだけに
 * 限定する(他ページの読み込みを増やさない)。
 */
export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lp-scope min-h-screen bg-ground text-ink">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=BIZ+UDPGothic:wght@400;700&family=Zen+Kaku+Gothic+New:wght@900&display=swap"
      />
      <header className="sticky top-0 z-10 border-b border-rule bg-ground/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/review"
            className="text-base font-bold tracking-[0.04em] text-ink md:text-lg"
          >
            ツールカルテ
          </Link>
          <nav className="flex items-center gap-4 md:gap-6">
            <a
              href="#pricing"
              className="text-sm font-medium text-ink-sub transition-colors hover:text-accent"
            >
              料金
            </a>
            <a
              href="#form"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              申し込む
            </a>
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-rule bg-surface">
        <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-ink-sub md:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-ink">{company.name}</p>
              <a href={BRAND.emailMailto} className="mt-1 inline-block hover:text-accent">
                {BRAND.email}
              </a>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/privacy" className="hover:text-accent">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="hover:text-accent">
                利用規約
              </Link>
              <Link href="/tokushoho" className="hover:text-accent">
                特定商取引法に基づく表示
              </Link>
            </nav>
          </div>
          <p className="mt-6 text-xs text-ink-sub/80">&copy; 2026 {company.name}</p>
        </div>
      </footer>
    </div>
  );
}
