import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Types for testimonial data
interface Testimonial {
  category: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
  background: string;
  textColor: string;
  className: string;
}

export default function TestimonialStatic() {
  const testimonials: Testimonial[] = [
    {
      category: "GAME-CHANGING INSIGHTS",
      quote: "Summit insights on UX, innovation, and design thinking will help me build better products.",
      name: "Aditiya",
      title: "Product Designer",
      company: "",
      image: "/logo.png",
      background: "bg-black",
      textColor: "text-white",
      className: "relative pr-20"
    },
    {
      category: "THE BEST EVENT!",
      quote: "Delhi Startup Summit helped Rewaysoft Technologies learn, connect, and find partners and investors. Great for startups.",
      name: "Divyansh",
      title: "Founder,",
      company: "Reway DeepMind",
      image: "/logo.png",
      background: "bg-gradient-to-b from-purple-600 to-cyan-500",
      textColor: "text-white",
      className: "md:relative left-[-80px]"
    },
    {
      category: "UNMATCHED OPPORTUNITIES",
      quote: "I walked in with curiosity and walked out full of ideas! Delhi Startup Summit wasn’t just an event it felt like a crash course in innovation, creativity, and what it truly takes to build the future.",
      name: "Seema",
      title: "Economics Student",
      company: "FutureAI Labs",
      image: "/logo.png",
      background: "bg-gray-200",
      textColor: "text-black",
      className: "md:relative md:left-[-85px]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.div
      className="w-full px-4 py-8 mx-auto md:px-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className='flex items-center justify-between h-full mb-12'>
        <h1 className="text-5xl font-bold text-black bricolage-grotesque md:mb-12 ">What Past Attendees Say</h1>
        <div className='hidden gap-4 md:flex'>
          <span className='border-2 rounded-full w-14 h-14 '></span>
          <span className='bg-gray-500 rounded-full w-14 h-14 '></span>
        </div>
      </div>
      <div className="relative flex flex-col gap-4 md:flex-row">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`${testimonial.background} ${testimonial.textColor} ${testimonial.className} overflow-hidden rounded-[40px] p-8 flex flex-col justify-between shadow-xl w-full md:min-w-[calc(33.333%+1rem)] h-96`}
            variants={cardVariants}
          >
            <div>
              <h2 className="mb-6 text-2xl font-bold bricolage-grotesque">{testimonial.category}</h2>
              <p className="mb-8 text-lg syne">&quot;{testimonial.quote}&quot;</p>
            </div>

            <div className="flex items-center">
                <div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
                <Image height={50} width={50} src={testimonial.image} alt={testimonial.name} className="object-cover w-full h-full" />
                </div>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p>{testimonial.title} {testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}