import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/AmbientBackground";
import FloatingWindows from "@/components/ui/FloatingWindows";
import ColorCycler from "@/components/ui/ColorCycler";
import IntroOverlay from "@/components/ui/IntroOverlay";

const SITE_URL = "https://www.nebulab.jp";
const SITE_NAME = "Nebulab合同会社";
const SITE_DESCRIPTION =
  "Nebulab合同会社は、成田を拠点にSES・受託開発、自社AIプロダクト、コワーキング(NRT-LOFT)、ECブランド(NAJIMI)を展開するテクノロジーカンパニーです。";
const OG_IMAGE = "/projects/nrt-loft.png";

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
    "コワーキング",
    "NRT-LOFT",
    "NAJIMI",
    "narita-guide",
  ],
  icons: {
    icon: "/nebulab-symbol-dark.svg",
  },
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
        width: 1792,
        height: 1024,
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="relative min-h-dvh overflow-x-hidden bg-cyber-bg text-cyber-text antialiased">
        <IntroOverlay />
        <ColorCycler />
        <AmbientBackground />
        <FloatingWindows />

        <Header />
        <div className="relative z-[1]">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
