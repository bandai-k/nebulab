export type HeaderNavItem = {
  key: string;
  href: string;
  label: string;
};

export const HEADER_NAV: HeaderNavItem[] = [
  { key: "about", href: "/about", label: "About" },
  { key: "service", href: "/service", label: "Service" },
  { key: "navi", href: "/navi", label: "Navi" },
  { key: "lab", href: "/lab", label: "Lab" },
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
      { href: "/service", label: "Service" },
      { href: "/navi", label: "Navi" },
      { href: "/demo", label: "Demo" },
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
