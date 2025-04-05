'use client';

import Image from 'next/image';
import { ArrowUpRight } from "lucide-react";
import { motion } from 'framer-motion';
import { useState } from "react";
import { RegisterModal } from '../RegisterModal';

export default function NewHero() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full flex flex-col items-center justify-center text-center  px-2 md:px-28 pt-28"
        >
            <motion.div
                className="relative w-full shadow-lg py-8 px-4 md:p-10 overflow-hidden"
                style={{
                    border: '3px solid transparent',
                    borderRadius: '30px',
                    backgroundClip: 'padding-box, border-box',
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #C512F8, #00CFC3)',
                }}
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="flex flex-col md:flex-row items-center justify-between relative">
                    <motion.div
                        className="w-full md:w-1/2 text-left mb-8 md:mb-0"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <motion.div
                            className="mt-6 flex items-center gap-2 my-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.8 }}
                        >
                            <p className="text-sm font-semibold text-gray-600">Powered by</p>
                            <Image src="/neecoplogo.png" alt="Neecop" width={100} height={30} />
                        </motion.div>
                        <motion.h1
                            className="text-6xl md:text-8xl font-bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <span className="bg-gradient-to-r from-[#9747FF] to-[#00CFC3] text-transparent bg-clip-text">Student-led initiative</span>
                        </motion.h1>
                        <motion.h1
                            className="text-6xl md:text-7xl font-bold mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                        >
                            <span className="bg-gradient-to-b from-[#43CEA2] to-[#00CFC3] text-transparent bg-clip-text"></span>
                        </motion.h1>

                        <motion.p
                            className="text-gray-800 font-semibold text-lg max-w-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.8 }}
                        >
                            Empowers students with innovation, mentorship, funding, networking, and hands-on entrepreneurial experience.
                        </motion.p>
                        <div className='flex flex-row  gap-28 max-sm:gap-5 max-sm:justify-between items-center mt-8'>
                            <motion.div
                                className="text-left flex max-sm:w-full justify-center items-center flex-col max-sm:items-start "
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.1, duration: 0.8 }}
                            >
                                <p className="font-semibold text-lg ">Venue</p>
                                <p className="font-bold text-xl">
                                    <span className="bg-gradient-to-r from-[#C512F8] to-[#9747FF] text-transparent bg-clip-text">Kirori Mal College</span>
                                </p>
                                <p className="text-lg text-cyan-500">( University of Delhi )</p>
                            </motion.div>

                            <motion.div
                                className="flex max-sm:w-full "
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                            >
                                <div className="text-center max-sm:text-end max-sm:w-full">
                                    <p className="text-lg font-semibold text-gray-600">April</p>
                                    <p className="font-bold text-3xl bg-gradient-to-b from-[#C512F8] to-[#00CFC3] text-transparent bg-clip-text">26-27</p>
                                    <p className="text-lg font-semibold text-gray-600">2025</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="w-full md:w-1/2 flex justify-center  relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <motion.div
                            className="relative"
                        >
                            <Image
                                src="/neecop.png"
                                alt="Delhi Startup Summit 2025"
                                width={480}
                                height={480}
                                className="z-10"
                            />
                        </motion.div>

                        <motion.div
                            className="absolute top-0 right-0 md:top-4 md:right-8"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            >
                                <Image
                                    src="/landing/rocket.png"
                                    alt="Rocket"
                                    width={80}
                                    height={80}
                                    className="hidden md:block"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>



            </motion.div>

            <motion.button
                className="flex items-center justify-center gap-2 my-8 px-8 py-4 text-white font-medium text-lg rounded-full bg-gradient-to-r from-[#C512F8] to-[#00CFC3] shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .1, duration: 0.1 }}
                onClick={() => {
                    setIsModalOpen(true);
                    // setIsMenuOpen(false);
                    window.scrollTo({top:0});
                }}
            >
                Register now
                <motion.span
                    animate={{ x: [0, 5, 0] }}
                >
                    <ArrowUpRight size={25} />
                </motion.span>
            </motion.button>
            <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </motion.section>

    );
}