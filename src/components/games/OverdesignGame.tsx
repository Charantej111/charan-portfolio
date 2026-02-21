import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Plus } from 'lucide-react';

interface Effect {
    id: string;
    label: string;
    emoji: string;
    cost: number;
    cssKey: string;
}

const EFFECTS: Effect[] = [
    { id: 'shadow', label: 'Drop Shadow', emoji: '🌑', cost: 15, cssKey: 'shadow' },
    { id: 'gradient', label: 'Background Gradient', emoji: '🌈', cost: 20, cssKey: 'gradient' },
    { id: 'glow', label: 'Text Glow', emoji: '✨', cost: 18, cssKey: 'glow' },
    { id: 'animation', label: 'CSS Animation', emoji: '🎡', cost: 25, cssKey: 'animation' },
    { id: 'border', label: 'Rainbow Border', emoji: '🖼️', cost: 22, cssKey: 'border' },
];

const METER_LEVELS = [
    { max: 0, label: 'Clean Slate', color: '#4ECDC4' },
    { max: 30, label: 'Getting Busy...', color: '#FFE66D' },
    { max: 60, label: 'Overwhelmed 😰', color: '#FF6B6B' },
    { max: 85, label: 'CHAOS MODE 💀', color: '#FF2F54' },
    { max: 100, label: 'EXPLODED 🤯', color: '#FF0000' },
];

