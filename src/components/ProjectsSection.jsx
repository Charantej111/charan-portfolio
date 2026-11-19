import React from 'react';
import { motion } from 'framer-motion';
import AnimatedRibbons from './AnimatedRibbons';
import { PROJECT_1_IMG, PROJECT_2_IMG, PROJECT_3_IMG } from './projectImages';
import { useGlobalLoading } from './LoadingContext';

// Project 4 Asset from Framer site
const PROJECT_4_IMG = "https://framerusercontent.com/images/DED09lWyYXoUEEUQjpK6dgT1Pl0.png?width=2312&height=1532";

const ALL_PROJECTS = [
  {
    id: 1,
    tag: "Project 1",
    subtitle: "SignalFlow • Jul 18, 2026",
    title: "SignalFlow AI Workspace",
    description: "A focused AI operations platform that turns complex automations into workflows teams can understand, supervise, and trust.",
    image: PROJECT_1_IMG,
    imageAlt: "SignalFlow AI Workspace",
    linkText: "View case study →",
  },
  {
    id: 2,
    tag: "Project 2",
    subtitle: "Wayfinder • Mar 14, 2026",
    title: "Wayfinder Logistics Command",
    description: "A real-time operations center that gives logistics teams one calm view of routes, risks, capacity, and exceptions.",
    image: PROJECT_2_IMG,
    imageAlt: "Wayfinder Logistics Command",
    linkText: "View case study →",
  },
  {
    id: 3,
    tag: "Project 3",
    subtitle: "Pulse Health • May 22, 2026",
    title: "Pulse Clinical Intelligence",
    description: "A clinical decision workspace that helps care teams prioritize patient risk, unblock care pathways, and track critical outcomes.",
    image: PROJECT_3_IMG,
    imageAlt: "Pulse Clinical Intelligence",
    linkText: "View case study →",
  },
  {
    id: 4,
    tag: "Project 4",
    subtitle: "Morrow • Jan 28, 2026",
    title: "Morrow Mobile Finance",
    description: "A personal finance app that makes spending, saving, and planning feel understandable without flattening the details.",
    image: PROJECT_4_IMG,
    imageAlt: "Morrow Mobile Finance",
    linkText: "View case study →",
  },
];

