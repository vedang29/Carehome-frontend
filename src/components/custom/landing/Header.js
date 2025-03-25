'use client'; // Required for using useRouter in Next.js App Router

import { useRouter } from 'next/navigation'; // Correct import for Next.js App Router
import { Building, Building2, House, Search, ListFilter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Header = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/search`);
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-10 h-[75vh] relative bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/Hero.png')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center w-full">
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold leading-tight">
            Explore, Compare & Choose
          </h1>
          <h1 className="text-5xl font-bold leading-tight">
            the Best Care Home.
          </h1>
        </div>

        {/* Category Icons */}
        <div className="z-10 flex gap-4 mt-10">
          <Button
            variant="outline"
            className="h-auto w-28 flex flex-col bg-black/15 text-white items-center text-center hover-card"
            onClick={() => handleNavigation('residential-care-homes')}
          >
            <House className="!w-7 !h-7 mb-2" />
            Residential <br /> Care Homes
          </Button>
          <Button
            variant="outline"
            className="h-auto w-28 flex flex-col bg-black/15 text-white items-center text-center hover-card"
            onClick={() => handleNavigation('retirement-communities')}
          >
            <Building2 className="!w-7 !h-7 mb-2" />
            Retirement <br /> Communities
          </Button>
          <Button
            variant="outline"
            className="h-auto w-28 flex flex-col bg-black/15 text-white items-center text-center hover-card"
            onClick={() => handleNavigation('specialized-care-homes')}
          >
            <Building className="!w-7 !h-7 mb-2" />
            Specialized <br /> Care Homes
          </Button>
        </div>

        {/* Search Bar */}
        <div className="z-10 w-3/4 shadow-lg flex items-center bg-white rounded-full mt-10">
          <div className="relative w-full">
            {/* Search Icon (Left) */}
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />

            {/* ShadCN Input */}
            <Input
              type="text"
              placeholder="Search by Town, Pincode, or Home"
              className="w-full pl-10 pr-10 py-6 rounded-full"
            />

            {/* Filter Icon (Right) */}
            <ListFilter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
