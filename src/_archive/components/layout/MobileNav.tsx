"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type NavItem = { href: string; label: string; external?: boolean };

type Group = {
  key: string;
  label: string;
  href?: string;
  external?: boolean;
  children: NavItem[];
};

const CONTACT_HREF = "/contact";
const CLOSE_DURATION_MS = 300;

const isChildLabel = (label: string) => label.trimStart().startsWith("-");
const normalizeChildLabel = (label: string) => label.trimStart().replace(/^-\s*/, "");

/** フラット配列（親/子）を、モバイル用の「アコーディオン構造」に変換する（externalは末尾へ） */
const buildMobileNavStructure = (nav: NavItem[]) => {
  const groups: Group[] = [];
  const topLinks: NavItem[] = [];
  const externalLinks: NavItem[] = [];

  let current: Group | null = null;

  for (const item of nav) {
    // お問い合わせはフッター固定で出す
    if (item.href === CONTACT_HREF) continue;

    if (!isChildLabel(item.label)) {
      current = {
        key: item.href,
        label: item.label,
        href: item.href,
        external: item.external,
        children: [],
      };
      groups.push(current);
      continue;
    }

    const child: NavItem = { ...item, label: normalizeChildLabel(item.label) };
    if (!current) {
      // 先頭が子だった等の例外ケース
      if (child.external) externalLinks.push(child);
      else topLinks.push(child);
    } else {
      current.children.push(child);
    }
  }

  // 子がない親は単独リンクに回す（externalはexternalLinksへ）
  const accordionGroups: Group[] = [];
  for (const g of groups) {
    if (g.children.length === 0) {
      const link: NavItem = { href: g.href ?? "#", label: g.label, external: g.external };
      if (link.external) externalLinks.push(link);
      else topLinks.push(link);
    } else {
      accordionGroups.push(g);
    }
  }

  return { groups: accordionGroups, topLinks, externalLinks };
};

const NavLink = ({
  item,
  onClick,
  className,
}: {
  item: NavItem;
  onClick: () => void;
  className: string;
}) => {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
      >
        <span>{item.label}</span>
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
    <Link href={item.href} onClick={onClick} className={className}>
      {item.label}
    </Link>
  );
};

export default function MobileNav({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [expandedKey, setExpandedKey] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  // 開いてる間はスクロール停止
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // unmount時にタイマー解除
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  const openMenu = () => {
    setOpen(true);
    requestAnimationFrame(() => setVisible(true));
  };

  const closeMenu = () => {
    setVisible(false);
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);

    closeTimerRef.current = window.setTimeout(() => {
      setOpen(false);
      setExpandedKey(null);
    }, CLOSE_DURATION_MS);
  };

  const toggleMenu = () => {
    if (open) closeMenu();
    else openMenu();
  };

  const { groups, topLinks, externalLinks } = useMemo(() => {
    return buildMobileNavStructure(nav ?? []);
  }, [nav]);

  const hamburgerLineBase = "absolute h-[2px] w-5 bg-current transition-all duration-300";
  const panelBase =
    "absolute right-0 top-0 h-[100dvh] w-[86%] max-w-sm border-l border-[#ddc9a3] bg-[#fff8e7] shadow-xl transition-transform duration-300 ease-out";
  const topLinkClass =
    "flex items-center justify-between rounded-xl border border-[#ddc9a3] bg-white px-4 py-3 text-sm font-medium text-[#3d2f24] transition-all hover:bg-[#fff8e7] hover:border-[#b87333] active:scale-[0.98]";
  const childLinkClass =
    "block rounded-lg px-3 py-2 text-sm text-[#3d2f24] transition hover:bg-[#fff8e7] hover:text-[#b87333]";

  return (
    <>
      {/* トグルボタン */}
      <button
        type="button"
        onClick={toggleMenu}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#ddc9a3] bg-white text-[#3d2f24] transition-colors hover:bg-[#fff8e7]"
        aria-label="メニューを開閉"
        aria-expanded={open}
      >
        <span className={[hamburgerLineBase, open ? "rotate-45 translate-y-0" : "-translate-y-2"].join(" ")} />
        <span className={[hamburgerLineBase, open ? "opacity-0 scale-0" : "opacity-100 scale-100"].join(" ")} />
        <span className={[hamburgerLineBase, open ? "-rotate-45 translate-y-0" : "translate-y-2"].join(" ")} />
      </button>

      {/* メニュー本体 */}
      {open && (
        <div className="fixed inset-0 z-20000">
          {/* 背景（クリックで閉じる） */}
          <button
            type="button"
            aria-label="メニューを閉じる"
            onClick={closeMenu}
            className={[
              "absolute inset-0 bg-black/40 transition-opacity duration-300",
              visible ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />

          {/* パネル */}
          <div className={[panelBase, visible ? "translate-x-0" : "translate-x-full"].join(" ")}>
            <div className="flex h-full min-h-0 flex-col p-5">
              {/* ヘッダー */}
              <div className="flex items-center justify-between border-b border-[#ddc9a3] pb-4">
                <div className="text-sm font-semibold tracking-[0.16em] text-[#3d2f24]">NEBULAB</div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#ddc9a3] bg-white text-[#3d2f24] transition-colors hover:bg-[#fff8e7]"
                  aria-label="閉じる"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* ナビ（スクロール領域） */}
              <div className="mt-5 flex-1 min-h-0 overflow-y-auto pr-1">
                {/* 単独リンク（内部） */}
                {topLinks.length > 0 && (
                  <div className="space-y-2">
                    {topLinks.map((item) => (
                      <NavLink key={item.href} item={item} onClick={closeMenu} className={topLinkClass} />
                    ))}
                  </div>
                )}

                {/* アコーディオン */}
                {groups.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {groups.map((g) => {
                      const isOpenGroup = expandedKey === g.key;

                      return (
                        <div key={g.key} className="rounded-xl border border-[#ddc9a3] bg-white">
                          <button
                            type="button"
                            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-[#3d2f24]"
                            onClick={() => setExpandedKey(isOpenGroup ? null : g.key)}
                            aria-expanded={isOpenGroup}
                          >
                            <span>{g.label}</span>
                            <svg
                              className={["h-4 w-4 transition-transform", isOpenGroup ? "rotate-180" : "rotate-0"].join(
                                " "
                              )}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {isOpenGroup && (
                            <div className="border-t border-[#ddc9a3]">
                              <div className="p-2">
                                {g.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={closeMenu}
                                    className={childLinkClass}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* 外部リンク（最後に固定） */}
                {externalLinks.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {externalLinks.map((item) => (
                      <NavLink key={item.href} item={item} onClick={closeMenu} className={topLinkClass} />
                    ))}
                  </div>
                )}
              </div>

              {/* フッター */}
              <div className="mt-5 border-t border-[#ddc9a3] pt-5">
                <Link
                  href={CONTACT_HREF}
                  onClick={closeMenu}
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
