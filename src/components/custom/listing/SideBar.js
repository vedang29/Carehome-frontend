"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Filter } from "lucide-react";

const careTypes = ["Residential Care Homes", "Dementia Care Homes", "Nursing Care Homes", "Retirement Homes", "Home Care"];
const areas = ["Bibvewadi", "Koregaon Park", "Aundh", "Baner"];
const facilities = ["Healthcare", "Nursing", "Fitness", "Yoga", "Medication", "Security"];

const SideBar = () => {
  return (
    <>
      {/* ✅ Desktop Sidebar (Visible on `xl` and above) */}
      <div className="hidden xl:block w-full">
        <Card className="p-6 space-y-6 w-full my-5">
          <h2 className="text-2xl font-bold">Filters</h2>

          {/* Type Of Care */}
          <div>
            <h3 className="font-bold mb-4">Type Of Care</h3>
            <div className="space-y-2">
              {careTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={type} />
                  <Label htmlFor={type}>{type}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* By Area */}
          <div>
            <div className="flex items-center space-x-5 mb-4">
              <h3 className="font-bold text-lg">By Area</h3>
              <div className="flex items-center bg-black text-white px-2 py-1 rounded-lg text-xs font-bold">
                <FaMapMarkerAlt className="mr-1" />
                <span>Pune</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {areas.map((area, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className="text-xs font-bold rounded-2xl px-3 py-1"
                >
                  {area}
                </Button>
              ))}
            </div>
          </div>

          {/* By Radius */}
          <div>
            <h3 className="font-bold mb-4">By Radius</h3>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>

          {/* Price Range */}
          <div>
            <h3 className="font-bold mb-4">Price Range Per Night</h3>
            <Slider defaultValue={[200]} max={500} step={10} />
          </div>

          {/* Facilities */}
          <div>
            <h3 className="font-bold mb-2">Facilities</h3>
            <div className="grid grid-cols-2 gap-2">
              {facilities.map((facility) => (
                <div key={facility} className="flex items-center space-x-2">
                  <Checkbox id={facility} />
                  <Label htmlFor={facility}>{facility}</Label>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* ✅ Mobile Sidebar (Hidden on `md`, Uses Drawer on `sm`) */}
      <div className="xl:hidden fixed bottom-5 right-5 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="p-3 rounded-full bg-black text-white shadow-lg">
              <Filter className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6 w-[90%] max-w-md">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>

            {/* Type Of Care */}
            <div className="mb-6">
              <h3 className="font-bold mb-3">Type Of Care</h3>
              <div className="space-y-2">
                {careTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id={type} />
                    <Label htmlFor={type}>{type}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* By Area */}
            <div className="mb-6">
              <div className="flex items-center space-x-5 mb-4">
                <h3 className="font-bold text-lg">By Area</h3>
                <div className="flex items-center bg-black text-white px-2 py-1 rounded-lg text-xs font-bold">
                  <FaMapMarkerAlt className="mr-1" />
                  <span>Pune</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {areas.map((area, index) => (
                  <Button
                    key={index}
                    variant={index === 0 ? "default" : "outline"}
                    className="text-xs font-bold rounded-2xl px-3 py-1"
                  >
                    {area}
                  </Button>
                ))}
              </div>
            </div>

            {/* By Radius */}
            <div className="mb-6">
              <h3 className="font-bold mb-3">By Radius</h3>
              <Slider defaultValue={[50]} max={100} step={1} />
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-bold mb-3">Price Range Per Night</h3>
              <Slider defaultValue={[200]} max={500} step={10} />
            </div>

            {/* Facilities */}
            <div>
              <h3 className="font-bold mb-3">Facilities</h3>
              <div className="grid grid-cols-2 gap-2">
                {facilities.map((facility) => (
                  <div key={facility} className="flex items-center space-x-2">
                    <Checkbox id={facility} />
                    <Label htmlFor={facility}>{facility}</Label>
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default SideBar;
