/**
 * ブランド関連の定数
 * 連絡先・会社名・タグラインなどを一元管理
 */

export const BRAND = {
  name: "NEBULAB",
  nameKana: "ネビュラボ",
  tagline: "成田エリアのお店のIT・Web支援",

  // 連絡先（統一: hello@nebulab.jp）
  email: "hello@nebulab.jp",
  emailMailto: "mailto:hello@nebulab.jp",

  // 外部リンク
  nrtLoftUrl: "https://nrt-loft.jp",
} as const;

export type Brand = typeof BRAND;
