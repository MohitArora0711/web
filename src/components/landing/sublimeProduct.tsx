"use client"
import { motion } from 'framer-motion';

export default function SublimeProducts() {
    return (
        <motion.div
            className="relative p-25"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div
                className="absolute inset-50 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/landing/sublimeBackground.png')",
                    zIndex: -1,
                }}
            />

            <div className="p-8 rounded-lg relative">
                <motion.div 
                    className="space-y-2 mb-15"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-sm text-blue-600 font-medium">SUBLIME PRODUCTS</h2>
                    <div className="flex items-start justify-between">
                        <h1 className="text-6xl font-semibold">Provide powerful <br /> solutions at all times.</h1>
                        <div className="flex flex-col gap-2 w-[500px]">
                            <div className="flex flex-row gap-5">
                                <motion.img 
                                    className="w-5 h-5 text-blue-500 mb-4" 
                                    src="/landing/star1.png" 
                                    alt="" 
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                                    viewport={{ once: true }}
                                />
                                <motion.img 
                                    className="w-5 h-5 text-blue-500 mb-4" 
                                    src="/landing/star2.png" 
                                    alt="" 
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                            <h1 className="text-[18px]">
                                Collaboration fuels innovation and drives success. Sublime fosters a culture of seamless collaboration.
                            </h1>
                        </div>
                    </div>
                </motion.div>

                <div className="relative grid grid-cols-3 gap-6">
                    {[
                        {
                            title: "Our Mission",
                            image: "/landing/chat.png",
                            text: "Empowering businesses with innovative solutions to drive success and efficiency.",
                        },
                        {
                            title: "Our Vision",
                            image: "/landing/call.png",
                            text: "To be the leading force in digital transformation and strategic growth.",
                        },
                        {
                            title: "Core Values",
                            image: "/landing/hand.png",
                            text: "Integrity, innovation, and excellence in every project we undertake.",
                        },
                        {
                            title: "Customer Focus",
                            image: "/landing/time.png",
                            text: "Putting our customers first, ensuring their needs drive our solutions.",
                        },
                        {
                            title: "Sustainability",
                            image: "/landing/cloud.png",
                            text: "Building sustainable and impactful solutions for a better future.",
                        },
                        {
                            title: "Innovation",
                            image: "/landing/speaker.png",
                            text: "Constantly pushing boundaries to bring cutting-edge technology solutions.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-sm h-[300px] flex flex-col justify-between"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <motion.img 
                                    className="w-10 h-10 mb-4" 
                                    src={item.image} 
                                    alt={item.title} 
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                                    viewport={{ once: true }}
                                />
                                <h3 className="text-3xl mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.text}</p>
                            </div>
                            <motion.button
                                className="border-black/60 border w-25 h-13 flex justify-center rounded-full items-center hover:border-blue-600"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <img className="h-10 w-10" src="/public/landing/arrow.png" alt="" />
                            </motion.button>
                        </motion.div>
                    ))}
                    <motion.img 
                        className="absolute left-[-90px] bottom-[-73px] w-[400px] h-auto"
                        src="/landing/rightcover.png"
                        alt="Left Cover"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                    <motion.img 
                        className="absolute right-[-87px] bottom-[-73px] w-[400px] h-auto"
                        src="/landing/leftcover.png"
                        alt="Right Cover"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true }}
                    />
                </div>
            </div>
        </motion.div>
    );
}
