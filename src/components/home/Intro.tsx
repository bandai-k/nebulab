"use client";

import { useEffect, useState } from "react";

/**
 * トップページのイントロ(オープニング)。
 *
 * 流れ:
 *   1. 「小さく始めて、」が1文字ずつ打たれる
 *   2. 少し間を置いて「無限に広がる。」が続く(読む順を作るため)
 *   3. コピーが引いたあと、ロゴマークが画面中央から回転しながら拡大し、
 *      広がるにつれて色が薄くなっていく
 *   4. 画面を覆う大きさになったところで幕を引き、トップページが現れる
 *
 * 動きの定義はすべて globals.css の .intro-* に置いている(§ カスタムクラスは
 * globals.css)。ここが持つのは「いつ外すか」だけ。
 *
 * ちらつきを出さないための約束:
 *   - 幕は SSR の HTML に最初から入れる。マウント後に足すと、
 *     一瞬トップページが見えてからイントロが被さる。
 *   - 2回目以降(sessionStorage)と prefers-reduced-motion は、
 *     描画前に同期スクリプトで消す(下の INTRO_STATE_SCRIPT)。
 *     React の効果で消すと、その1フレームだけ幕が見えてしまう。
 *   - 再生するときも、同じスクリプトが描画前に html[data-intro="playing"]
 *     を立てる。これで CSS 側がヘッダーを隠す。効果まで待つと、
 *     ヘッダーが1フレーム見えてしまう。
 *   - JS が無い環境では <noscript> で消す。幕が residual に残らないようにする。
 */

/** イントロ全体の尺(ms)。globals.css の .intro-* の指定と揃えること。 */
const INTRO_DURATION = 4350;

/**
 * キャッチコピー。1文字ずつ出すので、globals.css 側で
 * 「1行の文字数 × 1文字あたりの間隔」が尺に収まるようにしている。
 * 行を増やすときや文字数を大きく変えるときは、あちらの時刻も見直すこと。
 */
const COPY_LINES = ["小さく始めて、", "無限に広がる。"];

/**
 * スキップ操作を受け付けるまでの待ち時間(ms)。
 * 確認用ページで「再生」を押した指がそのまま skip として拾われるのを防ぐ。
 * 通常のページでも、読み込み直後の暴発を抑える意味がある。
 */
const SKIP_ARM_DELAY = 400;

const SESSION_KEY = "nebulab_intro_seen";

/**
 * 描画前に走らせる。html[data-intro] を "skip" か "playing" にする。
 *   skip    … 2回目以降 / 動きを減らす設定。CSS が幕を display:none にする
 *   playing … これから再生する。CSS がヘッダーを隠す
 */
const INTRO_STATE_SCRIPT = `
try {
  var skip = sessionStorage.getItem(${JSON.stringify(SESSION_KEY)}) ||
             matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.dataset.intro = skip ? "skip" : "playing";
} catch (e) {
  /* プライベートモード等で sessionStorage が読めないときは、普通に再生する */
  document.documentElement.dataset.intro = "playing";
}
`;

type Props = {
  /**
   * 確認用ページ(/preview/intro)から使うときに立てる。
   * 「1セッション1回」の判定を通さず、毎回そのまま再生する。
   * 再生済みの印も残さないので、本番のトップページの挙動に影響しない。
   */
  preview?: boolean;
};

