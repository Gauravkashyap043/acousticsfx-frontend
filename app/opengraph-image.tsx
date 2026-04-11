import { ImageResponse } from "next/og";

export const alt = "FX Acoustics — Premium Acoustic Solutions & Panels";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 56,
          background: "#0a0a0a",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            FX Acoustics
          </div>
          <div style={{ fontSize: 32, fontWeight: 400, color: "#e5e5e5", maxWidth: 900 }}>
            Premium Acoustic Solutions & Panels
          </div>
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#a3a3a3",
            letterSpacing: "0.02em",
          }}
        >
          acousticsfx.com
        </div>
      </div>
    ),
    { ...size }
  );
}
