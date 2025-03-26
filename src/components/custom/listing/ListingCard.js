"use client"; // Required for using useRouter

import { useRouter } from "next/navigation"; // ✅ Correct import for Next.js App Router
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Bookmark, Tv, Utensils, Stethoscope } from "lucide-react";

export default function ListingCard({ id }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/care-home/${id}`);
  };

  return (
    <div className="w-full">
      <Card
        className="rounded-2xl shadow-md bg-white p-0 pr-5 mt-5 cursor-pointer hover:scale-102 transition-transform 
                   flex flex-col sm:flex-row lg:flex-row relative"
        onClick={handleCardClick}
      >
        {/* Mobile Layout (Below sm) */}
        <div className="flex sm:hidden items-center ">
          {/* Image */}
          <div className="w-24 h-24 rounded-l-xl overflow-hidden flex-shrink-0">
            <Image
              src="/assets/Room2.png"
              alt="Serenity Elder Care"
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col flex-grow mx-4 ">
            <h2 className="text-base font-semibold">Serenity Elder Care</h2>
            <p className="text-xs text-gray-500">Pune, Maharashtra</p>

            {/* Rating Section */}
            <div className="flex items-center gap-1 mt-1 text-yellow-500">
              <Star size={14} />
              <span className="text-xs font-medium">4.0</span>
              <span className="text-xs text-gray-500">(320 reviews)</span>
            </div>
          </div>

          {/* Price & Bookmark */}
          <div className="flex flex-col items-end ml-auto">
            <span className="text-sm font-bold">
              ₹3500 <span className="text-xs font-normal">/ night</span>
            </span>
            <button
              className="p-2 rounded-full"
              onClick={(e) => e.stopPropagation()} // Prevent navigation on click
            >
              <Bookmark className="text-black w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Layout (sm and above) */}
        <div className="hidden sm:flex flex-col sm:flex-row lg:flex-row w-full">
          {/* Bookmark Icon */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full z-10"
            onClick={(e) => e.stopPropagation()} // Prevents navigation when clicking the bookmark
          >
            <Bookmark className="text-black w-5 h-5" />
          </button>

          {/* Image Section */}
          <div className="relative sm:w-full lg:w-3/6">
            <Image
              src="/assets/Room2.png"
              alt="Serenity Elder Care"
              width={300}
              height={200}
              className="w-full h-48 sm:h-60 lg:h-full object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none lg:rounded-tr-none"
            />
          </div>

          {/* Details Section */}
          <div className="p-5 flex flex-col justify-between sm:w-full lg:w-3/6">
            <div>
              <h2 className="text-lg lg:text-xl font-semibold">Serenity Elder Care</h2>
              <p className="text-sm lg:text-base text-gray-500">Pune, Maharashtra</p>

              {/* Rating Section */}
              <div className="flex items-center gap-1 mt-2 text-yellow-500">
                <Star size={16} />
                <span className="text-sm lg:text-base font-medium">4.0</span>
                <span className="text-sm lg:text-base text-gray-500">(320 reviews)</span>
              </div>

              {/* Amenities Section */}
              <div className="flex gap-2 mt-3">
                {[
                  { icon: Tv, label: "Entertainment" },
                  { icon: Stethoscope, label: "Medical" },
                  { icon: Utensils, label: "Dining" },
                ].map(({ icon: Icon, label }, index) => (
                  <div key={index} className="relative group">
                    <div className="flex items-center justify-center bg-gray-100 p-2 rounded-md w-9 h-9">
                      <Icon className="text-gray-700 w-5 h-5" />
                    </div>
                    <span className="absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-gray-700 font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-row justify-between items-center mt-3">
              <span className="text-lg lg:text-xl font-bold">
                ₹3500 <span className="text-sm font-normal">/ night</span>
              </span>
              <div className="flex gap-3 mt-2 sm:mt-0 lg:mt-0">
                <Button
                  variant="outline"
                  className="rounded-full px-3 py-2 lg:px-4 lg:py-2 border-black text-black text-sm lg:text-base"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push(`/search/${id}`);
                  }}
                >
                  View Details
                </Button>
                <Button
                  variant="default"
                  className="rounded-full px-3 py-2 lg:px-4 lg:py-2 bg-black text-white text-sm lg:text-base"
                  onClick={(e) => e.stopPropagation()}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
