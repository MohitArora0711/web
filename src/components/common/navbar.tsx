"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { RegisterModal } from "../RegisterModal";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", link: "/" },
    // { name: "Schedule", link: "/schedule" },
    // { name: "Speakers", link: "/speakers" },
    { name: "Partner", link: "/partner" },
    // { name: "Venue", link: "/venue" },
    // { name: "Startup Social", link: "/startup-social" }
];

export default function Navbar() {
    const pathname = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="flex w-full justify-between items-center px-10 py-4 border-black relative">
            <h1 className="text-xl font-bold">Delhi Startup Summit</h1>
            
            <div className="hidden md:flex space-x-6 items-center">
                {navItems.map((item) => (
                    <Link key={item.name} href={item.link}>
                        <span
                            className={`relative px-5 py-2 font-medium transition-all hover:text-black ${pathname === item.link
                                ? "text-black before:absolute before:inset-0 before:rounded-full border-[2px] rounded-full border-black before:-z-10"
                                : "text-gray-600"}`}
                        >
                            {item.name}
                        </span>
                    </Link>
                ))}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl px-5 py-2 font-semibold text-white"
                >
                    Register
                </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
                <Menu size={28} />
            </button>

            {/* Mobile Menu */}
            <div className={`fixed z-10 top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex justify-between items-center p-5 border-b">
                    <h2 className="text-xl font-bold">Menu</h2>
                    <button onClick={() => setIsMenuOpen(false)}>
                        <X size={28} />
                    </button>
                </div>
                <div className="flex flex-col space-y-6 p-6">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.link}>
                            <span className={`block text-lg font-medium transition-all ${pathname === item.link ? "text-black font-bold" : "text-gray-600 hover:text-black"}`}>
                                {item.name}
                            </span>
                        </Link>
                    ))}
                    <button
                        onClick={() => {
                            setIsModalOpen(true);
                            setIsMenuOpen(false);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl px-5 py-2 font-semibold text-white w-full"
                    >
                        Register
                    </button>
                </div>
            </div>

            <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
