import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Bibimb.ai",
};

const EFFECTIVE_DATE = "February 21, 2026";
const COMPANY = "Tetracorp";
const EMAIL = "info@tetracorp.co.kr";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display font-bold text-[1.1rem] text-text-primary mb-3">{title}</h2>
      <div className="text-text-secondary text-sm leading-[1.85] space-y-3">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg min-h-screen">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">Legal</span>
            <h1 className="font-display font-extrabold text-[2rem] md:text-[2.6rem] text-text-primary mt-3 mb-2">
              Terms of Service
            </h1>
            <p className="text-text-secondary text-sm">Effective date: {EFFECTIVE_DATE}</p>
          </div>

          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using Bibimb.ai (the &quot;Service&quot;), operated by {COMPANY}
              (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use the Service.
            </p>
            <p>
              We reserve the right to update these terms at any time. Continued use of
              the Service after changes constitutes acceptance of the new terms.
            </p>
          </Section>

          <Section title="2. Description of Service">
            <p>
              Bibimb.ai is an AI tool marketplace that uses a tiered early-bird pricing
              model. Buyers can discover and purchase AI tools at prices that increase
              as more users purchase. Makers can list their AI tools and earn revenue
              as their product gains traction.
            </p>
            <p>
              The Service is currently in pre-launch / waitlist phase. Features and
              pricing structures described are subject to change before official launch.
            </p>
          </Section>

          <Section title="3. User Accounts">
            <p>
              To use certain features of the Service, you may be required to create an
              account. You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your account.
            </p>
            <p>
              You agree to provide accurate, current, and complete information and to
              update your information as necessary. We reserve the right to suspend or
              terminate accounts that violate these terms.
            </p>
          </Section>

          <Section title="4. Buyer Terms">
            <p>
              As a buyer, you agree that: (a) all purchases are final unless the maker
              has a stated refund policy; (b) prices displayed at the time of purchase
              are the prices you will pay; (c) free-tier (Namul tier) access requires
              leaving an honest review within 14 days of use.
            </p>
          </Section>

          <Section title="5. Maker Terms">
            <p>
              As a maker listing a product, you agree that: (a) you own or have the
              right to sell the product you list; (b) your product does not infringe
              any third-party intellectual property rights; (c) you will provide the
              product as described; (d) you are responsible for customer support for
              your listed products.
            </p>
            <p>
              We reserve the right to remove listings that violate our policies or
              applicable law, with or without notice.
            </p>
          </Section>

          <Section title="6. Prohibited Conduct">
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Use the Service for any unlawful purpose</li>
              <li>Post false, misleading, or fraudulent listings</li>
              <li>Attempt to manipulate the pricing system through fake purchases or reviews</li>
              <li>Reverse engineer, scrape, or otherwise extract data from the Service</li>
              <li>Upload malware, viruses, or any harmful code</li>
              <li>Harass, abuse, or harm other users</li>
            </ul>
          </Section>

          <Section title="7. Intellectual Property">
            <p>
              The Bibimb.ai name, logo, and platform design are the intellectual
              property of {COMPANY}. User-generated content (product listings,
              reviews) remains the property of the respective creators, but you grant
              us a non-exclusive license to display such content on the Service.
            </p>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <p>
              THE SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
              UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, {COMPANY.toUpperCase()} SHALL
              NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
              OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL,
              ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
            </p>
            <p>
              OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED
              TO THESE TERMS OR THE SERVICE SHALL NOT EXCEED THE AMOUNT YOU PAID
              TO US IN THE 12 MONTHS PRECEDING THE CLAIM, OR USD $100, WHICHEVER
              IS GREATER.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms are governed by and construed in accordance with the laws
              of the Republic of Korea, without regard to its conflict of law principles.
              Any disputes arising from these Terms shall be subject to the exclusive
              jurisdiction of the courts located in Seoul, Republic of Korea.
            </p>
          </Section>

          <Section title="11. Contact">
            <p>
              For questions about these Terms, please contact us at:{" "}
              <a href={`mailto:${EMAIL}`} className="text-primary hover:text-primary-hover underline">
                {EMAIL}
              </a>
            </p>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}
