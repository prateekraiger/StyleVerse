import React from "react";
import { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-4 px-6 font-medium border-b border-gray-200 shadow-sm bg-white">
      <Link to="/" className="text-[#2C7A7B] cursor-pointer">
        <img
          src={assets.logo}
          alt="logo"
          className="w-36 h-auto object-contain"
        />
      </Link>
      <ul className="absolute left-1/2 transform -translate-x-1/2 hidden sm:flex gap-10 text-sm text-gray-600">
        {[
          { to: "/", label: "HOME" },
          { to: "/collection", label: "COLLECTION" },
          { to: "/about", label: "ABOUT" },
          { to: "/contact", label: "CONTACT" },
        ].map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 transition-all duration-200 ${
                isActive
                  ? "text-[#2C7A7B] font-semibold"
                  : "hover:text-[#38B2AC]"
              }`
            }
          >
            <p className="tracking-wide">{item.label}</p>
            <hr className="w-1/2 h-[2px] bg-[#2C7A7B] transition-all duration-200 scale-0 hover:scale-100" />
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-6 ml-auto">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer hover:opacity-80 text-gray-600"
          alt="search icon"
        />

        <div className="relative group">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer hover:opacity-80 text-gray-600"
              alt="profile icon"
            />
          </Link>
          <div className="hidden absolute right-0 pt-4 group-hover:block z-10">
            <div className="flex flex-col gap-2 w-38 py-3 px-5 bg-white text-gray-600 rounded shadow-lg border border-gray-100">
              <Link to="/profile">
                <p className="cursor-pointer hover:text-[#2C7A7B]">
                  My Profile
                </p>
              </Link>
              <Link to="/orders">
                <p className="cursor-pointer hover:text-[#2C7A7B]">Orders</p>
              </Link>
              <Link to="/logout">
                <p className="cursor-pointer hover:text-[#2C7A7B]">Logout</p>
              </Link>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart icon" />
          <p className="absolute -right-1 -bottom-1 w-4 text-center leading-4 bg-[#ED8936] text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/*sidebar menu */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="menu icon"
        />
      </div>

      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-50"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border-b ${
                isActive ? "bg-gray-50 text-[#2C7A7B]" : "hover:bg-gray-50"
              }`
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border-b ${
                isActive ? "bg-gray-50 text-[#2C7A7B]" : "hover:bg-gray-50"
              }`
            }
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border-b ${
                isActive ? "bg-gray-50 text-[#2C7A7B]" : "hover:bg-gray-50"
              }`
            }
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className={({ isActive }) =>
              `py-2 pl-6 border-b ${
                isActive ? "bg-gray-50 text-[#2C7A7B]" : "hover:bg-gray-50"
              }`
            }
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
