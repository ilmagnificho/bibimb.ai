"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

type Role = "buyer" | "maker" | "both";
type Status = "idle" | "loading" | "success" | "error";

const roles: { value: Role; label: string; sub: string }[] = [
  { value: "buyer", label: "I want to buy AI tools", sub: "Get free & early access" },
  { value: "maker", label: "I'm building an AI tool", sub: "List & get first users" },
  { value: "both", label: "Both", sub: "I do it all" },
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
      setMessage("Network error — please try again.");
    }
  };

  return (
    <SectionWrapper id="waitlist" bgClassName="bg-bg">
      <div className="max-w-[480px] mx-auto">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="text-center py-14"
            >
              <p className="text-5xl mb-5">🎉</p>
              <h3 className="font-display font-bold text-2xl text-text-primary mb-2">You&apos;re on the list.</h3>
              <p className="text-text-secondary">{message || "We'll let you know the moment we launch."}</p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mb-10">
                <h2 className="font-display font-bold text-[2rem] md:text-[2.4rem] text-text-primary mb-3">
                  Get early access.
                </h2>
                <p className="text-text-secondary">
                  Join the waitlist — we&apos;ll notify you at launch with a free spot reserved.
                </p>
              </div>

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
                      Joining…
                    </span>
                  ) : (
                    "Join the waitlist →"
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
