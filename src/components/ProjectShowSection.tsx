'use client';

import React from 'react';
import ProjectShowcaseBlock from './ui/ProjectShowcaseBlock';
import WorldMapDemo from "@/components/Call_map";

const ProjectShowSection = () => {
 
  return (
    <div className="mb-16 flex flex-col items-center justify-center min-h-[300px]">
      <ProjectShowcaseBlock />
     <WorldMapDemo/>
    </div>
  );
};

export default ProjectShowSection;
