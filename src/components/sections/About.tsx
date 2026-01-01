import Link from "next/link";
import Card from "@/components/ui/Card";

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-6 pb-20">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight text-[#3d2f24]">
          NEBULABについて
        </h2>
      </div>

      <Card className="mt-6 p-10">
        {/* Philosophy */}
        <div>
          <p className="text-xs font-medium tracking-widest text-[#b87333]">
            PHILOSOPHY
          </p>
          <h3 className="mt-2 text-2xl font-semibold leading-snug text-[#3d2f24]">
            つくる。整える。
            <br />
            そして、循環させる。
          </h3>
        </div>

        {/* Description */}
        <div className="mt-6 max-w-3xl text-[15px] leading-7 text-[#5c4d3c]">
          <p>
            NEBULABは、プロダクト開発を軸にしながら、
            <span className="font-medium text-[#3d2f24]">
              「働く場所」や「学びの場」
            </span>
            も含めた環境づくりを行う小さなラボです。
          </p>
          <p className="mt-4">
            成田の拠点「NRT-LOFT」を運営し、集まる・試す・改善するという循環を、
            現場から設計しています。
            小さくはじめて、確かに積み上げる。
            それが私たちのスタイルです。
          </p>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-[#e6d7b8]" />

        {/* Strengths & Values */}
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold tracking-wide text-[#3d2f24]">
              WHAT WE DO
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[#5c4d3c]">
              <li>・最短距離での実装と運用設計</li>
              <li>・小さく回せる仕組みづくり</li>
              <li>・拠点運営で得た現場ベースの知見</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-[#3d2f24]">
              HOW WE THINK
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[#5c4d3c]">
              <li>・要件が固まる前から一緒に考える</li>
              <li>・現状と目的を整理し、最短ルートを選ぶ</li>
              <li>・人と場が続くための運用を設計する</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-block text-sm font-medium text-[#b87333] hover:underline"
          >
            NEBULABの考え方を詳しく見る →
          </Link>
        </div>
      </Card>
    </section>
  );
}
