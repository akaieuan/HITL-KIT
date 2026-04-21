import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HITL Kit — Human-in-the-Loop AI, measured properly",
  description:
    "A design system, component library, and evaluation framework for human-in-the-loop AI. An argument, an implementation, and a benchmark.",
  metadataBase: new URL("https://hitlkit.dev"),
  openGraph: {
    title: "HITL Kit",
    description:
      "A design system, component library, and evaluation framework for human-in-the-loop AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
