"use client";
import React, { useState,useEffect } from "react";
import Image from 'next/image';
import { Menu, X, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none"; // Prevents touch scroll
      } else {
        document.body.style.overflow = "";
        document.body.style.touchAction = "";
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);
  
  
  return (
    <>
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-4 md:py-8 lg:py-10 bg-white z-50">
        {/* Left Logo */}
        <div className="flex items-center justify-start">
  <Image
    src="/logo/PAS-logo.svg"
    alt="Parvati & Sons"
    width={150} // you can adjust this
    height={80} // and this as per actual image dimensions
    className="h-8 sm:h-9 md:h-8 lg:h-12 xl:h-14 flex"
  />
</div>


        {/* Centered Navigation Links (Hidden in Mobile) */}
        <ul className="hidden lg:flex space-x-4 xl:space-x-14 text-gray-900 font-medium font-sans text-lg xl:text-2xl">
          {["Home", "Services", "Results", "About", "Insights"].map((item) => (
            <li key={item}>
              <a href="#" className="relative text-gray-900 font-medium text-lg xl:text-2xl
     transition-colors duration-100
    before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:w-0 before:h-0.5 before:bg-black before:transition-all before:duration-300 before:ease-in-out before:-translate-x-1/2
    hover:before:w-full">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Contact Button (Hidden in Mobile) */}
        <button className="hidden lg:flex items-center border-2 border-gray-700 px-6 lg:px-14 py-2 xl:py-2 rounded-lg xl:rounded-xl text-lg xl:text-2xl font-sans font-semibold text-black hover:bg-gray-100 transition-colors duration-200">
          Contact
        </button>

        {/* Hamburger Menu for Mobile (Opens Right Sidebar) */}
        <button 
          onClick={() => setIsOpen(true)} 
          className="lg:hidden focus:outline-none"
          aria-label="Open menu"
        >
          <Menu size={24} className="text-gray-700" />
        </button>
      </nav>

      {/* Right Sidebar Menu (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs backdrop-blur-lg bg-white shadow-2xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-300">
        <Image
            src="/logo/PAS-logo.svg" 
            alt="Parvati & Sons"
            width={120}
            height={6}
            // className="h-6" 
          />
          <button 
            onClick={() => setIsOpen(false)}
            className="focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} className="text-gray-800" />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col text-gray-800 font-medium">
          {["Home", "Services", "Results", "About", "Insights", "Contact"].map((item) => (
            <li key={item} className="px-4 py-3 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200">
              <a href="#" className="block text-base">{item}</a>
            </li>
          ))}
        </ul>

        {/* Sidebar Bottom Section (Contact & Social Links) */}
        <div className="absolute bottom-0 left-0 w-full bg-white p-4 sm:p-6 border-t border-gray-200">
          {/* Contact Information */}
          <p className="text-gray-700 text-sm font-medium">info@parvatiandsons.com</p>
          <p className="text-gray-700 text-sm font-medium mt-1">+91-9837994101</p>

          {/* Social Media Links */}
          <div className="mt-3">
            <p className="text-gray-600 text-xs sm:text-sm font-semibold">Find us on social media</p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors duration-200">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors duration-200">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Background when Sidebar is Open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity"
        ></div>
      )}
    </>
  );
};

export default Navbar;