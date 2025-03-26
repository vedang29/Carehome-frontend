import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { MdRoomService, MdSupportAgent, MdMedicalServices, MdRestaurant } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const FacilityIcon = ({ Icon, label }) => (
  <div className="flex flex-col items-center space-y-2 text-gray-700">
    <Icon className="text-gray-700 text-4xl" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default function CarehomeDetails() {
  return (
    <div className="max-w-full sm:max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 rounded-lg">

      {/* Header Image - Visible only below sm */}
      <div className="block sm:hidden w-full h-52 mb-6">
        <img
          src="/assets/Cover.png"
          alt="Care Home"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Header */}
      <div className="bg-white  rounded-lg p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Serenity Elder Care</h1>
            <div className="flex items-center text-gray-500 mt-1 text-sm">
              <FiMapPin className="mr-1" />
              <p>12, Baner Road, Near Symbiosis College, Baner</p>
            </div>
          </div>

          <Badge className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 text-lg font-semibold rounded-full shadow-lg">
            <FaStar className="text-white text-xl" />
            <span className="text-xl">4.0</span>
            <span className="text-xs text-white opacity-90">(320 reviews)</span>
          </Badge>
        </div>

        {/* Description */}
        <div className="mt-6">
          <p className="text-gray-700 leading-relaxed">
            A peaceful and secure senior living facility in Pune, offering 24/7 medical care, nutritious meals, and engaging activities to ensure comfort, companionship, and a fulfilling lifestyle for elderly residents.
          </p>
        </div>

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

        {/* Gallery */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            <img
              src="/assets/Cover.png"
              alt="Gallery 1"
              className="w-full h-36 sm:h-40 object-cover rounded-md"
            />
            <img
              src="/assets/Cover.png"
              alt="Gallery 2"
              className="w-full h-36 sm:h-40 object-cover rounded-md"
            />
            <img
              src="/assets/Cover.png"
              alt="Gallery 3"
              className="w-full h-36 sm:h-40 object-cover rounded-md"
            />
            <img
              src="/assets/Cover.png"
              alt="Gallery 4"
              className="w-full h-36 sm:h-40 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Ratings & Reviews */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800">Ratings & Reviews</h2>

          <div className="space-y-6 mt-4">
            <Card className="p-6 rounded-lg shadow-none border border-gray-200">
              <div className="flex gap-4">
                <Avatar className="w-12 h-12 self-start">   {/* Top-aligned Avatar */}
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
              <div className="flex gap-4">
                <Avatar className="w-12 h-12 self-start">  {/* Top-aligned Avatar */}
                  <AvatarFallback>JS</AvatarFallback>
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


        {/* What's Nearby */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-gray-800">What's Nearby?</h2>
          <Card className="mt-4 h-56 bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-600 text-lg shadow-sm rounded-lg">
            Map Placeholder
          </Card>
        </div>

        {/* Pricing */}
        <div className="mt-10 flex justify-between items-center">
          <p className="text-xl font-bold text-gray-800">₹2500</p>
          <span className="text-gray-600 text-sm">/ night</span>
        </div>
      </div>
    </div>
  );
}
