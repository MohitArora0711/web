
"use client"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            viewport={{ once: true }}
            className="bg-[#131523] pt-40 pb-20 px-50 rounded-[40px] m-5"
        >
            <footer className="text-white px-6 md:px-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8, ease: "easeOut" }} 
                        viewport={{ once: true }}
                    >
                        <div className="max-w-[300px]">
                            <h2 className="text-2xl font-bold">Slotkart.com</h2>
                            <p className="text-gray-400 mt-2">
                                World class development and built for performance, Slate will
                                deliver every time.
                            </p>
                        </div>
                        <div className="flex gap-3 mt-4 text-2xl">
                            <button className="border px-7 py-4 rounded-full text-sm flex items-center">
                                + (61) 0000 0000
                            </button>
                            <button className="border px-7 py-4 rounded-full text-sm flex items-center">
                                slate@flowbase.co
                            </button>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8, ease: "easeOut" }} 
                        viewport={{ once: true }}
                    >
                        <h3 className="text-sm">Subscribe to get an update :</h3>
                        <div className="mt-3 flex flex-col w-[350px] gap-3">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-gray-800 text-white px-5 py-4 rounded-full focus:outline-none"
                            />
                            <button className="bg-blue-600 px-5 py-4 rounded-full text-white font-medium">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }} 
                    viewport={{ once: true }}
                    className="border-t border-gray-800 my-6"
                ></motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, ease: "easeOut" }} 
                    viewport={{ once: true }}
                    className="mx-auto flex flex-col md:flex-row items-center text-gray-400 text-sm w-full justify-between"
                >
                    <div className="min-w-[300px] flex flex-col gap-6 mr-20 items-start">
                        <div className="flex gap-8 mb-4 md:mb-0">
                            <FaFacebookF className="cursor-pointer hover:text-white transition duration-300" />
                            <FaTwitter className="cursor-pointer hover:text-white transition duration-300" />
                            <FaInstagram className="cursor-pointer hover:text-white transition duration-300" />
                        </div>
                        <div className="text-gray-500 text-md">
                            Template by <span className="text-white">Flowbase</span>, Built for{" "}
                            <span className="text-white">Framer</span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 w-full justify-between">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.8, ease: "easeOut" }} 
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h4 className="font-medium text-white">Product</h4>
                            <ul className="mt-2 space-y-8">
                                <li>Home</li>
                                <li>Company</li>
                                <li>Product</li>
                            </ul>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 30 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.8, ease: "easeOut" }} 
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h4 className="font-medium text-white">Features</h4>
                            <ul className="mt-2 space-y-8">
                                <li>Blog</li>
                                <li>Blog Single</li>
                                <li>Pricing</li>
                                <li>Customer</li>
                            </ul>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 50 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            transition={{ duration: 0.8, ease: "easeOut" }} 
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h4 className="font-medium text-white">More</h4>
                            <ul className="mt-2 space-y-8">
                                <li>Customer Single</li>
                                <li>Contact</li>
                                <li>Login</li>
                                <li>Register</li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>
            </footer>
        </motion.div>
    );
};

export default Footer;
