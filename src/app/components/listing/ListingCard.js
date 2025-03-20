import { FaBookmark, FaStar } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
import { RxCardStackMinus } from "react-icons/rx";
import { LuCctv } from "react-icons/lu";
import { PiForkKnifeBold } from "react-icons/pi";
import { FaStethoscope } from "react-icons/fa6";

const ListingCard = () => {
  return (
    <div className="flex items-center bg-white rounded-3xl shadow-lg overflow-hidden max-w-4xl border border-gray-200">

      {/* left - main image */}
      <div className="relative w-1/3">
        <img
          src="/assets/Room2.png"
          alt="Serenity Elder Care"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* middle -grid images */}
      <div className="w-1/8 bg-gray-100">
        <div className="grid grid-rows-5 h-64">
          <img src="/assets/Room1.png" alt="img1" className="w-full h-12 object-cover" />
          <img src="/assets/Room2.png" alt="img2" className="w-full h-12 object-cover" />
          <img src="/assets/Room3.png" alt="img3" className="w-full h-12 object-cover" />
          <img src="/assets/Room4.png" alt="img4" className="w-full h-12 object-cover" />
          <img src="/assets/Room1.png" alt="img5" className="w-full h-12 object-cover" />
        </div>
      </div>

      {/* right side - content */}
      <div className="flex-1 p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Serenity Elder Care</h2>
          <FaBookmark className="text-gray-400 hover:text-black cursor-pointer" />
        </div>
        <p className="text-gray-500">Pune, Maharashtra</p>

        {/* rating */}
        <div className="flex items-center space-x-2">
          <FaStar className="text-yellow-400" />
          <p className="text-gray-700">4.0</p>
          <p className="text-gray-500">(320 reviews)</p>
        </div>

        {/* icons */}
        <div className="flex space-x-4 text-gray-600">
          <RxCardStackMinus className="text-xl" />
          <LuCctv className="text-xl" />
          <FaStethoscope className="text-xl" />
          <PiForkKnifeBold className="text-xl" />
        </div>

        {/* Price and the buttons */}
        <div className="flex justify-between items-center">
          <div className="flex items-center text-2xl font-bold">
            <span className="text-lg"><FaRupeeSign /></span>
            <span>3500</span>
            <p className="text-gray-500 text-sm ml-1">/ night</p>
          </div>
          <div className="flex space-x-2">
            <button className="border border-gray-300 px-4 py-2 rounded-3xl hover:bg-gray-100">
              View Details
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-3xl hover:bg-gray-800">
              Book Now
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ListingCard;
