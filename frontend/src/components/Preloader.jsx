import React from "react";
import { assets } from "../assets/assets";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center relative">
        {/* Glowing Ring Effect */}
        <div className="absolute w-64 h-64 rounded-full border-8 border-orange-400 animate-ping opacity-30" />

        {/* Logo Container */}
        <div className="w-48 h-48 rounded-full border-8 border-orange-500 flex items-center justify-center bg-white z-10 shadow-lg">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Loading Text */}
        <p className="mt-8 text-orange-500 text-base font-medium tracking-wide">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
