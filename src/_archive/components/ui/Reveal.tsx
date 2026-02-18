"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    /** 0〜 */
    delayMs?: number;
    /** ふわっとの距離(px) */
    y?: number;
    /** Heroなど、最初から見せたい場合 */
    immediate?: boolean;
};

export default function Reveal({
    children,
    className,
    delayMs = 0,
    y = 10,
    immediate = false,
}: Props) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [shown, setShown] = useState(immediate);

    useEffect(() => {
        if (shown) return;
        const el = ref.current;
        if (!el) return;

        const reveal = () => setShown(true);

        // 省アニメ設定なら、同期setStateを避けて rAF 経由で表示
        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

        if (prefersReduced) {
            const id = window.requestAnimationFrame(reveal);
            return () => window.cancelAnimationFrame(id);
        }

        // 保険：遷移直後にIOが拾い損ねることがあるので、1フレーム後に手動チェック
        const raf = window.requestAnimationFrame(() => {
            const rect = el.getBoundingClientRect();
            const vh = window.innerHeight || 0;

            // ヘッダーが sticky ならここで調整（必要なら変更）
            const topOK = rect.top < vh * 0.9;
            const bottomOK = rect.bottom > 0;

            if (topOK && bottomOK) reveal();
        });

        const obs = new IntersectionObserver(
            (entries) => {
                const e = entries[0];
                if (!e?.isIntersecting) return;

                // eslint の趣旨に合わせて、コールバック内で更新
                window.requestAnimationFrame(reveal);
                obs.disconnect();
            },
            {
                root: null,
                // sticky headerぶんを上に広げる（必要に応じて調整）
                rootMargin: "-96px 0px -10% 0px",
                threshold: 0.1,
            }
        );

        obs.observe(el);

        return () => {
            window.cancelAnimationFrame(raf);
            obs.disconnect();
        };
    }, [shown]);

    return (
        <div
            ref={ref}
            className={[
                className ?? "",
                "will-change-transform",
                "transition-[opacity,transform] duration-700 ease-out",
                shown ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{
                transitionDelay: `${delayMs}ms`,
                transform: shown ? "translateY(0)" : `translateY(${y}px)`,
            }}
        >
            {children}
        </div>
    );
}
