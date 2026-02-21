import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Bibimb.ai",
  description: "Learn about Bibimb.ai — an AI tool marketplace inspired by bibimbap. Early buyers pay less, makers get their first users guaranteed.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg min-h-screen">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">

          {/* Header */}
          <div className="mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">About</span>
            <h1 className="font-display font-extrabold text-[2.2rem] md:text-[3rem] leading-[1.1] text-text-primary mt-3 mb-5">
              We built Bibimb.ai<br />
              because launching AI tools<br />
              is broken.
            </h1>
            <p className="text-[1.05rem] leading-[1.8] text-text-secondary">
              Most AI tools die quietly. Not because the idea was bad — but because
              finding those first 5 real users who pay, test, and give honest feedback
              is nearly impossible. And for buyers, everything costs too much before
              you even know if a tool is worth it.
            </p>
          </div>

          {/* The Bibimbap Metaphor */}
          <div className="bg-primary-light/30 rounded-2xl p-7 mb-10 border border-primary/10">
            <p className="text-2xl mb-3">🍚</p>
            <h2 className="font-display font-bold text-xl text-text-primary mb-3">
              Why bibimbap?
            </h2>
            <p className="text-text-secondary leading-[1.8] text-[15px]">
              Bibimbap starts simple — a bowl of rice, a few ingredients. As you add
              more (gochujang, namul, eggs, meat), it gets richer and more valuable.
              Our pricing works the same way: the first few users get it free (Namul tier),
              and as more people join, the price rises — until it reaches the maker&apos;s
              target (Jeongsik, the full course).
            </p>
            <p className="text-text-secondary leading-[1.8] text-[15px] mt-3">
              Early = cheap. Late = full price. The bowl fills up.
            </p>
          </div>

          {/* How it works */}
          <div className="mb-10">
            <h2 className="font-display font-bold text-[1.4rem] text-text-primary mb-5">
              The model, plainly explained
            </h2>
            <div className="space-y-4">
              {[
                { icon: "🥬", title: "Namul — FREE (slots 1–5)", desc: "First 5 buyers get the tool completely free. They leave a real review. No tricks." },
                { icon: "🌶️", title: "Gochujang — $4.99 (slots 6–15)", desc: "Still cheap. Less than a coffee. The tool has real reviews now." },
                { icon: "🥢", title: "Bibim — $9.99 (slots 16–35)", desc: "Now we're mixing. The tool has traction, and the price reflects it." },
                { icon: "🍲", title: "Dolsot — $19.99 (slots 36–85)", desc: "Hot and growing. Serious buyers, serious product." },
                { icon: "🍱", title: "Jeongsik — $29.00 (slots 86+)", desc: "Full course. The maker reaches their target. Steady income." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-white border border-border">
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <p className="font-semibold text-text-primary text-[15px] mb-0.5">{item.title}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Makers */}
          <div className="mb-10">
            <h2 className="font-display font-bold text-[1.4rem] text-text-primary mb-4">
              For makers
            </h2>
            <p className="text-text-secondary leading-[1.8] text-[15px]">
              Listing on Bibimb.ai is free. You set your target price (Jeongsik price).
              We guarantee your first 5 users — real people who try your tool for free
              and leave an honest review. Zero seller fees, ever. You keep everything
              you earn from slot 6 onwards.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-border pt-10 mb-10">
            <h2 className="font-display font-bold text-[1.1rem] text-text-primary mb-3">
              Disclaimer
            </h2>
            <p className="text-text-secondary text-sm leading-[1.8]">
              Bibimb.ai is currently in pre-launch / waitlist phase. The platform,
              pricing tiers, and features described on this site are subject to change
              before official launch. The &quot;Early Bird Demo&quot; on the homepage is
              a simulation only — no actual purchases are being processed. By joining
              the waitlist, you are expressing interest only. No payment information
              is collected at this stage.
            </p>
            <p className="text-text-secondary text-sm leading-[1.8] mt-3">
              All trademarks and product names belong to their respective owners.
              Bibimb.ai is not affiliated with any AI tool listed as examples on
              the site unless explicitly stated.
            </p>
          </div>

          {/* Contact */}
          <div className="border-t border-border pt-10 mb-10">
            <h2 className="font-display font-bold text-[1.1rem] text-text-primary mb-3">
              Contact
            </h2>
            <p className="text-text-secondary text-sm leading-[1.8]">
              Questions, partnership inquiries, or just want to say hi?
            </p>
            <a
              href="mailto:info@tetracorp.co.kr"
              className="inline-block mt-3 text-primary font-semibold hover:text-primary-hover transition-colors text-sm"
            >
              info@tetracorp.co.kr →
            </a>
          </div>

          {/* CTA */}
          <div className="bg-[#F5F0EB] rounded-2xl p-8 text-center">
            <p className="font-display font-bold text-xl text-text-primary mb-2">
              Ready to grab a seat at the table?
            </p>
            <p className="text-text-secondary text-sm mb-5">
              Join the waitlist. Your Namul (free) spot is waiting.
            </p>
            <Link
              href="/#waitlist"
              className="inline-block px-8 py-3.5 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px]"
            >
              Join the waitlist →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
