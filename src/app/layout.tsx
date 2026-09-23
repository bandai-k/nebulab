import type { Metadata, Viewport } from "next";
import "./globals.css";
import AmbientBackground from "@/components/decor/AmbientBackground";
import ScrollRevealSections from "@/components/decor/ScrollRevealSections";
import SiteChrome from "@/components/layout/SiteChrome";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const SITE_URL = "https://www.nebulab.jp";
const SITE_NAME = "Nebulab合同会社";
const SITE_DESCRIPTION =
  "Nebulab合同会社は、成田を拠点に受託開発・内製化支援・自社プロダクト開発を手がける開発会社です。自ら使うプロダクトをつくり、運用まで含めた知見をお客様に還元します。";
const OG_IMAGE = "/og-image.png";
// AI の学習目的の利用（TDM）を拒否する方針。規約は /terms に記載。
const TDM_POLICY_URL = `${SITE_URL}/terms`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | 成田を拠点とするテクノロジーカンパニー`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "萬代 晃生" }],
  keywords: [
    "Nebulab",
    "ネビュラボ",
    "Nebulab合同会社",
    "成田",
    "SES",
    "受託開発",
    "AI",
    "NRT LOFT",
    "NAJIMI",
    "narita-guide",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GSC_VERIFICATION,
  },
  other: {
    "tdm-reservation": "1",
    "tdm-policy": TDM_POLICY_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*
   * suppressHydrationWarning は <html> 自身の属性だけに効く(子孫には及ばない)。
   * Intro(src/components/home/Intro.tsx)が描画前の同期スクリプトで
   * data-intro="skip" を立てるため、SSR の HTML と一致しなくなる。
   * 幕のちらつきを消すにはハイドレーション前に決める必要があり、
   * これは next-themes などと同じ、この用途の定石。
   */
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* index/follow の robots メタとは別タグで、AI の学習目的の利用を拒否する */}
        <meta name="robots" content="noai, noimageai" />
      </head>
      <body className="relative bg-ground text-ink antialiased">
        <GoogleAnalytics />
        <AmbientBackground />
        <ScrollRevealSections />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
