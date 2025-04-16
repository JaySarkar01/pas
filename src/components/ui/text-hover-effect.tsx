"use client";
import React, { useRef, useEffect, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextHoverEffect = ({
  text,
  duration = 0,
  automatic = false,
  size = "lg",
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
  size?: "sm" | "md" | "lg";
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [isMobile, setIsMobile] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline>(null);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Automatic animation
  useEffect(() => {
    if (automatic) {
      const interval = setInterval(() => {
        if (svgRef.current) {
          const width = svgRef.current.clientWidth;
          const height = svgRef.current.clientHeight;
          const x = Math.random() * width;
          const y = Math.random() * height;
          setCursor({ x, y });
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [automatic]);

  // Update mask position
  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  // GSAP ScrollTrigger setup
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timelineRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none reset",
          markers: false, // Set to true for debugging
        },
      });

      // Animate the stroke dash
      timelineRef.current.fromTo(
        ".animated-stroke",
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          duration: 4,
          ease: "power3.inOut",
        },
        0
      );

      // Fade in the background text
      timelineRef.current.fromTo(
        ".background-stroke",
        { opacity: 0 },
        {
          opacity: 0.7,
          duration: 2,
          ease: "power2.out",
        },
        0
      );

      // Start mask animation when in view
      timelineRef.current.call(
        () => {
          if (automatic) {
            setCursor({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
          }
        },
        
        
      );
    }, containerRef);

    return () => ctx.revert();
  }, [automatic]);

  const textSize = {
    sm: "text-4xl",
    md: "text-3xl",
    lg: "text-6xl md:text-7xl",
  }[size];

  return (
    <div ref={containerRef} className="w-full h-full relative m-0 p-0">
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 300 50"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
        onMouseMove={(e) =>
          !isMobile && setCursor({ x: e.clientX, y: e.clientY })
        }
        onClick={(e) => isMobile && setCursor({ x: e.clientX, y: e.clientY })}
        className="select-none cursor-default m-0 p-0"
        aria-label={text}
        role="img"
      >
        <defs>
          {/* Fill Gradient - Always visible */}
          <linearGradient
            id="textGradient"
            gradientUnits="userSpaceOnUse"
            cx="50%"
            cy="50%"
            r="25%"
          >
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="25%" stopColor="#ef4444" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="75%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>

          {/* Stroke Gradient */}
          <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#eab308" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>

          {/* Reveal Mask */}
          <motion.radialGradient
            id="revealMask"
            gradientUnits="userSpaceOnUse"
            r={isMobile ? "40%" : "20%"}
            initial={{ cx: "50%", cy: "50%" }}
            animate={maskPosition}
            transition={{
              duration: isMobile ? duration * 1.5 : duration,
              ease: "easeOut",
            }}
          >
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </motion.radialGradient>

          <mask id="textMask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#revealMask)"
              className="m-0 p-0"
            />
          </mask>
        </defs>

        {/* Background text - fades in on scroll */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          strokeWidth="0.3"
          className={`background-stroke fill-transparent stroke-neutral-200 font-bold dark:stroke-neutral-800 ${textSize} m-0 p-0`}
        >
          {text}
        </text>

        {/* Animated stroke - controlled by GSAP */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#strokeGradient)"
          strokeWidth="0.3"
          className={`animated-stroke fill-transparent font-bold ${textSize} m-0 p-0`}
          style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
        >
          {text}
        </text>

        {/* Main gradient text with mask */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#textGradient)"
          strokeWidth="0.3"
          mask="url(#textMask)"
          className={`fill-transparent font-bold ${textSize} m-0 p-0`}
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default TextHoverEffect;