"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function scrollToWaitlist() {
  const el = document.getElementById("waitlist");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function BowlLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="14" cy="17" rx="11" ry="7" fill="#E8432A" />
      <ellipse cx="14" cy="11" rx="11" ry="4" fill="#D63820" />
      <ellipse cx="14" cy="11" rx="11" ry="4" fill="#FAFAF8" fillOpacity="0.15" />
      <ellipse cx="14" cy="10.5" rx="8.5" ry="3" fill="#FFF8E6" />
      <ellipse cx="11" cy="10" rx="2.5" ry="1.2" fill="#2D8B4E" opacity="0.85" />
      <ellipse cx="15.5" cy="10.5" rx="2" ry="1" fill="#E8432A" opacity="0.9" />
      <circle cx="18" cy="9.5" r="1.5" fill="#F2C94C" />
      <ellipse cx="14" cy="23.5" rx="5.5" ry="1.5" fill="#C0361F" />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    setIsHome(window.location.pathname === "/");
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? "shadow-sm bg-bg/95" : "bg-bg/90"
      } backdrop-blur-md border-b border-border`}
    >
      <div className="mx-auto max-w-[1200px] px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 group">
          <BowlLogo />
          <span className="font-display font-bold text-[18px] tracking-tight text-text-primary group-hover:text-primary transition-colors">
            Bibimb.ai
          </span>
        </Link>

        {/* 우측 메뉴 */}
        <div className="flex items-center gap-5">
          <Link
            href="/about"
            className="text-[15px] text-text-secondary hover:text-text-primary transition-colors hidden sm:block"
          >
            About
          </Link>

          {/* CTA — 텍스트 링크 대신 solid 버튼 */}
          {isHome ? (
            <button
              onClick={scrollToWaitlist}
              className="px-4 py-2 bg-primary text-white font-semibold rounded-[10px] hover:bg-primary-hover transition-colors text-[14px] cursor-pointer whitespace-nowrap"
            >
              Join free →
            </button>
          ) : (
            <Link
              href="/#waitlist"
              className="px-4 py-2 bg-primary text-white font-semibold rounded-[10px] hover:bg-primary-hover transition-colors text-[14px] whitespace-nowrap"
            >
              Join free →
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
