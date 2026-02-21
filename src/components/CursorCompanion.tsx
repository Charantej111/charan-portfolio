import { useEffect, useState, useCallback } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

interface Sparkle {
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
}

const SPARKLE_COLORS = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#ffffff'];

const CursorCompanion = () => {
    const [isTouch, setIsTouch] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);
    const [isSquished, setIsSquished] = useState(false);
    const [sparkles, setSparkles] = useState<Sparkle[]>([]);
    const [sparkleId, setSparkleId] = useState(0);

    const rawX = useMotionValue(-200);
    const rawY = useMotionValue(-200);

    // Springy trailing — lags behind the cursor with a bouncy feel
    const x = useSpring(rawX, { stiffness: 90, damping: 14, mass: 0.6 });
    const y = useSpring(rawY, { stiffness: 90, damping: 14, mass: 0.6 });

    const addSparkle = useCallback((cx: number, cy: number) => {
        const newSparkle: Sparkle = {
            id: Date.now() + Math.random(),
            x: cx + (Math.random() - 0.5) * 24,
            y: cy + (Math.random() - 0.5) * 24,
            size: Math.random() * 6 + 4,
            color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
        };
        setSparkles(prev => [...prev.slice(-6), newSparkle]);
        setSparkleId(id => id + 1);
    }, []);

    useEffect(() => {
        setIsTouch(window.matchMedia('(pointer: coarse)').matches);

        let frameId: number;
        let lastSparkleTime = 0;

        const handleMouseMove = (e: MouseEvent) => {
            // Offset so it floats beside cursor, not on top
            rawX.set(e.clientX + 18);
            rawY.set(e.clientY - 36);

            // Spawn sparkles on movement (throttled to every 120ms)
            const now = Date.now();
            if (now - lastSparkleTime > 120) {
                addSparkle(e.clientX + 18, e.clientY - 36);
                lastSparkleTime = now;
            }

            // Squish effect on fast movement
            cancelAnimationFrame(frameId);
            setIsSquished(true);
            frameId = requestAnimationFrame(() => {
                setTimeout(() => setIsSquished(false), 200);
            });
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        const interactiveEls = document.querySelectorAll('a, button, [data-cursor-hover]');
        interactiveEls.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        window.addEventListener('mousemove', handleMouseMove);

        // Random blink every 3–5 s
        const blink = () => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 120);
        };
        const blinkTimer = setInterval(blink, 3500 + Math.random() * 1500);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(blinkTimer);
            cancelAnimationFrame(frameId);
            interactiveEls.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, [rawX, rawY, addSparkle]);

    // Expire sparkles after 600ms
    useEffect(() => {
        if (sparkles.length === 0) return;
        const timer = setTimeout(() => {
            setSparkles(prev => prev.slice(1));
        }, 600);
        return () => clearTimeout(timer);
    }, [sparkles, sparkleId]);

    if (isTouch) return null;

    return (
        <>
            {/* Sparkle particles */}
            <AnimatePresence>
                {sparkles.map(sparkle => (
                    <motion.div
                        key={sparkle.id}
                        initial={{ opacity: 0.9, scale: 1, x: sparkle.x, y: sparkle.y }}
                        animate={{ opacity: 0, scale: 0, y: sparkle.y - 20 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="fixed top-0 left-0 pointer-events-none z-[9996] hidden lg:block"
                        style={{ marginLeft: -sparkle.size / 2, marginTop: -sparkle.size / 2 }}
                    >
                        {/* Star shape */}
                        <svg width={sparkle.size} height={sparkle.size} viewBox="0 0 10 10">
                            <polygon
                                points="5,0 6.2,3.8 10,3.8 7,6.2 8.1,10 5,7.6 1.9,10 3,6.2 0,3.8 3.8,3.8"
                                fill={sparkle.color}
                            />
                        </svg>
                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Companion character */}
            <motion.div
                style={{ x, y }}
                className="fixed top-0 left-0 pointer-events-none z-[9997] hidden lg:block"
            >
                {/* Outer glow halo */}
                <motion.div
                    className="absolute rounded-full blur-xl"
                    animate={{
                        scale: isHovering ? [1, 1.4, 1] : [1, 1.15, 1],
                        opacity: isHovering ? [0.55, 0.85, 0.55] : [0.25, 0.45, 0.25],
                        backgroundColor: isHovering ? '#FF6B6B' : '#4ECDC4',
                    }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ width: 48, height: 48, top: -8, left: -8 }}
                />

                {/* The character — cute floating ghost/blob */}
                <motion.svg
                    width="32"
                    height="38"
                    viewBox="0 0 32 38"
                    animate={{
                        scaleX: isSquished ? 1.18 : isHovering ? 1.08 : 1,
                        scaleY: isSquished ? 0.82 : isHovering ? 1.08 : 1,
                        y: isHovering ? [0, -4, 0] : [0, -3, 0],
                        rotate: isHovering ? [0, -8, 8, 0] : [0, -2, 2, 0],
                    }}
                    transition={{
                        y: { duration: isHovering ? 0.5 : 2.2, repeat: Infinity, ease: 'easeInOut' },
                        rotate: { duration: isHovering ? 0.4 : 3, repeat: Infinity, ease: 'easeInOut' },
                        scaleX: { duration: 0.2 },
                        scaleY: { duration: 0.2 },
                    }}
                >
                    {/* Body */}
                    <defs>
                        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={isHovering ? '#FF6B6B' : '#4ECDC4'} />
                            <stop offset="100%" stopColor={isHovering ? '#FFE66D' : '#6C63FF'} />
                        </linearGradient>
                    </defs>

                    {/* Ghost / blob body with wavy bottom */}
                    <path
                        d="M16 2 C8 2, 2 8, 2 16 L2 30 L5 27 L8 30 L11 27 L14 30 L16 28 L18 30 L21 27 L24 30 L27 27 L30 30 L30 16 C30 8, 24 2, 16 2 Z"
                        fill="url(#bodyGrad)"
                        fillOpacity="0.92"
                    />

                    {/* Blush cheeks */}
                    <ellipse cx="9" cy="19" rx="3" ry="2" fill="#FF6B6B" fillOpacity={isHovering ? 0.7 : 0.4} />
                    <ellipse cx="23" cy="19" rx="3" ry="2" fill="#FF6B6B" fillOpacity={isHovering ? 0.7 : 0.4} />

                    {/* Eyes */}
                    {isBlinking ? (
                        <>
                            {/* Closed / blink */}
                            <path d="M11 14 Q12.5 13 14 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                            <path d="M18 14 Q19.5 13 21 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                        </>
                    ) : isHovering ? (
                        <>
                            {/* Happy / excited eyes */}
                            <path d="M11 15 Q12.5 12 14 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                            <path d="M18 15 Q19.5 12 21 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                        </>
                    ) : (
                        <>
                            {/* Normal dot eyes */}
                            <circle cx="12.5" cy="15" r="2.5" fill="white" />
                            <circle cx="19.5" cy="15" r="2.5" fill="white" />
                            <circle cx="13.2" cy="14.4" r="1" fill="#1a1a2e" />
                            <circle cx="20.2" cy="14.4" r="1" fill="#1a1a2e" />
                            {/* Eye shine */}
                            <circle cx="13.8" cy="13.8" r="0.5" fill="white" />
                            <circle cx="20.8" cy="13.8" r="0.5" fill="white" />
                        </>
                    )}

                    {/* Mouth */}
                    <path
                        d={isHovering ? "M13 21 Q16 24 19 21" : "M13 21 Q16 22.5 19 21"}
                        stroke="white"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        fill="none"
                    />

                    {/* Shine on body */}
                    <ellipse cx="11" cy="10" rx="3" ry="2" fill="white" fillOpacity="0.25" />
                </motion.svg>
            </motion.div>
        </>
    );
};

export default CursorCompanion;
