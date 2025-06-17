'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
// import { FormButton } from '../common/Form';

export default function CurrentHero() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            id='home'
            className="w-full flex flex-col items-start justify-center text-center px-2 md:px-24 pt-16"
        >
            <div className='py-4 flex gap-4 flex-row items-center justify-center'>
                <h1 className=''>
                    Powered by
                </h1>
                <Image
                    src="/neecoplogo.png"
                    alt="Neecop"
                    width={300}
                    height={100}
                    className="h-10 w-auto bricolage-grotesque  mt-2"
                />  
            </div>
            <motion.div
                className="relative w-full shadow-lg overflow-hidden"
                style={{
                    border: '3px solid transparent',
                    borderRadius: '30px',
                    backgroundClip: 'padding-box, border-box',
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, #C512F8, #00CFC3)',
                }}
                initial={{ scale: 0.98 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="relative cloudy-blur">
                    <Image
                        src="/hero.png"
                        alt="Beautiful Landscape"
                        width={1000}
                        height={500}
                        className="object-cover w-full h-[600px] rounded-xl shadow-lg "
                    />
                </div>
                {/* <div className="absolute bottom-[2rem] left-[30%] md:left-[43%] z-10">
                    <FormButton />
                </div> */}
            </motion.div>
        </motion.section>
    );
}
