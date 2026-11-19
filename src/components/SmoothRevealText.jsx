import React, { useRef, useMemo } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

/**
 * Exact Framer Kn component:
 * - font: "PP Neue Montreal Medium", 44px (desktop), 36px (tablet), 32px (mobile)
 * - lineHeight: 1.2em
 * - letterSpacing: -0.01em
 * - dimColor: rgba(0, 0, 0, 0.08)
 * - accentOneText: "Product manager" (#039754)
 * - accentTwoText: "building" (#039754)
 * - textColor: #000000
 * - scroll range: 15% to 72%
 * - letter opacity transition: 80ms linear
 */
export default function SmoothRevealText({
  content = "I’m a Product manager and Framer creator with a strong focus on building intuitive, scalable, and user-centered digital experiences.",
  accentOneText = "Product manager",
  accentTwoText = "building",
  accentColor = "#039754",
  textColor = "#000000",
  dimColor = "rgba(0, 0, 0, 0.08)",
  scrollStart = 15,
  scrollEnd = 72,
  revealSpread = 8,
}) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const start = Math.max(0, Math.min(0.95, scrollStart / 100));
    const end = Math.max(start + 0.01, Math.min(1, scrollEnd / 100));
    const progress = Math.max(0, Math.min(1, (latest - start) / (end - start)));
    setScrollProgress(progress);
  });

  const { tokens, totalUnits } = useMemo(() => {
    const lowerContent = content.toLowerCase();
    const highlights = [];

    const addHighlight = (phrase, color) => {
      const term = phrase.trim().toLowerCase();
      if (!term) return;
      const idx = lowerContent.indexOf(term);
      if (idx >= 0) {
        highlights.push({ start: idx, end: idx + term.length, color });
      }
    };

    addHighlight(accentOneText, accentColor);
    addHighlight(accentTwoText, accentColor);

    const getColorAt = (index) => {
      const match = highlights.find((h) => index >= h.start && index < h.end);
      return match ? match.color : textColor;
    };

    const tokenList = [];
    const regex = /\s+|\S+/g;
    let match;
    let charCounter = 0;

    while ((match = regex.exec(content)) !== null) {
      const str = match[0];
      if (/^\s+$/.test(str)) {
        tokenList.push({ type: "space", text: str });
      } else {
        const letters = Array.from(str);
        const colors = letters.map((_, i) => getColorAt(match.index + i));
        tokenList.push({
          type: "word",
          text: str,
          colors,
          start: charCounter,
          length: letters.length,
        });
        charCounter += letters.length;
      }
    }

    return { tokens: tokenList, totalUnits: Math.max(1, charCounter) };
  }, [content, accentOneText, accentTwoText, accentColor, textColor]);

  const spread = Math.max(0.005, revealSpread / 100);

  return (
    <div
      ref={containerRef}
      className="w-full text-left font-neue font-medium leading-[1.2] tracking-[-0.01em] text-[28px] sm:text-[36px] md:text-[44px] select-none"
      style={{
        whiteSpace: "pre-wrap",
        textWrap: "balance",
      }}
    >
      {tokens.map((token, tIdx) => {
        if (token.type === "space") {
          return <span key={`space-${tIdx}`}>{token.text}</span>;
        }

        return (
          <span
            key={`word-${tIdx}`}
            className="inline-block whitespace-nowrap"
          >
            {Array.from(token.text).map((char, cIdx) => {
              const charIndex = token.start + cIdx;
              const charProgress = Math.max(
                0,
                Math.min(1, (scrollProgress - charIndex / totalUnits) / spread)
              );
              const targetColor = token.colors[cIdx] || textColor;

              return (
                <span
                  key={`char-${cIdx}`}
                  className="relative inline-block"
                  style={{ color: dimColor }}
                >
                  {char}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      color: targetColor,
                      opacity: charProgress,
                      transition: "opacity 80ms linear",
                    }}
                  >
                    {char}
                  </span>
                </span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
}
