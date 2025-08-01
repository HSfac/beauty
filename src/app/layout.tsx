import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NailArt Studio - 당신만의 특별한 네일 아트",
  description: "우아하고 세련된 네일 아트 전문 스튜디오. 젤, 아크릴, 디자인 네일부터 특별한 날을 위한 맞춤 네일 아트까지",
  keywords: ["네일아트", "네일", "젤네일", "아크릴네일", "네일디자인", "네일케어"],
  openGraph: {
    title: "NailArt Studio",
    description: "당신만의 특별한 네일 아트",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
