"use client"
import type React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
const HeroBanner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="px-[100px] py-20 pb-50 relative"
        >


            <div className="w-full bg-[#2563EB] rounded-[50px] overflow-hidden p-12 relative z-2">
                <div
                    className="absolute inset-0 bg-cover bg-no-repeat opacity-50"
                    style={{
                        backgroundImage: `url('/landing/bannerBackround.png')`,
                        backgroundPosition: "left bottom",
                        backgroundSize: "50% auto",
                        zIndex: 0,
                    }}
                />
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 relative z-20">
                    <div className="lg:w-1/2">
                        <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight">
                            Transform Your Startup Mindset into Successful Business
                        </h1>
                    </div>

                    <div className="lg:w-1/2 space-y-4">
                        <FeatureCard
                            icon="/landing/1.png"
                            title="Connection"
                            description="Begin exploring Neuros's full suite of features immediately"
                        />
                        <FeatureCard
                            icon="/landing/2.png"
                            title="Financial Literacy"
                            description="No credit card required, and you can cancel anytime"
                        />
                        <FeatureCard
                            icon="/landing/3.png"
                            title="Policy Understanding"
                            description="Our team is here to assist you every step of the way during your trial."
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

interface FeatureCardProps {
    icon: string;
    title: string;
    description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
    return (
        <div className="border-white/20 border rounded-2xl p-2 flex items-center gap-4 backdrop-blur-lg">
            <div className="w-14 h-20 flex justify-center items-center bg-white/20 rounded-lg">
                <Image src={icon} alt={title} className="w-7 h-7" />
            </div>
            <div>
                <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
                <p className="text-white/80 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default HeroBanner;
