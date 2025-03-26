import CarehomeDetails from "@/components/custom/care-home/CarehomeDetails"
import Header from "@/components/custom/care-home/Header"
import Footer from "@/components/custom/landing/Footer"
import Navbar from "@/components/custom/Navbar"
import SearchBar from "@/components/custom/SearchBar"

const page = () => {
    return (
        <>
            {/* Search Bar - Always visible */}
            <div className="sticky top-0 z-50 bg-white py-4 shadow-md">
                <div className="max-w-7xl mx-auto">
                    <SearchBar />
                </div>
            </div>

            {/* Header - Hidden below sm breakpoint */}
            <div className="hidden sm:block">
                <Header />
            </div>

            <div className="max-w-7xl min-h-screen mx-auto">
                <CarehomeDetails />
            </div>

            <Footer />
        </>
    )
}

export default page
