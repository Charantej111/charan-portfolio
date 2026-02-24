import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MESSAGES = [
    "Stealing inspiration from Dribbble...",
    "Adding unnecessary drop shadows...",
    "Making logo bigger... smaller... bigger...",
    "Centering the div (this may take a while)...",
    "Convincing the client fewer colors is better...",
    "Converting every px to rem...",
    "Arguing with the developer about 4px of spacing...",
    "Pretending I understood the brief...",
    "Running Figma on 16 GB of RAM (still lagging)...",
    "Loading creative genius... please hold...",
];

interface LoadingScreenProps {
    onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    const [progress, setProgress] = useState(0);
    const [msgIndex, setMsgIndex] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const [isBlinking, setIsBlinking] = useState(false);

    // Progress bar — quirky: fast then slow then suddenly jumps to 100
    useEffect(() => {
        const steps = [
            { target: 30, duration: 200 },
            { target: 55, duration: 300 },
            { target: 57, duration: 400 },   // fake stall
            { target: 80, duration: 250 },
            { target: 81, duration: 450 },   // another fake stall
            { target: 100, duration: 150 },  // sudden jump!
        ];

        let current = 0;
        const runStep = (i: number) => {
            if (i >= steps.length) {
                // Done — wait a beat then exit
                setTimeout(() => {
                    setLeaving(true);
                    setTimeout(onComplete, 500);
                }, 200);
                return;
            }
            const { target, duration } = steps[i];
            const perTick = (target - current) / (duration / 30);
            const interval = setInterval(() => {
                current += perTick;
                if (current >= target) {
                    current = target;
                    setProgress(current);
                    clearInterval(interval);
                    runStep(i + 1);
                } else {
                    setProgress(current);
                }
            }, 30);
        };
        runStep(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Cycle messages
    useEffect(() => {
        const t = setInterval(() => {
            setMsgIndex(i => (i + 1) % MESSAGES.length);
        }, 900);
        return () => clearInterval(t);
    }, []);

    // Blink mascot
    useEffect(() => {
        const t = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 130);
        }, 2800);
        return () => clearInterval(t);
    }, []);

    return (
        <AnimatePresence>
            {!leaving ? (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
                    style={{ background: 'hsl(240 20% 4%)' }}
                >
                    {/* Background grid */}
                    <div className="absolute inset-0 grid-pattern opacity-30" />

                    {/* Ambient glows */}
                    <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[#FF6B6B]/10 blur-[120px]" />
                    <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#4ECDC4]/10 blur-[100px]" />

                    {/* Ghost mascot — dancing */}
                    <motion.div
                        animate={{ y: [0, -14, 0], rotate: [0, -6, 6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        className="mb-8 relative"
                    >
                        {/* Glow behind mascot */}
                        <motion.div
                            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 1.8, repeat: Infinity }}
                            className="absolute inset-0 rounded-full bg-[#4ECDC4] blur-2xl"
                            style={{ width: 80, height: 80, top: 8, left: -8 }}
                        />

                        <svg width="64" height="76" viewBox="0 0 32 38">
                            <defs>
                                <linearGradient id="lgBody" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#4ECDC4" />
                                    <stop offset="100%" stopColor="#6C63FF" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M16 2 C8 2, 2 8, 2 16 L2 30 L5 27 L8 30 L11 27 L14 30 L16 28 L18 30 L21 27 L24 30 L27 27 L30 30 L30 16 C30 8, 24 2, 16 2 Z"
                                fill="url(#lgBody)"
                                fillOpacity="0.93"
                            />
                            <ellipse cx="9" cy="19" rx="3" ry="2" fill="#FF6B6B" fillOpacity="0.5" />
                            <ellipse cx="23" cy="19" rx="3" ry="2" fill="#FF6B6B" fillOpacity="0.5" />
                            {isBlinking ? (
                                <>
                                    <path d="M11 14 Q12.5 13 14 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                                    <path d="M18 14 Q19.5 13 21 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                                </>
                            ) : (
                                <>
                                    <circle cx="12.5" cy="15" r="2.5" fill="white" />
                                    <circle cx="19.5" cy="15" r="2.5" fill="white" />
                                    <circle cx="13.2" cy="14.4" r="1" fill="#1a1a2e" />
                                    <circle cx="20.2" cy="14.4" r="1" fill="#1a1a2e" />
                                    <circle cx="13.8" cy="13.8" r="0.5" fill="white" />
                                    <circle cx="20.8" cy="13.8" r="0.5" fill="white" />
                                </>
                            )}
                            <path d="M13 21 Q16 23 19 21" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />
                            <ellipse cx="11" cy="10" rx="3" ry="2" fill="white" fillOpacity="0.22" />
                        </svg>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-8"
                    >
                        <h1 className="font-display text-3xl font-bold mb-1" style={{ color: 'white' }}>
                            Loading awesomeness
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1.2, repeat: Infinity }}
                            >...</motion.span>
                        </h1>
                        <p className="font-mono text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>
                            Charan Teja Neelam · Portfolio
                        </p>
                    </motion.div>

                    {/* Progress bar */}
                    <div className="w-72 mb-5">
                        <div
                            className="w-full h-1.5 rounded-full overflow-hidden"
                            style={{ background: 'rgba(255,255,255,0.08)' }}
                        >
                            <motion.div
                                className="h-full rounded-full"
                                style={{
                                    background: 'linear-gradient(90deg, #FF6B6B, #4ECDC4, #FFE66D)',
                                    width: `${progress}%`,
                                    backgroundSize: '200% 100%',
                                }}
                                animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                            />
                        </div>
                        <div className="flex justify-between mt-1.5">
                            <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
                                {Math.round(progress)}%
                            </span>
                            {progress === 81 && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="font-mono text-xs"
                                    style={{ color: '#FFE66D' }}
                                >
                                    why is it stuck at 81%...
                                </motion.span>
                            )}
                        </div>
                    </div>

                    {/* Cycling funny message */}
                    <div className="h-6 overflow-hidden w-80 text-center">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={msgIndex}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="font-body text-sm"
                                style={{ color: 'rgba(255,255,255,0.45)' }}
                            >
                                {MESSAGES[msgIndex]}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Spinning design tool icon */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        className="mt-10 opacity-20"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"
                                fill="#4ECDC4" />
                        </svg>
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default LoadingScreen;
