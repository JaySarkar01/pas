import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const cardData = [
  {
    id: 1,
    title: "Web Development",
    frontBg: "bg-white",
    backBg: "bg-orange-50",
    description: "Frontend and backend development services",
    backText: "We specialize in React, Next.js, and Node.js to build fast, scalable web applications tailored to your business needs.",
    icon: "💻",
    accentColor: "bg-orange-400"
  },
  {
    id: 2,
    title: "Mobile Apps",
    frontBg: "bg-white",
    backBg: "bg-orange-50",
    description: "Cross-platform mobile solutions",
    backText: "Using React Native and Flutter, we create beautiful native experiences for both iOS and Android platforms.",
    icon: "📱",
    accentColor: "bg-orange-400"
  },
  {
    id: 3,
    title: "UI/UX Design",
    frontBg: "bg-white",
    backBg: "bg-orange-50",
    description: "Beautiful and intuitive interfaces",
    backText: "Our design process focuses on user-centered solutions with Figma and Adobe XD for seamless prototyping.",
    icon: "🎨",
    accentColor: "bg-orange-400"
  },
  {
    id: 4,
    title: "Cloud Solutions",
    frontBg: "bg-white",
    backBg: "bg-orange-50",
    description: "Scalable cloud infrastructure",
    backText: "We help migrate and optimize your applications on AWS, Azure, and Google Cloud for maximum performance.",
    icon: "☁️",
    accentColor: "bg-orange-400"
  },
  {
    id: 5,
    title: "Data Science",
    frontBg: "bg-white",
    backBg: "bg-orange-50",
    description: "Advanced analytics solutions",
    backText: "From machine learning models to data visualization dashboards, we turn your data into actionable insights.",
    icon: "📊",
    accentColor: "bg-orange-400"
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
          className="flex whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
        >
          {duplicatedCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className={`inline-flex mx-4 ${isMobile ? 'w-64 h-80' : 'w-72 h-96'} perspective-1000`}
            >
              {isMobile ? (
                <div className={`relative w-full h-full rounded-xl shadow-md ${card.frontBg} border border-gray-200`}>
                  <div className="h-full flex flex-col p-6">
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <span className="text-5xl mb-6">{card.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">{card.title}</h3>
                      <p className="text-gray-600 text-center">{card.description}</p>
                    </div>
                    <div className={`h-1 ${card.accentColor} my-4`}></div>
                    <p className="text-gray-700 text-sm">{card.backText}</p>
                  </div>
                </div>
              ) : (
                <div
                  className="relative w-full h-full"
                  onMouseEnter={() => setFlippedCard(index)}
                  onMouseLeave={() => setFlippedCard(null)}
                >
                  {/* Front of Card */}
                  <motion.div
                    className={`absolute w-full h-full rounded-xl shadow-md ${card.frontBg} border border-gray-200 overflow-hidden backface-hidden`}
                    animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="h-full flex flex-col p-8">
                      <div className="flex-1 flex flex-col items-center justify-center">
                        <span className="text-6xl mb-8">{card.icon}</span>
                        <h3 className="text-3xl font-bold text-gray-800 text-center mb-3">{card.title}</h3>
                        <p className="text-gray-600 text-lg text-center">{card.description}</p>
                      </div>
                      <div className={`h-1.5 ${card.accentColor} mt-6`}></div>
                    </div>
                  </motion.div>

                  {/* Back of Card */}
                  <motion.div
                    className={`absolute w-full h-full rounded-xl shadow-md ${card.backBg} border border-gray-200 rotate-y-180 overflow-hidden backface-hidden`}
                    animate={{ rotateY: flippedCard === index ? 0 : -180 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="h-full flex items-center justify-center p-8">
                      <p className="text-gray-700 text-center text-lg">{card.backText}</p>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
    </div>
  );
};

export default OrangeCardBanner;
