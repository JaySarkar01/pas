import Link from "next/link"
import { ArrowRight} from "lucide-react"
import React from "react"
import CardGridComponent from "./HexaCardGrid";

export default function HeroBannerCard() {
  return (
    <div className="py-10 bg-white">
      {/* Hero Section */}
      <main className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column - Hero Text */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 sm:mb-6">
              Never write <br />
              from <span className="text-blue-500">scratch</span> <br />
              again.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Kickstart your next great <span className="font-medium">Academic Article</span> <br />
              with Moonbeam: your long-form writing AI assistant
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/start"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg transition-colors text-base sm:text-lg"
              >
                Start writing <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Image or Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <CardGridComponent/>
          </div>
        </div>
      </main>
    </div>
  );
}
