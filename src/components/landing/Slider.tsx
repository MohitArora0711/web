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
        slidesToShow: windowWidth < 768 ? 1 : 5,
        slidesToScroll: windowWidth < 768 ? 1 : 5,
    };

    return (
        <div className="w-full flex justify-center items-center py-10">
            <div className="w-[95%]">
                <Slider {...settings}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="px-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <a href="#" className="block relative group">
                                <div className="relative h-[300px] rounded-[30px] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={10} height={10} 
                                        // layout="fill"
                                        objectFit="cover"
                                        className="transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>
                                <div className="absolute bottom-5 left-5">
                                    <div className="px-2 py-2 text-sm text-white bg-white/30 backdrop-blur-lg font-bold rounded-full gap-2 flex">
                                        <Image
                                            className="w-5 h-5 bg-white/80 backdrop-blur-lg rounded-full"
                                            src="/landing/arrow.png"
                                            alt="Arrow"
                                            width={20}
                                            height={20}
                                        />
                                        {service.title}
                                    </div>
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
