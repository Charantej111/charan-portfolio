import React from 'react';
import { motion } from 'framer-motion';

export default function RocketSticker() {
  return (
    <motion.div
      className="absolute bottom-6 sm:bottom-8 left-[12%] sm:left-[15%] md:left-[17%] z-20 cursor-pointer select-none"
      initial={{ opacity: 0, scale: 0.85, y: 15 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [-4, 4, -4],
        rotate: [12, 18, 12]
      }}
      transition={{
        opacity: { duration: 0.6, delay: 0.25 },
        scale: { duration: 0.6, delay: 0.25 },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
      whileHover={{ scale: 1.12, rotate: 24 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src="/rocket.svg"
        alt="Rocket Sticker"
        className="w-14 sm:w-16 md:w-[72px] h-auto drop-shadow-sm select-none pointer-events-none"
        draggable={false}
      />
    </motion.div>
  );
}
