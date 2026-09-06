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
 * 本文の可読性を最優先しつつ、BrushField の label-* よりは薄い
 * 0.12〜0.26 で存在感を持たせる。pointer-events: none で操作も奪わない。
 * 本文コンテナは layout.tsx 側で z-[1] を持つため、ここは z-0 に留める。
 *
 * 依頼により、素材(ambientAssets.ts の9種)を全て使い、角度も変えつつ、
 * 数もさらに増やしている(同じ素材を別の場所・縮尺・角度で使い回す)。
 *
 * 画面外へ逃がすときの注意(依頼により調整): 筆の素材はどれも縁が
 * 滲んでちぎれたような形をしているが、はみ出させる量が大きすぎると
 * 「まだ色が乗っている途中」で四角く切れてしまい、筆に見えなくなる。
 * ここでは -right-[6%] 程度に留め、素材自身の薄い縁が画面端の
 * 内側に収まるようにしている。
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
        className="absolute -left-[8%] -top-[6%] w-[46vw] max-w-[440px] opacity-[0.24]"
      />

      {/* 右上: ピンクの横帯、大きく傾ける */}
      <Image
        src={AMBIENT["pink-band"].src}
        alt=""
        width={AMBIENT["pink-band"].width}
        height={AMBIENT["pink-band"].height}
        className="absolute -right-[6%] top-[5%] hidden w-[36vw] max-w-[500px] -rotate-12 opacity-[0.20] md:block"
      />

      {/* 画面上部中央寄り: 淡いピンクの帯を大きく斜めに */}
      <Image
        src={AMBIENT["pink-soft"].src}
        alt=""
        width={AMBIENT["pink-soft"].width}
        height={AMBIENT["pink-soft"].height}
        className="absolute left-[4%] top-[2%] hidden w-[28vw] max-w-[380px] rotate-[16deg] opacity-[0.16] md:block"
      />

      {/* 左端中央: ターコイズの帯を縦に回して立てる */}
      <div className="absolute -left-[10%] top-[34%] hidden h-[46vh] w-[22vw] max-w-[320px] lg:block">
        <Image
          src={AMBIENT["teal-band"].src}
          alt=""
          width={AMBIENT["teal-band"].width}
          height={AMBIENT["teal-band"].height}
          className="absolute left-1/2 top-1/2 h-auto w-[62vh] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90 opacity-[0.18]"
        />
      </div>

      {/* 右側中央よりやや下: 琥珀の帯を強めに傾けて */}
      <Image
        src={AMBIENT["amber-band"].src}
        alt=""
        width={AMBIENT["amber-band"].width}
        height={AMBIENT["amber-band"].height}
        className="absolute -right-[6%] top-[52%] hidden w-[30vw] max-w-[420px] rotate-[-24deg] opacity-[0.16] md:block"
      />

      {/* 右下: 琥珀の縦長ストローク、少し傾ける */}
      <Image
        src={AMBIENT["amber-vertical"].src}
        alt=""
        width={AMBIENT["amber-vertical"].width}
        height={AMBIENT["amber-vertical"].height}
        className="absolute -right-[4%] bottom-[-4%] w-[22vw] max-w-[280px] rotate-12 opacity-[0.21]"
      />

      {/* 左下: ターコイズの縦長ストローク、逆向きに傾ける */}
      <Image
        src={AMBIENT["teal-vertical"].src}
        alt=""
        width={AMBIENT["teal-vertical"].width}
        height={AMBIENT["teal-vertical"].height}
        className="absolute -left-[5%] bottom-[1%] hidden w-[19vw] max-w-[250px] -rotate-[10deg] opacity-[0.18] md:block"
      />

      {/* 画面中央下寄り: 淡いピンクの斜めストローク */}
      <Image
        src={AMBIENT["pink-diagonal"].src}
        alt=""
        width={AMBIENT["pink-diagonal"].width}
        height={AMBIENT["pink-diagonal"].height}
        className="absolute left-1/2 top-[80%] hidden w-[34vw] max-w-[420px] -translate-x-1/2 -rotate-6 opacity-[0.14] lg:block"
      />

      {/* 右下寄り: 藤色のシミ、大きく傾けて奥行きを足す */}
      <Image
        src={AMBIENT["lavender-blotch"].src}
        alt=""
        width={AMBIENT["lavender-blotch"].width}
        height={AMBIENT["lavender-blotch"].height}
        className="absolute -right-[4%] bottom-[8%] hidden w-[26vw] max-w-[360px] rotate-[28deg] opacity-[0.14] lg:block"
      />

      {/*
        以下は同じ素材の再利用による追加配置(依頼により数を増やす)。
        既存の配置と重ならない位置・別の角度・縮尺にして単なる繰り返しに
        見えないようにしている。
      */}

      {/* 左上よりさらに下、控えめに: 藤色のシミを小さく */}
      <Image
        src={AMBIENT["lavender-blotch"].src}
        alt=""
        width={AMBIENT["lavender-blotch"].width}
        height={AMBIENT["lavender-blotch"].height}
        className="absolute -left-[6%] top-[16%] hidden w-[18vw] max-w-[240px] rotate-[-14deg] opacity-[0.12] xl:block"
      />

      {/* 画面右上寄り、ヘッダー付近: 淡いピンクの帯を小さく差し込む */}
      <Image
        src={AMBIENT["pink-soft"].src}
        alt=""
        width={AMBIENT["pink-soft"].width}
        height={AMBIENT["pink-soft"].height}
        className="absolute -right-[5%] top-[24%] hidden w-[20vw] max-w-[280px] -rotate-[30deg] opacity-[0.13] xl:block"
      />

      {/* 画面中央左寄り下部: 琥珀の帯を大きく寝かせる */}
      <Image
        src={AMBIENT["amber-band"].src}
        alt=""
        width={AMBIENT["amber-band"].width}
        height={AMBIENT["amber-band"].height}
        className="absolute left-[8%] bottom-[4%] hidden w-[24vw] max-w-[320px] rotate-[8deg] opacity-[0.12] xl:block"
      />
    </div>
  );
}
