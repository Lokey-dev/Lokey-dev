import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Orbitron, Sora } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

const display = Orbitron({ subsets: ["latin"], variable: "--font-display" });
const sans = Sora({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "TRXN Arena — Esports Scrims & Tournaments",
  description: "A premium mockup for a centralized esports scrim discovery and tournament ecosystem.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${display.variable} ${sans.variable}`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
