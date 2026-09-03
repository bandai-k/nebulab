import Image from "next/image";
import { AMBIENT } from "./ambientAssets";

/**
 * 全ページ共通の背景装飾。
 *
 * RootLayout に1回だけ置き、viewport に対して固定(position: fixed)する。
 * ページ内を移動してもスコアケープの壁紙のように同じ位置に留まり、
 * 「全ページ共通」の印象を作る。
 *
 * 既存の BrushField(セクション単位、パララックスあり)とは役割が違うため
 * 別コンポーネントにしている。ここは動かさない・パララックスも付けない。
 *
 * 本文の可読性を最優先(不透明度は BrushField の label-* より薄い
 * 0.07〜0.14)。pointer-events: none で操作も奪わない。
 * 本文コンテナは layout.tsx 側で z-[1] を持つため、ここは z-0 に留める。
 */
export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* 左上: 紫のコーナー装飾 */}
      <Image
        src={AMBIENT["lavender-corner"].src}
        alt=""
        width={AMBIENT["lavender-corner"].width}
        height={AMBIENT["lavender-corner"].height}
        className="absolute -left-[10%] -top-[8%] w-[46vw] max-w-[420px] opacity-[0.14]"
      />

      {/* 右上: ピンクの横帯、軽く傾ける */}
      <Image
        src={AMBIENT["pink-band"].src}
        alt=""
        width={AMBIENT["pink-band"].width}
        height={AMBIENT["pink-band"].height}
        className="absolute -right-[14%] top-[6%] hidden w-[38vw] max-w-[520px] -rotate-6 opacity-[0.10] md:block"
      />

      {/* 左端中央: ターコイズの帯を縦に回して立てる */}
      <div className="absolute -left-[12%] top-[36%] hidden h-[46vh] w-[22vw] max-w-[320px] lg:block">
        <Image
          src={AMBIENT["teal-band"].src}
          alt=""
          width={AMBIENT["teal-band"].width}
          height={AMBIENT["teal-band"].height}
          className="absolute left-1/2 top-1/2 h-auto w-[62vh] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 opacity-[0.10]"
        />
      </div>

      {/* 右下: 琥珀の縦長ストローク */}
      <Image
        src={AMBIENT["amber-vertical"].src}
        alt=""
        width={AMBIENT["amber-vertical"].width}
        height={AMBIENT["amber-vertical"].height}
        className="absolute -right-[8%] bottom-[-6%] w-[24vw] max-w-[300px] opacity-[0.12]"
      />

      {/* 左下: ターコイズの縦長ストローク */}
      <Image
        src={AMBIENT["teal-vertical"].src}
        alt=""
        width={AMBIENT["teal-vertical"].width}
        height={AMBIENT["teal-vertical"].height}
        className="absolute -left-[9%] bottom-[2%] hidden w-[20vw] max-w-[260px] opacity-[0.10] md:block"
      />

      {/* 画面中央下寄り: 淡いピンクの斜めストローク。広い画面だけに控えめに */}
      <Image
        src={AMBIENT["pink-diagonal"].src}
        alt=""
        width={AMBIENT["pink-diagonal"].width}
        height={AMBIENT["pink-diagonal"].height}
        className="absolute left-1/2 top-[82%] hidden w-[36vw] max-w-[440px] -translate-x-1/2 rotate-3 opacity-[0.07] xl:block"
      />
    </div>
  );
}
