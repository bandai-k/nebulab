import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "NEBULAB - Product & Place Lab",
  description:
    "プロダクト開発を軸に、「働く場所」や「学びの場」も含めた環境づくりを行う小さなラボです。",
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
        <Footer />
      </body>
    </html>
  );
}
