import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

const siteUrl = 'https://aiforgeadvantage.com';
const title = 'AI Forge Advantage | Fort Worth AI Automation for Small Business';
const description =
    'AI-powered lead capture, SMS, and booking for DFW contractors. Cyan-dashboard-grade automation - Fort Worth & Dallas-Fort Worth.';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title,
    description,
    icons: {
          icon: '/icon.svg',
    },
    openGraph: {
          title,
          description,
          url: siteUrl,
          siteName: 'AI Forge Advantage',
          locale: 'en_US',
          type: 'website',
    },
    twitter: {
          card: 'summary_large_image',
          title,
          description,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
          <html lang="en">
                <head>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                        <link
                                    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800&display=swap"
                                    rel="stylesheet"
                                  />
                </head>
                <body className="min-h-screen antialiased">{children}</body>
          </html>
        );
}
