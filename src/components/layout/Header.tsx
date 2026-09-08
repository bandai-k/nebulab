"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BRAND } from "@/constants/brand";
import { HEADER_NAV, type HeaderNavItem } from "@/constants/navigation";

/**
 * その項目が現在地かどうか。
 * 配下のページ(/about/mvv など)でも親の項目を現在地として扱う。
 */
function isCurrent(item: HeaderNavItem, pathname: string): boolean {
  const paths = [item.href, ...(item.match ?? [])];
  return paths.some((base) =>
    base === "/" ? pathname === "/" : pathname === base || pathname.startsWith(`${base}/`),
  );
}

/** ここより上ではヘッダーを必ず出す(px)。ヘッダーの高さ+少しの余裕。 */
const ALWAYS_VISIBLE_ABOVE = 96;

/**
 * これ未満の移動は無視する(px)。指の震えや慣性の揺り戻しで
 * ヘッダーがちらつくのを防ぐ。
 */
const MIN_SCROLL_DELTA = 8;

/**
 * 「ページ相当」とみなすスクロール領域の高さ(ビューポート比)。
 * これ以上の高さを持つ縦スクロール領域だけをヘッダーの出し入れに使う。
 * 小さなリストや横スクロールを拾うと、ちょっと動かしただけで
 * ヘッダーが出入りしてしまう。
 */
