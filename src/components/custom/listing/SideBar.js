import { FaMapMarkerAlt } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const SideBar = () => {
  return (
    <Card className="p-6 space-y-6 w-full my-5">
      <h2 className="text-2xl font-bold">Filters</h2>

      {/* Type Of Care */}
      <div>
        <h3 className="font-bold mb-4">Type Of Care</h3>
        <div className="space-y-2">
          {["Residential Care Homes", "Dementia Care Homes", "Nursing Care Homes", "Retirement Homes", "Home Care"].map(
            (type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={type} />
                <Label htmlFor={type}>{type}</Label>
              </div>
            )
          )}
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
          {["Bibvewadi", "Koregaon Park", "Aundh", "Baner"].map((area, index) => (
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
          {["Healthcare", "Nursing", "Fitness", "Yoga", "Medication", "Security"].map((facility) => (
            <div key={facility} className="flex items-center space-x-2">
              <Checkbox id={facility} />
              <Label htmlFor={facility}>{facility}</Label>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default SideBar;
