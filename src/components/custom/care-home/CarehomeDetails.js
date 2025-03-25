import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { MdRoomService, MdSupportAgent, MdMedicalServices, MdRestaurant } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const FacilityIcon = ({ Icon, label }) => (
  <div className="flex flex-col items-center space-y-2 text-gray-700">
    <Icon className="text-gray-700 text-4xl" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default function CarehomeDetails() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Serenity Elder Care</h1>
          <p className="text-gray-500 text-sm">Pune, Maharashtra</p>
        </div>
        <Badge className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 text-lg font-semibold rounded-full shadow-lg">
          <FaStar className="text-white text-xl" />
          <span className="text-xl">4.0</span>
          <span className="text-xs text-white opacity-90">(320 reviews)</span>
        </Badge>

      </div>

      {/* Description */}
      <p className="text-gray-700 mt-6 leading-relaxed">
        A peaceful and secure senior living facility in Pune, offering 24/7 medical care, nutritious meals, and engaging activities to ensure comfort, companionship, and a fulfilling lifestyle for elderly residents.
      </p>

      {/* Facilities */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Facilities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4">
          <FacilityIcon Icon={MdRoomService} label="Room Service" />
          <FacilityIcon Icon={MdSupportAgent} label="24/7 Support" />
          <FacilityIcon Icon={MdMedicalServices} label="Medical Care" />
          <FacilityIcon Icon={MdRestaurant} label="Nutritious Meals" />
        </div>
      </div>

      {/* Choose Room */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">Choose Room</h2>
        <Card className="mt-4 h-32 bg-gray-100 border border-gray-300 rounded-lg shadow-sm flex items-center justify-center text-gray-500 text-lg">
          Select a room to proceed
        </Card>
      </div>

      {/* Ratings & Reviews */}
<div className="mt-10">
  <h2 className="text-2xl font-semibold text-gray-800">Ratings & Reviews</h2>

  <div className="space-y-6 mt-4">
    <Card className="p-6 rounded-lg shadow-none border border-gray-200">
      <div className="flex items-center gap-4">
        <Avatar className="w-12 h-12">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">John Doe</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Had an exceptional experience at this elder care home. The check-in process was smooth, and the staff was extremely helpful. The room was comfortable and well-maintained.
          </p>
        </div>
      </div>
    </Card>

    <Separator />

    <Card className="p-6 rounded-lg shadow-none border border-gray-200">
      <div className="flex items-center gap-4">
        <Avatar className="w-12 h-12">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">Jane Smith</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Amazing staff and facilities! The environment was peaceful, and my stay was very comfortable. Definitely recommend this elder care home.
          </p>
        </div>
      </div>
    </Card>
  </div>
</div>


      {/* What's Nearby (Map Placeholder) */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800">What's Nearby?</h2>
        <Card className="mt-4 h-56 bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-600 text-lg shadow-sm rounded-lg">
          Map Placeholder
        </Card>
      </div>
    </div>
  );
}
