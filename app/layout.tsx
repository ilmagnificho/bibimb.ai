import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bibimb.ai"),
  title: {
    default: "Bibimb.ai \u2014 For Builders Who Refuse to Earn $0",
    template: "%s \u2014 Bibimb.ai",
  },
  description:
    "The community where AI agent creators get first users, honest reviews, and real revenue. Founded by Yoongjae Cho. Zero platform fees for founding members.",
  keywords: [
    "AI agent community",
    "GPT monetization",
    "AI agent marketplace",
    "trust-based pricing",
    "GPT Store alternative",
    "AI builder revenue",
    "agent creator community",
    "AI tools monetization",
    "founding crew",
    "Bibimb.ai",
  ],
  authors: [{ name: "Yoongjae Cho", url: "https://yoongjae.com" }],
  creator: "Yoongjae Cho",
  publisher: "TETRA Corp",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://bibimb.ai",
  },
  openGraph: {
    title: "Bibimb.ai \u2014 For Builders Who Refuse to Earn $0",
    description:
      "AI agent tools are everywhere. Revenue isn\u2019t. Join the builder community where creators help each other earn through trust-based pricing.",
    url: "https://bibimb.ai",
    siteName: "Bibimb.ai",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibimb.ai \u2014 For Builders Who Refuse to Earn $0",
    description:
      "Your AI agent deserves its first believers. A builder community with trust-based pricing and zero platform fees. Founded by Yoongjae Cho in Seoul.",
    creator: "@ilmagnificho",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://bibimb.ai/#website",
      url: "https://bibimb.ai",
      name: "Bibimb.ai",
      description:
        "The community where AI agent builders get first users, honest reviews, and real revenue \u2014 together.",
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://bibimb.ai/#organization",
      name: "Bibimb.ai",
      url: "https://bibimb.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://bibimb.ai/icon",
      },
      foundingDate: "2026",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Seoul",
        addressCountry: "KR",
      },
      founder: {
        "@type": "Person",
        "@id": "https://yoongjae.com/#person",
        name: "Yoongjae Cho",
        url: "https://yoongjae.com",
        jobTitle: "Founder & CEO",
        worksFor: {
          "@type": "Organization",
          name: "TETRA Corp",
        },
        sameAs: [
          "https://www.linkedin.com/in/yjcho/",
          "https://www.threads.com/@ilmagnificho",
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
