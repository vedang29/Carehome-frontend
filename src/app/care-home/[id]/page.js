import CarehomeDetails from "@/components/custom/care-home/CarehomeDetails"
import Header from "@/components/custom/care-home/Header"
import ReviewCard from "@/components/custom/care-home/ReviewCard"
import Footer from "@/components/custom/landing/Footer"
import Navbar from "@/components/custom/Navbar"
import SearchBar from "@/components/custom/SearchBar"

const page = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <Navbar />
                <SearchBar />
            </div>
            <Header />
            <CarehomeDetails/>
           
            <Footer />
        </>
    )
}

export default page