import React, { useState, useEffect } from "react";
import "./App.css";
import { ThemeProvider } from './contexts/ThemeContext';

//Components
import Header from './components/Header';
import AnimatedBackground from './components/AnimatedBackground';
import Footer from './components/Footer';
import LoadingPage from './components/LoadingPage'; // ← ADD THIS LINE

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true); // ← ADD THIS LINE
  const [showContent, setShowContent] = useState(false); // ← ADD THIS LINE

  // ← ADD THIS FUNCTION
  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // ← MODIFY THIS CONDITION
    if (showContent) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showContent]); // ← ADD showContent DEPENDENCY

  return (
    <ThemeProvider>
      {/* ← ADD LOADING SCREEN */}
      {isLoading && <LoadingPage onComplete={handleLoadingComplete} />}
      
      {/* ← WRAP EXISTING CONTENT WITH TRANSITION */}
      <div className={`App min-h-screen transition-all duration-1000 ${
        showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        {!isLoading && (
          <>
            <AnimatedBackground />
            <Header activeSection={activeSection} />
            <main>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;