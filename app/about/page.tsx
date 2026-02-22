import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Bibimb.ai",
  description: "Learn about Bibimb.ai — the monetization-first community where AI agent creators get their first users, reviews, and revenue.",
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
              because agent creators<br />
              deserve to earn.
            </h1>
            <p className="text-[1.05rem] leading-[1.8] text-text-secondary">
              Bibimb.ai is not just a marketplace &mdash; it&apos;s a monetization-first
              creator community. We built it because GPT Store and existing platforms
              fail indie agent creators. The trust-tier pricing system is the mechanism;
              community is the foundation.
            </p>
          </div>

          {/* The Problem */}
          <div className="mb-10">
            <h2 className="font-display font-bold text-[1.4rem] text-text-primary mb-4">
              The trust gap
            </h2>
            <div className="space-y-4 text-text-secondary text-[15px] leading-[1.8]">
              <p>
                <strong className="text-text-primary">For users:</strong> How do you trust an AI agent
                you&apos;ve never heard of? There are no reviews, no track record, no way to know if
                it&apos;s worth your time or money. So you stick with the big names — even when smaller
                agents might work better for your specific needs.
              </p>
              <p>
                <strong className="text-text-primary">For creators:</strong> You built something great.
                But getting your first 5 real users is nearly impossible. App stores bury you.
                Product Hunt gives you one day of attention. And paid ads cost more than your agent earns.
              </p>
              <p>
                <strong className="text-text-primary">The result:</strong> A massive trust gap.
                Great agents die invisible. Users miss out on tools that could genuinely help them.
                The AI agent economy stays broken.
              </p>
            </div>
          </div>

          {/* Our Solution */}
          <div className="bg-primary-light/30 rounded-2xl p-7 mb-10 border border-primary/10">
            <p className="text-2xl mb-3">🍚</p>
            <h2 className="font-display font-bold text-xl text-text-primary mb-3">
              How Bibimb.ai fixes this
            </h2>
            <p className="text-text-secondary leading-[1.8] text-[15px]">
              Every agent on Bibimb.ai starts with free users. Creators choose how many
              free slots to offer (5 to 50). Those first users try the agent for free,
              leave real reviews, and build the trust foundation. Then, as trust grows,
              the price steps up naturally — from free to the creator&apos;s target price.
            </p>
            <p className="text-text-secondary leading-[1.8] text-[15px] mt-3">
              We call it <strong className="text-text-primary">trust-based pricing</strong>.
              Like bibimbap — the bowl starts simple, and as more ingredients
              (users, reviews, trust) are added, it becomes richer and more valuable.
            </p>
          </div>

          {/* The Bibimbap Metaphor */}
          <div className="mb-10">
            <h2 className="font-display font-bold text-[1.4rem] text-text-primary mb-4">
              Why &ldquo;bibimbap&rdquo;?
            </h2>
            <p className="text-text-secondary leading-[1.8] text-[15px]">
              Bibimbap is a Korean dish that starts as a simple bowl of rice. You add
              ingredients one by one — namul (vegetables), gochujang (spicy paste),
              egg, meat — until it becomes a rich, complete meal. Our pricing model
              works the same way: every agent starts free (Namul tier), and as more
              users join and leave reviews, the value and price grow together through
              Gochujang, Bibim, Dolsot, and finally Jeongsik (the full course).
            </p>
          </div>

          {/* For Creators */}
          <div className="mb-10">
            <h2 className="font-display font-bold text-[1.4rem] text-text-primary mb-4">
              For agent creators
            </h2>
            <p className="text-text-secondary leading-[1.8] text-[15px] mb-4">
              You&apos;re not deploying into a void &mdash; you&apos;re deploying into a community
              of builders who will test, review, and champion your agent. Set two things:
              how many free trial slots (5&ndash;50) and your target price ($0&ndash;$99).
              We auto-calculate the intermediate tiers. You control the economics.
            </p>
            <div className="bg-secondary-light/40 rounded-xl p-5 border border-secondary/15">
              <p className="font-display font-bold text-[15px] text-text-primary mb-2">
                💸 Founding creator benefits
              </p>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>0% platform fee — forever, for founding creators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>Priority placement in agent discovery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary mt-0.5">✓</span>
                  <span>Direct feedback channel with the team</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Market Context */}
          <div className="mb-10">
            <h2 className="font-display font-bold text-[1.4rem] text-text-primary mb-4">
              Why now?
            </h2>
            <div className="space-y-4 text-text-secondary text-[15px] leading-[1.8]">
              <p>
                The GPT Store promised democratized monetization but delivered $0 for most
                creators. US-only payouts, invite-only programs, and zero transparency left
                builders with millions of users but no revenue.
              </p>
              <p>
                Existing marketplaces focus on discovery, not trust. Crypto-based approaches
                add friction that kills adoption. Enterprise platforms exclude indie creators entirely.
              </p>
              <p>
                Bibimb.ai fills the gap: a community-first platform where creators earn through
                community-verified trust &mdash; not marketing budgets or platform gatekeeping.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-border pt-10 mb-10">
            <h2 className="font-display font-bold text-[1.1rem] text-text-primary mb-3">
              Disclaimer
            </h2>
            <p className="text-text-secondary text-sm leading-[1.8]">
              Bibimb.ai is currently in pre-launch / waitlist phase. The platform,
              pricing tiers, and features described on this site are subject to change
              before official launch. The pricing demo on the homepage is a simulation
              only — no actual purchases are being processed. By joining the waitlist,
              you are expressing interest only. No payment information is collected at
              this stage.
            </p>
            <p className="text-text-secondary text-sm leading-[1.8] mt-3">
              All trademarks and product names belong to their respective owners.
              Bibimb.ai is not affiliated with any AI agent listed as examples on
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
              Ready to be a founding creator?
            </p>
            <p className="text-text-secondary text-sm mb-5">
              Join the waitlist. Help shape the future of AI agent monetization.
            </p>
            <Link
              href="/#waitlist"
              className="inline-block px-8 py-3.5 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px]"
            >
              Become a founding creator →
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
