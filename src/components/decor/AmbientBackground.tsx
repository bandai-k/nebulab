/**
 * 全ページ共通の背景。
 *
 * RootLayout に1回だけ置き、viewport に対して固定(position: fixed)する。
 * ページ内を移動しても壁紙のように同じ位置に留まり、「全ページ共通」の
 * 印象を作る。pointer-events: none で操作は奪わない。本文コンテナは
 * layout.tsx 側で z-[1] を持つため、ここは z-0 に留める。
 *
 * 以前は水彩の筆素材9種を画面のあちこちに散らしていたが、依頼により
 * 1枚の背景画像に差し替えた。素材は四辺に色が寄り、中央が淡く抜けた
 * 「額縁」の構図なので、本文が来る中央は自然に読みやすい面になる。
 *
 * 縦横で素材を出し分ける理由:
 *   支給素材は縦長(941x1672 / 比 0.56)。これを横長の画面に cover で
 *   敷くと、上下が大きく切り取られて中央の淡い部分しか残らず、
 *   色がまったく見えなくなる(1568x731 で確認済み)。
 *   横長のときは同じ素材を90度回した版を使う。抽象的な水彩なので、
 *   回しても額縁としての構図は保たれる。
 *
 * next/image ではなく <picture> を使っている。orientation で出し分けるには
 * ブラウザ側に選ばせるのが確実で、素材はすでに WebP に変換済みのため
 * 最適化を挟む利点がない。
 *
 * 本文の可読性は不透明度で担保している。素材そのままだと中央の淡い面でも
 * 本文とのコントラストが落ちるため、地の色(--color-ground)の上に薄く
 * 重ねている。濃さを変えるときは、本文が乗る中央部で測り直すこと。
 */
export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <picture>
        <source
          media="(orientation: landscape)"
          srcSet="/assets/watercolor-backdrop-landscape.webp"
        />
        <img
          src="/assets/watercolor-backdrop.webp"
          alt=""
          className="h-full w-full object-cover opacity-[0.28] landscape:opacity-[0.45]"
          decoding="async"
        />
      </picture>

      {/*
        横長のときだけ、本文が乗る中央を地の色で覆い直す(四辺の色は残す)。
        素材が額縁の構図なので中央はもともと淡いが、それでも 11px の
        補助色ラベル(--color-ink-sub)は AA を割る。この色は地の色の上で
        4.54:1 と、もともと余裕がないため。幕全体を薄くすると四辺の色まで
        死ぬので、中央だけ抜いている。

        縦長(スマホ)では入れない。本文が画面幅いっぱいに広がるので
        「色を置ける外側」が無く、この楕円だと画面のほぼ全部を覆って
        背景が消えてしまう。縦長側は代わりに不透明度を落として調整する。
      */}
      <div className="absolute inset-0 hidden landscape:block bg-[radial-gradient(ellipse_78%_72%_at_50%_50%,var(--color-ground)_0%,var(--color-ground)_42%,rgba(255,248,231,0.72)_66%,rgba(255,248,231,0)_88%)]" />
    </div>
  );
}
