import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyBibimb from "@/components/WhyBibimb";
import HowItWorks from "@/components/HowItWorks";
import MidPageCTA from "@/components/MidPageCTA";
import EarlyBirdDemo from "@/components/EarlyBirdDemo";
import ForWhom from "@/components/ForWhom";
import CommunitySection from "@/components/CommunitySection";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StickySignup from "@/components/StickySignup";

// 섹션 순서:
// Hero (2-col with agent cards)
// WhyBibimb (trust problem + categories)
// HowItWorks
// MidPageCTA  ← primary 배경 full-width 배너, 스크롤 중간 CTA
// EarlyBirdDemo
// ForWhom
// CommunitySection
// WaitlistForm
// + StickySignup (fixed bottom, 스크롤 후 등장)

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyBibimb />
        <HowItWorks />
        <MidPageCTA />
        <EarlyBirdDemo />
        <ForWhom />
        <CommunitySection />
        <WaitlistForm />
      </main>
      <Footer />
      <ScrollToTop />
      <StickySignup />
    </>
  );
}
