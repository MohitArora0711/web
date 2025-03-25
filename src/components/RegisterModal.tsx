"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
    const [formData, setFormData] = useState({
        festivalDate: "",
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        profession: "",
        referral: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        setIsSubmitted(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm h-screen "
                >
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="absolute h-[45rem] m-5 scrollbar-thin   md:top-[50px]  -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-y-auto"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        <div className="flex flex-col md:flex-row">
                            {/* Left side - Image */}
                            <div className="hidden md:block w-1/2 relative">
                                <Image
                                    src="/landing/img1.jpg"
                                    alt="Registration"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-8 left-8 text-white">
                                    <h2 className="text-3xl font-bold mb-4">Join DU Fest 2024</h2>
                                    <p className="text-lg">Experience the biggest cultural festival of Delhi University</p>
                                </div>
                            </div>

                            {/* Right side - Form */}
                            <div className="w-full md:w-1/2 p-6 md:p-8">
                                {!isSubmitted ? (
                                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                        <div className="md:hidden mb-6">
                                            <h2 className="text-2xl font-bold text-gray-800">Join DU Fest 2024</h2>
                                            <p className="text-gray-600 mt-2">Experience the biggest cultural festival of Delhi University</p>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-6 hidden md:block">Registration Form</h2>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                            <div className="space-y-1.5 md:space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Festival Date *</label>
                                                <select
                                                    name="festivalDate"
                                                    value={formData.festivalDate}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                                >
                                                    <option value="">Select Date</option>
                                                    <option value="Day 1">Day 1</option>
                                                    <option value="Day 2">Day 2</option>
                                                    <option value="Both Days">Both Days</option>
                                                </select>
                                            </div>

                                            <div className="space-y-1.5 md:space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="John Doe"
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                                />
                                            </div>

                                            <div className="space-y-1.5 md:space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Email *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="john@example.com"
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                                />
                                            </div>

                                            <div className="space-y-1.5 md:space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Phone *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="0123456789"
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                                />
                                            </div>

                                            <div className="space-y-1.5 md:space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Age *</label>
                                                <input
                                                    type="number"
                                                    name="age"
                                                    value={formData.age}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="18"
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                                />
                                            </div>

                                            <div className="space-y-1.5 md:space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Gender *</label>
                                                <select
                                                    name="gender"
                                                    value={formData.gender}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                                >
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                    <option value="Prefer not to say">Prefer not to say</option>
                                                </select>
                                            </div>

                                            <div className="space-y-1.5 md:space-y-2">
                                                <label className="text-sm font-medium text-gray-700">College/Profession *</label>
                                                <input
                                                    type="text"
                                                    name="profession"
                                                    value={formData.profession}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Delhi University"
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                                />
                                            </div>

                                            <div className="space-y-1.5 md:space-y-2">
                                                <label className="text-sm font-medium text-gray-700">Referral Code</label>
                                                <input
                                                    type="text"
                                                    name="referral"
                                                    value={formData.referral}
                                                    onChange={handleChange}
                                                    placeholder="Enter Referral Code"
                                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full py-3 px-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                                        >
                                            Register Now
                                        </button>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center py-8 md:py-12"
                                    >
                                        <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                                            <svg
                                                className="w-8 h-8 md:w-10 md:h-10 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                                        <p className="text-gray-600 mb-6 text-sm md:text-base">
                                            Your registration has been submitted successfully.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setIsSubmitted(false);
                                                setFormData({
                                                    festivalDate: "",
                                                    name: "",
                                                    email: "",
                                                    phone: "",
                                                    age: "",
                                                    gender: "",
                                                    profession: "",
                                                    referral: ""
                                                });
                                            }}
                                            className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                                        >
                                            Register Another
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 