import type { Metadata } from "next";
import Link from "next/link";
import { BRAND } from "@/constants/brand";

export const metadata: Metadata = {
  title: "送信ありがとうございます — Nebulab",
  robots: { index: false, follow: false },
  alternates: { canonical: "/review/thanks" },
};

export default function ReviewThanksPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20 text-center md:px-10 md:py-28">
      <h1 className="text-2xl font-bold tracking-tight text-ink md:text-[32px]">
        お申込み、ありがとうございます。
      </h1>
      <p className="mt-6 text-base leading-[1.9] text-ink-sub">
        1営業日以内に、担当よりメールでご連絡します。
        ご入力いただいたメールアドレスに、受付の控えもお送りしていますのでご確認ください。
      </p>
      <p className="mt-6 text-sm leading-7 text-ink-sub">
        しばらく経ってもメールが届かない場合は、お手数ですが{" "}
        <a href={BRAND.emailMailto} className="underline hover:text-accent">
          {BRAND.email}
        </a>{" "}
        までご連絡ください（迷惑メールフォルダもご確認ください）。
      </p>
      <Link
        href="/review"
        className="mt-10 inline-flex min-h-[52px] items-center justify-center rounded-lg border-2 border-accent px-8 text-sm font-semibold text-accent transition hover:bg-surface"
      >
        点検の内容ページに戻る
      </Link>
    </main>
  );
}
