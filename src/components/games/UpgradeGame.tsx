import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpCircle } from 'lucide-react';

interface Level {
    name: string;
    tagline: string;
    emoji: string;
    style: React.CSSProperties;
    navStyle: React.CSSProperties;
    cardStyle: React.CSSProperties;
    btnStyle: React.CSSProperties;
    textStyle: React.CSSProperties;
    subStyle: React.CSSProperties;
    description: string;
    fontFamily: string;
}

const LEVELS: Level[] = [
    {
        name: 'Level 0',
        tagline: '2003 Era 💀',
        emoji: '🤢',
        description: 'Add whitespace',
        fontFamily: '"Times New Roman", serif',
        style: { background: '#c0c0c0', border: '4px ridge #999' },
        navStyle: { background: '#000080', padding: '4px 8px' },
        cardStyle: { background: '#ffffcc', border: '3px solid #ff0000', padding: 4 },
        btnStyle: { background: 'linear-gradient(#ff0,#f90)', border: '2px outset #ccc', color: '#000', fontFamily: '"Comic Sans MS"', fontSize: 11 },
        textStyle: { color: '#ff0000', fontSize: 22, fontFamily: '"Comic Sans MS"', textShadow: '2px 2px lime' },
        subStyle: { color: '#000080', fontSize: 9, fontFamily: '"Comic Sans MS"' },
    },
    {
        name: 'Level 1',
        tagline: 'Added Whitespace ✅',
        emoji: '😮‍💨',
        description: 'Improve typography',
        fontFamily: 'Arial, sans-serif',
        style: { background: '#e8e8e8', padding: 8 },
        navStyle: { background: '#333', padding: '6px 10px' },
        cardStyle: { background: '#fff', border: '1px solid #ccc', padding: 8, marginBottom: 4 },
        btnStyle: { background: '#4a90e2', border: 'none', color: '#fff', borderRadius: 4, fontSize: 11, padding: '4px 10px' },
        textStyle: { color: '#222', fontSize: 18, fontFamily: 'Arial' },
        subStyle: { color: '#555', fontSize: 11 },
    },
    {
        name: 'Level 2',
        tagline: 'Better Typography ✅',
        emoji: '🎯',
        description: 'Apply a grid',
        fontFamily: '"Inter", sans-serif',
        style: { background: '#f4f4f4', padding: 12 },
        navStyle: { background: '#1a1a1a', padding: '8px 12px', borderRadius: 4 },
        cardStyle: { background: '#fff', border: '1px solid #e0e0e0', padding: 10, borderRadius: 6, marginBottom: 6 },
        btnStyle: { background: '#222', border: 'none', color: '#fff', borderRadius: 6, fontSize: 11, padding: '5px 12px', letterSpacing: 0.3 },
        textStyle: { color: '#111', fontSize: 20, fontFamily: '"Inter"', fontWeight: 700, letterSpacing: -0.5 },
        subStyle: { color: '#666', fontSize: 12, letterSpacing: 0.2 },
    },
    {
        name: 'Level 3',
        tagline: 'Grid Applied ✅',
        emoji: '😎',
        description: 'Add modern UI',
        fontFamily: '"Inter", sans-serif',
        style: { background: 'linear-gradient(135deg,#1a1a2e,#16213e)', padding: 12 },
        navStyle: { background: 'rgba(255,255,255,0.06)', padding: '8px 14px', borderRadius: 8, backdropFilter: 'blur(8px)' },
        cardStyle: { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: 12, borderRadius: 12, marginBottom: 8 },
        btnStyle: { background: '#FF6B6B', border: 'none', color: '#fff', borderRadius: 8, fontSize: 11, padding: '6px 14px', fontWeight: 600 },
        textStyle: { color: '#fff', fontSize: 20, fontWeight: 700, letterSpacing: -0.5 },
        subStyle: { color: 'rgba(255,255,255,0.5)', fontSize: 12 },
    },
    {
        name: 'Level 4',
        tagline: 'Modern UI ✅',
        emoji: '🔥',
        description: 'Premium design',
        fontFamily: '"Inter", sans-serif',
        style: { background: 'linear-gradient(135deg,#0A0A0F,#12121A)', padding: 14 },
        navStyle: { background: 'rgba(255,255,255,0.04)', padding: '10px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' },
        cardStyle: { background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', padding: 14, borderRadius: 16, marginBottom: 10, backdropFilter: 'blur(10px)' },
        btnStyle: { background: 'linear-gradient(90deg,#FF6B6B,#4ECDC4)', border: 'none', color: '#fff', borderRadius: 12, fontSize: 11, padding: '7px 18px', fontWeight: 700, letterSpacing: 0.3 },
        textStyle: { color: '#fff', fontSize: 21, fontWeight: 800, letterSpacing: -1, background: 'linear-gradient(135deg,#FF6B6B,#4ECDC4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
        subStyle: { color: 'rgba(255,255,255,0.4)', fontSize: 12, letterSpacing: 0.5 },
    },
    {
        name: 'Level 5 — FINAL',
        tagline: 'Premium Design ✨',
        emoji: '💎',
        description: 'Perfection achieved',
        fontFamily: '"Inter", sans-serif',
        style: { background: 'linear-gradient(135deg,#0A0A0F 0%,#12121A 50%,#0D0D1A 100%)', padding: 16 },
        navStyle: { background: 'rgba(255,255,255,0.03)', padding: '10px 18px', borderRadius: 14, border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(30px)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' },
        cardStyle: { background: 'linear-gradient(135deg,rgba(255,107,107,0.06),rgba(78,205,196,0.06))', border: '1px solid rgba(255,255,255,0.07)', padding: 16, borderRadius: 20, marginBottom: 12, backdropFilter: 'blur(20px)', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' },
        btnStyle: { background: 'linear-gradient(90deg,#FF6B6B,#4ECDC4,#FFE66D)', border: 'none', color: '#000', borderRadius: 14, fontSize: 11, padding: '8px 20px', fontWeight: 800, letterSpacing: 0.5, boxShadow: '0 4px 20px rgba(255,107,107,0.4)' },
        textStyle: { fontSize: 22, fontWeight: 900, letterSpacing: -1.2, background: 'linear-gradient(135deg,#FF6B6B,#4ECDC4,#FFE66D)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },
        subStyle: { color: 'rgba(255,255,255,0.35)', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase' as const },
    },
];

const UIMockup = ({ lvl }: { lvl: Level }) => (
    <motion.div layout className="rounded-xl overflow-hidden" style={{ ...lvl.style, fontFamily: lvl.fontFamily, fontSize: 11 }}>
        {/* Nav */}
        <div style={{ ...lvl.navStyle, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 12 }}>LOGO</span>
            <div style={{ display: 'flex', gap: 8 }}>
                {['Work', 'About', 'Contact'].map(n => <span key={n} style={{ color: 'rgba(255,255,255,0.6)', fontSize: 9 }}>{n}</span>)}
            </div>
        </div>
        {/* Hero text */}
        <div style={{ marginBottom: 8 }}>
            <div style={lvl.textStyle}>Portfolio</div>
            <div style={lvl.subStyle}>UI/UX Designer & Thinker</div>
        </div>
        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            {[1, 2].map(i => (
                <div key={i} style={lvl.cardStyle}>
                    <div style={{ height: 28, borderRadius: 6, background: i === 1 ? 'rgba(255,107,107,0.3)' : 'rgba(78,205,196,0.2)', marginBottom: 5 }} />
                    <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.1)', marginBottom: 3, width: '80%' }} />
                    <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)', width: '55%' }} />
                </div>
            ))}
        </div>
        <button style={{ ...lvl.btnStyle, display: 'block', margin: '8px auto 0', cursor: 'default', width: '60%', textAlign: 'center' }}>
            View Work
        </button>
    </motion.div>
);

const UpgradeGame = ({ onClose }: { onClose: () => void }) => {
    const [phase, setPhase] = useState<'intro' | 'playing' | 'over'>('intro');
    const [lvlIdx, setLvlIdx] = useState(0);
    const [upgrading, setUpgrading] = useState(false);

    const lvl = LEVELS[lvlIdx];
    const isLast = lvlIdx === LEVELS.length - 1;

    const upgrade = () => {
        if (isLast || upgrading) return;
        setUpgrading(true);
        setTimeout(() => { setLvlIdx(i => i + 1); setUpgrading(false); if (lvlIdx + 1 === LEVELS.length - 1) setTimeout(() => setPhase('over'), 1200); }, 400);
    };

    const start = () => { setLvlIdx(0); setPhase('playing'); };

    return (
        <div className="relative w-full" style={{ height: 480 }}>
            <button onClick={onClose} className="absolute top-3 right-3 z-20 p-1.5 rounded-full hover:bg-white/10 text-white/40 hover:text-white transition-colors"><X size={16} /></button>

            {phase === 'intro' && (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="text-5xl mb-4">🖥️</div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Upgrade the UI</h3>
                    <p className="text-white/50 text-sm mb-2">Start with a <span className="text-[#FF6B6B]">horrifying 2003 website</span>.<br />Click Upgrade to evolve it into a premium design.</p>
                    <p className="text-white/30 text-xs italic mb-6">"Good design is evolution." — Someone smart</p>
                    <button onClick={start} className="px-8 py-3 rounded-2xl font-bold text-white" style={{ background: 'linear-gradient(135deg,#6C63FF,#FF6B6B)' }}>Begin! 🚀</button>
                </div>
            )}

            {phase === 'playing' && (
                <div className="h-full flex flex-col p-4">
                    {/* Level progress */}
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex gap-1">
                            {LEVELS.map((_, i) => (
                                <motion.div key={i} animate={{ scale: i === lvlIdx ? 1.2 : 1 }}
                                    className="rounded-full" style={{ width: i === lvlIdx ? 20 : 8, height: 8, background: i <= lvlIdx ? 'linear-gradient(90deg,#FF6B6B,#4ECDC4)' : 'rgba(255,255,255,0.1)', transition: 'width 0.3s' }} />
                            ))}
                        </div>
                        <span className="font-mono text-xs" style={{ color: lvl.textStyle?.color as string || '#fff' }}>{lvl.tagline}</span>
                    </div>

                    {/* UI Mockup */}
                    <div className="flex-1 mb-3 overflow-hidden rounded-xl">
                        <AnimatePresence mode="wait">
                            <motion.div key={lvlIdx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }} className="h-full">
                                <UIMockup lvl={lvl} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Upgrade description */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg">{lvl.emoji}</span>
                        <div>
                            <div className="font-bold text-white text-sm">{lvl.name}</div>
                            {!isLast && <div className="text-xs text-white/40">Next: {lvl.description}</div>}
                        </div>
                    </div>

                    {/* Upgrade button */}
                    {!isLast && (
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.96 }}
                            onClick={upgrade}
                            disabled={upgrading}
                            className="w-full py-3 rounded-2xl font-bold text-white flex items-center justify-center gap-2"
                            style={{ background: upgrading ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg,#6C63FF,#4ECDC4)', transition: 'background 0.3s' }}
                        >
                            <ArrowUpCircle size={18} />
                            {upgrading ? 'Applying...' : `Upgrade: ${lvl.description}`}
                        </motion.button>
                    )}
                </div>
            )}

            {phase === 'over' && (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: [0, -10, 10, 0] }} transition={{ type: 'spring', stiffness: 200 }} className="text-6xl mb-4">
                        💎
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Evolution Complete!</h3>
                    <div className="px-5 py-3 rounded-2xl mb-6" style={{ background: 'linear-gradient(135deg,rgba(255,107,107,0.1),rgba(78,205,196,0.1))', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <p className="text-white font-bold text-sm italic">"Good design is evolution."</p>
                        <p className="text-white/40 text-xs mt-1">From Comic Sans chaos → premium glassmorphism</p>
                    </div>
                    <button onClick={start} className="px-8 py-3 rounded-2xl font-bold text-white" style={{ background: 'linear-gradient(135deg,#6C63FF,#FF6B6B)' }}>
                        Start Over
                    </button>
                </div>
            )}
        </div>
    );
};

export default UpgradeGame;
