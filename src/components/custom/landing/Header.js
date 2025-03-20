import { MdOutlineHomeWork } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { IoFilter } from "react-icons/io5";

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
                        Compare care homes, home care
                    </h1>
                    <h1 className="text-5xl font-bold leading-tight">
                        services and retirement properties
                    </h1>
                </div>

                {/* Category Icons */}
                <div className="relative z-10 flex gap-6 mt-10">
                    {["Care Homes", "Retirement Homes", "Residential Care Homes"].map(
                        (category, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center gap-2 hover-up-scale p-4 rounded-xl w-32 h-32 text-md text-center bg-white/80"
                            >
                                <MdOutlineHomeWork size={40} />
                                <span>{category}</span>
                            </div>
                        )
                    )}
                </div>

                {/* Search Bar */}
                <div className="relative z-10 flex justify-between items-center gap-5 w-3/4 px-6 py-2 rounded-full bg-white shadow-lg mt-10">
                    <GoSearch size={24} className="text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search by Town, Pincode or Home"
                        className="flex-1 py-2 focus:outline-none text-lg"
                    />
                    <IoFilter size={24} className="text-gray-500 cursor-pointer" />
                </div>
            </div>

        </div>
    );
};

export default Header;
