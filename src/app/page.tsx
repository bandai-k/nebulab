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
  /*
   * ヒーローの筆。端末の背後を通り、右へ抜ける。
   *
   * 本文は左半分にあるため、2段組になる lg 以上では文字の裏に回り込ませ
   * ない(§3.4)。左端を本文の右端のすぐ外(左から 55%)に置き、幅 46% で
   * 右へ 1% 抜けさせている。これ以上左へ寄せると本文に掛かる。
   *
   * どの幅でも層の下端がセクションの下端に揃うようにしている。下へ
   * ずらすとストロークの下端が切れて、筆に見えなくなる。
   * 1段組(lg 未満)でも端末が本文の下に来るため、これで本文とは
   * 130px 以上空く。
   *
   * 以前は左下にもう1層置いて重心を左へ振っていたが、ヒーローの高さ
   * (670〜830px)に対して層が高すぎ、インクの 6 割が切れていたため外した。
   * 広い画面の左右は SideBrushes が受け持つ。
   */
  {
    name: "hero-main",
    depth: DEPTH.mid,
    // 本文はこの層に重ならないため、§9 のコントラスト上限に縛られない。
    opacity: 0.75,
    anchor: "bottom",
    position: "-left-[8%] w-[116%] lg:right-auto lg:left-[55%] lg:w-[46%]",
    shiftClass: "translate-y-0 lg:-translate-y-[3%]",
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

        <div className="relative mx-auto w-full max-w-6xl px-6 md:px-12 lg:px-16">
          <div className="grid items-center gap-16 py-28 md:py-32 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
            <div>
              <p className="section-label">NEBULAB</p>

              <h1 className="mt-10 font-display text-[1.5rem] font-light leading-[1.75] tracking-[0.02em] text-ink md:text-[1.7rem] xl:text-[1.95rem]">
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

        {/*
          下へスクロールする導線。次のセクション(#services)へのリンクに
          しているので、JS が無くてもキーボードでも動く。
          §4.4 が常時ループするアニメーションを禁じているため、
          よくある上下に跳ねる動きは付けていない。

          1段組(lg 未満)では出さない。筆の帯が下端にあり、その上に
          文字を置くことになるため(§3.4)。狭い画面ではスクロールできる
          ことは自明でもある。
        */}
        <a
          href="#services"
          className="group absolute inset-x-0 bottom-8 mx-auto hidden w-fit flex-col items-center gap-3 text-[10px] font-medium tracking-[0.24em] text-ink-sub transition-colors hover:text-accent lg:flex"
        >
          SCROLL
          <span
            aria-hidden="true"
            className="block h-10 w-px bg-ink-sub transition-colors group-hover:bg-accent"
          />
        </a>
      </section>

      <Services />
      <Products />
      <CeoMessage />
      <Partners />
      <SisterMedia />
    </main>
  );
}
