
import React, { useState } from 'react';
import { ShoppingBag, Eye, Heart, Filter } from 'lucide-react';
import { PENS } from '../constants';
import { Pen } from '../types';

const ProductList: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Ballpoint', 'Gel', 'Rollerball', 'Fountain', 'Premium'];

  const filteredPens = filter === 'All' 
    ? PENS 
    : PENS.filter(pen => pen.category === filter);

  return (
    <section id="products" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Collection</h2>
          <p className="opacity-70 max-w-md italic">Refining the art of handwriting, one pen at a time.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat 
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' 
                : 'bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredPens.map((pen) => (
          <div key={pen.id} className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-transparent hover:border-amber-600/50 transition-all duration-500">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-slate-800">
              <img 
                src={pen.image} 
                alt={pen.name}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 shadow-md hover:bg-amber-600 hover:text-white transition-colors">
                  <Heart size={18} />
                </button>
                <button className="w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-slate-900 shadow-md hover:bg-amber-600 hover:text-white transition-colors">
                  <Eye size={18} />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                ₹{pen.price}
              </div>
            </div>

            {/* Details */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold tracking-tight leading-tight">{pen.name}</h3>
              </div>
              <p className="text-sm opacity-60 line-clamp-2 mb-6 h-10">{pen.description}</p>
              
              <div className="flex space-x-3">
                <button className="flex-1 px-4 py-3 bg-slate-900 dark:bg-slate-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2">
                  <ShoppingBag size={14} />
                  <span>Add to Cart</span>
                </button>
                <button className="px-6 py-3 bg-amber-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-amber-700 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPens.length === 0 && (
        <div className="text-center py-24">
          <p className="text-xl opacity-50">No pens found in this category.</p>
        </div>
      )}
    </section>
  );
};

export default ProductList;
