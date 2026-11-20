import React from 'react';
import { motion } from 'framer-motion';

export default function PenToolSticker() {
  return (
    <motion.div
      className="absolute -top-[55px] xs:-top-[70px] sm:-top-[190px] md:-top-[250px] -right-[15px] xs:-right-[25px] sm:-right-[110px] md:-right-[180px] w-[75px] xs:w-[90px] sm:w-[160px] md:w-[200px] h-[75px] xs:h-[90px] sm:h-[160px] md:h-[200px] z-20 select-none pointer-events-none cursor-default"
      initial={{ opacity: 0.001, scale: 0, rotate: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
        scale: { type: 'spring', damping: 30, stiffness: 400, mass: 2, delay: 0.6 },
        rotate: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: [0.44, 0, 0.56, 1],
          delay: 1.2,
        },
      }}
      style={{
        filter: 'hue-rotate(323deg)',
        WebkitFilter: 'hue-rotate(323deg)',
      }}
    >
      <img
        src="/pen-tool.svg"
        alt="Pen Tool"
        className="w-full h-full object-contain drop-shadow-md select-none pointer-events-none"
        draggable={false}
      />
    </motion.div>
  );
}
