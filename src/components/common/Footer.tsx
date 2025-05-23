"use client"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
// import Image from "next/image";
const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-black p-24 max-sm:px-10 max-sm:py-20 m-2 md:m-5 rounded-[40px] justify-stretch flex overflow-hidden relative"
        >
            <div className="text-white flex-col md:flex-row px-6 md:px-16 max-sm:p-0 flex justify-between w-full mb-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="z-20"
                    >
                        <div className="max-w-[300px]">
                            <h2 className="text-2xl font-bold">Delhi Startup Summit </h2>

                            <p className="text-gray-400 mt-2">
                                Bridging Future Partnerships through right access to investors, partners and mentors.
                            </p>
                        </div>
                        <div className="flex max-sm:flex-col gap-3 mt-6 text-2xl">
                            {/* <a href="tel:+91 8595870292" className="border px-7 py-4 max-sm:px-6 max-sm:py-2 rounded-full text-sm flex items-center w-full ">
                                +91 8595870292
                            </a> */}
                            <a href="mailto:contact@delhistartupsummit.com" className="border px-7 text-gray-400 py-4 max-sm:px-6 max-sm:py-2 rounded-full text-sm flex items-center">
                            contact@delhistartupsummit.com
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="border-t border-gray-800 my-6"
                    ></motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mx-auto flex flex-col  items-end text-gray-400 text-sm justify-end"
                >
                    <div className="min-w-[300px] max-sm:w-full max-sm:items-center flex flex-col gap-6 mr-20 max-sm:m-0 items-end">
                        <div className="flex gap-12 mb-4 md:mb-0">
                            <FaFacebookF className="cursor-pointer text-2xl   hover:text-white transition duration-300" />
                            <FaTwitter className="cursor-pointer text-2xl hover:text-white transition duration-300" />
                            <FaInstagram className="cursor-pointer text-2xl hover:text-white transition duration-300" />
                            <a target="_blank" href="https://www.linkedin.com/company/neecop/posts/?feedView=all">
                                <FaLinkedin className="cursor-pointer text-2xl hover:text-white transition duration-300" />
                            </a>
                        </div>
                    </div>

                </motion.div>
                <h1 className="md:hidden  absolute left-5  text-[23vw] bottom-[-4vh] o font-bold bg-gradient-to-b from-gray-500 to-black bg-clip-text text-transparent">
                    NEECOP
                </h1>
            </div>
            <h1 className="hidden md:block absolute left-12  text-[23vw] bottom-[-38vh] o font-bold bg-gradient-to-b from-gray-600 to-black bg-clip-text text-transparent">
                NEECOP
            </h1>
        </motion.div>
    );
};

export default Footer;