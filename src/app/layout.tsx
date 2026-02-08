import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

export const metadata: Metadata = {
  title: "NEBULAB | 成田エリアのお店のIT・Web支援",
  description:
    "成田エリアの飲食店・小売店・個人事業主向けのIT支援。Googleマップ集客、ホームページ制作、AI業務効率化。難しい専門用語は使いません。",
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
