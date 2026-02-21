"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

type Role = "buyer" | "maker" | "both";
type Status = "idle" | "loading" | "success" | "error";

const roles: { value: Role; label: string }[] = [
  { value: "buyer", label: "I want to BUY AI tools" },
  { value: "maker", label: "I want to SELL my AI product" },
  { value: "both", label: "Both" },
];

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role | "">("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter your email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    if (!role) {
      setStatus("error");
      setMessage("Please select your role.");
      return;
    }

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
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <SectionWrapper
      id="waitlist"
      bgClassName="bg-gradient-to-b from-bg to-secondary-light/20"
    >
      <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] text-center text-text-primary mb-3">
        Be the first to taste it 🍚
      </h2>
      <p className="text-center text-text-secondary mb-12">
        Join the waitlist. Get early access when we launch.
      </p>

      <div className="max-w-md mx-auto">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-bg-card rounded-[16px] p-8 border border-border shadow-sm text-center"
            >
              <p className="text-4xl mb-4">🎉</p>
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                You&apos;re in!
              </h3>
              <p className="text-text-secondary">
                {message || "We'll notify you when Bibimb.ai launches."}
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-bg-card rounded-[16px] p-8 border border-border shadow-sm"
            >
              {/* Email */}
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <input
                id="waitlist-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                className="w-full px-4 py-3 rounded-[12px] border border-border bg-bg text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              />

              {/* Role radio */}
              <fieldset className="mt-5">
                <legend className="sr-only">Your role</legend>
                <div className="space-y-3">
                  {roles.map((r) => (
                    <label
                      key={r.value}
                      className={`flex items-center gap-3 px-4 py-3 rounded-[12px] border cursor-pointer transition-all ${
                        role === r.value
                          ? "border-primary bg-primary-light/40"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={r.value}
                        checked={role === r.value}
                        onChange={() => {
                          setRole(r.value);
                          if (status === "error") setStatus("idle");
                        }}
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-sm text-text-primary">
                        {r.label}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Error message */}
              {status === "error" && (
                <p className="mt-4 text-sm text-red-500">{message}</p>
              )}

              {/* Submit */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={status === "loading"}
                className="w-full mt-6"
              >
                Join Waitlist 🥢
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
