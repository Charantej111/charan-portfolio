import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DAVID_SUMMER_PHOTO } from './aboutAssets';
import { PHOTO_2, PHOTO_3 } from './additionalPhotos';

const PHOTOS = [
  {
    id: 1,
    src: '/about-photo-1.jpg.jpeg',
    alt: 'Charan Tej',
  },
  {
    id: 2,
    src: '/about-photo-2.jpg',
    alt: 'Charan Tej',
  },
  {
    id: 3,
    src: '/about-photo-3.jpg',
    alt: 'Charan Tej',
  },
];

/**
 * Stages of Framer canvas simulation:
 * 0: Initial State    -> Empty canvas selection box with excess whitespace
 * 1: Cursor Travel    -> Cursor smoothly glides toward the bottom-right resize anchor
 * 2: Grab Anchor      -> Cursor clamps down on the corner anchor (press state)
 * 3: Dynamic Auto-Fit -> Smooth dragging animation shrinking frame & removing extra space
 * 4: Final Resting    -> Content perfectly framed; cursor floats naturally nearby
 */
export default function AboutHeroSection() {
  const [cards, setCards] = useState([0, 1, 2]); // Stack order: 0 is front
  const [stage, setStage] = useState(0);

  // Send top photo to back (shuffle)
  const sendToBack = () => {
    setCards((prev) => [prev[1], prev[2], prev[0]]);
  };

  // Auto-cycle photos every 2s
  useEffect(() => {
    const timer = setInterval(() => {
      sendToBack();
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Professional Framer canvas sequence loop
  useEffect(() => {
    let timer;
    if (stage === 0) {
      timer = setTimeout(() => setStage(1), 1200);
    } else if (stage === 1) {
      timer = setTimeout(() => setStage(2), 1100);
    } else if (stage === 2) {
      timer = setTimeout(() => setStage(3), 500);
    } else if (stage === 3) {
      timer = setTimeout(() => setStage(4), 1600);
    } else if (stage === 4) {
      timer = setTimeout(() => setStage(0), 4000);
    }
    return () => clearTimeout(timer);
  }, [stage]);

  const isFitted = stage === 3 || stage === 4;
  const isGrabbing = stage === 2 || stage === 3;
  const isSelected = stage !== 0;

  return (
    <section className="relative w-full min-h-0 sm:min-h-[85vh] pt-6 pb-12 sm:py-16 px-4 sm:px-8 flex items-center justify-center select-none z-10 overflow-hidden">
      
      <div className="relative max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16">
        
        {/* Left Column: Interactive 3-Card Stack with Time-delay & Click-to-send-back */}
        <div
          className="relative w-[260px] xs:w-[280px] sm:w-[340px] h-[340px] xs:h-[380px] sm:h-[440px] flex items-center justify-center cursor-pointer shrink-0"
          onClick={sendToBack}
          title="Click to cycle next photo"
        >
          {cards.map((photoIdx, stackPos) => {
            const photo = PHOTOS[photoIdx];
            const isFront = stackPos === 0;
            const isMiddle = stackPos === 1;
            
            const zIndex = 30 - stackPos * 10;
            const rotate = isFront ? -2 : isMiddle ? 6 : -8;
            const scale = isFront ? 1 : isMiddle ? 0.95 : 0.90;
            const y = isFront ? 0 : isMiddle ? 10 : 20;
            const x = isFront ? 0 : isMiddle ? 12 : -12;

            return (
              <motion.div
                key={photo.id}
                layout
                initial={false}
                animate={{
                  rotate,
                  scale,
                  y,
                  x,
                  zIndex,
                  opacity: 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 26,
                }}
                className={`absolute top-4 left-1 sm:left-2 w-[260px] sm:w-[320px] bg-white rounded-[2px] p-3.5 sm:p-4 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.18)] ${
                  isFront
                    ? 'border-[1.5px] border-[#8427DE]'
                    : 'border border-neutral-300'
                }`}
              >
                {/* 4 Corner Resize Anchor Handles on Front Polaroid */}
                {isFront && (
                  <>
                    <div className="absolute -top-[4px] -left-[4px] w-[7px] h-[7px] bg-white border-[1.3px] border-[#8427DE] pointer-events-none" />
                    <div className="absolute -top-[4px] -right-[4px] w-[7px] h-[7px] bg-white border-[1.3px] border-[#8427DE] pointer-events-none" />
                    <div className="absolute -bottom-[4px] -left-[4px] w-[7px] h-[7px] bg-white border-[1.3px] border-[#8427DE] pointer-events-none" />
                    <div className="absolute -bottom-[4px] -right-[4px] w-[7px] h-[7px] bg-white border-[1.3px] border-[#8427DE] pointer-events-none" />
                  </>
                )}

                {/* Photo */}
                <div className="w-full aspect-square overflow-hidden bg-neutral-900 rounded-[2px]">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Stack index */}
                <div className="pt-2.5 pb-0.5 flex items-center justify-end">
                  <span className="text-[10px] font-mono text-neutral-400">
                    {photoIdx + 1}/3
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column: Statement Box that professionally auto-fits via cursor drag */}
        <div className="relative max-w-xl w-full flex flex-col justify-start">
          
          {/* Top Diamond Anchor / Selection Label (Intro / Frame) */}
          <div className="absolute -top-6 left-0 flex items-center gap-2 pointer-events-none z-20">
            <div className="w-[11px] h-[11px] bg-white border-[1.5px] border-[#008ff0] rotate-45 flex items-center justify-center">
              <span className="text-[8px] text-[#008ff0] font-mono font-bold -rotate-45 leading-none">+</span>
            </div>
            <span className="text-[12px] font-mono text-[#008ff0] font-semibold tracking-tight">
              My background
            </span>
          </div>

          {/* Statement Frame */}
          <motion.div
            layout
            animate={{
              minHeight: isFitted ? '260px' : '390px',
              paddingBottom: isFitted ? '36px' : '130px',
              borderColor: '#008ff0',
              boxShadow: isGrabbing
                ? '0 24px 50px -15px rgba(0, 143, 240, 0.25), 0 0 0 1px #008ff0'
                : '0 16px 40px -20px rgba(0, 143, 240, 0.12)',
            }}
            transition={{
              type: 'spring',
              stiffness: 160,
              damping: 22,
              mass: 0.95,
            }}
            className="relative w-full rounded-[2px] border-[1.5px] bg-white/90 backdrop-blur-sm p-5 sm:p-10 md:p-12 transition-colors"
          >
            {/* 4 Framer Canvas Corner Anchors */}
            <div className="absolute -top-[4.5px] -left-[4.5px] w-[8px] h-[8px] bg-white border-[1.5px] border-[#008ff0] pointer-events-none" />
            <div className="absolute -top-[4.5px] -right-[4.5px] w-[8px] h-[8px] bg-white border-[1.5px] border-[#008ff0] pointer-events-none" />
            <div className="absolute -bottom-[4.5px] -left-[4.5px] w-[8px] h-[8px] bg-white border-[1.5px] border-[#008ff0] pointer-events-none" />
            
            {/* Active Bottom-Right Corner Anchor Handle */}
            <motion.div
              animate={{
                scale: isGrabbing ? 1.4 : 1,
                backgroundColor: isGrabbing ? '#008ff0' : '#ffffff',
                borderColor: '#008ff0',
              }}
              transition={{ duration: 0.15 }}
              className="absolute -bottom-[4.5px] -right-[4.5px] w-[8px] h-[8px] border-[1.5px] pointer-events-none z-20"
            />

            {/* Midpoint Resize Knobs (Top, Bottom, Left, Right) */}
            <div className="hidden sm:block absolute top-1/2 -left-[4.5px] -translate-y-1/2 w-[8px] h-[8px] bg-white border-[1.5px] border-[#008ff0] pointer-events-none" />
            <div className="hidden sm:block absolute top-1/2 -right-[4.5px] -translate-y-1/2 w-[8px] h-[8px] bg-white border-[1.5px] border-[#008ff0] pointer-events-none" />
            <div className="hidden sm:block absolute -top-[4.5px] left-1/2 -translate-x-1/2 w-[8px] h-[8px] bg-white border-[1.5px] border-[#008ff0] pointer-events-none" />
            <motion.div
              animate={{
                backgroundColor: isGrabbing ? '#008ff0' : '#ffffff',
              }}
              className="hidden sm:block absolute -bottom-[4.5px] left-1/2 -translate-x-1/2 w-[8px] h-[8px] border-[1.5px] border-[#008ff0] pointer-events-none"
            />

            {/* Content Heading */}
            <h1 className="text-[24px] xs:text-[28px] sm:text-[36px] md:text-[40px] font-semibold text-[#111111] leading-[1.15] tracking-[-0.03em] relative z-10">
              From AI and UX to Product.
            </h1>

            {/* Content Body */}
            <p className="mt-3 sm:mt-6 text-[13.5px] sm:text-[15.5px] text-neutral-600 leading-[1.65] relative z-10">
              I started with AI and technology, moved into UX, and gradually found myself more interested in the product decisions behind what I was designing.
              <br /><br />
              Since then, I've worked across marketplaces, AI, EdTech, and productivity products, learning by researching, designing, building, testing, and shipping.
            </p>

            {/* Interactive "Auto-fit Content" Canvas Cursor (100% Transparent, No Box Container) */}
            <motion.div
              layout
              animate={
                stage === 0
                  ? {
                      x: 32,
                      y: 38,
                      scale: 1,
                    }
                  : stage === 1
                  ? {
                      x: 0,
                      y: 0,
                      scale: 1,
                    }
                  : stage === 2
                  ? {
                      x: 0,
                      y: 0,
                      scale: 0.88,
                    }
                  : stage === 3
                  ? {
                      x: -4,
                      y: -4,
                      scale: 0.90,
                    }
                  : {
                      x: [14, 18, 12, 14],
                      y: [16, 20, 14, 16],
                      scale: 1,
                    }
              }
              transition={
                stage === 4
                  ? {
                      duration: 3.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
                  : stage === 1
                  ? {
                      duration: 0.9,
                      ease: [0.25, 0.1, 0.25, 1],
                    }
                  : stage === 3
                  ? {
                      type: 'spring',
                      stiffness: 160,
                      damping: 22,
                    }
                  : {
                      duration: 0.2,
                    }
              }
              className="absolute bottom-0 right-0 z-30 flex items-start gap-1 pointer-events-none origin-top-left bg-transparent"
            >
              {/* Clean Green SVG Arrow Cursor matching Framer's exact canvas tool */}
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

              {/* Clean "Charan Teja" Badge Pill */}
              <div className="px-3 py-1 rounded-full bg-[#039855] text-white text-[12px] font-medium leading-none tracking-tight shadow-[0_2px_8px_rgba(3,152,85,0.30)] whitespace-nowrap mt-2">
                Charan Teja
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
