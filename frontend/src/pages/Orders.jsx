import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const { products, currency, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

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
    <div className="border-t pt-16">
      <div className="text-2xl mb-6">
        <Title text1={"MY "} text2={"ORDERS"} />
      </div>

      {cartData.length === 0 ? (
        <p className="text-gray-500">You have no orders yet.</p>
      ) : (
        cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) return null;

          const { name, price, image } = productData;

          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex items-center gap-4">
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

              <div className="md:w-1/2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="min-w-2 h-2 rounded-full bg-green-500"></div>
                  <p className="text-sm md:text-base font-medium text-gray-700">
                    Ready To Deliver
                  </p>
                </div>

                <button
                  onClick={() => navigate("/trackorder")}
                  className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Track Order
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Orders;
