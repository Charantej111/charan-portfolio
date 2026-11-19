import React from 'react';
import { motion } from 'framer-motion';

export default function RocketSticker() {
  return (
    <motion.div
      className="absolute -bottom-[40px] sm:-bottom-[60px] md:-bottom-[75px] -left-[30px] sm:-left-[55px] md:-left-[75px] w-[85px] sm:w-[110px] md:w-[135px] z-20 select-none pointer-events-none cursor-default"
      initial={{ opacity: 0.001, scale: 0, x: 0, y: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: [0, 12, 0],
        y: [0, -14, 0],
        rotate: [-14, -8, -14],
      }}
      transition={{
        opacity: { duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] },
        scale: { type: 'spring', damping: 30, stiffness: 400, mass: 2, delay: 0.7 },
        x: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: [0.44, 0, 0.56, 1],
          delay: 1.3,
        },
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: [0.44, 0, 0.56, 1],
          delay: 1.3,
        },
        rotate: {
          duration: 4,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
          delay: 1.3,
        },
      }}
      style={{
        filter: 'hue-rotate(199deg)',
        WebkitFilter: 'hue-rotate(199deg)',
      }}
    >
      <img
        src="/rocket.svg"
        alt="Rocket"
        className="w-full h-auto object-contain drop-shadow-md select-none pointer-events-none"
        draggable={false}
      />
    </motion.div>
  );
}
