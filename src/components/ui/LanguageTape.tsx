'use client';
import { motion } from 'framer-motion';
const languages = [
  "JavaScript", "TypeScript", "Python", "C++", "Java", "Kotlin",
  "Dart", "HTML", "CSS", "SQL", "Shell"
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
    <div className={`overflow-hidden whitespace-nowrap bg-black w-full py-1 sm:py-2 md:py-2`}>
      <motion.div
        className="flex gap-6 sm:gap-10 text-sm sm:text-base md:text-lg font-medium text-white"
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