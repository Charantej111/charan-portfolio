import React from 'react';
import { motion } from 'framer-motion';

const CHECKPOINTS = [
  {
    id: 1,
    number: '01',
    period: '2020 — 2021',
    company: 'Spendwise',
    role: 'Junior Product manager',
    location: 'AHMEDABAD, INDIA',
    description: 'Built a strong foundation in visual design, interaction patterns, and user-centered problem solving.',
    borderColor: '#F04438',
    pinFill: '#F04438',
    rotate: -1,
    logoSvg: (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <path d="M20 6L34 32H6L20 6Z" fill="#F04438" />
        <path d="M20 16L27 30H13L20 16Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: 2,
    number: '02',
    period: '2021 — 2022',
    company: 'Launcherr',
    role: 'Product manager',
    location: 'REMOTE',
    description: 'Designed conversion-focused SaaS interfaces, design systems, and web apps for early-stage tech startups.',
    borderColor: '#2E90FA',
    pinFill: '#2E90FA',
    rotate: 2,
    logoSvg: (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="#2E90FA" strokeWidth="2.5" strokeDasharray="3 3" />
        <circle cx="20" cy="20" r="7" stroke="#2E90FA" strokeWidth="2" />
        <circle cx="20" cy="10" r="3" fill="#2E90FA" />
        <circle cx="20" cy="30" r="3" fill="#2E90FA" />
        <circle cx="10" cy="20" r="3" fill="#2E90FA" />
        <circle cx="30" cy="20" r="3" fill="#2E90FA" />
      </svg>
    ),
  },
  {
    id: 3,
    number: '03',
    period: '2022 — Present',
    company: 'Framer Creator',
    role: 'Senior Product manager',
    location: 'SAN FRANCISCO / REMOTE',
    description: 'Publishing award-winning templates, design engineering systems, and advanced interaction design prototypes.',
    borderColor: '#8427DE',
    pinFill: '#8427DE',
    rotate: -2,
    logoSvg: (
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <path d="M10 8h20L20 20H10V8z" fill="#8427DE" />
        <path d="M10 20h10l10 12H10V20z" fill="#8427DE" opacity="0.85" />
      </svg>
    ),
  },
];

export default function CareerCheckpointsSection() {
  return (
    <section className="relative w-full py-14 sm:py-20 md:py-28 px-4 sm:px-6 flex flex-col items-center select-none z-10">
      
      {/* Top Tag: "Career checkpoints_" with Green Border */}
      <div className="flex flex-col items-center gap-3 sm:gap-4 mb-10 sm:mb-14 md:mb-20 z-10">
        <div className="relative px-4 py-1.5 rounded-[2px] border-[1.3px] border-[#039855] bg-[#FFFCF4]">
          <div className="absolute -top-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#039855] pointer-events-none" />
          <div className="absolute -top-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#039855] pointer-events-none" />
          <div className="absolute -bottom-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#039855] pointer-events-none" />
          <div className="absolute -bottom-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#039855] pointer-events-none" />

          <span className="text-[13px] font-mono font-medium text-[#111111] tracking-tight">
            Career checkpoints_
          </span>
        </div>

        <h2 className="text-[24px] sm:text-[38px] md:text-[44px] font-semibold text-[#111111] tracking-[-0.03em] text-center">
          A journey shaped by great teams.
        </h2>
      </div>

      {/* Prominent Visible Timeline Track with Map Location Pins */}
      <div className="relative w-full max-w-6xl flex flex-col items-center z-10">
        
        {/* Continuous Dotted Timeline Track Bar across top of cards (Desktop) */}
        <div className="hidden lg:flex absolute top-[18px] left-[16%] right-[16%] items-center z-0">
          <div className="w-full border-t-2 border-dashed border-neutral-400" />
        </div>

        {/* Timeline Items */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-8 z-10">
          {CHECKPOINTS.map((item, index) => (
            <div key={item.id} className="relative flex flex-col items-center w-full max-w-[360px] lg:max-w-none lg:w-[330px]">
              
              {/* Prominent Map Pin Milestone Marker */}
              <motion.div
                initial={{ scale: 0, y: -10 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                  delay: index * 0.15,
                }}
                className="relative z-20 flex flex-col items-center mb-6 cursor-pointer"
              >
                {/* SVG Location Map Pin with Drop Shadow */}
                <svg
                  width="36"
                  height="44"
                  viewBox="0 0 36 44"
                  fill="none"
                  className="drop-shadow-md hover:scale-110 transition-transform duration-200"
                >
                  <path
                    d="M18 0C8.05887 0 0 8.05887 0 18C0 28.5 14.5 41.5 16.8 43.4C17.5 44 18.5 44 19.2 43.4C21.5 41.5 36 28.5 36 18C36 8.05887 27.9411 0 18 0Z"
                    fill={item.pinFill}
                  />
                  <circle cx="18" cy="18" r="7" fill="#FFFFFF" />
                  <circle cx="18" cy="18" r="3.5" fill={item.pinFill} />
                </svg>

                {/* Milestone Step Indicator */}
                <span className="mt-1 text-[11px] font-mono font-bold tracking-wider uppercase text-neutral-500">
                  Step {item.number}
                </span>
              </motion.div>

              {/* Checkpoint Detail Card with Framer Selection Border */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15 + 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: { type: 'spring', stiffness: 400, damping: 25 },
                }}
                className="relative w-full rounded-[2px] border-[1.3px] bg-white p-6 sm:p-7 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] flex flex-col justify-between"
                style={{
                  borderColor: item.borderColor,
                }}
              >
                {/* 4 Corner Resize Anchor Handles */}
                <div
                  className="absolute -top-[4px] -left-[4px] w-[7px] h-[7px] bg-white border-[1.3px] pointer-events-none"
                  style={{ borderColor: item.borderColor }}
                />
                <div
                  className="absolute -top-[4px] -right-[4px] w-[7px] h-[7px] bg-white border-[1.3px] pointer-events-none"
                  style={{ borderColor: item.borderColor }}
                />
                <div
                  className="absolute -bottom-[4px] -left-[4px] w-[7px] h-[7px] bg-white border-[1.3px] pointer-events-none"
                  style={{ borderColor: item.borderColor }}
                />
                <div
                  className="absolute -bottom-[4px] -right-[4px] w-[7px] h-[7px] bg-white border-[1.3px] pointer-events-none"
                  style={{ borderColor: item.borderColor }}
                />

                {/* Card Top: Logo & Date Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[8px] bg-neutral-50 border border-neutral-200/80 flex items-center justify-center p-1.5 shadow-xs">
                    {item.logoSvg}
                  </div>

                  <span className="px-2.5 py-1 rounded-[3px] bg-neutral-100 text-neutral-600 text-[12px] font-mono font-medium">
                    {item.period}
                  </span>
                </div>

                {/* Card Middle: Company, Role & Location */}
                <div className="mt-6">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-[#111111] tracking-tight">
                    {item.company}
                  </h3>
                  <p className="text-[14px] font-medium text-neutral-700 mt-1">
                    {item.role}
                  </p>
                  <span className="inline-block mt-2 text-[11px] font-mono text-neutral-600 tracking-wider uppercase font-semibold">
                    📍 {item.location}
                  </span>
                </div>

                {/* Card Bottom: Description */}
                <p className="mt-5 text-[13px] sm:text-[14px] text-neutral-600 leading-[1.6]">
                  {item.description}
                </p>

              </motion.div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
