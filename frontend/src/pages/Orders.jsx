import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl mb-6">
        <Title text1={"MY "} text2={"ORDERS"} />
      </div>

      {products.slice(1, 4).map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div className="flex item-start gap-6 text-sm">
            <img
              src={item.image[0]}
              alt="product"
              className="w-16 sm:w-20 rounded-md shadow"
            />
            <div>
              <p className="sm:text-base font-semibold text-gray-800">
                {item.name}
              </p>
              <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                <p className="text-lg font-bold">
                  {currency}
                  {item.price}
                </p>
                <p className="text-gray-600">Quantity: 1</p>
                <p className="text-gray-600">Size: M</p>
              </div>

              <p className="mt-2 text-gray-500">
                Date <span className="text-gray-400">26 May, 2025</span>
              </p>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="min-w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-sm md:text-base font-medium text-gray-700">
                Ready To Deliver
              </p>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 transition duration-200">
              Track Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
