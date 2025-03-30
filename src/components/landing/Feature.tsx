// import Image from "next/image";
// import { SpinningText } from "../magicui/spinning-text";
import { ArrowUpRight } from "lucide-react";
import { AvatarCircles } from "../magicui/avatar-circles";

export default function Features() {


    const avatars = [
        {
            imageUrl: "/landing/img1.jpg",
            profileUrl: "/landing/img1.jpg",
        },

    ];


    return (
        <section className="flex flex-col h-full md:flex-row gap-6 justify-center p-5 md:p-10 md:h-[600px] md:px-32">
            <div className="rounded-[40px] flex flex-col  justify-between w-full  h-full bg-gradient-to-b from-[#C512F8] to-[#00CFC3] md:w-1/2 p-10">
                <div className=" flex flex-col items-start">
                    <h1 className="text-4xl text-white font-bold">Speakers</h1>
                    <div className=" flex flex-row  mt-10 ">
                        <div className="flex w-1/3">
                            <div className="hidden w-12 h-12 bg-gray-200 rounded-full md:flex items-center justify-center">
                                <ArrowUpRight size={30} className="text-blue-700 " />
                            </div>
                        </div>
                        <p className="text-xl text-white">Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.</p>
                    </div>
                </div>
                <div className="flex flex-row md:flex-row gap-12 items-center justify-center mt-10">
                    <AvatarCircles numPeople={5} avatarUrls={avatars} />
                    <button className="flex items-center justify-center gap-2 my-8 px-6 py-3 text-white font-medium text-lg rounded-full bg-gradient-to-br from-[#C512F8] to-[#00CFC3] shadow-lg transition-transform transform hover:scale-105 border-2 border-white">
                        And more <ArrowUpRight size={20} />
                    </button>
                </div>
            </div>
            <div className="flex flex-col md:w-1/2 gap-6">
                <div className=" flex  flex-col gap-6 w-full h-1/2  bg-black rounded-[40px] p-10 text-white ">
                    <h1 className=" text-4xl font-bold">Workshops</h1>
                    <p className="w-[95%] text-lg">
                        Explore advanced machine learning, natural language processing, AI-driven automation, and emerging cybersecurity applications.
                    </p>
                </div>
                <div className="relative w-full h-1/2 rounded-[40px] p-10 text-white">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00CFC3] to-[#C512F8] opacity-25 rounded-[40px]"></div>

                    <div className="relative flex flex-col gap-6 w-full h-full text-black">
                        <h1 className="text-4xl font-bold">Networking Opportunities</h1>
                        <p className="w-[95%] text-lg">
                            Enjoy exclusive networking sessions, roundtables, and social events to foster collaboration and spark new partnerships.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
