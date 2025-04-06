// import { Button } from "@/components/ui/button";

export default function Agenda() {
    return (
        <section className="px-6 py-20 md:px-28 mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
                <h1 className="text-4xl md:text-8xl font-bold mb-4 md:mb-0">AGENDA</h1>
                <p className="text-left md:text-right text-sm text-gray-600 max-w-full md:max-w-[200px]">
                    April 26-27, 2025 | Kirori Mal College,  University of Delhi
                </p>
            </div>
            <div className="mt-6 bg-gradient-to-b from-[#C512F8] to-[#00CFC3] rounded-[20px] md:rounded-[40px] p-6 md:p-10 text-white relative overflow-hidden md:px-28 md:py-32">
                <div className="absolute left-[-30px] md:left-[-50px] bottom-[-80px] md:bottom-[-120px] w-48 h-48 md:w-96 md:h-96 bg-opacity-25 bg-no-repeat bg-contain"
                    style={{ backgroundImage: "url('/landing/pattern.png')" }}></div>
                <div className="space-y-16 md:space-y-32">


                    <div className="flex flex-col md:flex-row justify-between items-start w-full gap-6 md:gap-44">
                        <div className="w-full md:w-1/3 flex flex-col gap-2 md:gap-4">
                            <h2 className="text-xl md:text-3xl font-bold">Day 1</h2>
                            <p className="text-xl md:text-3xl font-semibold">11:00 AM - 09:00 PM </p>
                        </div>

                        <div className="w-full md:w-2/3 flex flex-col gap-2 md:gap-4">
                            <h3 className="text-xl md:text-3xl font-bold">Indian Startup Ecosystem</h3>
                            <p className="text-sm md:text-xl max-w-full md:max-w-md">
                                Emerging Trends and Industries. Kickoff the summit with Workshops on Venture Building: Ideation, Product Development, Scaling, and more! Followed by Fireside chats from seasoned entrepreneurs.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start w-full gap-6 md:gap-44 z-20">
                        <div className="w-full md:w-1/3 flex flex-col gap-2 md:gap-4 z-10">
                            <h2 className="text-xl md:text-3xl font-bold">Day 2</h2>
                            <p className="text-xl md:text-3xl font-semibold">11:00 AM - 9:00 PM </p>
                        </div>

                        <div className="w-full md:w-2/3 flex flex-col gap-2 md:gap-4 z-10">
                            <h3 className="text-xl md:text-3xl font-bold">From Policy Interventions to Technological Advancements</h3>
                            <p className="text-sm md:text-xl max-w-full md:max-w-md">
                                Dive deep into the minds of Policy Makers, Innovators, and Founders leading the Indian Startup Ecosystem.
                            </p>
                            {/* <div className="flex justify-center mt-4 md:mt-6">
                                <Button className="bg-black text-sm md:text-xl w-full py-4 md:py-6 mt-4 md:mt-8 text-white px-4 md:px-6 rounded-full flex items-center gap-2 hover:bg-gray-800">
                                    View detailed schedule ➜
                                </Button>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}