'use client';
import { motion } from 'framer-motion';
import { Inter } from "next/font/google";
  const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-inter',
    display: 'swap',
  });
const languages = [
  "JavaScript", "TypeScript", "Python", "C++", "Java", "Kotlin", "Go", "Rust",
  "Swift", "PHP", "Ruby", "Dart", "HTML", "CSS", "SQL", "Shell", "R", "Perl"
];

const ScrollingTape = () => {
  const scrollVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 25,
          ease: 'linear'
        }
      }
    }
  };

  return (
    <div className={`${inter.className} overflow-hidden whitespace-nowrap bg-blue-900 w-full py-1 sm:py-2 md:py-2`}>
      <motion.div
        className="flex gap-6 sm:gap-10 text-sm sm:text-base md:text-lg font-medium text-blue-100"
        variants={scrollVariants}
        animate="animate"
      >
        {[...languages, ...languages].map((lang, i) => (
          <span
            key={i}
            className="px-2 text-nowrap hover:text-blue-300 transition-colors duration-200"
          >
            <span className="mx-2 text-blue-400">•</span> {lang}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingTape;