"use client"
import React, { useState } from 'react'
import { RegisterModal } from '../RegisterModal';

function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className='text-center mb-36 flex justify-center items-center flex-col '>
            <p className='md:text-xl bg-black/10 px-5 rounded-full my-5 '>Join the Events</p>
            <h1 className='hidden md:block font-bold text-3xl md:text-[65px]'>Make your  <span className=' text-blue-700'>REGISTRATION</span></h1>
            <h1 className='md:hidden font-bold text-3xl md:text-[65px]'><span className=' text-blue-700 font-bold'>REGISTRATION</span></h1>
            <p className=' md:text-2xl text-semibold  my-3  text-gray-600 w-[70%]'>
                Come join us for a three-day literary extravaganza! Click on the register button, fill in your details, download your pass, and you're all set to be a part of our grandest edition yet!                </p>
            <button onClick={() => { setIsModalOpen(true); window.location.href = "#" }} className='bg-blue-600 md:py-5 md:px-12 py-3 px-5 font-bold  text-white rounded-2xl cursor-pointer  my-5 hover:bg-blue-500 '>Register to attend</button>
            <RegisterModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}

export default Hero
