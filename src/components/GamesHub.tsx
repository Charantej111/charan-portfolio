import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, VolumeX } from 'lucide-react';
import UpgradeGame from './games/UpgradeGame';
import LogoGame from './games/LogoGame';
import ContrastGame from './games/ContrastGame';
import OverdesignGame from './games/OverdesignGame';

// ── Audio track map ──────────────────────────────────────────────────────────
// Each value is the path relative to /public
const TRACKS = {
    hub: '/Monkeys Spinning Monkeys.mp3',   // hub selector screen
    upgrade: '/Kevin-MacLeod-Investigations(chosic.com).mp3',
    logo: '/Sneaky-Snitch(chosic.com).mp3',
    contrast: '/alexander-nakarada-silly-intro(chosic.com).mp3',
    overdesign: '/Monkeys Spinning Monkeys.mp3',
} as const;

// ── useGameAudio hook ─────────────────────────────────────────────────────────
function useGameAudio() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [muted, setMuted] = useState(false);
    const mutedRef = useRef(false);

    // Ensure we have an audio element exactly once
    const getAudio = useCallback(() => {
        if (!audioRef.current) {
            const a = new Audio();
            a.loop = true;
            a.volume = 0.45;
            audioRef.current = a;
        }
        return audioRef.current;
    }, []);

    const play = useCallback((src: string) => {
        const a = getAudio();
        if (a.src !== window.location.origin + src) {
            a.src = src;
            a.load();
        }
        a.muted = mutedRef.current;
        a.play().catch(() => {/* autoplay blocked — user gesture required */ });
    }, [getAudio]);

    const stop = useCallback(() => {
        const a = audioRef.current;
        if (!a) return;
        a.pause();
        a.currentTime = 0;
    }, []);

    const toggleMute = useCallback(() => {
        const next = !mutedRef.current;
        mutedRef.current = next;
        setMuted(next);
        if (audioRef.current) audioRef.current.muted = next;
    }, []);

    // Clean up on unmount
    useEffect(() => () => { stop(); }, [stop]);

    return { play, stop, toggleMute, muted };
}

// ── Types & data ─────────────────────────────────────────────────────────────
type GameId = 'upgrade' | 'logo' | 'contrast' | 'overdesign' | null;

const GAMES: { id: GameId; emoji: string; title: string; subtitle: string; color: string; tag: string }[] = [
    { id: 'upgrade', emoji: '🖥️', title: 'Upgrade the UI', subtitle: 'Evolve 2003 chaos into premium design', color: 'linear-gradient(135deg,#6C63FF,#FF6B6B)', tag: 'Clicker' },
    { id: 'logo', emoji: '🔴', title: 'Resize the Logo', subtitle: 'How far will you slide before chaos?', color: 'linear-gradient(135deg,#FF6B6B,#FFE66D)', tag: 'Chaos' },
    { id: 'contrast', emoji: '🎨', title: 'Colour Contrast Fail', subtitle: 'Rate the crimes. Learn WCAG the fun way.', color: 'linear-gradient(135deg,#FF4757,#FFE66D)', tag: 'Educational' },
    { id: 'overdesign', emoji: '💥', title: 'Overdesign Meter', subtitle: 'Keep adding effects until the UI explodes', color: 'linear-gradient(135deg,#6C63FF,#4ECDC4)', tag: 'Chaos' },
];

// ── Sub-components ────────────────────────────────────────────────────────────
const MuteBtn = ({ muted, onToggle }: { muted: boolean; onToggle: () => void }) => (
    <motion.button
        onClick={onToggle}
        whileTap={{ scale: 0.88 }}
        title={muted ? 'Unmute music' : 'Mute music'}
        className="absolute top-3 left-3 z-30 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all"
        style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: muted ? 'rgba(255,255,255,0.3)' : '#4ECDC4' }}
    >
        {muted ? <VolumeX size={12} /> : <Volume2 size={12} />}
        <span>{muted ? '(muted)' : '🎵'}</span>
    </motion.button>
);

