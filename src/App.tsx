import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Navigation from './components/Navigation';
import Cursor from './components/Cursor';
import FloatingOrbs from './components/FloatingOrbs';
import CursorCompanion from './components/CursorCompanion';
import LoadingScreen from './components/LoadingScreen';
import GamesHub from './components/GamesHub';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize ScrollTrigger
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div ref={mainRef} className="relative bg-background min-h-screen">
        {/* Noise Overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Custom Cursor */}
        <Cursor />

        {/* Cursor Companion */}
        <CursorCompanion />

        {/* Mini Games Hub */}
        <GamesHub />

        {/* Floating Gradient Orbs */}
        <FloatingOrbs />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
