import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asim Shahzad SEO | Local SEO Expert & Link Builder",
  description: "Boost your traffic with Asim Shahzad – Specialist in Local SEO, Digital PR, and High-DA Link Building. Secure manual backlinks on top-tier sites and improve your Google Maps rankings.",
  keywords: ['Local SEO Expert', 'SEO Link Building Specialist', 'GMB Optimization', 'High Authority Backlinks', 'Digital PR Services', 'SEO Consultant Pakistan', 'Manual Outreach SEO', 'SEO Services for Small Businesses', 'Local Search Ranking', 'Asim Shahzad SEO', 'Digital PR Outreach', 'SEO Link Building Services', 'Google My Business SEO', 'Local SEO Strategies', 'SEO for Local Businesses', 'Local Business Ranking', 'White Hat SEO'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
