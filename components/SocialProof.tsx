"use client";

import { motion } from "framer-motion";

// 대기자 숫자는 나중에 API로 실시간으로 바꿀 수 있음
const WAITLIST_COUNT = 47;
const MAKER_COUNT = 12;

// 아바타 색상 팔레트 (대기자 수 시각화)
const AVATAR_COLORS = [
  "#E8432A", "#D4940A", "#2D8B4E", "#6B6B6B", "#8B6914",
  "#C0351F", "#267a43", "#b07d09",
];

function MiniAvatars({ count }: { count: number }) {
  const shown = Math.min(count, 7);
  return (
    <div className="flex items-center">
      {Array.from({ length: shown }).map((_, i) => (
        <div
          key={i}
          className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-bold"
          style={{
            backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length],
            marginLeft: i === 0 ? 0 : -8,
            zIndex: shown - i,
          }}
        >
          {String.fromCodePoint(0x1F464)}
        </div>
      ))}
      {count > shown && (
        <div
          className="w-7 h-7 rounded-full border-2 border-white bg-border flex items-center justify-center text-text-secondary text-[9px] font-bold"
          style={{ marginLeft: -8 }}
        >
          +{count - shown}
        </div>
      )}
    </div>
  );
}

export default function SocialProof() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-border rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-5 mx-auto max-w-[1200px] mt-[-1px]"
    >
      {/* 대기자 */}
      <div className="flex items-center gap-3">
        <MiniAvatars count={WAITLIST_COUNT} />
        <div>
          <p className="font-display font-bold text-text-primary text-[15px]">
            {WAITLIST_COUNT} people on the waitlist
          </p>
          <p className="text-text-secondary text-xs mt-0.5">
            Early spots going fast — Namul tier is limited
          </p>
        </div>
      </div>

      {/* 구분선 */}
      <div className="hidden sm:block w-px h-10 bg-border" />

      {/* 메이커 수 */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-secondary-light flex items-center justify-center text-xl shrink-0">
          🧑‍🍳
        </div>
        <div>
          <p className="font-display font-bold text-text-primary text-[15px]">
            {MAKER_COUNT} makers preparing to list
          </p>
          <p className="text-text-secondary text-xs mt-0.5">
            AI tools ready to launch with free first slots
          </p>
        </div>
      </div>

      {/* 구분선 */}
      <div className="hidden sm:block w-px h-10 bg-border" />

      {/* 론칭 카운트다운 힌트 */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center text-xl shrink-0">
          🚀
        </div>
        <div>
          <p className="font-display font-bold text-text-primary text-[15px]">
            Launch: Q2 2026
          </p>
          <p className="text-text-secondary text-xs mt-0.5">
            Waitlist members get notified first
          </p>
        </div>
      </div>
    </motion.div>
  );
}
