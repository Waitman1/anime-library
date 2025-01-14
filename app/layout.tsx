import type { Metadata } from "next";
import { Amatic_SC } from "next/font/google";
import "./globals.css";

const amatic = Amatic_SC({
  weight: ["400", "700"], // Укажи нужные толщины
  subsets: ["latin"], // Укажи нужные подмножества
  variable: "--font-amatic", // CSS переменная для Tailwind
});

export const metadata: Metadata = {
  title: "Anime Library",
  description: "Аниме-библиотека",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${amatic.variable} antialiased`}>{children}</body>
    </html>
  );
}
