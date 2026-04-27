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
      { key: "svc-dev", href: "/services#development", label: "01 / SES・受託開発" },
      { key: "svc-local", href: "/services#local-tech", label: "02 / 地域 × テクノロジー" },
      { key: "svc-ec", href: "/services#ec-brand", label: "03 / オリジナルブランド" },
      { key: "svc-ai", href: "/services#ai-products", label: "04 / 自社AIプロダクト" },
    ],
  },
  {
    key: "projects",
    href: "/projects",
    label: "Projects",
    children: [
      { key: "proj-all", href: "/projects", label: "すべてのプロジェクト" },
      { key: "proj-nrt", href: "/projects/nrt-loft", label: "NRT-LOFT" },
      { key: "proj-narita", href: "/projects/narita-guide", label: "narita-guide.com" },
      { key: "proj-najimi", href: "/projects/najimi", label: "NAJIMI" },
      { key: "proj-navi", href: "/projects/navi", label: "Navi" },
      { key: "proj-smm", href: "/projects/supermindmap", label: "SuperMindMap" },
      { key: "proj-nebula", href: "/projects/nebula-place", label: "Nebula Place" },
    ],
  },
  { key: "news", href: "/news", label: "News" },
  {
    key: "lab",
    href: "/lab",
    label: "Lab",
    children: [
      { key: "lab-principles", href: "/lab#principles", label: "Lab の活動方針" },
      { key: "lab-rd", href: "/lab#rd", label: "R&D プロジェクト" },
      { key: "lab-blog", href: "/lab#blog", label: "技術ブログ" },
    ],
  },
  { key: "contact", href: "/contact", label: "Contact" },
];

export type NavLink = {
  href: string;
  label: string;
};

export type NavSection = {
  title: string;
  links: NavLink[];
};

export const SITEMAP_SECTIONS: NavSection[] = [
  {
    title: "Main",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/projects", label: "Projects" },
      { href: "/projects/nrt-loft", label: "NRT-LOFT" },
      { href: "/projects/narita-guide", label: "narita-guide.com" },
      { href: "/projects/najimi", label: "NAJIMI" },
      { href: "/projects/navi", label: "Navi" },
      { href: "/projects/supermindmap", label: "SuperMindMap" },
      { href: "/projects/nebula-place", label: "Nebula Place" },
      { href: "/demo", label: "Demo" },
      { href: "/news", label: "News" },
      { href: "/lab", label: "Lab" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms" },
      { href: "/sitemap", label: "Sitemap" },
    ],
  },
];
