import React from 'react';
import { motion } from 'framer-motion';

const QUOTES = [
  {
    id: 1,
    quote: "Users don't care how elegant the system is. They care whether the problem gets solved.",
    role: "Product & UX",
    borderColor: "#039754",
  },
  {
    id: 2,
    quote: "A marketplace isn't one product. It's several products that have to work together.",
    role: "Product & Operations",
    borderColor: "#008ff0",
  },
  {
    id: 3,
    quote: "AI is easy to demo. Making AI feedback useful is the hard part.",
    role: "AI Product",
    borderColor: "#8427de",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full pt-4 pb-10 sm:py-16 md:py-24 px-4 sm:px-6 flex flex-col items-center select-none z-10">
      
      {/* Header Tag */}
      <div className="flex flex-col items-center gap-2.5 sm:gap-4 mb-6 sm:mb-12 md:mb-16 z-10 text-center">
        <div className="relative px-4 py-1.5 rounded-[2px] border-[1.3px] border-[#039754] bg-[#FFFCF4]">
          <div className="absolute -top-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#039754] pointer-events-none" />
          <div className="absolute -top-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#039754] pointer-events-none" />
          <div className="absolute -bottom-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#039754] pointer-events-none" />
          <div className="absolute -bottom-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#039754] pointer-events-none" />

          <span className="text-[13px] font-mono font-medium text-[#111111] tracking-tight">
            Lessons from building
          </span>
        </div>

        <h2 className="text-[26px] sm:text-[38px] md:text-[44px] font-semibold text-[#111111] tracking-[-0.03em] text-center">
          A few things I've learned
        </h2>
      </div>

      {/* Quote Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 z-10">
        {QUOTES.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6, transition: { type: 'spring', stiffness: 350, damping: 22 } }}
            className="relative rounded-[2px] border-[1.3px] bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)]"
            style={{ borderColor: item.borderColor }}
          >
            {/* 4 Corner Anchor Handles */}
            <div
              className="absolute -top-[4px] -left-[4px] w-[7px] h-[7px] bg-white border-[1.3px] pointer-events-none"
              style={{ borderColor: item.borderColor }}
            />
            <div
              className="absolute -top-[4px] -right-[4px] w-[7px] h-[7px] bg-white border-[1.3px] pointer-events-none"
              style={{ borderColor: item.borderColor }}
            />
            <div
              className="absolute -bottom-[4px] -left-[4px] w-[7px] h-[7px] bg-white border-[1.3px] pointer-events-none"
              style={{ borderColor: item.borderColor }}
            />
            <div
              className="absolute -bottom-[4px] -right-[4px] w-[7px] h-[7px] bg-white border-[1.3px] pointer-events-none"
              style={{ borderColor: item.borderColor }}
            />

            {/* Quote Symbol & Content */}
            <div>
              <span
                className="text-[32px] sm:text-[40px] font-serif leading-none block mb-2 select-none"
                style={{ color: item.borderColor }}
              >
                “
              </span>
              <p className="text-[15px] sm:text-[17px] font-medium text-[#111111] leading-[1.55]">
                {item.quote}
              </p>
            </div>

            {/* Author Attribution */}
            <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-col">
              <span className="text-[13px] sm:text-[14px] font-mono font-medium text-neutral-600">
                {item.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
