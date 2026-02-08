/**
 * ナビゲーション定義の単一ソース
 * Header / Footer / sitemap で共有
 */

import { BRAND } from "./brand";

// ============================================================
// 型定義
// ============================================================

/** サブメニュー項目 */
export type NavSubItem = {
  href: string;
  label: string;
};

/** Header ナビ項目 */
export type HeaderNavItem = {
  key: string;
  href: string;
  label: string;
  external?: boolean;
  submenu?: NavSubItem[];
};

/** Footer / Sitemap 用リンク */
export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

/** Footer / Sitemap 用セクション */
export type NavSection = {
  title: string;
  links: NavLink[];
};

// ============================================================
// Header 用
// ============================================================

const servicesSubmenu: NavSubItem[] = [
  { href: "/services", label: "サービス一覧" },
  { href: "/services/meo", label: "Googleマップ集客" },
];

/** Header 用ナビゲーション */
export const HEADER_NAV: HeaderNavItem[] = [
  { key: "services", href: "/services", label: "サービス", submenu: servicesSubmenu },
  { key: "about", href: "/about", label: "NEBULABについて" },
  { key: "nrt-loft", href: "/nrt-loft", label: "NRT LOFT" },
  { key: "news", href: "/news", label: "お知らせ" },
];

// ============================================================
// Footer 用
// ============================================================

/** Footer 用セクション */
export const FOOTER_SECTIONS: NavSection[] = [
  {
    title: "サービス",
    links: [
      { href: "/services", label: "サービス一覧" },
      { href: "/services/meo", label: "Googleマップ集客" },
    ],
  },
  {
    title: "企業情報",
    links: [
      { href: "/about", label: "NEBULABについて" },
      { href: "/nrt-loft", label: "NRT LOFT" },
      { href: "/news", label: "お知らせ" },
    ],
  },
  {
    title: "その他",
    links: [
      { href: "/contact", label: "お問い合わせ" },
      { href: "/privacy", label: "プライバシーポリシー" },
      { href: "/terms", label: "利用規約" },
    ],
  },
];

// ============================================================
// Sitemap 用
// ============================================================

/** Sitemap 用セクション */
export const SITEMAP_SECTIONS: NavSection[] = [
  {
    title: "メインページ",
    links: [
      { href: "/", label: "ホーム" },
      { href: "/services", label: "サービス一覧" },
      { href: "/services/meo", label: "Googleマップ集客" },
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
  {
    title: "企業情報",
    links: [
      { href: "/about", label: "NEBULABについて" },
      { href: "/nrt-loft", label: "NRT LOFT" },
      { href: BRAND.nrtLoftUrl, label: "NRT-LOFT 公式サイト", external: true },
      { href: "/news", label: "お知らせ" },
    ],
  },
  {
    title: "法的情報",
    links: [
      { href: "/privacy", label: "プライバシーポリシー" },
      { href: "/terms", label: "利用規約" },
      { href: "/sitemap", label: "サイトマップ" },
    ],
  },
];
