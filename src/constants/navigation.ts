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

const aboutSubmenu: NavSubItem[] = [
  { href: "/about", label: "会社概要" },
  { href: "/history", label: "歩み" },
  { href: "/philosophy", label: "思想" },
];

const servicesSubmenu: NavSubItem[] = [
  { href: "/services", label: "事業内容" },
];

const projectsSubmenu: NavSubItem[] = [
  { href: "/projects", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/insights", label: "Insights" },
];

const newsSubmenu: NavSubItem[] = [
  { href: "/news", label: "お知らせ" },
];

/** Header 用ナビゲーション */
export const HEADER_NAV: HeaderNavItem[] = [
  { key: "about", href: "/about", label: "About", submenu: aboutSubmenu },
  { key: "services", href: "/services", label: "Services", submenu: servicesSubmenu },
  { key: "projects", href: "/projects", label: "Projects", submenu: projectsSubmenu },
  { key: "news", href: "/news", label: "News", submenu: newsSubmenu },
  { key: "nrt-loft", href: BRAND.nrtLoftUrl, label: "NRT-LOFT", external: true },
];

// ============================================================
// Footer 用
// ============================================================

/** Footer 用セクション */
export const FOOTER_SECTIONS: NavSection[] = [
  {
    title: "サービス",
    links: [
      { href: "/#services", label: "事業内容" },
      { href: "/#projects", label: "取り組み" },
      { href: "/products", label: "Products" },
      { href: BRAND.nrtLoftUrl, label: "NRT-LOFT", external: true },
    ],
  },
  {
    title: "企業情報",
    links: [
      { href: "/about", label: "会社概要" },
      { href: "/news", label: "お知らせ" },
      { href: "/contact", label: "お問い合わせ" },
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

// ============================================================
// Sitemap 用
// ============================================================

/** Sitemap 用セクション（欠損ページ追加済み） */
export const SITEMAP_SECTIONS: NavSection[] = [
  {
    title: "メインページ",
    links: [
      { href: "/", label: "ホーム" },
      { href: "/about", label: "会社概要" },
      { href: "/services", label: "事業内容" },
      { href: "/projects", label: "取り組み" },
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
  {
    title: "企業情報",
    links: [
      { href: "/history", label: "歩み" },
      { href: "/philosophy", label: "思想" },
      { href: "/news", label: "お知らせ" },
      { href: "/recruit", label: "採用情報" },
    ],
  },
  {
    title: "コンテンツ",
    links: [
      { href: "/products", label: "Products" },
      { href: "/insights", label: "Insights" },
      { href: BRAND.nrtLoftUrl, label: "NRT-LOFT", external: true },
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
