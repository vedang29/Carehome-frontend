"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Bookmark } from "lucide-react";


const Recommended = () => {
    return (
        <Card className="relative w-[250px] h-[350px] rounded-2xl overflow-hidden shadow-lg shrink-0">
          {/* Background Image */}
          <Image
            src="/assets/Room2.png"
            alt="Care Home"
            fill
            className="object-cover absolute inset-0"
          />
    
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent z-10 pointer-events-none"></div>
    
          {/* Rating Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/80 text-white text-sm px-2 py-1 rounded-full z-20">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>4.7</span>
          </div>
    
          {/* Bookmark Icon */}
          <div className="absolute top-3 right-3 bg-white/80 p-2 rounded-full cursor-pointer hover:bg-white transition z-20">
            <Bookmark className="w-5 h-5 text-black" />
          </div>
    
          {/* Card Content */}
          <CardContent className="absolute bottom-0 w-full p-4 text-white z-20">
            <h3 className="text-lg font-semibold">Care Home 1</h3>
            <p className="text-sm">Pune, Maharashtra</p>
            <p className="text-lg font-bold mt-1">
              ₹2500 <span className="text-sm">/ per night</span>
            </p>
          </CardContent>
        </Card>
      );
}

export default Recommended