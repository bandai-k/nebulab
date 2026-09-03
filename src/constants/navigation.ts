export type HeaderNavChild = {
  key: string;
  href: string;
  label: string;
};

export type HeaderNavItem = {
  key: string;
  href: string;
  label: string;
  children?: HeaderNavChild[];
};

/**
 * ヘッダーのナビ(指示書 §5.1)。ABOUT / SERVICES / PROJECTS / PARTNERS / CONTACT の5項目。
 * ここから外れるページ(Apps / Showcase / News / Lab など)はフッターから辿れる。
 *
 * PARTNERS は当面トップページ内のセクションを指す。
 * Phase 4 で /partners を新規作成したら href を差し替えること。
 */
export const HEADER_NAV: HeaderNavItem[] = [
  {
    key: "about",
    href: "/about",
    label: "About",
    children: [
      { key: "about-company", href: "/about#company", label: "会社概要" },
      { key: "about-mvv", href: "/about/mvv", label: "ミッションビジョンバリュー" },
      { key: "about-message", href: "/about#message", label: "代表メッセージ" },
    ],
  },
  {
    key: "services",
    href: "/services",
    label: "Services",
    children: [
      { key: "svc-dev", href: "/services", label: "01 / 受託開発" },
      { key: "svc-enablement", href: "/services", label: "02 / 内製化支援" },
      { key: "svc-products", href: "/projects", label: "03 / 自社プロダクト" },
      { key: "svc-local", href: "/hp-trial", label: "04 / 地域のIT支援" },
    ],
  },
  {
    key: "projects",
    href: "/projects",
    label: "Projects",
    children: [
      { key: "proj-all", href: "/projects", label: "すべてのプロジェクト" },
      { key: "proj-apps", href: "/apps", label: "アプリ" },
      { key: "proj-nrt", href: "/projects/nrt-loft", label: "NRT LOFT" },
      { key: "proj-narita", href: "/projects/narita-guide", label: "narita-guide.com" },
      { key: "proj-najimi", href: "/projects/najimi", label: "NAJIMI" },
      { key: "proj-navi", href: "/projects/navi", label: "Navi" },
    ],
  },
  { key: "partners", href: "/#partners", label: "Partners" },
  { key: "contact", href: "/contact", label: "Contact" },
];
