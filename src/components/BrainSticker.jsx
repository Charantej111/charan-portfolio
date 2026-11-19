import React from 'react';
import { motion } from 'framer-motion';

export default function BrainSticker({
  className = "absolute -bottom-[40px] -right-[40px] sm:-bottom-[54px] sm:-right-[54px] md:-bottom-[64px] md:-right-[64px] w-[100px] sm:w-[125px] md:w-[150px] aspect-square z-20 select-none pointer-events-none cursor-default"
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: [0, -20, 0] }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        opacity: { duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
        scale: { type: 'spring', damping: 30, stiffness: 400, mass: 2, delay: 0.4 },
        rotate: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: [0.44, 0, 0.56, 1],
          delay: 1.0,
        },
      }}
      style={{
        filter: 'hue-rotate(269deg)',
        WebkitFilter: 'hue-rotate(269deg)',
      }}
    >
      <img
        src="/brain.svg"
        alt="Brain Sticker"
        className="w-full h-full object-contain drop-shadow-md select-none pointer-events-none"
        draggable={false}
      />
    </motion.div>
  );
}
