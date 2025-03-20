import { GoPeople } from "react-icons/go";
import { TbHeartHandshake } from "react-icons/tb";
import { TbHandClick } from "react-icons/tb";
import { TbBuildingCommunity } from "react-icons/tb";

const Stats = () => {
    return (
        <div className="bg-[#F5F7FA] py-20 mt-32">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-2">
                    <div className="text-4xl font-bold">Helping Families</div>
                    <div className="text-4xl font-bold text-[#FBBC05]">Find the Right Care</div>
                </div>
                    
                    <div>Built with dedication to make care homes accessible and trusted.</div>
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-20">
                        <div className="flex items-center gap-4 w-52 p-4">
                            <div><GoPeople size={48} /></div>
                            <div>
                                <div className="text-2xl font-semibold">2,245,341</div>
                                <div className="text-gray-500">Support</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 w-52 p-4">
                            <div><TbHeartHandshake size={48} /></div>
                            <div>
                                <div className="text-2xl font-semibold">46,328</div>
                                <div className="text-gray-500">Care Services</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-20 ">
                        <div className="flex items-center gap-4 w-52 p-4">
                            <div><TbHandClick size={48} /></div>
                            <div>
                                <div className="text-2xl font-semibold">828,867</div>
                                <div className="text-gray-500">Bookings</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 w-52 p-4">
                            <div><TbBuildingCommunity size={48} /></div>
                            <div>
                                <div className="text-2xl font-semibold">19,348</div>
                                <div className="text-gray-500">Care Homes</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stats