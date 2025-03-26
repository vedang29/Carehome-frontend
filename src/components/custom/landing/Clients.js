import { FaGoogle } from "react-icons/fa";
import { IoLogoBitbucket, IoLogoOctocat, IoLogoPwa, IoLogoSlack, IoLogoDeviantart, IoLogoLaravel } from "react-icons/io5";

const Clients = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 py-16 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Our Clients</h2>
          <p className="text-base sm:text-lg mt-3">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-16 mt-10">
          <FaGoogle className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <IoLogoBitbucket className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <IoLogoOctocat className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <IoLogoPwa className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <IoLogoSlack className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <IoLogoDeviantart className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
          <IoLogoLaravel className="text-gray-700 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