export default function Intro({ preview = false }: Props) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    /*
     * 上のスクリプトが既に判断している。ここで読み直さない(判断を二重に持たない)。
     * 幕は CSS 側で既に消えているので、あとは DOM から外すだけ。効果の本体で
     * 直接 setState すると連鎖レンダリングになるため、コールバックに逃がす。
     */
    if (!preview && root.dataset.intro === "skip") {
      const skip = window.setTimeout(() => setDone(true), 0);
      return () => window.clearTimeout(skip);
    }

    if (!preview) {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* 保存できなくても再生自体は成立する */
      }
    }

    /*
     * 再生中は背後を動かさない。押さえるのは body ではなく html
     * (globals.css が html に overflow-x: hidden を置いているため、
     * スクロールを持っているのは html 側)。Header のメニューと同じ考え方。
     */
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    /*
     * 再生中の印。CSS 側がこれを見てヘッダーを隠す。通常の読み込みでは
     * 上のスクリプトが描画前に立てているので、ここは確認用ページ
     * (スクリプトを出していない)のための保険。
     */
    const prevIntro = root.dataset.intro;
    root.dataset.intro = "playing";

    /*
     * 解除は「幕を外したとき」に行う。効果のクリーンアップだけに任せると、
     * <Intro /> は null を返したあともツリーに残り続けるためクリーンアップが
     * 走らず、ページがスクロールできないままになる。
     */
    let released = false;
    const release = () => {
      if (released) return;
      released = true;
      root.style.overflow = prevOverflow;
    };

    const finish = () => {
      release();
      if (preview) {
        // 確認用ページは記録を残さない。元の状態に戻すだけ。
        if (prevIntro === undefined) delete root.dataset.intro;
        else root.dataset.intro = prevIntro;
      } else {
        /*
         * 再生済みの印。クライアント遷移(/about → / など)で戻ってきたときは
         * 冒頭のスクリプトが走らないので、sessionStorage だけでは判定できない。
         * ここで立てておくと、次にマウントされたときに上の分岐で拾える。
         * CSS 側の :root[data-intro="skip"] にも効くので、1フレームも出ない。
         */
        root.dataset.intro = "skip";
      }
      setDone(true);
    };

    const timer = window.setTimeout(finish, INTRO_DURATION);

    // 見飽きた人がすぐ抜けられるように。ただし暴発しないよう少し待ってから。
    let detach = () => {};
    const arm = window.setTimeout(() => {
      window.addEventListener("pointerdown", finish);
      window.addEventListener("keydown", finish);
      detach = () => {
        window.removeEventListener("pointerdown", finish);
        window.removeEventListener("keydown", finish);
      };
    }, SKIP_ARM_DELAY);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(arm);
      detach();
      release();
      // 途中でアンマウントされても、ヘッダーが隠れたままにならないようにする
      if (root.dataset.intro === "playing") {
        if (preview && prevIntro === undefined) delete root.dataset.intro;
        else root.dataset.intro = preview ? prevIntro ?? "skip" : "skip";
      }
    };
  }, [preview]);

  if (done) return null;

  return (
    <>
      <div
        className={preview ? "intro intro-preview" : "intro"}
        aria-hidden="true"
      >
        <p className="intro-copy">
          {COPY_LINES.map((line) => (
            <span className="intro-copy-line" key={line}>
              {/*
                1文字ずつ出すため、文字単位に包む。--i(何文字目か)を渡し、
                出る時刻の計算は globals.css 側でやる。
                スプレッドで分けているのはサロゲートペア対策(split("") だと
                絵文字や一部の漢字が壊れる)。
              */}
              {[...line].map((char, i) => (
                <span
                  key={i}
                  className="intro-copy-char"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </p>

        {/*
          next/image は使わない。ここは装飾で、しかも幕が最初の描画に
          入っている必要があるため、余計なラッパを挟まず素の <img> で出す。
          fetchPriority=high で、コピーを読んでいる間に取り切る。
        */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="intro-mark"
          src="/brand/mark.webp"
          alt=""
          width={448}
          height={448}
          fetchPriority="high"
          decoding="sync"
        />
      </div>

      {/* 確認用ページでは「1セッション1回」を判定しないので、どちらも要らない。 */}
      {!preview && (
        <>
          <script dangerouslySetInnerHTML={{ __html: INTRO_STATE_SCRIPT }} />
          <noscript>
            <style>{`.intro { display: none !important; }`}</style>
          </noscript>
        </>
      )}
    </>
  );
}
