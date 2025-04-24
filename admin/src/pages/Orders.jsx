import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("/api/orders");
        console.log("Orders API Response:", response.data); // Debugging
        setOrders(response.data.orders || []);
      } catch (error) {
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
    // Poll every 10 seconds for live updates
    const interval = setInterval(fetchOrders, 10000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (orders.length === 0) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Order List</h1>
        <p className="text-gray-500">No orders found.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Order List</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Order ID</th>
            <th className="border border-gray-300 px-4 py-2">Products</th>
            <th className="border border-gray-300 px-4 py-2">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="border border-gray-300 px-4 py-2">{order._id}</td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc pl-4">
                  {order.products && order.products.length > 0 ? (
                    order.products.map((product, idx) => (
                      <li key={idx}>
                        {product.name} (Size: {product.size}, Qty: {product.quantity}, ₹{product.price})
                      </li>
                    ))
                  ) : (
                    <li>No products</li>
                  )}
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2">₹{order.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
