"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import arrow from "../../../public/landing/arrow.png"
const services = [
    { title: "Dr. S. Jaishankar", image: "/speaker/img1.png" },
    { title: "Dr. S. Jaishankar", image: "/speaker/img1.png" },
    { title: "Dr. S. Jaishankar", image: "/speaker/img1.png" },
    { title: "Dr. S. Jaishankar", image: "/speaker/img1.png" },
    { title: "Dr. S. Jaishankar", image: "/speaker/img1.png" },
    { title: "Dr. S. Jaishankar", image: "/speaker/img1.png" },
    { title: "Dr. S. Jaishankar", image: "/speaker/img1.png" },
    { title: "Dr. S. Jaishankar", image: "/speaker/img1.png" },
];

export default function TopServices() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full px-24 py-14 flex flex-col items-center"
        >
            <div className="w-full">
                <div className="flex justify-between items-start w-full">
                    <div className="flex flex-col w-full">
                        <div>
                            <span className="px-3 py-1 text-xs font-semibold bg-gray-200 rounded-full">
                                Delhi Startup Summit 2025
                            </span>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <h2 className="text-4xl font-bold mt-4">Our Prominent Speaker</h2>
                            {/* <p className="text-gray-600 max-w-md text-sm">
                                Simplify your bookings! Whether it’s a salon visit, a doctor’s appointment, or a fitness session, we make scheduling easy and hassle-free.
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-4 gap-20">
                    {services.map((service, index) => (
                        <div key={index} className="relative group">
                            <a href="">
                                <div className="relative h-[300px] rounded-[30px] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>
                                <div className="absolute bottom-5 left-5">

                                    <div className="px-2 py-2 text-sm text-white bg-white/30 backdrop-blur-lg font-bold rounded-full gap-2 flex">

                                        <Image
                                            className="bg-white/80 backdrop-blur-lg rounded-full"
                                            src={arrow}
                                            alt="Arrow icon"
                                            width={20}
                                            height={20}
                                        />                                        {service.title}
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <a
                href="#"
                className="font-bold rounded-2xl cursor-pointer my-5 mt-16 text-blue-600 underline hover:text-blue-800"
            >
                Show More...
            </a>
        </motion.section>
    );
}
