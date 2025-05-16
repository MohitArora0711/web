import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
}

// Main component
export default function TestimonialSlider() {
  // Testimonial data
  const testimonials: Testimonial[] = [
    {
      category: "GAME-CHANGING INSIGHTS",
      quote: "This summit opened my eyes to the potential of AI and how it will shape industries.",
      name: "Mark",
      title: "CTO,",
      company: "NeuralTech",
      image: "/api/placeholder/48/48",
      background: "bg-black",
      textColor: "text-white"
    },
    {
      category: "THE BEST AI EVENT!",
      quote: "Incredible speakers, top-tier networking, and cutting-edge discussions all in one place.",
      name: "Elena",
      title: "AI Researcher,",
      company: "DeepMind",
      image: "/api/placeholder/48/48",
      background: "bg-gradient-to-b from-purple-600 to-cyan-500",
      textColor: "text-white"
    },
    {
      category: "UNMATCHED OPPORTUNITIES",
      quote: "From hands-on workshops to visionary talks, this summit is a must-attend for AI professionals.",
      name: "David",
      title: "CEO,",
      company: "FutureAI Labs",
      image: "/api/placeholder/48/48",
      background: "bg-gray-200",
      textColor: "text-black"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Calculate indices for cards
  const activeIndex = currentIndex;
  const nextIndex = (currentIndex + 1) % testimonials.length;
  const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;

  // Next slide handler
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Previous slide handler
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) W=> (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Animation variants
  const mainCardVariants = {
    center: {
      x: '20%',
    //   y: 0,
      scale: 1,
      opacity: 1,
      zIndex: 30,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    incoming: (direction) => ({
      scale: 1,
      zIndex: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }),
    outgoing: (direction) => ({
      scale: 1,
      zIndex: 10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  };

  const sideCardVariants = {
    right: {
      x: '20%',
      y: 0,
      scale: 1,
      zIndex: 20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    left: {
      x: '20%',
      y: 0,
      scale: 1,
      zIndex: 20,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <div className="w-full  mx-auto px-24 py-8">
      <h1 className="text-5xl font-bold mb-12 text-black">What Past Attendees Say</h1>

      <div className="relative h-96 ">
        <div className="relative w-full h-full">
          <AnimatePresence initial={false} custom={direction}>
            {/* Active card */}
            <motion.div
              key={`card-${activeIndex}`}
              custom={direction}
              className={`absolute left-64 top-0 w-[400px] h-[400px] ${testimonials[activeIndex].background} ${testimonials[activeIndex].textColor} rounded-3xl p-8 flex flex-col justify-between shadow-xl`}
              variants={mainCardVariants}
              initial="incoming"
              animate="center"
              exit="outgoing"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">{testimonials[activeIndex].category}</h2>
                <p className="text-lg mb-8">"{testimonials[activeIndex].quote}"</p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">{testimonials[activeIndex].name}</p>
                  <p>{testimonials[activeIndex].title} {testimonials[activeIndex].company}</p>
                </div>
              </div>
            </motion.div>

            {/* Previous card */}
            <motion.div
              key={`prev-${prevIndex}`}
              className={` w-[400px] h-[400px] ${testimonials[prevIndex].background} ${testimonials[prevIndex].textColor} rounded-3xl p-6 flex flex-col justify-between shadow-lg`}
              variants={sideCardVariants}
              initial={direction < 0 ? "right" : "left"}
              animate="left"
              exit={{ x: '0%', opacity: 0, transition: { duration: 0.3 } }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">{testimonials[prevIndex].category}</h2>
                <p className="text-lg mb-8">"{testimonials[prevIndex].quote}"</p>
              </div>

              <div className="flex items-center">
                <div className="-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonials[prevIndex].image} alt={testimonials[prevIndex].name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">{testimonials[prevIndex].name}</p>
                  <p >{testimonials[prevIndex].title} {testimonials[prevIndex].company}</p>
                </div>
              </div>
            </motion.div>

            {/* Next card */}
            <motion.div
              key={`next-${nextIndex}`}
              className={`absolute top-0 right-[400px] w-[400px] h-[400px] ${testimonials[nextIndex].background} ${testimonials[nextIndex].textColor} rounded-3xl p-6 flex flex-col justify-between shadow-lg`}
              variants={sideCardVariants}
              initial={direction > 0 ? "left" : "right"}
              animate="right"
              exit={{ x: '100%', opacity: 0, transition: { duration: 0.3 } }}
            >
              <div>
                <h2 className="text-xl font-bold mb-4">{testimonials[nextIndex].category}</h2>
                <p className="text-base mb-6">"{testimonials[nextIndex].quote}"</p>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img src={testimonials[nextIndex].image} alt={testimonials[nextIndex].name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold">{testimonials[nextIndex].name}</p>
                  <p className="text-sm">{testimonials[nextIndex].title} {testimonials[nextIndex].company}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons with motion effects */}
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 z-40">
          <motion.button 
            onClick={prevSlide}
            className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Previous</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
        </div>
        
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 z-40">
          <motion.button 
            onClick={nextSlide}
            className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="sr-only">Next</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Progress indicator dots */}
        <div className="absolute bottom-[-400px] left-1/2 transform -translate-x-1/2 flex space-x-2 my-4">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                scale: index === currentIndex ? 1.2 : 1,
                opacity: index === currentIndex ? 1 : 0.7
              }}
              transition={{ duration: 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}