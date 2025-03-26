import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border-b border-gray-200 items-center relative overflow-hidden bg-gray-50">
      {/* Hero Left */}
      <div className="w-full sm:w-1/2 flex flex-col items-start justify-center py-12 sm:py-16 px-6 sm:px-10 z-10">
        <div className="text-[#414141] max-w-md">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 md:w-12 h-[2px] bg-[#414141]"></div>
            <p className="font-medium text-sm md:text-base tracking-wider uppercase">
              Our Bestsellers
            </p>
          </div>

          <h1 className="prata-regular text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6 sm:mb-8">
            Latest Arrivals <span className="text-gray-400">2025</span>
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed hidden sm:block">
            Discover our curated collection of premium pieces designed for the
            modern lifestyle.
          </p>

          <button className="flex items-center gap-3 bg-[#414141] text-white px-6 py-3 hover:bg-black transition-colors duration-300 group">
            <a href="/collection">
              <span className="font-medium">Shop Collection</span>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Right */}
      <div className="w-full sm:w-1/2 h-full relative">
        <div className="absolute -left-10 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 sm:block hidden"></div>
        <img
          src={assets.hero_img}
          alt="Latest fashion collection"
          className="w-full h-auto object-cover sm:h-[500px] lg:h-[600px]"
        />
        <div className="absolute bottom-6 right-6 bg-white py-2 px-4 shadow-md text-sm font-medium text-gray-600 hidden sm:block">
          New Season
        </div>
      </div>
    </div>
  );
};

export default Hero;
