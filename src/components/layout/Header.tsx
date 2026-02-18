"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/constants/brand";
import { HEADER_NAV } from "@/constants/navigation";
import { useIsMobile } from "@/lib/useIsMobile";

export default function Header() {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-cyber-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-6 md:px-10 md:py-8">
        <Link href="/" className="block">
          <Image
            src="/nebulab-logo-dark.svg"
            alt={BRAND.name}
            width={180}
            height={52}
            priority
          />
        </Link>

        {isMobile ? (
          <button
            type="button"
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-[1.5px] w-5 bg-cyber-text transition-all duration-300 ${
                menuOpen ? "translate-y-[4.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-cyber-text transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-cyber-text transition-all duration-300 ${
                menuOpen ? "-translate-y-[4.5px] -rotate-45" : ""
              }`}
            />
          </button>
        ) : (
          <nav className="flex items-center gap-8">
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
        )}
      </div>

      {/* Mobile menu overlay */}
      {isMobile && menuOpen && (
        <div className="fixed inset-0 z-[55] bg-cyber-bg/95 backdrop-blur-lg">
          <nav className="flex h-full flex-col items-center justify-center gap-10">
            {HEADER_NAV.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="font-mono text-sm tracking-[0.3em] text-cyber-text-secondary transition-colors hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
