import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingOrbs = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orbs = containerRef.current?.querySelectorAll('.orb');
    if (!orbs) return;

    orbs.forEach((orb, index) => {
      const duration = 15 + index * 5;
      const delay = index * 2;

      gsap.to(orb, {
        y: 'random(-100, 100)',
        x: 'random(-50, 50)',
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: delay,
      });

      gsap.to(orb, {
        scale: 'random(0.8, 1.2)',
        duration: duration / 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: delay,
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Coral Orb */}
      <div
        className="orb absolute w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #FF6B6B 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '10%',
          left: '-10%',
        }}
      />

      {/* Teal Orb */}
      <div
        className="orb absolute w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #4ECDC4 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '50%',
          right: '-5%',
        }}
      />

      {/* Sunshine Orb */}
      <div
        className="orb absolute w-[300px] h-[300px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, #FFE66D 0%, transparent 70%)',
          filter: 'blur(50px)',
          bottom: '20%',
          left: '30%',
        }}
      />

      {/* Small accent orbs */}
      <div
        className="orb absolute w-[150px] h-[150px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, #FF6B6B 0%, transparent 70%)',
          filter: 'blur(30px)',
          top: '30%',
          right: '20%',
        }}
      />

      <div
        className="orb absolute w-[200px] h-[200px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #4ECDC4 0%, transparent 70%)',
          filter: 'blur(40px)',
          bottom: '40%',
          left: '10%',
        }}
      />
    </div>
  );
};

export default FloatingOrbs;
