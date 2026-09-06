"use client";

import { useEffect } from "react";

/**
 * /services のスクロールロック用に、固定ヘッダーの実際の高さを測って
 * CSS変数 --svc-header-h に反映する(依頼により追加)。
 *
 * 96px 固定値だと実際のヘッダー高さ(レスポンシブで変わる)とずれて、
 * セクション上部に隙間や重なりができ、下端のスクロールガイドが
 * 見切れる原因になっていた。実測してページ全体には影響しない
 * ローカルなCSS変数として持たせる。
 */
export default function ServicesHeaderOffset() {
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const update = () => {
      const height = header.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--svc-header-h",
        `${height}px`,
      );
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(header);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
