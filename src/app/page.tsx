"use client"
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/navbar";
import FAQ from "@/components/landing/FAQ";
import Hero from "@/components/landing/hero";
// import HeroBanner from "@/components/landing/HeroBanner";
import OurHero from "@/components/landing/OurHero";
import InfiniteCarousel from "@/components/landing/Slider";
import Step from "@/components/landing/Step";
import TabsComponent from "@/components/landing/Tabs";
import TopServices from "@/components/landing/TopServices";
export default function Home() {


  const speakers = [
    { title: "Dr. S. Jaishankar", image: "/speaker/img1.png" },
    { title: "Ratan Tata", image: "/speaker/img2.png" },
    { title: "Elon Musk", image: "/speaker/img3.png" },
    { title: "Sundar Pichai", image: "/speaker/img4.png" },
    { title: "Satya Nadella", image: "/speaker/img5.png" },
    { title: "Tim Cook", image: "/speaker/img6.png" },
    { title: "Mukesh Ambani", image: "/speaker/img7.png" },
    { title: "Jeff Bezos", image: "/speaker/img8.png" },
  ];

  return (
    <>
      <div className="bg-white" >
        <Navbar />
        <OurHero />
        <div className="hidden md:block">
          <TabsComponent />
        </div>
        <div className="hidden md:block">
          <Step />
        </div>
        <div className="hidden md:block">
          <TopServices />
        </div>
        <div className="block md:hidden">
          <h1 className="text-3xl text-center font-bold">Our Speaker</h1>
          <InfiniteCarousel services={speakers} speed={2200} />
        </div>
        <div className=" md:hidden">
          <Step />
        </div>
        <FAQ />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
