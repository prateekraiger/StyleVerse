import React from "react";

const Orders = () => {
  const orders = [
    {
      id: "aaaaa",
      productName: "Women Round Neck Cotton Top",
      quantity: 2,
      totalPrice: 1598,
    },
    {
      id: "aaaab",
      productName: "Men Round Neck Pure Cotton T-shirt",
      quantity: 1,
      totalPrice: 899,
    },
    {
      id: "aaaac",
      productName: "Girls Round Neck Cotton Top",
      quantity: 3,
      totalPrice: 3297,
    },
  ];

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
          {orders.map((order) => (
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
};

export default Orders;
