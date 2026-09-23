"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/**
 * サイト共通の Header / Footer の出し分け。
 *
 * `/review`（診断LPの申込ページ）は広告からの流入を他ページへ逃がさない
 * ための独立レイアウトを持つ（`src/app/(lp)/review/layout.tsx`）ので、
 * ここではサイト共通のグローバルナビ・フッターを出さない。
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLp = pathname.startsWith("/review");

  if (isLp) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <div className="relative z-[1]">
        {children}
        <Footer />
      </div>
    </>
  );
}
