import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Counter = () => {
    const eventDate = new Date("2025-04-25T08:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = eventDate - now;

        if (difference <= 0) return [0, 0, 0];

        return [
            Math.floor(difference / (1000 * 60 * 60 * 24)),
            Math.floor((difference / (1000 * 60 * 60)) % 24),
            Math.floor((difference / (1000 * 60)) % 60),
        ];
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    });

    return (
        <motion.section
            className="px-4 md:px-28 py-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.div
                className="flex flex-col md:flex-row items-start justify-between md:items-start mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            // viewport={{ once: true }}
            >
                <div>
                    <motion.h2
                        className="text-6xl md:text-8xl font-bold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        Reach
                    </motion.h2>
                    <div className="flex gap-8 justify-center">
                        <motion.h2
                            className="text-6xl md:text-8xl font-bold leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            At
                        </motion.h2>
                        <motion.button
                            className="flex items-center justify-center md:mt-12 gap-2 my-8 px-6 py-3 text-white font-medium text-lg rounded-full bg-gradient-to-br from-[#C512F8] to-[#00CFC3] shadow-lg transition-transform transform hover:scale-105"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true }}
                            onClick={()=>window.open("https://maps.app.goo.gl/TizeTpUhuUpgByWEA","_blank")}
                        >
                            Venue <ArrowUpRight size={20} />
                        </motion.button>
                    </div>
                </div>
                <motion.div
                    className="flex flex-col items-end"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <p className="mt-4 max-w-sm text-gray-600 md:text-right text-xl">
                        Secure your spot at the Delhi Startup Summit 2025 and join the future
                        of innovative Startups.
                    </p>
                </motion.div>
            </motion.div>

            <motion.div
                className="bg-black text-white p-10 md:py-20 rounded-3xl flex md:justify-between md:items-center relative h-[300px] overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
            >
                <div>
                    <p className="text-gray-400 text-sm">The event will start in...</p>
                    <div className="flex items-right gap-6 font-bold mt-2">
                        {['days', 'hours', 'minutes'].map((unit, index) => (
                            <motion.div
                                key={unit}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div>
                                    <span className="text-6xl md:text-9xl ">{String(timeLeft[index]).padStart(2, "0")}</span>
                                    {unit !== 'minutes' && <span className="text-6xl md:text-9xl ">:</span>}
                                </div>
                                <span>{unit.toUpperCase()}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 rounded-3xl"></div>
                <Image className="absolute left-[25%] md:left-auto bottom-[-50%] md:right-0 md:bottom-0" width={250} height={250} src="/landing/pattern2.png" alt="" />
            </motion.div>
        </motion.section>
    );
};

export default Counter;
