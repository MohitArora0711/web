"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion

interface CardItem {
    title: string;
    subtitle?: string;
    image: string;
    button: string;
}

const cards: CardItem[] = [
    { title: "Transform your space with wall panels", subtitle: "Starts at ₹6,999 only", image: "/landing/img1.jpg", button: "Book now" },
    { title: "Modern Lighting Solutions", subtitle: "Up to 50% off", image: "/landing/img2.jpg", button: "Shop now" },
    { title: "Premium Sofa Sets", subtitle: "Luxury redefined", image: "/landing/img3.jpg", button: "Explore" },
    { title: "Wall Art & Decor", subtitle: "New arrivals", image: "/landing/img1.jpg", button: "View more" },
    { title: "RO Water Purifiers", subtitle: "Sale live", image: "/landing/img1.jpg", button: "Buy now" },
    { title: "Smart Refrigerators", subtitle: "Energy efficient", image: "/landing/img1.jpg", button: "Check now" },
    { title: "Microwave Ovens", subtitle: "Cook smartly", image: "/landing/img1.jpg", button: "Order now" },
    { title: "Dishwashers", subtitle: "Hassle-free cleaning", image: "/landing/img1.jpg", button: "Get yours" },
    { title: "Save on electricity bills with power saver AC service", image: "/landing/img1.jpg", button: "Book now" },
    { title: "Latest 4K Smart TVs", subtitle: "Cinematic experience", image: "/landing/img1.jpg", button: "Discover" },
    { title: "Noise Cancelling Headphones", subtitle: "Crystal clear audio", image: "/landing/img1.jpg", button: "Shop now" },
    { title: "Gaming Laptops", subtitle: "Performance unleashed", image: "/landing/img1.jpg", button: "Explore now" },
];

export default function CardScroller() {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCards = 3;
    
    const handleNext = () => {
        setStartIndex((prev) => (prev + visibleCards < cards.length ? prev + visibleCards : 0));
    };

    const handlePrev = () => {
        setStartIndex((prev) => (prev - visibleCards >= 0 ? prev - visibleCards : cards.length - visibleCards));
    };

    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-full px-[60px] rounded-lg overflow-hidden"
        >
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white/60 to-transparent z-10 pointer-events-none"></div>
            
            <div className="relative w-full flex items-center">
                <button className="absolute left-0 z-10 p-2 bg-gray-200 rounded-full shadow-md" onClick={handlePrev}>
                    <ChevronLeft size={20} />
                </button>
                <div className="w-full overflow-hidden px-8">
                    <div
                        className="flex space-x-4 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${startIndex * (100 / visibleCards)}%)` }}
                    >
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="h-60 shadow-md bg-cover bg-center relative flex items-end justify-between rounded-2xl w-1/3 shrink-0"
                                style={{ backgroundImage: `url(${card.image})` }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
                                <div className="relative text-white/95 w-full h-full flex flex-col justify-between p-5">
                                    <div>
                                        <p className="text-[30px] font-semibold">{card.title}</p>
                                        <p className="text-sm font-bold text-white/80">{card.subtitle}</p>
                                    </div>
                                    <div>
                                        <button className="mt-2 px-4 py-2 bg-white/95 hover:bg-white/90 transition duration-300 ease-in-out text-black font-bold rounded-[5px]">
                                            {card.button}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="absolute right-0 z-5 p-2 bg-gray-200 rounded-full shadow-md" onClick={handleNext}>
                    <ChevronRight size={20} />
                </button>
            </div>
            
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/60 to-transparent z-10 pointer-events-none"></div>
        </motion.div>
    );
}
