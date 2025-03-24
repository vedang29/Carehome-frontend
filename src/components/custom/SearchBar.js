"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, SearchIcon, MapPin, Settings } from "lucide-react";
import GuestSelection from "./listing/GuestSelection";
import { Switch } from "@/components/ui/switch";

export default function SearchBar() {
  const [date, setDate] = useState({ from: null, to: null });
  const [mapView, setMapView] = useState(false);

  return (
    <div className="flex items-center gap-3 bg-white rounded-full  w-full justify-between mt-5">
      {/* Location Input */}
      <div className="relative flex items-center bg-white rounded-full border w-1/2">
        {/* Search Icon inside Input (Left) */}
        <SearchIcon className="absolute left-4 w-5 h-5 text-gray-500" />

        {/* Input Field */}
        <Input
          placeholder="Pune, Maharashtra, India"
          className="border-none rounded-full focus:ring-0 pl-10 pr-20 py-6 w-full"
        />

        {/* Button inside Input (Right) */}
        <Button size="sm" className="absolute right-2 bg-black text-white rounded-full px-3 flex items-center gap-1">
          <MapPin className="w-4 h-4" /> Pune
        </Button>
      </div>



      {/* Date Picker */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="bg-white border rounded-full shadow px-4 py-6 flex items-center gap-2 text-gray-700"
          >
            <CalendarIcon className="w-5 h-5 text-gray-500" /> {/* Calendar Icon */}
            {date.from ? format(date.from, "EEE d'th' MMM") : "Start Date"} -{" "}
            {date.to ? format(date.to, "EEE d'th' MMM") : "End Date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto">
          <Calendar mode="range" selected={date} onSelect={setDate} numberOfMonths={2} />
        </PopoverContent>
      </Popover>


      {/* Guest Selection */}
      <GuestSelection />

      {/* Map View Toggle */}
      <Button
        onClick={() => setMapView((prev) => !prev)}
        variant="outline"
        className="bg-white border rounded-full shadow px-4 py-6 flex items-center gap-2 text-gray-700"
      >
        <span className="text-gray-700 font-semibold text-sm">Map View</span>
        <Switch checked={mapView} onCheckedChange={setMapView} />
      </Button>
      {/* Search Button */}
      <Button className="bg-black text-white rounded-full px-6 py-6">Search</Button>
    </div>
  );
}
