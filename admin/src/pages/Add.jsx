import React, { useState } from "react";
import assets from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("TopWear");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = (e, setImageFunction) => {
    const file = e.target.files[0];
    if (file) {
      setImageFunction(file);
    }
  };

  const handleSizeToggle = (size) => {
    if (sizes.includes(size)) {
      setSizes(sizes.filter((s) => s !== size));
    } else {
      setSizes([...sizes, size]);
    }
  };

  const onsubmithandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestseller", bestseller);

      // Append images if they exist
      image1 && formData.append("images", image1);
      image2 && formData.append("images", image2);
      image3 && formData.append("images", image3);
      image4 && formData.append("images", image4);

      const response = await axios.post(
        backendUrl + "/api/products/add", 
        formData,
        { headers: { token } },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);

      setSuccessMessage("Product added successfully!");
      // Reset form
      setProductName("");
      setDescription("");
      setCategory("Men");
      setSubCategory("TopWear");
      setPrice("");
      setSizes([]);
      setBestseller(false);
      setImage1(null);
      setImage2(null);
      setImage3(null);
      setImage4(null);
    } catch (error) {
      console.error("Error adding product:", error);
      setErrorMessage(
        error.response?.data?.message ||
          "Failed to add product. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onsubmithandler}
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h2>

      {successMessage && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {errorMessage}
        </div>
      )}

      {/* Image Upload Section */}
      <div className="mb-8">
        <p className="text-lg font-medium mb-3 text-gray-700">Upload Images</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { num: 1, state: image1, setState: setImage1 },
            { num: 2, state: image2, setState: setImage2 },
            { num: 3, state: image3, setState: setImage3 },
            { num: 4, state: image4, setState: setImage4 },
          ].map(({ num, state, setState }) => (
            <label
              key={num}
              htmlFor={`image${num}`}
              className={`cursor-pointer border-2 border-dashed rounded-lg p-4 flex items-center justify-center hover:bg-gray-50 transition-colors h-40 ${
                state ? "border-green-500" : "border-gray-300"
              }`}
            >
              {state ? (
                <img
                  src={URL.createObjectURL(state)}
                  alt={`Preview ${num}`}
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <img
                  src={assets.upload_area}
                  alt="upload_area"
                  className="w-full h-auto max-w-[100px]"
                />
              )}
              <input
                type="file"
                id={`image${num}`}
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageChange(e, setState)}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2 text-gray-700">
          Product Name
        </label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Type Here"
          required
          className="w-full max-w-[500px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Product Description */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2 text-gray-700">
          Product Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write Content Here"
          required
          rows={4}
          className="w-full max-w-[500px] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      </div>

      {/* Category, Subcategory, and Price in a row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Category */}
        <div>
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Product Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        {/* Sub Category */}
        <div>
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Sub Category
          </label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="TopWear">TopWear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block text-lg font-semibold mb-2 text-gray-700">
            Product Price
          </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="499"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Product Sizes */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2 text-gray-700">
          Product Sizes
        </label>
        <div className="flex gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() => handleSizeToggle(size)}
              className={`px-3 py-1 rounded cursor-pointer transition-colors ${
                sizes.includes(size)
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-200 text-gray-800 hover:bg-slate-300"
              }`}
            >
              <p>{size}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller Checkbox */}
      <div className="mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="bestseller"
            checked={bestseller}
            onChange={(e) => setBestseller(e.target.checked)}
            className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label
            htmlFor="bestseller"
            className="ml-2 block text-lg font-medium text-gray-700"
          >
            Add To Bestseller
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`px-6 py-3 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors ${
          isSubmitting
            ? "bg-indigo-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {isSubmitting ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
};

export default Add;
