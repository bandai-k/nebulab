"use client";

import { useEffect, useState } from "react";

type Props = {
    /** ボタンを出し始めるスクロール量(px) */
    showAfter?: number;
    /** md以上では隠す（モバイルだけ出したい場合 true） */
    mobileOnly?: boolean;
};

export default function BackToTop({ showAfter = 240, mobileOnly = true }: Props) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 768px)"); // md以上
        const update = () => {
            if (mobileOnly && mq.matches) {
                setVisible(false);
                return;
            }
            setVisible(window.scrollY > showAfter);
        };

        window.addEventListener("scroll", update, { passive: true });
        mq.addEventListener?.("change", update);
        update();

        return () => {
            window.removeEventListener("scroll", update);
            mq.removeEventListener?.("change", update);
        };
    }, [showAfter, mobileOnly]);

    const onClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label="ページ最上部へ戻る"
            className={[
                // 位置
                "fixed bottom-5 right-5 z-20000",
                // 見た目
                "inline-flex h-12 w-12 items-center justify-center rounded-full",
                "border border-[#ddc9a3] bg-white text-[#3d2f24] shadow-[0_12px_30px_rgba(0,0,0,0.10)]",
                "transition-all duration-200 active:scale-[0.98]",
                // 表示/非表示
                visible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2",
            ].join(" ")}
        >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
}
