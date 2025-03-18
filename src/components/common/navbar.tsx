"use client";
import { motion } from "framer-motion";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-lg shadow-md"
        >
            <div className="px-20 py-3 flex items-center justify-between">

                {/* Logo */}
                <motion.h1
                    className="text-xl font-bold cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                >
                    Slotkart.com
                </motion.h1>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    {["Beauty", "Panels", "Native"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="text-gray-500 hover:text-black transition-colors text-sm font-medium"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Location and Search Bar */}
                <div className="flex items-center space-x-3">
                    {/* Location Selector */}
                    <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm border cursor-pointer">
                        <FaMapMarkerAlt className="text-gray-500 text-sm mr-2" />
                        <span className="text-sm text-gray-600">Connaught Place, New ...</span>
                        <IoIosArrowDown className="ml-2 text-gray-500" />
                    </div>

                    <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm border">
                        <CiSearch className="text-gray-500 text-lg mr-2" />
                        <input
                            type="text"
                            placeholder="Search for 'AC s..."
                            className="outline-none text-sm text-gray-600 bg-transparent placeholder-gray-400 w-40"
                        />
                    </div>
                </div>

                <div className="flex items-center space-x-6">
                    <FiShoppingCart className="text-gray-600 text-xl cursor-pointer" />
                    <FiUser className="text-gray-600 text-xl cursor-pointer" />
                </div>
            </div>
        </motion.div>
    );
}
