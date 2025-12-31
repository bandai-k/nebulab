import Link from "next/link";
import Card from "@/components/ui/Card";

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-6 pb-16">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-lg font-semibold text-[#3d2f24]">NEBULABについて</h2>
      </div>

      <Card className="mt-4 p-8">
        <h3 className="text-xl font-bold text-[#3d2f24]">
          つくる。整える。そして、循環させる。
        </h3>
        <p className="mt-4 leading-relaxed text-[#5c4d3c]">
          NEBULABは、プロダクト開発を軸にしながら、
          「働く場所」や「学びの場」も含めた環境づくりを行う小さなラボです。
          <br />
          <br />
          成田の拠点「NRT-LOFT」を運営し、集まる・試す・改善するという循環を設計しています。
          小さくはじめて、確かに積み上げる。それが私たちのスタイルです。
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="font-semibold text-[#3d2f24]">私たちの強み</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#5c4d3c]">
              <li className="flex items-start gap-2">
                <span className="text-[#b87333]">•</span>
                <span>最短距離での実装と運用設計</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b87333]">•</span>
                <span>小さく回せる仕組みづくり</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b87333]">•</span>
                <span>拠点運営で得た現場のノウハウ</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#3d2f24]">大切にしていること</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#5c4d3c]">
              <li className="flex items-start gap-2">
                <span className="text-[#b87333]">•</span>
                <span>要件が固まる前から一緒に考える</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b87333]">•</span>
                <span>現状と目的を聞いて最短ルートを決める</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b87333]">•</span>
                <span>つながりの質を守る運用</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/about"
            className="text-sm text-[#b87333] hover:underline"
          >
            詳しく見る →
          </Link>
        </div>
      </Card>
    </section>
  );
}
