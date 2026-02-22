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
  title: "Bibimb.ai \u2014 For Builders Who Refuse to Earn $0",
  description:
    "The community where AI agent creators get first users, honest reviews, and real revenue. Founded by Yoongjae Cho. Zero platform fees for founding members.",
  openGraph: {
    title: "Bibimb.ai \u2014 For Builders Who Refuse to Earn $0",
    description:
      "AI agent tools are everywhere. Revenue isn\u2019t. Join the builder community where creators help each other earn through trust-based pricing.",
    url: "https://bibimb.ai",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibimb.ai \u2014 For Builders Who Refuse to Earn $0",
    description:
      "Your AI agent deserves its first believers. A builder community with trust-based pricing and zero platform fees. Founded by Yoongjae Cho in Seoul.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
