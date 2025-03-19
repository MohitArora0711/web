"use client"
import FAQ from "@/components/landing/FAQ";
import Hero from "@/components/landing/hero";
import HeroBanner from "@/components/landing/HeroBanner";
import OurHero from "@/components/landing/OurHero";
import Step from "@/components/landing/Step";
import TabsComponent from "@/components/landing/Tabs";
import TopServices from "@/components/landing/TopServices";

export default function Home() {
  return (
    <>
      <div >
        <OurHero />
        <TabsComponent />
        <Step />
        <TopServices/>
        <Hero />
        <HeroBanner />
        <FAQ/>
        
      </div>
    </>
  );
}
