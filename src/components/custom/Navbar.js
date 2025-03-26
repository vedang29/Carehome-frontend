"use client";

import { useState, useEffect } from "react";
import { IoLogoBuffer } from "react-icons/io5";
import { Bell, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

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
      className={`w-full bg-white border-b-1 z-50 transition-all ${isSticky ? "fixed top-0 left-0 shadow-md" : "relative"}`}
    >
      {/* Desktop Navbar (Visible on md and above) */}
      <div className="hidden sm:flex justify-between items-center max-w-7xl mx-auto px-5 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <IoLogoBuffer size={28} />
          <span className="text-lg font-bold">Logo</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-8">
          <li><Button variant="link">Home</Button></li>
          <li><Button variant="link">Services</Button></li>
          <li><Button variant="link">About Us</Button></li>
          <li><Button variant="link">Pricing & Plans</Button></li>
          <li>
            <Button>
              <LogIn /> Sign in
            </Button>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar (Visible on small screens) */}
      <div className="flex sm:hidden w-full bg-white border-b px-10 py-4 justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="bg-gray-800 rounded-lg p-2">
            <IoLogoBuffer size={20} className="text-white" />
          </div>
          <span className="text-lg font-bold">Logo</span>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          <Bell size={22} className="text-black" />
          <Bookmark size={22} className="text-black" />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
