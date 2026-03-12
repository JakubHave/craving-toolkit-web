import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe (will fail gracefully if env var is missing during dev)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_dummy", {
  apiVersion: "2025-02-24.acacia" as any,
});

export async function POST(request: Request) {
  try {
    // If we don't have a real Stripe key yet, mock the checkout flow for development
    if (!process.env.STRIPE_SECRET_KEY) {
      console.log("No Stripe key found, redirecting to mock success page...");
      const origin = request.headers.get("origin") || "http://localhost:3000";
      return NextResponse.redirect(`${origin}/success?session_id=mock_session_123`, 303);
    }

    const origin = request.headers.get("origin") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Craving Toolkit (PDF Guide)",
              description: "Practical tools to fight urges, stop spirals, and stay in recovery.",
            },
            unit_amount: 2400, // €24.00
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
    });

    if (session.url) {
      return NextResponse.redirect(session.url, 303);
    }

    return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
  } catch (error) {
    console.error("Checkout Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
