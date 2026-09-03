import LineArt from "@/components/decor/LineArt";

/**
 * NRT LOFT への導線(指示書 §5.7)。
 * このブロックのみ背景を #F7F6F1 にして強い対比をつける。線画は濃い線で描く。
 *
 * 線画は建物の外観(成田・花崎町の旧釣具屋2階)。
 * デザイン案にあるコワーキングスペースの内装は使わない。
 */
export default function SisterMedia() {
  return (
    <section className="relative overflow-hidden bg-invert-ground text-invert-ink">
      <LineArt
        name="nrt-loft-building"
        sizes="(min-width: 768px) 55vw, 110vw"
        className="pointer-events-none absolute -right-[12%] bottom-0 h-full w-[95%] md:right-0 md:w-[48%]"
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24 md:px-10 md:py-32">
        <div className="max-w-xl">
          <p className="font-mono text-[10px] tracking-[0.4em] text-invert-ink/70">
            SISTER MEDIA
          </p>
          <p className="mt-5 font-mono text-sm tracking-[0.3em] text-invert-ink">
            NRT LOFT
          </p>

          <h2 className="mt-10 font-display text-xl font-light leading-[1.9] tracking-[0.06em] text-invert-ink md:text-2xl">
            欲しいものが無かったので、自分で作ることにした。
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-[2.1] text-invert-ink/75">
            {"AIを使って「自分の困りごとを解決する小さな仕組み」をつくる過程を発信しています。非エンジニア向けのメディアです。"}
          </p>

          <a
            href="https://www.nrt-loft.jp"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-12 inline-block border border-invert-ink/35 px-8 py-3 font-mono text-[11px] tracking-[0.25em] text-invert-ink transition-colors hover:border-invert-ink focus-visible:outline-invert-ink"
          >
            NRT LOFT を見る ↗
          </a>
        </div>
      </div>
    </section>
  );
}
