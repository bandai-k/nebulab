"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  minDurationMs?: number;
  fadeOutMs?: number;
  onFinish: () => void;
};

export default function IntroOverlay({
  minDurationMs = 1400,
  fadeOutMs = 600,
  onFinish,
}: Props) {
  const [phase, setPhase] = useState<"show" | "fade">("show");

  // 文章はここに固定（SSR/CSR差異を生まない）
  const line = useMemo(() => "思考は、まだ途中だ。", []);

  useEffect(() => {
    // まず最低表示時間
    const t1 = window.setTimeout(() => setPhase("fade"), minDurationMs);

    // フェードアウト完了後に閉じる
    const t2 = window.setTimeout(() => onFinish(), minDurationMs + fadeOutMs);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [fadeOutMs, minDurationMs, onFinish]);

  return (
    <div
      className={[
        "fixed inset-0 z-50 grid place-items-center",
        // 背景は Cosmic Latte を活かしたまま、少しだけ宇宙演出（暗幕）を足す
        "bg-[#FFF8E7]",
        "transition-opacity",
      ].join(" ")}
      style={{
        // Cosmic Latte を壊さず「宇宙へフォーカス」するための薄い暗転
        // phase=fade で透明へ
        opacity: phase === "fade" ? 0 : 1,
        transitionDuration: `${fadeOutMs}ms`,
      }}
      aria-label="intro"
    >
      <div className="text-center px-6">
        <p className="text-[clamp(20px,3vw,34px)] font-medium tracking-tight">
          {line}
        </p>
        <p className="mt-3 text-sm opacity-70">
          NEBULAB / Cosmic Latte
        </p>
      </div>
    </div>
  );
}
