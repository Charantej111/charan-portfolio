import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Download } from 'lucide-react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    const resumes = [
        {
            country: 'India',
            link: 'https://docs.google.com/document/d/1u9I608RSLLnMixINheH46q3cKWdCJslA4SfbfCDpak8/edit?usp=sharing',
            color: '#FF9933', // Saffronish
            description: 'Optimized for Indian job market'
        },
        {
            country: 'UAE',
            link: 'https://docs.google.com/document/d/1wmFQ9dzbE-roBKbmXYu-XhRVG3bsBMuCJfMWi6MWv-8/edit?usp=sharing',
            color: '#00732F', // Greenish
            description: 'Tailored for UAE region'
        }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md bg-[#12121A] border border-white/10 rounded-2xl p-6 shadow-2xl z-10"
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-display text-xl font-bold text-white">Select Resume Version</h3>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="grid gap-4">
                            {resumes.map((resume) => (
                                <a
                                    key={resume.country}
                                    href={resume.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative p-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center gap-4"
                                    onClick={onClose}
                                >
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                                        style={{ backgroundColor: `${resume.color}20` }}
                                    >
                                        <span style={{ color: resume.color }}>
                                            {resume.country.substring(0, 2).toUpperCase()}
                                        </span>
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h4 className="font-bold text-white">{resume.country} Resume</h4>
                                            <MapPin size={14} className="text-white/40" />
                                        </div>
                                        <p className="text-sm text-white/50">{resume.description}</p>
                                    </div>

                                    <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 text-white/40 group-hover:text-white transition-colors">
                                        <Download size={20} />
                                    </div>
                                </a>
                            ))}
                        </div>

                        <p className="mt-6 text-center text-xs text-white/30">
                            Files will open in Google Docs
                        </p>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
