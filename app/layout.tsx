import type { Metadata } from "next";
import { Crimson_Pro, Inter } from "next/font/google";
import "./globals.css";

const crimsonPro = Crimson_Pro({
  subsets: ["latin", "latin-ext"],
  variable: '--font-crimson',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Библия — Свет и Глубина Писания",
  description: "Погрузитесь в мир Священного Писания. Читайте, изучайте и размышляйте.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${crimsonPro.variable} ${inter.variable}`}>
      <body className="antialiased bg-gradient-to-b from-cream to-warmCream min-h-screen">
        {children}
      </body>
    </html>
  );
}
