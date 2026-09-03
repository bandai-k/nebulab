"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/constants/brand";
import { HEADER_NAV, type HeaderNavItem } from "@/constants/navigation";

/**
 * その項目が現在地かどうか。
 * 配下のページ(/about/mvv など)でも親の項目を現在地として扱う。
 */
function isCurrent(item: HeaderNavItem, pathname: string): boolean {
  const paths = [item.href, ...(item.match ?? [])];
  return paths.some((base) =>
    base === "/" ? pathname === "/" : pathname === base || pathname.startsWith(`${base}/`),
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] border-b border-rule bg-ground/95 md:backdrop-blur-md">
        <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-5 py-4 md:px-10 md:py-5">
          <Link
            href="/"
            className="justify-self-start transition-opacity hover:opacity-80"
            aria-label={BRAND.name}
          >
            <Image
              src="/brand/wordmark.webp"
              alt={BRAND.name}
              width={1942}
              height={663}
              priority
              className="h-12 w-auto md:h-14"
            />
          </Link>

          {/* Desktop nav (centered) */}
          <nav className="col-start-2 hidden items-center justify-self-center gap-8 md:flex">
            {HEADER_NAV.map((item) => {
              const current = isCurrent(item, pathname);
              return (
              <div
                key={item.key}
                className="group relative inline-flex items-center"
              >
                {/*
                  現在地とホバーは同じ表現(アクセント色＋下線)にする。§3.2 の
                  「アクティブ状態はアクセント1色」に従う。下線は border で
                  引き、既定を transparent にしておくことで、状態が変わっても
                  文字が動かないようにしている。
                */}
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`inline-block border-b-2 pb-1.5 text-[0.6875rem] font-medium uppercase leading-none tracking-[0.18em] transition-colors ${
                    current
                      ? "border-accent text-accent"
                      : "border-transparent text-ink-sub group-hover:border-accent group-hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                    <ul className="min-w-[260px] border border-rule bg-surface py-2 shadow-[0_8px_24px_rgba(28,26,23,0.10)]">
                      {item.children.map((child) => (
                        <li
                          key={child.key}
                          className="border-b border-rule last:border-b-0"
                        >
                          <Link
                            href={child.href}
                            className="block px-5 py-3 text-xs font-medium tracking-[0.08em] text-ink-sub transition-colors hover:bg-accent/5 hover:text-ink"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              );
            })}
          </nav>

          {/* 問い合わせボタン(右)。§5.1 のとおりアクセントの塗り＋メールアイコン。 */}
          <Link
            href="/contact"
            className="btn btn-primary btn-sm col-start-3 hidden justify-self-end md:inline-flex"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <rect x="1.5" y="3.5" width="13" height="9" rx="1" />
              <path d="M1.8 4.2 8 8.8l6.2-4.6" />
            </svg>
            お問い合わせ
          </Link>

          {/* Mobile hamburger (right) */}
          <button
            type="button"
            className="col-start-3 flex h-10 w-10 flex-col items-center justify-center gap-1.5 justify-self-end md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                menuOpen ? "translate-y-[4.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                menuOpen ? "-translate-y-[4.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-ground pb-12 pt-24 md:hidden">
          <nav className="flex flex-col items-center gap-8 px-5 py-6">
            {HEADER_NAV.map((item) => {
              const current = isCurrent(item, pathname);
              return (
              <div key={item.key} className="text-center">
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`inline-block border-b-2 pb-1.5 text-sm font-medium uppercase tracking-[0.22em] transition-colors ${
                    current
                      ? "border-accent text-accent"
                      : "border-transparent text-ink hover:border-accent hover:text-accent"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-4 space-y-3">
                    {item.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          href={child.href}
                          className="text-[11px] tracking-[0.12em] text-ink-sub transition-colors hover:text-accent"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
