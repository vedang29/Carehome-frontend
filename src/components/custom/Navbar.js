"use client";

import { useState, useEffect } from "react";
import { IoLogoBuffer } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: isSticky ? 0 : 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`w-full bg-white shadow-md z-50 transition-all ${isSticky ? "fixed top-0 left-0" : "relative"}`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-5 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <IoLogoBuffer size={28} />
          <span className="text-lg font-bold">Logo</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8">
          <li className="cursor-pointer hover:text-gray-600">Home</li>
          <li className="cursor-pointer hover:text-gray-600">Services</li>
          <li className="cursor-pointer hover:text-gray-600">About Us</li>
          <li className="cursor-pointer hover:text-gray-600">Pricing & Plans</li>
          <li className="cursor-pointer hover:text-gray-600">Sign In</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;