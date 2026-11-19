import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

const defaultPlacement = { x: 0, y: 0, rotation: 0, scale: 1 };

const defaultGradients = [
  { enabled: true, start: "rgb(244, 81, 59)", middle: "rgb(245, 189, 59)", end: "rgb(255, 163, 150)", angle: 0 },
  { enabled: true, start: "rgb(23, 207, 105)", middle: "rgb(23, 207, 105)", end: "rgb(97, 250, 166)", angle: 20 },
  { enabled: false, start: "#BF5AF2", middle: "#FF2D55", end: "#FF9500", angle: 35 },
  { enabled: false, start: "#FF00A8", middle: "#FF375F", end: "#FF9F0A", angle: -25 },
  { enabled: false, start: "#00C7BE", middle: "#30D158", end: "#D7FF00", angle: 15 },
  { enabled: false, start: "#FF9500", middle: "#FFCC00", end: "#D7FF00", angle: -20 },
];

export default function AnimatedRibbons({
  pathSource = "preset",
  customLine1,
  customLine2,
  customLine3,
  customLine4,
  customLine5,
  customLine6,
  background = "transparent",
  grain = false,
  grainAmount = 0,
  grainSize = 0.15,
  red = "rgb(244, 81, 59)",
  blue = "rgb(23, 207, 105)",
  pink = "rgb(203, 116, 180)",
  line4Color = "rgb(203, 116, 180)",
  green = "rgb(200, 188, 78)",
  gold = "rgb(244, 172, 40)",
  line1Gradient = defaultGradients[0],
  line2Gradient = defaultGradients[1],
  line3Gradient = defaultGradients[2],
  line4Gradient = defaultGradients[3],
  line5Gradient = defaultGradients[4],
  line6Gradient = defaultGradients[5],
  strokeWidth = 20,
  lineCount = 2,
  redPlacement = { rotation: 0, scale: 1, x: 10, y: 180 },
  bluePlacement = { rotation: 90, scale: 0.85, x: -110, y: -150 },
  pinkTopPlacement = defaultPlacement,
  pinkSidePlacement = defaultPlacement,
  greenPlacement = defaultPlacement,
  goldPlacement = defaultPlacement,
  animate = true,
  animationTrigger = "onLoad",
  inViewAmount = 30,
  playOnce = true,
  scrollStart = 10,
  scrollEnd = 90,
  scrollStagger = 6,
  scrollReverse = false,
  duration = 4,
  startDelay = 0.7,
  stagger = 0.32,
  easing = "easeInOut",
  rounded = true,
  style,
}) {
  const rootRef = useRef(null);
  const customRootRef = useRef(null);
  const presetPathRefs = useRef([]);

  const layerInView = useInView(rootRef, {
    amount: Math.max(0.01, Math.min(1, inViewAmount / 100)),
    once: playOnce,
  });

  const isScrollDriven = animate && animationTrigger === "scroll";
  const shouldPlay =
    animate &&
    animationTrigger !== "scroll" &&
    (animationTrigger === "onLoad" || layerInView);

  const id = React.useId().replace(/:/g, "");
  const drawName = `drawRibbon${id}`;
  const grainPatternId = `backgroundGrain${id}`;

  const grainDots = React.useMemo(() => {
    const tileSize = 180;
    return Array.from({ length: 260 }, (_, index) => {
      const x = (index * 73 + ((index * index * 19) % 167)) % tileSize;
      const y = (index * 109 + ((index * index * 11) % 173)) % tileSize;
      const variation = ((index * 37) % 100) / 100;
      const radius = (0.22 + variation * 0.58) * Math.max(0.45, grainSize);
      const light = index % 7 === 0;
      const opacity = 0.16 + (((index * 43) % 100) / 100) * 0.34;
      return { x, y, radius, light, opacity };
    });
  }, [grainSize]);

  const easingValue = {
    easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
    easeInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
    linear: "linear",
  }[easing] || "cubic-bezier(0.65, 0, 0.35, 1)";

  const colors = [red, blue, pink, line4Color, green, gold];
  const gradientSettings = [
    line1Gradient,
    line2Gradient,
    line3Gradient,
    line4Gradient,
    line5Gradient,
    line6Gradient,
  ];
  const placements = [
    redPlacement,
    bluePlacement,
    pinkTopPlacement,
    pinkSidePlacement,
    greenPlacement,
    goldPlacement,
  ];
  const customLines = [
    customLine1,
    customLine2,
    customLine3,
    customLine4,
    customLine5,
    customLine6,
  ];

  const visibleCount = Math.max(1, Math.min(6, Math.round(lineCount)));

  const ribbons = [
    {
      path: "M -95 322 C 4 366, 88 313, 116 264 C 140 222, 116 151, 74 154 C 24 158, 29 246, 91 270 C 168 300, 208 260, 214 176 C 225 40, 280 5, 390 -34",
      color: red,
    },
    {
      path: "M 93 -102 C 131 74, 236 151, 355 147 C 474 143, 526 59, 573 -76",
      color: blue,
    },
    {
      path: "M 451 -88 C 406 20, 427 75, 507 91 C 591 108, 529 163, 542 226 C 551 270, 584 291, 650 288",
      color: pink,
    },
    {
      path: "M -92 401 C -10 391, 83 394, 92 462 C 98 507, 56 540, -52 540",
      color: line4Color,
    },
    {
      path: "M -72 742 C 27 778, 49 638, 106 672 C 151 699, 82 772, 181 790 C 308 813, 250 864, 181 900 C 123 931, 160 982, 230 1047",
      color: green,
    },
    {
      path: "M 668 722 C 579 523, 449 541, 436 674 C 426 785, 520 842, 445 924 C 382 994, 295 927, 176 953 C 132 963, 113 1004, 126 1062",
      color: gold,
    },
  ];

  // Custom paths animation effect
  React.useEffect(() => {
    if (pathSource !== "custom") return;
    const root = customRootRef.current;
    if (!root || typeof window === "undefined") return;

    const activeAnimations = [];
    const frame = window.requestAnimationFrame(() => {
      const groups = Array.from(root.querySelectorAll("[data-custom-line]"));
      groups.forEach((group, index) => {
        const paths = Array.from(group.querySelectorAll("path"));
        paths.forEach((path) => {
          let length = 0;
          try {
            length = path.getTotalLength();
          } catch {
            return;
          }

          path.style.fill = "none";
          path.style.stroke = gradientSettings[index]?.enabled
            ? `url(#lineGradient${id}-${index})`
            : colors[index] || colors[0];
          path.style.strokeWidth = String(strokeWidth);
          path.style.strokeLinecap = rounded ? "round" : "butt";
          path.style.strokeLinejoin = rounded ? "round" : "miter";

          if (animate && length > 0) {
            path.style.strokeDasharray = String(length);
            path.style.strokeDashoffset = String(length);

            if (!isScrollDriven && shouldPlay) {
              const animation = path.animate(
                [
                  { strokeDashoffset: String(length) },
                  { strokeDashoffset: "0" },
                ],
                {
                  duration: Math.max(0.1, duration) * 1000,
                  delay: Math.max(0, startDelay + index * stagger) * 1000,
                  easing: easingValue,
                  iterations: 1,
                  fill: "forwards",
                }
              );
              activeAnimations.push(animation);
            }
          } else {
            path.style.strokeDasharray = "none";
            path.style.strokeDashoffset = "0";
          }
        });
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      activeAnimations.forEach((animation) => animation.cancel());
    };
  }, [
    pathSource,
    shouldPlay,
    isScrollDriven,
    animate,
    duration,
    startDelay,
    stagger,
    easingValue,
    strokeWidth,
    rounded,
    visibleCount,
    id,
    colors,
    gradientSettings,
  ]);

  // Scroll scrubbing effect
  React.useEffect(() => {
    if (!isScrollDriven || typeof window === "undefined") return;

    let frame = 0;
    const clamp = (value) => Math.max(0, Math.min(1, value));

    const updateFromScroll = () => {
      frame = 0;
      const root = rootRef.current;
      if (!root) return;

      const rect = root.getBoundingClientRect();
      const travel = Math.max(1, window.innerHeight + rect.height);
      const viewportProgress = clamp((window.innerHeight - rect.top) / travel);
      const rangeStart = clamp(Math.min(scrollStart, scrollEnd) / 100);
      const rangeEnd = clamp(Math.max(scrollStart, scrollEnd) / 100);
      const progress = clamp(
        (viewportProgress - rangeStart) / Math.max(0.001, rangeEnd - rangeStart)
      );
      const staggerStep = Math.max(0, scrollStagger) / 100;
      const lineDuration = Math.max(
        0.01,
        1 - staggerStep * Math.max(0, visibleCount - 1)
      );

      const lineProgress = (index) => {
        const value = clamp((progress - index * staggerStep) / lineDuration);
        return scrollReverse ? 1 - value : value;
      };

      presetPathRefs.current.forEach((path, index) => {
        if (!path || index >= visibleCount) return;
        path.style.strokeDashoffset = String(1 - lineProgress(index));
      });

      const customGroups = customRootRef.current?.querySelectorAll("[data-custom-line]");
      customGroups?.forEach((group, index) => {
        group.querySelectorAll("path").forEach((path) => {
          let length = Number(path.dataset.ribbonLength);
          if (!Number.isFinite(length) || length <= 0) {
            try {
              length = path.getTotalLength();
              path.dataset.ribbonLength = String(length);
            } catch {
              return;
            }
          }
          path.style.strokeDasharray = String(length);
          path.style.strokeDashoffset = String(length * (1 - lineProgress(index)));
        });
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateFromScroll);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      presetPathRefs.current.forEach((path) => {
        if (path) path.style.strokeDashoffset = "";
      });
    };
  }, [
    isScrollDriven,
    pathSource,
    scrollStart,
    scrollEnd,
    scrollStagger,
    scrollReverse,
    visibleCount,
    strokeWidth,
    rounded,
    colors,
    gradientSettings,
    customLines,
  ]);

  const renderGradientDefinitions = () => (
    <defs>
      {gradientSettings.map((settings, index) => {
        const radians = ((settings?.angle ?? 0) * Math.PI) / 180;
        const x = Math.cos(radians) * 50;
        const y = Math.sin(radians) * 50;

        return (
          <linearGradient
            key={index}
            id={`lineGradient${id}-${index}`}
            x1={`${50 - x}%`}
            y1={`${50 - y}%`}
            x2={`${50 + x}%`}
            y2={`${50 + y}%`}
          >
            <stop offset="0%" stopColor={settings?.start ?? colors[index]} />
            <stop offset="50%" stopColor={settings?.middle ?? colors[index]} />
            <stop offset="100%" stopColor={settings?.end ?? colors[index]} />
          </linearGradient>
        );
      })}
    </defs>
  );

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      style={{
        ...style,
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background,
        pointerEvents: "none",
      }}
    >
      <style>{`
        @keyframes ${drawName} {
          from {
            stroke-dashoffset: 1;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
        .custom-ribbons-${id} > [data-custom-line] > * {
          width: 100% !important;
          height: 100% !important;
        }
        .custom-ribbons-${id} svg {
          width: 100% !important;
          height: 100% !important;
          overflow: visible !important;
        }
      `}</style>

      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
      >
        {renderGradientDefinitions()}
      </svg>

      {grain && grainAmount > 0 && (
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            inset: 0,
            display: "block",
            pointerEvents: "none",
            opacity: Math.min(0.5, grainAmount * 1.6),
          }}
          aria-hidden="true"
        >
          <defs>
            <pattern
              id={grainPatternId}
              width="180"
              height="180"
              patternUnits="userSpaceOnUse"
            >
              {grainDots.map((dot, index) => (
                <circle
                  key={index}
                  cx={dot.x}
                  cy={dot.y}
                  r={dot.radius}
                  fill={dot.light ? "#FFFFFF" : "#352C24"}
                  opacity={dot.opacity}
                />
              ))}
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#${grainPatternId})`}
          />
        </svg>
      )}

      {pathSource === "preset" ? (
        <svg
          viewBox="0 0 600 1000"
          preserveAspectRatio="xMidYMid slice"
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            inset: 0,
            display: "block",
          }}
        >
          {ribbons.slice(0, visibleCount).map((ribbon, index) => {
            const drawPrepared = animate;
            const shouldAnimate = drawPrepared && !isScrollDriven && shouldPlay;
            const placement = placements[index] || defaultPlacement;
            const placementTransform = `translate(${placement.x} ${placement.y}) translate(300 500) rotate(${placement.rotation}) scale(${placement.scale}) translate(-300 -500)`;

            return (
              <path
                key={index}
                ref={(path) => {
                  presetPathRefs.current[index] = path;
                }}
                d={ribbon.path}
                transform={placementTransform}
                pathLength={1}
                fill="none"
                stroke={
                  gradientSettings[index]?.enabled
                    ? `url(#lineGradient${id}-${index})`
                    : ribbon.color
                }
                strokeWidth={strokeWidth}
                strokeLinecap={rounded ? "round" : "butt"}
                strokeLinejoin={rounded ? "round" : "miter"}
                strokeDasharray={drawPrepared ? 1 : undefined}
                strokeDashoffset={drawPrepared ? 1 : 0}
                style={
                  shouldAnimate
                    ? {
                        animation: `${drawName} ${duration}s ${easingValue} ${
                          startDelay + index * stagger
                        }s 1 forwards`,
                      }
                    : undefined
                }
              />
            );
          })}
        </svg>
      ) : (
        <div
          ref={customRootRef}
          className={`custom-ribbons-${id}`}
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
          }}
        >
          {customLines.slice(0, visibleCount).map((line, index) => {
            if (!line) return null;
            const placement = placements[index] || defaultPlacement;
            return (
              <div
                key={index}
                data-custom-line={index + 1}
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `translate(${placement.x}px, ${placement.y}px) rotate(${placement.rotation}deg) scale(${placement.scale})`,
                  transformOrigin: "center",
                }}
              >
                {line}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
