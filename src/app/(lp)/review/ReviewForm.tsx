"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/gtag";
import { BRAND } from "@/constants/brand";

type SubmitState = "idle" | "sending" | "fallback" | "rate_limited" | "invalid";

export default function ReviewForm() {
  const router = useRouter();
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      companyName: String(data.get("companyName") ?? ""),
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      toolType: String(data.get("toolType") ?? ""),
      builtWith: String(data.get("builtWith") ?? ""),
      toolSize: String(data.get("toolSize") ?? ""),
      concerns: String(data.get("concerns") ?? ""),
      agree: data.get("agree") === "on",
    };

    if (!payload.companyName || !payload.name || !payload.email || !payload.toolType || !payload.agree) {
      setState("invalid");
      return;
    }

    try {
      const res = await fetch("/api/review-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        reason?: string;
      };

      if (res.status === 429 || json.reason === "rate_limited") {
        setState("rate_limited");
        return;
      }

      if (!res.ok || !json.ok) {
        setState("fallback");
        return;
      }

      trackEvent("form_submit");
      router.push("/review/thanks");
    } catch {
      setState("fallback");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
      <div className="rounded-lg border-2 border-accent bg-surface p-5 text-sm leading-7 text-ink md:p-6">
        <strong className="text-base font-bold text-accent">
          お願い：コードや鍵・パスワード・顧客データを、このフォームには貼らないでください。
        </strong>
        <br />
        受け渡しは、お申込みの後にメールで個別にご案内します。
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="text-xs tracking-[0.15em] text-ink-sub">
            会社名<span className="ml-1 text-accent">必須</span>
          </span>
          <input
            name="companyName"
            required
            className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
            placeholder="個人事業主の方は屋号かお名前"
          />
        </label>

        <label className="block">
          <span className="text-xs tracking-[0.15em] text-ink-sub">
            お名前<span className="ml-1 text-accent">必須</span>
          </span>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
          />
        </label>

        <label className="block">
          <span className="text-xs tracking-[0.15em] text-ink-sub">
            メールアドレス<span className="ml-1 text-accent">必須</span>
          </span>
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
            placeholder="ご返信先です"
          />
        </label>

        <label className="block">
          <span className="text-xs tracking-[0.15em] text-ink-sub">電話番号（任意）</span>
          <input
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
          />
        </label>

        <label className="block">
          <span className="text-xs tracking-[0.15em] text-ink-sub">
            ツールの種類<span className="ml-1 text-accent">必須</span>
          </span>
          <select
            name="toolType"
            required
            defaultValue=""
            className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
          >
            <option value="" disabled>
              選択してください
            </option>
            <option value="gas">Google Apps Script</option>
            <option value="webapp">Webアプリ（ログイン・データベースあり）</option>
            <option value="unknown">わからない</option>
          </select>
        </label>

        <label className="block">
          <span className="text-xs tracking-[0.15em] text-ink-sub">何で作ったか（任意）</span>
          <input
            name="builtWith"
            className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
            placeholder="ChatGPT・Claude・Cursor など"
          />
        </label>

        <label className="block md:col-span-2">
          <span className="text-xs tracking-[0.15em] text-ink-sub">ツールの大きさ（任意）</span>
          <select
            name="toolSize"
            defaultValue=""
            className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
          >
            <option value="">選択してください</option>
            <option value="single">画面1つ</option>
            <option value="few">2〜5</option>
            <option value="many">それ以上</option>
            <option value="unknown">わからない</option>
          </select>
        </label>

        <label className="block md:col-span-2">
          <span className="text-xs tracking-[0.15em] text-ink-sub">気になっていること（任意）</span>
          <textarea
            name="concerns"
            rows={4}
            maxLength={600}
            className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
            placeholder="300字程度で。コードや鍵・パスワードは書かないでください"
          />
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm leading-7 text-ink-sub">
        <input type="checkbox" name="agree" required className="mt-1 size-4 shrink-0 accent-accent" />
        <span>
          診断は見た範囲の報告であり、安全の保証ではないことに同意します。また、お預かりしたコードの扱い（秘密保持・削除）についてご案内する内容に同意します。
          <span className="ml-1 text-accent">必須</span>
        </span>
      </label>

      {state === "invalid" && (
        <p className="text-sm text-red-700">必須項目が未入力です。ご確認ください。</p>
      )}
      {state === "rate_limited" && (
        <p className="text-sm text-red-700">
          短い時間に続けて送信されました。少し時間をおいて、もう一度お試しください。
        </p>
      )}
      {state === "fallback" && (
        <p className="text-sm text-red-700">
          恐れ入りますが、只今フォームからの送信を確認できませんでした。お手数ですが{" "}
          <a href={BRAND.emailMailto} className="underline hover:text-accent">
            {BRAND.email}
          </a>{" "}
          までメールでご連絡ください。
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex min-h-[56px] w-full items-center justify-center rounded-lg bg-accent px-8 text-base font-semibold tracking-wide text-white transition hover:brightness-110 disabled:opacity-70 sm:w-auto"
      >
        {state === "sending" ? "送信しています…" : "診断を申し込む（所要3分）"}
      </button>
    </form>
  );
}
