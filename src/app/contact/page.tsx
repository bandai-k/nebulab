import type { Metadata } from "next";
import SectionHeading from "@/components/decor/SectionHeading";
import { BRAND } from "@/constants/brand";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "Nebulab合同会社への連絡はメールでお願いします。",
  alternates: { canonical: "/contact" },
};

/**
 * 連絡先(指示書 v2 §5.1 の導線先)。メールリンクのみ。
 *
 * 旧実装は framer-motion で見出しと本文をフェードインさせていたが、
 * §4.4 により文字への動きは禁止のため取り除いた。動くのは背景の
 * 筆のストロークだけ(§4.1)。動きが無くなったのでサーバーコンポーネント
 * に戻し、クライアント側の JS を減らしている。
 */
export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 pb-24 pt-32 md:px-10 md:pt-40">
      <SectionHeading
        level="h1"
        label="CONTACT"
        heading="お問い合わせ"
        color="indigo"
        lead="ご連絡はメールでお願いします。内容を確認のうえ、担当より折り返しご連絡します。"
      />

      <div className="panel mt-12 p-8 md:p-10">
        <p className="text-[10px] font-medium tracking-[0.22em] text-ink-sub">
          EMAIL
        </p>
        <div className="mt-4">
          <a
            href={BRAND.emailMailto}
            className="font-display text-lg text-ink transition-colors hover:text-accent md:text-xl"
          >
            {BRAND.email}
          </a>
        </div>
      </div>
    </main>
  );
}
