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
            className="flex flex-col items-start justify-center w-full px-2 pt-16 text-center md:px-24"
        >
            <div className='flex flex-row items-center justify-center gap-4 py-4'>
                <h1 className=''>
                    Powered by
                </h1>
                
                <Image
                    src="/neecoplogo.png"
                    alt="Neecop"
                    width={300}
                    height={100}
                    className="w-auto mt-2 mh-10 bricolage-grotesque"
                />  
            </div>
            <motion.div
                className="relative w-full overflow-hidden shadow-lg"
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
                        src="/heroimg.png"
                        alt="Beautiful Landscape"
                        width={1000}
                        height={500}
                        className="object-cover w-full md:h-[600px] rounded-xl shadow-lg "
                    />
                </div>
                {/* <div className="absolute bottom-[2rem] left-[30%] md:left-[43%] z-10">
                    <FormButton />
                </div> */}
            </motion.div>
        </motion.section>
    );
}
