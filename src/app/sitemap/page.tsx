import type { Metadata } from "next";
import Link from "next/link";
import { SITEMAP_SECTIONS } from "@/constants/navigation";

export const metadata: Metadata = {
  title: "サイトマップ - NEBULAB",
  description: "NEBULABのサイトマップです。",
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-[#fff8e7] py-20 text-[#3d2f24]">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-bold">サイトマップ</h1>
        <p className="mt-4 text-[#5c4d3c]">
          NEBULABの全ページへのリンク一覧です。
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {SITEMAP_SECTIONS.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-[#ddc9a3] bg-white/60 p-6"
            >
              <h2 className="text-lg font-bold text-[#3d2f24]">
                {section.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-[#5c4d3c] transition hover:text-[#b87333]"
                      {...(link.external && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      <span className="text-[#b87333]">→</span>
                      <span>{link.label}</span>
                      {link.external && (
                        <span className="text-xs text-[#8b7355]">↗</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#ddc9a3] bg-white/60 p-8">
          <h2 className="text-lg font-bold text-[#3d2f24]">お問い合わせ</h2>
          <p className="mt-4 text-sm text-[#5c4d3c]">
            サイトに関するご質問やご不明点がございましたら、お気軽にお問い合わせください。
          </p>
          <div className="mt-4">
            <a
              href="mailto:hello@nebulab.jp"
              className="text-[#b87333] hover:underline"
            >
              hello@nebulab.jp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
