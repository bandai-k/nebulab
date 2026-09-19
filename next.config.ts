import type { NextConfig } from "next";

// AI の学習目的の利用（TDM）を拒否する方針。規約は /terms に記載。
const TDM_POLICY_URL = "https://www.nebulab.jp/terms";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        // 静的ファイル・画像を含む全ルートに付与する。noindex は付けない。
        source: "/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noai, noimageai" },
          { key: "tdm-reservation", value: "1" },
          { key: "tdm-policy", value: TDM_POLICY_URL },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        // Navi の掲載は停止中。旧URLからの流入はプロダクト一覧へ誘導する。
        source: "/navi",
        destination: "/projects",
        permanent: true,
      },
      {
        // 2026-09-04 に掲載を停止したプロダクト詳細。一覧へ誘導する。
        source: "/projects/:id(navi|najimi|supermindmap|nebula-place)",
        destination: "/projects",
        permanent: true,
      },
      {
        // 旧サイトの理念ページ。現在は /about/mvv が後継。
        source: "/philosophy",
        destination: "/about/mvv",
        permanent: true,
      },
      {
        // 旧サイトの沿革ページ。沿革は /about 内のセクションに統合済み。
        source: "/history",
        destination: "/about",
        permanent: true,
      },
      {
        // 旧サイトの MEO サービス個別ページ。事業内容ページへ集約。
        source: "/services/meo",
        destination: "/services",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      { source: "/docs", destination: "/docs/index.html" },
      { source: "/docs/flyer", destination: "/docs/flyer.html" },
      { source: "/docs/pricing-list", destination: "/docs/pricing-list.html" },
      { source: "/docs/proposal-sample", destination: "/docs/proposal-sample.html" },
      { source: "/docs/business-card", destination: "/docs/business-card.html" },
      { source: "/docs/homepage-guide", destination: "/docs/homepage-guide.html" },
      { source: "/docs/hp-trial", destination: "/docs/hp-trial.html" },
      { source: "/docs/it-support", destination: "/docs/it-support.html" },
      { source: "/docs/concerns-guide", destination: "/docs/concerns-guide.html" },
      { source: "/docs/samples", destination: "/docs/samples.html" },
      { source: "/pt/bandai-noen", destination: "/pt/bandai-noen/index.html" },
      { source: "/pt/irontales", destination: "/pt/irontales/index.html" },
      { source: "/pt/irontales/service/maintenance", destination: "/pt/irontales/service/maintenance.html" },
      { source: "/pt/irontales/service/overhaul", destination: "/pt/irontales/service/overhaul.html" },
      { source: "/pt/irontales/service/tuning", destination: "/pt/irontales/service/tuning.html" },
      { source: "/pt/irontales/service/custom", destination: "/pt/irontales/service/custom.html" },
      { source: "/pt/irontales/shop-info", destination: "/pt/irontales/shop-info.html" },
      { source: "/pt/irontales/works", destination: "/pt/irontales/works.html" },
      { source: "/pt/irontales/event", destination: "/pt/irontales/event.html" },
      { source: "/pt/irontales/contact", destination: "/pt/irontales/contact.html" },
      { source: "/sample/bakery", destination: "/sample/bakery/index.html" },
      { source: "/sample/bakery/blog", destination: "/sample/bakery/blog/index.html" },
      { source: "/sample/shokudo", destination: "/sample/shokudo/index.html" },
      { source: "/sample/salon", destination: "/sample/salon/index.html" },
      { source: "/sample/leather", destination: "/sample/leather/index.html" },
      { source: "/sample/karate", destination: "/sample/karate/index.html" },
      { source: "/sample/garage", destination: "/sample/garage/index.html" },
    ];
  },
};

export default nextConfig;
