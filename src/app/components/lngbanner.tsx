'use client';
import { motion } from 'framer-motion';

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
    <div className="overflow-hidden whitespace-nowrap bg-orange-200 py-3 w-full">
      <motion.div
        className="flex gap-10 text-lg font-medium text-gray-800"
        variants={scrollVariants}
        animate="animate"
      >
        {[...languages, ...languages].map((lang, i) => (
          <span key={i} className="px-2 text-nowrap hover:text-amber-600 transition-colors">
            <span className="mx-2 text-black">•</span> {lang} 
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingTape;
