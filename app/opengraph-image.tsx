import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAFAF8",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 90px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top-left badge */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 90,
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#FFF0ED",
            border: "1.5px solid #F5C4BB",
            borderRadius: 100,
            padding: "8px 18px",
          }}
        >
          <span style={{ fontSize: 14, color: "#E8432A", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Pre-launch · Founding creators wanted
          </span>
        </div>

        {/* Bowl emoji */}
        <div style={{ fontSize: 64, marginBottom: 24, display: "flex" }}>🍚</div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#1A1A18",
            lineHeight: 1.08,
            marginBottom: 28,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>For the builders who</span>
          <span>
            refuse to earn{" "}
            <span style={{ color: "#E8432A" }}>$0.</span>
          </span>
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: 26,
            color: "#6B6B6B",
            marginBottom: 52,
            display: "flex",
          }}
        >
          AI agent tools are everywhere. Revenue isn&apos;t.
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: 48 }}>
          {[
            { val: "0%", label: "platform fees" },
            { val: "100%", label: "revenue to you" },
            { val: "Day 1", label: "community access" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ fontSize: 32, fontWeight: 800, color: "#1A1A18" }}>{s.val}</span>
              <span style={{ fontSize: 16, color: "#9B9B94" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom-right domain */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 90,
            fontSize: 22,
            fontWeight: 700,
            color: "#E8432A",
            display: "flex",
          }}
        >
          bibimb.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
