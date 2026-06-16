import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = activeIndex === idx;
        return (
          <div
            key={idx}
            className="border border-slate-200 bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
          >
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full flex justify-between items-center p-5 text-left font-bold text-slate-800 hover:text-brand-teal transition-colors focus:outline-none cursor-pointer"
            >
              <div className="flex items-center space-x-3 pr-4">
                <HelpCircle size={18} className="text-brand-teal shrink-0" />
                <span className="text-sm md:text-base">{item.question}</span>
              </div>
              <ChevronDown
                size={18}
                className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-teal' : ''}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-5 pt-2 text-slate-600 text-xs md:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
