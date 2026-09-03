"use client";

import { useEffect, useRef } from "react";

/**
 * スクロールで入ってきたときに、中の要素を少しずつずらしてフェードインさせる。
 *
 * 注意: 指示書 §4.4 は「カード・テキスト・見出しにフェードインを付けない」
 * としている(読もうとした瞬間に文字が動くと、かえって読みづらくなるため)。
 * これは依頼により意図的に外している。読みづらさを抑えるために、
 * 移動量は小さく、時間は短く、そして一度きりにしている。
 *
 * 隠すのは JS が実行時に data-reveal を付けた要素だけで、しかも読み込み
 * 時点で画面の外にあるものに限る。JS が動かない環境や、観測が止まる
 * バックグラウンドのタブでも、本文が消えたままにならない。
 */
type Props = {
  children: React.ReactNode;
  className?: string;
  /** 子要素をずらす間隔(ms)。0 なら塊のまま出す。 */
  stagger?: number;
  /** 全体の開始を遅らせる(ms)。 */
  delay?: number;
  /**
   * 描画するタグ。リストを包むときは "ul" を渡すこと。
   * div のままだと <li> が <div> の直下に来て、不正な構造になる。
   */
  as?: "div" | "ul" | "ol";
};

export default function Reveal({
  children,
  className,
  stagger = 90,
  delay = 0,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = stagger
      ? (Array.from(root.children) as HTMLElement[])
      : [root];

    targets.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", `${delay + i * stagger}ms`);
    });

    // §4.5: 動きを止めるときは、隠さずそのまま出す。
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          // 一度きり。戻ってきたときに再生し直さない(§4.3 の考え方に合わせる)。
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => {
      /*
       * 隠すのは、読み込んだ時点でまだ画面の外にある要素だけ。
       * すでに見えているものは触らない。こうすると
       *   - JS が無い/遅い環境でも本文が消えない
       *   - バックグラウンドのタブで IntersectionObserver が止まっても、
       *     見えている範囲は隠れたままにならない
       */
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) return;
      el.dataset.reveal = "";
      io.observe(el);
    });

    return () => io.disconnect();
  }, [stagger, delay]);

  return (
    <Tag ref={ref as React.Ref<never>} className={className}>
      {children}
    </Tag>
  );
}
