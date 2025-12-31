import Link from "next/link";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-16 pt-10">
      <div className="flex flex-wrap gap-2">
        <Pill>開発スタジオ</Pill>
        <Pill>小さく早くつくる</Pill>
        <Pill>拠点づくり / コミュニティ</Pill>
      </div>

      <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        つくる。整える。
        <br className="hidden sm:block" />
        そして、循環させる。
      </h1>

      <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-neutral-200 sm:text-lg">
        NEBULAB(ネビュラボ)は、プロダクト開発を軸に、
        <span className="text-white">「働く場所」や「学びの場」</span>
        も含めた環境づくりを行う小さなラボです。
        拠点(NRT-LOFT)運営をはじめ、集まる・試す・改善する――その循環を設計します。
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button as="a" href="#contact" variant="primary">
          相談する
        </Button>

        <Button as="a" href="https://nrt-loft.jp" variant="secondary">
          NRT-LOFTを見る
        </Button>
      </div>
    </section>
  );
}
