"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import MobileNav from "@/components/layout/MobileNav";
import { BRAND } from "@/constants/brand";
import { HEADER_NAV } from "@/constants/navigation";

const CONTACT_HREF = "/contact";
const CLOSE_DELAY_MS = 140;
const HOVER_CLOSE_DELAY_MS = 160;

export default function Header() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  // モバイルのみ：スクロールが最上部のときだけヘッダーを表示
  const [showHeaderOnMobile, setShowHeaderOnMobile] = useState(true);

  // “渡り”用：閉じるのを少し待つ
  const closeTimerRef = useRef<number | null>(null);

  const scheduleClose = (ms = CLOSE_DELAY_MS) => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => setOpenKey(null), ms);
  };

  const cancelClose = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };

  // モバイル用（フラットに展開：/contact は含めない）
  const mobileNav = useMemo(() => {
    const flat: Array<{ href: string; label: string; external?: boolean }> = [];

    for (const item of HEADER_NAV) {
      if (item.submenu?.length) {
        flat.push({ href: item.href, label: item.label });
        for (const sub of item.submenu) {
          flat.push({ href: sub.href, label: `- ${sub.label}` });
        }
      } else {
        flat.push({ href: item.href, label: item.label, external: item.external });
      }
    }

    return flat;
  }, []);

  // Esc で閉じる（ドロップダウン）
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // タイマー後始末
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  // モバイル時だけ：最上部(0)のときだけ表示。それ以外は隠す。
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)"); // md以上

    const update = () => {
      if (mq.matches) {
        // PCは常に表示
        setShowHeaderOnMobile(true);
        return;
      }
      // モバイルは最上部のみ表示
      setShowHeaderOnMobile(window.scrollY === 0);
    };

    window.addEventListener("scroll", update, { passive: true });
    mq.addEventListener?.("change", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      mq.removeEventListener?.("change", update);
    };
  }, []);

  return (
    <div
      className={[
        "sticky top-0 z-50 transition-transform duration-300",
        showHeaderOnMobile ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
      data-nav-root
    >
      <header className="border-b border-[#ddc9a3] bg-[#fff8e7]/90 backdrop-blur">
        {/* 上段：お問い合わせ（モバイルでは表示しない） */}
        <div className="hidden border-b border-[#ddc9a3] md:block">
          <div className="mx-auto flex max-w-6xl items-center justify-end px-5 py-2">
            <Link
              href={CONTACT_HREF}
              className="inline-flex h-8 items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-4 text-xs font-medium text-white transition hover:bg-[#a0622b]"
            >
              お問い合わせ
            </Link>
          </div>
        </div>

        {/* 下段：左＝ブランド / 右＝メニュー */}
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          {/* ブランド */}
          <Link href="/" className="group inline-flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo.svg"
              alt="NEBULAB"
              width={160}
              height={40}
              priority
              className="h-8 w-auto sm:h-9"
            />

            {/* 文字：モバイルでも会社名は表示 */}
            <span className="flex flex-col leading-tight">
              <span className="text-base font-semibold tracking-[0.16em] text-[#3d2f24] sm:text-xl">
                {BRAND.name}
              </span>
              <span className="hidden text-xs text-[#8b7355] sm:block">
                {BRAND.tagline}
              </span>
            </span>
          </Link>

          {/* PCナビ（ドロップダウン） */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Global navigation">
            {HEADER_NAV.map((item) => {
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
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
                  onMouseLeave={() => scheduleClose(HOVER_CLOSE_DELAY_MS)}
                >
                  {/* 親リンク */}
                  <Link
                    href={item.href}
                    onFocus={() => {
                      cancelClose();
                      if (hasSub) setOpenKey(item.key);
                    }}
                    onBlur={() => scheduleClose(CLOSE_DELAY_MS)}
                    className={[
                      "inline-flex items-center gap-1 text-sm transition",
                      isOpen
                        ? "text-[#3d2f24] underline decoration-[#3d2f24] underline-offset-4"
                        : "text-[#5c4d3c] hover:text-[#3d2f24]",
                    ].join(" ")}
                    aria-haspopup={hasSub ? "menu" : undefined}
                    aria-expanded={hasSub ? isOpen : undefined}
                  >
                    {item.label}
                    {hasSub && (
                      <svg
                        className={["h-4 w-4 transition-transform", isOpen ? "rotate-180" : "rotate-0"].join(" ")}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* ドロップダウン */}
                  {hasSub && (
                    <div
                      className={[
                        "absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2",
                        "rounded-xl border border-[#ddc9a3] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]",
                        "transition duration-200 ease-out",
                        isOpen
                          ? "pointer-events-auto opacity-100 translate-y-0"
                          : "pointer-events-none opacity-0 -translate-y-1",
                      ].join(" ")}
                      role="menu"
                      aria-label={`${item.label} submenu`}
                      onMouseEnter={cancelClose}
                      onMouseLeave={() => scheduleClose(CLOSE_DELAY_MS)}
                    >
                      <div className="p-2">
                        {item.submenu!.map((sub) => (
                          <Link
                            key={`${item.key}-${sub.href}`}
                            href={sub.href}
                            role="menuitem"
                            className={[
                              "flex items-center justify-between rounded-lg px-3 py-2",
                              "text-sm text-[#3d2f24] transition",
                              "hover:bg-[#fff8e7] hover:text-[#b87333]",
                              "focus:outline-none focus:ring-2 focus:ring-[#b87333]/30",
                            ].join(" ")}
                            onClick={() => setOpenKey(null)}
                          >
                            <span>{sub.label}</span>
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
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
    </div>
  );
}
