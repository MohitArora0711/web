
"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function OurValues() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative p-25"
        >
            <div
                className="absolute inset-0 bg-cover bg-no-repeat bg-center"
                style={{
                    backgroundImage: "url('/public/landing/overValueBackground.png')",
                    zIndex: -1,
                }}
            />

            <div className="p-8 rounded-lg relative">
                <div className="space-y-2 mb-15">
                    <motion.h2
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="text-sm text-blue-600 font-medium"
                    >
                        OUR VALUES
                    </motion.h2>
                    <div className="flex items-start justify-between">
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-6xl font-semibold"
                        >
                            Our Company <br /> Values
                        </motion.h1>
                        <div className="flex flex-col gap-2 w-[500px]">
                            <div className="flex flex-row gap-5">
                                <img className="w-5 h-5 text-blue-500 mb-4" src="/landing/star1.png" alt="" />
                                <img className="w-5 h-5 text-blue-500 mb-4" src="/landing/star2.png" alt="" />
                            </div>
                            <motion.h1
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-[18px]"
                            >
                                Collaboration fuels innovation and drives success. Sublime fosters a culture of seamless collaboration.
                            </motion.h1>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-15">
                    <div className="flex gap-5 space-y-6">
                        {[
                            {
                                title: "Our Mission",
                                image: "/landing/ourMission.png",
                                text: "rcu cursus ultricies nulla tellus tempor Mauris ut arcu ornare eu dignissim rcu cursus ultricies nulla tellus tempor Mauris ut arcu ornare eu dignissim",
                            },
                            {
                                title: "Our Value",
                                image: "/landing/ourValue.png",
                                text: "rcu cursus ultricies nulla tellus tempor Mauris ut arcu ornare eu dignissim rcu cursus ultricies nulla tellus tempor Mauris ut arcu ornare eu dignissim",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl shadow-sm h-[350px]"
                            >
                                <img className="w-15 h-15 mb-4" src={item.image} alt={item.title} />
                                <h3 className="text-3xl text-blue-500 font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-600 mb-4">{item.text}</p>
                                <button className="flex items-center hover:text-blue-700 transition-colors w-full rounded-full border-black/60 hover:border-black border-[2px] justify-center py-2">
                                    Learn More
                                    <ArrowRight className="w-4 h-4 ml-2 text-blue-600" />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex flex-col w-full gap-10"
                    >
                        {[
                            { title: "Efficiency", text: "rcu cursus ultricies nulla tellus tempor Mauris ut arcu ornare eu dignissim" },
                            { title: "Communication", text: "rcu cursus ultricies nulla tellus tempor Mauris ut arcu ornare eu dignissim" },
                            { title: "Contribution", text: "rcu cursus ultricies nulla tellus tempor Mauris ut arcu ornare eu dignissim" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-xl mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
