import Image from "next/image";
import { Star, Bookmark } from "lucide-react";

const CareHomeCard = () => {
    return (
        <div className="flex items-center bg-white shadow-md rounded-2xl h-28 w-full cursor-pointer hover:shadow-lg transition-all">
            {/* Left Image (Flush against the left edge) */}
            <div className="w-28 h-28 relative overflow-hidden rounded-l-2xl">
                <Image
                    src="/assets/Room1.png"
                    alt="Care Home"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* Right Content */}
            <div className="flex-1 flex flex-col justify-between px-4 py-2">
                {/* Title and Location */}
                <div>
                    <h3 className="text-lg font-semibold">Serenity Elder Care</h3>
                    <p className="text-sm text-gray-500">Pune, Maharashtra</p>

                    {/* Rating */}
                    <div className="flex items-center text-yellow-500 mt-1">
                        <Star size={18} />
                        <span className="text-sm font-semibold ml-1">4.0</span>
                        <span className="text-sm text-gray-500 ml-1">(320 reviews)</span>
                    </div>
                </div>

                {/* Price and Bookmark */}
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">
                        ₹3500 <span className="text-sm font-normal text-gray-500">/ night</span>
                    </span>
                    <Bookmark className="text-gray-800 w-6 h-6 hover:text-gray-600 transition-colors" />
                </div>
            </div>
        </div>
    );
};

export default CareHomeCard;
