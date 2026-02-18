import Image from "next/image";
import Button from "@/components/ui/Button";
import Pill from "@/components/ui/Pill";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-16 pt-10">
      <div className="flex flex-wrap gap-2">
        <Pill>成田エリア対応</Pill>
        <Pill>飲食店・小売店向け</Pill>
        <Pill>まずは無料相談</Pill>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            お店の「困った」を
            <br />
            ITの力で解決します
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-[#5c4d3c] sm:text-lg">
            成田エリアの飲食店・小売店・個人事業主のための
            <br className="hidden sm:block" />
            Web・IT支援サービス。
            <br className="hidden sm:block" />
            <span className="font-semibold text-[#3d2f24]">
              難しい専門用語は使いません。
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="/contact" variant="primary">
              無料で相談する
            </Button>

            <Button as="a" href="/services" variant="secondary">
              サービスを見る
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
