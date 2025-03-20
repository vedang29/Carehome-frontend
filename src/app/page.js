import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/landing/Header";
import Clients from "./components/landing/Clients";
import About from "./components/landing/About";
import Footer from "./components/landing/Footer";
import Stats from "./components/landing/Stats";
import Blogs from "./components/landing/Blogs";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Clients/>
        <About/>
        <Stats/>
        <Blogs/>
        <Footer/>
    </div>
  );
}
