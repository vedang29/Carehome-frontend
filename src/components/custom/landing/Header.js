import { MdOutlineHomeWork } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { IoFilter } from "react-icons/io5";
import { Building } from "lucide-react"
import { Building2 } from "lucide-react"
import { House } from "lucide-react"
import { Search } from "lucide-react"
import { ListFilter } from "lucide-react"
import { Input } from "@/components/ui/input"


import { Button } from "@/components/ui/button"

const Header = () => {
    return (
        <div
            className="flex flex-col justify-center items-center gap-10 h-[75vh] relative bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/Hero.png')" }}
        >
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="max-w-7xl mx-auto flex flex-col justify-center items-center w-full">
                {/* Content */}
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl font-bold leading-tight">
                        Explore, Compare & Choose
                    </h1>
                    <h1 className="text-5xl font-bold leading-tight">
                        the Best Care Home.
                    </h1>
                </div>

                {/*Category Icons */}
                <div className="z-10 flex gap-4 mt-10">
                    <Button variant="outline" className="h-auto w-28 flex flex-col items-center text-center hover-card">
                        <House className="!w-7 !h-7 mb-2" />
                        Residential <br /> Care Homes
                    </Button>
                    <Button variant="outline" className="h-auto w-28 flex flex-col items-center text-center hover-card">
                        <Building2 className="!w-7 !h-7 mb-2" />
                        Retirement <br /> Communities
                    </Button> <Button variant="outline" className="h-auto w-28 flex flex-col items-center text-center hover-card">
                        <Building className="!w-7 !h-7 mb-2" />
                        Specialized <br /> Care Homes
                    </Button>
                </div>

                {/*Search Bar */}
                <div className="z-10 w-3/4 shadow-lg flex items-center bg-white rounded-full mt-10">
                    <div className="relative w-full">
                        {/* Search Icon (Left) */}
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />

                        {/* ShadCN Input */}
                        <Input
                            type="text"
                            placeholder="Search by Town, Pincode, or Home"
                            className="w-full pl-10 pr-10 py-6 rounded-full"
                        />

                        {/* Filter Icon (Right) */}
                        <ListFilter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5 cursor-pointer" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
