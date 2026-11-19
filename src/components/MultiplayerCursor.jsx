import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function MultiplayerCursor() {
  // Soft spring physics for realistic collaborative cursor trail
  const springConfig = { damping: 25, stiffness: 160, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Gentle parallax reaction to mouse
      const offsetX = (e.clientX - window.innerWidth / 2) * 0.05;
      const offsetY = (e.clientY - window.innerHeight / 2) * 0.05;
      cursorX.set(offsetX);
      cursorY.set(offsetY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{ x: cursorX, y: cursorY }}
      className="absolute -bottom-8 -right-8 sm:-bottom-12 sm:-right-16 md:-bottom-14 md:-right-24 z-30 pointer-events-none select-none flex items-start"
      initial={{ opacity: 0, x: -60, y: -40, scale: 0.9 }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        y: 0, 
        scale: 1 
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.4
      }}
    >
      {/* Gentle Floating Idle Loop */}
      <motion.div
        className="flex items-start"
        animate={{
          y: [0, -5, 0],
          x: [0, 3, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Exact Framer Multiplayer Cursor SVG */}
        <div className="shrink-0 -mr-1 z-10">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#cursor_framer_shadow)">
              <path
                d="M11.8924 23.7113L7.33378 7.71982C7.0984 6.89409 7.95602 6.18106 8.73584 6.55413L23.8385 13.7792C24.6416 14.1634 24.5812 15.3159 23.7425 15.6131L17.5312 17.8139C17.3056 17.8938 17.1164 18.0511 16.9978 18.2574L13.7318 23.9361C13.2908 24.7029 12.1347 24.5616 11.8924 23.7113Z"
                fill="#039855"
              />
              <path
                d="M6.85075 7.8544C6.49768 6.61583 7.78362 5.54674 8.95335 6.10628L24.0564 13.3314C25.2607 13.9078 25.1699 15.6359 23.9119 16.0816L17.7012 18.2825C17.5885 18.3224 17.4939 18.4012 17.4346 18.5041L14.1679 24.1829C13.5065 25.3329 11.7731 25.1214 11.4093 23.8463L6.85075 7.8544Z"
                stroke="#039855"
                strokeWidth="1.2"
              />
            </g>
            <defs>
              <filter id="cursor_framer_shadow" x="4.28" y="4.45" width="23.12" height="23.98" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="#000000" floodOpacity="0.15" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Exact Comment Badge: bg rgb(3, 151, 84), border 2px solid rgb(3, 151, 84), radius 24px */}
        <div className="bg-[#039754] text-white border-2 border-[#039754] rounded-[24px] px-3.5 py-0.5 shadow-md whitespace-nowrap">
          <span className="text-[13.5px] font-medium leading-[22px] tracking-tight">
            Product manager
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}
