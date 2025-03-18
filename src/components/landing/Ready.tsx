
"use client"
import React from 'react';
import { motion } from 'framer-motion';

function Ready() {
    return (
        <motion.div
            className='p-50'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-6xl font-bold text-center'>
                    Ready to start your <span className='text-blue-600'>Journey</span> ?
                </h1>
                <p className='text-center py-10 text-2xl w-[600px]'>
                    we and take the next step in your journey. rcu cursus ultricies nulla tellus tempor Mauris ut arcu ornare eu dignissim rcu cursus ultricies nulla tellus tempor Mauris ut arcu ornare eu dignissim
                </p>
                <motion.button
                    className='bg-blue-600 py-5 px-12 font-bold text-white rounded-4xl my-5 hover:bg-blue-500'
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Join Neecop
                </motion.button>
            </div>
        </motion.div>
    );
}

export default Ready;
