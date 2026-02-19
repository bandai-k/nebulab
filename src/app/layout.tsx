import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWindows from "@/components/ui/FloatingWindows";
import ColorCycler from "@/components/ui/ColorCycler";
import IntroOverlay from "@/components/ui/IntroOverlay";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Nebulab",
  description:
    "Nebulab は「思考と行動の間」を埋めるAIプロダクトを開発するラボです。",
  icons: {
    icon: "/nebulab-symbol-dark.svg",
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
        <FloatingWindows />
        {/* Nebula glow blobs — hidden on mobile for performance */}
        <div
          className="nebula-glow hidden md:block"
          style={{ width: 600, height: 600, top: -100, left: -150 }}
        />
        <div
          className="nebula-glow hidden md:block"
          style={{
            width: 400,
            height: 400,
            top: 600,
            right: -100,
            opacity: 0.7,
          }}
        />

        <Header />
        <div className="relative z-[1]">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
