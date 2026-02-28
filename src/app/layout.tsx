import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
// @ts-expect-error - CSS side effect import
import "./globals.css";

import { LanguageProvider } from "./lib/LanguageContext";

import TopBar from "./components/TopBar";

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Délicieun",
  description: "The best food in existence. Finger Licking Good.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} `}>
        <LanguageProvider>
          <TopBar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
