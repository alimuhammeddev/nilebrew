import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const bodyData = await req.json();
    const { amount, email } = bodyData;

    if (!email || !amount || amount < 100) {
      return NextResponse.json({
        status: "error",
        message: "Invalid email or amount",
      });
    };

    const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/cart`;

    const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount,
        currency: "NGN",
        callback_url: callbackUrl,
      }),
    });

    const data = await paystackRes.json();
    console.log("Paystack Response:", data); // ✅ debug

    return NextResponse.json(data);
  } catch (err) {
    console.error("Paystack API Error:", err);
    return NextResponse.json({ status: "error", message: "Failed to initialize payment" });
  }
}