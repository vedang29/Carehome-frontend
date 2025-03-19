import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/landing/Header";

export default function Home() {
  return (
    <div className="max-w-7xl h-screen mx-auto">
        <Navbar/>
        <Header/>
    </div>
  );
}
