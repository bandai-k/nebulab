import Card from "@/components/ui/Card";
import type { Service } from "@/types";

type ServiceEx = Service & {
  points: string[];
  featured?: boolean;
  label?: string;
};

const services: ServiceEx[] = [
  {
    title: "Web / App 開発",
    desc: "Next.js / React / TypeScript を中心に、設計から実装、運用まで。要件に向き合い、最短距離でプロダクトを形にします。",
    points: ["要件整理〜設計", "実装・レビュー", "運用/改善ループ"],
    featured: true,
    label: "Core",
  },
  {
    title: "プロダクト改善・内製化支援",
    desc: "仕様整理、UI/UX、開発フロー設計まで含めた改善支援。小さく試し、継続的に回せる体制づくりを支えます。",
    points: ["仕様の棚卸し", "UI/UX改善", "開発フロー最適化"],
    label: "Improve",
  },
  {
    title: "Place / Work Design",
    desc: "実拠点（NRT-LOFT）での実践を通じて得た、働き方・環境設計の知見を、チームや現場に還元します。",
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

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {services.map((s) => (
          <Card
            key={s.title}
            variant="highlight"
            className={[
              "relative p-6",
              s.featured ? "ring-1 ring-[#b87333]/30" : "",
            ].join(" ")}
          >
            {/* ラベル */}
            {s.label && (
              <span className="absolute right-4 top-4 rounded-full border border-[#ddc9a3] bg-[#fff8e7] px-3 py-1 text-[11px] font-semibold text-[#8b7355]">
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
