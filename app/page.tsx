import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhyBibimb from "@/components/WhyBibimb";
import HowItWorks from "@/components/HowItWorks";
import EarlyBirdDemo from "@/components/EarlyBirdDemo";
import ForWhom from "@/components/ForWhom";
import CommunitySection from "@/components/CommunitySection";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// 섹션 순서 (7 → 6):
// Hero (2-col with agent cards)
// WhyBibimb (TrustProblem + AgentCategories 통합)
// HowItWorks
// EarlyBirdDemo
// ForWhom
// CommunitySection  ← NEW
// WaitlistForm

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhyBibimb />
        <HowItWorks />
        <EarlyBirdDemo />
        <ForWhom />
        <CommunitySection />
        <WaitlistForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
