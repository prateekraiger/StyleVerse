import React, { useState, useEffect, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import RelatedProducts from "../components/relatedProducts";
import { Truck, RotateCcw, Shield } from "lucide-react";
import { toast } from "react-toastify";

const Product = () => {
  const params = useParams();
  const location = useLocation();
  const { products, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [loading, setLoading] = useState(true);
  const [addedToCart, setAddedToCart] = useState(false);

  const getProductIdFromUrl = () => {
    const pathParts = location.pathname.split("/");
    return pathParts[pathParts.length - 1] || params.productId;
  };

  useEffect(() => {
    const currentProductId = params.productId || getProductIdFromUrl();
    setLoading(true);

    if (products?.length && currentProductId) {
      const foundProduct = products.find(
        (item) => item._id === currentProductId
      );
      if (foundProduct) {
        setProductData(foundProduct);
        setSelectedImage(foundProduct.image?.[0] || "");
        // Reset selections when product changes
        setSelectedSize(null);
        setAddedToCart(false);
      }
    }
    setLoading(false);
  }, [params, location.pathname, products]);

  const handleThumbnailClick = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select an item and size");
      return;
    }

    addToCart(productData._id, selectedSize);
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="text-center py-16">
        <p className="text-xl font-medium text-gray-700">Product not found!</p>
        <button
          onClick={() => window.history.back()}
          className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto border-t pt-8 px-4 sm:px-6 lg:px-8 transition-opacity ease-in duration-500 opacity-100">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-gray-500">
        <span className="hover:underline cursor-pointer">Home</span> /
        <span className="hover:underline cursor-pointer">
          {" "}
          {productData.category || "Category"}
        </span>{" "}
        /<span className="font-medium text-gray-700"> {productData.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Product Images */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          {/* Main Image */}
          <div className="w-full h-96 sm:h-[500px] bg-gray-50 rounded-xl overflow-hidden">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt={productData.name}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="bg-gray-200 w-full h-full flex items-center justify-center rounded-lg">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
          </div>

          {/* Thumbnails */}
          {productData.image?.length > 0 && (
            <div className="flex gap-3 overflow-x-auto py-2">
              {productData.image.map((imgSrc, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbnailClick(imgSrc)}
                  className={`w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg cursor-pointer border-2 transition-all ${
                    selectedImage === imgSrc
                      ? "border-blue-500 ring-2 ring-blue-200"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <img
                    src={imgSrc}
                    alt={`${productData.name} - View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {productData.name || "Product Name"}
          </h1>

          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold text-gray-900">
              ₹{productData.price || "0.00"}
            </p>
            {productData.originalPrice && (
              <p className="text-lg text-gray-500 line-through">
                ₹{productData.originalPrice}
              </p>
            )}
            {productData.originalPrice && (
              <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                {Math.round(
                  (1 - productData.price / productData.originalPrice) * 100
                )}
                % Off
              </span>
            )}
          </div>

          <p className="text-gray-600 leading-relaxed">
            {productData.description || "No description available."}
          </p>

          {/* Size Selection */}
          <div>
            <div className="flex justify-between items-center">
              <p className="text-md font-semibold">Select Size</p>
              <button className="text-sm text-blue-600 hover:underline">
                Size Guide
              </button>
            </div>
            <div className="flex gap-3 mt-2 flex-wrap">
              {productData.sizes?.length > 0 ? (
                productData.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => handleSizeClick(size)}
                    className={`min-w-[50px] px-4 py-2 border rounded-md font-medium transition ${
                      selectedSize === size
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 hover:border-gray-500"
                    }`}
                  >
                    {size}
                  </button>
                ))
              ) : (
                <p className="text-gray-500">No sizes available</p>
              )}
            </div>

            {selectedSize && (
              <p className="mt-2 text-green-600 font-medium">
                Selected: {selectedSize}
              </p>
            )}
          </div>

          {/* Add to Cart Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 bg-black text-white px-8 py-3 text-lg font-medium rounded-lg shadow-sm hover:bg-gray-800 transition ${
                addedToCart ? "bg-green-600 hover:bg-green-700" : ""
              }`}
            >
              {addedToCart ? "Added to Cart ✓" : "Add to Cart"}
            </button>
            <button className="flex-1 border border-black px-8 py-3 text-lg font-medium rounded-lg shadow-sm hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>

          {/* Shipping & Returns */}
          <div className="border-t border-b py-4 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Truck size={20} className="text-gray-600" />
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-sm text-gray-500">On orders over ₹499</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw size={20} className="text-gray-600" />
              <div>
                <p className="font-medium">Easy Returns</p>
                <p className="text-sm text-gray-500">7 day returns policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-gray-600" />
              <div>
                <p className="font-medium">Secure Checkout</p>
                <p className="text-sm text-gray-500">100% secure payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Tabs */}
      <div className="mt-16">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === "description"
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === "reviews"
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Reviews
          </button>
          <button
            onClick={() => setActiveTab("shipping")}
            className={`px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === "shipping"
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Shipping & Returns
          </button>
        </div>

        <div className="py-6">
          {activeTab === "description" && (
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed">
                An Well Crafted Tshirt with a beautiful design and a comfortable
                fit. The material is soft and breathable, making it perfect for
                everyday wear. The Tshirt is made of a soft and comfortable
                material that is perfect for everyday wear. It is made of a soft
                and comfortable material that is perfect for everyday wear.
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Features</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Premium cotton blend fabric</li>
                    <li>Regular fit, comfortable for all-day wear</li>
                    <li>Ribbed crew neck</li>
                    <li>Machine washable</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Care Instructions
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Machine wash cold with similar colors</li>
                    <li>Do not bleach</li>
                    <li>Tumble dry low</li>
                    <li>Iron on low heat if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="text-center py-10">
              <p className="text-gray-600">
                No reviews yet. Be the first to review this product!
              </p>
              <button className="mt-4 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                Write a Review
              </button>
            </div>
          )}

          {activeTab === "shipping" && (
            <div className="space-y-4 text-gray-600">
              <h3 className="text-lg font-semibold">Shipping Policy</h3>
              <p>
                We offer free shipping on all orders above ₹499. Standard
                delivery takes 3-5 business days depending on your location.
              </p>

              <h3 className="text-lg font-semibold mt-6">
                Returns & Exchanges
              </h3>
              <p>
                We accept returns within 7 days of delivery. Items must be
                unused, unworn, and in original packaging with tags attached.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* display related products */}
      <div className="mt-16 mb-12">
        <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
        <RelatedProducts
          category={productData.category}
          subcategory={productData.subcategory}
        />
      </div>
    </div>
  );
};

export default Product;
