import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Bibimb.ai",
};

const EFFECTIVE_DATE = "February 21, 2026";
const EMAIL = "info@tetracorp.co.kr";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display font-bold text-[1.1rem] text-text-primary mb-3">{title}</h2>
      <div className="text-text-secondary text-sm leading-[1.85] space-y-3">{children}</div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="bg-bg min-h-screen">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">Legal</span>
            <h1 className="font-display font-extrabold text-[2rem] md:text-[2.6rem] text-text-primary mt-3 mb-2">
              Privacy Policy
            </h1>
            <p className="text-text-secondary text-sm">Effective date: {EFFECTIVE_DATE}</p>
          </div>

          <Section title="1. Information We Collect">
            <p>We collect information you provide directly, including:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Waitlist registration:</strong> email address and role (buyer/maker/both)</li>
              <li><strong>Account creation (at launch):</strong> name, email, and optional profile details</li>
              <li><strong>Product listings (makers):</strong> product name, description, pricing</li>
              <li><strong>Reviews (buyers):</strong> text content and ratings</li>
            </ul>
            <p>
              We also collect certain information automatically when you use the Service,
              including IP address, browser type, device information, and pages visited,
              via standard server logs and analytics tools.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Send launch notifications and waitlist updates</li>
              <li>Operate and improve the Service</li>
              <li>Process transactions and send related communications</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We will not sell your personal information to third parties. We do not
              use your email to send marketing unrelated to Bibimb.ai without your
              explicit consent.
            </p>
          </Section>

          <Section title="3. Cookies and Tracking">
            <p>
              We use essential cookies to operate the Service (e.g., session management).
              We may use analytics cookies (such as those from Vercel Analytics) to
              understand how visitors use the site. These analytics are privacy-friendly
              and do not track you across other websites.
            </p>
            <p>
              You can disable cookies in your browser settings, though this may affect
              some functionality.
            </p>
          </Section>

          <Section title="4. Data Sharing">
            <p>We share your information only with:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Service providers:</strong> Supabase (database), Vercel (hosting), who process data on our behalf under data processing agreements</li>
              <li><strong>Legal requirements:</strong> when required by law or to protect our rights</li>
            </ul>
            <p>
              We do not share your personal information with third-party advertisers.
            </p>
          </Section>

          <Section title="5. Data Retention">
            <p>
              We retain your email address and associated data for as long as your
              account is active or as needed to provide the Service. Waitlist data is
              retained until the Service launches or you request removal.
            </p>
            <p>
              You may request deletion of your data at any time by contacting us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>.
              We will process deletion requests within 30 days.
            </p>
          </Section>

          <Section title="6. Your Rights (GDPR / Korean PIPA)">
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href={`mailto:${EMAIL}`} className="text-primary hover:underline">{EMAIL}</a>.
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              We implement reasonable technical and organizational measures to protect
              your personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of transmission over the
              internet is 100% secure.
            </p>
          </Section>

          <Section title="8. Children's Privacy">
            <p>
              The Service is not directed to children under 13 years of age. We do not
              knowingly collect personal information from children. If you believe a
              child has provided us with personal information, please contact us so we
              can delete it.
            </p>
          </Section>

          <Section title="9. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will notify
              registered users of material changes via email. Continued use of the
              Service after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              For privacy-related questions or to exercise your rights, contact us at:{" "}
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
