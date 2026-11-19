import React from 'react';
import { motion } from 'framer-motion';

export default function BulbSticker({
  className = "absolute -top-[40px] -left-[40px] sm:-top-[54px] sm:-left-[54px] md:-top-[64px] md:-left-[64px] w-[100px] sm:w-[125px] md:w-[150px] aspect-square z-20 select-none pointer-events-none cursor-default"
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0, rotate: -15 }}
      whileInView={{ opacity: 1, scale: 1, rotate: [-15, -5, -15] }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        opacity: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
        scale: { type: 'spring', damping: 30, stiffness: 400, mass: 2, delay: 0.2 },
        rotate: {
          duration: 2.4,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: [0.44, 0, 0.56, 1],
          delay: 0.8,
        },
      }}
      style={{
        filter: 'grayscale(0.35) hue-rotate(162deg)',
        WebkitFilter: 'grayscale(0.35) hue-rotate(162deg)',
      }}
    >
      <img
        src="/bulb.svg"
        alt="Idea Bulb Sticker"
        className="w-full h-full object-contain drop-shadow-md select-none pointer-events-none"
        draggable={false}
      />
    </motion.div>
  );
}
