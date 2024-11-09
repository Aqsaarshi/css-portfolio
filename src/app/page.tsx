import Image from "next/image";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Project from "./component/Project";
import Contact from "./component/Contact";
import About from "./component/About";

export default function Home() {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <Hero />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
