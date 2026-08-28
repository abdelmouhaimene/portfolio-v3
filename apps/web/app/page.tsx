
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Pricing from "../sections/Pricing";
import Process from "../sections/Process";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";


export default function Home() {
  return (
    <div className="bg-image bg-cover bg-no-repeat bg-center bg-[url(/bg.jpg)]" >
       <Navbar />
      <div className="md:pt-16 pt-32">
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Process />
        <Testimonials />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
