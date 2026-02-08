import { Suspense } from "react";
import type { Metadata } from "next";
import ContactForm from "@/components/pages/ContactForm";
import { BRAND } from "@/constants/brand";

export const metadata: Metadata = {
    title: "お問い合わせ | NEBULAB - 成田エリアのお店のIT・Web支援",
    description:
        "NEBULABへのお問い合わせはこちら。Googleマップ集客、ホームページ制作、AI業務効率化など、お気軽にご相談ください。",
};

export default function ContactPage() {
    return (
        <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
            <div className="mx-auto w-full max-w-3xl px-6 py-16">
                <h1 className="text-2xl font-semibold tracking-tight">お問い合わせ</h1>
                <p className="mt-3 text-sm leading-6 text-[#5C4D3C]">
                    お返事は1〜2営業日以内にいたします。
                    <br />
                    「こんなこと聞いていいのかな？」も大歓迎です。
                </p>

                <p className="mt-4 text-sm text-[#8b7355]">
                    メールでも受け付けています：{" "}
                    <a
                        href={BRAND.emailMailto}
                        className="font-medium text-[#b87333] hover:underline"
                    >
                        {BRAND.email}
                    </a>
                </p>

                <div className="mt-8">
                    <Suspense fallback={<div className="text-sm text-[#8b7355]">読み込み中...</div>}>
                        <ContactForm />
                    </Suspense>
                </div>
            </div>
        </main>
    );
}
