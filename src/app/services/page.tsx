import Image from "next/image";
import Link from "next/link";

import Services from "@/components/sections/Services";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";

const highlights = [
  {
    title: "Web / App 開発",
    desc: "要件の言語化から設計・実装・運用まで。小さく出して学び、次の改善につなげます。",
    image: "/images/service-dev.png",
  },
  {
    title: "プロダクト改善・内製化支援",
    desc: "仕様整理、UI/UX、開発フロー設計。現場で回る形に整え、継続できる体制へ。",
    image: "/images/service-improve.png",
  },
  {
    title: "Place / Work Design",
    desc: "拠点（NRT-LOFT）での実践知をベースに、働き方・環境設計の意思決定を支援。",
    image: "/images/service-place.png",
  },
];

const steps = [
  { title: "ヒアリング", desc: "現状・制約・目的を整理し、最短ルートを定義します。" },
  { title: "小さく試作", desc: "最小単位で形にして、仮説を早く検証します。" },
  { title: "運用に落とす", desc: "継続できる手順・仕組み・役割に整えます。" },
  { title: "改善を循環", desc: "学びを次へ。再現性のある改善サイクルを作ります。" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
      {/* Hero */}
      <section className="mx-auto w-full max-w-6xl px-6 pt-12">
        <div className="flex flex-wrap gap-2">
          <Pill>小さく作る</Pill>
          <Pill>早く試す</Pill>
          <Pill>継続して育てる</Pill>
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              事業内容
              <br />
              プロダクトと場づくりの両輪で、前に進める。
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-sm leading-7 text-[#5c4d3c] sm:text-base">
              NEBULABは、要件の手前から一緒に考え、最小の一歩を確実に積み上げます。
              <span className="font-semibold text-[#3D2F24]">
                「作る」だけでなく「整える」まで。
              </span>
              現場に残る仕組みを設計し、改善が回る状態をつくります。
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button as="a" href="/contact" variant="primary">
                相談する
              </Button>
              <Button as="a" href="/#projects" variant="secondary">
                取り組みを見る
              </Button>
            </div>

            <div className="mt-6 text-xs text-[#8b7355]">
              ※ まずは短い壁打ちからでもOK。状況に合わせて提案します。
            </div>
          </div>

          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[#ddc9a3] bg-white/60">
            <Image
              src="/images/services-hero.png"
              alt="NEBULABの作業風景"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Highlights (画像付き) */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-4 pt-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-lg font-semibold text-[#3d2f24]">提供領域</h2>
          <span className="text-xs text-[#8b7355]">必要なところから柔軟に</span>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {highlights.map((h) => (
            <Card key={h.title} className="overflow-hidden p-0">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={h.image}
                  alt={h.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold">{h.title}</div>
                <p className="mt-2 text-sm leading-6 text-[#5c4d3c]">{h.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 既存の Services セクション（カード群） */}
      <Services />

      {/* Process */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-2">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-lg font-semibold text-[#3d2f24]">進め方</h2>
          <span className="text-xs text-[#8b7355]">小さく、確実に</span>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-4">
          {steps.map((s, i) => (
            <Card key={s.title} className="p-5">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#ddc9a3] bg-[#fef3d9] text-xs font-semibold text-[#3d2f24]">
                  {i + 1}
                </span>
                <div className="text-sm font-semibold">{s.title}</div>
              </div>
              <p className="mt-3 text-sm leading-6 text-[#5c4d3c]">{s.desc}</p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="mt-6 p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="text-sm font-semibold">まずは状況を聞かせてください</div>
              <p className="mt-2 text-sm leading-6 text-[#5c4d3c]">
                目的と制約が分かれば、最短の一手を提案できます。
                <br className="hidden sm:block" />
                「これって相談していい？」も歓迎です。
              </p>
            </div>

            <div className="flex gap-3">
              <Button as="a" href="/contact" variant="primary">
                お問い合わせ
              </Button>
              <Link
                href="/news"
                className="inline-flex h-10 items-center justify-center rounded-full border border-[#ddc9a3] bg-white px-5 text-sm font-medium text-[#3d2f24] transition hover:bg-[#fef3d9]"
              >
                お知らせを見る
              </Link>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
