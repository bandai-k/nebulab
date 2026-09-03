"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { LABEL_ASSETS, type LabelColor } from "./brushAssets";

/**
 * 画面の左右端に置く縦向きの筆(ヒーロー用)。
 *
 * label-* を 90 度回して長辺を縦にし、半分を画面外へ出す。§3.4 の
 * 「左右に抜けさせて断ち切りにする」を縦方向に読み替えたもの。
 *
 * 幅は vw で持つ。中身が入る量(画面内に残る幅)を 8vw に固定している。
 * 本文の列(max-w-6xl = 1152px)の外側に収まる必要があるため、余白が
 * 足りる 2xl(1536px)以上でのみ出す。1536px では画面内に 123px 入り、
 * 本文の左端 232px には届かない。
 *
 * 動くのは筆だけ(§4.1)。表示時に上から下へ描かれ、一度きりで止まる。
 * prefers-reduced-motion では最終状態をそのまま出す。
 */
type Side = { color: LabelColor; side: "left" | "right" };

const SIDES: Side[] = [
  { color: "teal", side: "left" },
  { color: "indigo", side: "right" },
];

export default function SideBrushes() {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    /*
     * 初期描画のあとにクラスを付ける。付けた状態で最初に描くと
     * アニメーションの開始位置が飛ばされることがあるため。
     *
     * rAF だけに頼らないこと。バックグラウンドのタブでは rAF が
     * 止まるため、それだけだとマスクが掛かったまま筆が出てこない。
     * タイマーと併用し、先に来たほうで確定させる。
     */
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setDrawn(true);
    };
    const raf = requestAnimationFrame(show);
    const timer = setTimeout(show, 120);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {SIDES.map(({ color, side }) => {
        const asset = LABEL_ASSETS[color];
        return (
          <div
            key={side}
            className={`absolute top-1/2 hidden h-[86%] w-[22vw] -translate-y-1/2 2xl:block ${
              side === "left" ? "-left-[14vw]" : "-right-[14vw]"
            } brush-reveal-y${drawn ? " is-drawn" : ""}`}
          >
            {/*
              回転の footprint を親が持ち、中の画像は元の向きのまま
              中央で回す。こうしないと回転後の大きさをレイアウトが
              知らず、幅の計算が合わなくなる。
            */}
            <Image
              src={asset.src}
              alt=""
              width={asset.width}
              height={asset.height}
              sizes="60vh"
              className="absolute left-1/2 top-1/2 h-auto w-[86vh] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90"
              style={{ opacity: 0.34 }}
            />
          </div>
        );
      })}
    </div>
  );
}
