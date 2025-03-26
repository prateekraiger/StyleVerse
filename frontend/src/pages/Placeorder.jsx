import React, { useContext, useState } from "react";
import CartTotal from "../components/cartTotal";
import Title from "../components/title";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const Placeorder = () => {
  const [method, setMethod] = useState("cod");

  const { navigate } = useContext(ShopContext);

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
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="PinCode"
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="Country"
            className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <input
          type="tel"
          placeholder="Phone"
          className="border border-gray-300 rounded py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
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
              onClick={() => setMethod("razorpay")}
              className={`flex items-center gap-3 border p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-all ${
                method === "razorpay" ? "border-blue-500 bg-blue-50" : ""
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  method === "razorpay" ? "border-blue-500" : "border-gray-400"
                }`}
              >
                {method === "razorpay" && (
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                )}
              </div>
              <img className="h-6" src={assets.razorpay_logo} alt="Razorpay" />
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
            onClick={() => navigate("/orders")}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
