"use client";
import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

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

export function CarouselSpacing() {
    return (
        <div className="w-full">
            <Carousel className="w-full  max-w-lg mx-auto">
                <CarouselContent className="w-full px-8 gap-5">
                    {cards.map((card, index) => (
                        <CarouselItem
                            key={index}
                            className="h-64 bg-cover  bg-center flex items-end justify-between rounded-2xl w-1/2 shrink-0 relative shadow-lg"
                            style={{ backgroundImage: `url(${card.image})` }}
                        >
                            <div>
                                <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
                                <div className="relative text-white w-full h-full flex flex-col justify-between p-5">
                                    <div>
                                        <p className="text-lg font-semibold">{card.title}</p>
                                        {card.subtitle && <p className="text-sm font-bold text-white/80">{card.subtitle}</p>}
                                    </div>
                                    <button className="mt-2 px-4 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition-all">
                                        {card.button}
                                    </button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
