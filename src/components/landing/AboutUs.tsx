import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="w-full px-6 md:px-28 py-8 md:py-16 flex flex-col items-center">
            <div className="w-full flex flex-col md:flex-row items-center gap-8">

                <div className="w-full md:w-1/3 flex justify-center">
                    <Image
                        width={300}
                        height={300}
                        src="/neecop.png"
                        alt="Delhi Startup Summit 2025"
                        className="h-auto"
                    />
                </div>

                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h2 className="text-6xl md:text-8xl font-bold text-black">About us</h2>
                    <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
                        The Delhi Startup Summit 2025 is a premier event designed to bring together aspiring
                        entrepreneurs, investors, policymakers, and industry leaders to foster innovation,
                        collaboration, and growth in the startup ecosystem. Organized by Neecop Consultants
                        Pvt Ltd, the summit aims to empower student entrepreneurs by providing them with the
                        right knowledge, mentorship, funding opportunities, and networking platforms.
                    </p>
                </div>

            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 md:mt-24 w-full">

                <div className="w-full md:w-1/2 bg-gradient-to-b from-[#7D00FF] to-[#00D8C0] rounded-[30px] shadow-lg p-6 md:p-8 relative h-[250px] md:h-[300px]">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm md:text-lg font-semibold py-2 md:py-3 px-16 md:px-24 rounded-full">
                        Mission
                    </div>
                    <p className="mt-6 text-white text-center text-sm md:text-lg leading-relaxed">
                        The Delhi Startup Summit 2025 is dedicated to empowering student
                        entrepreneurs by providing them with the right resources, mentorship,
                        funding opportunities, and networking platforms.
                    </p>
                </div>

                <div className="w-full md:w-1/2 bg-gradient-to-b from-[#7D00FF] to-[#00D8C0] rounded-[30px] shadow-lg p-6 md:p-8 relative h-[250px] md:h-[300px]">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm md:text-lg font-semibold py-2 md:py-3 px-20 md:px-28 rounded-full">
                        Vision
                    </div>
                    <p className="mt-6 text-white text-center text-sm md:text-lg leading-relaxed">
                        The Delhi Startup Summit 2025 is dedicated to empowering student
                        entrepreneurs by providing them with the right resources, mentorship,
                        funding opportunities, and networking platforms.
                    </p>
                </div>

            </div>
        </section>
    );
}
