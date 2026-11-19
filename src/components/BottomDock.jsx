import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, List, FileDown } from 'lucide-react';
import { useGlobalLoading } from './LoadingContext';

export default function BottomDock({ currentView = 'home', onNavigate }) {
  const { triggerLoading } = useGlobalLoading();

  // Navigation Items requested: home, about, projects, download resume
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, isAction: false },
    { id: 'about', label: 'About', icon: User, isAction: false },
    { id: 'projects', label: 'Projects', icon: List, isAction: false },
    { id: 'resume', label: 'Download resume', icon: FileDown, isAction: true },
  ];

  const handleTabClick = (item) => {
    if (item.isAction && item.id === 'resume') {
      // Direct reliable download in synchronous user click handler
      const link = document.createElement('a');
      link.href = '/Charan_Tej_Resume.pdf';
      link.download = 'Charan_Tej_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Trigger smooth Framer canvas feedback
      triggerLoading(600);
      return;
    }

    triggerLoading(600, () => {
      if (onNavigate) {
        onNavigate(item.id);
      } else {
        if (item.id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(item.id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  };

  return (
    <motion.nav
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 select-none"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
    >
      <div className="bg-[#18181B]/95 backdrop-blur-xl border border-neutral-700/60 rounded-2xl p-1 sm:p-1.5 flex items-center gap-1 sm:gap-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.35)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => handleTabClick(item)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              title={item.label}
              className={`relative p-2 sm:p-2.5 rounded-xl transition-colors duration-200 cursor-pointer ${
                isActive
                  ? 'bg-[#2B2B30] text-emerald-400 shadow-inner'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800/50'
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.4 : 2} className="sm:w-[19px] sm:h-[19px]" />
              
              {/* Active Dot Indicator */}
              {isActive && (
                <motion.div
                  layoutId="active-dock-pill"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-400"
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </motion.nav>
  );
}
