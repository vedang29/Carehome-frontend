import { TbHome } from "react-icons/tb";
import { LuHeartHandshake } from "react-icons/lu";
import { CgInfo } from "react-icons/cg";
import { MdAttachMoney } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";

import { IoLogoBuffer } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 max-w-7xl mx-auto'>
        <div className='flex justify-center items-center gap-2'>
            <IoLogoBuffer size={28}/>
            <span>Logo</span>
        </div>
        <ul className='flex gap-8'>
            <li className='flex gap-2 items-center hover-up-scale'><TbHome size={28} />Home</li>
            <li className='flex gap-2 items-center hover-up-scale'><LuHeartHandshake size={28} />Services</li>
            <li className='flex gap-2 items-center hover-up-scale'><CgInfo size={28}/>About Us</li>
            <li className='flex gap-2 items-center hover-up-scale'><MdAttachMoney size={28} />Pricing & Plans</li>
            <li className='flex gap-2 items-center hover-up-scale'><PiSignInBold size={28}/>Sign In</li>
        </ul>
    </div>
  )
}

export default Navbar