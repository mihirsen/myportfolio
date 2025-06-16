
import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Experience } from '../components/sections/Experience';
import { Testimonials } from '../components/sections/Testimonials';
import { Projects } from '../components/sections/Projects';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/sections/Footer';
import { Navigation } from '../components/layout/Navigation';
import { ThemeProvider } from '../components/providers/ThemeProvider';
import { useTheme } from '../components/providers/ThemeProvider';

const AppContent = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900'
    }`}>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Testimonials />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default Index;
