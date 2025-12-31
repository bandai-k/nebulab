import Card from "@/components/ui/Card";
import type { Service } from "@/types";

const services: Service[] = [
  {
    title: "Web / App 開発",
    desc: "Next.js / React / TypeScript。運用まで含めて最短距離で形にします。",
  },
  {
    title: "改善・内製化支援",
    desc: "仕様整理、運用設計、UI/UX、開発フローまで。小さく回せる仕組みへ。",
  },
  {
    title: "Place Design",
    desc: `拠点づくり(NRT-LOFT)で実験した"働きやすさ"を、現場に還元します。`,
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-5xl px-6 pb-16">
      <div className="grid gap-4 sm:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} variant="highlight" className="p-5">
            <div className="text-sm font-semibold">{service.title}</div>
            <p className="mt-2 text-sm leading-6 text-[#5c4d3c]">
              {service.desc}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
