import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import PenToolSticker from './PenToolSticker';
import RocketSticker from './RocketSticker';
import AvailableForWorkBadge from './AvailableForWorkBadge';
import { DAVID_SUMMER_PHOTO } from './aboutAssets';

/**
 * Authentic Framer Hero Canvas Interaction:
 * Stage 0: Initial tiny frame at top-left
 * Stage 1: Cursor clamps down
 * Stage 2: Cursor drags diagonally to open the card
 * Stage 3: Card is open, content reveals smoothly
 */
export default function HeroCard() {
  const [stage, setStage] = useState(0);

  // Silky smooth spring for dragging physics matching Framer
  const springConfig = { damping: 26, stiffness: 180, mass: 0.5 };
  const cursorParallaxX = useSpring(0, springConfig);
  const cursorParallaxY = useSpring(0, springConfig);

  useEffect(() => {
    // Stage 1: Cursor lands on the handle
    const t1 = setTimeout(() => {
      setStage(1);
    }, 200);

    // Stage 2: Drag diagonally to reveal card
    const t2 = setTimeout(() => {
      setStage(2);
    }, 600);

    // Stage 3: Frame fully open, content clearly revealed
    const t3 = setTimeout(() => {
      setStage(3);
    }, 1500);

    const handleMouseMove = (e) => {
      if (window.innerWidth < 640) return;
      const offsetX = (e.clientX - window.innerWidth / 2) * 0.025;
      const offsetY = (e.clientY - window.innerHeight / 2) * 0.025;
      cursorParallaxX.set(offsetX);
      cursorParallaxY.set(offsetY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorParallaxX, cursorParallaxY]);

  const isOpen = stage >= 2;
  const isContentRevealed = stage >= 2;

  return (
    <div className="relative mx-auto w-full max-w-[650px] min-h-[460px] sm:min-h-[400px] select-none flex items-center justify-center">
      
      {/* ================= CORNER DECOR STICKERS ================= */}
      <motion.div
        animate={{ opacity: isContentRevealed ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="hidden sm:block pointer-events-none"
      >
        <PenToolSticker />
        <RocketSticker />
      </motion.div>

      {/* ================= CANVAS FRAME THAT DRAGS OPEN ================= */}
      <motion.div
        className="absolute top-0 left-0 border-[1.5px] border-[#008FF0] rounded-[1px] bg-white"
        initial={{
          width: '16px',
          height: '16px',
          opacity: 0,
        }}
        animate={
          isOpen
            ? {
                width: '100%',
                height: '100%',
                opacity: 1,
              }
            : {
                width: '16px',
                height: '16px',
                opacity: stage === 1 ? 1 : 0,
              }
        }
        transition={{
          width: {
            duration: 0.95,
            ease: [0.16, 1, 0.3, 1],
          },
          height: {
            duration: 0.95,
            ease: [0.16, 1, 0.3, 1],
          },
          opacity: { duration: 0.15 },
        }}
        style={{
          boxShadow: isContentRevealed ? '0 20px 45px -12px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        {/* --- Top Selection Labels --- */}
        <motion.div
          className="absolute -top-[28px] left-0 flex items-center select-none pointer-events-none"
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: isContentRevealed ? 1 : 0, y: isContentRevealed ? 0 : 3 }}
          transition={{ duration: 0.35 }}
        >
          <span className="text-[13px] sm:text-[14px] font-medium text-[#008FF0] tracking-[-0.01em]">
            Intro
          </span>
        </motion.div>

        {/* "Available for work" badge at top-right */}
        <motion.div
          className="absolute -top-[28px] right-0 flex items-center select-none pointer-events-none"
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: isContentRevealed ? 1 : 0, y: isContentRevealed ? 0 : 3 }}
          transition={{ duration: 0.35 }}
        >
          <AvailableForWorkBadge />
        </motion.div>

        {/* --- Corner Anchor Squares --- */}
        {isOpen && (
          <>
            <div className="absolute -top-[4.5px] -left-[4.5px] w-[8px] sm:w-[9px] h-[8px] sm:h-[9px] bg-white border-[1.5px] border-[#008FF0] z-20 pointer-events-none" />
            <div className="absolute -top-[4.5px] -right-[4.5px] w-[8px] sm:w-[9px] h-[8px] sm:h-[9px] bg-white border-[1.5px] border-[#008FF0] z-20 pointer-events-none" />
            <div className="absolute -bottom-[4.5px] -left-[4.5px] w-[8px] sm:w-[9px] h-[8px] sm:h-[9px] bg-white border-[1.5px] border-[#008FF0] z-20 pointer-events-none" />
            <div className="absolute -bottom-[4.5px] -right-[4.5px] w-[8px] sm:w-[9px] h-[8px] sm:h-[9px] bg-white border-[1.5px] border-[#008FF0] z-20 pointer-events-none" />

            {/* Midpoint Anchor Handles */}
            <div className="hidden sm:block absolute -top-[4.5px] left-1/2 -translate-x-1/2 w-[9px] h-[9px] bg-white border-[1.5px] border-[#008FF0] z-20 pointer-events-none" />
            <div className="hidden sm:block absolute -bottom-[4.5px] left-1/2 -translate-x-1/2 w-[9px] h-[9px] bg-white border-[1.5px] border-[#008FF0] z-20 pointer-events-none" />
            <div className="hidden sm:block absolute top-1/2 -left-[4.5px] -translate-y-1/2 w-[9px] h-[9px] bg-white border-[1.5px] border-[#008FF0] z-20 pointer-events-none" />
            <div className="hidden sm:block absolute top-1/2 -right-[4.5px] -translate-y-1/2 w-[9px] h-[9px] bg-white border-[1.5px] border-[#008FF0] z-20 pointer-events-none" />
          </>
        )}

        {/* ================= CARD INTERIOR CONTENT ================= */}
        <div
          className={`relative w-full h-full flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4 gap-4 sm:gap-0 transition-opacity duration-500 ${
            stage >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Left Column: Image Container */}
          <div className="w-full sm:w-[45%] h-[200px] sm:h-[calc(100%-8px)] overflow-hidden rounded-[2px] bg-neutral-200 shrink-0">
            <img
              src={DAVID_SUMMER_PHOTO}
              alt="David Harley Portrait"
              className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.98] transition-transform duration-500 hover:scale-[1.02]"
              style={{ objectPosition: '49.2% 38.4%' }}
              loading="eager"
            />
          </div>

          {/* Right Column: Heading + Description */}
          <div className="w-full sm:w-[48%] flex flex-col justify-center gap-3 text-left px-2 sm:px-4">
            {/* Heading */}
            <h1 className="text-[#111111] font-medium text-[28px] sm:text-[34px] md:text-[40px] leading-[1.1] tracking-[-0.035em]">
              Hey, I am
              <br />
              David Harley
            </h1>

            {/* Subcopy */}
            <p className="text-[#666666] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.5] font-normal tracking-[-0.01em]">
              I deeply care about polish, craft and interface that make people feel something
            </p>
          </div>
        </div>
      </motion.div>

      {/* ================= COLLABORATIVE POINTER: DRAGS OPEN THE FRAME ================= */}
      <motion.div
        className="absolute z-40 pointer-events-none select-none flex items-start gap-1 bg-transparent origin-top-left"
        style={{
          x: isContentRevealed ? cursorParallaxX : 0,
          y: isContentRevealed ? cursorParallaxY : 0,
        }}
        initial={{
          top: '-4px',
          left: '-4px',
          opacity: 0,
          scale: 0.95,
        }}
        animate={
          stage === 0
            ? {
                top: '-4px',
                left: '-4px',
                opacity: 0,
              }
            : stage === 1
            ? {
                top: '4px',
                left: '4px',
                opacity: 1,
                scale: 1,
              }
            : stage === 2
            ? {
                top: 'calc(100% - 6px)',
                left: 'calc(100% - 6px)',
                opacity: 1,
                scale: 0.9,
              }
            : {
                top: 'calc(100% - 6px)',
                left: 'calc(100% - 6px)',
                opacity: 1,
                scale: 1,
              }
        }
        transition={
          stage === 2
            ? {
                top: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
                left: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
                scale: { duration: 0.2 },
              }
            : {
                duration: 0.3,
                ease: 'easeOut',
              }
        }
      >
        {/* Clean Vector Framer Arrow */}
        <div className="shrink-0 -mt-[1px] -ml-[1px]">
          <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
            <path
              d="M11.8924 23.7113L7.33378 7.71982C7.0984 6.89409 7.95602 6.18106 8.73584 6.55413L23.8385 13.7792C24.6416 14.1634 24.5812 15.3159 23.7425 15.6131L17.5312 17.8139C17.3056 17.8938 17.1164 18.0511 16.9978 18.2574L13.7318 23.9361C13.2908 24.7029 12.1347 24.5616 11.8924 23.7113Z"
              fill="#039855"
            />
            <path
              d="M6.85075 7.8544C6.49768 6.61583 7.78362 5.54674 8.95335 6.10628L24.0564 13.3314C25.2607 13.9078 25.1699 15.6359 23.9119 16.0816L17.7012 18.2825C17.5885 18.3224 17.4939 18.4012 17.4346 18.5041L14.1679 24.1829C13.5065 25.3329 11.7731 25.1214 11.4093 23.8463L6.85075 7.8544Z"
              stroke="#027A48"
              strokeWidth="1.2"
            />
          </svg>
        </div>

        {/* Product manager Pill */}
        <div className="px-3 py-1 rounded-full bg-[#039855] text-white text-[12px] font-medium leading-none tracking-tight shadow-[0_2px_8px_rgba(3,152,85,0.30)] whitespace-nowrap mt-2">
          Product manager
        </div>
      </motion.div>

    </div>
  );
}
