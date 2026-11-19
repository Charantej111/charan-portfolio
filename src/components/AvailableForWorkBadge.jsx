import React from 'react';

// Exact Framer 3x3 matrix ripple loader configuration:
// cellSize: 4px, spacing: 1px, radius: 4px (circle)
// Total dimension: (4px cell + 2px margin) * 3 = 18px ~ 20px
// Color wave: startColor rgb(49, 232, 131) -> endColor rgb(7, 163, 30)
// Delay sequence: delay: 0.1s, duration: 1.5s
const MATRIX = [
  { delay: 0.0, blend: 1.0 },
  { delay: 0.1, blend: 0.875 },
  { delay: 0.2, blend: 0.75 },
  { delay: 0.1, blend: 0.625 },
  { delay: 0.2, blend: 0.5 },
  { delay: 0.2, blend: 0.375 },
  { delay: 0.3, blend: 0.25 },
  { delay: 0.3, blend: 0.125 },
  { delay: 0.4, blend: 0.0 },
];

export default function AvailableForWorkBadge() {
  return (
    <div className="flex items-center gap-2 select-none pointer-events-none">
      <style>{`
        @keyframes framer-ripple-cell {
          0% {
            background-color: transparent;
            opacity: 0.15;
            transform: scale(0.85);
          }
          30% {
            background-color: var(--cell-col);
            opacity: 1;
            transform: scale(1.05);
            box-shadow: 0 0 5px var(--cell-col);
          }
          65%, 100% {
            background-color: transparent;
            opacity: 0.15;
            transform: scale(0.85);
          }
        }
      `}</style>

      {/* Available for work text (order 1 in desktop/final state) */}
      <span className="order-2 text-[14px] font-medium text-[#060606]/60 tracking-[-0.01em] whitespace-nowrap leading-[1.4em]">
        Available for work
      </span>

      {/* 3x3 Animated Matrix Loader (order 0 in desktop/final state, 20x20 container) */}
      <div className="order-1 relative w-[18px] h-[18px] flex flex-wrap shrink-0 items-center justify-center">
        {MATRIX.map((cell, idx) => {
          const r = Math.round(49 * cell.blend + 7 * (1 - cell.blend));
          const g = Math.round(232 * cell.blend + 163 * (1 - cell.blend));
          const b = Math.round(131 * cell.blend + 30 * (1 - cell.blend));
          const col = `rgb(${r}, ${g}, ${b})`;

          return (
            <div
              key={idx}
              className="w-[4px] h-[4px] m-[1px] rounded-full shrink-0"
              style={{
                '--cell-col': col,
                animation: `framer-ripple-cell 1.5s infinite ease-in-out`,
                animationDelay: `${cell.delay}s`,
                backgroundColor: col,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
