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
  title: "Bibimb.ai - Where AI Agent Creators Come to Earn",
  description:
    "AI agent creators: get your first real users, reviews, and revenue. A community where builders earn together through trust-based pricing. Zero platform fees for founding creators.",
  openGraph: {
    title: "Bibimb.ai - Where AI Agent Creators Come to Earn",
    description:
      "GPT Store pays nothing. Bibimb.ai is the community where agent creators get first users, first reviews, first revenue. Zero fees for founding creators.",
    url: "https://bibimb.ai",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibimb.ai - Where AI Agent Creators Come to Earn",
    description:
      "Your AI agent deserves its first believers. Deploy, earn trust, start charging. Zero platform fees.",
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
