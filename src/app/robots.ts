import type { MetadataRoute } from "next";

const SITE_URL = "https://www.nebulab.jp";

/*
 * AI の学習目的の収集を拒否する（2026-09-14）。
 * 検索エンジン（Googlebot、Bingbot など）の通常のクロールは許可のまま。
 * Google-Extended と Applebot-Extended は各社の検索には影響しない。
 * ユーザーの指示で都度取得する ChatGPT-User / Claude-User / Perplexity-User もブロックしない。
 */
const AI_TRAINING_USER_AGENTS = [
  "GPTBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
  "FacebookBot",
  "Bytespider",
  "Amazonbot",
  "cohere-ai",
  "cohere-training-data-crawler",
  "AI2Bot",
  "Ai2Bot-Dolma",
  "Diffbot",
  "Omgilibot",
  "omgili",
  "ImagesiftBot",
  "Timpibot",
  "PanguBot",
  "img2dataset",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /preview/ は確認用。ページ側でも noindex を付けている。
        disallow: ["/tools/", "/docs/", "/preview/"],
      },
      {
        userAgent: AI_TRAINING_USER_AGENTS,
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
