import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Captaí — Agente de Atendimento com IA no WhatsApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1C1917",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(234,88,12,0.25) 0%, rgba(28,25,23,0) 55%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28, marginBottom: 44 }}>
          <div
            style={{
              width: 100,
              height: 100,
              background: "#EA580C",
              borderRadius: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 42,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            JS
          </div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>Captaí</div>
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#FED7AA", maxWidth: 920, textAlign: "center", lineHeight: 1.35 }}>
          Agente de atendimento com IA que responde, qualifica e vende no WhatsApp
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#78716C", marginTop: 36 }}>JS Soluções</div>
      </div>
    ),
    { ...size }
  );
}
