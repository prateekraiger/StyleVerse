import React, { useEffect, useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/title";
import { assets } from "../assets/assets";
import CartTotal from "../components/cartTotal";

const Cart = () => {
  const { products, currency, cartItems, addToCart, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleQuantityChange = (itemId, size, quantity) => {
    if (quantity < 1) return;
    addToCart(itemId, size, quantity);
  };

  const handleRemoveItem = (itemId, size) => {
    const updatedCartItems = { ...cartItems };

    if (updatedCartItems[itemId]?.[size]) {
      delete updatedCartItems[itemId][size];

      if (Object.keys(updatedCartItems[itemId]).length === 0) {
        delete updatedCartItems[itemId];
      }
    }

    setCartData((prev) =>
      prev.filter((item) => !(item._id === itemId && item.size === size))
    );
  };

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="Your " text2="Cart" />
      </div>

      {cartData.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            if (!productData) return null;

            const { name, price, image } = productData;

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex items-start gap-6">
                  <img
                    src={image?.[0] || assets.placeholder_image}
                    alt={name}
                    className="w-16 sm:w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">{name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <input
                  type="number"
                  className="border max-w-20 px-1 sm:px-2 py-1"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(
                      item._id,
                      item.size,
                      parseInt(e.target.value)
                    )
                  }
                />
                <img
                  className="w-4 mr-4 sm:w-5 cursor-pointer"
                  src={assets.bin_icon}
                  alt="Remove item"
                  onClick={() => handleRemoveItem(item._id, item.size)}
                />
              </div>
            );
          })}
          {/* Render CartTotal component */}
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/placeorder")}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
