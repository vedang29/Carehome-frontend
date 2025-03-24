import { FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                
                {/* Left Section */}
                <Card className="bg-transparent shadow-none border-none">
                    <CardHeader>
                        <CardTitle className="text-white text-2xl">Company Name</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-400">Copyright © 2025. All rights reserved.</p>
                        <div className="flex space-x-4 mt-6">
                            <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" size={24} />
                            <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" size={24} />
                            <FaYoutube className="text-gray-400 hover:text-white cursor-pointer" size={24} />
                            <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" size={24} />
                        </div>
                    </CardContent>
                </Card>

                {/* Middle Section */}
                <Card className="bg-transparent shadow-none border-none">
                    <CardContent className="grid grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-white text-xl mb-4">Company</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li className="hover:text-white cursor-pointer">About Us</li>
                                <li className="hover:text-white cursor-pointer">Blog</li>
                                <li className="hover:text-white cursor-pointer">Contact Us</li>
                                <li className="hover:text-white cursor-pointer">Pricing</li>
                                <li className="hover:text-white cursor-pointer">Testimonials</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-xl mb-4">Support</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li className="hover:text-white cursor-pointer">Help Center</li>
                                <li className="hover:text-white cursor-pointer">Terms of Service</li>
                                <li className="hover:text-white cursor-pointer">Legal</li>
                                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                                <li className="hover:text-white cursor-pointer">Status</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Right Section */}
                <Card className="bg-transparent shadow-none border-none">
                    <CardHeader>
                        <CardTitle className="text-white text-xl">Stay up to date</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center space-x-2">
                            <Input type="email" placeholder="Your email address" className="bg-gray-800 text-gray-400 placeholder-gray-500 focus:ring-gray-500" />
                            <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600">
                                <BsFillSendFill className="text-white" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </footer>
    );
};

export default Footer;
