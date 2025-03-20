import { MdOutlineHomeWork } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { IoFilter } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex flex-col justify-center gap-15 items-center h-3/4 max-w-7xl mx-auto my-32">
        <div>
            <div className='text-5xl'>Compare care homes, home care</div>
            <div className='text-5xl'>services and retirement properties</div>
        </div>

        <div className="flex gap-5">
            <div className='flex flex-col justify-center items-center gap-2 border-card p-2 rounded-2xl w-30 h-30 text-md text-center hover-card'><MdOutlineHomeWork size={34}/>Care Homes</div>
            <div className='flex flex-col justify-center items-center gap-2 border-card p-2 rounded-2xl w-30 h-30 text-md text-center hover-card'><MdOutlineHomeWork size={34}/>Retirement Homes</div>
            <div className='flex flex-col justify-center items-center gap-2 border-card p-2 rounded-2xl w-30 h-30 text-md text-center hover-card'><MdOutlineHomeWork size={34}/>Dementia Care Homes</div>
            <div className='flex flex-col justify-center items-center gap-2 border-card p-2 rounded-2xl w-30 h-30 text-md text-center hover-card'><MdOutlineHomeWork size={34}/>Residential Care Homes</div>
            <div className='flex flex-col justify-center items-center gap-2 border-card p-2 rounded-2xl w-30 h-30 text-md text-center hover-card'><MdOutlineHomeWork size={34}/>Respite Care Homes</div>
        </div>

        <div className="flex justify-center items-center gap-5 w-3/4 border-card px-10">
            <GoSearch size={34} />
            <input
                type="text"
                placeholder="Search by Town, Pincode or Home"
                className="py-5 w-full focus:outline-none"
            />
            <IoFilter size={34}/>
        </div>
    </div>
  )
}

export default Header