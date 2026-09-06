"use client";

import { useEffect, useRef, useState } from "react";

/**
 * /services のスクロールロック用ガイド(依頼により変更)。
 *
 * 以前は明滅する固定の縦線だったが、今のセクションをどれだけ
 * スクロールしたか(scrollTop / (scrollHeight - clientHeight))を
 * ゲージとして見せるように変更。ゲージが満タンになるタイミングで
 * 次のセクションへ切り替わる(実際の切り替えはブラウザ標準の
 * スクロールチェイニングが担う。ここは進捗の可視化だけ)。
 */
export default function ScrollGauge() {
  const ref = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    const section = el?.closest<HTMLElement>(".services-section");
    if (!section) return;

    const update = () => {
      const max = section.scrollHeight - section.clientHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, section.scrollTop / max)) : 0);
    };

    update();
    section.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      section.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <span ref={ref} aria-hidden="true" className="services-scroll-guide">
      SCROLL
      <span className="services-scroll-guide-track">
        <span
          className="services-scroll-guide-fill"
          style={{ transform: `scaleY(${progress})` }}
        />
      </span>
    </span>
  );
}
