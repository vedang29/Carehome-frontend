import { GoPeople } from "react-icons/go";
import { TbHeartHandshake, TbHandClick, TbBuildingCommunity } from "react-icons/tb";

const Stats = () => {
  return (
    <div className="bg-[#F5F7FA] py-20 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-0 flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Left Section */}
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold">Helping Families</h2>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#FBBC05]">
            Find the Right Care
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Built with dedication to make care homes accessible and trusted.
          </p>
        </div>

        {/* Right Section - Stats */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap justify-center sm:justify-start gap-10 sm:gap-20">
            <div className="flex items-center gap-4 w-40 sm:w-52 p-4">
              <GoPeople size={40} className="text-black" />
              <div>
                <div className="text-xl sm:text-2xl font-semibold">2,245,341</div>
                <div className="text-gray-500">Support</div>
              </div>
            </div>
            <div className="flex items-center gap-4 w-40 sm:w-52 p-4">
              <TbHeartHandshake size={40} className="text-black" />
              <div>
                <div className="text-xl sm:text-2xl font-semibold">46,328</div>
                <div className="text-gray-500">Care Services</div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-10 sm:gap-20">
            <div className="flex items-center gap-4 w-40 sm:w-52 p-4">
              <TbHandClick size={40} className="text-black" />
              <div>
                <div className="text-xl sm:text-2xl font-semibold">828,867</div>
                <div className="text-gray-500">Bookings</div>
              </div>
            </div>
            <div className="flex items-center gap-4 w-40 sm:w-52 p-4">
              <TbBuildingCommunity size={40} className="text-black" />
              <div>
                <div className="text-xl sm:text-2xl font-semibold">19,348</div>
                <div className="text-gray-500">Care Homes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
