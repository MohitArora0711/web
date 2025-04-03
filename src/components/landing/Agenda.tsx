import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Agenda() {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }}
            className="px-6 py-20 md:px-28 md:py-60 md:pb-64 mx-auto"
        >
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10"
            >
                <h1 className="text-4xl md:text-8xl font-bold mb-4 md:mb-0">AGENDA</h1>
                <p className="text-left md:text-right text-sm text-gray-600 max-w-full md:max-w-[200px]">
                    October 15-17, 2052 | Horizon Convention Center, Amsterdam
                </p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 bg-gradient-to-b from-[#C512F8] to-[#00CFC3] rounded-[20px] md:rounded-[40px] p-6 md:p-10 text-white relative overflow-hidden md:px-28 md:py-32"
            >
                <div className="absolute left-[-30px] md:left-[-50px] bottom-[-80px] md:bottom-[-120px] z-0 w-48 h-48 md:w-96 md:h-96 bg-opacity-25 bg-no-repeat bg-contain"
                    style={{ backgroundImage: "url('/landing/pattern.png')" }}></div>
                <div className="space-y-16 md:space-y-32">

                <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
            className="flex flex-col items-center w-full gap-16 md:gap-20 px-6 md:px-12 py-12"
            style={{
                background: "linear-gradient(to bottom, #A900FD, #3B9EFF)",
            }}
        >
            {/* Day 1 */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg text-white"
            >
                <div className="flex flex-col items-start">
                    <h2 className="text-3xl font-extrabold">Day 1</h2>
                    <p className="text-xl font-semibold">11:00 - 21:00</p>
                </div>
                <div className="col-span-2">
                    <h3 className="text-2xl font-bold">Indian Startup Ecosystem: Emerging Trends and Industries
                    </h3>
                    <p className="text-lg mt-2">
                        Indian Startup Ecosystem: Emerging Trends and Industries.  
                        Kickoff the summit with Workshops on Venture Building: Ideation, Product Development, Scaling, and more!  
                        Followed by Fireside chats from seasoned entrepreneurs.
                    </p>
                </div>
            </motion.div>

            {/* Day 2 */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg text-white"
            >
                <div className="flex flex-col items-start">
                    <h2 className="text-3xl font-extrabold">Day 2</h2>
                    <p className="text-xl font-semibold">11:00 - 21:00</p>
                </div>
                <div className="col-span-2 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold">
                            From Policy Interventions to Technological Advancements
                        </h3>
                        <p className="text-lg mt-2">
                            Dive deep into the minds of Policy Makers, Innovators, and Founders leading the Indian Startup Ecosystem.
                        </p>
                    </div>
                    <div className="mt-6">
                        <Button className="bg-black text-white text-lg px-6 py-3 rounded-full shadow-md hover:bg-gray-800 transition-all">
                            View Detailed Schedule ➜
                        </Button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
                </div>
            </motion.div>
        </motion.section>
    );
}
