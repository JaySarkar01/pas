"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Landingsec from "@/app/components/landingsec";
import Whyus from "@/app/components/whyus";
import FlipCardBanner from "@/app/components/ScrollingFlipCards";
import ScrollingTape from "@/app/components/lngbanner";
import Combanner from "./components/combanner";
import TextHoverEffect from "@/components/ui/text-hover-effect";
import HeroSection from "./components/hero";
import CareerHero from "./components/CareerHero";

export default function Home() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false, amount: 0.5 });

  return (
    <main className="">
      <section>
        <Landingsec />
      </section>
      <section>
        <Whyus />
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
        <HeroSection/>
      </section>
      <section className="mb-16 flex items-center justify-center">
        <Combanner/>
      </section>
      <section>
        <CareerHero/>
      </section>
      <section className="fixed bottom-0 left-0 right-0 z-40 shadow-lg shadow-black">
        <ScrollingTape />
      </section>
    </main>
  );
}