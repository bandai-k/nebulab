import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import { BRAND } from "@/constants/brand";
import { MISSION } from "@/constants/mvv";

export const metadata: Metadata = {
  title: `${BRAND.name} - ${BRAND.tagline}`,
  description: MISSION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-dvh bg-[#fff8e7] text-[#3d2f24] antialiased">
        <Header />
        {children}
        <BackToTop mobileOnly showAfter={240} />
        <Footer />
      </body>
    </html>
  );
}
