"use client";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
export default function Navbar() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-lg shadow-md"
        >
            <div className="px-6 md:px-20 py-3 flex items-center justify-between">
                <Image
                    className="text-xl font-bold cursor-pointer w-10"
                    src="/landing/logodulit.png" alt="du fest "
                />

                <div className="hidden md:flex space-x-6">
                    {[{ name: "Home", link: "/" },
                    { name: "Speaker", link: "/speaker" },
                    { name: "Program", link: "/program" },
                    { name: "Partner", link: "/partner" },
                    { name: "House Of Fiction", link: "/house-of-fiction" }
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.link}
                            className="text-gray-500 hover:text-black transition-colors text-sm font-medium"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="h-6 w-6 text-gray-700" />
                        </SheetTrigger>
                        <SheetContent side="left" className="p-6">
                            <div className="flex flex-col space-y-4">
                                {[{ name: "Home", link: "/" },
                                { name: "Speaker", link: "/speaker" },
                                { name: "Program", link: "/program" },
                                { name: "Partner", link: "/partner" },
                                { name: "House Of Fiction", link: "/house-of-fiction" }
                                ].map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        className="text-gray-700 hover:text-black transition-colors text-lg font-medium"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
                <button className="hidden md:block bg-blue-600 rounded-xl px-5 py-2 font-semibold text-white">
                    Register
                </button>
            </div>
        </motion.div>
    );
}
