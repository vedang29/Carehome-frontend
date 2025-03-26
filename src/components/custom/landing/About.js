import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-0">
      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center text-center mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Caring Beyond Limits:
        </h2>
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Our Mission & Vision
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600">
          Providing Compassionate Care for a Better Tomorrow
        </p>
      </div>

      {/* About Cards Section */}
      <div className="flex justify-center mt-10">
        <AboutCard />
      </div>
    </div>
  );
};

export default About;
