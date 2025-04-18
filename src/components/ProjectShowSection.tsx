'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectShowcaseBlock from './ui/ProjectShowcaseBlock';

gsap.registerPlugin(ScrollTrigger);

const ProjectShowSection = () => {
  const triggerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const trigger = triggerRef.current;

    ScrollTrigger.create({
      trigger: trigger,
      start: 'top 80%',
      onEnter: () => setIsInView(true),
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={triggerRef} className="mb-16 flex items-center justify-center min-h-[300px]">
      {isInView && <ProjectShowcaseBlock />}
    </div>
  );
};

export default ProjectShowSection;
