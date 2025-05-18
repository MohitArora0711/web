// import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AvatarCircles } from "../magicui/avatar-circles";
import { motion } from "framer-motion";

export default function Features() {
    const avatars = [
        {
            imageUrl: "/landing/img1.jpg",
            profileUrl: "/landing/img1.jpg",
        },

        
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col h-full  justify-center p-5 md:p-10  md:px-32 gap-6"
        >
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className=" flex flex-col h-full md:flex-row md:h-[600px] gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="rounded-[40px] flex flex-col justify-between w-full h-full bg-gradient-to-b from-[#C512F8] to-[#00CFC3] md:w-1/2 p-10"
                >
                    <div className="flex flex-col items-start">
                        <h1 className="text-4xl text-white bricolage-grotesque font-bold">Speakers</h1>
                        <div className="flex flex-row mt-10 gap-4">
                            <div className="flex w-1/3">
                                <div className="hidden w-12 h-12 bg-gray-200 rounded-full md:flex items-center justify-center">
                                    <ArrowUpRight size={30} className="text-blue-700" />
                                </div>
                            </div>
                            <p className="text-xl text-white">Hear from Industry Leaders, Investors, and Entrepreneurs who are defining the future of Startup Ecosystem. Gain exclusive insights into startup success stories, emerging business trends, and the future of innovation.</p>
                        </div>
                    </div>
                    <div className="flex flex-row md:flex-row gap-12 items-center justify-center mt-10">
                        <AvatarCircles numPeople={5} avatarUrls={avatars} />
                        <button className="flex items-center justify-center gap-2 my-8 px-6 py-3 text-white font-medium text-lg rounded-full bg-gradient-to-br from-[#C512F8] to-[#00CFC3] shadow-lg transition-transform transform hover:scale-105 border-2 border-white">
                            And more <ArrowUpRight size={20} />
                        </button>
                    </div>
                </motion.div>
                <div className="flex flex-col md:w-1/2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                        className="flex flex-col gap-6 w-full h-1/2 bg-white border-2 border-gray-800 text-black rounded-[40px] p-10 "
                    >
                        <h1 className="text-4xl bricolage-grotesque font-bold">Workshops</h1>
                        <p className="w-[95%] text-lg">
                            Practical sessions on fundraising, MVP building, product development, and team building.
                            Gain expert insights and actionable strategies to launch, scale, and sustain a successful business.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        className="relative w-full h-1/2 rounded-[40px] p-10 text-white"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#00CFC3] to-[#C512F8] opacity-25 rounded-[40px]"></div>
                        <div className="relative flex flex-col gap-6 w-full h-full text-black">
                            <h1 className="text-4xl bricolage-grotesque font-bold">Networking Opportunities</h1>
                            <p className="w-[95%] text-lg">
                                Connect with MSME owners, startup founders, investors, and industry experts. Build meaningful relationships, explore collaborations, and unlock new business opportunities in a dynamic networking environment.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="flex flex-col gap-6 w-full h-1/2 bg-black rounded-[40px] p-10 text-white"
            >
                <h1 className="text-4xl bricolage-grotesque font-bold">Exhibition</h1>
                <p className="w-[95%] text-lg">
                    Practical sessions on fundraising, MVP building, product development, and team building.
                    Gain expert insights and actionable strategies to launch, scale, and sustain a successful business.
                </p>
            </motion.div>
        </motion.section>
    );
}
