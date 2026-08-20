import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#EA580C",
          borderRadius: 7,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <span
          style={{
            color: "#fff",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: "-0.5px",
            fontFamily: "system-ui",
          }}
        >
          JS
        </span>
        <div
          style={{
            position: "absolute",
            bottom: -1,
            right: -1,
            width: 9,
            height: 9,
            background: "#0369A1",
            borderRadius: "50%",
            border: "1.5px solid #EA580C",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
