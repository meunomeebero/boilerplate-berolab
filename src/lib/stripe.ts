import Stripe from "stripe";

// Create a singleton for Stripe client
let stripeInstance: Stripe | undefined;

// Get or initialize Stripe
export const getStripe = async () => {
  if (!stripeInstance && process.env.STRIPE_SECRET_KEY) {
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2025-04-30.basil",
      typescript: true,
    });
  }
  return stripeInstance;
};

export async function createStripeCustomerSubscriptionPaymentCheckout({
  priceId,
  customerId,
  successUrl,
  cancelUrl,
}: {
  priceId: string;
  customerId: string;
  successUrl: string;
  cancelUrl: string;
}) {
  const stripe = await getStripe();
  if (!stripe) throw new Error("Stripe not initialized");
  
  return await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: cancelUrl,
  });
}

export async function createStripeCustomer({ email, name }: { email: string; name?: string }) {
  const stripe = await getStripe();
  if (!stripe) throw new Error("Stripe not initialized");
  
  return await stripe.customers.create({
    email,
    name: name || undefined,
  });
}

export async function getStripeCustomerSubscription(subscriptionId: string) {
  const stripe = await getStripe();
  if (!stripe) throw new Error("Stripe not initialized");
  
  return await stripe.subscriptions.retrieve(subscriptionId);
}

