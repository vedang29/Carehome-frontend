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
        <div className="sm:hidden">
          <Navbar />

        </div>
        <div className="sm:hidden font-bold text-3xl mt-10 mx-10">Hello Vedang,</div>

        {/* Sticky Search Bar */}
        <div className="sticky top-0 z-50 bg-white">
          <div className="max-w-7xl mx-auto flex justify-center mt-5">
            <SearchBar />
          </div>
        </div>
        <div className="mx-10 mt-5">
            <ToggleButtons/>
        </div>
        {/* Main Content */}
        <div className="flex flex-row space-x-5 justify-center py-8 max-w-7xl min-h-screen mx-auto">

          {/* Listing Cards - Takes full width without its own scroll */}
          <div className="hidden sm:block flex-1">
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
          </div>

          <div className="sm:hidden ">
            <CareHomeList/>
          </div>

          {/* Sticky Sidebar */}
          <div>
            
          </div>
          <div className="sticky top-20 h-fit">
            <SideBar />
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
