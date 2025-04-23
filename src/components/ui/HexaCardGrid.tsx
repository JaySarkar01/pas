import React from 'react';
import Image from 'next/image';

interface CardProps {
  card: {
    title: string;
    image: string;
    iconPath: string;
  };
  highlighted?: boolean;
  faded?: boolean;
}

const cards = [
  {
    title: 'Technical Guide',
    image: "https://parvatiandsons.b-cdn.net/static/assets/images/website/certifications/cl.png",
    iconPath: 'M5 11l7-7 7 7M5 19l7-7 7 7',
  },
  {
    title: 'Troubleshooting Guide',
    image: 'https://parvatiandsons.b-cdn.net/static/assets/images/website/certifications/des.png',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Release Notes',
    image: 'https://parvatiandsons.b-cdn.net/static/assets/images/website/certifications/des.png',
    iconPath: 'M17 9V7a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0H7m10 0v10a2 2 0 01-2 2H9a2 2 0 01-2-2V9h10z',
  },
  {
    title: 'Onboarding Checklist',
    image: 'https://parvatiandsons.b-cdn.net/static/assets/images/website/certifications/app.png',
    iconPath: 'M9 12l2 2l4 -4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },    
  {
    title: 'Product Update Communication (beta)',
    image: 'https://parvatiandsons.b-cdn.net/static/assets/images/website/certifications/app.png',
    iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
  {
    title: 'Help Desk Article',
    image: 'https://parvatiandsons.b-cdn.net/static/assets/images/website/certifications/msme.png',
    iconPath: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
  },
];

const Card = ({ card, highlighted = false, faded = false }: CardProps) => (
  <div
    className={`relative p-4 m-2 border border-gray-200/70 rounded-3xl transition-all duration-500 text-left group h-full w-full flex flex-col overflow-hidden
      ${faded ? 'opacity-80 hover:opacity-100' : 'opacity-100'}
      ${
        highlighted 
          ? 'shadow-2xl scale-[1.03] border-emerald-400/30 bg-gradient-to-br from-emerald-50/50 to-white backdrop-blur-sm'
          : 'hover:shadow-lg hover:border-gray-300/80'
      }`}
    style={{ aspectRatio: '1/1', maxWidth: '320px' }}
  >
    {/* Animated background gradient */}
    {highlighted && (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-4 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_120deg,rgba(110,231,183,0.1)_120deg,transparent_240deg)] opacity-70 group-hover:opacity-100 animate-spin-slow"></div>
      </div>
    )}
    
    <div className="relative flex flex-col h-full z-10">
      {/* Image Container with glass morphism effect */}
      <div className={`relative w-full h-35 rounded-xl overflow-hidden mb-5 flex items-center justify-center transition-all duration-500
        ${highlighted ? 'bg-white/80 backdrop-blur-sm' : 'bg-gray-100/80 backdrop-blur-xs'}`}>
        <Image
          src={card.image}
          alt={card.title}
          width={160}
          height={120}
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
          priority={highlighted}
        />
      </div>
      
    
      
      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h2 className={`font-bold text-sm text-center transition-all duration-500
          ${highlighted ? 'text-gray-900' : 'text-gray-800 group-hover:text-gray-900'}`}>
          {card.title}
        </h2>
        {highlighted && (
          <div className="mt-3 pt-3 border-t border-emerald-200/50">
            <p className="text-sm text-center text-gray-600">New updates available</p>
          </div>
        )}
      </div>
    </div>
  </div>
);

const CardGridComponent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-7xl mx-auto px-4 sm:px-0">
      {/* First Column */}
      <div className="flex flex-col space-y-6 items-center sm:items-end">
        {cards.slice(0, 2).map((card, index) => (
          <Card key={`first-${index}`} card={card} faded />
        ))}
      </div>

      {/* Second Column with staggered animation */}
      <div className="flex flex-col space-y-6 sm:space-y-8 items-center mt-0 sm:mt-8">
        {cards.slice(2, 4).map((card, index) => (
          <div 
            key={`middle-${index}`}
            className={`transition-all duration-700 ${index === 0 ? 'sm:-translate-y-4' : 'sm:translate-y-4'}`}
          >
            <Card
              card={card}
              highlighted={index === 1}
              faded={index !== 1}
            />
          </div>
        ))}
      </div>

      {/* Third Column */}
      <div className="flex flex-col space-y-6 items-center sm:items-start ml-4">
        {cards.slice(4, 6).map((card, index) => (
          <Card key={`last-${index}`} card={card} faded />
        ))}
      </div>
    </div>
  );
};

export default CardGridComponent;