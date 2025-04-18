"uce client"
import React from "react";
import WhatsAppInput from "@/components/ui/whatsendbox";
import Image from 'next/image';
import HighlightedText from "./ui/Underlinetxt";

import { Inter } from "next/font/google";
  const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-inter',
    display: 'swap',
  });


const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center px-6 md:px-16 py-12 gap-3">
      {/* Left Section */}
      <div className="text-center space-y-8 md:text-left max-w-3xl">
      <h1 className={`${inter.className} text-3xl md:text-5xl xl:text-6xl text-gray-600 font-bold leading-tight`}>
          Build <HighlightedText text="Websites and Apps"/> Without Boundaries
        </h1>
        <p className={`text-lg md:text-xl lg:text-2xl text-gray-900 ${inter.className} font-medium mt-4`}>
          Attain your Digital Vision and Rise above the Digital Noise to Show Up and Stand Out
        </p>
        <div className="mt-6 flex flex-col md:flex-col items-center md:items-start space-y-2 md:space-y-0 md:space-x-3 text-gray-800">
          <span className="flex items-end">
            <span className={`${inter.className} text-5xl font-bold text-black`}>30% </span>
            <span className={`font-bold text-gray-700 text-2xl ml-1`}>instant off</span>
          </span>
          <span className="text-lg text-gray-600">+1 Month Google Ad</span>
        </div>
        <WhatsAppInput/>
      </div>

      {/* Right Section - Image Placeholder */}
      <div className="mt-6 w-71 md:w-160 h-71 md:h-105 bg-gray-200 rounded-lg justify-center items-center overflow-hidden hidden xl:block">
      <div className="relative w-full h-full">
  <Image
    src="https://ik.imagekit.io/dglrnyhqc/tr:w-1200,f-webp/media/index-banner.png"
    alt="Preview"
    fill
    className="object-cover rounded-lg"
  />
</div>
      </div>
    </div>
  );
};

export default Hero;
