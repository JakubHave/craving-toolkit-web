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
          borderRadius: "100px",
        }}
      >
        <span
          style={{
            fontSize: 256,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-6px",
          }}
        >
          CT
        </span>
      </div>
    ),
    { width: 512, height: 512 }
  );
}
