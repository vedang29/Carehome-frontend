"use client"; // Mark as a Client Component

import { FaSearch, FaMapMarkerAlt, FaSlidersH } from "react-icons/fa";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const SearchBar = () => {
  const [mapView, setMapView] = useState(false);

  return (
    <div className="flex items-center justify-between gap-2 w-full rounded-lg  my-5 ">
      {/* Location Input */}
      <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg w-136 border-card">
        <FaSearch className="text-black" size={28} />
        <input
          type="text"
          placeholder="Pune, Maharashtra, India"
          className="bg-transparent outline-none w-full p-2 text-gray-700 text-sm"
        />
        <button className="bg-black text-white p-2 text-xs rounded-lg flex items-center gap-1">
          <FaMapMarkerAlt />
          Pune
        </button>
      </div>

       {/* Date Picker */}
       <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2 border-card">
        <input
          type="date"
          className="bg-transparent outline-none text-gray-700 cursor-pointer p-2 text-sm"
        />
        <span>-</span>
        <input
          type="date"
          className="bg-transparent outline-none text-gray-700 cursor-pointer text-sm"
        />
      </div>

      {/* Room & Guest Selector */}
      <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg text-sm border-card">
        <span>1 Room, 1 Guest</span>
        <FaSlidersH className="text-black" size={14} />
      </div>

      {/* Map View Toggle */}
      <div className="flex items-center gap-2 bg-gray-100 p-4 rounded-lg text-sm border-card">
        <span>Map View</span>
        <button
          onClick={() => setMapView(!mapView)}
          className={`relative w-10 h-5 flex items-center rounded-full transition-all ${
            mapView ? "bg-black" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transition-transform ${
              mapView ? "translate-x-5" : "translate-x-0"
            }`}
          ></div>
        </button>
      </div>

      {/* Search Button */}
      <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold border-card">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
