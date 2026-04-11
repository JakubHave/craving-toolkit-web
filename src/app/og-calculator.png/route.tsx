import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#f8fafc",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            border: "2px solid #d1fae5",
            padding: "48px 64px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p
            style={{
              fontSize: "24px",
              color: "#64748b",
              marginBottom: "8px",
            }}
          >
            Free Calculator
          </p>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "800",
              color: "#0f172a",
              textAlign: "center",
              lineHeight: 1.2,
              marginBottom: "24px",
            }}
          >
            How Much Does Your
            <br />
            Addiction Really Cost?
          </h1>
          <p
            style={{
              fontSize: "64px",
              fontWeight: "800",
              color: "#059669",
              marginBottom: "16px",
            }}
          >
            $7,847/year
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "#94a3b8",
            }}
          >
            cravingtoolkit.com
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
