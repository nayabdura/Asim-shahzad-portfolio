import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- SEO STRATEGY UPDATE ---
// Added: "Best", "Top Rated", "Off-Page", "Manual Outreach", City-wise keywords
// Focus: High-Intent (Commercial) Keywords

export const metadata: Metadata = {
  title: {
    default: "Best Local SEO Expert in Pakistan | Manual Outreach & Off-Page SEO",
    template: "%s | Asim Shahzad SEO"
  },
  description: "Hire the #1 Rated Local SEO Expert in Pakistan. Specializing in Manual Outreach, Off-Page SEO, High-DA Guest Posting, and GMB Optimization. Ranking businesses in Lahore, Karachi, Islamabad & Worldwide.",
  keywords: [
    // --- Top Rated & "Best" Keywords ---
    'Best Local SEO Expert in Pakistan',
    'Top Rated SEO Consultant',
    '#1 SEO Specialist Pakistan',
    'Best Link Building Agency',
    'Affordable SEO Services Pakistan',
    
    // --- Off-Page & Manual Outreach (High Value) ---
    'Off-Page SEO Expert',
    'Manual Outreach Specialist',
    'White Hat Link Building',
    'High DA Guest Posting Service',
    'Contextual Backlinks Service',
    'Niche Edit Service',
    'Digital PR Outreach',
    'Broken Link Building',
    
    // --- Local SEO & GMB ---
    'Google My Business Optimization',
    'GMB Ranking Expert',
    'Local Citation Building',
    'Google Maps SEO Specialist',
    'Local Search Ranking',
    
    // --- Geo-Targeted (Major Cities) ---
    'SEO Expert in Lahore',
    'SEO Expert in Karachi',
    'SEO Expert in Islamabad',
    'SEO Expert in Faisalabad',
    'SEO Services Multan',
    'SEO Company Sialkot',
    'SEO Consultant Peshawar',
    
    // --- Industry Specific ---
    'SaaS Link Building',
    'SEO for E-commerce',
    'White Label SEO for Agencies',
    'B2B SEO Consultant'
  ],
  authors: [{ name: "Asim Shahzad", url: "https://www.asimshahzadseo.com/" }],
  metadataBase: new URL('https://www.asimshahzadseo.com'),
  
  alternates: {
    canonical: '/', 
  },

  applicationName: 'Asim Shahzad SEO',
  creator: 'Abdullah Imran',
  publisher: 'Asim Shahzad',
  
  openGraph: {
    title: "Best Local SEO Expert & Manual Outreach Specialist | Asim Shahzad",
    description: 'Boost your Domain Authority with Asim Shahzad. Expert in Off-Page SEO, Manual Outreach, and Local Rankings. Get High-Quality Backlinks today.',
    url: 'https://www.asimshahzadseo.com',
    siteName: 'Asim Shahzad SEO',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Asim Shahzad - Best SEO Expert Pakistan',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Asim Shahzad | #1 Off-Page SEO Expert",
    description: "Manual Outreach, Guest Posting, and Local SEO Services that actually rank.",
    images: ['/opengraph-image.jpg'],
  },

  
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

// --- UPDATED JSON-LD SCHEMA ---
// Added "makesOffer" to explicitly list your services to Google
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService", // Changed from Person to ProfessionalService for better Local SEO
  "name": "Asim Shahzad SEO",
  "image": "https://www.asimshahzadseo.com/opengraph-image.jpg",
  "url": "https://www.asimshahzadseo.com",
  "telephone": "+923135741451", // Add your phone if you want "Call Now" button in search
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PK",
    "addressLocality": "Faisalabad",
    "addressRegion": "Punjab"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "31.4504", // Faisalabad Coordinates (approx)
    "longitude": "73.1350"
  },
  "sameAs": [
    "https://www.linkedin.com/in/asim-shahzad-seo-linkbuilding/",
    "https://www.facebook.com/Asimshahzadseo/",
    "https://www.instagram.com/backlinks.asim/"
  ],
  "description": "Asim Shahzad is the best Local SEO Expert and Manual Outreach Specialist in Pakistan, providing high-quality backlinks and GMB optimization.",
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Manual Outreach Link Building"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Local SEO & GMB Optimization"
      }
    },
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Off-Page SEO Audit"
      }
    }
  ]
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
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive" 
        />
        {children}
      </body>
    </html>
  );
}