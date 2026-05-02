import type { Metadata } from "next";
import { MouseGlow } from "@/app/components/MouseGlow";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Forge Advantage | Fort Worth AI Automation for Small Business",
  description:
    "AI chat agents, SMS automation, and lead systems for DFW small businesses. $497 Profit Leak Audit, strategic sites, and local-first support.",
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
