"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/gtag";
import { BRAND } from "@/constants/brand";

type SubmitState = "idle" | "sending" | "fallback" | "rate_limited" | "invalid";
type ApplicantType = "corp" | "sole" | "individual";

const APPLICANT_TYPES: { value: ApplicantType; label: string }[] = [
  { value: "corp", label: "法人" },
  { value: "sole", label: "個人事業主" },
  { value: "individual", label: "個人" },
];

const TOOL_TYPES: { value: string; label: string }[] = [
  { value: "gas", label: "スプレッドシート＋Google Apps Script" },
  { value: "webapp", label: "Webアプリ（ログイン・データベースあり）" },
  { value: "unknown", label: "わからない" },
];

const BUILT_WITH_OPTIONS = ["ChatGPT", "Claude", "Cursor", "その他"];

const TOOL_SIZE_OPTIONS: { value: string; label: string }[] = [
  { value: "single", label: "画面1つ" },
  { value: "few", label: "2〜5" },
  { value: "many", label: "それ以上" },
  { value: "unknown", label: "わからない" },
];

/** 番号つきの選択肢ボタン(問診票の3択・単一選択に共通)。 */
function OptionButton({
  selected,
  onClick,
  children,
  className = "",
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`min-h-[48px] rounded-md border px-4 py-3 text-sm font-medium transition ${
        selected
          ? "border-accent bg-accent text-white"
          : "border-rule bg-surface text-ink hover:border-accent"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export default function ReviewForm() {
  const router = useRouter();
  const [state, setState] = useState<SubmitState>("idle");
  const [applicantType, setApplicantType] = useState<ApplicantType | "">("");
  const [toolType, setToolType] = useState("");
  const [builtWith, setBuiltWith] = useState("");
  const [toolSize, setToolSize] = useState("");

  const needsCompanyName = applicantType === "corp" || applicantType === "sole";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      applicantType,
      companyName: needsCompanyName ? String(data.get("companyName") ?? "") : "",
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      toolSummary: String(data.get("toolSummary") ?? ""),
      toolType,
      builtWith,
      toolSize,
      concerns: String(data.get("concerns") ?? ""),
      agree: data.get("agree") === "on",
    };

    if (
      !payload.applicantType ||
      (needsCompanyName && !payload.companyName) ||
      !payload.name ||
      !payload.email ||
      !payload.toolSummary ||
      !payload.toolType ||
      !payload.agree
    ) {
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
    <form onSubmit={handleSubmit} className="mt-10 space-y-8" noValidate>
      <div className="rounded-lg border-2 border-accent bg-surface p-5 text-sm leading-7 text-ink md:p-6">
        <strong className="text-base font-bold text-accent">
          お願い：コードや鍵・パスワード・顧客データを、このフォームには貼らないでください。
        </strong>
        <br />
        受け渡しは、問診票の後にメールで個別にご案内します。
      </div>

      {/* 1. 申し込む方 */}
      <div>
        <p className="text-sm font-semibold text-ink">
          1. 申し込む方<span className="ml-2 rounded bg-accent px-2 py-0.5 text-[11px] text-white">必須</span>
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {APPLICANT_TYPES.map((t) => (
            <OptionButton
              key={t.value}
              selected={applicantType === t.value}
              onClick={() => setApplicantType(t.value)}
            >
              {t.label}
            </OptionButton>
          ))}
        </div>
      </div>

      {/* 2. 会社名・屋号(法人・個人事業主のときだけ) */}
      {needsCompanyName && (
        <label className="block">
          <span className="text-sm font-semibold text-ink">
            2. 会社名・屋号
            <span className="ml-2 rounded bg-accent px-2 py-0.5 text-[11px] text-white">必須</span>
          </span>
          <input
            name="companyName"
            required
            className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
            placeholder="屋号・会社名"
          />
        </label>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {/* 3. お名前 */}
        <label className="block">
          <span className="text-sm font-semibold text-ink">
            3. お名前<span className="ml-2 rounded bg-accent px-2 py-0.5 text-[11px] text-white">必須</span>
          </span>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
          />
        </label>

        {/* 4. メールアドレス */}
        <label className="block">
          <span className="text-sm font-semibold text-ink">
            4. メールアドレス
            <span className="ml-2 rounded bg-accent px-2 py-0.5 text-[11px] text-white">必須</span>
          </span>
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
            placeholder="you@example.com"
          />
        </label>

        {/* 5. 電話番号 */}
        <label className="block">
          <span className="text-sm font-semibold text-ink">
            5. 電話番号<span className="ml-2 rounded bg-surface px-2 py-0.5 text-[11px] text-ink-sub">任意</span>
          </span>
          <input
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
          />
        </label>
      </div>

      {/* 6. 何のツールですか */}
      <label className="block">
        <span className="text-sm font-semibold text-ink">
          6. 何のツールですか
          <span className="ml-2 rounded bg-accent px-2 py-0.5 text-[11px] text-white">必須</span>
        </span>
        <input
          name="toolSummary"
          required
          maxLength={200}
          className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
          placeholder="例：問い合わせを整理するツール"
        />
      </label>

      {/* 7. どんな形ですか */}
      <div>
        <p className="text-sm font-semibold text-ink">
          7. どんな形ですか<span className="ml-2 rounded bg-accent px-2 py-0.5 text-[11px] text-white">必須</span>
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {TOOL_TYPES.map((t) => (
            <OptionButton
              key={t.value}
              selected={toolType === t.value}
              onClick={() => setToolType(t.value)}
              className="w-full text-left"
            >
              {t.label}
            </OptionButton>
          ))}
        </div>
      </div>

      {/* 8. 何で作りましたか */}
      <div>
        <p className="text-sm font-semibold text-ink">
          8. 何で作りましたか<span className="ml-2 rounded bg-surface px-2 py-0.5 text-[11px] text-ink-sub">任意</span>
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {BUILT_WITH_OPTIONS.map((label) => (
            <OptionButton
              key={label}
              selected={builtWith === label}
              onClick={() => setBuiltWith(builtWith === label ? "" : label)}
            >
              {label}
            </OptionButton>
          ))}
        </div>
      </div>

      {/* 9. 大きさ */}
      <div>
        <p className="text-sm font-semibold text-ink">
          9. 大きさ<span className="ml-2 rounded bg-surface px-2 py-0.5 text-[11px] text-ink-sub">任意</span>
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {TOOL_SIZE_OPTIONS.map((t) => (
            <OptionButton
              key={t.value}
              selected={toolSize === t.value}
              onClick={() => setToolSize(toolSize === t.value ? "" : t.value)}
            >
              {t.label}
            </OptionButton>
          ))}
        </div>
      </div>

      {/* 10. 気になっていること */}
      <label className="block">
        <span className="text-sm font-semibold text-ink">
          10. 気になっていること<span className="ml-2 rounded bg-surface px-2 py-0.5 text-[11px] text-ink-sub">任意</span>
        </span>
        <textarea
          name="concerns"
          rows={4}
          maxLength={600}
          className="mt-2 w-full rounded-md border border-rule bg-surface px-4 py-3 text-sm text-ink outline-none focus:border-accent"
          placeholder="例：鍵の置き場所が不安／社外の人も使っている"
        />
        <span className="mt-2 block text-xs text-ink-sub">コードや鍵・パスワードは書かないでください</span>
      </label>

      <label className="flex items-start gap-3 text-sm leading-7 text-ink-sub">
        <input type="checkbox" name="agree" required className="mt-1 size-4 shrink-0 accent-accent" />
        <span>
          見た範囲で見つかったことの報告であり、安全の保証ではないことに同意します。また、お預かりしたコードの扱い（秘密保持・削除）についてご案内する内容に同意します。
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
        {state === "sending" ? "送信しています…" : "問診票を送る"}
      </button>
    </form>
  );
}
