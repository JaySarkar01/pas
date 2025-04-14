'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    id: 1,
    title: "Web Development",
    description: "Frontend and backend development services",
    backText: "We specialize in React, Next.js, and Node.js to build fast, scalable web applications tailored to your business needs.",
    img: "/images/web.jpg", // update with real image paths
  },
  {
    id: 2,
    title: "Mobile Apps",
    description: "Cross-platform mobile solutions",
    backText: "Using React Native and Flutter, we create beautiful native experiences for both iOS and Android platforms.",
    img: "/images/mobile.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Beautiful and intuitive interfaces",
    backText: "Our design process focuses on user-centered solutions with Figma and Adobe XD for seamless prototyping.",
    img: "/images/design.jpg",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure",
    backText: "We help migrate and optimize your applications on AWS, Azure, and Google Cloud for maximum performance.",
    img: "/images/cloud.jpg",
  },
  {
    id: 5,
    title: "Data Science",
    description: "Advanced analytics solutions",
    backText: "From machine learning models to data visualization dashboards, we turn your data into actionable insights.",
    img: "/images/data.jpg",
  },
];

const OrangeCardBanner = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const duplicatedCards = [...cardData, ...cardData];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-16 bg-gray-50">
      <div className="flex">
        <motion.div
          className="flex whitespace-nowrap group-hover:pause"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
        >
          {duplicatedCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className={`inline-flex mx-4 ${isMobile ? 'w-64 h-80' : 'w-72 h-96'}`}
              style={{ perspective: 1000 }}
            >
              {isMobile ? (
                <div
                  className="relative w-full h-full rounded-xl shadow-md border border-gray-200 bg-cover bg-center flex flex-col justify-between p-6"
                  style={{ backgroundImage: `url(${card.img})` }}
                >
                  <div className="bg-white/80 p-3 rounded">
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-center">{card.description}</p>
                  </div>
                  <p className="text-sm text-gray-800 bg-white/80 p-2 rounded mt-3">{card.backText}</p>
                </div>
              ) : (
                <motion.div
                  className="relative w-full h-full transition-transform duration-500"
                  animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  onMouseEnter={() => setFlippedCard(index)}
                  onMouseLeave={() => setFlippedCard(null)}
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full backface-hidden rounded-xl shadow-md border border-gray-200 bg-white p-6">
                    <div className="h-full flex flex-col items-center justify-center">
                      <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">{card.title}</h3>
                      <p className="text-gray-600 text-lg text-center">{card.description}</p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full rotate-y-180 backface-hidden rounded-xl shadow-md border border-gray-200 bg-white p-6">
                    <div className="h-full flex flex-col items-center justify-center">
                      <p className="text-gray-700 text-center text-lg">{card.backText}</p>
                    
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient edges */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
    </div>
  );
};

export default OrangeCardBanner;
