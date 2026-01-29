import Link from "next/link";
import { BRAND } from "@/constants/brand";
import { SLOGAN } from "@/constants/mvv";

const footerSections = [
  {
    title: "サービス",
    links: [
      { href: "/#services", label: "事業内容" },
      { href: "/#projects", label: "取り組み" },
      { href: BRAND.nrtLoftUrl, label: "NRT-LOFT", external: true },
    ],
  },
  {
    title: "企業情報",
    links: [
      { href: "/about", label: "会社概要" },
      { href: "/news", label: "お知らせ" },
      { href: "/#contact", label: "お問い合わせ" },
    ],
  },
  {
    title: "その他",
    links: [
      { href: "/sitemap", label: "サイトマップ" },
      { href: "/privacy", label: "プライバシーポリシー" },
      { href: "/terms", label: "利用規約" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#ddc9a3] bg-[#fef3d9]">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          {/* ブランド情報 */}
          <div className="space-y-3 md:col-span-1">
            <div className="text-sm font-semibold tracking-[0.14em] text-[#3d2f24]">
              {BRAND.name}
            </div>
            <p className="text-sm leading-relaxed text-[#5c4d3c]">
              {SLOGAN}
            </p>
          </div>

          {/* リンクセクション */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-sm font-semibold text-[#3d2f24]">
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#5c4d3c] transition hover:text-[#3d2f24]"
                      {...(link.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      {link.label}
                      {link.external && " ↗"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* コピーライト */}
        <div className="mt-10 flex flex-col gap-3 border-t border-[#ddc9a3] pt-6 text-xs text-[#8b7355] md:flex-row md:items-center md:justify-between">
          <div>© {year} {BRAND.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a
              href={BRAND.emailMailto}
              className="hover:text-[#3d2f24]"
            >
              {BRAND.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
