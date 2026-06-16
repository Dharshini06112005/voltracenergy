import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=1200&auto=format&fit=crop",
      tag: "NEXT-GEN TRACTION PACKS",
      title: "Voltrac Moto 2W EV Batteries",
      description: "AIS 156 Phase II certified, highly compact lithium batteries delivering optimal torque and reliable mileage for commuter and delivery e-scooters.",
      btnText: "Explore Two-Wheeler Solutions",
      btnLink: "/solutions/two-wheeler"
    },
    {
      image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=1200&auto=format&fit=crop",
      tag: "COMMERCIAL FLEET ELECTRICITY",
      title: "Voltrac Rickshaw Power Series",
      description: "Heavy-duty electric 3W traction packs. Over 3,000 cyclic charges, supporting opportunity charging to double daily commercial transit revenues.",
      btnText: "Explore Three-Wheeler Solutions",
      btnLink: "/solutions/three-wheeler"
    },
    {
      image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1200&auto=format&fit=crop",
      tag: "INDUSTRIAL WAREHOUSE LOGISTICS",
      title: "Voltrac Industrial Turf & MHE Packs",
      description: "High-performance LFP batteries designed for forklifts, stackers, and golf carts. Save weight, charge quickly, and eliminate acid maintenance.",
      btnText: "View Industrial Solutions",
      btnLink: "/solutions/mhe"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[600px] md:h-[750px] overflow-hidden bg-slate-100 select-none">
      
      {/* Background slide transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Light overlay mask for clean contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/80 via-slate-50/40 to-slate-50/80 z-10"></div>
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover filter brightness-[0.95]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Floating particles animation */}
      <div className="absolute inset-0 bg-radial-at-t from-brand-teal/5 via-transparent to-transparent pointer-events-none z-10 animate-pulse-slow"></div>

      {/* Text Elements */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-6">
          
          {/* Premium Frosted Glass Container for Text - Light Mode */}
          <div className="max-w-2xl bg-white/85 backdrop-blur-xl border border-slate-200/80 p-8 md:p-14 rounded-3xl shadow-lg space-y-6">
            
            <motion.span
              key={`tag-${current}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block text-xs md:text-sm font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20"
            >
              {slides[current].tag}
            </motion.span>

            <motion.h1
              key={`title-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-5xl font-extrabold text-slate-905 leading-tight font-heading"
            >
              {slides[current].title}
            </motion.h1>

            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold"
            >
              {slides[current].description}
            </motion.p>

            <motion.div
              key={`btn-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link to={slides[current].btnLink}>
                <Button variant="primary" className="flex items-center space-x-2 group">
                  <span>{slides[current].btnText}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline">
                  Products Catalog
                </Button>
              </Link>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Manual Slide Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-brand-teal text-slate-700 hover:text-white p-3 rounded-full border border-slate-200/80 backdrop-blur-sm z-30 transition-all duration-300 shadow-md hidden md:block cursor-pointer"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-brand-teal text-slate-700 hover:text-white p-3 rounded-full border border-slate-200/80 backdrop-blur-sm z-30 transition-all duration-300 shadow-md hidden md:block cursor-pointer"
      >
        <ChevronRight size={24} />
      </button>

      {/* Pagination indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${current === idx ? 'w-8 bg-brand-teal shadow-sm' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
          />
        ))}
      </div>

    </div>
  );
}
