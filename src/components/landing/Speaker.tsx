import Image from "next/image";
import { ArrowUpRight } from "lucide-react";


export default function SpeakerSection() {
    return (
        <section className="py-12 px-28 mx-auto text-center mt-32">
            <div className="flex flex-row justify-between w0full items-center">
                <h1 className="text-8xl font-semibold text-left">KEYNOTE <br /> SPEAKERS</h1>
                <p className="max-w-[300px] text-right"> Meet the industry leaders shaping india’s startup ecosystem </p>

            </div>

            <div className="flex gap-8 ">
                <div className="flex gap-8">
                    <div className="w-[300px] h-[400px] flex flex-col justify-between items-left p-5 bg-gray-300 shadow-md mt-10 rounded-[30px] text-left py-10 px-8 text-xl">
                        <h1>Dr. Emily Carter</h1>
                        <p>Chief AI Scientist, OpenAI</p>
                    </div>
                    <div className="relative w-[300px] h-[400px] overflow-hidden rounded-[30px] mt-10 shadow-md group">
                        <Image
                            src="/landing/img1.jpg" // Change this to your actual image path
                            alt="Speaker"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="w-[300px] h-[400px] flex flex-col justify-between items-left p-5 bg-gray-300 shadow-md mt-10 rounded-[30px] text-left py-10 px-8 text-xl">
                        <h1>Dr. Emily Carter</h1>
                        <p>Chief AI Scientist, OpenAI</p>
                    </div>
                    <div className="relative w-[300px] h-[400px] overflow-hidden rounded-[30px] mt-10 shadow-md group">
                        <Image
                            src="/landing/img1.jpg" // Change this to your actual image path
                            alt="Speaker"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 ">
                <div className="flex gap-8">

                    <div className="relative w-[300px] h-[400px] overflow-hidden rounded-[30px] mt-10 shadow-md group">
                        <Image
                            src="/landing/img1.jpg" // Change this to your actual image path
                            alt="Speaker"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    <div className="w-[300px] h-[400px] flex flex-col justify-between items-left p-5 bg-gray-300 shadow-md mt-10 rounded-[30px] text-left py-10 px-8 text-xl">
                        <h1>Dr. Emily Carter</h1>
                        <p>Chief AI Scientist, OpenAI</p>
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="relative w-[300px] h-[400px] overflow-hidden rounded-[30px] mt-10 shadow-md group">
                        <Image
                            src="/landing/img1.jpg" // Change this to your actual image path
                            alt="Speaker"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
                    </div>
                    <div className="w-[300px] h-[400px] flex flex-col justify-between items-left p-5 bg-gray-300 shadow-md mt-10 rounded-[30px] text-left py-10 px-8 text-xl">
                        <h1>Dr. Emily Carter</h1>
                        <p>Chief AI Scientist, OpenAI</p>
                    </div>
                </div>
            </div>
            <button className="flex items-center justify-center mt-12 gap-2 my-8 px-6 py-3 text-white font-medium text-lg rounded-full bg-gradient-to-br from-[#C512F8] to-[#00CFC3] shadow-lg transition-transform transform hover:scale-105">
                And More <ArrowUpRight size={20} />
            </button>
        </section>
    );
}
