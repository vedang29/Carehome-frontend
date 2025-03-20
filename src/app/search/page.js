import Navbar from "../components/Navbar";
import ListingCard from "../components/listing/ListingCard";
import SideBar from "../components/listing/SideBar";

export default function Home() {
  return (
    <div className="max-w-7xl min-h-screen mx-auto">
      <Navbar />
      <div className="py-8 space-y-6 flex flex-row space-x-5 justify-center align-middle">
        <div className="space-y-6">
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>
        <SideBar />
     </div>
    </div>
  );
}
