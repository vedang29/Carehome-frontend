"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoLogoBuffer } from "react-icons/io5";
import { Bell, Bookmark, Menu, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-white border-b fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <IoLogoBuffer size={28} />
          <span className="text-lg font-bold">Logo</span>
        </div>

        {/* Desktop Links (Hidden below xl) */}
        <div className="hidden lg:flex gap-6">
          <Button variant="link">Home</Button>
          <Button variant="link">Services</Button>
          <Button variant="link">About Us</Button>
          <Button variant="link">Pricing & Plans</Button>
          <Button>
            <LogIn className="mr-2" size={16} /> Sign in
          </Button>
        </div>

        {/* Mobile Icons & Menu (Visible below xl) */}
        <div className="lg:hidden flex items-center gap-4">
          {/* <Bell size={22} className="text-black" />
          <Bookmark size={22} className="text-black" /> */}

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="flex justify-between items-center p-4">
                <span className="text-lg font-bold">Menu</span>
                {/* <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X size={24} />
                </Button> */}
              </div>
              <div className="flex flex-col gap-4 mt-4 px-4">
                <Button variant="ghost" className="w-full text-left">Home</Button>
                <Button variant="ghost" className="w-full text-left">Services</Button>
                <Button variant="ghost" className="w-full text-left">About Us</Button>
                <Button variant="ghost" className="w-full text-left">Pricing & Plans</Button>
                <Button variant="default" className="w-full">
                  <LogIn className="mr-2" size={16} /> Sign in
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
