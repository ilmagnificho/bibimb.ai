"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

type Role = "creator" | "adopter" | "both";
type Status = "idle" | "loading" | "success" | "error";

const roles: { value: Role; label: string; sub: string }[] = [
  { value: "creator", label: "\ud83e\uddd1\u200d\ud83c\udf73  Agent Creator \u2014 I build (or want to build) AI agents", sub: "Get your first real users and reviews, free" },
  { value: "adopter", label: "\ud83d\udc64  Early Adopter \u2014 I want to try AI agents", sub: "Get free access to agents before anyone else" },
  { value: "both", label: "\ud83e\udd62  Both \u2014 I build and I try", sub: "The full bibimbap experience" },
];

const foundingBenefits = [
  "0% creator fees \u2014 forever, for founding members",
  "Priority listing when marketplace opens",
  "Shape the platform with your direct feedback",
  "Founding Creator badge on your profile",
];

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role | "">("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) { setStatus("error"); setMessage("Enter your email."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setStatus("error"); setMessage("That doesn't look like a valid email."); return; }
    if (!role) { setStatus("error"); setMessage("Pick a role so we can personalise your access."); return; }

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role }),
      });
      const data = await res.json();
      if (res.ok || res.status === 409) {
        setStatus("success");
        setMessage(data.message || "You're in!");
      } else {
        setStatus("error");
        setMessage(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error \u2014 please try again.");
    }
  };

  return (
    <SectionWrapper id="waitlist" bgClassName="bg-bg">
      <div className="max-w-[520px] mx-auto">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="text-center py-10"
            >
              <p className="text-5xl mb-5">{"\ud83c\udf5a"}</p>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-2">
                Welcome to the founding crew.
              </h3>
              <p className="text-text-secondary mb-6">
                Here&apos;s what happens next:
              </p>

              <div className="text-left max-w-sm mx-auto space-y-3 mb-8">
                {[
                  "Welcome email within 24 hours",
                  "Discord invite (founding members only)",
                  "Weekly Showcase \u2014 see what others are building",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="text-primary text-xs mt-1">{"\u2713"}</span>
                    <span className="text-sm text-text-secondary leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-[13px] text-text-secondary/60 italic">
                Questions? Email{" "}
                <a href="mailto:cho@yoongjae.com" className="text-primary hover:underline">
                  cho@yoongjae.com
                </a>
                {" "}&mdash; I read every one.
                <br />&mdash; Yoongjae
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mb-8">
                <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary mb-3">
                  Join the founding crew. {"\ud83e\udd62"}
                </h2>
              </div>

              {/* Founding benefits */}
              <div className="bg-primary-light/30 rounded-xl p-5 mb-6 border border-primary/10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                  Founding creator benefits
                </p>
                <ul className="space-y-2">
                  {foundingBenefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="text-primary mt-0.5 text-xs">{"\u2713"}</span>
                      <span className="text-sm text-text-secondary leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[13px] text-text-secondary/60 text-center mt-4 mb-6 italic">
                The founding crew is small &mdash; and that&apos;s the point. Early members shape everything.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div>
                  <input
                    id="waitlist-email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
                    className="w-full px-4 py-3.5 rounded-[12px] border border-border bg-white text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all text-[15px]"
                  />
                </div>

                {/* Role */}
                <div className="space-y-2">
                  {roles.map((r) => (
                    <label
                      key={r.value}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-[12px] border-2 cursor-pointer transition-all ${
                        role === r.value
                          ? "border-primary bg-primary-light/30"
                          : "border-border bg-white hover:border-primary/25"
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={r.value}
                        checked={role === r.value}
                        onChange={() => { setRole(r.value); if (status === "error") setStatus("idle"); }}
                        className="accent-primary w-4 h-4 shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-text-primary">{r.label}</p>
                        <p className="text-xs text-text-secondary mt-0.5">{r.sub}</p>
                      </div>
                    </label>
                  ))}
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500 pl-1">{message}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 bg-primary text-white font-semibold rounded-[12px] hover:bg-primary-hover transition-colors text-[15px] disabled:opacity-60 cursor-pointer mt-2"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Joining{"\u2026"}
                    </span>
                  ) : (
                    "Join the founding crew \ud83c\udf36\ufe0f"
                  )}
                </button>

                <p className="text-center text-xs text-text-secondary pt-1">
                  No spam. Unsubscribe any time.
                </p>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
