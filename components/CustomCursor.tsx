
import React, { useState, useEffect } from 'react';

interface CustomCursorProps {
  section: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ section }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Determine cursor color/style based on section
  const getCursorStyle = () => {
    switch (section) {
      case 'home': return 'border-amber-600 bg-amber-600/20';
      case 'products': return 'border-blue-600 bg-blue-600/20';
      case 'about': return 'border-emerald-600 bg-emerald-600/20';
      case 'contact': return 'border-rose-600 bg-rose-600/20';
      default: return 'border-slate-600 bg-slate-600/20';
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 transition-transform duration-100 ease-out pointer-events-none z-[9999] ${getCursorStyle()} ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
        }}
      />
      <div
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white transition-opacity duration-300 pointer-events-none z-[10000]`}
        style={{
          transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
