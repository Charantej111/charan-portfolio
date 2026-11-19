import React from 'react';
import { motion } from 'framer-motion';

// Authentic 3D isometric illustration assets matching https://affinitty.framer.website/
const SERVICES = [
  {
    id: 'interaction-design',
    title: ['Interaction', 'design'],
    cardColor: '#f4ac28',
    textColor: '#111111',
    imageSrc: 'https://framerusercontent.com/images/PThbyRGjsjFqOgrHW0pM9MFYWg.png?width=1536&height=1024',
    alt: 'Interaction design 3D cube illustration',
    // Desktop Framer Fan-out: rotate 2deg, x offset -350px
    desktopRotate: 2,
    desktopX: -350,
  },
  {
    id: 'user-research',
    title: ['User', 'research'],
    cardColor: '#008ff0',
    textColor: '#ffffff',
    imageSrc: 'https://framerusercontent.com/images/fUOGkMjpaxheOKBADSKZMeXbCs.png?width=1536&height=1024',
    alt: 'User research 3D isometric cylinder illustration',
    // Desktop Framer Fan-out: rotate -5deg, x offset -100px
    desktopRotate: -5,
    desktopX: -100,
  },
  {
    id: 'ai-prototyping',
    title: ['AI', 'prototyping'],
    cardColor: '#8427de',
    textColor: '#ffffff',
    imageSrc: 'https://framerusercontent.com/images/cQjRhc5LdTED0OKUohD8ZLRh0w.png?width=1536&height=1024',
    alt: 'AI prototyping 3D isometric capsule illustration',
    // Desktop Framer Fan-out: rotate 2deg, x offset +150px
    desktopRotate: 2,
    desktopX: 150,
  },
  {
    id: 'motion-design',
    title: ['Motion', 'design'],
    cardColor: '#039754',
    textColor: '#ffffff',
    imageSrc: 'https://framerusercontent.com/images/NDCbcFqm7KpnEDqv5T17cjqzw.png?width=1536&height=1024',
    alt: 'Motion design 3D torus ring illustration',
    // Desktop Framer Fan-out: rotate -3deg, x offset +350px
    desktopRotate: -3,
    desktopX: 350,
  },
];

export default function WhatIOfferSection() {
  return (
    <section
      id="services"
      className="relative w-full pt-4 pb-10 sm:py-20 md:py-28 px-4 sm:px-6 flex flex-col items-center select-none z-10 overflow-hidden"
    >
      {/* Top Header Tag: "What I offer_" */}
      <div className="flex flex-col items-center gap-2.5 sm:gap-3 mb-6 sm:mb-14 md:mb-20 z-20">
        <div className="relative px-4 py-1.5 rounded-[2px] border-[1.3px] border-[#D68D06] bg-[#FFFCF4]">
          {/* Corner handle dots */}
          <div className="absolute -top-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#D68D06] pointer-events-none" />
          <div className="absolute -top-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#D68D06] pointer-events-none" />
          <div className="absolute -bottom-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#D68D06] pointer-events-none" />
          <div className="absolute -bottom-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#D68D06] pointer-events-none" />

          <span className="text-[13px] font-mono font-medium text-[#111111] tracking-tight">
            What I offer_
          </span>
        </div>

        <h2 className="text-[26px] sm:text-[38px] md:text-[44px] font-semibold text-[#111111] tracking-[-0.03em] text-center">
          How I can help
        </h2>
      </div>

      {/* 
        DESKTOP PRESENTATION (md & up):
        Matches Framer's exact interactive stack-and-spread physics.
        Cards start stacked in the center with y: 150 offset, and as the user scrolls into view,
        they glide smoothly outward into their respective fan positions (-350px, -100px, +150px, +350px).
      */}
      <div className="hidden md:flex relative w-full max-w-6xl h-[420px] items-center justify-center z-10">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{
              opacity: 0,
              y: 140,
              x: 0,
              rotate: 0,
              scale: 0.92,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              x: service.desktopX,
              rotate: service.desktopRotate,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              type: 'spring',
              stiffness: 140,
              damping: 22,
              mass: 0.9,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -14,
              scale: 1.05,
              rotate: 0,
              zIndex: 30,
              transition: { type: 'spring', stiffness: 350, damping: 20 },
            }}
            style={{
              backgroundColor: service.cardColor,
            }}
            className="absolute w-[260px] lg:w-[280px] h-[360px] rounded-[2px] p-6 flex flex-col items-center justify-between shadow-[0_20px_50px_-15px_rgba(0,0,0,0.22)] cursor-pointer select-none origin-bottom"
          >
            {/* Top 3D Isometric Illustration */}
            <div className="w-full h-[186px] overflow-hidden flex items-center justify-center">
              <img
                src={service.imageSrc}
                alt={service.alt}
                className="w-full h-full object-contain filter-none drop-shadow-md"
                loading="lazy"
              />
            </div>

            {/* Bottom Stacked Typography */}
            <div className="w-full flex flex-col items-center text-center mt-2">
              {service.title.map((line, i) => (
                <span
                  key={i}
                  style={{ color: service.textColor }}
                  className="text-[24px] font-semibold tracking-[-0.03em] leading-[1.12]"
                >
                  {line}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 
        MOBILE / TABLET PRESENTATION (< md):
        Responsive staggered cards scrolling into view cleanly with natural tilt
      */}
      <div className="flex md:hidden flex-col sm:grid sm:grid-cols-2 gap-3.5 sm:gap-6 w-full max-w-sm sm:max-w-xl z-10">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              },
            }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { type: 'spring', stiffness: 350, damping: 20 },
            }}
            style={{
              backgroundColor: service.cardColor,
            }}
            className="w-full h-[250px] xs:h-[270px] sm:h-[320px] rounded-[2px] p-4 xs:p-5 sm:p-6 flex flex-col items-center justify-between shadow-[0_16px_40px_-15px_rgba(0,0,0,0.2)] cursor-pointer"
          >
            {/* Top 3D Isometric Illustration */}
            <div className="w-full h-[130px] xs:h-[145px] sm:h-[170px] overflow-hidden flex items-center justify-center">
              <img
                src={service.imageSrc}
                alt={service.alt}
                className="w-full h-full object-contain filter-none"
                loading="lazy"
              />
            </div>

            {/* Bottom Stacked Typography */}
            <div className="w-full flex flex-col items-center text-center mt-1 sm:mt-2">
              {service.title.map((line, i) => (
                <span
                  key={i}
                  style={{ color: service.textColor }}
                  className="text-[18px] xs:text-[20px] sm:text-[22px] font-semibold tracking-[-0.03em] leading-[1.12]"
                >
                  {line}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
