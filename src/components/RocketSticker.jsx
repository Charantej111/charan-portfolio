import React from 'react';
import { motion } from 'framer-motion';

export default function RocketSticker() {
  return (
    <motion.div
      className="absolute -bottom-[120px] sm:-bottom-[170px] md:-bottom-[224px] -left-[40px] sm:-left-[140px] md:-left-[224px] w-[110px] sm:w-[150px] md:w-[191px] h-[88px] sm:h-[120px] md:h-[153px] z-20 select-none pointer-events-none cursor-default"
      initial={{ opacity: 0.001, scale: 0, x: 0, y: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: [0, 20, 0],
        y: [0, -20, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] },
        scale: { type: 'spring', damping: 30, stiffness: 400, mass: 2, delay: 0.7 },
        x: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: [0.44, 0, 0.56, 1],
          delay: 1.3,
        },
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: [0.44, 0, 0.56, 1],
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
        className="w-full h-full object-contain drop-shadow-md select-none pointer-events-none"
        draggable={false}
      />
    </motion.div>
  );
}
