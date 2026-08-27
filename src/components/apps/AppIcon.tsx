"use client";

import { useCallback, useState } from "react";

type AppIconProps = {
  /** 画像パス。未指定・読み込み失敗時はグラデーションのプレースホルダーを出す。 */
  src?: string;
  name: string;
  nameEn: string;
  /** プレースホルダーの背景（AppEntry.thumbStyle）。 */
  fallbackStyle: string;
  /** 表示サイズを決めるユーティリティクラス（幅のみ指定する。高さは正方形で固定）。 */
  className?: string;
};

/**
 * アプリアイコン。画像ファイルが未配置でも常に正方形の枠を確保するため、
 * 読み込みに失敗してもレイアウトが崩れない。
 */
export default function AppIcon({
  src,
  name,
  nameEn,
  fallbackStyle,
  className = "",
}: AppIconProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  // 画像が hydration より前に 404 になると onError は発火しない。
  // ref が付いた時点で「読み込み済みなのに幅が 0」なら失敗として扱う。
  const detectBrokenImage = useCallback((el: HTMLImageElement | null) => {
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div
      className={`relative aspect-square shrink-0 overflow-hidden rounded-[22%] border border-cyber-border-dim ${className}`.trim()}
      style={showImage ? undefined : { background: fallbackStyle }}
    >
      {showImage ? (
        // Next/Image は未配置ファイルで最適化エラーになるため、素の img + onError で扱う
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={detectBrokenImage}
          src={src}
          alt={`${name} のアプリアイコン`}
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center px-2 text-center text-white"
          aria-hidden="true"
        >
          <span className="font-display text-base leading-tight tracking-wide md:text-lg">
            {name}
          </span>
          <span className="mt-1 font-mono text-[8px] tracking-[0.25em] opacity-70">
            {nameEn}
          </span>
        </div>
      )}
    </div>
  );
}
