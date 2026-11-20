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
    // Stage 1: Cursor softly glides to the initial handle
    const t1 = setTimeout(() => {
      setStage(1);
    }, 400);

    // Stage 2: Cursor smoothly drags open the frame
    const t2 = setTimeout(() => {
      setStage(2);
    }, 1000);

    // Stage 3: Frame fully open, content softly settles
    const t3 = setTimeout(() => {
      setStage(3);
    }, 2400);

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
    <div className="relative mx-auto w-full max-w-[340px] xs:max-w-[375px] sm:max-w-[650px] min-h-[500px] xs:min-h-[520px] sm:min-h-[400px] select-none flex items-center justify-center">
      
      {/* ================= CORNER DECOR STICKERS ================= */}
      {/* On desktop/tablet, decor stickers give personality without cluttering. On compact mobile screens, they are hidden to keep layout clean & minimalist. */}
      <motion.div
        animate={{ opacity: isContentRevealed ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="pointer-events-none"
      >
        <div className="hidden sm:block">
          <PenToolSticker />
        </div>
        <div className="hidden sm:block">
          <RocketSticker />
        </div>
      </motion.div>

      {/* ================= CANVAS FRAME THAT DRAGS OPEN ================= */}
      <motion.div
        className="absolute top-0 left-0 border-[1.5px] border-[#008FF0] rounded-[1px] bg-white w-full h-full"
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
            duration: 1.35,
            ease: [0.22, 1, 0.36, 1],
          },
          height: {
            duration: 1.35,
            ease: [0.22, 1, 0.36, 1],
          },
          opacity: { duration: 0.35, ease: 'easeOut' },
        }}
        style={{
          boxShadow: isContentRevealed ? '0 20px 45px -12px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        {/* --- Top Selection Labels --- */}
        <motion.div
          className="absolute -top-[22px] sm:-top-[28px] left-0 flex items-center select-none pointer-events-none"
          initial={{ opacity: 0, y: 3 }}
          animate={{ opacity: isContentRevealed ? 1 : 0, y: isContentRevealed ? 0 : 3 }}
          transition={{ duration: 0.35 }}
        >
          <span className="text-[10.5px] sm:text-[14px] font-mono font-medium text-[#008FF0] tracking-tight uppercase">
            PRODUCT MANAGER
          </span>
        </motion.div>

        {/* "Available for work" badge at top-right */}
        <motion.div
          className="absolute -top-[22px] sm:-top-[28px] right-0 flex items-center select-none pointer-events-none"
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
        <div className="relative w-full h-full flex flex-col sm:flex-row items-center justify-between p-3.5 sm:p-5 pb-4 sm:pb-5 gap-3.5 sm:gap-0">
          {/* Image Container: 1:1 square on mobile, 45% side column on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{
              opacity: stage >= 2 ? 1 : 0,
              scale: stage >= 2 ? 1 : 0.96,
            }}
            transition={{
              duration: 0.9,
              delay: stage >= 2 ? 0.2 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full sm:w-[45%] aspect-square sm:aspect-auto sm:h-[calc(100%-8px)] overflow-hidden rounded-[2px] bg-neutral-200 shrink-0 group"
          >
            <img
              src="/profile-hero.jpg.jpg"
              alt="Charan Tej Portrait"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              style={{ objectPosition: 'center 75%' }}
              loading="eager"
            />
            {/* Subtle vintage film grain overlay */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-25"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />
          </motion.div>

          {/* Heading + Description: Below image on mobile, right column on desktop */}
          <div className="w-full sm:w-[48%] flex flex-col justify-center gap-2.5 sm:gap-3 text-left px-1.5 sm:px-4 mt-2 sm:mt-0">
            {/* Title 1 */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: stage >= 2 ? 1 : 0,
                y: stage >= 2 ? 0 : 10,
              }}
              transition={{
                duration: 0.8,
                delay: stage >= 2 ? 0.35 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[#111111] font-semibold text-[20px] xs:text-[22px] sm:text-[28px] md:text-[32px] leading-[1.2] tracking-[-0.03em]"
            >
              Hey, I am Charan
            </motion.h1>

            {/* Title 2 */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: stage >= 2 ? 1 : 0,
                y: stage >= 2 ? 0 : 10,
              }}
              transition={{
                duration: 0.8,
                delay: stage >= 2 ? 0.48 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[#111111] font-medium text-[14px] xs:text-[15px] sm:text-[18px] md:text-[20px] leading-[1.38] tracking-[-0.02em] text-neutral-800"
            >
              Early-stage PM bridging technical AI and user-first execution.
            </motion.h2>

            {/* Content */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: stage >= 2 ? 1 : 0,
                y: stage >= 2 ? 0 : 10,
              }}
              transition={{
                duration: 0.8,
                delay: stage >= 2 ? 0.6 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[#555555] text-[12px] xs:text-[12.5px] sm:text-[13px] md:text-[13.5px] leading-[1.6] sm:leading-[1.6] font-normal tracking-[-0.01em] mt-0.5"
            >
              Orchestrating multi-sided marketplaces, consumer apps, and AI workflows from 0 to 1 with a focus on real unit economics.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* ================= COLLABORATIVE POINTER: DRAGS OPEN THE FRAME ================= */}
      <motion.div
        className="absolute z-40 pointer-events-none select-none hidden xs:flex items-start gap-1 bg-transparent origin-top-left"
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
                top: { duration: 1.35, ease: [0.22, 1, 0.36, 1] },
                left: { duration: 1.35, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.3, ease: 'easeOut' },
              }
            : {
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
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
          Charan Teja
        </div>
      </motion.div>

    </div>
  );
}
