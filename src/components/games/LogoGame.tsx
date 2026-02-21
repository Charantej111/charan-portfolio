import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CLIENT_LINES = [
    "Hmm... a little bigger?",
    "Still not seeing it. More.",
    "BIGGER.",
    "YES. BIGGER.",
    "MY EYES AREN'T GOOD. BIGGER!",
    "THE LOGO IS THE BRAND. BIGGER!!",
    "I WANT IT TOUCHING BOTH SIDES!!!",
    "P E R F E C T 🤌",
];

const LogoGame = ({ onClose }: { onClose: () => void }) => {
    const [phase, setPhase] = useState<'intro' | 'playing' | 'chaos' | 'fixed'>('intro');
    const [size, setSize] = useState(48);
    const [lineIdx, setLineIdx] = useState(0);

    const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        setSize(val);

        // Advance client quote every ~60px jump
        const step = Math.floor((val - 48) / 52);
        const nextIdx = Math.min(step, CLIENT_LINES.length - 1);
        setLineIdx(nextIdx);

        if (val >= 440) {
            setPhase('chaos');
        }
    };

    const autoFix = () => {
        setSize(48);
        setPhase('fixed');
    };

    const restart = () => { setSize(48); setLineIdx(0); setPhase('playing'); };

    return (
        <div className="relative w-full" style={{ height: 500 }}>
            <button onClick={onClose} className="absolute top-3 right-3 z-20 p-1.5 rounded-full hover:bg-white/10 text-white/40 hover:text-white transition-colors"><X size={16} /></button>

            {phase === 'intro' && (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="text-5xl mb-4">🔴</div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Resize the Logo</h3>
                    <p className="text-white/50 text-sm mb-2">The client wants the logo bigger.<br />Use the slider. See how far you dare go.</p>
                    <p className="text-white/30 text-xs italic mb-6">"Good UX knows when to stop."</p>
                    <button onClick={() => setPhase('playing')} className="px-8 py-3 rounded-2xl font-bold text-white" style={{ background: 'linear-gradient(135deg,#FF6B6B,#FFE66D)' }}>
                        Let the Client Decide 🎚️
                    </button>
                </div>
            )}

            {phase === 'playing' && (
                <div className="h-full flex flex-col p-5">
                    {/* Mock layout */}
                    <div className="flex-1 rounded-2xl overflow-hidden relative mb-4" style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.08)' }}>
                        {/* Nav */}
                        <div className="flex justify-between items-center px-4 py-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                            <motion.div
                                animate={{ fontSize: size, lineHeight: 1 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                                className="font-black text-[#FF6B6B] overflow-hidden whitespace-nowrap"
                                style={{ maxWidth: '100%' }}
                            >
                                LOGO
                            </motion.div>
                            {size < 100 && (
                                <div className="flex gap-3 text-white/40 text-xs flex-shrink-0">
                                    {['Work', 'About', 'Contact'].map(n => <span key={n}>{n}</span>)}
                                </div>
                            )}
                        </div>

                        {/* Body content — gets pushed around */}
                        <div className="p-4">
                            <motion.div animate={{ opacity: size > 200 ? 0.2 : 1 }} className="space-y-2">
                                <div className="h-3 rounded-full w-2/3" style={{ background: 'rgba(255,255,255,0.1)' }} />
                                <div className="h-2 rounded-full w-1/2" style={{ background: 'rgba(255,255,255,0.06)' }} />
                                <div className="grid grid-cols-2 gap-2 mt-3">
                                    {[1, 2].map(i => <div key={i} className="h-16 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }} />)}
                                </div>
                            </motion.div>
                            {size > 280 && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <span className="text-red-400 text-xs font-mono">⚠️ layout overflow detected</span>
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Client speech bubble */}
                    <AnimatePresence mode="wait">
                        <motion.div key={lineIdx} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                            className="mb-3 px-3 py-2 rounded-xl text-sm font-semibold text-white"
                            style={{ background: size > 350 ? 'rgba(255,50,50,0.2)' : 'rgba(255,107,107,0.12)', border: '1px solid rgba(255,107,107,0.3)' }}>
                            💬 Client: "{CLIENT_LINES[lineIdx]}"
                        </motion.div>
                    </AnimatePresence>

                    {/* Slider */}
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-white/30 w-6">S</span>
                        <input type="range" min={48} max={460} value={size} onChange={handleSlider}
                            className="flex-1 accent-[#FF6B6B]" style={{ cursor: 'ew-resize' }} />
                        <span className="text-xs font-mono text-white/30 w-8">BIG</span>
                    </div>
                    <p className="text-center text-xs text-white/20 mt-1 font-mono">{Math.round(size)}px</p>
                </div>
            )}

            {phase === 'chaos' && (
                <div className="h-full flex flex-col items-center justify-center p-6 text-center" style={{ background: 'rgba(255,0,0,0.04)' }}>
                    <motion.div animate={{ scale: [1, 1.05, 1], rotate: [0, -2, 2, 0] }} transition={{ duration: 0.6, repeat: Infinity }}
                        className="font-black text-[#FF6B6B] mb-4 w-full overflow-hidden text-center"
                        style={{ fontSize: 72, lineHeight: 0.9 }}>
                        LOGO
                    </motion.div>
                    <p className="font-mono text-xs text-[#FFE66D] mb-2">⚠️ UI OVERFLOW. LAYOUT COLLAPSED. CLIENT IS HAPPY.</p>
                    <p className="text-white/30 text-xs italic mb-6">"The logo is now 460px. On mobile."</p>
                    <button onClick={autoFix}
                        className="px-8 py-3 rounded-2xl font-bold text-white"
                        style={{ background: 'linear-gradient(135deg,#4ECDC4,#6C63FF)' }}>
                        ✨ Auto-Fix It
                    </button>
                </div>
            )}

            {phase === 'fixed' && (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 250 }} className="text-5xl mb-4">⚖️</motion.div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Balance Restored</h3>
                    <div className="w-full rounded-2xl p-4 mb-5 text-left" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        {/* Clean mini layout */}
                        <div className="flex justify-between items-center mb-3 pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                            <span className="font-bold text-[#FF6B6B] text-sm">LOGO</span>
                            <div className="flex gap-3 text-white/40 text-xs">{['Work', 'About', 'Contact'].map(n => <span key={n}>{n}</span>)}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {[1, 2].map(i => <div key={i} className="rounded-lg p-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <div className="h-8 rounded mb-1" style={{ background: i === 1 ? 'rgba(255,107,107,0.3)' : 'rgba(78,205,196,0.2)' }} />
                                <div className="h-1.5 rounded-full w-3/4 bg-white/10" />
                            </div>)}
                        </div>
                    </div>
                    <p className="font-display text-base font-bold text-white/80 italic mb-5">"Good UX knows when to stop." 🎯</p>
                    <button onClick={restart} className="px-8 py-3 rounded-2xl font-bold text-white" style={{ background: 'linear-gradient(135deg,#FF6B6B,#FFE66D)' }}>Play Again</button>
                </div>
            )}
        </div>
    );
};

export default LogoGame;
