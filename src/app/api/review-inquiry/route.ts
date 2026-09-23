import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type InquiryPayload = {
  companyName: string;
  name: string;
  email: string;
  phone: string;
  toolType: string;
  builtWith: string;
  toolSize: string;
  concerns: string;
  agree: boolean;
};

const TOOL_TYPE_LABEL: Record<string, string> = {
  gas: "Google Apps Script",
  webapp: "Webアプリ(ログイン・データベースあり)",
  unknown: "わからない",
};

const TOOL_SIZE_LABEL: Record<string, string> = {
  single: "画面1つ",
  few: "2〜5",
  many: "それ以上",
  unknown: "わからない",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * 簡単な連投防止。同一IPからの短時間の連続送信を弾く。
 * サーバーレスの再起動でリセットされる前提の、あくまで簡易な対策
 * (CAPTCHA は入れない方針。LP仕様書 4章)。
 */
const RATE_LIMIT_WINDOW_MS = 30_000;
const lastSubmissionByIp = new Map<string, number>();

function getClientIp(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]!.trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const last = lastSubmissionByIp.get(ip);
  lastSubmissionByIp.set(ip, now);
  if (lastSubmissionByIp.size > 5000) {
    // メモリを無限に増やさないための簡単な掃除。
    lastSubmissionByIp.clear();
  }
  return last !== undefined && now - last < RATE_LIMIT_WINDOW_MS;
}

function buildNotificationText(p: InquiryPayload): string {
  return [
    `会社名: ${p.companyName}`,
    `お名前: ${p.name}`,
    `メール: ${p.email}`,
    `電話番号: ${p.phone || "(未記入)"}`,
    `ツールの種類: ${TOOL_TYPE_LABEL[p.toolType] ?? p.toolType}`,
    `何で作ったか: ${p.builtWith || "(未記入)"}`,
    `ツールの大きさ: ${p.toolSize ? (TOOL_SIZE_LABEL[p.toolSize] ?? p.toolSize) : "(未記入)"}`,
    `気になっていること:\n${p.concerns || "(未記入)"}`,
  ].join("\n");
}

function buildAutoReplyText(p: InquiryPayload): string {
  return [
    `${p.companyName} ${p.name} 様`,
    "",
    "このたびは、AIで作ったツールの安全点検にお申込みいただき、ありがとうございます。",
    "以下の内容で承りました。1営業日以内に、担当より折り返しご連絡いたします。",
    "",
    "――――――――――",
    buildNotificationText(p),
    "――――――――――",
    "",
    "コードや画面の共有方法は、この後のメールで個別にご案内します。",
    "お心当たりのないお申込みの場合は、恐れ入りますがこのメールを破棄してください。",
    "",
    "Nebulab合同会社",
  ].join("\n");
}

export async function POST(req: NextRequest) {
  let body: Partial<InquiryPayload>;
  try {
    body = (await req.json()) as Partial<InquiryPayload>;
  } catch {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const payload: InquiryPayload = {
    companyName: String(body.companyName ?? "").slice(0, 200),
    name: String(body.name ?? "").slice(0, 200),
    email: String(body.email ?? "").slice(0, 320),
    phone: String(body.phone ?? "").slice(0, 50),
    toolType: String(body.toolType ?? "").slice(0, 50),
    builtWith: String(body.builtWith ?? "").slice(0, 200),
    toolSize: String(body.toolSize ?? "").slice(0, 50),
    concerns: String(body.concerns ?? "").slice(0, 2000),
    agree: Boolean(body.agree),
  };

  if (
    !payload.companyName ||
    !payload.name ||
    !payload.email ||
    !EMAIL_RE.test(payload.email) ||
    !payload.toolType ||
    !payload.agree
  ) {
    return NextResponse.json({ ok: false, reason: "invalid" }, { status: 400 });
  }

  const ip = getClientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json({ ok: false, reason: "rate_limited" }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.REVIEW_INQUIRY_TO;
  const from = process.env.REVIEW_INQUIRY_FROM;

  if (!apiKey || !to || !from) {
    // 環境変数の設定漏れで問い合わせを落とさないため、500 にはしない。
    // 画面側は reason: "not_configured" を見て、メールでの連絡を案内する。
    console.error("review-inquiry: RESEND_API_KEY / REVIEW_INQUIRY_TO / REVIEW_INQUIRY_FROM が未設定です");
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 200 });
  }

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject: `[診断申込] ${payload.companyName} 様`,
      text: buildNotificationText(payload),
    });

    await resend.emails.send({
      from,
      to: payload.email,
      subject: "【受付】AIで作ったツールの安全点検のお申込みありがとうございます",
      text: buildAutoReplyText(payload),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("review-inquiry: メール送信に失敗しました", err);
    return NextResponse.json({ ok: false, reason: "send_failed" }, { status: 200 });
  }
}
