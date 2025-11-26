import React, { useState, useEffect } from 'react';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import About from './src/components/About';
import Features from './src/components/Features';
import Games from './src/components/Games';
import Rewards from './src/components/Rewards';
import Testimonials from './src/components/Testimonials';
import Download from './src/components/Download';
import Footer from './src/components/Footer';
import PrivacyPolicy from './src/components/PrivacyPolicy';

type ViewState = 'home' | 'privacy';

const App: React.FC = () => {
  // Initialize view based on current URL path
  const [view, setView] = useState<ViewState>(() => {
    return window.location.pathname === '/privacy' ? 'privacy' : 'home';
  });

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/privacy') {
        setView('privacy');
      } else {
        setView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (targetView: ViewState, hash?: string) => {
    setView(targetView);
    
    if (targetView === 'privacy') {
      // Update URL to /privacy if not already there
      if (window.location.pathname !== '/privacy') {
        window.history.pushState(null, '', '/privacy');
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      // Go to Home
      // Update URL to / if not already there
      if (window.location.pathname !== '/') {
        window.history.pushState(null, '', '/');
      }

      if (hash) {
        // Small delay to allow home view to mount/render before calculating scroll position
        setTimeout(() => {
          const targetId = hash.replace('#', '');
          const element = document.getElementById(targetId);
          
          if (element) {
            const headerOffset = 85;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar currentView={view} onNavigate={handleNavigate} />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <About />
            <Features />
            <Games />
            <Rewards />
            {/* <Testimonials /> */}
            <Download />
          </>
        ) : (
          <PrivacyPolicy onBack={() => handleNavigate('home')} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;