const OverdesignGame = ({ onClose }: { onClose: () => void }) => {
    const [phase, setPhase] = useState<'intro' | 'playing' | 'exploded' | 'reset'>('intro');
    const [meter, setMeter] = useState(0);
    const [applied, setApplied] = useState<Set<string>>(new Set());
    const [shaking, setShaking] = useState(false);

    const addEffect = (fx: Effect) => {
        if (applied.has(fx.id) || phase !== 'playing') return;
        const next = Math.min(meter + fx.cost, 100);
        setApplied(prev => new Set([...prev, fx.id]));
        setMeter(next);

        setShaking(true);
        setTimeout(() => setShaking(false), 400);

        if (next >= 100) {
            setTimeout(() => setPhase('exploded'), 600);
        }
    };

    const doReset = () => {
        setMeter(0);
        setApplied(new Set());
        setPhase('reset');
    };

    const restart = () => {
        setMeter(0);
        setApplied(new Set());
        setPhase('playing');
    };

    const meterLevel = METER_LEVELS.find((l, i) => meter <= l.max || i === METER_LEVELS.length - 1)!;
    const hasShadow = applied.has('shadow');
    const hasGradient = applied.has('gradient');
    const hasGlow = applied.has('glow');
    const hasAnimation = applied.has('animation');
    const hasBorder = applied.has('border');

    const mockBg = hasGradient
        ? 'linear-gradient(135deg,#ff0080,#ff8800,#00ff88,#0088ff,#8800ff)'
        : '#1a1a2e';
    const mockBorder = hasBorder
        ? '3px solid transparent'
        : '1px solid rgba(255,255,255,0.1)';
    const mockBorderImage = hasBorder
        ? 'linear-gradient(90deg,red,orange,yellow,green,blue,violet) 1'
        : undefined;
    const cardShadow = hasShadow
        ? '0 0 30px rgba(255,107,107,0.8), 0 0 60px rgba(78,205,196,0.4), 8px 8px 0 #000'
        : 'none';
    const textGlow = hasGlow
        ? '0 0 20px #FF6B6B, 0 0 40px #4ECDC4, 0 0 60px #FFE66D'
        : 'none';

    return (
        <div className="relative w-full" style={{ height: 500 }}>
            <button onClick={onClose} className="absolute top-3 right-3 z-20 p-1.5 rounded-full hover:bg-white/10 text-white/40 hover:text-white transition-colors"><X size={16} /></button>

            {phase === 'intro' && (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="text-5xl mb-4">💥</div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Overdesign Meter</h3>
                    <p className="text-white/50 text-sm mb-2">Keep adding shadows, gradients, and animations.<br />Watch the "Overdesign Meter" fill up. See what happens.</p>
                    <p className="text-white/30 text-xs italic mb-6">"Just one more effect" — Every designer before disaster</p>
                    <button onClick={() => setPhase('playing')} className="px-8 py-3 rounded-2xl font-bold text-white" style={{ background: 'linear-gradient(135deg,#6C63FF,#FF6B6B)' }}>
                        Start Overdesigning 💅
                    </button>
                </div>
            )}

            {phase === 'playing' && (
                <div className="h-full flex flex-col p-4">
                    {/* Overdesign Meter */}
                    <div className="mb-3">
                        <div className="flex justify-between items-center mb-1.5">
                            <span className="font-display font-bold text-xs" style={{ color: meterLevel.color }}>
                                Overdesign Meter: {meterLevel.label}
                            </span>
                            <span className="font-mono text-xs text-white/40">{meter}%</span>
                        </div>
                        <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                            <motion.div animate={{ width: `${meter}%` }} transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                                className="h-full rounded-full" style={{ background: `linear-gradient(90deg, #4ECDC4, ${meterLevel.color})` }} />
                        </div>
                    </div>

                    {/* Live UI mock */}
                    <motion.div
                        animate={shaking ? { x: [-4, 4, -4, 4, 0] } : {}}
                        transition={{ duration: 0.3 }}
                        className="rounded-2xl overflow-hidden mb-4 flex-1 p-3"
                        style={{ background: mockBg, border: mockBorder, borderImage: mockBorderImage, boxShadow: cardShadow, minHeight: 140 }}
                    >
                        {/* Mock nav */}
                        <div className="flex justify-between items-center mb-3 pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
                            <motion.span
                                animate={hasAnimation ? { rotate: [0, 360] } : {}}
                                transition={hasAnimation ? { duration: 1, repeat: Infinity, ease: 'linear' } : {}}
                                className="font-black text-sm" style={{ textShadow: textGlow, color: hasGlow ? '#FF6B6B' : '#fff' }}>
                                LOGO
                            </motion.span>
                            <div className="flex gap-2 text-white/50 text-xs">{['Work', 'About'].map(n => <span key={n}>{n}</span>)}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {[1, 2].map(i => (
                                <motion.div key={i}
                                    animate={hasAnimation ? { scale: [1, 1.05, 1] } : {}}
                                    transition={hasAnimation ? { duration: 0.8, repeat: Infinity, delay: i * 0.2 } : {}}
                                    className="rounded-xl p-2"
                                    style={{ background: hasGradient ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.05)', border: hasBorder ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.08)', boxShadow: hasShadow ? `0 0 20px rgba(${i === 1 ? '255,107,107' : '78,205,196'},0.5)` : 'none' }}>
                                    <div className="h-10 rounded-lg mb-1.5" style={{ background: i === 1 ? (hasGradient ? 'linear-gradient(90deg,#ff0080,#ff8800)' : 'rgba(255,107,107,0.3)') : (hasGradient ? 'linear-gradient(90deg,#00ff88,#0088ff)' : 'rgba(78,205,196,0.2)') }} />
                                    <div className="space-y-1">
                                        <div className="h-1.5 rounded-full w-4/5" style={{ background: 'rgba(255,255,255,0.15)' }} />
                                        <div className="h-1.5 rounded-full w-3/5" style={{ background: 'rgba(255,255,255,0.1)' }} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        {applied.size === 0 && <p className="text-center text-white/20 text-xs mt-3 italic">Clean and minimal. For now...</p>}
                    </motion.div>

                    {/* Effect buttons */}
                    <div className="grid grid-cols-5 gap-1.5">
                        {EFFECTS.map(fx => (
                            <motion.button key={fx.id} whileHover={!applied.has(fx.id) ? { scale: 1.05, y: -2 } : {}} whileTap={{ scale: 0.95 }}
                                onClick={() => addEffect(fx)} disabled={applied.has(fx.id)}
                                className="rounded-xl py-2 px-1 flex flex-col items-center gap-1 text-center transition-all"
                                style={{ background: applied.has(fx.id) ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.07)', border: `1px solid ${applied.has(fx.id) ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.15)'}`, opacity: applied.has(fx.id) ? 0.4 : 1, cursor: applied.has(fx.id) ? 'not-allowed' : 'pointer' }}>
                                <span className="text-base">{fx.emoji}</span>
                                {!applied.has(fx.id) && <Plus size={10} className="text-white/40" />}
                                <span className="text-white/50 font-mono leading-tight" style={{ fontSize: 8 }}>{fx.label.split(' ')[0]}</span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            )}

            {phase === 'exploded' && (
                <div className="h-full flex flex-col items-center justify-center p-6 text-center" style={{ background: 'linear-gradient(135deg,#ff0080,#ff8800,#00ff88,#0088ff,#8800ff)' }}>
                    <motion.div animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} className="text-5xl mb-3">🤯</motion.div>
                    <motion.h3 animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 0.5, repeat: Infinity }}
                        className="font-display text-2xl font-black mb-2" style={{ textShadow: '0 0 20px #fff, 0 0 40px #ff00ff', color: 'white' }}>
                        UI OVERLOADED
                    </motion.h3>
                    <p className="text-white/80 text-sm mb-1 font-bold">Too many effects. The design has achieved sentience and escaped.</p>
                    <p className="text-white/60 text-xs italic mb-5">"At some point, you're no longer designing a UI."</p>
                    <button onClick={doReset} className="px-8 py-3 rounded-2xl font-bold" style={{ background: 'rgba(0,0,0,0.5)', color: 'white', backdropFilter: 'blur(8px)' }}>
                        🧹 Reset to Clean
                    </button>
                </div>
            )}

            {phase === 'reset' && (
                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260 }} className="text-5xl mb-4">
                        🧘
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Clarity Restored</h3>
                    {/* Clean mock */}
                    <div className="w-full rounded-2xl p-4 mb-4 text-left" style={{ background: '#0a0a0f', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <div className="flex justify-between items-center mb-3 pb-2" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                            <span className="font-bold text-white text-sm">LOGO</span>
                            <div className="flex gap-3 text-white/30 text-xs">{['Work', 'About'].map(n => <span key={n}>{n}</span>)}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            {[1, 2].map(i => <div key={i} className="rounded-xl p-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                                <div className="h-8 rounded-lg mb-1" style={{ background: i === 1 ? 'rgba(255,107,107,0.25)' : 'rgba(78,205,196,0.18)' }} />
                                <div className="space-y-1"><div className="h-1.5 rounded-full w-4/5 bg-white/10" /><div className="h-1.5 rounded-full w-3/5 bg-white/07" /></div>
                            </div>)}
                        </div>
                    </div>
                    <p className="font-display text-sm font-bold text-white/70 italic mb-5">"Perfection is achieved when there is nothing left to remove." — Antoine de Saint-Exupéry</p>
                    <button onClick={restart} className="px-8 py-3 rounded-2xl font-bold text-white" style={{ background: 'linear-gradient(135deg,#6C63FF,#FF6B6B)' }}>Overdesign Again 💅</button>
                </div>
            )}
        </div>
    );
};

export default OverdesignGame;
