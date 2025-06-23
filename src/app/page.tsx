"use client"
// import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/navbar";
import AboutUs from "@/components/landing/AboutUs";
// import Agenda from "@/components/landing/Agenda";
import Contact from "@/components/landing/Contact";
// import Counter from "@/components/landing/Counter";
import EventHighlights from "@/components/landing/EventHighlights";
import Features from "@/components/landing/Feature";
import NewSpeaker from "@/components/landing/NewSpeaker";
// import HeroBanner from "@/components/landing/HeroBanner";
// import HighlightsDisplay from "@/components/landing/HighlightsDisplay";
// import OurHero from "@/components/landing/OurHero";
// import InfiniteCarousel from "@/components/landing/Slider";
// import SpeakerSection from "@/components/landing/Speaker"
import TestimonialSlider from "@/components/landing/Testimonial";
// import WhyAttend from "@/components/landing/WhyAttend";
import CurrentHero from "@/components/newlanding/currenthero";
// import NewHero from "@/components/newlanding/newhero";
import { Analytics } from "@vercel/analytics/react"

// import { Bricolage_Grotesque } from 'next/font/google';

import "./globals.css"

export default function Home() {

  return (
    <>
      <div className="bg-white" >
        <Navbar />
        {/* <NewHero /> */}
        <CurrentHero />
        <AboutUs />
        {/* <HighlightsDisplay /> */}
        <EventHighlights/>
        {/* <HeroBanner/> */}
        {/* <OurHero /> */}
        <Features />
        {/* <Agenda /> */}
        {/* <div className="hidden md:block">
          <SpeakerSection />
        </div > */}
        <NewSpeaker/>
        
        {/* <WhyAttend /> */}
        {/* <Counter /> */}
        <TestimonialSlider />
        <Contact />
        {/* <Footer /> */}
        <Analytics />
      </div>
    </>
  );
}
