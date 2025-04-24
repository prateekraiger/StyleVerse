import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        // Accept any string for productId for compatibility
        productId: { type: String },
        name: String,
        size: String,
        quantity: Number,
        price: Number
      }
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
    totalPrice: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
