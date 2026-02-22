import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustProblem from "@/components/TrustProblem";
import HowItWorks from "@/components/HowItWorks";
import CreatorDemo from "@/components/CreatorDemo";
import CommunityJoin from "@/components/CommunityJoin";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import StickySignup from "@/components/StickySignup";

// Section order:
// Hero (2-col with creator journey cards)
// TrustProblem (GPT Store failure + builder pain points)
// HowItWorks (4-step flow)
// CreatorDemo (interactive pricing tool)
// CommunityJoin (founding creators pitch)
// WaitlistForm (creator-first signup)
// + StickySignup (fixed bottom, appears on scroll)

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustProblem />
        <HowItWorks />
        <CreatorDemo />
        <CommunityJoin />
        <WaitlistForm />
      </main>
      <Footer />
      <StickySignup />
    </>
  );
}
