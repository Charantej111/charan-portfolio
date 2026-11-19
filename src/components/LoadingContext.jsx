import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingContext = createContext({
  isLoading: false,
  triggerLoading: () => {},
});

export function useGlobalLoading() {
  return useContext(LoadingContext);
}

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const triggerLoading = useCallback((durationMs = 900, callback) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (callback) callback();
    }, durationMs);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, triggerLoading }}>
      {children}

      {/* Framer Canvas-Style Minimalist Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FFFCF4]/90 backdrop-blur-md select-none"
          >
            {/* Design canvas selection frame around loader */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 rounded-[4px] border-[1.5px] border-[#8427DE] bg-white shadow-[0_20px_50px_-15px_rgba(132,39,222,0.12)] flex flex-col items-center gap-6"
            >
              {/* 4 Corner Framer Resize Square Handles */}
              <div className="absolute -top-[4px] -left-[4px] w-[7px] h-[7px] bg-white border-[1.3px] border-[#8427DE] pointer-events-none" />
              <div className="absolute -top-[4px] -right-[4px] w-[7px] h-[7px] bg-white border-[1.3px] border-[#8427DE] pointer-events-none" />
              <div className="absolute -bottom-[4px] -left-[4px] w-[7px] h-[7px] bg-white border-[1.3px] border-[#8427DE] pointer-events-none" />
              <div className="absolute -bottom-[4px] -right-[4px] w-[7px] h-[7px] bg-white border-[1.3px] border-[#8427DE] pointer-events-none" />

              {/* Top Label Tag */}
              <div className="px-2.5 py-0.5 rounded-[2px] bg-[#8427DE]/10 text-[11px] font-mono font-medium text-[#8427DE]">
                loading_state
              </div>

              {/* High-End Minimalist Progress Bar and Pulse */}
              <div className="flex flex-col items-center gap-3 w-48">
                <div className="relative w-full h-[3px] bg-neutral-100 overflow-hidden rounded-full">
                  <motion.div
                    className="absolute top-0 bottom-0 left-0 bg-[#8427DE] rounded-full"
                    initial={{ left: '0%', right: '100%' }}
                    animate={{
                      left: ['0%', '20%', '100%'],
                      right: ['100%', '0%', '0%'],
                    }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: [0.65, 0, 0.35, 1],
                    }}
                  />
                </div>

                {/* Status text */}
                <span className="text-[12px] font-mono font-medium text-neutral-500 tracking-tight">
                  loading...
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LoadingContext.Provider>
  );
}
