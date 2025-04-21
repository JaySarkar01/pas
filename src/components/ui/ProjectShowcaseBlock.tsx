"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProjectShowcaseBlock() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [isColored, setIsColored] = useState("ffffff");
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = ["UI/UX", "DEVELOPMENT", "SEO", "HOSTING"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full py-12 lg:py-5"
      style={{ backgroundColor: isColored }}
    >
      <div
        className="w-full transition-colors duration-300 ease-in-out py-12 lg:py-5 flex items-center justify-center"
        onMouseEnter={() => setIsColored("#e6f3f7")}
        onMouseLeave={() => setIsColored("#ffffff")}
      >
        <div className="max-w-7xl bg-[#f5fcff]  p-14 hover:shadow-2xl transition-shadow duration-300 ease-in-out ">
          <div className="flex lg:flex-row gap-8 lg:gap-12 items-center flex-col">
            {/* Right Content - Screenshots */}
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Categories */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {categories.map((category) => (
                  <motion.span
                    key={category}
                    variants={itemVariants} // << this line is the missing piece
                    className="px-4 py-1.5 text-black bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.span>
                ))}
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: "#1e1e5a" }}
                variants={itemVariants}
              >
                Goodwill Industries of Dallas Inc.
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                Goodwill empowers people with disabilities and other barriers
                via job training and employment at Goodwill and throughout the
                community.
              </motion.p>

              {/* CTA */}
              <motion.a
                href="#"
                className="inline-flex items-center font-semibold group"
                style={{ color: "#1e1e5a" }}
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                See Case Study{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 relative"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={imageContainerVariants}
            >
              <div className="relative w-full aspect-[4/3]">
                {/* Main Screenshot */}

                <motion.div
                  className="absolute inset-0 z-10"
                  variants={imageVariants}
                >
                  <Image
                    src="https://agencypartner.com/wp-content/uploads/2021/09/spa-fea.png"
                    alt="Goodwill website main page"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg "
                  />
                </motion.div>

                {/* Decorative Dots */}
                <motion.div
                  className="absolute top-[5%] right-[5%] grid grid-cols-6 gap-1.5"
                  variants={imageVariants}
                >
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#93c5fd" }}
                    ></div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="w-full transition-colors duration-300 ease-in-out py-12 lg:py-5 flex items-center justify-center"
        onMouseEnter={() => setIsColored("#e6eff7")}
        onMouseLeave={() => setIsColored("ffffff")}
      >
        <div className="max-w-7xl bg-[#f5f9ff] p-14 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <motion.div
              className="w-full lg:w-1/2 relative"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={imageContainerVariants}
            >
              <div className="relative w-full aspect-[4/3]">
                {/* Main Screenshot */}
                <motion.div
                  className="absolute inset-0 z-10"
                  variants={imageVariants}
                >
                  <Image
                    src="https://agencypartner.com/wp-content/uploads/2021/11/Mask-Group-75.png"
                    alt="Goodwill website main page"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg "
                  />
                </motion.div>

                {/* Decorative Dots */}
                <motion.div
                  className="absolute top-[5%] right-[5%] grid grid-cols-6 gap-1.5"
                  variants={imageVariants}
                >
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#93c5fd" }}
                    ></div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Categories */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {categories.map((category) => (
                  <motion.span
                    key={category}
                    variants={itemVariants} // << this line is the missing piece
                    className="px-4 py-1.5 text-black bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.span>
                ))}
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: "#1e1e5a" }}
                variants={itemVariants}
              >
                Goodwill Industries of Dallas Inc.
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                Goodwill empowers people with disabilities and other barriers
                via job training and employment at Goodwill and throughout the
                community.
              </motion.p>

              {/* CTA */}
              <motion.a
                href="#"
                className="inline-flex items-center font-semibold group"
                style={{ color: "#1e1e5a" }}
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                See Case Study{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      <div
        className="w-full transition-colors duration-300 ease-in-out py-12 lg:py-5 flex items-center justify-center"
        onMouseEnter={() => setIsColored("#e8e7f5")}
        onMouseLeave={() => setIsColored("ffffff")}
      >
        <div className="max-w-7xl bg-[#f6f5ff] p-14 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {/* Categories */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
              >
                {categories.map((category) => (
                  <motion.span
                    key={category}
                    variants={itemVariants} // << this line is the missing piece
                    className="px-4 py-1.5 text-black bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.span>
                ))}
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: "#1e1e5a" }}
                variants={itemVariants}
              >
                Goodwill Industries of Dallas Inc.
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                Goodwill empowers people with disabilities and other barriers
                via job training and employment at Goodwill and throughout the
                community.
              </motion.p>

              {/* CTA */}
              <motion.a
                href="#"
                className="inline-flex items-center font-semibold group"
                style={{ color: "#1e1e5a" }}
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                See Case Study{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>

            {/* Right Content - Screenshots */}
            <motion.div
              className="w-full lg:w-1/2 relative"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={imageContainerVariants}
            >
              <div className="relative w-full aspect-[4/3]">
                {/* Main Screenshot */}
                <motion.div
                  className="absolute inset-0 z-10"
                  variants={imageVariants}
                >
                  <Image
                    src="https://agencypartner.com/wp-content/uploads/2021/11/MicrosoftTeams-image-6.png"
                    alt="Goodwill website main page"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg "
                  />
                </motion.div>

                {/* Decorative Dots */}
                <motion.div
                  className="absolute top-[5%] right-[5%] grid grid-cols-6 gap-1.5"
                  variants={imageVariants}
                >
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#93c5fd" }}
                    ></div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
