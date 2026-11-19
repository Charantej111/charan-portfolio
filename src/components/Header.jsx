import React from 'react';
import { motion } from 'framer-motion';

export default function Header({ onHomeClick }) {
  return (
    <header className="w-full pt-8 pb-4 flex justify-center items-center z-20 select-none">
      <motion.button
        onClick={onHomeClick}
        type="button"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-signature text-3xl sm:text-4xl text-neutral-800 tracking-wide hover:scale-105 transition-transform duration-200 cursor-pointer bg-transparent border-none outline-none"
        title="Go to Home"
      >
        Charan Tej
      </motion.button>
    </header>
  );
}
