import Image from "next/image";

/**
 * ヒーロー右側の端末クラスタ(指示書 §5.2)。
 * 暗い背景の中で画面だけが光って見えるよう、枠は罫線1本に留めて
 * 画面側にだけ淡いグローを置く。
 *
 * スマートフォンの2枚は App Store 公開済みアプリの実キャプチャ。
 * ノートPC は該当する画面キャプチャがまだ無いためプレースホルダ。
 * 指示書 §10-5(キャプチャの解像度)が未確定のまま残っている。
 */
export default function HeroDevices() {
  return (
    <div className="relative mx-auto aspect-4/3 w-full max-w-[520px]" aria-hidden="true">
      {/* ノートPC — 実キャプチャ待ちのプレースホルダ */}
      <div className="absolute left-0 top-[8%] w-[78%] -rotate-6">
        <div className="rounded-md border border-rule bg-surface p-[3px] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]">
          <div className="flex aspect-16/10 items-center justify-center rounded-sm bg-linear-to-br from-[#1a2429] to-[#11181c]">
            <span className="font-mono text-[9px] tracking-[0.28em] text-ink-sub/70">
              CAPTURE PENDING
            </span>
          </div>
        </div>
        {/* 底面のヒンジ */}
        <div className="mx-auto h-[6px] w-[108%] -translate-x-[4%] rounded-b-md border-x border-b border-rule bg-surface" />
      </div>

      {/* スマートフォン 2台 — 公開済みアプリの実画面 */}
      <Phone
        src="/apps/midorikko/01_home.png"
        className="absolute bottom-0 left-[34%] w-[27%] rotate-3"
      />
      <Phone
        src="/apps/garage-techo/shot-01.webp"
        className="absolute bottom-[12%] right-0 w-[24%] rotate-9"
      />
    </div>
  );
}

function Phone({ src, className }: { src: string; className: string }) {
  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-[14px] border border-rule bg-surface p-[3px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.95)]">
        <div className="relative aspect-[1320/2868] overflow-hidden rounded-[11px]">
          <Image
            src={src}
            alt=""
            fill
            sizes="140px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
