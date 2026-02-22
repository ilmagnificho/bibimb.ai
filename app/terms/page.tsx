import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Bibimb.ai — pre-launch placeholder.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg min-h-screen">
        <section className="max-w-[680px] mx-auto px-6 pt-20 pb-16">
          <h1 className="font-display font-bold text-[2.2rem] text-text-primary leading-tight mb-8">
            Terms of Service
          </h1>
          <div className="space-y-5 text-[15px] text-text-secondary leading-relaxed">
            <p>
              Bibimb.ai is currently in pre-launch. Full Terms of Service will be
              published before the platform opens to the public.
            </p>
            <p>
              In the meantime, by joining the waitlist you agree to receive
              occasional emails about Bibimb.ai&apos;s launch and community updates.
              You can unsubscribe at any time.
            </p>
            <p>
              Questions?{" "}
              <a href="mailto:cho@yoongjae.com" className="text-primary hover:underline">
                cho@yoongjae.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
