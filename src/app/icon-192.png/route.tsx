import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #059669, #0d9488)",
          borderRadius: "40px",
        }}
      >
        <span
          style={{
            fontSize: 96,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-2px",
          }}
        >
          CT
        </span>
      </div>
    ),
    { width: 192, height: 192 }
  );
}
