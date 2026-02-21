"use client";

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 스크롤 500px 이후 하단에 미니 이메일 입력 바 등장
// Waitlist 섹션이 뷰포트에 들어오면 자동으로 숨김 (중복 방지)

export default function StickySignup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const THRESHOLD = 500;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Waitlist 섹션이 보이면 숨김
        if (entry.isIntersecting) setVisible(false);
        else if (!dismissed && window.scrollY > THRESHOLD) setVisible(true);
      },
      { threshold: 0.1 }
    );

    const waitlistEl = document.getElementById("waitlist");
    if (waitlistEl) observer.observe(waitlistEl);

    const onScroll = () => {
      if (dismissed) return;
      const waitlistEl2 = document.getElementById("waitlist");
      if (!waitlistEl2) return;
      const rect = waitlistEl2.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView && window.scrollY > THRESHOLD) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [dismissed]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role: "adopter" }),
      });
      if (res.ok || res.status === 409) {
        setStatus("success");
        setTimeout(() => setDismissed(true), 2500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
          className="fixed bottom-6 left-1/2 z-40 w-[calc(100%-2rem)] max-w-[520px]"
          style={{ transform: "translateX(-50%)" }}
        >
          <div
            className="bg-[#1A1A1A] text-white rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.28), 0 0 0 1px rgba(255,255,255,0.06)" }}
          >
            {/* 좌측 텍스트 */}
            <div className="flex-1 min-w-0">
              {status === "success" ? (
                <p className="text-[15px] font-semibold">
                  🍚 You&apos;re in! See you at launch.
                </p>
              ) : (
                <>
                  <p className="text-[14px] font-semibold leading-tight">
                    🥬 Free slots filling up.
                  </p>
                  <p className="text-[13px] text-white/50 mt-0.5">
                    Join free — founding member benefits included.
                  </p>
                </>
              )}
            </div>

            {/* 우측: 폼 또는 닫기 */}
            {status !== "success" && (
              <form onSubmit={handleSubmit} className="flex gap-2 shrink-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                  placeholder="your@email.com"
                  className={`px-3 py-2 rounded-[9px] bg-white/10 text-white placeholder:text-white/30 text-[14px] focus:outline-none focus:ring-2 focus:ring-primary/60 transition-all w-44 border ${
                    status === "error" ? "border-red-400/60" : "border-white/10"
                  }`}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-4 py-2 bg-primary hover:bg-primary-hover text-white text-[14px] font-semibold rounded-[9px] transition-colors disabled:opacity-60 cursor-pointer whitespace-nowrap shrink-0"
                >
                  {status === "loading" ? "…" : "Join free"}
                </button>
              </form>
            )}

            {/* 닫기 버튼 */}
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-3 right-3 text-white/30 hover:text-white/70 transition-colors text-lg leading-none cursor-pointer"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
