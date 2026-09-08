import type { MetadataRoute } from "next";

const SITE_URL = "https://www.nebulab.jp";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /preview/ は確認用。ページ側でも noindex を付けている。
      disallow: ["/tools/", "/docs/", "/preview/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
