import InfiniteCarousel from "@/components/landing/Slider";
import React from "react";


const speakers = [
    { title: "Dr. S. Jaishankar", image: "/speaker/img1.png" },
    { title: "Ratan Tata", image: "/speaker/img2.png" },
    { title: "Elon Musk", image: "/speaker/img3.png" },
    { title: "Sundar Pichai", image: "/speaker/img4.png" },
    { title: "Satya Nadella", image: "/speaker/img5.png" },
    { title: "Tim Cook", image: "/speaker/img6.png" },
    { title: "Mukesh Ambani", image: "/speaker/img7.png" },
    { title: "Jeff Bezos", image: "/speaker/img8.png" },
];

const Home = () => {
    return (
        <div className="pt-32 flex flex-col justify-center items-center ">
            <h1 className="text-3xl md:text-7xl font-bold text-center mt-10 md:w-[70%] mb-10">Meet Our Inspiring Speakers at the Literature Festival</h1>
            <InfiniteCarousel  services={speakers} speed={2100} />
            <InfiniteCarousel  services={speakers} speed={2200}  />
            <InfiniteCarousel  services={speakers} speed={1800} />
        </div>
    );
};

export default Home;
