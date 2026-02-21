import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ColorPair {
    bg: string;
    fg: string;
    label: string;
}

const BAD_COMBOS: (ColorPair & { crime: string })[] = [
    { bg: '#ffff00', fg: '#ffffff', label: 'White on Yellow', crime: 'Invisible text. Screen is basically blank.' },
    { bg: '#ff0000', fg: '#00ff00', label: 'Green on Red', crime: 'Christmas mode + colour-blind nightmare.' },
    { bg: '#0000ff', fg: '#800080', label: 'Purple on Blue', crime: '0.87:1 contrast ratio. Legally questionable.' },
    { bg: '#ffaaaa', fg: '#ff6666', label: 'Light Red on Pink', crime: 'Everything is vibing in the same hue. Chaos.' },
    { bg: '#c0c0c0', fg: '#d3d3d3', label: 'Light Gray on Gray', crime: 'WCAG AA requires 4.5:1. This is ~1.3:1. 😱' },
    { bg: '#00ffff', fg: '#ffffff', label: 'White on Cyan', crime: 'The 90s called. They want their geocities back.' },
];

const WCAG_PALETTE = [
    { bg: '#0A0A0F', fg: '#FFFFFF', label: 'White on Near-Black', ratio: '19.7:1 ✅ AAA' },
    { bg: '#1a1a2e', fg: '#FF6B6B', label: 'Coral on Dark', ratio: '5.4:1 ✅ AA' },
    { bg: '#FFFFFF', fg: '#222222', label: 'Dark on White', ratio: '16.1:1 ✅ AAA' },
    { bg: '#4ECDC4', fg: '#0A0A0F', label: 'Dark on Teal', ratio: '7.2:1 ✅ AAA' },
];

const SCREAMS = [
    'MY EYES 😭',
    'WCAG IS CRYING 😭',
    'ACCESSIBILITY VIOLATION 🚨',
    'USERS WITH COLOUR BLINDNESS ARE LEAVING 😱',
    'CONTRAST RATIO: 1.1:1 💀',
];

