"use client";

import CareHomeCard from "./CareHomeCard";
import ListingCard from "./ListingCard";
import Recommended from "./Recommended";

const CareHomeList = () => {
    return (
        <div className="relative w-full">
            {/* <h2 className="text-xl font-semibold mb-3">Care Homes</h2> */}

            {/* Horizontal Scroll Container */}
            <div className="max-w-sm flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory 
                      scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-500
                      scrollbar-thumb-rounded-lg">
                {[...Array(5)].map((_, index) => (
                    <div key={index} className="snap-start">
                        <Recommended />
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-5 mt-10">
                <h2 className="text-xl font-semibold mb-3">Care Homes Near You</h2>
                <ListingCard/>
                <ListingCard/>
                <ListingCard/>
            </div>
        </div>
    );
};

export default CareHomeList;
