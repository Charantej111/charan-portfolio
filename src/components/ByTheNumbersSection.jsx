import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  {
    id: 1,
    number: '01',
    target: 6,
    suffix: '+',
    label: 'Years of experience',
  },
  {
    id: 2,
    number: '02',
    target: 24,
    suffix: '+',
    label: 'Projects worked',
  },
  {
    id: 3,
    number: '03',
    target: 8,
    suffix: '+',
    label: 'Industries served',
  },
];

// Rolling slot number column for each digit that reels into place on scroll
function RollingDigit({ digit, inView, delay = 0 }) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const targetIndex = parseInt(digit, 10) || 0;

  return (
    <div className="relative inline-block h-[46px] xs:h-[54px] sm:h-[76px] overflow-hidden leading-none">
      <motion.div
        initial={{ y: '0%' }}
        animate={inView ? { y: `-${targetIndex * 10}%` } : { y: '0%' }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1],
          delay,
        }}
        className="flex flex-col"
        style={{ height: '1000%' }}
      >
        {digits.map((d) => (
          <div
            key={d}
            className="h-[46px] xs:h-[54px] sm:h-[76px] flex items-center justify-center text-[42px] xs:text-[48px] sm:text-[68px] font-semibold text-[#111111] tracking-[-0.04em]"
          >
            {d}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function StatCard({ stat }) {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { amount: 0.3 });
  const digitChars = stat.target.toString().split('');

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-[340px] sm:w-[280px] md:w-[310px] h-[175px] xs:h-[190px] sm:h-[230px] rounded-[2px] border-[1.3px] border-[#8427DE] bg-white p-4 xs:p-5 sm:p-7 flex flex-col justify-between shadow-[0_20px_50px_-20px_rgba(132,39,222,0.06)]"
    >
      {/* 4 Corner Resize Anchor Handles */}
      <div className="absolute -top-[4px] -left-[4px] w-[7px] h-[7px] bg-white border-[1.3px] border-[#8427DE] pointer-events-none" />
      <div className="absolute -top-[4px] -right-[4px] w-[7px] h-[7px] bg-white border-[1.3px] border-[#8427DE] pointer-events-none" />
      <div className="absolute -bottom-[4px] -left-[4px] w-[7px] h-[7px] bg-white border-[1.3px] border-[#8427DE] pointer-events-none" />
      <div className="absolute -bottom-[4px] -right-[4px] w-[7px] h-[7px] bg-white border-[1.3px] border-[#8427DE] pointer-events-none" />

      {/* Top Header: ID number & Black block marker */}
      <div className="flex items-center justify-between w-full">
        <span className="text-[12px] sm:text-[13px] font-mono font-medium text-neutral-500">
          {stat.number}
        </span>
        <div className="w-2.5 h-2.5 bg-black" />
      </div>

      {/* Main Rolling Number Counter */}
      <div className="my-auto py-1">
        <div className="flex items-center">
          {digitChars.map((digit, i) => (
            <RollingDigit
              key={i}
              digit={digit}
              inView={inView}
              delay={i * 0.18}
            />
          ))}
          <span className="text-[42px] xs:text-[48px] sm:text-[68px] font-semibold text-[#111111] tracking-[-0.04em] leading-none ml-0.5">
            {stat.suffix}
          </span>
        </div>
      </div>

      {/* Bottom Metric Label */}
      <div className="w-full">
        <span className="text-[14px] sm:text-[16px] text-neutral-700 font-medium tracking-tight">
          {stat.label}
        </span>
      </div>
    </div>
  );
}

export default function ByTheNumbersSection() {
  return (
    <section className="relative w-full pt-4 pb-8 sm:py-16 md:py-24 px-4 sm:px-6 flex flex-col items-center select-none z-10">
      
      {/* Top Header Tag: "By the numbers_" with Purple Border */}
      <div className="flex flex-col items-center gap-2.5 sm:gap-4 mb-6 sm:mb-12 md:mb-18 z-10">
        
        {/* Header Badge */}
        <div className="relative flex items-center justify-center">
          <div className="relative px-4 py-1.5 rounded-[2px] border-[1.3px] border-[#8427DE] bg-[#FFFCF4]">
            <div className="absolute -top-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none" />
            <div className="absolute -top-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none" />
            <div className="absolute -bottom-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none" />
            <div className="absolute -bottom-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none" />

            <span className="text-[13px] font-mono font-medium text-[#111111] tracking-tight">
              By the numbers_
            </span>
          </div>
        </div>

        {/* Section Heading: "A snapshot of my journey" with Framer Pill */}
        <h2 className="text-[24px] sm:text-[38px] md:text-[44px] font-semibold text-[#111111] tracking-[-0.03em] flex items-center gap-2 flex-wrap justify-center text-center">
          <span>A snapshot</span>
          <span>of my journey</span>
        </h2>
      </div>

      {/* 3 Metric Cards: Flex Column on Mobile / Row on Desktop */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 z-10">
        {STATS.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

    </section>
  );
}