const GameModal = ({ children, onClose }: { children: React.ReactNode; onClose: () => void }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)' }}
        onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
        <motion.div
            initial={{ scale: 0.88, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.88, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="w-full max-w-lg rounded-3xl overflow-hidden"
            style={{ background: 'hsl(240 20% 6%)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 80px rgba(0,0,0,0.7)' }}
        >
            {children}
        </motion.div>
    </motion.div>
);

// ── Main component ────────────────────────────────────────────────────────────
const GamesHub = () => {
    const [hubOpen, setHubOpen] = useState(false);
    const [activeGame, setActiveGame] = useState<GameId>(null);
    const { play, stop, toggleMute, muted } = useGameAudio();

    // Switch tracks whenever the active screen changes
    useEffect(() => {
        if (!hubOpen) { stop(); return; }
        if (activeGame) {
            play(TRACKS[activeGame]);
        } else {
            play(TRACKS.hub);
        }
    }, [hubOpen, activeGame, play, stop]);

    const closeAll = () => { setActiveGame(null); setHubOpen(false); };
    const backToHub = () => setActiveGame(null);

    return (
        <>
            {/* Floating 🎮 trigger */}
            <motion.button
                onClick={() => setHubOpen(true)}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 3.5, type: 'spring', stiffness: 260, damping: 18 }}
                whileHover={{ scale: 1.12, rotate: [0, -8, 8, 0] }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-[9990] w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-2xl"
                style={{ background: 'linear-gradient(135deg,#FF6B6B,#4ECDC4)', boxShadow: '0 8px 32px rgba(255,107,107,0.4)' }}
                title="Mini Games"
                data-cursor-hover
            >
                🎮
                <motion.div
                    className="absolute inset-0 rounded-2xl"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    style={{ border: '2px solid #FF6B6B' }}
                />
            </motion.button>

            <AnimatePresence>
                {/* Hub — game selector */}
                {hubOpen && !activeGame && (
                    <GameModal onClose={closeAll}>
                        <div className="p-5 max-h-[90vh] overflow-y-auto">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="font-display text-xl font-bold text-white">Mini Games 🎮</h2>
                                    <p className="text-white/30 text-xs mt-0.5">Designer-themed games. Funny, skippable, on-brand.</p>
                                </div>
                                <button onClick={closeAll} className="p-2 rounded-full hover:bg-white/10 text-white/40 hover:text-white transition-colors"><X size={18} /></button>
                            </div>

                            <div className="grid grid-cols-2 gap-2.5">
                                {GAMES.map((game, i) => (
                                    <motion.button
                                        key={game.id!}
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        whileHover={{ scale: 1.03, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        onClick={() => setActiveGame(game.id)}
                                        className="text-left rounded-2xl p-3.5 transition-all"
                                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                                        data-cursor-hover
                                    >
                                        <div className="w-full h-0.5 rounded-full mb-3" style={{ background: game.color }} />
                                        <div className="flex items-start justify-between gap-1 mb-1.5">
                                            <span className="text-xl">{game.emoji}</span>
                                            <span className="font-mono text-xs px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.35)', fontSize: 9 }}>{game.tag}</span>
                                        </div>
                                        <div className="font-display font-bold text-white text-sm leading-tight">{game.title}</div>
                                        <div className="text-white/30 text-xs mt-1 leading-snug">{game.subtitle}</div>
                                    </motion.button>
                                ))}
                            </div>
                            <p className="text-center text-white/15 text-xs mt-4 italic">All games are optional and skippable ✌️</p>

                            {/* music attribution */}
                            <p className="text-center text-white/10 text-[10px] mt-2">
                                Music: Kevin MacLeod &amp; Alexander Nakarada (incompetech.com / chosic.com) — CC BY 4.0
                            </p>
                        </div>
                    </GameModal>
                )}

                {activeGame === 'upgrade' && <GameModal onClose={closeAll}><MuteBtn muted={muted} onToggle={toggleMute} /><UpgradeGame onClose={backToHub} /></GameModal>}
                {activeGame === 'logo' && <GameModal onClose={closeAll}><MuteBtn muted={muted} onToggle={toggleMute} /><LogoGame onClose={backToHub} /></GameModal>}
                {activeGame === 'contrast' && <GameModal onClose={closeAll}><MuteBtn muted={muted} onToggle={toggleMute} /><ContrastGame onClose={backToHub} /></GameModal>}
                {activeGame === 'overdesign' && <GameModal onClose={closeAll}><MuteBtn muted={muted} onToggle={toggleMute} /><OverdesignGame onClose={backToHub} /></GameModal>}
            </AnimatePresence>
        </>
    );
};

export default GamesHub;
