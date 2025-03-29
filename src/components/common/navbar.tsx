"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { RegisterModal } from "../RegisterModal";

const navItems = [
    { name: "Home", link: "/" },
    { name: "Schedule", link: "/schedule" },
    { name: "Speakers", link: "/speakers" },
    { name: "Partner", link: "/partner" },
    { name: "Venue", link: "/venue" },
    { name: "Startup Social", link: "/startup-social" }
];

export default function Navbar() {
    const pathname = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false); // ✅ Moved inside component

    return (
        <div className="flex w-full justify-between items-center px-10 py-4 border-b border-black bg-[#f9f6f3] ">
            <h1 className="text-xl font-bold">Delhi startup Summit</h1>
            <div className="flex space-x-6 w-full items-center justify-end">
                {navItems.map((item) => (
                    <Link key={item.name} href={item.link}>
                        <span
                            className={`relative px-4 py-1 font-medium transition-all hover:text-black ${pathname === item.link
                                    ? "text-black before:absolute before:inset-0 before:rounded-full before:border before:border-black before:-z-10"
                                    : "text-gray-600"
                                }`}
                        >
                            {item.name}
                        </span>
                    </Link>
                ))}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="hidden md:block bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl px-5 py-2 font-semibold text-white"
                >
                    Register
                </button>
            </div>

            <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
