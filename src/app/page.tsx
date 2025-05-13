"use client"
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/navbar";
import AboutUs from "@/components/landing/AboutUs";
import Agenda from "@/components/landing/Agenda";
import Contact from "@/components/landing/Contact";
import Counter from "@/components/landing/Counter";
import EventHighlights from "@/components/landing/EventHighlights";
import Features from "@/components/landing/Feature";
// import HeroBanner from "@/components/landing/HeroBanner";
import HighlightsDisplay from "@/components/landing/HighlightsDisplay";
// import OurHero from "@/components/landing/OurHero";
import InfiniteCarousel from "@/components/landing/Slider";
import SpeakerSection from "@/components/landing/Speaker"
import WhyAttend from "@/components/landing/WhyAttend";
import CurrentHero from "@/components/newlanding/currenthero";
import NewHero from "@/components/newlanding/newhero";
import { Analytics } from "@vercel/analytics/react"

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
        {/* <NewHero /> */}
        <CurrentHero />
        <AboutUs />
        {/* <HighlightsDisplay /> */}
        <EventHighlights />
        {/* <HeroBanner/> */}
        {/* <OurHero /> */}
        <Features />
        {/* <Agenda /> */}
        <div className="hidden md:block">
          <SpeakerSection />
        </div >
        <div className="block md:hidden px-4 my-24">
          <div className="flex flex-col gap-8  w-full text-left">
            <h1 className="text-5xl font-bold text-left">KEYNOTE <br /> SPEAKERS</h1>
            <p className=" text-left"> Meet the industry leaders shaping india’s startup ecosystem </p>
          </div>
          <InfiniteCarousel services={speakers} speed={2200} />
        </div> 
        {/* <WhyAttend /> */}
         {/* <Counter /> */}
        <Contact />
        <Footer />
        <Analytics />
      </div>
    </>
  );
}
