import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setList(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to fetch products");
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to remove product");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">
        All Products List
      </h2>
      <div className="flex flex-col gap-3">
        {/* Desktop Table Header */}
        <div className="hidden md:grid grid-cols-[80px_2fr_1fr_1fr_80px] items-center py-3 px-4 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span className="text-center">Action</span>
        </div>

        {/* Product List */}
        {list.map((item) => (
          <div
            className="grid grid-cols-[80px_1fr_80px] md:grid-cols-[80px_2fr_1fr_1fr_80px] items-center gap-4 py-3 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            key={item._id}
          >
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
            />

            <div className="flex flex-col">
              <p className="font-medium text-gray-900">{item.name}</p>
              <p className="md:hidden text-sm text-gray-500">{item.category}</p>
            </div>

            <p className="hidden md:block text-gray-600">{item.category}</p>

            <div className="hidden md:flex items-center gap-1">
              <span className="text-gray-500">{currency}</span>
              <span className="font-medium">{item.price}</span>
            </div>

            {/* Mobile price and action */}
            <div className="flex flex-col items-end md:hidden">
              <div className="flex items-center gap-1">
                <span className="text-gray-500 text-sm">{currency}</span>
                <span className="font-medium">{item.price}</span>
              </div>
              <button
                onClick={() => removeProduct(item._id)}
                className="mt-1 text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Remove
              </button>
            </div>

            {/* Desktop action */}
            <button
              onClick={() => removeProduct(item._id)}
              className="hidden md:flex justify-center text-red-500 hover:text-red-700 font-medium p-2 rounded-full hover:bg-red-50 transition-colors"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
