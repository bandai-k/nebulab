import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { BRAND } from "@/constants/brand";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl px-6 pb-16"
    >
      <Card className="p-6">
        <h2 className="text-lg font-semibold text-[#3d2f24]">Contact</h2>
        <p className="mt-2 text-sm leading-6 text-[#5c4d3c]">
          まずは要件が固まっていなくても大丈夫です。現状と目的を聞いて、最短ルートを一緒に決めます。
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button as="a" href={BRAND.emailMailto} variant="primary">
            {BRAND.email} にメール
          </Button>
          <Button as="a" href="/contact" variant="secondary">
            フォームから相談する
          </Button>
        </div>
      </Card>
    </section>
  );
}
