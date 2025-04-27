import express from "express";
import Stripe from "stripe";

const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Stripe Checkout Session
router.post("/create-checkout-session", async (req, res) => {
  const { products, totalPrice } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: products.map((item) => ({
        price_data: {
          currency: "inr",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: "http://localhost:5173/orders?success=true", // add query param for clarity
      cancel_url: "http://localhost:5173/placeorder?canceled=true",
    });
    res.json({ sessionId: session.id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
