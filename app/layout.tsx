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
  title: "Bibimb.ai \u2014 Where Agent Builders Earn Together",
  description:
    "The community where AI agent creators get first users, honest reviews, and real revenue. Built by builders, for builders. Zero platform fees for founding members.",
  openGraph: {
    title: "Bibimb.ai \u2014 Where Agent Builders Earn Together",
    description:
      "GPT Store pays nothing. Going solo is exhausting. Bibimb.ai is the builder community where agent creators earn together through trust-based pricing.",
    url: "https://bibimb.ai",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibimb.ai \u2014 Where Agent Builders Earn Together",
    description:
      "Your AI agent deserves its first believers. A builder community with trust-based pricing and zero platform fees.",
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
