"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { LABEL_ASSETS, type LabelColor } from "./brushAssets";

/**
 * 画面の左右端に置く縦向きの筆(ヒーロー用)。
 *
 * label-* を 90 度回して長辺を縦にし、外側の一部を画面外へ出す。§3.4 の
 * 「左右に抜けさせて断ち切りにする」を縦方向に読み替えたもの。
 *
 * 動き(§4.1「動かすのは背景の筆のストロークのみ」):
 *   - 表示時にフェードインする。左右で遅延を変え、続けて入るようにする
 *   - スクロールに対して遅れて動く(パララックス §4.2)
 *
 * 不透明度とパララックスは別の要素に持たせている。同じ要素の transform を
 * 取り合うと、片方がもう片方を打ち消してしまうため。
 *
 * 本文の列(max-w-6xl = 1152px)の外側に収まる必要があるため、余白が
 * 足りる 2xl(1536px)以上でのみ出す。
 */
type Side = {
  color: LabelColor;
  side: "left" | "right";
  /** パララックスの係数。左右で変え、同時に動いて見えないようにする。 */
  depth: number;
  /** フェードインの遅延。 */
  delay: string;
};

const SIDES: Side[] = [
  { color: "teal", side: "left", depth: 0.35, delay: "160ms" },
  { color: "indigo", side: "right", depth: 0.22, delay: "420ms" },
];

/** 移動量の上限。層の高さに対する割合。 */
const MAX_TRAVEL_RATIO = 0.1;

export default function SideBrushes() {
  const [shown, setShown] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    /*
     * 初期描画のあとに表示状態へ切り替える。最初から表示状態で描くと
     * transition の開始位置が飛ばされる。
     * rAF だけに頼らないこと。バックグラウンドのタブでは rAF が止まり、
     * 透明のまま出てこなくなる。タイマーと併用し、先に来たほうで確定する。
     */
    let settled = false;
    const show = () => {
      if (settled) return;
      settled = true;
      setShown(true);
    };
    const raf = requestAnimationFrame(show);
    const timer = setTimeout(show, 120);
    const cleanupEntrance = () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };

    const section = rootRef.current?.parentElement;
    // §4.5: 動きを完全に停止し、最終状態を出す。
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!section || reduced) return cleanupEntrance;

    // ── スクロールに遅れて動く(§4.2)。可視のときだけ rAF を回す ──
    let frame = 0;
    let running = false;
    let travels: number[] = [];

    const measure = () => {
      travels = layerRefs.current.map((el, i) =>
        el ? el.offsetHeight * MAX_TRAVEL_RATIO * (SIDES[i].depth / 0.35) : 0,
      );
    };

    const tick = () => {
      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const span = (viewport + rect.height) / 2;
      const progress = (viewport / 2 - (rect.top + rect.height / 2)) / span;
      for (let i = 0; i < layerRefs.current.length; i++) {
        const el = layerRefs.current[i];
        if (!el) continue;
        el.style.transform = `translate3d(0, ${(progress * travels[i]).toFixed(2)}px, 0)`;
      }
      if (running) frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      measure();
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(frame);
    };

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "10% 0px" },
    );
    io.observe(section);

    const onResize = () => {
      if (running) measure();
    };
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      cleanupEntrance();
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {SIDES.map(({ color, side, delay }, i) => {
        const asset = LABEL_ASSETS[color];
        return (
          <div
            key={side}
            className={`absolute top-1/2 hidden h-[86%] w-[26vw] -translate-y-1/2 2xl:block ${
              side === "left" ? "-left-[11vw]" : "-right-[11vw]"
            }`}
          >
            {/* パララックスを書き込む層。不透明度とは要素を分ける。 */}
            <div
              ref={(el) => {
                layerRefs.current[i] = el;
              }}
              className="h-full w-full"
            >
              {/*
                回転の footprint は親が持ち、中の画像は元の向きのまま
                中央で回す。こうしないと回転後の大きさをレイアウトが
                知らず、幅の計算が合わなくなる。
              */}
              <Image
                src={asset.src}
                alt=""
                width={asset.width}
                height={asset.height}
                sizes="60vh"
                className="absolute left-1/2 top-1/2 h-auto w-[86vh] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 transition-opacity duration-[1400ms] ease-out"
                style={{ opacity: shown ? 0.34 : 0, transitionDelay: delay }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
