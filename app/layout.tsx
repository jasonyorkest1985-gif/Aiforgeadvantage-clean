import type { Metadata } from "next";
import { MouseGlow } from "@/app/components/MouseGlow";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Forge Strategist",
  description:
    "Dashboard-grade AI infrastructure, $497 Profit Leak Audit, and automation for operators who need pipeline recovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-[#071225] text-slate-100">
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
