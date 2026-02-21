import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import EarlyBirdDemo from "@/components/EarlyBirdDemo";
import ForWhom from "@/components/ForWhom";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <EarlyBirdDemo />
      <ForWhom />
      <WaitlistForm />
      <Footer />
    </main>
  );
}
