// components/FlipCardBanner.tsx
import React from "react";

const cardData = [
  {
    id: 1,
    title: "Web Development",
    bgImage: "url('/web-dev-bg.jpg')",
    description: "Frontend and backend development services",
    backText: "We build responsive, modern web applications using React, Next.js, and Node.js."
  },
  {
    id: 2,
    title: "Mobile Apps",
    bgImage: "url('/mobile-bg.jpg')",
    description: "Cross-platform mobile solutions",
    backText: "React Native and Flutter development for iOS and Android platforms."
  },
  {
    id: 3,
    title: "UI/UX Design",
    bgImage: "url('/design-bg.jpg')",
    description: "Beautiful and intuitive interfaces",
    backText: "User-centered design with Figma, Adobe XD, and prototyping tools."
  },
  {
    id: 4,
    title: "Cloud Solutions",
    bgImage: "url('/cloud-bg.jpg')",
    description: "Scalable cloud infrastructure",
    backText: "AWS, Azure, and Google Cloud deployment and optimization services."
  },
  {
    id: 5,
    title: "Data Science",
    bgImage: "url('/data-bg.jpg')",
    description: "Advanced analytics solutions",
    backText: "Machine learning, data visualization, and predictive modeling."
  },
];

const FlipCardBanner = () => {
  // Duplicate the cards for seamless infinite scrolling
  const duplicatedCards = [...cardData, ...cardData];

  return (
    <div className="relative w-full overflow-hidden py-12 bg-gray-50 dark:bg-gray-900">
      <div className="flex">
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          {duplicatedCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="inline-flex mx-4 h-64 w-64 perspective-1000"
            >
              {/* Flip Card Container */}
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
                {/* Front of Card */}
                <div
                  className="absolute w-full h-full backface-hidden rounded-xl shadow-lg bg-cover bg-center flex items-end p-4"
                  style={{ backgroundImage: card.bgImage }}
                >
                  <div className="bg-black bg-opacity-50 text-white p-4 rounded-b-xl w-full">
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className="text-sm">{card.description}</p>
                  </div>
                </div>
                
                {/* Back of Card */}
                <div className="absolute w-full h-full backface-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 rotate-y-180 p-6 flex items-center justify-center">
                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    {card.backText}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipCardBanner;