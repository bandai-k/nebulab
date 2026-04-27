"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BRAND } from "@/constants/brand";
import { HEADER_NAV } from "@/constants/navigation";
import HeaderSearch from "@/components/HeaderSearch";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[60] bg-cyber-bg/90 md:backdrop-blur-md">
        <div className="mx-auto grid max-w-[1200px] grid-cols-[1fr_auto_1fr] items-center px-5 py-6 md:px-10 md:py-8">
          <Link
            href="/"
            className="justify-self-start font-display text-xl font-normal tracking-[0.18em] text-cyber-text transition-colors hover:text-cyber-accent md:text-2xl"
            aria-label={BRAND.name}
          >
            {BRAND.name}
          </Link>

          {/* Desktop nav (centered) */}
          <nav className="col-start-2 hidden items-center justify-self-center gap-8 md:flex">
            {HEADER_NAV.map((item) => (
              <div
                key={item.key}
                className="group relative inline-flex items-center"
              >
                <Link
                  href={item.href}
                  className="text-xs font-medium tracking-wider leading-none text-cyber-text-secondary transition-colors group-hover:text-white"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                    <ul className="min-w-[260px] border border-cyber-border bg-cyber-bg/95 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
                      {item.children.map((child) => (
                        <li
                          key={child.key}
                          className="border-b border-cyber-border-dim last:border-b-0"
                        >
                          <Link
                            href={child.href}
                            className="block px-5 py-3 text-xs font-medium tracking-wider text-cyber-text-secondary transition-colors hover:bg-cyber-accent/10 hover:text-white"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop search (right) */}
          <HeaderSearch />

          {/* Mobile hamburger (right) */}
          <button
            type="button"
            className="col-start-3 flex h-10 w-10 flex-col items-center justify-center gap-1.5 justify-self-end md:hidden"
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
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-cyber-bg/95 pb-12 pt-24 md:hidden">
          <nav className="flex flex-col items-center gap-8 px-5 py-6">
            {HEADER_NAV.map((item) => (
              <div key={item.key} className="text-center">
                <Link
                  href={item.href}
                  className="font-mono text-sm tracking-[0.3em] text-cyber-text-secondary transition-colors hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-4 space-y-3">
                    {item.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          href={child.href}
                          className="font-mono text-[11px] tracking-[0.25em] text-cyber-text-muted transition-colors hover:text-cyber-accent"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
