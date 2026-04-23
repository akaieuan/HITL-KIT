import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { DemoNav } from "./DemoNav";

const sans = Geist({ variable: "--font-sans", subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "HITL Kit \u00b7 LangGraph + AI SDK demos",
  description:
    "End-to-end demos: an agent hits a HITL checkpoint, the UI renders it via <HitlEventRenderer />, the user decides, execution continues. One demo per framework.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} dark antialiased`}>
      <body className="min-h-screen bg-background text-foreground">
        <DemoNav />
        {children}
      </body>
    </html>
  );
}
