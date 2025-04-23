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

export default router;
