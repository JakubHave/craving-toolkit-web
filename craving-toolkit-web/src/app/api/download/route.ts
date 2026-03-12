import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import fs from "fs";
import path from "path";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_dummy", {
  apiVersion: "2025-02-24.acacia" as any,
});

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return new NextResponse("Missing session ID", { status: 400 });
  }

  try {
    // If in dev mode without Stripe keys, allow the mock session
    if (!process.env.STRIPE_SECRET_KEY && sessionId === "mock_session_123") {
      // Return a dummy PDF or text file for development testing
      return new NextResponse("Mock PDF Content - Imagine the Craving Toolkit here!", {
        headers: {
          "Content-Disposition": 'attachment; filename="craving-toolkit.txt"',
          "Content-Type": "text/plain",
        },
      });
    }

    // Verify the session actually exists and is paid
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return new NextResponse("Payment not completed", { status: 403 });
    }

    // In a real production setup, we would read the actual PDF from an S3 bucket or local private folder.
    // For now, we simulate the PDF download:
    return new NextResponse("This will be the actual PDF content in production.", {
      headers: {
        "Content-Disposition": 'attachment; filename="craving-toolkit.pdf"',
        "Content-Type": "application/pdf",
      },
    });

  } catch (error) {
    console.error("Download Error:", error);
    return new NextResponse("Invalid or expired session", { status: 403 });
  }
}
