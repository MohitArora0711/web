import React from 'react'
import Image from 'next/image';
import InfiniteCarousel from './Slider';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
const speakers = [
    { title: "Vivek Sharma", image: "/vivek.jpeg", position: "Founder, TechBridge" },
    { title: "Abhir Saxena", image: "/abhir.jpeg", position: "Startup Mentor & Advisor" },
    { title: "Apeksha Verma", image: "/apeksha.jpeg", position: "CEO, EduGrow" },
    { title: "Lokesh Sharma", image: "/lokesh.jpeg", position: "Product Manager, Google" },
    { title: "Nischay Joshi", image: "/nischay.jpeg", position: "AI Researcher at TCS" },
    { title: "Ravi Bansal", image: "/ravi.jpeg", position: "VP of Engineering, Zomato" },
    { title: "Raja Kumar", image: "/raja.jpeg", position: "Angel Investor & Entrepreneur" },
    { title: "Anish Khandelwal", image: "/anish.jpeg", position: "CTO, FinTechPro" },
    { title: "Vrinda Kapoor", image: "/vrinda.jpeg", position: "Founder, HealthBuddy" },
];

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function NewSpeaker() {
    return (
        <div>
            <div className="relative block md:px-24 px-4 my-24">
                <motion.div className="flex flex-col items-start md:flex-row justify-between w-full md:items-center mb-4" variants={fadeIn}>
                    <h1 className="md:text-8xl text-4xl font-bold text-left font-bricolage bricolage-grotesque">KEYNOTE <br /> SPEAKERS</h1>
                    <p className="max-w-[300px] md:text-right"> Meet the industry leaders shaping India’s startup ecosystem </p>
                </motion.div>
                <Image className='absolute top-[-4px] md:top-[10px] left-[60%] md:left-[38%] md:h-24 md:w-24 h-16 w-16' height={85} width={85} src="/star.png" alt="Speaker Image" />
                <InfiniteCarousel services={speakers} speed={2200} />
                <motion.button className="flex items-center justify-center mt-10 gap-2 my-8 px-6 py-3 text-white font-medium text-lg rounded-full bg-gradient-to-br from-[#C512F8] to-[#00CFC3] shadow-lg transition-transform transform hover:scale-105" variants={fadeIn}>
                    And More <ArrowUpRight size={20} />
                </motion.button>
                <Image className='absolute bottom-[30px] left-[50%] md:left-[28%] h-8 w-8 md:h-16 md:w-16' height={60} width={60} src="/star.png" alt="Speaker Image" />

            </div>
        </div>
    )
}

export default NewSpeaker