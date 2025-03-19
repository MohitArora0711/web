"use client"
import React from "react";
import { motion } from "framer-motion";

const Step = () => {
    return (
        <div className="relative md:px-[100px] md:py-32 px-4 py-32">
            <div className="flex flex-col w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="title-section w-full text-center  md:max-w-[400px] md:text-left"
                >
                    <p className="text-blue-500 uppercase font-semibold text-sm mb-2">
                        DELHI UNIVERSITY CULTURAL FEST 2025
                    </p>
                    <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                        Join the most exciting <br /> cultural festival of the year!
                    </h1>
                    <p className="text-gray-600 mb-6 font-semibold">
                        Get ready for an unforgettable experience filled with music, dance, art, and literature. Be a part of DU’s grandest cultural fest!
                    </p>
                    <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition">
                        Register Now
                    </button>
                </motion.div>
                <div className="hidden md:block w-full mt-10">
                    <img src="landing/step.png" alt="step" className="w-[90%] h-auto relative top-[-260px]" />
                    <div className="absolute">
                        <div className="relative w-[270px] top-[-450px] left-[340px] text-[200px] font-bold text-[#1E5EFF] opacity-10">
                            1
                        </div>
                        <div className="relative flex flex-col gap-6 w-[270px] top-[-570px] left-[170px]">
                            <h3 className="text-blue-600 font-bold text-xl">Fill Registration Form</h3>
                            <p className="text-gray-500 font-semibold text-lg">Provide your details and select the events you want to participate in.</p>
                        </div>
                        <div className="relative flex flex-col gap-6 w-[270px] top-[-1300px] left-[1200px] font-bold text-[200px] text-[#1E5EFF] opacity-10">
                            3
                        </div>
                        <div className="relative flex flex-col gap-6 w-[270px] top-[-1400px] left-[1060px]">
                            <h3 className="text-blue-600 font-bold text-xl">Receive Your Entry Pass</h3>
                            <p className="text-gray-500 font-semibold text-lg">After successful registration, download your digital entry pass.</p>
                        </div>
                        <div className="relative flex flex-col gap-6 w-[270px] top-[-1430px] left-[850px] text-[200px] font-bold text-[#1E5EFF] opacity-10">
                            2
                        </div>
                        <div className="relative flex flex-col gap-6 w-[270px] top-[-1550px] left-[690px]">
                            <h3 className="text-blue-600 font-bold text-xl">Verify Registration</h3>
                            <p className="text-gray-500 font-semibold text-lg">Check your email or phone for confirmation and verify your participation.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Step;
