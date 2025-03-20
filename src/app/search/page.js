import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/landing/Footer";
import ListingCard from "../components/listing/ListingCard";
import SideBar from "../components/listing/SideBar";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl min-h-screen mx-auto">
        <Navbar />
        <div>
        <div className="text-3xl font-semibold">Hello!</div>
        <SearchBar/>
      </div>
        <div className="py-8 space-y-6 flex flex-row space-x-5 justify-center align-middle">

          <div className="space-y-10 mb-0">
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
          </div>

          <div className="sticky top-0 h-fit">
            <SideBar />
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
