import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Preloader,
  ScrollProgress,
  CursorTracker,
  Navigation,
  Footer,
} from './components';
import {
  Hero,
  About,
  Skills,
  Experience,
  Certificates,
  Projects,
  Contact,
} from './components/sections';
import './styles/globals.css';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  useEffect(() => {
    // Prevent scrolling during preloader
    if (!preloaderComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [preloaderComplete]);

  const handleExplore = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-dark">
      <AnimatePresence>
        {!preloaderComplete && (
          <Preloader onComplete={() => setPreloaderComplete(true)} />
        )}
      </AnimatePresence>

      {preloaderComplete && (
        <>
          <ScrollProgress />
          <CursorTracker />
          <Navigation isVisible={preloaderComplete} />

          <main className="w-full">
            <Hero onExplore={handleExplore} onContact={handleContact} />
            <About />
            <Skills />
            <Experience />
            <Certificates />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
