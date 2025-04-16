'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Inter } from "next/font/google";
  const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-inter',
    display: 'swap',
  });

const cardData = [
  {
    id: 1,
    title: "Web Development",
    description: "Frontend and backend development services",
    backText:
      "We specialize in React, Next.js, and Node.js to build fast, scalable web applications tailored to your business needs. Our expertise ensures seamless integration, optimized performance, and scalable architecture.",
    img: "/clients/tataji.webp",
  },
  {
    id: 2,
    title: "Mobile Apps",
    description: "Cross-platform mobile solutions",
    backText:
      "Using React Native and Flutter, we create beautiful native experiences for both iOS and Android. Our apps are fast, responsive, and user-friendly across devices.",
    img: "/clients/tataji.webp",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces",
    backText:
      "Our design process focuses on user-centered solutions. We use Figma and Adobe XD for high-fidelity prototypes that prioritize usability and aesthetics.",
    img: "/clients/tataji.webp",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure",
    backText:
      "We help migrate and optimize your applications on AWS, Azure, and Google Cloud for high availability and performance. Our cloud-native approach ensures security and efficiency.",
    img: "/clients/tataji.webp",
  },
  {
    id: 5,
    title: "Data Science",
    description: "Advanced analytics solutions",
    backText:
      "From machine learning models to data visualization dashboards, we transform raw data into actionable insights. Our tools empower smarter decisions and innovation.",
    img: "/clients/tataji.webp",
  },
];

const OrangeCardBanner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const duplicatedCards = [...cardData, ...cardData];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        ease: 'linear',
        duration: 40,
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  }, [controls]);

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () =>
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        ease: 'linear',
        duration: 40,
        repeat: Infinity,
        repeatType: 'loop',
      },
    });

  const getCardPosition = (index: number) => {
    const positions = ['translateY(40px)', 'translateY(-40px)'];
    return positions[index % positions.length];
  };

  return (
    <div className={`${inter.className} flex flex-col justify-between mb-20`}>
    {/* <div className="flex flex-row justify-around items-center mb-10">
        <h1 className='text-4xl font-medium text-gray-900'>Parvati and Sons Grows with <span className='text-blue-600 text-4xl'>you!</span></h1>
        <h3 className='text-2xl font-semibold'>15,000+ Businesses</h3>
      </div> */}
      <div
      className="relative w-full py-24 overflow-hidden bg-white"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
      <div className="flex sm:h-[300px] lg:h-[400px] items-center">
        <motion.div
          className="flex whitespace-nowrap items-end"
          animate={controls}
          style={{ height: '100%' }}
        >
          {duplicatedCards.map((card, index) => (
            <motion.div
              key={`${card.id}-${index}`}
              className={`inline-flex mx-6 ${isMobile ? 'w-72 h-72' : 'w-100 h-100'}`}
              style={{
                perspective: 1000,
                transform: getCardPosition(index),
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {isMobile ? (
                <div>
<div
                  className="relative w-full h-full rounded-2xl shadow-xl border border-gray-200 bg-cover bg-center flex flex-col justify-end p-6"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${card.img})`,
                  }}
                >
          
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm opacity-90">{card.description}</p>
                    
                  </div>
                  
                </div>
                  <p className="text-gray-950 font-medium text-base leading-relaxed whitespace-pre-line mb-10">
                        {card.backText}
                      </p>
                </div>
                
              ) : (
                <motion.div
                  className="relative w-full h-full transition-transform duration-300"
                  animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  onMouseEnter={() => setFlippedCard(index)}
                  onMouseLeave={() => setFlippedCard(null)}
                >
                  {/* Front Side */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-2xl shadow-2xl border border-gray-200 bg-cover p-8 flex flex-col justify-end"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${card.img})`,
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <h3 className="text-3xl font-bold text-white mb-4">{card.title}</h3>
                    <p className="text-white text-lg">{card.description}</p>
                  </div>

                  {/* Back Side */}
                  <div
                    className="absolute w-full h-full backface-hidden rounded-2xl shadow-2xl border border-gray-200 bg-white p-6 flex flex-col justify-between items-start transform rotate-y-180"
                    style={{
                      backfaceVisibility: 'hidden',
                    }}
                  >
                    <div className="overflow-y-auto max-h-full pr-1 custom-scroll">
                      <p className="text-gray-900 font-medium text-base leading-relaxed whitespace-pre-line">
                        {card.backText}
                      </p>
                    </div>
                    <p className='font-extralight'>
                      {card.title}
                      <br></br>
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
     
    </div>
    </div>
    
  );
};

export default OrangeCardBanner;
