
import React from 'react';
import { Award, ShieldCheck, Pen, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Award className="text-amber-600" />, title: "25+ Years", desc: "Crafting Excellence" },
    { icon: <ShieldCheck className="text-amber-600" />, title: "Quality First", desc: "No Compromises" },
    { icon: <Pen className="text-amber-600" />, title: "1M+ Pens", desc: "Sold Worldwide" },
    { icon: <Clock className="text-amber-600" />, title: "Timeless", desc: "Classic Designs" },
  ];

  return (
    <section id="about" className="py-24 bg-amber-600/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://picsum.photos/seed/about-pens/800/1000" 
              alt="Pen Crafting" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl hidden md:block border border-amber-600/20">
            <p className="text-4xl font-bold text-amber-600 mb-1">1998</p>
            <p className="text-xs uppercase font-bold tracking-widest opacity-60">Established with love for writing.</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Satyaraj Classic: Our Legacy</h2>
          <div className="space-y-6 text-lg opacity-80 leading-relaxed font-light">
            <p>
              Founded in 1998, Satyaraj Classic was born out of a simple belief: every thought deserves a perfect vessel. What started as a small workshop dedicated to handmade fountain pens has now grown into one of the most trusted names in writing instruments.
            </p>
            <p>
              Our pens range from the accessible everyday ₹5 ballpoint to premium ₹200 executive instruments. We don't just sell pens; we sell the joy of a smooth glide across paper, the weight of a balanced grip, and the permanence of quality ink.
            </p>
            <p>
              Located in the heart of the artisan district, our craftsmen combine traditional techniques with modern ergonomic research to ensure that every pen that leaves our facility is a masterpiece of utility and style.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl shadow-sm">
                  {stat.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{stat.title}</h4>
                  <p className="text-sm opacity-60">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
