import { FaGoogle } from "react-icons/fa";
import { IoLogoBitbucket } from "react-icons/io";
import { IoLogoOctocat } from "react-icons/io";
import { IoLogoPwa } from "react-icons/io5";
import { IoLogoSlack } from "react-icons/io5";
import { IoLogoDeviantart } from "react-icons/io5";
import { IoLogoLaravel } from "react-icons/io5";

const Clients = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-15 py-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col justify-center items-center">
                <div className="text-4xl font-semibold">Our Clients</div>
                <div className="text-lg mt-5">We have been working with some Fortune 500+ clients</div>
            </div>

            <div className="flex gap-28 mt-20">
                <FaGoogle size={40}/>
                <IoLogoBitbucket size={40} />
                <IoLogoOctocat size={40} />
                <IoLogoPwa size={40} />
                <IoLogoSlack size={40} />
                <IoLogoDeviantart size={40} />
                <IoLogoLaravel size={40} />
            </div>
        </div>
    </div>
  )
}

export default Clients