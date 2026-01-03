"use client";

import { useMemo, useState } from "react";

type FormState = {
    name: string;
    email: string;
    company: string;
    message: string;
};

const initial: FormState = {
    name: "",
    email: "",
    company: "",
    message: "",
};

export default function ContactForm() {
    const [form, setForm] = useState<FormState>(initial);

    const canSend = useMemo(() => {
        if (!form.name.trim()) return false;
        if (!form.email.trim()) return false;
        if (!form.message.trim()) return false;
        return true;
    }, [form]);

    const onChange =
        (key: keyof FormState) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setForm((prev) => ({ ...prev, [key]: e.target.value }));
            };

    const mailtoHref = useMemo(() => {
        const subject = encodeURIComponent("【NEBULAB】お問い合わせ");
        const body = encodeURIComponent(
            [
                `お名前：${form.name}`,
                `会社名：${form.company}`,
                `メール：${form.email}`,
                "",
                "▼お問い合わせ内容",
                form.message,
            ].join("\n")
        );
        // ここをあなたの受信先に変える
        return `mailto:info@nebulab.jp?subject=${subject}&body=${body}`;
    }, [form]);

    return (
        <form className="grid gap-4">
            <Field label="お名前 *">
                <input
                    value={form.name}
                    onChange={onChange("name")}
                    className="w-full rounded-xl border border-[#3D2F24]/20 bg-[#FFF8E7] px-4 py-3 text-sm outline-none focus:border-[#3D2F24]/50"
                    placeholder="例）田中 太郎"
                />
            </Field>

            <Field label="メールアドレス *">
                <input
                    value={form.email}
                    onChange={onChange("email")}
                    className="w-full rounded-xl border border-[#3D2F24]/20 bg-[#FFF8E7] px-4 py-3 text-sm outline-none focus:border-[#3D2F24]/50"
                    placeholder="example@example.com"
                />
            </Field>

            <Field label="会社名（任意）">
                <input
                    value={form.company}
                    onChange={onChange("company")}
                    className="w-full rounded-xl border border-[#3D2F24]/20 bg-[#FFF8E7] px-4 py-3 text-sm outline-none focus:border-[#3D2F24]/50"
                />
            </Field>

            <Field label="お問い合わせ内容 *">
                <textarea
                    value={form.message}
                    onChange={onChange("message")}
                    rows={6}
                    className="w-full resize-none rounded-xl border border-[#3D2F24]/20 bg-[#FFF8E7] px-4 py-3 text-sm outline-none focus:border-[#3D2F24]/50"
                    placeholder="例）Webサイト制作の相談をしたい。要件は…"
                />
            </Field>

            <div className="mt-2 flex flex-wrap items-center gap-3">
                <a
                    href={canSend ? mailtoHref : undefined}
                    aria-disabled={!canSend}
                    className={[
                        "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold",
                        "bg-[#3D2F24] text-[#FFF8E7]",
                        canSend ? "hover:opacity-90" : "opacity-40 pointer-events-none",
                    ].join(" ")}
                >
                    メールで送る
                </a>

                <p className="text-xs text-[#5C4D3C]">
                    ※送信ボタンでメールアプリが起動します（バックエンド不要の暫定運用）
                </p>
            </div>
        </form>
    );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <label className="grid gap-2">
            <div className="text-sm font-semibold">{label}</div>
            {children}
        </label>
    );
}
