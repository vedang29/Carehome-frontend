import { GoPeople } from "react-icons/go";

const AboutCard = () => {
  return (
    <div className="p-6 flex flex-col items-center text-center border-card w-96 p-10 rounded-xl gap-10 mt-20">
      <div className="relative flex items-center justify-center">
        <div className="bg-yellow-200 w-24 h-24 absolute -z-10 opacity-50 rounded-full"></div>

        <GoPeople size={64} className="relative z-10 text-gray-800" />
      </div>

      <div className="mt-4">
        <div className="text-2xl font-bold">Our Community</div>
        <p className="text-gray-600 mt-2 leading-relaxed line-clamp-3 text-justify mt-10">
          We believe in building a strong and supportive community where everyone feels valued 
          and connected. Our mission is to foster a sense of belonging and ensure that 
          everyone has a voice and a place to thrive.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
