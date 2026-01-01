import ContactForm from "@/components/pages/ContactForm";

export const metadata = {
    title: "Contact | NEBULAB",
};

export default function ContactPage() {
    return (
        <main className="min-h-dvh bg-[#FFF8E7] text-[#3D2F24]">
            <div className="mx-auto w-full max-w-3xl px-6 py-16">
                <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
                <p className="mt-3 text-sm leading-6 text-[#5C4D3C]">
                    ご相談内容を確認のうえ、2〜3営業日以内を目安にご連絡します。
                    お急ぎの場合は、要件の優先度も添えてください。
                </p>

                <div className="mt-8">
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}
