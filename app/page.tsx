import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustProblem from "@/components/TrustProblem";
import CommunityJoin from "@/components/CommunityJoin";
import HowItWorks from "@/components/HowItWorks";
import CreatorDemo from "@/components/CreatorDemo";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import StickySignup from "@/components/StickySignup";

// Section order:
// Hero (builder voices + earn together)
// TrustProblem (why the current system fails)
// CommunityJoin (the people — immediately after the problem)
// HowItWorks (how the community helps — mechanism)
// CreatorDemo (interactive pricing tool)
// WaitlistForm (join the founding crew)

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustProblem />
        <CommunityJoin />
        <HowItWorks />
        <CreatorDemo />
        <WaitlistForm />
      </main>
      <Footer />
      <StickySignup />
    </>
  );
}
