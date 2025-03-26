import CareHomeList from "@/components/custom/listing/CareHomeList";
import Navbar from "../../components/custom/Navbar";
import SearchBar from "../../components/custom/SearchBar";
import Footer from "../../components/custom/landing/Footer";
import ListingCard from "../../components/custom/listing/ListingCard";
import SideBar from "../../components/custom/listing/SideBar";
import ToggleButtons from "@/components/custom/listing/ToggleButtons";

export default function Home() {
  return (
    <>
      <div>
        {/* Navbar */}
        <div className="md:block sm:hidden">
          <Navbar />
        </div>
        <div className="md:block sm:hidden font-bold text-3xl mt-10 mx-4 sm:mx-6 md:mx-10">
          Hello Vedang,
        </div>

        {/* Sticky Search Bar */}
        <div className="sticky top-0 z-50 bg-white">
          <div className="max-w-7xl mx-auto flex justify-center mt-5 px-4 sm:px-6 md:px-8">
            <SearchBar />
          </div>
        </div>
        <div className="mx-4 sm:mx-6 md:mx-10 mt-5">
          <ToggleButtons/>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row md:space-x-5 justify-center py-8 max-w-7xl min-h-screen mx-auto px-4 sm:px-6 md:px-8">
          {/* Listing Cards */}
          <div className="hidden md:block flex-1">
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
          </div>

          <div className="md:hidden w-full">
            <CareHomeList/>
          </div>

          {/* Sticky Sidebar */}
          <div className="md:sticky md:top-20 h-fit mt-8 md:mt-0">
            <SideBar />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}