const PAGE_LIKE_RATIO = 0.6;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const pathname = usePathname() ?? "/";

  /*
   * スクロール監視から見るための、メニューの開閉状態。
   * 監視は一度だけ張って以後張り替えないので、state を直接見ると
   * 初回の値のまま固まる。ref で今の値を渡す。
   */
  const menuOpenRef = useRef(false);
  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  /*
   * 下へスクロールしたら引っ込め、上へ動かしたら戻す。画面の上端付近
   * (ALWAYS_VISIBLE_ABOVE より上)では常に出す。
   *
   * ページの位置は window.scrollY で見る。globals.css が html に
   * overflow-x: hidden を置いているためスクロールを持っているのは html 側だが、
   * その値は scrollingElement = html として window.scrollY にそのまま出る
   * (実測済み)。
   *
   * スクロールの出どころはページだけではない。/services は
   * .services-scroller(スナップ)と各 .services-section が独自の
   * スクロール領域を持ち、その中を送っている間は window.scrollY が動かない。
   * 要素の scroll イベントはバブルしないので、document で capture して拾う。
   * 位置は領域ごとに WeakMap で覚える。
   *
   * 拾うのは「ページ相当の大きさを持つ縦スクロール領域」だけ(PAGE_LIKE_RATIO)。
   *
   * 上端付近で常に出す判定だけは、内側の位置ではなくページの位置で見る。
   * 内側の領域が動いている時点で、ページは既に上端から離れている。
   *
   * scroll は連続で飛んでくるので、rAF で1フレーム1回に間引く。
   *
   * 動きを減らす設定のときは何もしない。ヘッダーが出たり入ったりすること
   * 自体が動きなので、止めるのではなく常時表示にする(§4.5 の考え方)。
   */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    type Scroller = Document | HTMLElement;

    const lastTops = new WeakMap<Scroller, number>();
    let ticking = false;
    let pending: Scroller | null = null;

    /*
     * ページの基準値だけは監視を始めた時点で入れておく。最初のイベントで
     * 基準を取る作りにすると、読み込み後の1回目のスクロールが「基準を
     * 決めるだけ」で終わり、ヘッダーが引っ込まない(実測済み)。
     * 内側のスクロール領域は数が読めないので、最初のイベントで基準を取る。
     */
    lastTops.set(document, window.scrollY);

    const topOf = (target: Scroller) =>
      target === document ? window.scrollY : (target as HTMLElement).scrollTop;

    const update = () => {
      ticking = false;
      const target = pending;
      pending = null;
      if (!target) return;

      const y = topOf(target);
      const delta = y - (lastTops.get(target) ?? y);
      if (Math.abs(delta) < MIN_SCROLL_DELTA) return;
      lastTops.set(target, y);
      setHiddenByScroll(
        window.scrollY > ALWAYS_VISIBLE_ABOVE && delta > 0,
      );
    };

    const onScroll = (event: Event) => {
      /*
       * メニューを開いている間は一切反応しない。
       * メニューのオーバーレイ自身が「ページ相当の縦スクロール領域」の
       * 条件を満たすため、中身を送っただけで「下へスクロールした」と
       * 判定されてしまう。表示自体は headerHidden 側で打ち消しているが、
       * ここで止めておかないと、メニューを閉じた瞬間にヘッダーが消える。
       */
      if (menuOpenRef.current) return;

      const node = event.target;
      let target: Scroller;

      if (node === document) {
        target = document;
      } else if (node instanceof HTMLElement) {
        // 小さな領域・横スクロールは見ない
        if (node.clientHeight < window.innerHeight * PAGE_LIKE_RATIO) return;
        if (node.scrollHeight <= node.clientHeight + 4) return;
        target = node;
      } else {
        return;
      }

      // 最初の1回は基準を覚えるだけ(差分 0 として扱う)
      if (!lastTops.has(target)) lastTops.set(target, topOf(target));

      pending = target;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    document.addEventListener("scroll", onScroll, {
      capture: true,
      passive: true,
    });
    return () =>
      document.removeEventListener("scroll", onScroll, { capture: true });
  }, []);

  /*
   * /services だけはヘッダーを引っ込めない。
   *
   * このページはヘッダーの実測高さ(--svc-header-h)を差し引いた
   * calc(100dvh - var(--svc-header-h)) でスクローラーとセクションの高さを
   * 決めている。ヘッダーが消えてもその差し引きは残るため、上端にヘッダー
   * ぶんの空きができ、セクションが画面の高さに収まらなくなる
   * (実測: ヘッダー(89px)を隠すと上に73pxの空き、下に16pxの余り)。
   * 高さを動的に変えると今度はスクロール中にセクションが伸縮して跳ねる。
   */
  const keepHeaderVisible = pathname === "/services";

  /*
   * メニューを開いている間は引っ込めない。閉じるボタンごと消えてしまう。
   * state を書き換えるのではなく、ここで打ち消す(効果の中で setState すると
   * 連鎖レンダリングになるため)。
   */
  const headerHidden = hiddenByScroll && !menuOpen && !keepHeaderVisible;

  /*
   * メニューを開いている間、背後のページをスクロールさせない。
   *
   * 押さえるのは body ではなく html。globals.css が html に
   * overflow-x: hidden を置いているため、スクロールを持っているのは
   * html(ビューポート)側で、body に overflow: hidden を付けても
   * 背後は普通にスクロールしてしまう。
   *
   * スクロールバーが消える分の幅は padding で埋める。モバイルの
   * オーバーレイスクロールバーでは 0 になるので何も起きない。
   */
  useEffect(() => {
    if (!menuOpen) return;

    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    const prevPaddingRight = root.style.paddingRight;
    const scrollbar = window.innerWidth - root.clientWidth;

    root.style.overflow = "hidden";
    if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`;

    return () => {
      root.style.overflow = prevOverflow;
      root.style.paddingRight = prevPaddingRight;
    };
  }, [menuOpen]);

  return (
    <>
      {/*
        背景は不透明にする。以前は bg-ground/95 + backdrop-blur だったが、
        95% 不透明ではぼかしはほとんど見えず、合成レイヤーを1枚増やすだけに
        なっていた。ヒーローの筆がヘッダーの下を通るため、透けない方が
        見え方も安定する。
      */}
      <header
        className={`fixed inset-x-0 top-0 z-[60] border-b border-rule bg-ground${
          headerHidden ? " header-hidden" : ""
        }`}
      >
        {/*
          ロゴは画面左上に密着させる(左の余白を取らない)。
          grid-cols-[1fr_auto_1fr] にすることで、ロゴと右のボタンの幅に
          関係なくナビが画面の中央に来る。
        */}
        {/*
          コンテナには左右のパディングを付けない。片側だけに余白を置くと
          グリッドの中心が画面中心からずれ、ナビが寄って見える。
          右端の余白は問い合わせボタンとハンバーガー側で取る。
        */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center py-3 md:py-4">
          <Link
            href="/"
            className="justify-self-start pl-6 md:pl-12 transition-opacity hover:opacity-80"
            aria-label={BRAND.name}
          >
            <Image
              src="/brand/wordmark.webp"
              alt={BRAND.name}
              width={1942}
              height={663}
              priority
              className="h-12 w-auto md:h-14"
            />
          </Link>

          {/* Desktop nav (centered) */}
          <nav className="col-start-2 hidden items-center justify-self-center gap-8 lg:flex">
            {HEADER_NAV.map((item) => {
              const current = isCurrent(item, pathname);
              return (
              <div
                key={item.key}
                className="group relative inline-flex items-center"
              >
                {/*
                  現在地とホバーは同じ表現(アクセント色＋下線)にする。§3.2 の
                  「アクティブ状態はアクセント1色」に従う。下線は border で
                  引き、既定を transparent にしておくことで、状態が変わっても
                  文字が動かないようにしている。
                */}
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`inline-block border-b-2 pb-1.5 text-sm font-medium uppercase leading-none tracking-[0.18em] transition-colors ${
                    current
                      ? "border-accent text-accent"
                      : "border-transparent text-ink-sub group-hover:border-accent group-hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-200 group-hover:visible group-hover:opacity-100">
                    <ul className="min-w-[260px] border border-rule bg-surface py-2 shadow-[0_8px_24px_rgba(28,26,23,0.10)]">
                      {item.children.map((child) => (
                        <li
                          key={child.key}
                          className="border-b border-rule last:border-b-0"
                        >
                          <Link
                            href={child.href}
                            className="block px-5 py-3 text-xs font-medium tracking-[0.08em] text-ink-sub transition-colors hover:bg-accent/5 hover:text-ink"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              );
            })}
          </nav>

          {/* 問い合わせボタン(右)。§5.1 のとおりアクセントの塗り＋メールアイコン。 */}
          <Link
            href="/contact"
            className="btn btn-primary btn-sm col-start-3 mr-6 hidden justify-self-end md:mr-12 lg:mr-16 lg:inline-flex"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <rect x="1.5" y="3.5" width="13" height="9" rx="1" />
              <path d="M1.8 4.2 8 8.8l6.2-4.6" />
            </svg>
            お問い合わせ
          </Link>

          {/* Mobile hamburger (right) */}
          <button
            type="button"
            className="col-start-3 mr-4 flex h-10 w-10 flex-col items-center justify-center gap-1.5 justify-self-end lg:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                menuOpen ? "translate-y-[4.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 ${
                menuOpen ? "-translate-y-[4.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-ground pb-12 pt-24 lg:hidden">
          <nav className="flex flex-col items-center gap-8 px-5 py-6">
            {HEADER_NAV.map((item) => {
              const current = isCurrent(item, pathname);
              return (
              <div key={item.key} className="text-center">
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`inline-block border-b-2 pb-1.5 text-sm font-medium uppercase tracking-[0.22em] transition-colors ${
                    current
                      ? "border-accent text-accent"
                      : "border-transparent text-ink hover:border-accent hover:text-accent"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-4 space-y-3">
                    {item.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          href={child.href}
                          className="text-[11px] tracking-[0.12em] text-ink-sub transition-colors hover:text-accent"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
