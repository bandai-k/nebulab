import Link from "next/link";
import Card from "@/components/ui/Card";
import { BRAND } from "@/constants/brand";
import {
  VISION_TAGLINE,
  SLOGAN,
  WHAT_WE_DO,
  HOW_WE_THINK,
} from "@/constants/mvv";

export default function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl px-6 pb-20">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-lg font-semibold tracking-tight text-[#3d2f24]">
          {BRAND.name}について
        </h2>
      </div>

      <Card className="mt-6 p-10">
        {/* Philosophy */}
        <div>
          <p className="text-xs font-medium tracking-widest text-[#b87333]">
            PHILOSOPHY
          </p>
          <h3 className="mt-2 text-2xl font-semibold leading-snug text-[#3d2f24]">
            {VISION_TAGLINE.split("。").slice(0, 2).join("。")}。
            <br />
            {VISION_TAGLINE.split("。").slice(2).join("。")}
          </h3>
        </div>

        {/* Description */}
        <div className="mt-6 max-w-3xl text-[15px] leading-7 text-[#5c4d3c]">
          <p>
            {BRAND.name}は、プロダクト開発を軸にしながら、
            <span className="font-medium text-[#3d2f24]">
              「働く場所」や「学びの場」
            </span>
            も含めた環境づくりを行う小さなラボです。
          </p>
          <p className="mt-4">
            成田の拠点「NRT-LOFT」を運営し、集まる・試す・改善するという循環を、
            現場から設計しています。
            {SLOGAN}
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
              {WHAT_WE_DO.map((item) => (
                <li key={item}>・{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-wide text-[#3d2f24]">
              HOW WE THINK
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[#5c4d3c]">
              {HOW_WE_THINK.map((item) => (
                <li key={item}>・{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-block text-sm font-medium text-[#b87333] hover:underline"
          >
            {BRAND.name}の考え方を詳しく見る →
          </Link>
        </div>
      </Card>
    </section>
  );
}