const ContrastGame = ({ onClose }: { onClose: () => void }) => {
    const [phase, setPhase] = useState<'intro' | 'playing' | 'result'>('intro');
    const [selected, setSelected] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [round, setRound] = useState(0);
    const [screaming, setScreaming] = useState(false);
    const [screamText, setScreamText] = useState('');

    const combo = BAD_COMBOS[round % BAD_COMBOS.length];

    const handlePick = (isBad: boolean) => {
        setScreaming(true);
        setScreamText(SCREAMS[Math.floor(Math.random() * SCREAMS.length)]);
        if (isBad) setScore(s => s + 1); // they picked the bad one on purpose = "brave"

        setTimeout(() => {
            setScreaming(false);
            if (round + 1 >= BAD_COMBOS.length) setPhase('result');
            else setRound(r => r + 1);
        }, 1400);
    };

    const start = () => { setPhase('playing'); setRound(0); setScore(0); setSelected(null); };

    return (
        <div className="relative w-full" style={{ height: 500 }}>
            <button onClick={onClose} className="absolute top-3 right-3 z-20 p-1.5 rounded-full hover:bg-white/10 text-white/40 hover:text-white transition-colors"><X size={16} /></button>

            {phase === 'intro' && (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="text-5xl mb-4">🎨</div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Colour Contrast Fail</h3>
                    <p className="text-white/50 text-sm mb-2">See the worst colour crimes against designers.<br />Rate how bad each combo is — then see the WCAG-approved alternatives.</p>
                    <p className="text-white/30 text-xs italic mb-6">Warning: Side effects include empathy for colour-blind users.</p>
                    <button onClick={start} className="px-8 py-3 rounded-2xl font-bold text-white" style={{ background: 'linear-gradient(135deg,#FF4757,#FFE66D)' }}>
                        Show Me The Crimes 🎨
                    </button>
                </div>
            )}

            {phase === 'playing' && (
                <div className="h-full flex flex-col p-5">
                    {/* Progress dots */}
                    <div className="flex gap-1.5 justify-center mb-4">
                        {BAD_COMBOS.map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full" style={{ background: i < round ? '#FF6B6B' : i === round ? '#FFE66D' : 'rgba(255,255,255,0.15)' }} />
                        ))}
                    </div>

                    {/* The crime scene */}
                    <motion.div
                        key={round}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-2xl p-5 mb-4 flex-1 flex flex-col justify-center items-center text-center relative overflow-hidden"
                        style={{ background: combo.bg, border: '2px solid rgba(255,255,255,0.1)', minHeight: 140 }}
                    >
                        {/* Scream overlay */}
                        <AnimatePresence>
                            {screaming && (
                                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center z-10 rounded-2xl"
                                    style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}>
                                    <motion.p animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.3, repeat: Infinity }}
                                        className="font-display font-black text-lg text-center px-4" style={{ color: '#FF6B6B' }}>
                                        {screamText}
                                    </motion.p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <p className="font-bold text-xl mb-2" style={{ color: combo.fg, fontFamily: 'Inter, sans-serif' }}>
                            Read Me If You Can
                        </p>
                        <p className="text-sm" style={{ color: combo.fg, opacity: 0.85 }}>
                            {combo.label}
                        </p>
                        <div className="mt-3 px-3 py-1 rounded-full text-xs font-mono" style={{ background: 'rgba(0,0,0,0.3)', color: combo.fg }}>
                            {combo.bg} on {combo.fg}
                        </div>
                    </motion.div>

                    {/* Crime description */}
                    <div className="rounded-xl px-3 py-2 mb-3 text-xs text-white/50 text-center" style={{ background: 'rgba(255,71,87,0.1)', border: '1px solid rgba(255,71,87,0.2)' }}>
                        ⚠️ {combo.crime}
                    </div>

                    {/* Verdict buttons */}
                    <div className="grid grid-cols-2 gap-3">
                        <motion.button whileTap={{ scale: 0.95 }} onClick={() => handlePick(false)}
                            className="py-3 rounded-2xl font-bold text-sm text-white"
                            style={{ background: 'rgba(78,205,196,0.15)', border: '1px solid rgba(78,205,196,0.3)' }}>
                            😬 That's Terrible
                        </motion.button>
                        <motion.button whileTap={{ scale: 0.95 }} onClick={() => handlePick(true)}
                            className="py-3 rounded-2xl font-bold text-sm"
                            style={{ background: 'rgba(255,71,87,0.15)', border: '1px solid rgba(255,71,87,0.3)', color: '#FF6B6B' }}>
                            👍 Looks Fine To Me
                        </motion.button>
                    </div>
                </div>
            )}

            {phase === 'result' && (
                <div className="h-full flex flex-col p-5 overflow-auto">
                    <h3 className="font-display text-xl font-bold text-white mb-1 text-center">Now meet WCAG 😌</h3>
                    <p className="text-white/40 text-xs text-center mb-4">Accessible colour pairs that actually work.</p>

                    <div className="space-y-2 flex-1">
                        {WCAG_PALETTE.map((p, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                                className="rounded-xl px-4 py-3 flex items-center justify-between"
                                style={{ background: p.bg, border: '1px solid rgba(255,255,255,0.1)' }}>
                                <div>
                                    <p className="font-bold text-sm" style={{ color: p.fg }}>{p.label}</p>
                                    <p className="text-xs opacity-60" style={{ color: p.fg, fontFamily: 'monospace' }}>{p.bg}</p>
                                </div>
                                <span className="font-mono text-xs px-2 py-1 rounded-full flex-shrink-0 ml-2" style={{ background: 'rgba(255,255,255,0.1)', color: p.fg }}>{p.ratio}</span>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center text-white/30 text-xs italic my-3">"Accessible design is good design." — Everyone who matters</p>
                    <button onClick={start} className="w-full py-3 rounded-2xl font-bold text-white" style={{ background: 'linear-gradient(135deg,#FF4757,#FFE66D)' }}>See the Crimes Again 😈</button>
                </div>
            )}
        </div>
    );
};

export default ContrastGame;
