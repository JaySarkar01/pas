"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Hero from "@/components/Hero";
import ClientResultsDisplay from "@/components/ClientResultsDisplay";
import FlipCardBanner from "@/components/ScrollingFlipCards";
import ScrollingTape from "@/components/ui/LanguageTape";
import WhyChooseUsSection from "@/components/ui/WhyChooseUsSection";
import TextHoverEffect from "@/components/ui/text-hover-effect";
import BrandHeroSection from "@/components/BrandEndorsementSection";
import CareerHero from "../components/CareerHero";
import ProjectShowSection from "@/components/ProjectShowSection";
import ReviewSection from "@/components/ui/ReviewSection"
import Footer from "@/components/Footer";

export default function Home() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false, amount: 0.5 });

  return (
    <main className="">
      <section>
        <Hero />
      </section>
      <section>
        <ClientResultsDisplay />
      </section>
      <section className="" ref={textRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <TextHoverEffect
            text="PARVATI AND SONS"
            size="md"
            automatic={isInView}
          />
        </motion.div>
      </section>
      <section>
        <FlipCardBanner />
      </section>
      <section>
        <BrandHeroSection />
      </section>
      <section className="mb-16 flex items-center justify-center">
        <WhyChooseUsSection />
      </section>
      <section>
        <CareerHero />
      </section>
      <section>
        <ProjectShowSection/>
      </section>
      <section>
        <ReviewSection/>
      </section>
      <section className="fixed bottom-0 left-0 right-0 z-40 shadow-lg shadow-black">
        <ScrollingTape />
      </section>
      <footer>
        <Footer/>
      </footer>
    </main>
  );
}
