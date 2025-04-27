import React, { useContext, useState } from "react";
import CartTotal from "../components/cartTotal";
import Title from "../components/title";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51RIAFTPbT13EgNjQbu5RoViaKKqpGA1qboAdtg3ZJNeQkY12wE1mSzgw2zC2jvpyq6bQopcSjwhtyDzNjIZqVZ7b00SnzDfZi9"); // TODO: Replace with your real Stripe publishable key

const Placeorder = () => {
  const [method, setMethod] = useState("cod");
  const [loading, setLoading] = useState(false);
  const { products, cartItems, navigate, user, clearCart } = useContext(ShopContext);

  // Delivery information state
  const [delivery, setDelivery] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
  });

  // Helper: Convert cartItems to array of products for backend
  const cartData = [];
  for (const itemId in cartItems) {
    for (const size in cartItems[itemId]) {
      if (cartItems[itemId][size] > 0) {
        const productData = products.find((p) => p._id === itemId);
        if (productData) {
          cartData.push({
            productId: productData._id,
            name: productData.name,
            size,
            quantity: cartItems[itemId][size],
            price: productData.price,
          });
        }
      }
    }
  }

  // Helper: Validate delivery info
  const isDeliveryValid = Object.values(delivery).every((v) => v.trim() !== "");

  // Calculate total price
  const totalPrice = cartData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Place order handler
  const handlePlaceOrder = async () => {
    if (cartData.length === 0) {
      toast.error("Cart is empty");
      return;
    }
    if (!isDeliveryValid) {
      toast.error("Please fill in all delivery information fields");
      return;
    }
    setLoading(true);
    try {
      if (method === "stripe") {
        // create order in DB before redirecting to Stripe
        await axios.post("/api/orders", { products: cartData, totalPrice, date: new Date(), delivery });
        // Call backend to create Stripe Checkout session
        const response = await axios.post("/api/create-checkout-session", {
          products: cartData,
          totalPrice,
        });
        const sessionId = response.data.sessionId;
        const stripe = await stripePromise;
        await stripe.redirectToCheckout({ sessionId });
        // Clear cart after successful payment redirect
        clearCart();
        window.location.href = "/orders";
        return;
      }
      // COD fallback
      const payload = {
        products: cartData,
        totalPrice,
        date: new Date(),
        delivery,
      };
      await axios.post("/api/orders", payload);
      toast.success("Order placed successfully!");
      // Clear cart after COD order
      clearCart();
      navigate("/orders");
    } catch (err) {
      toast.error("Order placement failed");
      if (err.response && err.response.data && err.response.data.message) {
        console.error("Order error:", err.response.data.message);
      } else {
        console.error("Order error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 px-4 sm:px-8 max-w-6xl mx-auto">
      {/* left side - delivery information */}
      <div className="flex flex-col gap-4 w-full sm:w-1/2">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY " text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={delivery.firstName}
            onChange={(e) => setDelivery({ ...delivery, firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={delivery.lastName}
            onChange={(e) => setDelivery({ ...delivery, lastName: e.target.value })}
          />
        </div>
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={delivery.email}
          onChange={(e) => setDelivery({ ...delivery, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={delivery.street}
          onChange={(e) => setDelivery({ ...delivery, street: e.target.value })}
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={delivery.city}
            onChange={(e) => setDelivery({ ...delivery, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={delivery.state}
            onChange={(e) => setDelivery({ ...delivery, state: e.target.value })}
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="PinCode"
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={delivery.pincode}
            onChange={(e) => setDelivery({ ...delivery, pincode: e.target.value })}
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={delivery.country}
            onChange={(e) => setDelivery({ ...delivery, country: e.target.value })}
          />
        </div>
        <input
          type="tel"
          placeholder="Phone"
          className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={delivery.phone}
          onChange={(e) => setDelivery({ ...delivery, phone: e.target.value })}
        />
      </div>

      {/* right side - cart total and payment */}
      <div className="w-full sm:w-1/2 flex flex-col gap-8">
        <div className="shadow-md rounded-lg p-4 bg-gray-50">
          <CartTotal />
        </div>

        <div className="mt-4">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1="PAYMENT " text2="INFORMATION" />
          </div>

          {/* payment method selection */}
          <div className="flex flex-col gap-3 mt-4">
            <div
              onClick={() => setMethod("stripe")}
              className={`flex items-center gap-3 border p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-all ${
                method === "stripe" ? "border-blue-500 bg-blue-50" : ""
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  method === "stripe" ? "border-blue-500" : "border-gray-400"
                }`}
              >
                {method === "stripe" && (
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                )}
              </div>
              <img className="h-6" src={assets.stripe_logo} alt="Stripe" />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className={`flex items-center gap-3 border p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-all ${
                method === "cod" ? "border-blue-500 bg-blue-50" : ""
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  method === "cod" ? "border-blue-500" : "border-gray-400"
                }`}
              >
                {method === "cod" && (
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                )}
              </div>
              <p className="font-medium">Cash on Delivery</p>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
                Placing Order...
              </span>
            ) : (
              "Place Order"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
