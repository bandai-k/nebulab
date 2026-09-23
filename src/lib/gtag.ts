/**
 * GA4 へのイベント送信。`gtag` が読み込まれていない環境(ローカル開発・
 * 計測IDが未設定の本番)でも落ちないよう、存在確認をしてから呼ぶ。
 */
type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  try {
    window.gtag("event", name, params);
  } catch {
    // 計測の失敗でページの動作を止めない。
  }
}
