import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl px-6 pb-16"
    >
      <Card className="p-6">
        <h2 className="text-lg font-semibold">Contact</h2>
        <p className="mt-2 text-sm leading-6 text-neutral-200">
          まずは要件が固まっていなくても大丈夫です。現状と目的を聞いて、最短ルートを一緒に決めます。
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button as="a" href="mailto:hello@nebulab.jp" variant="primary">
            hello@nebulab.jp にメール
          </Button>
          <Button as="a" href="#" variant="secondary">
            (準備中)問い合わせフォーム
          </Button>
        </div>
      </Card>
    </section>
  );
}