export default function ProjectsSection({
  onOpenCaseStudy,
  limit = 3,
  showAll = false,
  title = "Work i am proud of",
  tag = "Featured projects_",
  onViewAll,
}) {
  const { triggerLoading } = useGlobalLoading();

  const displayedProjects = showAll ? ALL_PROJECTS : ALL_PROJECTS.slice(0, limit);

  const handleCaseStudyClick = (projectId) => {
    triggerLoading(700, () => {
      if (onOpenCaseStudy) {
        onOpenCaseStudy(projectId);
      }
    });
  };

  return (
    <section id="projects" className="relative w-full pt-4 pb-10 sm:py-16 md:py-24 px-4 sm:px-6 flex flex-col items-center select-none z-10">
      
      {/* Background Animated Fluid Ribbons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <AnimatedRibbons
          lineCount={2}
          strokeWidth={24}
          animationTrigger="scroll"
          redPlacement={{ rotation: -40, scale: 1.1, x: -160, y: -180 }}
          bluePlacement={{ rotation: 110, scale: 1.0, x: 220, y: 100 }}
        />
      </div>

      {/* Top Header Tag */}
      <div className="flex flex-col items-center gap-2.5 sm:gap-4 mb-6 sm:mb-12 md:mb-16 z-10 text-center">
        <div className="relative px-4 py-1.5 rounded-[2px] border-[1.3px] border-[#8427DE] bg-[#FFFCF4]">
          {/* Corner handle dots */}
          <div className="absolute -top-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none" />
          <div className="absolute -top-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none" />
          <div className="absolute -bottom-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none" />
          <div className="absolute -bottom-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none" />

          <span className="text-[13px] font-mono font-medium text-[#111111] tracking-tight">
            {tag}
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-[26px] sm:text-[38px] md:text-[44px] font-semibold text-[#111111] tracking-[-0.03em]">
          {title}
        </h2>
      </div>

      {/* Projects List */}
      <div className="w-full max-w-[1000px] flex flex-col gap-8 sm:gap-14 md:gap-20 z-10">
        {displayedProjects.map((project) => (
          <div key={project.id} className="relative w-full">
            
            {/* Top-Left Tag: "Project X" with Purple Border, Corner Handles & Arrow */}
            <div className="absolute -top-6 sm:-top-7 left-0 z-20">
              <div className="relative inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[2px] border-[1.2px] border-[#8427DE] bg-[#FFFCF4] text-[12px] font-medium text-[#8427DE]">
                <div className="absolute -top-[3px] -left-[3px] w-[4px] h-[4px] bg-[#FFFCF4] border-[1px] border-[#8427DE] pointer-events-none" />
                <div className="absolute -top-[3px] -right-[3px] w-[4px] h-[4px] bg-[#FFFCF4] border-[1px] border-[#8427DE] pointer-events-none" />
                <div className="absolute -bottom-[3px] -left-[3px] w-[4px] h-[4px] bg-[#FFFCF4] border-[1px] border-[#8427DE] pointer-events-none" />
                <div className="absolute -bottom-[3px] -right-[3px] w-[4px] h-[4px] bg-[#FFFCF4] border-[1px] border-[#8427DE] pointer-events-none" />

                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
                <span>{project.tag}</span>
              </div>
            </div>

            {/* Project Card Frame (Purple border #8427DE matching Framer) */}
            <div className="relative w-full rounded-[2px] border-[1.3px] border-[#8427DE] bg-[#FFFCF4] p-4 sm:p-8 md:p-12 pb-5 sm:pb-8 shadow-[0_20px_50px_-20px_rgba(132,39,222,0.05)] flex flex-col md:flex-row items-center gap-5 sm:gap-8 md:gap-10 justify-between">
              
              {/* 4 Corner Anchor Handles (Framer Canvas Selection Handles) */}
              <div className="absolute -top-[4px] -left-[4px] w-[7px] h-[7px] bg-[#FFFCF4] border-[1.3px] border-[#8427DE] z-20 pointer-events-none" />
              <div className="absolute -top-[4px] -right-[4px] w-[7px] h-[7px] bg-[#FFFCF4] border-[1.3px] border-[#8427DE] z-20 pointer-events-none" />
              <div className="absolute -bottom-[4px] -left-[4px] w-[7px] h-[7px] bg-[#FFFCF4] border-[1.3px] border-[#8427DE] z-20 pointer-events-none" />
              <div className="absolute -bottom-[4px] -right-[4px] w-[7px] h-[7px] bg-[#FFFCF4] border-[1.3px] border-[#8427DE] z-20 pointer-events-none" />

              {/* Left Column: Details & CTA */}
              <div className="flex-1 flex flex-col justify-between text-left h-full w-full">
                <div>
                  <span className="text-[12px] sm:text-[13px] font-medium text-[#777777]">
                    {project.subtitle}
                  </span>

                  <h3 className="mt-2 sm:mt-4 text-[19px] xs:text-[21px] sm:text-[28px] md:text-[32px] font-semibold text-[#111111] leading-[1.2] tracking-[-0.025em]">
                    {project.title}
                  </h3>

                  <p className="mt-2 sm:mt-4 text-[12.5px] xs:text-[13px] sm:text-[15px] text-[#666666] leading-[1.55] sm:leading-[1.6] max-w-[420px]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-8 md:mt-10">
                  <motion.button
                    onClick={() => handleCaseStudyClick(project.id)}
                    whileHover={{ scale: 1.05, x: 4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    type="button"
                    className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-[3px] border border-neutral-300 hover:border-black text-[12px] sm:text-[13px] font-medium text-[#111111] transition-colors bg-white/70 cursor-pointer shadow-2xs"
                  >
                    <span>{project.linkText}</span>
                  </motion.button>
                </div>
              </div>

              {/* Right Column: Visual Device Frame / Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                onClick={() => handleCaseStudyClick(project.id)}
                className="w-full md:w-[460px] h-[190px] xs:h-[210px] sm:h-[280px] md:h-[340px] shrink-0 overflow-hidden rounded-[2px] bg-neutral-100 flex items-center justify-center cursor-pointer shadow-inner"
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </motion.div>

            </div>

          </div>
        ))}
      </div>

      {/* On Homepage: "View all projects" button */}
      {!showAll && onViewAll && (
        <div className="mt-8 sm:mt-14 flex items-center justify-center z-10">
          <motion.button
            onClick={onViewAll}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-[2px] border-[1.3px] border-[#8427DE] bg-white hover:bg-[#8427DE] text-[14px] font-medium text-[#111111] hover:text-white shadow-xs transition-colors duration-200 cursor-pointer"
          >
            <span>View all 4 projects</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </motion.button>
        </div>
      )}

    </section>
  );
}
