import type { Metadata } from "next";
import { ForgeBot } from "@/components/ForgeBot";
import { MouseGlow } from "@/components/MouseGlow";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Forge Advantage",
  description:
    "Elite AI infrastructure and automation consulting for serious business owners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white">
        <MouseGlow />
        {children}
        <ForgeBot />
      </body>
    </html>
  );
}
