import Navbar from "../../components/custom/Navbar";
import SearchBar from "../../components/custom/SearchBar";
import Footer from "../../components/custom/landing/Footer";
import ListingCard from "../../components/custom/listing/ListingCard";
import SideBar from "../../components/custom/listing/SideBar";

export default function Home() {
  return (
    <>
      <div>
        {/* Navbar */}
        <div className="md:hidden">
        <Navbar />
 
        </div>
        <div className="md:hidden font-bold text-3xl mt-10">Hello Vedang,</div>

        {/* Sticky Search Bar */}
        <div className="sticky top-0 z-50 bg-white py-4 shadow-md">
          <div className="max-w-7xl mx-auto">
            <SearchBar />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-row space-x-5 justify-center py-8 max-w-7xl min-h-screen mx-auto">

          {/* Listing Cards - Takes full width without its own scroll */}
          <div className="flex-1">
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
          </div>

          {/* Sticky Sidebar */}
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
