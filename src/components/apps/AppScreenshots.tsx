"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { AppScreenshot } from "@/data/apps";

type AppScreenshotsProps = {
  shots: AppScreenshot[];
};

const LG_COLS: Record<number, string> = {
  1: "lg:grid-cols-3",
  2: "lg:grid-cols-3",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

/** 画像が未配置のときに出す、同じ縦横比のプレースホルダー。 */
function ShotPlaceholder({ shot, index }: { shot: AppScreenshot; index: number }) {
  return (
    <div
      className="flex w-full items-center justify-center rounded-sm border border-rule bg-white/[0.02]"
      style={{ aspectRatio: `${shot.width} / ${shot.height}` }}
      aria-hidden="true"
    >
      <span className="text-[9px] tracking-[0.25em] text-ink-sub">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

function ShotThumb({
  shot,
  index,
  onFail,
  onOpen,
}: {
  shot: AppScreenshot;
  index: number;
  onFail: (index: number) => void;
  onOpen: (index: number) => void;
}) {
  // 画像が hydration より前に 404 になると onError は発火しない。
  // ref が付いた時点で「読み込み済みなのに幅が 0」なら失敗として扱う。
  const detectBrokenImage = useCallback(
    (el: HTMLImageElement | null) => {
      if (el && el.complete && el.naturalWidth === 0) onFail(index);
    },
    [index, onFail]
  );

  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className="block w-full cursor-zoom-in overflow-hidden rounded-sm border border-rule bg-white/[0.02] transition-colors hover:border-accent/50"
      aria-label={`${shot.alt} を拡大する`}
    >
      <Image
        ref={detectBrokenImage}
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        sizes="(min-width: 1024px) 20vw, (min-width: 640px) 30vw, 45vw"
        className="w-full object-cover"
        style={{ aspectRatio: `${shot.width} / ${shot.height}` }}
        onError={() => onFail(index)}
      />
    </button>
  );
}

/**
 * スクリーンショットのグリッド + 拡大表示。
 * aspect 比で枠を先に確保しているので、ファイルが未配置でも
 * 同じ形のプレースホルダーが並び、レイアウトは崩れない。
 */
export default function AppScreenshots({ shots }: AppScreenshotsProps) {
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const open = useCallback((index: number) => setOpenIndex(index), []);

  const markFailed = useCallback((index: number) => {
    setFailed((prev) => (prev[index] ? prev : { ...prev, [index]: true }));
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        // 読み込めなかった画像は飛ばして、次に表示できるものへ移動する
        for (let i = 1; i <= shots.length; i++) {
          const next = (current + delta * i + shots.length * shots.length) % shots.length;
          if (!failed[next]) return next;
        }
        return current;
      });
    },
    [failed, shots.length]
  );

  // 拡大表示中は背面のスクロールを止める（Header のメニューと同じ扱い）
  useEffect(() => {
    if (openIndex === null) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, step]);

  const current = openIndex === null ? null : shots[openIndex];

  return (
    <>
      <ul className={`grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 ${LG_COLS[Math.min(shots.length, 5)] ?? "lg:grid-cols-5"}`}>
        {shots.map((shot, i) => (
          <li key={shot.src}>
            {failed[i] ? (
              <ShotPlaceholder shot={shot} index={i} />
            ) : (
              <ShotThumb
                shot={shot}
                index={i}
                onFail={markFailed}
                onOpen={open}
              />
            )}
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="閉じる"
            className="absolute right-4 top-4 z-[1] flex h-10 w-10 items-center justify-center text-sm text-ink-sub transition-colors hover:text-ink md:right-8 md:top-8"
          >
            ✕
          </button>

          {shots.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="前のスクリーンショット"
                className="absolute left-2 z-[1] flex h-12 w-12 items-center justify-center text-lg text-ink-sub transition-colors hover:text-ink md:left-6"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="次のスクリーンショット"
                className="absolute right-2 z-[1] flex h-12 w-12 items-center justify-center text-lg text-ink-sub transition-colors hover:text-ink md:right-6"
              >
                ›
              </button>
            </>
          )}

          <Image
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            sizes="100vw"
            priority
            className="h-auto max-h-full w-auto max-w-full cursor-zoom-out object-contain"
            onClick={(e) => e.stopPropagation()}
            onError={() => {
              markFailed(openIndex as number);
              close();
            }}
          />

          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-ink-sub">
            {String((openIndex ?? 0) + 1).padStart(2, "0")} /{" "}
            {String(shots.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </>
  );
}
