
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { ThemeType, Section } from './types';
import { THEME_CONFIG } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeType>('classic');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Handle intersection observer to detect active section for cursor and nav
  useEffect(() => {
    const sections = ['home', 'products', 'about', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'classic') return 'modern';
      if (prev === 'modern') return 'minimal';
      return 'classic';
    });
  };

  const currentThemeStyles = THEME_CONFIG[theme];

  return (
    <div className={`min-h-screen transition-colors duration-700 ${currentThemeStyles.bg} ${currentThemeStyles.text}`}>
      <CustomCursor section={activeSection} />
      
      <Navbar 
        currentTheme={theme} 
        onThemeToggle={toggleTheme} 
        activeSection={activeSection}
      />

      <main>
        <Hero theme={theme} onThemeToggle={toggleTheme} />
        
        <ProductList />
        
        <About />
        
        <Contact />
      </main>

      <footer className={`py-12 border-t px-4 ${currentThemeStyles.border}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight">
              Satyaraj <span className="text-amber-600">Classic</span>
            </span>
          </div>
          
          <p className="text-sm opacity-50">
            © 2024 Satyaraj Classic Pens. Crafted with passion for precision.
          </p>

          <div className="flex space-x-6 text-sm font-bold uppercase tracking-widest opacity-70">
            <a href="#" className="hover:text-amber-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-amber-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-amber-600 transition-colors">Returns</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
