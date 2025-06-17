"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Service {
    title: string;
    image: string;
    position?: string;
}

interface InfiniteCarouselProps {
    services: Service[];
    speed: number;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ services, speed }) => {
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const settings = {
        autoplay: true,
        autoplaySpeed: speed,
        arrows: true,
        infinite: true,
        slidesToShow: windowWidth < 768 ? 1 : 4,
        slidesToScroll: windowWidth < 768 ? 1 : 4,
    };

    return (
        <div className="w-full flex justify-center items-center py-10">
            <div className="w-full">
                <Slider {...settings}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="px-4 "

                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <a href="#" className="block relative group">
                                <div className="relative h-[400px] rounded-[40px] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={400} height={400}
                                        // layout="fill"
                                        objectFit="cover "
                                        className="transition-transform grayscale h-[400px] w-[100%] object-fit-cover duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>
                                <div className="absolute bottom-5 left-5">
                                    <div className="px-2 py-2 text text-white bg-gradient-to-br from-[#6e2dd3] to-[#15bac8] backdrop-blur-3xl font-bold rounded-full gap-2 flex">
                                        <Image
                                            className="w-10 h-10 bg-white/80 backdrop-blur-lg rounded-full"
                                            src="/landing/arrow.png"
                                            alt="Arrow"
                                            width={40}
                                            height={40}
                                        />
                                        <div className="pr-2">
                                            {service.title}
                                            {service.position && (
                                                <div className="text-xs font-normal text-white  rounded-full">
                                                    {service.position}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {/* {service.position && (
                                        <div className="px-2 py-1 mt-2 text-xs text-white bg-gradient-to-br from-[#6e2dd3] to-[#15bac8]  backdrop-blur-lg rounded-full">
                                            {service.position}
                                        </div>
                                    )} */}
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default InfiniteCarousel;