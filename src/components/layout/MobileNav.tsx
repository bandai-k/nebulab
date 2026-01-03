"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = { href: string; label: string; external?: boolean };

export default function MobileNav({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false);       // mounted/unmounted
  const [visible, setVisible] = useState(false); // animation state

  // 開いてる間はスクロール停止（これは setState しないのでOK）
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
    // 次フレームで visible を true にして transition を発火
    requestAnimationFrame(() => setVisible(true));
  };

  const handleClose = () => {
    // まずアニメーションで閉じる
    setVisible(false);
    // transition 終了後に unmount
    window.setTimeout(() => setOpen(false), 300);
  };

  const toggle = () => {
    if (open) handleClose();
    else handleOpen();
  };

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#ddc9a3] bg-white text-[#3d2f24] transition-colors hover:bg-[#fff8e7]"
        aria-label="メニューを開閉"
        aria-expanded={open}
      >
        <span
          className={`absolute h-[2px] w-5 bg-current transition-all duration-300 ${
            open ? "rotate-45 translate-y-0" : "-translate-y-2"
          }`}
        />
        <span
          className={`absolute h-[2px] w-5 bg-current transition-all duration-300 ${
            open ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        />
        <span
          className={`absolute h-[2px] w-5 bg-current transition-all duration-300 ${
            open ? "-rotate-45 translate-y-0" : "translate-y-2"
          }`}
        />
      </button>

      {open && (
        <div className="fixed inset-0 z-[60]">
          {/* 背景 */}
          <button
            className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleClose}
            aria-label="メニューを閉じる"
          />

          {/* パネル */}
          <div
            className={`absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-[#ddc9a3] bg-[#fff8e7] shadow-xl transition-transform duration-300 ease-out ${
              visible ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex h-full flex-col p-5">
              {/* ヘッダー */}
              <div className="flex items-center justify-between border-b border-[#ddc9a3] pb-4">
                <div className="text-sm font-semibold tracking-[0.16em] text-[#3d2f24]">
                  NEBULAB
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#ddc9a3] bg-white text-[#3d2f24] transition-colors hover:bg-[#fff8e7]"
                  aria-label="閉じる"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* ナビ */}
              <div className="mt-6 flex-1 space-y-2">
                {(nav ?? []).map((item, index) =>
                  item.external ? (
                    <a
                      key={`${item.href}-${index}`}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleClose}
                      className="flex items-center justify-between rounded-xl border border-[#ddc9a3] bg-white px-4 py-3.5 text-sm font-medium text-[#3d2f24] transition-all hover:bg-[#fff8e7] hover:border-[#b87333] active:scale-[0.98]"
                      style={{
                        transitionDelay: visible ? `${index * 35}ms` : "0ms",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(6px)",
                      }}
                    >
                      <span>{item.label}</span>
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <Link
                      key={`${item.href}-${index}`}
                      href={item.href}
                      onClick={handleClose}
                      className="block rounded-xl border border-[#ddc9a3] bg-white px-4 py-3.5 text-sm font-medium text-[#3d2f24] transition-all hover:bg-[#fff8e7] hover:border-[#b87333] active:scale-[0.98]"
                      style={{
                        transitionDelay: visible ? `${index * 35}ms` : "0ms",
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(6px)",
                      }}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>

              {/* フッター */}
              <div className="mt-auto border-t border-[#ddc9a3] pt-6">
                <Link
                  href="/contact"
                  onClick={handleClose}
                  className="inline-flex h-11 w-full items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-4 text-sm font-medium text-white transition-all hover:bg-[#a0622b] active:scale-[0.98]"
                >
                  お問い合わせ
                </Link>
                <p className="mt-3 text-center text-xs text-[#8b7355]">思考は、まだ途中だ。</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
