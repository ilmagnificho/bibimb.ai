"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function scrollToWaitlist() {
  const el = document.getElementById("waitlist");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// 비빔밥 그릇 SVG 로고
function BowlLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 그릇 몸체 */}
      <ellipse cx="14" cy="17" rx="11" ry="7" fill="#E8432A" />
      {/* 그릇 테두리 */}
      <ellipse cx="14" cy="11" rx="11" ry="4" fill="#D63820" />
      <ellipse cx="14" cy="11" rx="11" ry="4" fill="#FAFAF8" fillOpacity="0.15" />
      {/* 밥 */}
      <ellipse cx="14" cy="10.5" rx="8.5" ry="3" fill="#FFF8E6" />
      {/* 나물 (초록) */}
      <ellipse cx="11" cy="10" rx="2.5" ry="1.2" fill="#2D8B4E" opacity="0.85" />
      {/* 고추장 (빨강) */}
      <ellipse cx="15.5" cy="10.5" rx="2" ry="1" fill="#E8432A" opacity="0.9" />
      {/* 계란 노른자 */}
      <circle cx="18" cy="9.5" r="1.5" fill="#F2C94C" />
      {/* 그릇 하단 굽 */}
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
      className={`sticky top-0 z-50 transition-shadow duration-200 ${
        scrolled ? "shadow-sm" : ""
      } bg-bg/92 backdrop-blur-md border-b border-border`}
    >
      <div className="mx-auto max-w-[1200px] px-6 h-14 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 group">
          <BowlLogo />
          <span className="font-display font-bold text-[17px] tracking-tight text-text-primary group-hover:text-primary transition-colors">
            Bibimb.ai
          </span>
        </Link>

        {/* 우측 메뉴 */}
        <div className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors hidden sm:block"
          >
            About
          </Link>
          {isHome ? (
            <button
              onClick={scrollToWaitlist}
              className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors cursor-pointer"
            >
              Join waitlist →
            </button>
          ) : (
            <Link
              href="/#waitlist"
              className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
            >
              Join waitlist →
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
