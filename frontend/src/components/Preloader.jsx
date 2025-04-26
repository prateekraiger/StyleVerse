import React from "react";
import { assets } from "../assets/assets";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-orange-400 z-50">
      <div className="flex flex-col items-center relative">
        {/* Glowing Ring Effect */}
        <div className="absolute w-80 h-80 rounded-full border-8 border-orange-300 animate-ping opacity-40" />

        {/* Logo Container */}
        <div className="w-64 h-64 rounded-full border-8 border-white flex items-center justify-center bg-white z-10 shadow-xl">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-40 h-40 object-contain"
          />
        </div>

        {/* Loading Text */}
        <p className="mt-10 text-white text-lg font-semibold tracking-wide drop-shadow-lg">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
