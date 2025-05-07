import { useState, useEffect } from "react";
import { FormButton } from "../common/Form";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HighlightsDisplay() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 1.2,
                ease: "easeOut"
            }
        }
    };

    if (!isClient) {
        return (
            <div className="w-full flex flex-col justify-center items-center my-12 md:my-24 px-2 md:px-8">
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col justify-center items-center my-12 md:my-24 px-2 md:px-10">
            <div className="flex md:gap-20 gap-3 z-0 mb-8">
                <motion.div 
                    className="relative md:top-[16rem] top-[6rem]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <Image className="rounded-md md:rounded-2xl" height={200} width={300} src="/img4.jpg" alt="Image 1" />
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeIn}
                >
                    <Image className="rounded-md md:rounded-2xl" height={500} width={700} src="/img1.jpeg" alt="Image 2" />
                </motion.div>
                <motion.div 
                    className="relative md:top-[10rem] top-[4rem]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <Image className="rounded-md md:rounded-2xl" height={300} width={500} src="/img3.jpg" alt="Image 3" />
                </motion.div>
            </div>
            <motion.div 
                className="flex flex-col justify-center items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeIn}
            >
                <h1 className="text-[30px] md:text-[150px] z-10 font-bold">
                    Highlights
                </h1>
                <motion.div 
                    className="my-3 md:my-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <FormButton />
                </motion.div>
            </motion.div>
            <div className="flex md:gap-20 gap-7 z-0 px-5 md:px-0">
                <motion.div 
                    className="relative md:top-[-4rem] md:left-[-7rem]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <Image className="rounded-md md:rounded-2xl" height={200} width={400} src="/img2.jpg" alt="Image 1" />
                </motion.div>
                <motion.div 
                    className="relative top-[-rem] md:top-[-7rem] md:left-[10rem]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <Image className="rounded-md md:rounded-2xl" height={300} width={500} src="/img6.jpg" alt="Image 3" />
                </motion.div>
            </div>
        </div>
    );
}