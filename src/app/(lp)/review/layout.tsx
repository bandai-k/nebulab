import Link from "next/link";
import { BRAND } from "@/constants/brand";
import { company } from "@/data/company";

/**
 * /review（診断LP）専用の独立レイアウト。
 *
 * サイト共通の Header/Footer は SiteChrome が /review では出さないため、
 * ここでヘッダー(ロゴ＋「料金」＋「申し込む」だけ)とフッター(簡素)を持つ。
 * 広告から来た人を ABOUT / SERVICES などの他ページへ逃がさないための構成。
 */
export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="lp-scope min-h-screen bg-ground text-ink">
      <header className="sticky top-0 z-10 border-b border-rule bg-ground/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="/review" className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-[0.04em] text-ink md:text-lg">
              AIツール安全点検
            </span>
            <span className="text-[11px] tracking-[0.08em] text-ink-sub">
              by Nebulab 合同会社
            </span>
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
