import React from 'react';

export default function SectionHeader({
  tag,
  title,
  description,
  align = 'center',
}) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  const tagColor = 'text-brand-teal';
  const titleColor = 'text-slate-900';
  const descColor = 'text-slate-600';

  return (
    <div className={`mb-16 max-w-3xl ${alignClass} ${align === 'center' ? 'mx-auto' : ''} animate-fade-in-up`}>
      {tag && (
        <span className={`text-xs font-bold uppercase tracking-widest ${tagColor} inline-block mb-3 bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20`}>
          {tag}
        </span>
      )}
      <h2 className={`text-3xl md:text-5xl font-extrabold tracking-tight ${titleColor} mb-4 font-heading leading-tight`}>
        {title}
      </h2>
      
      {/* Decorative Energy Bar */}
      <div className={`flex items-center gap-1.5 my-5 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className="h-1 w-12 bg-gradient-to-r from-brand-teal to-brand-cyan rounded-full"></div>
        <div className="h-1 w-1.5 bg-brand-orange rounded-full"></div>
      </div>

      {description && (
        <p className={`text-sm md:text-base ${descColor} leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
