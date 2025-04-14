"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FormButton } from "./Form";
import { VolunteerForm } from "./VolunteerForm";
import StallBookingForm from "./stallBookingForm";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed z-10 w-full bg-white backdrop-blur-lg shadow-sm px-4 sm:px-12 py-4 flex justify-between items-center rounded-lg">
            <h1 className="text-xl font-bold text-gray-800">Delhi Startup Summit</h1>

            <div className="hidden md:flex items-center space-x-6">
                <VolunteerForm />
                <StallBookingForm />
                <FormButton />
            </div>

            <button
                className="block md:hidden"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
            >
                <FiMenu size={28} />
            </button>

            <div
                className={`fixed top-0 right-0 z-30 min-h-screen w-3/4 max-w-xs bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4 border-b">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <FiX size={28} />
                    </button>
                </div>
                <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col space-y-6 p-6 ">
                        <VolunteerForm />
                        <StallBookingForm />
                        <FormButton />
                    </div>

                    <div className="mt-8 px-6 pb-6 border-t text-sm text-gray-700 space-y-4">
                        <div>
                            <h2 className="font-semibold text-gray-900">Contact Us</h2>
                            <p>+91 8595870292</p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-900">Event Location</h2>
                            <p>North Campus</p>
                            <p>University of Delhi</p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-900">Email</h2>
                            <p>contact@delhistartupsummit.com</p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-900">Follow Us</h2>
                            <div className="flex space-x-4 mt-2 text-lg">
                                <a href="#" aria-label="Instagram" className="hover:text-pink-600">
                                    <FaInstagram />
                                </a>
                                <a href="#" aria-label="Facebook" className="hover:text-blue-600">
                                    <FaFacebookF />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="hover:text-blue-500">
                                    <FaLinkedinIn />
                                </a>
                                <a href="#" aria-label="Twitter" className="hover:text-sky-500">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
