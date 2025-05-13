'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const events = [
  {
    img: '/img1.jpeg',
    tag: 'Technology',
    title: 'Srijan: The Inaugural Session',
    author: 'Tracey Wilson',
    date: 'August 30, 2022',
    avatar: '/avatar1.png',
    link: '/events/srijan-inaugural-session',
  },
  {
    img: '/img2.jpeg',
    tag: 'Technology',
    title: 'Igniting Ideas into Impact: From Ideation to Product Development',
    author: 'Jason Francisco',
    date: 'August 20, 2022',
    avatar: '/avatar2.png',
    link: '/events/ideation-to-product',
  },
  {
    img: '/img3.jpeg',
    tag: 'Technology',
    title: 'Vision 2040: Mapping the Next-Gen Startup Landscape',
    author: 'Elizabeth Slavin',
    date: 'August 30, 2022',
    avatar: '/avatar3.png',
    link: '/events/vision-2040-startup-landscape',
  },
  {
    img: '/img4.jpeg',
    tag: 'Technology',
    title: 'Funding Unlocked: The Capital Catalyst',
    author: 'Ernie Smith',
    date: 'August 30, 2022',
    avatar: '/avatar4.png',
    link: '/events/funding-unlocked',
  },
  {
    img: '/img5.jpeg',
    tag: 'Technology',
    title: 'Bridging the Gap: From Policy Interventions to Technological Advancements',
    author: 'Eric Smith',
    date: 'August 30, 2022',
    avatar: '/avatar5.png',
    link: '/events/bridging-policy-gap',
  },
  {
    img: '/img6.jpeg',
    tag: 'Technology',
    title: 'The Growth Engine: Scaling Beyond Limits',
    author: 'Tracey Wilson',
    date: 'August 20, 2022',
    avatar: '/avatar1.png',
    link: '/events/growth-engine-scaling',
  },
  {
    img: '/img7.jpeg',
    tag: 'Technology',
    title: 'Future of Work: AI-Powered Workspaces',
    author: 'Jason Francisco',
    date: 'August 20, 2022',
    avatar: '/avatar2.png',
    link: '/events/ai-workspaces',
  },
  {
    img: '/img8.jpeg',
    tag: 'Technology',
    title: 'Remote Innovation: Building Islands of Creativity',
    author: 'Elizabeth Slavin',
    date: 'August 30, 2022',
    avatar: '/avatar3.png',
    link: '/events/remote-innovation',
  },
  {
    img: '/img9.jpeg',
    tag: 'Technology',
    title: 'Next-Gen Gaming: Beyond the Console',
    author: 'Ernie Smith',
    date: 'August 20, 2022',
    avatar: '/avatar4.png',
    link: '/events/next-gen-gaming',
  },
];

interface Event {
  img: string;
  tag: string;
  title: string;
  author: string;
  date: string;
  avatar: string;
  link: string;
}

const EventCard = ({ event, index }: { event: Event; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <Link href={event.link} className="block h-full">
      <motion.div
        ref={cardRef}
        className="bg-white rounded-xl overflow-hidden border p-3 sm:p-4 h-full cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 % 0.5,
          ease: "easeOut"
        }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
        >
          <Image
            src={event.img}
            alt={event.title}
            width={400}
            height={250}
            className="w-full h-48 sm:h-64 object-cover rounded-lg"
          />
        </motion.div>
        <div className="p-2 sm:p-4">
          <div className='h-full justify-between'>
            <motion.span
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium inline-block"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#dbeafe",
                transition: { duration: 0.2 }
              }}
            >
              {event.tag}
            </motion.span>

            <motion.h3
              className="text-base sm:text-lg font-semibold mt-2 line-clamp-2"
              whileHover={{ color: "#3b82f6", transition: { duration: 0.2 } }}
            >
              {event.title}
            </motion.h3>
          </div>
          <motion.div
            className="flex items-center mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Image
              src={event.avatar}
              alt={event.author}
              width={24}
              height={24}
              className="rounded-full mr-2 object-fill w-5 h-5 sm:w-6 sm:h-6"
            />
            <span>{event.author}</span>
            <span className="mx-2">•</span>
            <span>{event.date}</span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function EventHighlights() {
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });
    
    const gridRef = useRef(null);
    const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });
    
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    };

    return (
        <section className="w-full px-4 md:px-24 py-16">
            <div 
              ref={headerRef}
              className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4"
            >
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-gradient-to-r from-fuchsia-500 to-cyan-400 py-2 sm:py-3 px-4 sm:px-6 rounded-full inline-block"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={isHeaderInView ? 
                      { opacity: 1, y: 0, scale: 1 } : 
                      { opacity: 0, y: 20, scale: 0.9 }
                    }
                    transition={{ duration: 0.6 }}
                >
                    Event Highlights
                </motion.h2>
                <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-600"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isHeaderInView ? 
                      { opacity: 1, scale: 1, rotate: 0 } : 
                      { opacity: 0, scale: 0 }
                    }
                    transition={{ 
                      duration: 0.6,
                      delay: 0.3
                    }}
                    whileInView={{ 
                      rotate: 360,
                      transition: { duration: 8, repeat: Infinity, ease: "linear" }
                    }}
                />
            </div>

            <motion.div
                ref={gridRef}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 rounded-md p-2 sm:p-4"
                variants={containerVariants}
                initial="hidden"
                animate={isGridInView ? "visible" : "hidden"}
            >
                {events.map((event, index) => (
                    <EventCard key={index} event={event} index={index} />
                ))}
            </motion.div>
        </section>
    );
}