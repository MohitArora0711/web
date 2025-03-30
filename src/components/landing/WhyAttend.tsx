import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhyAttend = () => {
    const cardsup = [
        {
            number: "01",
            title: "CREATING A COLLABORATIVE PLATFORM",
            description:
                "Gain firsthand knowledge from top AI experts and pioneers shaping the industry.",
        },
        {
            number: "02",
            title: "KNOWLEDGE & SKILL DEVELOPMENT",
            description:
                "Participate in interactive workshops, live demos, and deep-dive sessions to sharpen your skills.",
        }
    ];
    const cardsdown = [
        {
            number: "03",
            title: "BRIDGING THE GAPS IN INDIA’S STARTUP ECOSYSTEM",
            description:
                "Connect with AI leaders, investors, startups, and fellow professionals at curated networking events.",
        },
        {
            number: "04",
            title: "CONNECTING STARTUPS WITH INVESTORS & POLICYMAKERS",
            description:
                "Explore groundbreaking AI solutions, from emerging startups to tech giants redefining the future.",
        },
    ];

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{  }}
            variants={fadeInUp}
            className="px-4 py-16 md:px-28"
        >
            <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-12">
                <motion.h2 variants={fadeInUp} className="text-6xl md:text-8xl font-bold">WHY ATTEND?</motion.h2>
                <motion.p variants={fadeInUp} className="max-w-sm text-gray-600">
                    Discover why Delhi startup summit 2025 is the must-attend event for
                    startup founders, entrepreneurs, innovators, investors, and industry
                    leaders.
                </motion.p>
            </div>

            <div className="hidden md:grid md:grid-cols-2 gap-6">
                {cardsup.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-black text-white p-8 rounded-[40px] relative flex flex-row md:flex-col justify-between h-[300px] overflow-hidden"
                    >
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                        <div className="flex mt-5 gap-8">
                            <p className="flex items-start text-[250px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                                {card.number}
                            </p>
                            <p className="text-xl text-gray-300">{card.description}</p>
                        </div>
                    </motion.div>
                ))}
                {cardsdown.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-black text-white p-8 rounded-[40px] relative flex flex-col justify-between h-[300px] overflow-hidden"
                    >
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                        <div className="flex mt-5 gap-8">
                            <p className="text-xl text-gray-300">{card.description}</p>
                            <p className="flex items-start text-[250px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                                {card.number}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* for mobile */}
            <div className="md:hidden grid md:grid-cols-2 gap-6">
                {cardsup.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-black text-white p-8 rounded-[40px] flex flex-col md:flex-col justify-between h-[300px] md:h-[300px] overflow-hidden"
                    >
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                        <div className="flex mt-5 gap-8 flex-col h-full">
                            <p className="text-sm text-gray-300">{card.description}</p>
                            <p className="relative top-[-130px] flex items-start text-[300px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                                {card.number}
                            </p>
                        </div>
                    </motion.div>
                ))}
                {cardsdown.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="bg-black text-white p-8 rounded-[40px] flex flex-col md:flex-col justify-between h-[300px] md:h-[300px] overflow-hidden"
                    >
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                        <div className="flex mt-5 gap-8 flex-col h-full">
                            <p className="text-sm text-gray-300">{card.description}</p>
                            <p className="relative top-[-130px] flex items-start text-[300px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                                {card.number}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default WhyAttend;