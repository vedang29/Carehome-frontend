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
    <Card
      className="rounded-2xl shadow-md flex flex-row w-full relative bg-white p-0 my-5 cursor-pointer hover:scale-102 transition-transform"
      onClick={handleCardClick}
    >
      {/* Bookmark Icon */}
      <button
        className="absolute top-4 right-4 p-2 rounded-full z-10"
        onClick={(e) => e.stopPropagation()} // Prevents navigation when clicking the bookmark
      >
        <Bookmark className="text-black w-5 h-5" />
      </button>

      {/* Left Section (Images) */}
      <div className="flex w-3/6 relative">
        <div className="relative">
          <Image
            src="/assets/Room2.png"
            alt="Serenity Elder Care"
            width={300}
            height={200}
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>

        {/* Side Thumbnail Images */}
        <div className="w-1/3 flex flex-col gap-0 border-l-2 border-white">
          {["/assets/Room1.png", "/assets/Room2.png", "/assets/Room3.png", "/assets/Room4.png", "/assets/Room1.png"].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`img${index + 1}`}
              width={60}
              height={50}
              className="w-full h-12 object-cover border-b-2 border-white"
            />
          ))}
        </div>
      </div>

      {/* Right Section (Details) */}
      <div className="w-2/3 p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold">Serenity Elder Care</h2>
          <p className="text-sm text-gray-500">Pune, Maharashtra</p>

          {/* Rating Section */}
          <div className="flex items-center gap-1 mt-2 text-yellow-500">
            <Star size={16} />
            <span className="text-sm font-medium">4.0</span>
            <span className="text-sm text-gray-500">(320 reviews)</span>
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

        {/* Price & Button Section */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold">
            ₹3500 <span className="text-sm font-normal">/ night</span>
          </span>
          <div className="flex gap-3">
            <Button
              variant="outline"
              className="rounded-full px-4 py-2 border-black text-black"
              onClick={(e) => {
                e.stopPropagation(); // Prevents card click from triggering navigation
                router.push(`/search/${id}`);
              }}
            >
              View Details
            </Button>
            <Button
              variant="default"
              className="rounded-full px-4 py-2 bg-black text-white"
              onClick={(e) => e.stopPropagation()} // Prevents navigation on Book Now
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
