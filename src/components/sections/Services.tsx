import Card from "@/components/ui/Card";
import type { Service } from "@/types";

type ServiceEx = Service & {
  points: string[];
  featured?: boolean;
  label?: string;
};

const services: ServiceEx[] = [
  {
    title: "集客・導線の整備（Googleマップ / Web）",
    desc: "見つかる→選ばれる→行動される導線を整えます。Googleビジネスプロフィールの最適化や、サイト/予約/問い合わせの入口改善まで。",
    points: ["現状診断（15分）", "導線の改善案＋実装", "運用テンプレ（投稿/返信）"],
    featured: true,
    label: "Core",
  },
  {
    title: "プロダクト改善・内製化支援",
    desc: "仕様整理、UI/UX、運用設計まで含めた改善支援。小さく試し、継続的に回せる体制づくりを支えます。",
    points: ["仕様の棚卸し", "UI/UX改善", "運用が回る手順化"],
    label: "Improve",
  },
  {
    title: "必要な分だけ実装（Web / App）",
    desc: "開発は手段。目的と制約に合わせて、最小構成で実装します。小さく出して学び、改善につなげます。",
    points: ["最小構成で実装", "品質担保（レビュー/設計）", "改善サイクルに接続"],
    label: "Build",
  },
  {
    title: "Place / Work Design",
    desc: "拠点（NRT-LOFT）の実践知をベースに、働き方・環境設計の意思決定を支援します。",
    points: ["場の設計/運営", "学びの導線づくり", "コミュニティ支援"],
    label: "Place",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-5xl px-6 pb-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-[#8b7355]">
            SERVICES
          </p>
          <h2 className="mt-1 text-lg font-semibold text-[#3d2f24]">
            できること
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5c4d3c]">
            「作る」だけで終わらせず、運用と改善が回るところまで。
            必要なら“体制”や“場”の設計も一緒に整えます。
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Card
            key={s.title}
            variant="highlight"
            className={[
              "relative overflow-visible p-6",
              s.featured ? "ring-1 ring-[#b87333]/30" : "",
            ].join(" ")}
          >
            {/* ラベル（コーナーバッジ） */}
            {s.label && (
              <span className="absolute right-3 top-0 -translate-y-1/2 z-10 rounded-full border border-[#ddc9a3] bg-[#fff8e7] px-3 py-1 text-[11px] font-semibold text-[#8b7355] shadow-sm">
                {s.label}
              </span>
            )}

            <div className="text-sm font-semibold text-[#3d2f24]">{s.title}</div>
            <p className="mt-2 text-sm leading-6 text-[#5c4d3c]">{s.desc}</p>

            <div className="mt-4 rounded-xl border border-[#f0e1c0] bg-[#fff8e7] p-4">
              <div className="text-xs font-semibold tracking-[0.14em] text-[#8b7355]">
                WHAT YOU GET
              </div>
              <ul className="mt-3 space-y-2 text-sm text-[#5c4d3c]">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-[3px] h-2 w-2 rounded-full bg-[#b87333]" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
