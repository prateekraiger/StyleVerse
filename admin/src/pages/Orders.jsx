import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const hardcodedOrders = [
    { id: 1, productName: "Men's Jacket", quantity: 2, totalPrice: 2000 },
    { id: 2, productName: "Women's Dress", quantity: 1, totalPrice: 1500 },
    { id: 3, productName: "Kid's Shoes", quantity: 3, totalPrice: 1200 },
  ];

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
  }, []);

  if (loading) {
    return <p>Loading orders...</p>;
  }

  if (orders.length === 0) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Order List</h1>
        <p className="text-gray-500">
          No orders found. Displaying hardcoded data:
        </p>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Product Name</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {hardcodedOrders.map((order) => (
              <tr key={order.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {order.productName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.quantity}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ₹{order.totalPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Order List</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">Quantity</th>
            <th className="border border-gray-300 px-4 py-2">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {order.productName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {order.quantity}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ₹{order.totalPrice}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                className="border border-gray-300 px-4 py-2 text-center"
              >
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
