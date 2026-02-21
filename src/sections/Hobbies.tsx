import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plane, Music, Activity, Terminal, Map, Disc, Zap } from 'lucide-react';

const Hobbies = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    // Coding Vibe State
    const [codeText, setCodeText] = useState('');
    const fullCode = "while(alive) {\n  eat();\n  sleep();\n  code();\n  repeat();\n}";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullCode.length) {
                setCodeText(fullCode.slice(0, currentIndex));
                currentIndex++;
            } else {
                currentIndex = 0; // Loop
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // Music Vibe State
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const musicCardRef = useRef(null);
    const isMusicInView = useInView(musicCardRef, { margin: "-40% 0px -40% 0px" });

    useEffect(() => {
        const checkMobileAndPlay = () => {
            const isMobile = window.innerWidth < 768;
            // Only update if state actually changes to avoid effect loops
            if (isHovering || (isMobile && isMusicInView)) {
                setIsPlaying(true);
            } else {
                setIsPlaying(false);
            }
        };

        checkMobileAndPlay();
        window.addEventListener('resize', checkMobileAndPlay);
        return () => window.removeEventListener('resize', checkMobileAndPlay);
    }, [isHovering, isMusicInView]);

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio('/music.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = 0.4;

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const playAudio = async () => {
            try {
                if (audio.paused) {
                    await audio.play();
                }
            } catch (error) {
                // Ignore AbortError (interrupted by pause) and NotAllowedError (autoplay blocked)
                const e = error as Error;
                if (e.name !== 'AbortError' && e.name !== 'NotAllowedError') {
                    console.error("Audio playback error:", error);
                }
            }
        };

        if (isPlaying) {
            playAudio();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    }, [isPlaying]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section
            ref={sectionRef}
            id="hobbies"
            className="relative py-24 lg:py-32 overflow-hidden bg-background"
        >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[128px]" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-foreground/10 mb-6">
                        <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                        <span className="text-xs font-mono text-foreground/60 uppercase tracking-widest">Personal Life</span>
                    </div>
                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-foreground">
                        Beyond the <span className="gradient-text">Keyboard</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 min-h-[800px] md:min-h-[600px]"
                >
                    {/* 1. Coding (Large) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden bg-[#1E1E2E] border border-white/10"
                    >
                        <div className="absolute top-4 left-4 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="absolute top-4 right-4 text-white/20">
                            <Terminal size={20} />
                        </div>

                        <div className="flex flex-col items-center justify-center h-full p-8 font-mono text-sm md:text-base">
                            <div className="text-green-400">
                                <pre>{codeText}<span className="animate-pulse">|</span></pre>
                            </div>
                            <p className="mt-6 text-white/40 font-body text-center max-w-md">
                                "I don't just write code; I vibe with it. Creating logic from chaos is my meditation."
                            </p>
                        </div>
                    </motion.div>

                    {/* 2. Travel (Small) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                        <video
                            src="/video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <div className="flex items-center gap-2 text-yellow-400 mb-2">
                                <Plane size={18} />
                                <span className="font-mono text-xs uppercase tracking-wider">Explorer</span>
                            </div>
                            <h3 className="text-xl font-bold text-white">Wanderlust</h3>
                            <p className="text-white/60 text-sm mt-1">Collecting memories, not things.</p>
                        </div>
                    </motion.div>

                    {/* 3. Music (Small) */}
                    <motion.div
                        ref={musicCardRef}
                        variants={itemVariants}
                        className="md:col-span-1 md:row-span-1 group relative rounded-3xl overflow-hidden bg-card border border-foreground/10 flex flex-col items-center justify-center p-6 text-center"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <div className={`w-32 h-32 rounded-full border-4 border-foreground/10 flex items-center justify-center mb-6 relative ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''}`}>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-xl" />
                            <Disc size={64} className="text-foreground/80" />
                        </div>

                        {/* Visualizer Bars */}
                        <div className="flex items-end gap-1 h-8 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={isPlaying ? { height: [10, 32, 10] } : { height: 10 }}
                                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                                    className="w-2 bg-purple-500 rounded-full"
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-foreground/40 text-sm">
                            <Music size={14} />
                            <span>Vibing to Lo-Fi</span>
                        </div>
                    </motion.div>

                    {/* 4. Badminton (Large) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 md:row-span-1 group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#FF6B6B]/10 to-[#4ECDC4]/10 border border-foreground/10"
                    >
                        <div className="absolute inset-0 grid-pattern opacity-30" />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Activity size={120} className="text-foreground/5" />
                            </motion.div>
                        </div>

                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="flex items-center gap-2 text-[#4ECDC4] mb-2">
                                        <Zap size={18} />
                                        <span className="font-mono text-xs uppercase tracking-wider">Active Lifestyle</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">Badminton Player</h3>
                                    <p className="text-foreground/60 max-w-sm">
                                        Speed, agility, and strategy. The court is where I recharge my energy.
                                    </p>
                                </div>

                                <button className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-foreground group-hover:text-background text-foreground transition-all">
                                    <Map size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hobbies;
