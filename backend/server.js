import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoute.js";
import ordersRoutes from "./routes/ordersRoutes.js";
import stripeRoutes from "./stripe.js";

// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());

// api endpoints
app.get("/", (req, res) => {
  res.send("Testing APi");
});

app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api", stripeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
