import type { Metadata } from "next";
import Link from "next/link";
import BrushField from "@/components/decor/BrushField";
import SideBrushes from "@/components/decor/SideBrushes";
import { DEPTH } from "@/components/decor/brushAssets";
import HeroDevices from "@/components/home/HeroDevices";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";
import CeoMessage from "@/components/home/CeoMessage";
import Partners from "@/components/home/Partners";
import SisterMedia from "@/components/home/SisterMedia";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/*
 * ヒーローの筆(§5.2 / §3.4)。
 *
 * shift は層自身の高さに対する割合。素材(hero-main)は塊が上下
 * およそ 10%〜90% に入っているので、下端から大きくはみ出させて
 * 右下に重心を置き、右と下へ抜けさせている。
 * 不透明度はコントラストの実測に基づく(§9)。素材の濃い部分に
 * 本文色を乗せても AA を満たす範囲に収めている。
 *
 * 滲み出し(§4.3)は掛けない。初期表示に入っている面に掛けると
 * 読み込みと競合し、LCP になる要素が一瞬空になるため。
 */
const HERO_BRUSH = [
  {
    name: "hero-main",
    depth: DEPTH.mid,
    // 本文はこの層に重ならない(下の position で右へ逃がしている)ため、
    // §9 のコントラスト上限に縛られない。端末の周りで見えるだけの濃さを持たせる。
    opacity: 0.75,
    anchor: "bottom",
    shift: "22%",
    // 2段組になる lg 以上では右へ寄せ、左のコピーの裏に回り込ませない。
    // 1段組(lg 未満)では端末が本文の下に来るので、全幅の帯に戻す。
    position:
      "-left-[8%] w-[116%] lg:left-auto lg:-right-[6%] lg:w-[50%]",
    // 画面表示時にゆっくり落ち着かせる(§4.1 動くのは筆だけ)
    entrance: true,
  },
] as const;

export default function HomePage() {
  return (
    <main>
      {/*
        ── Hero(指示書 v2 §5.2)──
        左にコピーとボタン2つ、右に自社プロダクトの画面を映した端末。
        背景の筆(支給素材 hero-main)は右下から流し込み、右へ抜けさせる。

        帯を全幅に渡すと左のコピーの裏に回り込み、§3.4 の
        「カードやテキストブロックの背後に回り込ませない」に反するため、
        側を right に寄せている。端末が右(デスクトップ)/下(モバイル)に
        来るので、下端を基準にすると両方で同じ関係になる。
      */}
      <section className="relative flex min-h-[86svh] items-center overflow-hidden border-b border-rule md:min-h-[92svh]">
        <BrushField
          priority
          layers={[...HERO_BRUSH]}
          sizes="(min-width: 1024px) 62vw, 108vw"
        />
        {/* 画面左右の余白に縦の筆を置く(§3.4 を縦方向に読み替えたもの) */}
        <SideBrushes />

        <div className="relative mx-auto w-full max-w-6xl px-5 md:px-10">
          <div className="grid items-center gap-16 py-28 md:py-32 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
            <div>
              <p className="section-label">NEBULAB — NARITA, JP</p>

              <h1 className="mt-10 font-display text-[1.5rem] font-light leading-[1.75] tracking-[0.02em] text-ink md:text-[1.8rem] xl:text-[2.1rem]">
                自社で開発し、自社で運用している。
                <br />
                だから、つくった後の話ができる。
              </h1>

              <p className="mt-10 max-w-lg text-sm leading-[2.1] text-ink-sub md:text-base">
                {"受託開発と内製化支援に加えて、自分たちのプロダクトをつくり、日々使い、運用しています。設計だけでも実装だけでもなく、運用して初めて分かることまで含めてお渡しします。"}
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link href="/contact" className="btn btn-primary">
                  相談する
                </Link>
                <Link href="/services" className="btn btn-ghost">
                  事業内容
                </Link>
              </div>
            </div>

            <HeroDevices />
          </div>
        </div>
      </section>

      <Services />
      <Products />
      <CeoMessage />
      <Partners />
      <SisterMedia />
    </main>
  );
}
