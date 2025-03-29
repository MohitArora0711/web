'use client';

import Image from 'next/image';

export default function NewHero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center py-20 px-5 bg-[#f9f6f3]">
            {/* Gradient Border */}
            <div className="relative p-10 max-w-3xl w-full shadow-lg bg-white rounded-2xl"
                style={{
                    border: '4px solid transparent',
                    borderRadius: '16px',
                    backgroundClip: 'padding-box, border-box',
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #C512F8, #00CFC3)',
                }}>
                
                {/* University of Delhi Text */}
                <div className="absolute top-4 left-4 text-xs font-semibold text-purple-600">
                    <span className="text-purple-900">UNIVERSITY OF</span> DELHI
                </div>

                {/* Main Logo with Peacock */}
                <div className="flex flex-col items-center">
                    <Image src="/logo.png" alt="Delhi Startup Summit 2025" width={300} height={300} />
                </div>

                {/* Gradient Text for Event Name */}
                <h1 className="text-4xl font-bold mt-4 bg-gradient-to-r from-[#C512F8] to-[#00CFC3] text-transparent bg-clip-text">
                    DELHI STARTUP SUMMIT 2025
                </h1>

                {/* Event Date */}
                <div className="absolute top-4 right-4 text-xs font-semibold text-gray-700">
                    <p>April</p>
                    <p className="text-blue-600 text-lg font-bold">25-26-27</p>
                    <p>2025</p>
                </div>

                {/* Bottom Text */}
                <div className="mt-5 text-gray-700">
                    <p className="text-lg font-semibold">Student-led initiatives</p>
                    <p className="text-sm">Powered by</p>
                    <p className="text-xl font-bold text-blue-600">neecop</p>
                </div>

                {/* KMC , DU */}
                <div className="absolute bottom-4 left-4 text-lg font-semibold text-blue-600">
                    KMC , DU
                </div>

                {/* Small Icon in Top Right */}
                <div className="absolute top-6 right-10">
                    <Image src="/icon.png" alt="Small Icon" width={20} height={20} />
                </div>
            </div>
        </section>
    );
}
