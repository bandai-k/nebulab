import Link from "next/link";
import LineArt from "@/components/decor/LineArt";
import { company } from "@/data/company";

/**
 * フッター(指示書 §5.8)。会社情報、ナビゲーション、連絡先。
 * 下部に成田の街並みの線画を横長に薄く敷く。
 *
 * 会社情報は data/company.ts の実データを使う。デザイン案に含まれる
 * 住所・電話番号・法人格(「成田リシティビル 6F」「0476-85-7830」
 * 「NEBULAB Inc.」)はすべて架空のため使用しない(§11)。
 *
 * ヘッダーのナビは §5.1 で5項目に絞るため、そこから外れるページは
 * フッター側で辿れるようにしておく。
 */
const navGroups: { heading: string; links: { href: string; label: string }[] }[] =
  [
    {
      heading: "COMPANY",
      links: [
        { href: "/about", label: "会社概要" },
        { href: "/about/mvv", label: "ミッション・ビジョン・バリュー" },
        { href: "/services", label: "事業内容" },
        { href: "/partners", label: "パートナー" },
      ],
    },
    {
      heading: "WORK",
      links: [
        { href: "/projects", label: "プロジェクト" },
        { href: "/apps", label: "アプリ" },
        { href: "/showcase", label: "制作事例" },
        { href: "/hp-trial", label: "HP お試し公開プラン" },
      ],
    },
    {
      heading: "MORE",
      links: [
        { href: "/news", label: "ニュース" },
        { href: "/lab", label: "Lab" },
        { href: "/contact", label: "お問い合わせ" },
        { href: "/sitemap.xml", label: "サイトマップ" },
      ],
    },
  ];

const externalSites = [
  { href: "https://www.nrt-loft.jp", label: "NRT LOFT" },
  { href: "https://www.narita-guide.com", label: "narita-guide.com" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cyber-border-dim">
      {/* 成田の街並みを横長に薄く */}
      <LineArt
        name="townscape"
        fit="cover"
        sizes="100vw"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-16">
          {/* 会社情報 */}
          <div>
            <p className="font-display text-base tracking-[0.08em] text-cyber-text">
              {company.name}
            </p>
            <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-cyber-text-muted">
              {company.nameEn.toUpperCase()}
            </p>

            <dl className="mt-8 space-y-3 text-xs leading-6 text-cyber-text-secondary">
              <div>
                <dt className="sr-only">所在地</dt>
                <dd>{company.address.full}</dd>
              </div>
              <div>
                <dt className="sr-only">代表社員</dt>
                <dd>代表社員　{company.ceo}</dd>
              </div>
              <div>
                <dt className="sr-only">メール</dt>
                <dd>
                  <a
                    href={`mailto:${company.email}`}
                    className="font-mono transition-colors hover:text-cyber-text"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
            </dl>

            <ul className="mt-8 flex flex-wrap gap-5">
              {externalSites.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-mono text-[10px] tracking-[0.2em] text-cyber-text-muted transition-colors hover:text-cyber-text-secondary"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ナビゲーション */}
          <nav className="grid gap-10 sm:grid-cols-3">
            {navGroups.map((g) => (
              <div key={g.heading}>
                <p className="font-mono text-[9px] tracking-[0.3em] text-cyber-text-muted">
                  {g.heading}
                </p>
                <ul className="mt-5 space-y-3">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-xs leading-6 text-cyber-text-secondary transition-colors hover:text-cyber-text"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cyber-border-dim pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] text-cyber-text-muted">
            &copy; 2026 {company.name}
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-cyber-text-muted transition-colors hover:text-cyber-text-secondary"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-xs text-cyber-text-muted transition-colors hover:text-cyber-text-secondary"
            >
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
