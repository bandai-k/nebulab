import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/constants/brand";
import { HEADER_NAV } from "@/constants/navigation";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-cyber-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
        <Link href="/" className="block">
          <Image
            src="/nebulab-logo-dark.svg"
            alt={BRAND.name}
            width={180}
            height={52}
            priority
          />
        </Link>
        <nav className="flex items-center gap-6 sm:gap-8">
          {HEADER_NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="text-xs font-medium tracking-wider text-cyber-text-secondary transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
