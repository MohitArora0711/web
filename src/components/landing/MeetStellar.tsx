
"use client"
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function MeetStellar() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="px-25 flex justify-center items-center w-full">
            <motion.div
                className="flex flex-col md:flex-row items-center justify-between gap-10 p-6 md:p-16"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.div
                    className="max-w-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <h1 className="text-2xl md:text-xl font-semibold text-purple-600 mb-4">
                        Meet Stellar
                    </h1>
                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
                            Provide powerful solutions at all times
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg">
                            Lorem ipsum dolor sit amet consectetur. Sit arcu cursus ultricies nulla tellus tempor congue. Mauris ut arcu ornare eu dignissim odio.
                        </p>
                    </div>

                    <ul className="mt-6 space-y-4">
                        <FeatureItem text="Share the extra text you want to add as a feature." />
                        <FeatureItem text="Add your feature text here." />
                        <FeatureItem text="Add the text you'd like to include as a feature." />
                    </ul>

                    <div className="mt-6">
                        <a
                            href="#"
                            className="flex items-center gap-2 border px-6 py-4 rounded-full shadow-md transition-all w-50 hover:text-gray-600"
                        >
                            Get Free Trial
                            <img src="/public/landing/crossarrow.png" alt="Arrow" className="w-5 h-5" />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    <img
                        src="/landing/side.png"
                        alt="Stellar Feature"
                        className="w-[100%] md:w-[1000px] h-auto"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

function FeatureItem({ text }: { text: string }) {
    return (
        <motion.li
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <img src="/landing/tik.png" alt="Check" className="w-6 h-6" />
            <p className="text-gray-700 text-base">{text}</p>
        </motion.li>
    );
}

export default MeetStellar;
