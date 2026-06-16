import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="glass-card bg-white rounded-2xl shadow-sm hover:shadow-md flex flex-col h-full overflow-hidden group border border-slate-200">
      
      {/* Product Image Box */}
      <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0 border-b border-slate-200/60">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider text-brand-teal border border-brand-teal/20 shadow-sm">
          {product.category.replace('-', ' ')}
        </div>
      </div>

      {/* Info Block */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-base font-bold text-slate-800 group-hover:text-brand-teal transition-colors font-heading mb-1.5 line-clamp-1">
          {product.name}
        </h3>
        
        <p className="text-xs text-slate-500 font-medium mb-4 line-clamp-2 italic">
          {product.tagline}
        </p>

        {/* Brief Technical Specifications Bullet Grid */}
        {product.briefSpecs && product.briefSpecs.length > 0 && (
          <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-3.5 space-y-2 mb-6 text-xs flex-grow">
            {product.briefSpecs.slice(0, 3).map((spec, i) => (
              <div key={i} className="flex justify-between items-center border-b border-slate-200/40 pb-1.5 last:border-0 last:pb-0">
                <span className="font-semibold text-slate-550">{spec.label}</span>
                <span className="font-bold text-slate-700 text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Learn More Button link */}
        <Link
          to={`/products/${product.id}`}
          className="w-full bg-slate-100 hover:bg-brand-teal text-slate-700 hover:text-white font-bold text-xs py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 border border-slate-200 hover:border-transparent shrink-0 cursor-pointer shadow-sm hover:shadow"
        >
          <span>Technical Profile</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

    </div>
  );
}
