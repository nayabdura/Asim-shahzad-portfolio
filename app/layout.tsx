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
  authors: [{ name: "Asim Shahzad", url: "https://www.asimshahzadseo.com/" }],
  metadataBase: new URL('https://www.asimshahzadseo.com'),
  
  // --- ADDED CANONICAL TAGS HERE ---
  alternates: {
    canonical: '/', 
  },
  // ---------------------------------

  applicationName: 'Asim Shahzad SEO | Portfolio',
  creator: 'Abdullah Imran',
  
  openGraph: {
    title: "Asim Shahzad SEO | Local SEO Expert & Link Builder",
    description: 'Boost your traffic with Asim Shahzad – Specialist in Local SEO, Digital PR, and High-DA Link Building. Secure manual backlinks on top-tier sites and improve your Google Maps rankings.',
    url: 'https://www.asimshahzadseo.com',
    siteName: 'Asim Shahzad SEO | Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  verification: {
    google: "gT4QLzRKLfegksmHDb6z6jwz_JcjBPvAq1-f3Gypf0g", // Cleaned this up (removed the prefix 'google-site-verification=')
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true, // Changed from false to true - you usually want bots to follow links on your portfolio
      noimageindex: false, // Changed from true to false - as an SEO, you want your case study charts to show in Image Search!
      'max-video-preview': -1,
    },
  }
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