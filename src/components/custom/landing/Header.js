'use client';

import { useRouter } from 'next/navigation';
import { Building, Building2, House, Search, ListFilter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Header = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/search?`);
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-6 sm:gap-10 h-[65vh] sm:h-[75vh] relative bg-cover bg-center px-4"
      style={{ backgroundImage: "url('/assets/Hero.png')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/30"></div>

      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center w-full">
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Explore, Compare & Choose
          </h1>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            the Best Care Home.
          </h1>
        </div>

        {/* Category Icons */}
        <div className="z-10 flex gap-3 sm:gap-4 mt-6 sm:mt-10 flex-wrap justify-center hidden sm:flex">
          <Button
            variant="outline"
            className="h-auto w-24 sm:w-28 flex flex-col bg-black/15 text-white items-center text-center hover-card p-2 sm:p-3"
            onClick={() => handleNavigation('residential-care-homes')}
          >
            <House className="w-6 h-6 sm:w-7 sm:h-7 mb-1 sm:mb-2" />
            <span className="text-sm sm:text-base">Residential <br className="hidden sm:block"/> Care Homes</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto w-24 sm:w-28 flex flex-col bg-black/15 text-white items-center text-center hover-card p-2 sm:p-3"
            onClick={() => handleNavigation('retirement-communities')}
          >
            <Building2 className="w-6 h-6 sm:w-7 sm:h-7 mb-1 sm:mb-2" />
            <span className="text-sm sm:text-base">Retirement <br className="hidden sm:block"/> Communities</span>
          </Button>
          <Button
            variant="outline"
            className="h-auto w-24 sm:w-28 flex flex-col bg-black/15 text-white items-center text-center hover-card p-2 sm:p-3"
            onClick={() => handleNavigation('specialized-care-homes')}
          >
            <Building className="w-6 h-6 sm:w-7 sm:h-7 mb-1 sm:mb-2" />
            <span className="text-sm sm:text-base">Specialized <br className="hidden sm:block"/> Care Homes</span>
          </Button>
        </div>

        {/* Search Bar */}
        <div className="z-10 w-full sm:w-3/4 shadow-lg flex items-center bg-white rounded-full mt-6 sm:mt-10 px-3 sm:px-0">
          <div className="relative w-full">
            {/* Search Icon (Left) */}
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />

            {/* ShadCN Input */}
            <Input
              type="text"
              placeholder="Search by Town, Pincode, or Home"
              className="w-full pl-10 pr-10 py-4 sm:py-6 rounded-full text-sm sm:text-base"
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
