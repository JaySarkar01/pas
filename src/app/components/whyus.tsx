'use client';
import { useAnimation, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import TestimonialSlider from "@/app/components/swapin"

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

const partners = [
  { name: 'G2', logo: '/Partners/1.webp' },
  { name: 'Trustpilot', logo: '/Partners/2.webp' },
  { name: 'Capterra', logo: '/Partners/3.webp' },
  { name: 'Microsoft', logo: '/Partners/4.webp' },
  { name: 'App Store', logo: '/Partners/5.png' },
  { name: 'Google Play', logo: '/Partners/6.webp' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10
    }
  }
};

const cardHoverVariants = {
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10
    }
  }
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div 
    className="h-full p-8 bg-gradient-to-br from-white via-orange-100 to-orange-300 rounded-2xl shadow-lg border border-orange-200 flex flex-col"
    whileHover="hover"
    variants={cardHoverVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="flex items-center justify-between mb-6">
      <span className="text-5xl font-sans bg-gradient-to-l from-gray-600 to-gray-950 bg-clip-text text-transparent">
        {testimonial.metric}
      </span>
      <div className="w-18 h-18 rounded-lg bg-gray-50 p-2 flex items-center justify-center">
        <img 
          src={testimonial.logo} 
          alt={testimonial.company} 
          className="max-h-17 max-w-[4.0rem] object-contain rounded-lg"
        />
      </div>
    </div>
    
    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{testimonial.title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{testimonial.description}</p>
    
    <div className="flex items-center">
      <span className="text-sm font-medium text-gray-700">{testimonial.company}</span>
    </div>
  </motion.div>
);

const PartnerLogo = ({ partner }: { partner: typeof partners[0] }) => (
  <motion.div 
    className="p-4 bg-gray-50 rounded-xl flex items-center justify-center h-20"
    variants={itemVariants}
    whileHover={{ 
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    }}
  >
    <img 
      src={partner.logo} 
      alt={partner.name} 
      className="max-h-8 object-contain grayscale hover:grayscale-0 transition-all duration-300"
    />
  </motion.div>
);

export default function ImpactSection() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const controls = useAnimation();
  const [activeIndex] = useState(0);

  useEffect(() => {
    controls.start({
      x: `-${activeIndex * 100}%`,
      transition: { type: 'spring', stiffness: 300, damping: 30 }
    });
  }, [activeIndex, controls]);

  return (
    <motion.section 
      className="py-20 px-6 sm:px-10 bg-gradient-to-b from-gray-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl lg:max-w-[90vw] xl:max-w-[76vw] mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Business
          </h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of companies achieving real results with our platform
          </motion.p>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {!isMobile ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard key={i} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div><TestimonialSlider/></div>
          )}
        </motion.div>

        {/* Partners */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h3 
            className="text-center text-lg font-medium text-gray-500 mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Trusted by industry leaders
          </motion.h3>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partners.map((partner, i) => (
              <PartnerLogo key={i} partner={partner} />
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button 
            className="px-8 py-4 bg-amber-100 hover:bg-amber-200 font-medium rounded-xl hover:opacity-90 transition-opacity shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Free Trial
          </motion.button>
          <motion.button 
            className="px-8 py-4 bg-white text-gray-800 font-medium rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Demo
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}