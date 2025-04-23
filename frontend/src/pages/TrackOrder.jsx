import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const TrackOrder = () => {
  const navigate = useNavigate();
  const { products, cartItems } = useContext(ShopContext);

  const cartData = [];
  for (const itemId in cartItems) {
    for (const size in cartItems[itemId]) {
      if (cartItems[itemId][size] > 0) {
        cartData.push({
          _id: itemId,
          size: size,
          quantity: cartItems[itemId][size],
        });
      }
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-14 border-t">
      <h1 className="text-3xl font-semibold mb-2">Track Your Order</h1>
      {cartData.length === 0 ? (
        <p className="text-gray-500">No orders to track.</p>
      ) : (
        cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) return null;

          const { name, image } = productData;

          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200 flex items-center gap-4"
            >
              <img
                src={image?.[0] || assets.placeholder_image}
                alt={name}
                className="w-16 sm:w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <p className="text-sm sm:text-lg font-medium">{name}</p>
                <p className="text-gray-500">Order Status: Ordered</p>
              </div>
            </div>
          );
        })
      )}
      <button
        onClick={() => navigate("/cart")}
        className="bg-black text-white text-sm px-8 py-3 rounded hover:bg-gray-800 transition"
      >
        Back to Cart
      </button>
    </div>
  );
};

export default TrackOrder;
