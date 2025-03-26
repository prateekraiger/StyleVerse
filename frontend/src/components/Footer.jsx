import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaMapMarkerAlt,
  FaCreditCard,
  FaLock,
  FaTruck,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F7FAFC] border-t border-[#E2E8F0] text-[#2D3748] py-12 px-5">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="flex flex-col sm:grid grid-cols-1 md:grid-cols-4 gap-10 text-sm mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <img src={assets.logo} className="mb-5 w-36" alt="ShopVerse Logo" />
            <p className="text-[#4A5568] mb-4 leading-relaxed">
              Your go-to online store for the best products at unbeatable
              prices. We bring quality products from around the world directly
              to your doorstep.
            </p>

            {/* Payment Methods */}
            <div className="mt-5">
              <p className="text-[#2C7A7B] font-medium mb-2">We Accept:</p>
              <div className="flex gap-3 text-[#718096]">
                <FaCreditCard size={20} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#718096"
                >
                  <path d="M23 5v14h-22v-14h22zm-2 2h-18v10h18v-10zm-3 6h-12v2h12v-2zm0-3h-12v2h12v-2zm-11-1h6v-1h-6v1z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#718096"
                >
                  <path d="M7.05 24h-6.479l.359-6.368 3.058.501c3.623-9.927 9.899-14.127 19.712-14.133-.063 1.868-.875 3.628-2.155 5.208 2.034 1.057 3.474 2.891 3.92 5.318l-5.455 1.169c-.506-1.269-1.787-2.282-3.325-2.282-1.739 0-3.132 1.217-3.404 2.833l-6.231 1.255zm-.885-2.313l5.117-1.013c.783 1.207 2.176 1.916 3.758 1.916 2.518 0 4.561-2.027 4.561-4.543 0-.948-.31-1.822-.818-2.552.878-.648 1.817-1.286 2.744-1.778-1.463 1.013-1.946 1.352-2.861 2.209 1.371-4.448-1.333-6.414-1.333-6.414s.714 3.906-5.957 8.373l-1.601-.305.428-4.233 2.368.358c.264-.937.484-1.466.915-2.286-2.51 1.101-3.995 3.685-3.995 3.685-1.226-1.732-3.162-2.727-3.804-3.102l-.069 3.755-3.195-.649.742 6.579z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#718096"
                >
                  <path d="M2.019 24l-2.019-7 4.386.583-3.361-12.208 3.873.701 2.305 8.385 3.32.647-3.503-13.108 5.33 1.166 2.306 9.978 6.538 1.118 3.371-11.795.206 5.547 1.482.395-1.85 6.474-11.562-2.315-1.559-6.708-4.696-.922 2.531 9.291-7.098-1.229z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <p className="text-[#2C7A7B] font-semibold mb-4 uppercase tracking-wide">
              Quick Links
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-[#38B2AC] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/collection"
                  className="hover:text-[#38B2AC] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#38B2AC] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#38B2AC] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="md:col-span-1">
            <p className="text-[#2C7A7B] font-semibold mb-4 uppercase tracking-wide">
              Customer Service
            </p>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/faq"
                  className="hover:text-[#38B2AC] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="hover:text-[#38B2AC] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> Shipping Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="hover:text-[#38B2AC] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-[#38B2AC] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-[#38B2AC] transition-colors flex items-center gap-2"
                >
                  <span className="text-xs">›</span> Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <p className="text-[#2C7A7B] font-semibold mb-4 uppercase tracking-wide">
              Contact Us
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#ED8936] flex-shrink-0" />
                <span className="text-[#4A5568]">
                  123 Shopping Avenue, Retail District, 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#ED8936] flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-[#38B2AC] transition-colors"
                >
                  +91 9876543210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#ED8936] flex-shrink-0" />
                <a
                  href="mailto:support@shopverse.com"
                  className="hover:text-[#38B2AC] transition-colors"
                >
                  support@shopverse.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-[#2C7A7B] font-semibold mb-2">
                Subscribe to our newsletter
              </p>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="py-2 px-3 text-sm rounded-l border border-[#CBD5E0] focus:outline-none focus:border-[#2C7A7B] flex-grow"
                />
                <button className="bg-[#ED8936] hover:bg-[#DD6B20] text-white py-2 px-4 rounded-r transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-[#E2E8F0]">
          {/* Copyright */}
          <div className="text-sm text-[#718096] mb-4 sm:mb-0">
            <p>© {new Date().getFullYear()} ShopVerse. All rights reserved.</p>
          </div>

          {/* Trust Badges */}
          <div className="flex gap-6 mb-4 sm:mb-0">
            <div className="flex items-center gap-1 text-[#718096]">
              <FaLock size={14} />
              <span className="text-xs">Secure Payments</span>
            </div>
            <div className="flex items-center gap-1 text-[#718096]">
              <FaTruck size={14} />
              <span className="text-xs">Fast Shipping</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-[#718096] hover:text-[#2C7A7B] transition-colors"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-[#718096] hover:text-[#2C7A7B] transition-colors"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-[#718096] hover:text-[#2C7A7B] transition-colors"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="text-[#718096] hover:text-[#2C7A7B] transition-colors"
            >
              <FaPinterest size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
