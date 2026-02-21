import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustProblem from "@/components/TrustProblem";
import HowItWorks from "@/components/HowItWorks";
import EarlyBirdDemo from "@/components/EarlyBirdDemo";
import AgentCategories from "@/components/AgentCategories";
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
        <TrustProblem />
        <HowItWorks />
        <EarlyBirdDemo />
        <AgentCategories />
        <ForWhom />
        <WaitlistForm />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
