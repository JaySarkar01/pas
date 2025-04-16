import React from "react";
import { Inter } from "next/font/google";
  const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-inter',
    display: 'swap',
  });

const Combanner = () => {
  return (
    <div className={`${inter.className} flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto border-2 border-gray-200 border-dashed rounded-2xl p-8 gap-8 bg-white shadow-sm`}>
      
      {/* Left Section */}
      <div className="md:w-2/3 border-r-0 md:border-r-2 md:border-gray-200 md:border-dashed pr-0 md:pr-8 space-y-6">
        <h1 className="text-3xl md:text-4xl text-gray-800 font-semibold tracking-wide leading-snug">
          Build websites faster and 10x better than your competitors with{" "}
          <span className="text-blue-950 font-bold">Parvati and Sons</span>
        </h1>

        <p className="text-gray-500 leading-relaxed text-base">
          With the best-in-class components and templates, stand out from the
          crowd and get more attention to your website. Trusted by founders and
          entrepreneurs from all over the world.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-xl hover:bg-blue-500 transition-all font-medium shadow-sm">
            Start now
          </button>
          <button className="bg-white text-blue-800 border-2 border-blue-200 py-3 px-8 rounded-xl hover:border-blue-300 transition-all font-medium">
            Contact us
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 flex flex-col justify-between h-full space-y-6">
        <p className="text-black leading-relaxed text-base tracking-normal">
          The work that Manu did laid the foundation of online education that we
          provide today. The website he built for us is used by thousands of
          students every day. He took the requirements and built the ...
        </p>
        <div className="text-right mt-auto">
          <p className="text-blue-900 font-semibold">Neeraj Pathak</p>
          <p className="text-gray-500 text-sm">Chairperson at Golden Bells Academy</p>
        </div>
      </div>
    </div>
  );
};

export default Combanner;
