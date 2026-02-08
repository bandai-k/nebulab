import Link from "next/link";
import Card from "@/components/ui/Card";

export default function NrtLoftIntro() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-16">
      <h2 className="text-lg font-semibold text-[#3d2f24]">
        NRT LOFTについて
      </h2>

      <Card className="mt-5 p-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          {/* テキスト */}
          <div>
            <p className="text-sm leading-7 text-[#5c4d3c]">
              成田の旧釣具屋2階にある、NEBULABの拠点。
              <br />
              DIYでリノベーションした小さなスペースで、
              <br />
              相談・打ち合わせ・少人数ワークショップを行っています。
            </p>

            <div className="mt-5">
              <Link
                href="/nrt-loft"
                className="text-sm font-medium text-[#b87333] hover:underline"
              >
                NRT LOFTについて詳しく見る →
              </Link>
            </div>
          </div>

          {/* 写真プレースホルダー */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-[#ddc9a3] bg-[#fef3d9]">
            <div className="flex h-full items-center justify-center text-sm text-[#8b7355]">
              写真は近日追加予定
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
