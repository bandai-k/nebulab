import Image from "next/image";
import SectionHeading from "@/components/decor/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * NRT LOFT への導線(指示書 v2 §5.7)。
 *
 * 文面は §5.7 の指定をそのまま使う。ここを書き換えないこと。
 * (生成AIに任せると旧サイトのコワーキングスペースの説明に戻る)
 *
 * 見出しは他セクションと同じ SectionHeading(label-* を背景に敷く形)に揃えている。
 * 以前は label-* を区切り演出(BrushField)としても使っていたが、
 * 見出し以外での使用は他セクションに無いパターンだったため外した。
 *
 * 画像は NRT LOFT サイトの実キャプチャ(data/projects.ts と同じ素材)。
 * カンプのコワーキングスペース内装写真・成田の線画は使わない。
 */
export default function SisterMedia() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32 lg:px-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] md:items-center md:gap-16">
          <Reveal>
            <SectionHeading
              label="SISTER MEDIA"
              heading="欲しいものが無かったので、自分で作ることにした。"
              color="amber"
            />

            <p className="mt-8 text-sm font-medium tracking-[0.28em] text-ink">
              NRT LOFT
            </p>

            <p className="mt-8 max-w-lg text-sm leading-[2.1] text-ink-sub">
              {"AIを使って「自分の困りごとを解決する小さな仕組み」をつくる過程を発信しています。非エンジニア向けのメディアです。"}
            </p>

            <a
              href="https://www.nrt-loft.jp"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-outline mt-12"
            >
              NRT LOFT を見る ↗
            </a>
          </Reveal>

          <Reveal delay={100}>
            <div className="panel relative aspect-video overflow-hidden">
              <Image
                src="/projects/nrt-loft.png"
                alt="NRT LOFT のサイト画面"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
