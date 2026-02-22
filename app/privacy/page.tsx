import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Bibimb.ai \u2014 pre-launch placeholder.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg min-h-screen">
        <section className="max-w-[680px] mx-auto px-6 pt-20 pb-16">
          <h1 className="font-display font-bold text-[2.2rem] text-text-primary leading-tight mb-8">
            Privacy Policy
          </h1>
          <div className="space-y-5 text-[15px] text-text-secondary leading-relaxed">
            <p>
              Bibimb.ai is currently in pre-launch. A full Privacy Policy will be
              published before the platform opens to the public.
            </p>
            <p>
              <strong className="text-text-primary">What we collect:</strong>{" "}
              When you join the waitlist, we collect your email address and your
              self-reported role (creator / adopter / both).
            </p>
            <p>
              <strong className="text-text-primary">How we use it:</strong>{" "}
              We use your email only to notify you about Bibimb.ai launch updates
              and community news. We do not sell or share your data with third parties.
            </p>
            <p>
              <strong className="text-text-primary">Unsubscribe:</strong>{" "}
              You can unsubscribe at any time by replying to any email we send, or
              by emailing{" "}
              <a href="mailto:cho@yoongjae.com" className="text-primary hover:underline">
                cho@yoongjae.com
              </a>
              .
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
