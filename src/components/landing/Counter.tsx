import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Counter = () => {
    const eventDate = new Date("2025-04-25T08:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = new Date().getTime();
        const difference = eventDate - now;

        if (difference <= 0) return { days: 0, hours: 0, minutes: 0 };

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="px-4 md:px-28 py-32">
            <div className="flex flex-col md:flex-row  items-start justify-between md:items-start mb-12">
                <div>
                    <h2 className="text-6xl md:text-8xl font-bold leading-tight">
                        REGISTER
                    </h2>
                    <div className="flex gap-8 justify-center ">
                        <h2 className="text-6xl md:text-8xl font-bold leading-tight">
                            NOW
                        </h2>
                        <button className="flex items-center justify-center md:mt-12 gap-2 my-8 px-6 py-3 text-white font-medium text-lg rounded-full bg-gradient-to-br from-[#C512F8] to-[#00CFC3] shadow-lg transition-transform transform hover:scale-105">
                            And More <ArrowUpRight size={20} />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col items-end">

                    <p className="mt-4 max-w-sm text-gray-600 md:text-right text-xl">
                        Secure your spot at the Next-Gen AI Summit 2025 and join the future
                        of AI innovation.
                    </p>
                </div>
            </div>

            <div className="bg-black text-white p-10 md:py-20 rounded-3xl flex md:justify-between md:items-center relative h-[300px] overflow-hidden">
                <div>
                    <p className="text-gray-400 text-sm">The event will start in...</p>
                    <div className="flex items-right gap-6 font-bold mt-2">
                        <div>
                            <div>
                                <span className="text-6xl md:text-9xl ">{String(timeLeft.days).padStart(2, "0")}</span>
                                <span className="text-6xl md:text-9xl ">:</span>
                            </div>
                            <span>DAYS</span>
                        </div>
                        <div>
                            <div>
                                <span className="text-6xl md:text-9xl ">{String(timeLeft.hours).padStart(2, "0")}</span>
                                <span className="text-6xl md:text-9xl ">:</span>
                            </div>
                            <span>HOURS</span>
                        </div>
                        <div>
                            <div>
                                <span className="text-6xl md:text-9xl ">{String(timeLeft.minutes).padStart(2, "0")}</span>
                                <span className="text-6xl md:text-9xl "></span>
                            </div>
                            <span>MINUTES</span>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-10 rounded-3xl"></div>
                <Image className="absolute left-[25%] md:left-auto bottom-[-50%] md:right-0 md:bottom-0" width={250} height={250} src="/landing/pattern2.png" alt="" />
            </div>
        </section>
    );
};

export default Counter;
