import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/decor/SectionHeading";

export const metadata: Metadata = {
  title: "デモ",
  description: "Naviのデモ体験。完成品ではなく、体験の核だけを公開しています。",
  alternates: { canonical: "/demo" },
};

/**
 * Navi のデモ導線(指示書 v2 §5.3 のプロダクトカードから来る)。
 *
 * 旧実装は framer-motion で各要素をフェードインさせていたが、§4.4 により
 * 文字への動きは禁止のため取り除き、サーバーコンポーネントに戻した。
 *
 * デモ本体は未公開。リンク先が決まるまでボタンは出さない
 * (押せないボタンを置くと、動かないのか壊れているのか分からないため)。
 */
export default function DemoPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-32 md:px-10 md:pt-40">
      <SectionHeading
        level="h1"
        label="DEMO"
        heading="Navi のデモ"
        color="indigo"
        lead="このデモは完成品ではありません。体験の核だけを公開しています。"
      />

      <div className="panel mt-12 p-8 md:p-10">
        <p className="text-sm leading-[2.1] text-ink-sub">
          {"公開の準備ができ次第、ここから体験いただけるようにします。時期が決まりましたらお知らせします。"}
        </p>
      </div>

      <div className="mt-12">
        <Link href="/projects/navi" className="btn btn-ghost">
          Navi について
        </Link>
      </div>
    </main>
  );
}
