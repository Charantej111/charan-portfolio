import React from 'react';

export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Subtle Coordinate Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-65" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="canvas-grid-pattern"
            width="44"
            height="44"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 44 0 L 0 0 0 44"
              fill="none"
              stroke="#E8E0D2"
              strokeWidth="0.85"
              strokeDasharray="none"
            />
            {/* Fine coordinate dots at intersections */}
            <circle cx="0" cy="0" r="1" fill="#DFD6C6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#canvas-grid-pattern)" />
      </svg>
    </div>
  );
}
