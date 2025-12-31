import Link from "next/link";

const nav = [
  { href: "/about", label: "会社概要" },
  { href: "/#services", label: "事業内容" },
  { href: "/news", label: "お知らせ" },
  { href: "/#contact", label: "お問い合わせ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ddc9a3] bg-[#fff8e7]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#ddc9a3] bg-white text-sm font-semibold tracking-tight text-[#b87333]">
            N
          </span>
          <span className="text-sm font-semibold tracking-[0.14em] text-[#3d2f24]">
            NEBULAB
          </span>
          <span className="text-xs text-[#8b7355]">Product & Place Lab</span>
        </Link>

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

        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="inline-flex h-9 items-center justify-center rounded-full border border-[#b87333] bg-[#b87333] px-4 text-sm font-medium text-white transition hover:bg-[#a0622b]"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
