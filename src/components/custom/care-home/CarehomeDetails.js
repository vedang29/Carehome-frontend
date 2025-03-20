import Image from "next/image";
import ReviewCard from "./ReviewCard"; // Ensure correct import
import { MdRoomService, MdSupportAgent, MdMedicalServices, MdRestaurant } from "react-icons/md";

const FacilityIcon = ({ Icon, label }) => (
    <div className="flex flex-col items-center p-5">
      <div className="bg-gray-200 p-5 rounded-xl "><Icon className="text-3xl text-black" /></div>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  );
const CarehomeDetails = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 mt-10">
      {/* Header */}
      <div className="flex justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Serenity Elder Care</h1>
          <p className="text-gray-600">Pune, Maharashtra</p>
        </div>
        <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
          ⭐ <span className="font-semibold">4.0</span>
          <span className="text-gray-300">(320 reviews)</span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-700">
        A peaceful and secure senior living facility in Pune, offering 24/7 medical care, nutritious meals, and engaging activities to ensure comfort, companionship, and a fulfilling lifestyle for elderly residents.
      </p>

      {/* Facilities */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Facilities</h2>
        <div className="flex gap-4 mt-2">
          <FacilityIcon Icon={MdRoomService} label="Room Service" />
          <FacilityIcon Icon={MdSupportAgent} label="24/7 Support" />
          <FacilityIcon Icon={MdMedicalServices} label="Medical Care" />
          <FacilityIcon Icon={MdRestaurant} label="Nutritious Meals" />
        </div>
      </div>

      {/* Room Selection */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Choose Room</h2>
        <div className="bg-gray-300 w-full h-40 rounded-lg mt-2"></div>
      </div>

      {/* Ratings & Reviews */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Ratings & Reviews</h2>
        <ReviewCard name="John Doe" review="Amazing experience, the staff is very helpful!" />
        <ReviewCard name="Jane Doe" review="Great place for elderly care!" />
      </div>

      {/* Nearby Map */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">What’s Nearby?</h2>
        <div className="mt-2">
          <Image src="/assets/City.png" alt="Map" width={800} height={400} className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default CarehomeDetails;
