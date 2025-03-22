import Image from "next/image";
import Navbar from "../components/custom/Navbar";
import Header from "../components/custom/landing/Header";
import Clients from "../components/custom/landing/Clients";
import About from "../components/custom/landing/About";
import Footer from "../components/custom/landing/Footer";
import Stats from "../components/custom/landing/Stats";
import Blogs from "../components/custom/landing/Blogs";



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
