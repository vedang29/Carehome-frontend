"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import { format } from "date-fns";
import { CalendarIcon, SearchIcon, MapPin, ListFilter } from "lucide-react";
import GuestSelection from "./listing/GuestSelection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";

export default function SearchBar() {
  const [date, setDate] = useState({ from: null, to: null });
  const [mapView, setMapView] = useState(false);

  return (
    <div className="bg-white w-full py-2 flex justify-center">
      {/* Desktop View */}
      <div className="hidden lg:flex items-center gap-3 rounded-full w-full justify-between">
        {/* Location Input */}
        <div className="relative flex items-center bg-white rounded-full border w-1/2">
          <SearchIcon className="absolute left-4 w-5 h-5 text-gray-500" />
          <Input
            placeholder="Pune, Maharashtra, India"
            className="border-none rounded-full focus:ring-0 pl-10 pr-20 py-6 w-full"
          />
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
              <CalendarIcon className="w-5 h-5 text-gray-500" />
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

        {/* Avatar (User Profile) */}
        <Avatar className="w-12 h-12 hover:opacity-90">
          <AvatarImage src="/assets/profile.jpg" alt="User Avatar" />
          <AvatarFallback>VN</AvatarFallback>
        </Avatar>
      </div>

      {/* Tablet View (md breakpoint) */}
      <div className="hidden sm:flex lg:hidden items-center gap-3 w-full justify-between px-4">
        {/* Location Input */}
        <div className="relative flex items-center bg-white rounded-full border w-1/2">
          <SearchIcon className="absolute left-4 w-5 h-5 text-gray-500" />
          <Input
            placeholder="Pune, Maharashtra, India"
            className="border-none rounded-full focus:ring-0 pl-10 pr-20 py-6 w-full"
          />
        </div>

        {/* Drawer for Date Picker and Guest Selection */}
        <Drawer>
          <DrawerTrigger asChild>
            <Button className="bg-white border rounded-full shadow w-12 h-12 flex items-center gap-2 text-gray-700 hover:bg-gray-100">
              <ListFilter className="w-10 h-10" />
            </Button>
          </DrawerTrigger>
          <DrawerContent side="right" className="p-6">
            <div className="flex flex-col gap-4">
              {/* Date Picker */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="w-full text-left hover:bg-gray-100">
                    <CalendarIcon className="w-5 h-5 text-gray-500 mr-2" />
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
            </div>
          </DrawerContent>
        </Drawer>

        {/* Map View Toggle */}
        <Button
          onClick={() => setMapView((prev) => !prev)}
          variant="outline"
          className="bg-white border rounded-full shadow px-4 py-6 flex items-center gap-2 text-gray-700 hover:bg-gray-100"
        >
          <span className="text-gray-700 font-semibold text-sm">Map View</span>
          <Switch checked={mapView} onCheckedChange={setMapView} />
        </Button>

        {/* Search Button */}
        <Button className="bg-black text-white rounded-full px-6 py-6 hover:bg-gray-800">
          Search
        </Button>

        {/* Avatar (User Profile) */}
        <Avatar className="w-12 h-12 hover:opacity-90">
          <AvatarImage src="/assets/profile.jpg" alt="User Avatar" />
          <AvatarFallback>VN</AvatarFallback>
        </Avatar>
      </div>
{/* Mobile View (sm breakpoint remains unchanged) */}
<div className="sm:hidden w-full bg-muted rounded-xl flex items-center gap-2">
  <div className="relative w-full">
    <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
    <Input
      placeholder="Search"
      className="bg-transparent border-none focus:ring-0 text-sm text-muted-foreground rounded-xl pl-10 pr-10"
    />
    <ListFilter
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
      size={20}
    />
  </div>
</div>
    </div>
  );
}