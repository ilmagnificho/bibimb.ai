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
  title: "Bibimb.ai — Where AI agents earn their first trust",
  description:
    "An AI agent trust marketplace. Every agent starts free for early users, then prices rise as trust builds. Free trials, real reviews, trust-based pricing.",
  openGraph: {
    title: "Bibimb.ai — Where AI agents earn their first trust",
    description:
      "Every AI agent starts free. Early adopters try agents for free, leave real reviews, and build trust. Trust-based pricing that grows with reputation.",
    url: "https://bibimb.ai",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibimb.ai — Where AI agents earn their first trust",
    description:
      "Every AI agent starts free. Try agents, leave real reviews, build trust.",
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
