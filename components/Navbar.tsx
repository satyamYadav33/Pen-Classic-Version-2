
import React from 'react';
import { PenTool, ShoppingCart, Info, Phone, LayoutGrid, Palette } from 'lucide-react';
import { ThemeType } from '../types';

interface NavbarProps {
  currentTheme: ThemeType;
  onThemeToggle: () => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentTheme, onThemeToggle, activeSection }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <PenTool size={18} /> },
    { id: 'products', label: 'Pens', icon: <LayoutGrid size={18} /> },
    { id: 'about', label: 'About', icon: <Info size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Phone size={18} /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b bg-opacity-80 px-4 md:px-8 py-4 ${
      currentTheme === 'modern' ? 'bg-slate-950/80 border-slate-800' : 
      currentTheme === 'minimal' ? 'bg-white/80 border-neutral-200' : 'bg-[#fdfcf0]/80 border-[#1a3a3a]/20'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollToSection('home')}>
          <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform">
            <PenTool size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">
            Satyaraj <span className="text-amber-600">Classic</span>
          </span>
        </div>

        {/* Quick Access Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex items-center space-x-1.5 transition-colors font-medium text-sm hover:text-amber-600 ${
                activeSection === item.id ? 'text-amber-600 underline underline-offset-8' : ''
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onThemeToggle}
            title="Change Theme"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors flex items-center space-x-2"
          >
            <Palette size={20} className="text-amber-600" />
            <span className="text-xs font-bold uppercase hidden lg:block">Change Theme</span>
          </button>
          
          <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
