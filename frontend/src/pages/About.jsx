import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletter from "../components/newslater";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* About Us Section */}
      <div className="text-center text-3xl font-semibold border-t pt-10">
        <Title text1="ABOUT " text2="US" />
      </div>
      <div className="my-10 flex flex-col md:flex-row items-center gap-12">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px] rounded-lg shadow-lg"
          alt="About us"
        />
        <div className="flex flex-col gap-6 md:w-2/4 text-gray-700">
          <p>
            Welcome to our shopping platform, designed to provide the best
            shopping experience with quality products at your fingertips. Our
            mission is to make online shopping seamless and enjoyable for every
            customer.
          </p>
          <p>
            We prioritize customer satisfaction by offering a vast collection of
            products, easy navigation, and secure payment options. Whether you
            are looking for the latest trends or everyday essentials, we have
            got you covered.
          </p>
          <b className="text-gray-800 text-lg">Our Mission</b>
          <p>
            Our mission is to deliver top-quality products while ensuring a
            hassle-free shopping experience. We are committed to excellence,
            customer satisfaction, and innovation in the e-commerce space.
          </p>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="text-center text-xl py-8">
        <Title text1="WHY " text2="CHOOSE US" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border p-6 rounded-lg shadow-md bg-white">
          <b className="text-lg">Quality Assurance</b>
          <p className="text-gray-600 mt-2">
            We ensure that all our products go through rigorous quality checks,
            providing our customers with the best-in-class items that meet high
            standards.
          </p>
        </div>
        <div className="border p-6 rounded-lg shadow-md bg-white">
          <b className="text-lg">Convenience</b>
          <p className="text-gray-600 mt-2">
            Shop from the comfort of your home with an easy-to-use interface,
            fast delivery, and multiple payment options tailored for you.
          </p> 
        </div> 
        <div className="border p-6 rounded-lg shadow-md bg-white">
          <b className="text-lg">Exceptional Customer Service</b>
          <p className="text-gray-600 mt-2">
            Our support team is available 24/7 to assist you with any queries or
            concerns, ensuring a smooth shopping journey from start to finish.
          </p>
        </div>
      </div>
      {/* Newsletter Section */}
      <div className="mt-12">
        <Newsletter />
      </div>
    </div>
  );
};

export default About;
