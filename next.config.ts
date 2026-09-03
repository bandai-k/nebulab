import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        // Navi の掲載は停止中。旧URLからの流入はプロダクト一覧へ誘導する。
        source: "/navi",
        destination: "/projects",
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
