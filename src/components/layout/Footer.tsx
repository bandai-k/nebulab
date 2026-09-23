import Link from "next/link";
import { company } from "@/data/company";

/**
 * フッター(指示書 v2 §5.8)。
 * 左に社名と短い説明文、中央から右にサイトマップ、下段に法的リンク。
 *
 * 会社情報は data/company.ts の実データを使う。カンプに含まれる
 * 住所・電話番号・法人格(「成田リシティビル 6F」「0476-85-7830」
 * 「NEBULAB Inc.」)はすべて架空のため使用しない(§11)。
 * 正しくは Nebulab合同会社(LLC。Inc. ではない)。
 *
 * 未実装:
 *   - SNSアイコン … アカウントの URL がリポジトリのどこにも無い。
 *     実在しないものを置けないため、URL をもらってから追加する。
 *   - 特定商取引法に基づく表記 … 該当ページが存在しない。
 *     記載には住所の番地・電話番号など未確定の情報が要るため、
 *     事実を作らずリンクを出していない。
 *
 * カテゴリは §5.8 の5つ。ヘッダーから外れるページ(Showcase / News など)も、
 * いずれかのカテゴリの配下に入れて辿れるようにする。
 */
const sitemap: { heading: string; href: string; links: { href: string; label: string }[] }[] =
  [
    {
      heading: "ABOUT",
      href: "/about",
      links: [
        { href: "/about", label: "会社概要" },
        { href: "/about/mvv", label: "ミッション・ビジョン・バリュー" },
        { href: "/about#message", label: "代表メッセージ" },
        { href: "/news", label: "ニュース" },
      ],
    },
    {
      heading: "SERVICES",
      href: "/services",
      links: [
        { href: "/services#development", label: "受託開発" },
        { href: "/services#enablement", label: "内製化支援" },
        { href: "/services#products", label: "自社プロダクト" },
        { href: "/services#local", label: "地域のIT支援" },
        { href: "/hp-trial", label: "HP お試し公開プラン" },
      ],
    },
    {
      heading: "PRODUCTS",
      href: "/projects",
      links: [
        { href: "/projects", label: "すべてのプロダクト" },
        { href: "/apps/midorikko", label: "みどりっこ" },
        { href: "/apps/garage-techo", label: "ガレージ手帳" },
        { href: "/showcase", label: "制作事例" },
      ],
    },
    {
      heading: "PARTNERS",
      href: "/partners",
      links: [{ href: "/partners", label: "パートナー一覧" }],
    },
    {
      heading: "CONTACT",
      href: "/contact",
      links: [
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
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] lg:gap-16">
          {/* 社名と短い説明文 */}
          <div>
            <p className="font-display text-base tracking-[0.06em] text-ink">
              {company.name}
            </p>
            <p className="mt-1 text-[10px] tracking-[0.2em] text-ink-sub">
              {company.nameEn.toUpperCase()}
            </p>

            <p className="mt-6 max-w-xs text-xs leading-[1.9] text-ink-sub">
              {"成田を拠点に、受託開発・内製化支援・自社プロダクト開発を手がけています。自ら使うものをつくり、運用して分かったことをお客様に還元します。"}
            </p>

            <dl className="mt-8 space-y-2 text-xs leading-6 text-ink-sub">
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
                    className="transition-colors hover:text-accent"
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
                    className="text-[10px] tracking-[0.18em] text-ink-sub transition-colors hover:text-accent"
                  >
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* サイトマップ */}
          <nav className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {sitemap.map((g) => (
              <div key={g.heading}>
                <Link
                  href={g.href}
                  className="text-[10px] font-medium tracking-[0.22em] text-ink transition-colors hover:text-accent"
                >
                  {g.heading}
                </Link>
                <ul className="mt-5 space-y-3">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-xs leading-6 text-ink-sub transition-colors hover:text-accent"
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

        <div className="mt-16 flex flex-col gap-4 border-t border-rule pt-8 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[10px] tracking-[0.18em] text-ink-sub">
            &copy; 2026 {company.name}
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-ink-sub transition-colors hover:text-accent"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/terms"
              className="text-xs text-ink-sub transition-colors hover:text-accent"
            >
              利用規約
            </Link>
            <Link
              href="/tokushoho"
              className="text-xs text-ink-sub transition-colors hover:text-accent"
            >
              特定商取引法に基づく表示
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
