
import { Pen } from './types';

export const PENS: Pen[] = [
  {
    id: 1,
    name: "Classic Blue Ballpoint",
    price: 5,
    category: 'Ballpoint',
    image: "https://picsum.photos/seed/pen1/400/400",
    description: "Reliable, smooth writing for everyday use."
  },
  {
    id: 2,
    name: "Satyaraj Signature Gel",
    price: 15,
    category: 'Gel',
    image: "https://picsum.photos/seed/pen2/400/400",
    description: "Deep black ink with a waterproof finish."
  },
  {
    id: 3,
    name: "Executive Rollerball",
    price: 45,
    category: 'Rollerball',
    image: "https://picsum.photos/seed/pen3/400/400",
    description: "Perfectly balanced for the modern professional."
  },
  {
    id: 4,
    name: "Heritage Fountain Pen",
    price: 120,
    category: 'Fountain',
    image: "https://picsum.photos/seed/pen4/400/400",
    description: "Vintage aesthetics meet modern precision."
  },
  {
    id: 5,
    name: "Matte Black Fineliner",
    price: 25,
    category: 'Premium',
    image: "https://picsum.photos/seed/pen5/400/400",
    description: "Ultra-fine tip for precision sketching and notes."
  },
  {
    id: 6,
    name: "Gold Leaf Special Edition",
    price: 199,
    category: 'Premium',
    image: "https://picsum.photos/seed/pen6/400/400",
    description: "Luxury pen with gold accents and smooth flow."
  },
  {
    id: 7,
    name: "Student Comfort Grip",
    price: 10,
    category: 'Ballpoint',
    image: "https://picsum.photos/seed/pen7/400/400",
    description: "Designed for long writing sessions without fatigue."
  },
  {
    id: 8,
    name: "Crystal Clear Ink-Pen",
    price: 75,
    category: 'Fountain',
    image: "https://picsum.photos/seed/pen8/400/400",
    description: "See your ink levels in style with this transparent body."
  }
];

export const THEME_CONFIG = {
  classic: {
    bg: 'bg-[#fdfcf0]',
    text: 'text-slate-900',
    primary: 'bg-[#1a3a3a]',
    accent: 'text-[#c4a484]',
    border: 'border-[#1a3a3a]',
    button: 'bg-[#1a3a3a] text-white hover:bg-[#2c5252]'
  },
  modern: {
    bg: 'bg-slate-950',
    text: 'text-slate-100',
    primary: 'bg-indigo-600',
    accent: 'text-indigo-400',
    border: 'border-slate-800',
    button: 'bg-indigo-600 text-white hover:bg-indigo-500'
  },
  minimal: {
    bg: 'bg-white',
    text: 'text-black',
    primary: 'bg-neutral-900',
    accent: 'text-neutral-500',
    border: 'border-neutral-200',
    button: 'bg-black text-white hover:bg-neutral-800'
  }
};
