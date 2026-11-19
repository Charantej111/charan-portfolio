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
    tag: "Marketplace · Consumer · Product Operations",
    year: "2026",
    title: "Delizoo",
    description: "A hyperlocal food delivery marketplace built around fairer economics for customers and restaurant partners.",
    image: "/project-delizoo.jpg.png",
    imageAlt: "Delizoo Marketplace",
    linkText: "View project →",
  },
  {
    id: 3,
    tag: "B2B · EdTech · Product Design",
    year: "2025",
    title: "CodeTracker",
    description: "A university platform that brings competitive programming activity from multiple coding platforms into one place.",
    image: "/project-codetracker.jpg.png",
    imageAlt: "CodeTracker University Platform",
    linkText: "View project →",
  },
  {
    id: 4,
    tag: "0→1 · Productivity · AI",
    year: "2026",
    title: "CareerOS",
    description: "A career operating system connecting planning, learning, projects, skills, and job applications in one place.",
    image: "/project-careeros.jpg.png",
    imageAlt: "CareerOS Career System",
    linkText: "View project →",
  },
  {
    id: 2,
    tag: "AI Product · Voice UX · Adaptive Systems",
    year: "2026",
    title: "InterviewPilot",
    description: "An AI interview platform that creates personalized interview experiences around the candidate, role, and company.",
    image: "/project-interviewpilot.jpg.png",
    imageAlt: "InterviewPilot AI Platform",
    linkText: "View project →",
  },
];

export default function ProjectsSection({
  onOpenCaseStudy,
  limit = 4,
  showAll = true,
  title = "Products I've built and helped shape",
  tag = "Selected work",
  supportingText = "A selection of products where I've worked across product thinking, UX, technology, research, and execution.",
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
          strokeWidth={14}
          animationTrigger="scroll"
          redPlacement={{ rotation: -40, scale: 1.1, x: -160, y: -180 }}
          bluePlacement={{ rotation: 110, scale: 1.0, x: 220, y: 100 }}
        />
      </div>

      {/* Top Header Tag */}
      <div className="flex flex-col items-center gap-2.5 sm:gap-4 mb-6 sm:mb-12 md:mb-16 z-10 text-center max-w-2xl mx-auto">
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
        <h2 className="text-[26px] sm:text-[38px] md:text-[44px] font-semibold text-[#111111] tracking-[-0.03em] text-center">
          {title}
        </h2>

        {/* Supporting text */}
        {supportingText && (
          <p className="text-[14px] sm:text-[16px] text-neutral-600 leading-[1.6] max-w-xl text-center">
            {supportingText}
          </p>
        )}
      </div>

      {/* Projects List */}
      <div className="w-full max-w-[360px] xs:max-w-[420px] sm:max-w-[700px] md:max-w-[1000px] flex flex-col gap-8 sm:gap-14 md:gap-20 z-10">
        {displayedProjects.map((project) => (
          <div key={project.id} className="relative w-full flex flex-col items-start">

            {/* Top-Left Tag: Category */}
            <div className="mb-2 sm:mb-3 z-20">
              <div className="relative inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-[#8427DE] text-[11px] xs:text-[12px] font-medium text-white shadow-xs">
                <span>{project.tag}</span>
              </div>
            </div>

            {/* Project Card Frame (Purple border #8427DE matching Framer) */}
            <div className="relative w-full rounded-[2px] border-[1.3px] border-[#8427DE] bg-[#FFFCF4] p-3.5 xs:p-4 sm:p-8 md:p-12 pb-4 sm:pb-8 shadow-[0_20px_50px_-20px_rgba(132,39,222,0.05)] flex flex-col md:flex-row items-center gap-4 sm:gap-8 md:gap-10 justify-between">

              {/* 4 Corner Anchor Handles (Framer Canvas Selection Handles) */}
              <div className="absolute -top-[4px] -left-[4px] w-[7px] h-[7px] bg-[#FFFCF4] border-[1.3px] border-[#8427DE] z-20 pointer-events-none" />
              <div className="absolute -top-[4px] -right-[4px] w-[7px] h-[7px] bg-[#FFFCF4] border-[1.3px] border-[#8427DE] z-20 pointer-events-none" />
              <div className="absolute -bottom-[4px] -left-[4px] w-[7px] h-[7px] bg-[#FFFCF4] border-[1.3px] border-[#8427DE] z-20 pointer-events-none" />
              <div className="absolute -bottom-[4px] -right-[4px] w-[7px] h-[7px] bg-[#FFFCF4] border-[1.3px] border-[#8427DE] z-20 pointer-events-none" />

              {/* Mobile: Image first on top. Desktop: Image on right md:order-2 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                onClick={() => handleCaseStudyClick(project.id)}
                className="w-full md:w-[480px] lg:w-[520px] aspect-[16/10] sm:aspect-auto sm:h-[280px] md:h-[310px] md:order-2 shrink-0 overflow-hidden rounded-[2px] bg-neutral-100 flex items-center justify-center cursor-pointer shadow-inner"
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ objectPosition: 'left center' }}
                  loading="lazy"
                />
              </motion.div>

              {/* Left Column / Mobile Bottom: Details & CTA */}
              <div className="flex-1 flex flex-col justify-between text-left h-full w-full md:order-1 pt-1 md:pt-0">
                <div>
                  <span className="text-[12px] sm:text-[13px] font-mono font-medium text-[#777777] flex items-center gap-1.5">
                    {project.year}
                  </span>

                  <h3 className="mt-1.5 sm:mt-4 text-[22px] xs:text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#111111] leading-[1.2] tracking-[-0.025em]">
                    {project.title}
                  </h3>

                  <p className="mt-2 sm:mt-4 text-[13.5px] xs:text-[14px] sm:text-[15px] text-[#666666] leading-[1.55] sm:leading-[1.6] max-w-[420px]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 sm:mt-8 md:mt-10">
                  <motion.button
                    onClick={() => handleCaseStudyClick(project.id)}
                    whileHover={{ scale: 1.03, x: 2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    type="button"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-[2px] border border-[#8427DE] hover:bg-[#8427DE] hover:text-white text-[13px] font-medium text-[#111111] transition-colors bg-white cursor-pointer shadow-xs"
                  >
                    <span>View project</span>
                    <span>→</span>
                  </motion.button>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* Optional view more button */}
      {!showAll && onViewAll && (
        <div className="mt-8 sm:mt-14 flex items-center justify-center z-10">
          <motion.button
            onClick={onViewAll}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-[2px] border-[1.3px] border-[#8427DE] bg-[#FFFCF4] hover:bg-[#8427DE] text-[13px] sm:text-[14px] font-mono font-medium text-[#111111] hover:text-white shadow-xs transition-colors duration-200 cursor-pointer"
          >
            <div className="absolute -top-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none group-hover:bg-[#8427DE]" />
            <div className="absolute -top-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none group-hover:bg-[#8427DE]" />
            <div className="absolute -bottom-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none group-hover:bg-[#8427DE]" />
            <div className="absolute -bottom-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none group-hover:bg-[#8427DE]" />

            <span>View all projects</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </motion.button>
        </div>
      )}

    </section>
  );
}
