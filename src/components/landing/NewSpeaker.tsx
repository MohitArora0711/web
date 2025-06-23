import React from 'react'
import Image from 'next/image';
import InfiniteCarousel from './Slider';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
const speakers = [
  { title: "Vivek Chadha", image: "/vivek.jpeg", position: "Serial Entrepreneur" },
  { title: "Apeksha Jain", image: "/apeksha.jpeg", position: "Founder, The Gourmet Jar" },
  { title: "Nitish Singh", image: "/nitish.jpeg", position: "CEO, Blue Tea" },
  { title: "Ravi Kaushik", image: "/ravi.jpeg", position: "CEO, Airth" },
  { title: "Aarushi Kapoor", image: "/aarushi.jpeg", position: "Brand Manager, Innovist" },
  { title: "VR Rajesh", image: "/rajesh.jpeg", position: "CRO, Cluix Clean Tech" },
  { title: "Abhi Bhalla", image: "/abhi.jpeg", position: "Environmentalist" },
  { title: "Lokesh Jain", image: "/lokesh.jpeg", position: "Eximius Ventures" },
  { title: "Vibhor Gupta", image: "/vibhor.jpeg", position: "Lawyer" },
  { title: "Nishchay Pradhan", image: "/nishchay.jpeg", position: "Founding Member, Favcy" },
  { title: "GA Raza", image: "/raza.jpeg", position: "Founder and CEO, Oxeir Technologies" },
  { title: "Anish Tuteja", image: "/anish.jpeg", position: "Fundvice" },
  { title: "Kaustubh Prasad", image: "/kaustubh.jpeg", position: "Managing Director, Sudyog" },
  { title: "Dr. Arunendra Tiwari", image: "/arunendra.jpeg", position: "Associate Fellow, TERI" },
];


const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function NewSpeaker() {
    return (
        <div id='speaker'  >
            <div className="relative block md:px-24 px-4 my-24">
                <motion.div className="flex flex-col items-start md:flex-row justify-between w-full md:items-center mb-4" variants={fadeIn}>
                    <h1 className="md:text-8xl text-4xl font-bold text-left font-bricolage bricolage-grotesque">KEYNOTE <br /> SPEAKERS</h1>
                    <p className="max-w-[300px] md:text-right"> Meet the industry leaders shaping India’s startup ecosystem </p>
                </motion.div>
                <Image className='absolute  top-[-4px] md:top-[10px] left-[60%] md:left-[38%] md:h-24 md:w-24 h-16 w-16' height={85} width={85} src="/star.png" alt="Speaker Image" />
                <InfiniteCarousel services={speakers} speed={2200} />
                <motion.button className="flex items-center justify-center mt-10 gap-2 my-8 px-6 py-3 text-white font-medium text-lg rounded-full bg-gradient-to-br from-[#C512F8] to-[#00CFC3] shadow-lg transition-transform transform hover:scale-105" variants={fadeIn}>
                    And More <ArrowUpRight size={20} />
                </motion.button>
                <Image className='absolute bottom-[30px] left-[50%] md:left-[28%] h-8 w-8 md:h-16 md:w-16 ' height={60} width={60} src="/star.png" alt="Speaker Image" />
            </div>
        </div>
    )
}

export default NewSpeaker