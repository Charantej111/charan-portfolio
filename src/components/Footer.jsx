import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const emailAddress = 'career.charantej@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative w-full bg-[#050505] text-white pt-32 pb-24 px-4 sm:px-8 overflow-hidden select-none z-10">

      {/* Elegantly Animated Flowing White Ribbon Trails */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-80 md:opacity-45 transition-opacity duration-700">
        <svg
          viewBox="0 0 1440 700"
          className="w-full h-full object-cover preserve-3d"
          fill="none"
        >
          <defs>
            {/* White Soft Radiant Gradient 1 */}
            <linearGradient id="white-ribbon-grad-1" x1="0%" y1="20%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="25%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="65%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="85%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            {/* White Soft Radiant Gradient 2 */}
            <linearGradient id="white-ribbon-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="30%" stopColor="#ffffff" stopOpacity="0.18" />
              <stop offset="60%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="90%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <filter id="ribbon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Primary Flowing Ribbon Path */}
          <motion.path
            d="M -120 480 C 180 620, 260 140, 560 220 C 860 300, 940 680, 1220 380 C 1360 220, 1460 260, 1580 340"
            stroke="url(#white-ribbon-grad-1)"
            strokeWidth="18"
            strokeLinecap="round"
            filter="url(#ribbon-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{
              pathLength: { duration: 3.2, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: 1.2 },
            }}
          />

          {/* Secondary Counter-Flowing Ribbon Path */}
          <motion.path
            d="M -80 180 C 220 40, 420 540, 720 360 C 1020 180, 1140 520, 1520 220"
            stroke="url(#white-ribbon-grad-2)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#ribbon-glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{
              pathLength: { duration: 3.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
              opacity: { duration: 1.4, delay: 0.2 },
            }}
          />

          {/* Continuous Subtle Floating Physics */}
          <motion.path
            d="M 100 580 C 380 420, 680 660, 980 460 C 1240 280, 1380 380, 1540 320"
            stroke="url(#white-ribbon-grad-1)"
            strokeWidth="5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{
              pathLength: { duration: 4.0, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
              opacity: { duration: 1.5, delay: 0.4 },
            }}
          />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center z-10">

        {/* Top Tag: "Ready for the work ?" */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[17px] sm:text-[20px] font-medium text-neutral-300 tracking-[-0.01em]"
        >
          Ready for the work ?
        </motion.p>

        {/* Huge Hero Text: "Let's talk" */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-[70px] sm:text-[110px] md:text-[140px] font-bold text-white tracking-[-0.04em] leading-[0.95]"
        >
          Let's talk
        </motion.h2>

        {/* Framer Canvas Selection Box Around Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-16 sm:mt-20 w-full max-w-[800px] rounded-[2px] border border-neutral-700/80 bg-neutral-900/60 backdrop-blur-md p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
        >
          {/* Framer Selection Corner Handles */}
          <div className="absolute -top-[4px] -left-[4px] w-[7px] h-[7px] bg-[#050505] border border-neutral-400 pointer-events-none" />
          <div className="absolute -top-[4px] -right-[4px] w-[7px] h-[7px] bg-[#050505] border border-neutral-400 pointer-events-none" />
          <div className="absolute -bottom-[4px] -left-[4px] w-[7px] h-[7px] bg-[#050505] border border-neutral-400 pointer-events-none" />
          <div className="absolute -bottom-[4px] -right-[4px] w-[7px] h-[7px] bg-[#050505] border border-neutral-400 pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10">

            {/* Left: Collaboration Status */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="text-[13px] sm:text-[14px] text-neutral-400 font-medium">
                Currently open for collaboration
              </span>

              {/* Email Copy Button with LinkedIn Beside It */}
              <div className="mt-3 flex items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="group relative inline-flex items-center gap-2.5 px-4 py-2 rounded-[6px] bg-neutral-800 hover:bg-neutral-700/90 border border-neutral-600/60 text-white text-[13px] sm:text-[14px] font-mono transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.98]"
                  title="Click to copy email address"
                >
                  <span className="text-neutral-200 group-hover:text-white transition-colors">
                    {emailAddress}
                  </span>

                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        className="text-emerald-400 flex items-center gap-1"
                      >
                        <Check size={14} strokeWidth={2.6} />
                        <span className="text-[11px] font-sans text-emerald-400">Copied!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.6, opacity: 0 }}
                        className="text-neutral-400 group-hover:text-white transition-colors"
                      >
                        <Copy size={13} strokeWidth={2.2} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                {/* LinkedIn Icon beside email */}
                <a
                  href="https://www.linkedin.com/in/charan-tej-neelam-bb0a9a302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-[6px] bg-neutral-800 hover:bg-neutral-700 border border-neutral-600/60 text-neutral-300 hover:text-white transition-all duration-200 cursor-pointer active:scale-[0.95] flex items-center justify-center"
                  title="Connect on LinkedIn"
                  aria-label="LinkedIn Profile"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* GitHub Icon beside LinkedIn */}
                <a
                  href="https://github.com/Charantej111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-[6px] bg-neutral-800 hover:bg-neutral-700 border border-neutral-600/60 text-neutral-300 hover:text-white transition-all duration-200 cursor-pointer active:scale-[0.95] flex items-center justify-center"
                  title="View GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Quick Action Contact CTA */}
            <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
              <span className="text-[13px] text-neutral-400">
                Response time
              </span>
              <span className="mt-1 text-[14px] font-medium text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Within 24 hours
              </span>
            </div>

          </div>
        </motion.div>



      </div>

    </footer>
  );
}
