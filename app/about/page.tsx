import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Bibimb.ai",
  description: "Why I built Bibimb.ai — a community where AI agent builders help each other get first users, honest reviews, and real revenue. Founded by Yoongjae Cho.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg min-h-screen">

        {/* "Why I Built This" essay */}
        <section className="max-w-[680px] mx-auto px-6 pt-20 pb-16">
          <h1 className="font-display font-bold text-[2.2rem] md:text-[2.8rem] text-text-primary leading-tight mb-8">
            Why I Built Bibimb.ai
          </h1>

          <div className="space-y-5 text-[15px] md:text-[16px] text-text-secondary leading-relaxed">
            <p>
              I invest in early-stage startups for a living. I run TETRA Corp in Seoul,
              manage an angel syndicate, and spend most of my time helping Korean founders
              figure out how to go from zero to one.
            </p>
            <p>
              But here&apos;s the thing that kept bothering me.
            </p>
            <p>
              I&apos;ve watched dozens of builders create genuinely useful AI tools &mdash; agents
              that save people hours, automate real work, solve actual problems. And then
              nothing happens. No users. No revenue. The agent sits there, invisible.
            </p>
            <p>
              The tools to build AI agents have never been better. Claude Code, n8n, CrewAI,
              MindStudio &mdash; anyone with a laptop and an idea can ship something in a weekend.
              Building is no longer the hard part.{" "}
              <strong className="text-text-primary">
                Getting your first five real users? That&apos;s where everyone gets stuck.
              </strong>
            </p>
            <p>
              I saw this pattern over and over: talented people building alone, burning out
              alone, and quitting alone. Meanwhile, GPT Store promised monetization and
              delivered nothing for most creators &mdash; $0 revenue even for builders with a
              million users.
            </p>
            <p>
              I&apos;m not an AI engineer. I&apos;m not going to pretend I&apos;ve shipped
              50 agents myself. What I do know is how ecosystems work. I&apos;ve spent years
              studying why some creators thrive while others burn out. The answer is almost
              never &ldquo;build a better product.&rdquo; It&apos;s almost always{" "}
              <strong className="text-text-primary">
                &ldquo;find the right people.&rdquo;
              </strong>
            </p>
            <p>
              That&apos;s why I built Bibimb.ai.
            </p>
            <p>
              Not another marketplace. Not another app store. A community where agent builders
              actually help each other succeed &mdash; testing each other&apos;s work, sharing what
              pricing works, showing up as each other&apos;s first real users.
            </p>
            <p>
              The name comes from bibimbap, the Korean mixed rice bowl. Every ingredient is
              different, but the dish only works when everything comes together. That&apos;s what
              I want for agent creators: a place where different builders, different skills,
              different agents all mix together into something greater than the sum of its parts.
            </p>
            <p>
              We&apos;re small. We&apos;re early. The founding crew is still forming. If
              you&apos;re building an agent and tired of doing it alone, I&apos;d genuinely
              love to have you.
            </p>
          </div>

          {/* Founder card */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="font-display font-bold text-lg text-text-primary">
              Yoongjae Cho
            </p>
            <p className="text-sm text-text-secondary mt-1">
              Founder, Bibimb.ai &middot; CEO, TETRA Corp &middot; GP, Joyakdol Angel Syndicate
            </p>
            <p className="text-sm text-text-secondary mt-3">
              Invests in early-stage Korean startups. Writes about venture and building at{" "}
              <a href="https://yoongjae.com" target="_blank" rel="noopener noreferrer"
                 className="text-primary hover:underline">yoongjae.com</a>
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-sm">
              <a href="mailto:cho@yoongjae.com" className="text-text-secondary hover:text-primary transition-colors">
                cho@yoongjae.com
              </a>
              <a href="https://www.linkedin.com/in/yjcho/" target="_blank" rel="noopener noreferrer"
                 className="text-text-secondary hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://www.threads.com/@ilmagnificho" target="_blank" rel="noopener noreferrer"
                 className="text-text-secondary hover:text-primary transition-colors">Threads</a>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[720px] px-6 pb-16">

          {/* The Problem */}
          <div className="mb-10">
            <h2 className="font-display font-bold text-[1.4rem] text-text-primary mb-4">
              The problem
            </h2>
            <div className="space-y-4 text-text-secondary text-[15px] leading-[1.8]">
              <p>
                <strong className="text-text-primary">90% die:</strong> Indie agents die invisible
                within 90 days. No users, no reviews, no trust, no growth.
              </p>
              <p>
                <strong className="text-text-primary">$0 revenue:</strong> GPT Store promised
                monetization but delivered nothing for most creators &mdash; US-only, invite-only.
                One builder has 1M users and $0 revenue.
              </p>
              <p>
                <strong className="text-text-primary">Solo burnout:</strong> Gumroad + Stripe +
                marketing + support + reviews. All alone. No leverage. Talented people building,
                burning out, and quitting alone.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-10">
            <h2 className="font-display font-bold text-[1.4rem] text-text-primary mb-4">
              How it works
            </h2>
            <p className="text-text-secondary leading-[1.8] text-[15px] mb-4">
              Every agent on Bibimb.ai starts with free users. Creators choose how many
              free slots to offer (5 to 50). Those first users try the agent for free,
              leave real reviews, and build the trust foundation. Then, as trust grows,
              the price steps up naturally &mdash; from free to the creator&apos;s target price.
            </p>
            <p className="text-text-secondary leading-[1.8] text-[15px]">
              We call it <strong className="text-text-primary">trust-based pricing</strong>.
              Like bibimbap &mdash; the bowl starts simple, and as more ingredients
              (users, reviews, trust) are added, it becomes richer and more valuable.
            </p>
          </div>

          {/* Why Bibimbap */}
          <div className="mb-10">
            <h2 className="font-display font-bold text-[1.4rem] text-text-primary mb-4">
              Why &ldquo;bibimbap&rdquo;?
            </h2>
            <p className="text-text-secondary leading-[1.8] text-[15px]">
              Bibimbap is a Korean dish that starts as a simple bowl of rice. You add
              ingredients one by one &mdash; namul (vegetables), gochujang (spicy paste),
              egg, meat &mdash; until it becomes a rich, complete meal. Our pricing model
              works the same way: every agent starts free (Namul tier), and as more
              users join and leave reviews, the value and price grow together through
              Gochujang, Bibim, Dolsot, and finally Jeongsik (the full course).
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
              before official launch. The pricing demo on the homepage is a simulation
              only &mdash; no actual purchases are being processed. By joining the waitlist,
              you are expressing interest only. No payment information is collected at
              this stage.
            </p>
            <p className="text-text-secondary text-sm leading-[1.8] mt-3">
              All trademarks and product names belong to their respective owners.
              Bibimb.ai is not affiliated with any AI agent listed as examples on
              the site unless explicitly stated.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-[#F5F0EB] rounded-2xl p-8 text-center">
            <p className="font-display font-bold text-xl text-text-primary mb-2">
              Ready to join the founding crew?
            </p>
            <p className="text-text-secondary text-sm mb-5">
              Help shape the future of AI agent monetization.
            </p>
            <Link
              href="/#waitlist"
              className="inline-block px-8 py-3.5 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px]"
            >
              Join the founding crew &rarr;
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
