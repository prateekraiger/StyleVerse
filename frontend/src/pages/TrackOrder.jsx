import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { assets } from "../assets/assets";

const TrackOrder = () => {
  const navigate = useNavigate();
  const { products, currency } = useContext(ShopContext);
  const [ordersList, setOrdersList] = useState([]);

  useEffect(() => {
    axios.get("/api/orders")
      .then(res => setOrdersList(res.data.orders))
      .catch(err => console.error("Fetch orders error:", err));
  }, []);

  const latestOrder = ordersList.length > 0 ? ordersList[ordersList.length - 1] : null;
  const orderItems = latestOrder?.products || latestOrder?.items || [];

  return (
    <div className="max-w-3xl mx-auto px-4 py-14 border-t">
      <h1 className="text-3xl font-semibold mb-2">Track Your Order</h1>
      {latestOrder ? (
        orderItems.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item.productId
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
                <p className="text-gray-500">Order Status: Shipped</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500">No orders to track.</p>
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
