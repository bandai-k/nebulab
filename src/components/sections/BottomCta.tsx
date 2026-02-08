import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export default function BottomCta() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-20">
      <Card className="p-8 text-center">
        <h2 className="text-lg font-semibold text-[#3d2f24]">
          まずはお気軽にご連絡ください
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#5c4d3c]">
          「こんなこと聞いていいのかな？」も大歓迎です。
        </p>

        <div className="mt-6 flex justify-center">
          <Button as="a" href="/contact" variant="primary">
            無料で相談する
          </Button>
        </div>
      </Card>
    </section>
  );
}
