"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
  const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-inter',
    display: 'swap',
  });


export default function BrandHeroSection() {

return (
    <section  className={`${inter.className} w-full px-6 md:px-12 py-12 md:py-0 mb-16 bg-white text-gray-900`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Advertising <span className="text-blue-600">companies</span>
          </h1>

          <div  className="space-y-6">
            <p className="text-xl font-semibold text-blue-500">
              #1 software for TATA
            </p>
            <p className="text-gray-700 text-lg md:text-xl max-w-lg">
              <span className="font-semibold text-gray-900">Manage your billboard assets</span>, advertising campaigns, CRM
              pipeline, sales, and analytics. All from a single platform.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className=" bg-blue-600 hover:shadow-xl hover:shadow-blue-100 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg">
                Start now
              </button>
              <button className="hover:shadow-xl bg-white border border-blue-200 hover:border-blue-300 text-blue-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow">
                Meet an advisor
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div  className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
          <Image
            src="/clients/tataji.webp"
            alt="Billboards in Times Square"
            fill
            className="rounded-xl object-cover object-center shadow-xl"
            priority
          />
          <div className="absolute -bottom-4 -right-4 bg-blue-600 w-24 h-24 rounded-lg z-0 hidden md:block"></div>
        </div>
      </div>

      {/* Testimonial */}
      <div  className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl max-w-4xl mx-auto shadow-sm border border-blue-100">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-3xl">❝</span>
            </div>
          </div>
          <div>
            <p className="text-lg md:text-xl text-gray-800 font-medium italic">
            &apos;After signing up with PAS, we started establishing systems that cope with the latest trends and helped us scale our operations 3x faster.&apos;
            </p>
            <div className="mt-4">
              <p className="font-semibold text-gray-900">Ratan Tata</p>
              <p className="text-sm text-gray-600">CEO, TATA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
