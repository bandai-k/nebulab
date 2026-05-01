import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/navi",
        destination: "/projects/navi",
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
    ];
  },
};

export default nextConfig;
