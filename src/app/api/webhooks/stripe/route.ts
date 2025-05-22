import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
// import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.text();
  const headersList = await headers();
  const signature = headersList.get("Stripe-Signature");
  
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-04-30.basil",
  });
  
  let event: Stripe.Event;
  
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new NextResponse(`Webhook Error: ${errorMessage}`, { status: 400 });
  }
  
  // Processador de eventos aqui
  
  console.log(event);

  return new NextResponse(null, { status: 200 });
}