"use client"
import React from "react";
import { motion } from "framer-motion";

const Step = () => {
    return (
        <div className="relative px-[100px] py-32">
            <div className="flex flex-col w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="title-section max-w-[400px] text-left"
                >
                    <p className="text-blue-500 uppercase font-semibold text-sm mb-2">
                        STOCKIE OPERATION ACROSS THE WORLD
                    </p>
                    <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
                        We have best team <br /> and best process
                    </h1>
                    <p className="text-gray-600 mb-6 font-semibold">
                        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy.
                    </p>
                    <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition">
                        Get Started
                    </button>
                </motion.div>
                <div className="w-full mt-10">
                    <img src="landing/step.png" alt="step" className="w-[90%] h-auto relative top-[-260px]" />
                    <div className="absolute">
                        <div className="relative w-[270px] top-[-450px] left-[340px] text-[200px] font-bold text-[#1E5EFF] opacity-10">
                            1
                        </div>
                        <div className="relative flex flex-col gap-6 w-[270px] top-[-570px] left-[170px]">
                            <h3 className="text-blue-600 font-bold text-xl">Select the services</h3>
                            <p className="text-gray-500 font-semibold text-lg">Create your profile and start your entrepreneurial journey now!</p>
                        </div>
                        <div className="relative flex flex-col gap-6 w-[270px] top-[-1300px] left-[1200px] font-bold text-[200px] text-[#1E5EFF] opacity-10">
                            3
                        </div>
                        <div className="relative flex flex-col gap-6 w-[270px] top-[-1400px] left-[1060px]">
                            <h3 className="text-blue-600 font-bold text-xl">Book best Slots</h3>
                            <p className="text-gray-500 font-semibold text-lg">Get benefit of our grants, funds and VC fellow applications</p>
                        </div>
                        <div className="relative flex flex-col gap-6 w-[270px] top-[-1430px] left-[850px] text-[200px] font-bold text-[#1E5EFF] opacity-10">
                            2
                        </div>
                        <div className="relative flex flex-col gap-6 w-[270px] top-[-1550px] left-[690px]">
                            <h3 className="text-blue-600 font-bold text-xl">Search for shop</h3>
                            <p className="text-gray-500 font-semibold text-lg">Find Right team members, co-founder, mentors, and start with professionals on this platform</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step;
