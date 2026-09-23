"use client";

import { trackEvent } from "@/lib/gtag";

type Props = {
  href: string;
  position: "hero" | "pricing" | "footer";
  className?: string;
  children: React.ReactNode;
};

/**
 * 申込ボタン。クリック時に GA4 の cta_click を送ってからスクロールする
 * (位置は hero / pricing / footer で区別。LP仕様書 7章)。
 */
export default function CtaLink({ href, position, className, children }: Props) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackEvent("cta_click", { position })}
    >
      {children}
    </a>
  );
}
