import React, { useEffect, useState, useRef } from 'react';

function CounterItem({ value, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseInt(value, 10);
          if (start === end) {
            setCount(end);
            return;
          }
          const duration = 2000; // 2 seconds
          const increment = end / (duration / 16); // ~60fps
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              clearInterval(timer);
              setCount(end);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [value]);

  return (
    <div ref={elementRef} className="text-center p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-brand-teal/30 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-4xl md:text-5xl font-black text-brand-teal font-heading mb-2">
        <span>{count}</span>
        <span className="text-brand-orange">{suffix}</span>
      </div>
      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{label}</p>
    </div>
  );
}

export default function StatsCounter() {
  const stats = [
    { value: 25, suffix: "+", label: "Years Industry Experience" },
    { value: 10, suffix: "k+", label: "Systems Installed" },
    { value: 500, suffix: "+", label: "MegaWatts Delivered" },
    { value: 15, suffix: "+", label: "Global Certifications" }
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-6 relative overflow-hidden border-b border-slate-200/60">
      {/* Decorative gradient overlay */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute left-0 top-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <CounterItem
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
