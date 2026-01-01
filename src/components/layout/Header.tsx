"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import MobileNav from "@/components/layout/MobileNav";

type SubItem = { href: string; label: string };
type NavItem = {
  key: string;
  href: string;
  label: string;
  external?: boolean;
  submenu?: SubItem[];
};

const aboutSubmenu: SubItem[] = [
  { href: "/about", label: "会社概要" },
  { href: "/history", label: "歩み" },
  { href: "/philosophy", label: "思想" },
];

const servicesSubmenu: SubItem[] = [
  { href: "/#services", label: "提供サービス（概要）" },
  { href: "/services", label: "事業内容ページ" },
  { href: "/#projects", label: "今やっていること" },
];

const projectsSubmenu: SubItem[] = [
  { href: "/projects", label: "取り組み一覧" },
  { href: "/experiments", label: "実験ログ" },
];

const newsSubmenu: SubItem[] = [{ href: "/news", label: "お知らせ一覧" }];

const NAV: NavItem[] = [
  { key: "about", href: "/about", label: "About", submenu: aboutSubmenu },
  { key: "services", href: "/services", label: "Services", submenu: servicesSubmenu },
  { key: "projects", href: "/projects", label: "Projects", submenu: projectsSubmenu },
  { key: "news", href: "/news", label: "News", submenu: newsSubmenu },
  { key: "nrt-loft", href: "https://nrt-loft.jp", label: "NRT-LOFT", external: true },
];

export default function Header() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  // “渡り”用：閉じるのを少し待つ
  const closeTimerRef = useRef<number | null>(null);
  const scheduleClose = (ms = 140) => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setOpenKey(null), ms);
  };
  const cancelClose = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };

  const openItem = useMemo(
    () => NAV.find((n) => n.key === openKey && n.submenu?.length),
    [openKey]
  );

  // モバイル用（フラットに展開）
  const mobileNav = useMemo(() => {
    const flat: Array<{ href: string; label: string; external?: boolean }> = [
      { href: "/contact", label: "お問い合わせ" },
    ];
    for (const item of NAV) {
      if (item.submenu?.length) {
        flat.push({ href: item.href, label: item.label });
        for (const sub of item.submenu) flat.push({ href: sub.href, label: `- ${sub.label}` });
      } else {
        flat.push({ href: item.href, label: item.label, external: item.external });
      }
    }
    return flat;
  }, []);

  // Esc で閉じる
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div
      className="sticky top-0 z-50"
      data-submenu-root
      onMouseEnter={cancelClose}
      onMouseLeave={() => scheduleClose(160)}
    >
      <header className="border-b border-[#ddc9a3] bg-[#fff8e7]/90 backdrop-blur">
        {/* 上段：お問い合わせ */}
        <div className="border-b border-[#ddc9a3]">
          <div className="mx-auto flex max-w-6xl items-center justify-end px-5 py-2">
            <Link
              href="/contact"
              className="inline-flex h-8 items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-4 text-xs font-medium text-white transition hover:bg-[#a0622b]"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* 下段：左＝ブランド / 右＝メニュー */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          {/* ブランド */}
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#ddc9a3] bg-white text-sm font-semibold tracking-tight text-[#3d2f24]">
              N
            </span>

            <span className="flex flex-col leading-tight">
              <span className="text-xl font-semibold tracking-[0.16em] text-[#3d2f24]">
                NEBULAB
              </span>
              <span className="text-xs text-[#8b7355]">Product &amp; Place Lab</span>
            </span>
          </Link>

          {/* PCナビ */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Global navigation">
            {NAV.map((item) => {
              const hasSub = !!item.submenu?.length;
              const isOpen = openKey === item.key && hasSub;

              if (item.external) {
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[#5c4d3c] transition hover:text-[#3d2f24]"
                  >
                    {item.label}
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                );
              }

              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    if (hasSub) setOpenKey(item.key);
                  }}
                >
                  <Link
                    href={item.href}
                    onFocus={() => {
                      cancelClose();
                      if (hasSub) setOpenKey(item.key);
                    }}
                    className={[
                      "text-sm transition",
                      isOpen
                        ? "text-[#3d2f24] underline decoration-[#3d2f24] underline-offset-4"
                        : "text-[#5c4d3c] hover:text-[#3d2f24]",
                    ].join(" ")}
                    aria-haspopup={hasSub ? "menu" : undefined}
                    aria-expanded={hasSub ? isOpen : undefined}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* モバイル */}
          <div className="md:hidden">
            <MobileNav nav={mobileNav} />
          </div>
        </div>
      </header>

      {/* submenu（PC）：max-heightで滑らかに */}
      <div
        className={[
          "hidden md:block border-b border-[#ddc9a3] bg-white",
          "transition-[max-height,opacity,transform] duration-300 ease-out",
          openItem ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
        ].join(" ")}
        style={{
          maxHeight: openItem ? 140 : 0, // ここが “ぬるっ” と効く
          overflow: "hidden",
        }}
        onMouseEnter={cancelClose}
        onMouseLeave={() => scheduleClose(140)}
      >
        {openItem && (
          <div className="mx-auto max-w-6xl px-5" data-submenu={openItem.key}>
            <div className="flex items-center">
              {/* 左ラベル */}
              <div className="mr-4 flex items-center gap-2 py-5 text-sm text-[#8b7355]">
                <span className="font-medium text-[#3d2f24]">{openItem.label}</span>
                <span aria-hidden="true">→</span>
              </div>

              {/* 右：submenu */}
              <div className="flex flex-1 items-stretch overflow-x-auto">
                {openItem.submenu!.map((subItem, index) => (
                  <div key={`${openItem.key}-${subItem.href}-${index}`} className="flex items-center">
                    {index > 0 && <span className="h-9 w-px bg-[#ddc9a3]" aria-hidden="true" />}
                    <Link
                      href={subItem.href}
                      className="flex items-center gap-1 px-5 py-6 text-sm text-[#3d2f24] transition hover:text-[#b87333]"
                      onClick={() => setOpenKey(null)}
                    >
                      {subItem.label}
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
