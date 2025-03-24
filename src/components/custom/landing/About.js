import AboutCard from "./AboutCard"


const About = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col justify-between items-center mt-20">
        <div className="text-3xl font-semibold">Caring Beyond Limits:</div>
        <div className="text-3xl font-semibold">Our Mission & Vision</div>
        <div className="mt-5">Providing Compassionate Care for a Better Tomorrow</div>
      </div>
      <div className="flex justify-around">
        <AboutCard />
      </div>

      
    </div>
  )
}

export default About