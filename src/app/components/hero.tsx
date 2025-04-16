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

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom bottom",
        toggleActions: "play none none none",
      }
    });

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .from(imageRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "back.out(1.2)"
    }, "-=0.6")
    .from(testimonialRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    const buttons = gsap.utils.toArray(".hero-button") as HTMLElement[];

buttons.forEach((button) => {
  const handleMouseEnter = () => {
    gsap.to(button, {
      y: -3,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(button, {
      y: 0,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  button.addEventListener("mouseenter", handleMouseEnter);
  button.addEventListener("mouseleave", handleMouseLeave);
});


    return () => {
      tl.kill();
      buttons.forEach((button: any) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className={`${inter.className} w-full px-6 md:px-12 py-12 md:py-20 bg-white text-gray-900`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Advertising <span className="text-blue-600">companies</span>
          </h1>

          <div ref={contentRef} className="space-y-6">
            <p className="text-xl font-semibold text-blue-500">
              #1 software for TATA
            </p>
            <p className="text-gray-700 text-lg md:text-xl max-w-lg">
              <span className="font-semibold text-gray-900">Manage your billboard assets</span>, advertising campaigns, CRM
              pipeline, sales, and analytics. All from a single platform.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <button className="hero-button bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg">
                Start now
              </button>
              <button className="hero-button bg-white border border-blue-200 hover:border-blue-300 text-blue-800 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow">
                Meet an advisor
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div ref={imageRef} className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
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
      <div ref={testimonialRef} className="mt-16 bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl max-w-4xl mx-auto shadow-sm border border-blue-100">
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
