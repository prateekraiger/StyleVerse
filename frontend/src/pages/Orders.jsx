import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  const [ordersList, setOrdersList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/orders")
      .then((res) => setOrdersList(res.data.orders))
      .catch((err) => console.error("Fetch orders error:", err));
  }, []);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl mb-6">
        <Title text1={"MY "} text2={"ORDERS"} />
      </div>

      {ordersList.length === 0 ? (
        <p className="text-gray-500">You have no orders yet.</p>
      ) : (
        ordersList.map((order, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
            <div className="mb-2 font-medium">Order {idx + 1} - {new Date(order.date).toLocaleString()}</div>
            {order.products.map((item, j) => {
              const productData = products.find((p) => p._id === item.productId);
              return (
                <div key={j} className="flex items-center gap-4 py-2">
                  <img
                    src={productData?.image?.[0] || assets.placeholder_image}
                    alt={productData?.name || item.name}
                    className="w-16 sm:w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <p className="text-sm sm:text-lg font-medium">{productData?.name || item.name}</p>
                    <p className="text-gray-500">Order Status: Ordered</p>
                  </div>
                  <span className="font-medium">x {item.quantity}</span>
                  <span>{currency}{item.price * item.quantity}</span>
                </div>
              );
            })} 
            <div className="mt-2 font-medium">Total: {currency}{order.totalPrice}</div>
            <button onClick={() => navigate("/trackorder")} className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Track Order
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
