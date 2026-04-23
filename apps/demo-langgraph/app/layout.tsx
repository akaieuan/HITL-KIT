import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "HITL Kit · LangGraph demo",
  description:
    "End-to-end demo: LangGraph agent hits a HITL interrupt, the UI renders it via <HitlEventRenderer />, the user approves, the graph resumes.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} dark antialiased`}>
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  );
}
