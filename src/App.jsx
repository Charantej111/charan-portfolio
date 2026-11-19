import React, { useState } from 'react';
import BackgroundGrid from './components/BackgroundGrid';
import AnimatedRibbons from './components/AnimatedRibbons';
import Header from './components/Header';
import HeroCard from './components/HeroCard';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import WhatIOfferSection from './components/WhatIOfferSection';
import AboutHeroSection from './components/AboutHeroSection';
import ByTheNumbersSection from './components/ByTheNumbersSection';
import CareerCheckpointsSection from './components/CareerCheckpointsSection';
import CaseStudyModal from './components/CaseStudyModal';
import Footer from './components/Footer';
import BottomDock from './components/BottomDock';
import { LoadingProvider } from './components/LoadingContext';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'about' | 'projects' | 'case-study'
  const [activeProjectId, setActiveProjectId] = useState(2);
  const [previousView, setPreviousView] = useState('home');

  const handleNavigate = (targetId) => {
    if (targetId === 'home') {
      setCurrentView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === 'about') {
      setCurrentView('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === 'projects') {
      // Dedicated full Projects view showing all 4 projects
      setCurrentView('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetId === 'services' || targetId === 'contact') {
      // If we are not on home, switch to home first, then scroll
      if (currentView !== 'home') {
        setCurrentView('home');
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenCaseStudy = (projectId) => {
    setPreviousView(currentView);
    setActiveProjectId(projectId);
    setCurrentView('case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseCaseStudy = () => {
    const returnView = previousView === 'projects' ? 'projects' : 'home';
    setCurrentView(returnView);
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <LoadingProvider>
      <main className="relative w-full min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#FFFCF4] selection:bg-[#008ff0]/20 selection:text-black">
        {/* Canvas Grid Background */}
        <BackgroundGrid />

        {/* Top-Level Animated Fluid Ribbons (Hero) */}
        {currentView !== 'case-study' && (
          <div className="absolute top-0 left-0 right-0 h-[100vh] pointer-events-none overflow-hidden z-0">
            <AnimatedRibbons
              lineCount={2}
              strokeWidth={13}
              duration={4}
              startDelay={0.7}
              easing="easeInOut"
              redPlacement={{ rotation: 0, scale: 1, x: 10, y: 180 }}
              bluePlacement={{ rotation: 90, scale: 0.85, x: -110, y: -150 }}
            />
          </div>
        )}

        {/* Top Header Signature (Clickable logo -> Home) */}
        {currentView !== 'case-study' && (
          <Header onHomeClick={() => handleNavigate('home')} />
        )}

        {/* Dynamic View Router */}
        {currentView === 'case-study' ? (
          /* =================== CMS CASE STUDY VIEW =================== */
          <CaseStudyModal
            projectId={activeProjectId}
            onClose={handleCloseCaseStudy}
          />
        ) : currentView === 'about' ? (
          /* =================== ABOUT ME VIEW =================== */
          <div className="relative w-full flex flex-col items-center">
            <AboutHeroSection />
            <ByTheNumbersSection />
            <CareerCheckpointsSection />
            <Footer />
          </div>
        ) : currentView === 'projects' ? (
          /* =================== ALL PROJECTS VIEW (Shows All 4 Projects) =================== */
          <div className="relative w-full flex flex-col items-center">
            <ProjectsSection
              onOpenCaseStudy={handleOpenCaseStudy}
              limit={4}
              showAll={true}
              title="All Projects"
              tag="Portfolio_"
            />
            <Footer />
          </div>
        ) : (
          /* =================== HOME PAGE VIEW (Shows up to 3 Projects) =================== */
          <div className="relative w-full flex flex-col items-center">
            {/* 1. Hero Workspace */}
            <div className="relative pt-4 pb-20 sm:py-12 sm:min-h-[calc(100vh-100px)] flex items-center justify-center px-4 sm:px-6 z-10 w-full max-w-7xl mx-auto">
              <HeroCard />
            </div>

            {/* 2. More about me snippet */}
            <div id="about-snippet" className="w-full">
              <AboutSection onReadStory={() => handleNavigate('about')} />
            </div>

            {/* 3. Featured projects (Shows up to 3 projects on homepage) */}
            <div id="projects" className="w-full">
              <ProjectsSection
                onOpenCaseStudy={handleOpenCaseStudy}
                limit={3}
                onViewAll={() => handleNavigate('projects')}
              />
            </div>

            {/* 4. What I offer */}
            <div id="services" className="w-full">
              <WhatIOfferSection />
            </div>

            {/* 5. Contact / Footer */}
            <div id="contact" className="w-full">
              <Footer />
            </div>
          </div>
        )}

        {/* Floating Navigation Dock (hidden on full-page case study view) */}
        {currentView !== 'case-study' && (
          <BottomDock currentView={currentView} onNavigate={handleNavigate} />
        )}
      </main>
    </LoadingProvider>
  );
}
