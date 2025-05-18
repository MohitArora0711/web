import React from 'react';
import { motion } from 'framer-motion';

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
  className: string; // Added className property
}

export default function TestimonialStatic() {
  const testimonials: Testimonial[] = [
    {
      category: "GAME-CHANGING INSIGHTS",
      quote: "This summit opened my eyes to the potential of AI and how it will shape industries.",
      name: "Mark",
      title: "CTO,",
      company: "NeuralTech",
      image: "/logo.png",
      background: "bg-black",
      textColor: "text-white",
      className: "relative "
    },
    {
      category: "THE BEST AI EVENT!",
      quote: "Incredible speakers, top-tier networking, and cutting-edge discussions all in one place.",
      name: "Elena",
      title: "AI Researcher,",
      company: "DeepMind",
      image: "/logo.png",
      background: "bg-gradient-to-b from-purple-600 to-cyan-500",
      textColor: "text-white",
      className: "md:relative left-[-85px]"
    },
    {
      category: "UNMATCHED OPPORTUNITIES",
      quote: "From hands-on workshops to visionary talks, this summit is a must-attend for AI professionals.",
      name: "David",
      title: "CEO,",
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
      className="w-full mx-auto px-4 md:px-24 py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className='flex justify-between items-center h-full mb-12'>
        <h1 className="text-5xl bricolage-grotesque font-bold md:mb-12 text-black">What Past Attendees Say</h1>
        <div className='md:flex gap-4 hidden'>
          <span className='w-14 h-14 rounded-full border-2 '></span>
          <span className='w-14 h-14 rounded-full bg-gray-500  '></span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 relative">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`${testimonial.background} ${testimonial.textColor} ${testimonial.className} rounded-[40px] p-8 flex flex-col justify-between shadow-xl w-full md:min-w-[calc(33.333%+1rem)] h-96`}
            variants={cardVariants}
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">{testimonial.category}</h2>
              <p className="text-lg mb-8">&quot;{testimonial.quote}&quot;</p>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
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