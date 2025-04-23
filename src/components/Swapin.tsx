import { useState } from 'react';
import { Inter } from "next/font/google";
import Image from "next/image";
  const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-inter',
    display: 'swap',
  });

const testimonials = [
  { 
    metric: '2x', 
    title: 'Revenue Growth', 
    description: 'UK-based ACF Events doubled revenue after implementing our solution',
    company: 'ACF EVENTS',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsfBAgTdR9yBtGdz404amtV_ejE4FyOGHrg&s'
  },
  { 
    metric: '5 Hours', 
    title: 'Weekly Savings', 
    description: 'Lisbon Santra Tours saves 5 hours weekly on operations',
    company: 'LISBON SANTRA TOURS',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM7ViWKDu371o9FnxoxSoIYcWf9SMnsmB4A&s'
  },
  { 
    metric: '35%', 
    title: 'Lead Conversion', 
    description: 'Cystercare increased lead conversion by 35% with our platform',
    company: 'CysterCare',
    logo: 'https://cystercare.com/wp-content/uploads/2023/01/Logo.png'
  },
  { 
    metric: '20%', 
    title: 'Sales Increase', 
    description: 'Eden Ridge boosted sales by 20% using our tools',
    company: 'EDENRIDGE',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_d_Bl0xBroCEv0rPzzXj_OZltQZ2ApE9jg&s'
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`relative max-w-3xl mx-auto p-4 ${inter.className}`}>
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-300 ease-in-out">
        <div className="p-8 py-5 bg-gradient-to-br from-white via-blue-100 to-blue-300 rounded-2xl shadow-lg border border-purple-200 flex flex-col">


            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <span className="text-5xl font-sans bg-gradient-to-l from-gray-600 to-gray-950 bg-clip-text text-transparent">{testimonials[currentIndex].metric}</span>
                <h3 className="text-xl font-semibold mt-2">{testimonials[currentIndex].title}</h3>
                <p className="text-gray-600 mt-2">{testimonials[currentIndex].description}</p>
              </div>
              <div className="flex flex-row items-end justify-between">
                <div className="text-sm font-medium text-gray-500">{testimonials[currentIndex].company}</div>
                <div className="w-19 h-19 rounded-lg bg-gray-50 p-2 mt-2 flex items-center justify-center">
                  <Image 
                    src={testimonials[currentIndex].logo} 
                    alt={testimonials[currentIndex].company}
                    width={50}
                    height={50}
                    className="max-h-18 max-w-[4.0rem] object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-end mt-8 gap-4">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}