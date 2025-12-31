import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#works", label: "Works" },
  { href: "/#contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#ddc9a3] bg-[#fef3d9]">
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="space-y-3">
            <div className="text-sm font-semibold tracking-[0.14em] text-[#3d2f24]">
              NEBULAB
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#5c4d3c]">
              小さくはじめて、確かに積み上げる。プロダクト開発・Web制作・運用改善。
              そして、成田の拠点運営(NRT LOFT)へつながる活動も。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm md:grid-cols-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[#5c4d3c] transition hover:text-[#3d2f24]"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[#ddc9a3] pt-6 text-xs text-[#8b7355] md:flex-row md:items-center md:justify-between">
          <div>© {year} NEBULAB</div>
          <div className="flex items-center gap-4">
            <Link className="hover:text-[#3d2f24]" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-[#3d2f24]" href="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
