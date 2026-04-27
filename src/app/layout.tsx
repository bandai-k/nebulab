import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AmbientBackground from "@/components/AmbientBackground";
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
