import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import EarlyBirdDemo from "@/components/EarlyBirdDemo";
import ForWhom from "@/components/ForWhom";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* ProductHunt 스타일 social proof 배너 — Hero 바로 아래 */}
        <div className="bg-bg border-b border-border px-6 py-4">
          <SocialProof />
        </div>
        <HowItWorks />
        <EarlyBirdDemo />
        <ForWhom />
        <WaitlistForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
