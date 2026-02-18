import Card from "@/components/ui/Card";

const steps = [
  {
    title: "お問い合わせ",
    desc: "フォームまたはメールからお気軽にご連絡ください。",
    free: true,
  },
  {
    title: "ヒアリング",
    desc: "お店にお伺いして、困りごとを聞かせてください。",
    free: true,
  },
  {
    title: "ご提案・お見積り",
    desc: "必要なことだけを分かりやすくご説明します。",
    free: true,
  },
  {
    title: "作業開始",
    desc: "ご納得いただいてからスタートします。",
    free: false,
  },
  {
    title: "納品・サポート",
    desc: "使い方が分からなければいつでも聞いてください。",
    free: false,
  },
];

export default function Process() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-16">
      <h2 className="text-lg font-semibold text-[#3d2f24]">ご依頼の流れ</h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-5">
        {steps.map((s, i) => (
          <Card key={s.title} className="p-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[#ddc9a3] bg-[#fef3d9] text-xs font-semibold text-[#3d2f24]">
                {i + 1}
              </span>
              <div className="text-sm font-semibold">{s.title}</div>
            </div>

            {s.free && (
              <span className="mt-2 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                無料
              </span>
            )}

            <p className="mt-2 text-sm leading-6 text-[#5c4d3c]">{s.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
