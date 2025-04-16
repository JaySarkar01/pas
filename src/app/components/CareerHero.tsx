"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Inter } from "next/font/google";
  const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-inter',
    display: 'swap',
  });

gsap.registerPlugin(ScrollTrigger);

export default function CareerHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const highlightRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const avatarsRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    });

    gsap.to(".particle", {
      y: -20,
      opacity: 0,
      duration: 3,
      stagger: 0.1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    tl.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.2)"
    })
      .from(highlightRef.current, {
        scale: 0,
        rotate: 10,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.5")
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4")
      .from(".highlight-text", {
        scale: 1.2,
        backgroundColor: "#fff",
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.3")
      .from(buttonsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.3")
      .from(avatarsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.2")
      .from(arrowRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.3");

      const buttons = gsap.utils.toArray(".career-button") as HTMLElement[];

      buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            y: -4,
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out"
          });
        });
        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            y: 0,
            scale: 1,
            duration: 0.2,
            ease: "power2.out"
          });
        });
      });
      

    return () => {
      gsap.killTweensOf(".particle");
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  const particles = Array.from({ length: 12 }, (_, i) => (
    <div
      key={i}
      className="particle absolute rounded-full bg-blue-400 opacity-20"
      style={{
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  ));

  return (
    <section ref={sectionRef} className={`${inter.className} relative w-full px-6 md:px-12 py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white text-gray-900 text-center overflow-hidden`}>
      {/* Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {particles}
      </div>
      {/* Title */}
      <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Take The Next <br className="hidden md:block" /> Step In Your{" "}
        <span ref={highlightRef} className="relative inline-block">
          <span className="text-blue-600">Career</span>
          <svg
            className="absolute -bottom-2 left-0 w-full h-2 text-blue-500"
            viewBox="0 0 200 20"
          >
            <path
              d="M0,10 Q100,20 200,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>

      {/* Subheading */}
      <p ref={subtitleRef} className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-700">
        Nowadays, managers are expected to have excellent{" "}
        <mark className="highlight-text bg-blue-100 text-gray-900 font-medium px-2 rounded-md py-1">
          people, operational, strategy and tech skills
        </mark>
        . Voohy&ldquo;s <span className="inline-block animate-bounce">🧠</span> knowledge resources and{" "}
        <span className="inline-block animate-pulse">⚡</span> AI-powered tools help you gain the
        skills needed for effective leadership at modern workplaces.
      </p>

      {/* Buttons */}
      <div ref={buttonsRef} className="mt-10 flex justify-center gap-5 flex-wrap">
        <button className="career-button relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl group">
          <span className="relative z-10">Start for FREE</span>
          <span className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
        </button>
        <button className="career-button bg-white border-2 border-blue-200 hover:border-blue-300 text-gray-900 px-8 py-3.5 rounded-full font-semibold transition-all shadow hover:shadow-md">
          Contact for Team Plans
        </button>
      </div>

      {/* Avatars */}
      <div ref={avatarsRef} className="mt-14 flex flex-col items-center gap-4">
        <div className="flex -space-x-3">
          {[1, 1, 1, 1].map((user, i) => (
            <div
              key={i}
              className="relative w-12 h-12 hover:-translate-y-2 transition-transform duration-300"
            >
              <Image
                src={`/users/u${user}.webp`}
                alt={`user${user}`}
                fill
                className="rounded-full border-2 border-white object-cover shadow-md"
              />
            </div>
          ))}
          <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-800 font-medium shadow-md hover:-translate-y-2 transition-transform duration-300">
            +24
          </div>
        </div>
        <p className="text-sm text-gray-600 max-w-md">
          Join <span className="font-semibold text-blue-600">1,200+</span> emerging leaders using Voohy to elevate their skills.
        </p>
      </div>

      {/* Down Arrow */}
      <div ref={arrowRef} className="mt-12">
        <div className="relative w-12 h-12 mx-auto">
          <svg
            className="absolute inset-0 text-blue-500 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
          <div className="absolute inset-0 rounded-full bg-blue-100 opacity-0 animate-ping-slow"></div>
        </div>
      </div>
    </section>
  );
}
