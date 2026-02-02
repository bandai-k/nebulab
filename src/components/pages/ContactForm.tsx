"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BRAND } from "@/constants/brand";

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

/** topic に応じたプリフィル設定 */
const TOPIC_PREFILLS: Record<string, { subject: string; message: string }> = {
    meo: {
        subject: "【無料診断】Googleマップ集客（MEO）の相談",
        message: `以下を分かる範囲で教えてください。

・店舗名/屋号：
・住所（任意）：
・GoogleマップURL（任意）：
・WebサイトURL（任意）：
・目的（電話/経路/予約/問い合わせ）：
・現状の悩み：
・希望（初期整備のみ / 初期整備＋運用）：
`,
    },
};

export default function ContactForm() {
    const searchParams = useSearchParams();
    const topic = searchParams.get("topic");
    const prefill = topic ? TOPIC_PREFILLS[topic] : null;

    const [form, setForm] = useState<FormState>(initial);

    // topic に応じてメッセージをプリフィル
    useEffect(() => {
        if (prefill && !form.message) {
            setForm((prev) => ({ ...prev, message: prefill.message }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prefill]);

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
        const subjectText = prefill?.subject ?? "【NEBULAB】お問い合わせ";
        const subject = encodeURIComponent(subjectText);
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
        return `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
    }, [form, prefill]);

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
                    ※ボタンを押すとメールアプリが起動します
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
