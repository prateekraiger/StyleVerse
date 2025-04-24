import express from "express";
import Order from "../models/orderModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json({ orders });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders", error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { products, totalPrice, date } = req.body;
    // Defensive: ensure products is an array and totalPrice is a number
    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ success: false, message: "Products array is required" });
    }
    if (typeof totalPrice !== "number" || totalPrice <= 0) {
      return res.status(400).json({ success: false, message: "Total price must be a positive number" });
    }
    const newOrder = new Order({
      products,
      totalPrice,
      date: date || new Date(),
    });
    await newOrder.save();
    res.json({ success: true, order: newOrder });
  } catch (error) {
    console.error("Order creation error:", error);
    res.status(500).json({ success: false, message: "Failed to create order", error: error.message });
  }
});

export default router;
