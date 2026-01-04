import Link from "next/link";

const nav = [
  { href: "/about", label: "会社概要" },
  { href: "/#services", label: "事業内容" },
  { href: "/insights", label: "判断の記録" },
  { href: "/philosophy", label: "思想" },
  { href: "/news", label: "お知らせ" },
];

export default function GlobalNav() {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm text-[#5c4d3c] transition hover:text-[#3d2f24]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
