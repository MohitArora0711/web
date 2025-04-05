'use client';

import Image from 'next/image';
import { ArrowUpRight } from "lucide-react";
import { motion } from 'framer-motion';
import { RegisterModal } from '../RegisterModal';
import { useState } from 'react';

export default function NewHero() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" w-full flex flex-col items-center justify-center text-center pt-8 px-2 md:px-28  "
        >
            <div className="relative  md:p-10 w-full shadow-lg py-10"
                style={{
                    border: '3px solid transparent',
                    borderRadius: '30px',
                    backgroundClip: 'padding-box, border-box',
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #C512F8, #00CFC3)',
                }}>

                <div className=" px-20 py-10 md:absolute top-4 left-4 text-bold bg-gradient-to-b from-[#C512F8] to-[#00CFC3] text-transparent bg-clip-text md:text-left font-bold text-2xl">
                    {/* UNIVERSITY OF <br /> DELHI */}
                </div>
                <div className="flex justify-center items-start gap-2">
                    <Image src="/neecop.png" alt="Delhi Startup Summit 2025" width={400} height={400} />
                    <Image className='hidden md:block md:absolute left-[65%]' src="/landing/rocket.png" alt="Delhi Startup Summit 2025" width={80} height={80} />
                </div>
                <div className=" text-2xl px-20 py-5 md:py-10 text-center md:absolute top-[30%] right-12 text-bold bg-gradient-to-b bg-clip-text  " >
                    <p>April</p>
                    <p className="font-bold bg-gradient-to-b from-[#C512F8] to-[#00CFC3] text-transparent bg-clip-text  text-3xl ">25-26-27</p>
                    <p>2025</p>
                </div>

                <div className=" px-20 py-5 md:py-10 md:absolute bottom-4 left-4 text-bold bg-gradient-to-b from-[#C512F8] to-[#00CFC3] text-transparent bg-clip-text md:text-left font-bold text-2xl">
                    <br /> University of Delhi
                </div>
                <div className="mt-5 text-gray-700 flex items-center justify-center gap-2 w-full flex-col">
                    <p className="text-xl font-bold">Student-led Initiatives</p>
                    <p className="text-sm">Powered by</p>
                    <Image src="/neecoplogo.png" alt="" width={150} height={150} />
                </div>
            </div>
            <button onClick={()=>{setIsModalOpen(true);window.scrollTo({top:0})}} className="flex items-center justify-center gap-2 my-8 px-6 py-3 text-white font-medium text-lg rounded-full bg-gradient-to-br from-[#C512F8] to-[#00CFC3] shadow-lg transition-transform transform hover:scale-105">
                Register now <ArrowUpRight size={20} />
            </button>
            <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </motion.section>

    );
}
