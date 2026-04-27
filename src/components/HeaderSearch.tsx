"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { searchSite, type SearchItem } from "@/lib/searchIndex";

const CATEGORY_LABEL: Record<SearchItem["category"], string> = {
  PAGE: "PAGE",
  BUSINESS: "BUSINESS",
  PROJECT: "PROJECT",
};

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

export default function HeaderSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => searchSite(query, 8), [query]);
  const trimmed = query.trim();

  useEffect(() => {
    if (!open) return;
    const onMouseDown = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        inputRef.current?.blur();
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeAndClear = () => {
    setOpen(false);
    setQuery("");
  };

  const showDropdown = open && trimmed.length > 0;

  return (
    <div ref={containerRef} className="relative col-start-3 hidden md:block md:w-44 md:justify-self-end">
      <form
        role="search"
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2 border-b border-cyber-border-dim pl-2 transition-colors focus-within:border-cyber-accent hover:border-cyber-text-muted"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 shrink-0 stroke-cyber-text-muted"
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="6.5" />
          <line x1="20" y1="20" x2="15.6" y2="15.6" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          name="q"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => trimmed && setOpen(true)}
          placeholder="SEARCH"
          aria-label="サイト内検索"
          autoComplete="off"
          className="w-full bg-transparent py-2 font-mono text-[11px] tracking-[0.25em] uppercase text-cyber-text placeholder:text-cyber-text-muted focus:outline-none"
        />
      </form>

      {showDropdown && (
        <div className="absolute right-0 top-full mt-3 w-80 border border-cyber-border bg-cyber-bg/95 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <div className="border-b border-cyber-border-dim px-4 py-2">
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-cyber-text-muted">
              {results.length > 0
                ? `${results.length} RESULT${results.length === 1 ? "" : "S"}`
                : "NO MATCH"}
            </span>
          </div>

          {results.length === 0 ? (
            <p className="px-4 py-6 font-mono text-xs text-cyber-text-muted">
              「{trimmed}」に一致する項目はありません。
            </p>
          ) : (
            <ul className="max-h-[60vh] overflow-y-auto">
              {results.map((item) => {
                const inner = (
                  <>
                    <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-cyber-accent">
                      {CATEGORY_LABEL[item.category]}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-cyber-text">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-cyber-text-secondary">
                      {item.description}
                    </span>
                  </>
                );

                return (
                  <li
                    key={item.id}
                    className="border-b border-cyber-border-dim last:border-b-0"
                  >
                    {isExternal(item.href) ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        onClick={closeAndClear}
                        className="block px-4 py-3 transition-colors hover:bg-cyber-accent/10"
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeAndClear}
                        className="block px-4 py-3 transition-colors hover:bg-cyber-accent/10"
                      >
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
