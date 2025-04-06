import React from "react";

const List = () => {
  const products = [
    {
      id: "aaaaa",
      name: "Women Round Neck Cotton Top",
      price: 799,
      category: "Women",
    },
    {
      id: "aaaab",
      name: "Men Round Neck Pure Cotton T-shirt",
      price: 899,
      category: "Men",
    },
    {
      id: "aaaac",
      name: "Girls Round Neck Cotton Top",
      price: 1099,
      category: "Kids",
    },
  ];

  return (
     <div className="p-4">
       <h1 className="text-xl font-bold mb-4">Product List</h1>
       <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 px-4 py-2">
                {product.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ₹{product.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {product.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
