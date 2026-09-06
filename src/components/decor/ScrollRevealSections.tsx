"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * トップページ以外の下層ページで、2番目以降のセクションを
 * スクロールで画面に入ってきたときにフェードインさせる(依頼により
 * 「後追い型」に変更。冒頭の見出しブロックはページ読み込み時に一度だけ
 * 再生する既存の演出のまま触らない)。
 *
 * RootLayout に1回だけ置く。ページ遷移(クライアントサイド)のたびに
 * main を数え直す必要があるため usePathname を依存に持つ。
 *
 * トップページ(`/`)は Reveal コンポーネントで各セクション内部が
 * 個別にスクロールインする独自の演出を持っているため、ここでは何もしない。
 */
export default function ScrollRevealSections() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") return;

    const main = document.querySelector("main");
    if (!main) return;

    // main 直下の1番目(見出しブロック)を除いた残り。
    // ただし中身がカード一覧だけのセクション(section-reveal-skip)は、
    // カード自身が個別にスクロールインするので二重にフェードさせない。
    const sections = Array.from(main.children).slice(1) as HTMLElement[];
    const cards = Array.from(
      main.querySelectorAll<HTMLElement>(".card-reveal-in"),
    );

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      sections.forEach((el) => el.classList.add("is-in-scroll"));
      cards.forEach((el) => el.classList.add("is-in-scroll"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in-scroll");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    );

    // 読み込み時点ですでに画面内にある要素は隠さず、そのまま出す。
    const observe = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("is-in-scroll");
        return;
      }
      io.observe(el);
    };

    sections.forEach((el) => {
      if (el.classList.contains("section-reveal-skip")) return;
      // scroll-reveal-right 等、ページ側ですでに演出を指定している場合は
      // 既定の下からのフェードを重ねない。
      if (
        !el.classList.contains("scroll-reveal-right") &&
        !el.classList.contains("scroll-reveal-section")
      ) {
        el.classList.add("scroll-reveal-section");
      }
      observe(el);
    });

    cards.forEach(observe);

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
