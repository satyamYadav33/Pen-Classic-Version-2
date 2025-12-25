
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { ThemeType } from '../types';

interface HeroProps {
  theme: ThemeType;
  onThemeToggle: () => void;
}

const Hero: React.FC<HeroProps> = ({ theme, onThemeToggle }) => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full animate-pulse delay-1000" />

      <div className="text-center z-10 max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-widest uppercase mb-6 animate-bounce">
          Since 1998
        </span>
        
        <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
          Precision in Every <span className="text-amber-600 italic">Stroke</span>, Elegance in Every Word.
        </h1>
        
        <p className="text-lg md:text-xl opacity-80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Satyaraj Classic brings you a curated collection of fine writing instruments. 
          From professional ballpoints to heritage fountain pens, starting just at ₹5.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-amber-600 text-white rounded-full font-bold flex items-center space-x-3 hover:bg-amber-700 transition-all transform hover:scale-105"
          >
            <span>Explore Collection</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* This is the Tagline Button that changes theme */}
          <button 
            onClick={onThemeToggle}
            className={`px-8 py-4 border-2 rounded-full font-bold transition-all hover:bg-opacity-10 ${
              theme === 'modern' ? 'border-indigo-600 text-indigo-400 hover:bg-indigo-600' : 'border-amber-600 text-amber-600 hover:bg-amber-600'
            }`}
          >
            Switch to {theme === 'classic' ? 'Modern' : theme === 'modern' ? 'Minimal' : 'Classic'} Vibe
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
