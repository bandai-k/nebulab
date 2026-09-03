import type { Metadata } from "next";
import Link from "next/link";
import LineArt from "@/components/decor/LineArt";
import HeroDevices from "@/components/home/HeroDevices";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";
import CeoMessage from "@/components/home/CeoMessage";
import Partners from "@/components/home/Partners";
import SisterMedia from "@/components/home/SisterMedia";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      {/* ── Hero(指示書 §5.2): 左にコピー、右に端末。背景に成田の線画 ── */}
      <section className="relative overflow-hidden border-b border-cyber-border-dim">
        <LineArt
          name="airplane-clouds"
          priority
          sizes="(min-width: 1024px) 1600px, 200vw"
          className="pointer-events-none absolute -right-[18%] top-0 h-full w-[115%] md:-right-[6%] md:w-[80%]"
        />
        <div className="lineart-scrim-left" />

        <div className="relative mx-auto max-w-6xl px-5 md:px-10">
          <div className="grid items-center gap-16 py-24 md:py-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] lg:gap-16">
            <div>
              <p className="font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted">
                NEBULAB — NARITA, JP
              </p>

              <h1 className="mt-8 font-display text-[1.25rem] font-light leading-[1.85] tracking-[0.06em] text-cyber-text md:text-[1.45rem] xl:text-[1.7rem]">
                自社で開発し、自社で運用している。
                <br />
                だから、つくった後の話ができる。
              </h1>

              <p className="mt-8 max-w-md text-sm leading-[2.1] text-cyber-text-secondary md:text-[0.95rem]">
                {"受託開発と内製化支援に加えて、自分たちのプロダクトをつくり、日々使い、運用しています。設計だけでも実装だけでもなく、運用して初めて分かることまで含めてお渡しします。"}
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-xs bg-brass px-7 py-3 font-mono text-[11px] tracking-[0.25em] text-[#1a1508] transition-opacity hover:opacity-85"
                >
                  相談する
                </Link>
                <Link
                  href="/services"
                  className="rounded-xs border border-rule px-7 py-3 font-mono text-[11px] tracking-[0.25em] text-cyber-text-secondary transition-colors hover:border-cyber-text-secondary hover:text-cyber-text"
                >
                  事業内容
                </Link>
              </div>
            </div>

            <HeroDevices />
          </div>
        </div>
      </section>

      <Products />
      <Services />
      <CeoMessage />
      <Partners />
      <SisterMedia />
    </main>
  );
}
