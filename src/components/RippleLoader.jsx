import React from 'react';

// Exact Framer Affinitty RippleLoader component:
// 3x3 grid with animation delays: [0, 1, 2, 1, 2, 2, 3, 3, 4] * delay
export default function RippleLoader({
  cellSize = 14,
  spacing = 2,
  radius = 3,
  duration = 1.2,
  delay = 0.08,
  startColor = '#00FF87',
  endColor = '#60EFFF',
  background = 'transparent',
  style = {},
  className = '',
}) {
  const cellPositions = [0, 1, 2, 1, 2, 2, 3, 3, 4];
  const totalDimension = 3 * (cellSize + spacing * 2);

  return (
    <div
      role="status"
      aria-label="Loading"
      className={className}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background,
        ...style,
      }}
    >
      <style>{`
        @keyframes framer-ripple-loader {
          0% {
            background-color: transparent;
            opacity: 0.15;
          }
          30% {
            background-color: var(--cell-color);
            opacity: 1;
            box-shadow: 0 0 6px var(--cell-color);
          }
          60%, 100% {
            background-color: transparent;
            opacity: 0.15;
          }
        }
      `}</style>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: totalDimension,
          height: totalDimension,
          flexShrink: 0,
        }}
      >
        {cellPositions.map((posIndex, idx) => {
          const ratio = (cellPositions.length - 1 - idx) / (cellPositions.length - 1);
          // color-mix equivalent in srgb between startColor and endColor
          return (
            <div
              key={idx}
              style={{
                flex: `0 0 ${cellSize}px`,
                width: cellSize,
                height: cellSize,
                margin: spacing,
                boxSizing: 'border-box',
                borderRadius: radius,
                backgroundColor: 'transparent',
                animation: `framer-ripple-loader ${duration}s ease infinite`,
                animationDelay: `${posIndex * delay}s`,
                '--cell-color': `color-mix(in srgb, ${startColor} ${ratio * 100}%, ${endColor})`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
