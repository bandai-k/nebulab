import Card from "@/components/ui/Card";

const painPoints = [
  {
    icon: "📍",
    text: "Googleマップの情報が古いまま放置してる",
  },
  {
    icon: "📱",
    text: "お店のホームページがない、またはスマホで見づらい",
  },
  {
    icon: "📸",
    text: "SNSの更新が面倒で続かない",
  },
  {
    icon: "📞",
    text: "予約の電話対応に時間を取られる",
  },
  {
    icon: "🌏",
    text: "外国人のお客さんへの対応が不安",
  },
  {
    icon: "📊",
    text: "毎月の売上管理を手作業でやっている",
  },
];

export default function PainPoints() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-16">
      <h2 className="text-lg font-semibold text-[#3d2f24]">
        こんなお悩みありませんか？
      </h2>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {painPoints.map((item) => (
          <Card key={item.text} className="flex items-start gap-3 p-5">
            <span className="text-2xl" aria-hidden="true">
              {item.icon}
            </span>
            <p className="text-sm leading-6 text-[#3d2f24]">{item.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
