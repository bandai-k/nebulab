import Card from "@/components/ui/Card";

const promises = [
  "専門用語は使いません。全部かんたんな言葉で説明します。",
  "必要ないものは「必要ない」と正直にお伝えします。",
  "成田エリアなら直接お伺いできます。",
  "小さなことでも気軽に相談できる「お店のIT担当」を目指します。",
];

export default function Promises() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-16">
      <h2 className="text-lg font-semibold text-[#3d2f24]">
        NEBULABのお約束
      </h2>

      <Card className="mt-5 p-8">
        <ul className="space-y-4">
          {promises.map((text) => (
            <li key={text} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-sm leading-6 text-[#3d2f24]">{text}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
}
