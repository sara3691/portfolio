import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ThemeEngine from "@/components/ThemeEngine";
import axios from "axios";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Dynamic Portfolio CMS",
  description: "A premium portfolio managed via MongoDB",
};

async function getPortfolioData() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
    const res = await fetch(`${apiUrl}/portfolio`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    return null;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const portfolioData = await getPortfolioData();
  const theme = portfolioData?.theme;

  return (
    <html lang="en">
      <head>
        {/* Dynamic Fonts could be loaded here if needed */}
      </head>
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <ThemeEngine theme={theme} />
        {children}
      </body>
    </html>
  );
}
