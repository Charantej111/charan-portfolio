import React from 'react';
import { motion } from 'framer-motion';

const SKILL_GROUPS = [
  {
    category: 'Product',
    borderColor: '#039754',
    skills: [
      'Product discovery',
      'User research',
      'Problem definition',
      'Feature prioritization',
      'Requirements',
      'Product execution',
    ],
  },
  {
    category: 'UX',
    borderColor: '#008ff0',
    skills: [
      'User flows',
      'Wireframing',
      'Prototyping',
      'Interaction design',
      'Usability testing',
      'Figma',
    ],
  },
  {
    category: 'AI',
    borderColor: '#8427de',
    skills: [
      'AI product thinking',
      'LLM applications',
      'Prompt engineering',
      'AI evaluation',
      'Adaptive AI systems',
    ],
  },
  {
    category: 'Technology',
    borderColor: '#f4ac28',
    skills: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'GitHub',
      'Python',
    ],
  },
  {
    category: 'Analytics & Tools',
    borderColor: '#F04438',
    skills: [
      'Power BI',
      'Tableau',
      'Canva',
      'Framer',
      'Jira',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="relative w-full pt-4 pb-12 sm:py-16 md:py-24 px-4 sm:px-6 flex flex-col items-center select-none z-10">
      
      {/* Top Header Tag */}
      <div className="flex flex-col items-center gap-2.5 sm:gap-4 mb-6 sm:mb-12 md:mb-16 z-10 text-center">
        <div className="relative px-4 py-1.5 rounded-[2px] border-[1.3px] border-[#008ff0] bg-[#FFFCF4]">
          <div className="absolute -top-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#008ff0] pointer-events-none" />
          <div className="absolute -top-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#008ff0] pointer-events-none" />
          <div className="absolute -bottom-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#008ff0] pointer-events-none" />
          <div className="absolute -bottom-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#008ff0] pointer-events-none" />

          <span className="text-[13px] font-mono font-medium text-[#111111] tracking-tight">
            Capabilities_
          </span>
        </div>

        <h2 className="text-[26px] sm:text-[38px] md:text-[44px] font-semibold text-[#111111] tracking-[-0.03em] text-center">
          Skills & Toolkit
        </h2>
      </div>

      {/* Grid of Skill Categories */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 z-10">
        {SKILL_GROUPS.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -4 }}
            className="relative rounded-[2px] border-[1.3px] bg-white p-5 flex flex-col justify-start shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)]"
            style={{ borderColor: group.borderColor }}
          >
            {/* 4 Corner Anchor Handles */}
            <div
              className="absolute -top-[4px] -left-[4px] w-[6px] h-[6px] bg-white border-[1.2px] pointer-events-none"
              style={{ borderColor: group.borderColor }}
            />
            <div
              className="absolute -top-[4px] -right-[4px] w-[6px] h-[6px] bg-white border-[1.2px] pointer-events-none"
              style={{ borderColor: group.borderColor }}
            />
            <div
              className="absolute -bottom-[4px] -left-[4px] w-[6px] h-[6px] bg-white border-[1.2px] pointer-events-none"
              style={{ borderColor: group.borderColor }}
            />
            <div
              className="absolute -bottom-[4px] -right-[4px] w-[6px] h-[6px] bg-white border-[1.2px] pointer-events-none"
              style={{ borderColor: group.borderColor }}
            />

            <h3
              className="text-[16px] font-bold tracking-tight mb-3.5 pb-2 border-b border-neutral-100 flex items-center justify-between"
              style={{ color: group.borderColor }}
            >
              <span>{group.category}</span>
              <span className="text-[11px] font-mono text-neutral-400 font-normal">
                ({group.skills.length})
              </span>
            </h3>

            <ul className="flex flex-col gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-[13px] text-neutral-700 font-medium flex items-center gap-1.5"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: group.borderColor }}
                  />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
