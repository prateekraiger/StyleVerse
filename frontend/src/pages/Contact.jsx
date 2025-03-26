import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newslater from "../components/Newslater";

const Contact = () => {
  return (
    <div className="py-10 px-6 md:px-12 lg:px-20">
      {/* Title Section */}
      <div className="text-center text-3xl font-semibold border-t pt-10">
        <Title text1="CONTACT " text2="US" />
      </div>

      {/* Content Section */}
      <div className="my-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <img
          src={assets.contact_img}
          alt="Contact"
          className="w-full max-w-[500px] mx-auto md:mx-0 rounded-lg shadow-lg"
        />

        {/* Info Section */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-semibold text-2xl text-gray-700">Our Store</h3>
            <p className="text-gray-500 mt-2">
              New Market <br />
              Indore - 221001
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-gray-700">Contact</h3>
            <p className="text-gray-500 mt-2">
              +91 9876543210 <br />
              <a href="mailto:shopverse@gmail.com" className="underline">
                shopverse@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-700">
              Careers at Shopverse
            </h3>
            <p className="text-gray-500 mt-2">Learn more about our team.</p>
            <button className="mt-4 border border-black px-8 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-300 rounded-md">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newslater />
    </div>
  );
};

export default Contact;
