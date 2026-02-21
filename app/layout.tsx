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
  title: "Bibimb.ai - Every AI product starts FREE, then $4.99",
  description:
    "A marketplace where AI tools launch FREE for the first 5 users, then $4.99, and prices rise as people buy. Like Kickstarter Early Bird, but for AI products. Discover, compare, and grab AI tools before the price goes up.",
  openGraph: {
    title: "Bibimb.ai - Every AI product starts FREE, then $4.99",
    description:
      "First 5 users get AI tools FREE. Then $4.99. Prices rise as people buy. Be early. Pay less.",
    url: "https://bibimb.ai",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibimb.ai - Every AI product starts FREE, then $4.99",
    description:
      "First 5 users get AI tools FREE. Then $4.99. Prices rise as people buy.",
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
