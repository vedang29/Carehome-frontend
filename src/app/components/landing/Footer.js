import { FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10 md:gap-6">
                
                {/* Left Section */}
                <div className="flex flex-col items-start space-y-4">
                    <p className="text-white text-2xl font-semibold">Company Name</p>
                    <p className="text-gray-400">Copyright © 2025.</p>
                    <p className="text-gray-400">All rights reserved</p>
                    
                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-10">
                        <FaInstagram className="text-gray-400 hover:text-white cursor-pointer text-lg" size={28}/>
                        <FaTwitter className="text-gray-400 hover:text-white cursor-pointer text-lg" size={28}/>
                        <FaYoutube className="text-gray-400 hover:text-white cursor-pointer text-lg" size={28}/>
                        <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer text-lg" size={28}/>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-bold text-white mb-10 text-xl">Company</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li className="hover:text-white cursor-pointer">About Us</li>
                            <li className="hover:text-white cursor-pointer">Blog</li>
                            <li className="hover:text-white cursor-pointer">Contact Us</li>
                            <li className="hover:text-white cursor-pointer">Pricing</li>
                            <li className="hover:text-white cursor-pointer">Testimonials</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-10 text-xl">Support</h3>
                        <ul className="text-gray-400 space-y-2">
                            <li className="hover:text-white cursor-pointer">Help Center</li>
                            <li className="hover:text-white cursor-pointer">Terms of Service</li>
                            <li className="hover:text-white cursor-pointer">Legal</li>
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer">Status</li>
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col space-y-3">
                    <h3 className="font-bold text-white mb-10 text-xl">Stay up to date</h3>
                    <div className="flex bg-gray-800 rounded-md overflow-hidden">
                        <input
                            type="text"
                            placeholder="Your email address"
                            className="bg-transparent text-gray-400 px-4 py-2 w-full focus:outline-none"
                        />
                        <button className="bg-gray-700 p-3">
                            <BsFillSendFill className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
