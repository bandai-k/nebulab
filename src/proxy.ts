import { NextRequest, NextResponse } from "next/server";

// アイアンテイル デザイン提案（未公開）。クライアント確認用に Basic 認証で限定公開する。
export const config = {
  matcher: ["/pt/irontales", "/pt/irontales/:path*"],
};

export function proxy(request: NextRequest) {
  const user = process.env.IRONTALES_AUTH_USER;
  const pass = process.env.IRONTALES_AUTH_PASS;

  if (!user || !pass) {
    return new NextResponse(
      "Basic auth is not configured (IRONTALES_AUTH_USER / IRONTALES_AUTH_PASS).",
      { status: 500 },
    );
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Basic ")) {
    const decoded = atob(authHeader.slice("Basic ".length));
    const separatorIndex = decoded.indexOf(":");
    const inputUser = decoded.slice(0, separatorIndex);
    const inputPass = decoded.slice(separatorIndex + 1);
    if (inputUser === user && inputPass === pass) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Showcase"' },
  });
}
