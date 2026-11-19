import React from 'react';
import BulbSticker from './BulbSticker';
import BrainSticker from './BrainSticker';
import SmoothRevealText from './SmoothRevealText';

export default function AboutSection({ onReadStory }) {
  return (
    <section className="relative w-full pt-4 pb-6 sm:py-16 md:py-24 px-4 sm:px-6 flex flex-col items-center justify-center select-none z-10">
      
      {/* Top Section Tag: "More about me_" with 4 corner anchor dots and solid green border */}
      <div className="mb-4 sm:mb-10 flex items-center justify-center">
        <div className="relative px-4 py-1.5 rounded-[2px] border-[1.3px] border-[#039754] bg-[#FFFCF4]">
          {/* Tag corner handles */}
          <div className="absolute -top-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#039754] pointer-events-none" />
          <div className="absolute -top-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#039754] pointer-events-none" />
          <div className="absolute -bottom-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#039754] pointer-events-none" />
          <div className="absolute -bottom-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#039754] pointer-events-none" />
          <span className="text-[13px] font-mono font-medium text-[#111111] tracking-tight">
            More about me_
          </span>
        </div>
      </div>

      {/* Main Focus Card Frame: max-w-[700px], border: 1.2px solid #039754 */}
      <div className="relative w-full max-w-[700px] bg-white rounded-[1px] border-[1.2px] border-[#039754] p-4 xs:p-6 sm:p-10 md:p-[60px] shadow-[0_20px_50px_-15px_rgba(3,151,84,0.06)] overflow-visible">
        
        {/* 4 Corner Anchor Handles (exact Framer 9x9 #039754 border) */}
        <div className="absolute -top-[4px] -left-[4px] w-[8px] sm:w-[9px] h-[8px] sm:h-[9px] bg-white border-[1.3px] border-[#039754] z-20 pointer-events-none" />
        <div className="absolute -top-[4px] -right-[4px] w-[8px] sm:w-[9px] h-[8px] sm:h-[9px] bg-white border-[1.3px] border-[#039754] z-20 pointer-events-none" />
        <div className="absolute -bottom-[4px] -left-[4px] w-[8px] sm:w-[9px] h-[8px] sm:h-[9px] bg-white border-[1.3px] border-[#039754] z-20 pointer-events-none" />
        <div className="absolute -bottom-[4px] -right-[4px] w-[8px] sm:w-[9px] h-[8px] sm:h-[9px] bg-white border-[1.3px] border-[#039754] z-20 pointer-events-none" />

        {/* Top-Left Bulb Decor Sticker */}
        <div className="hidden sm:block">
          <BulbSticker />
        </div>

        {/* Bottom-Right Brain Decor Sticker */}
        <div className="hidden sm:block">
          <BrainSticker />
        </div>

        {/* High-Craft Progressive Character-by-Character Smooth Reveal Typography */}
        <SmoothRevealText
          content="I’m a Product manager and Framer creator with a strong focus on building intuitive, scalable, and user-centered digital experiences."
          accentOneText="Product manager"
          accentTwoText="building"
          accentColor="#039754"
          textColor="#000000"
          dimColor="rgba(0, 0, 0, 0.08)"
          scrollStart={15}
          scrollEnd={72}
          revealSpread={8}
        />

      </div>

      {/* "Read my full story ->" Button navigating to detailed About page */}
      <div className="mt-6 sm:mt-10 flex items-center justify-center">
        <button
          onClick={onReadStory}
          type="button"
          className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-[2px] border-[1.3px] border-[#8427DE] bg-[#FFFCF4] hover:bg-[#8427DE] text-[13px] sm:text-[14px] font-mono font-medium text-[#111111] hover:text-white shadow-xs transition-colors duration-200 cursor-pointer"
        >
          {/* Tag corner handles matching Framer design system */}
          <div className="absolute -top-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none group-hover:bg-[#8427DE]" />
          <div className="absolute -top-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none group-hover:bg-[#8427DE]" />
          <div className="absolute -bottom-[3px] -left-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none group-hover:bg-[#8427DE]" />
          <div className="absolute -bottom-[3px] -right-[3px] w-[5px] h-[5px] bg-[#FFFCF4] border-[1.2px] border-[#8427DE] pointer-events-none group-hover:bg-[#8427DE]" />

          <span>Read my full story</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </button>
      </div>

    </section>
  );
}
