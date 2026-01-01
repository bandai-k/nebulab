import Image from "next/image";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import { motion } from "framer-motion";


export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-16 pt-10">
      <div className="flex flex-wrap gap-2">
        <Pill>開発スタジオ</Pill>
        <Pill>小さく早くつくる</Pill>
        <Pill>拠点づくり / コミュニティ</Pill>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            つくる。整える。
            <br className="hidden sm:block" />
            そして、循環させる。
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-[#5c4d3c] sm:text-lg">
            NEBULAB(ネビュラボ)は、プロダクト開発を軸に、
            <span className="font-semibold text-[#3d2f24]">「働く場所」や「学びの場」</span>
            も含めた環境づくりを行う小さなラボです。
            拠点(NRT-LOFT)運営をはじめ、集まる・試す・改善する――その循環を設計します。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="contact" variant="primary">
              相談する
            </Button>

            <Button as="a" href="https://nrt-loft.jp" variant="secondary">
              NRT-LOFTを見る
            </Button>
          </div>
        </div>

        <motion.div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#ddc9a3] bg-white/60"
          initial={{ opacity: 0, y: 6 }}
          animate={{
            opacity: 1,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.6, ease: "easeOut" },
            y: {
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src="/images/hero.png"
            alt="NEBULABのワークスペース"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

      </div>
    </section>
  );
}
