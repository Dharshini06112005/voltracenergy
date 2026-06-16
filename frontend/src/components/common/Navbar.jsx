import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Cpu, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Close mobile drawer on routing
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Scroll listening for header sticky styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Company',
      dropdown: [
        { label: 'About Us', path: '/about' },
        { label: 'Leadership Board', path: '/about#leadership' },
        { label: 'Certificates & Facility', path: '/about#facility' }
      ]
    },
    {
      name: 'Products',
      dropdown: [
        { label: 'Two-Wheeler Batteries', path: '/products?category=two-wheeler' },
        { label: 'Three-Wheeler Batteries', path: '/products?category=three-wheeler' },
        { label: 'Golf Cart Batteries', path: '/products?category=golf-cart' },
        { label: 'MHE / Forklift Batteries', path: '/products?category=mhe' },
        { label: 'EV Charger Series', path: '/products?category=ev-charger' },
        { label: 'Custom Traction Packs', path: '/products?category=custom-traction' }
      ]
    },
    {
      name: 'Solutions',
      dropdown: [
        { label: 'Two-Wheeler Solutions', path: '/solutions/two-wheeler' },
        { label: 'Three-Wheeler Solutions', path: '/solutions/three-wheeler' },
        { label: 'Golf Cart Solutions', path: '/solutions/golf-cart' },
        { label: 'MHE & Forklift Solutions', path: '/solutions/mhe' },
        { label: 'Custom Traction Systems', path: '/solutions/custom' }
      ]
    },
    {
      name: 'Support',
      dropdown: [
        { label: 'Support FAQs', path: '/solutions/two-wheeler#faq' },
        { label: 'Register a Complaint', path: '/complaint' },
        { label: 'Become a Partner', path: '/partner' }
      ]
    },
    { name: 'Blogs', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleDropdownToggle = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 border-b border-slate-200/80 shadow-md' : 'bg-slate-50/90 backdrop-blur-sm py-5 border-b border-slate-200/30'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        
        {/* Branding Logo */}
        <Link to="/" className="flex items-center space-x-2.5 font-extrabold text-xl font-heading tracking-tight group">
          <div className="bg-brand-teal p-2 rounded-xl flex items-center justify-center shadow-md transition-all duration-300">
            <Cpu size={20} className="text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-brand-navy font-black tracking-tight leading-none group-hover:text-brand-teal transition-colors duration-300">VOLTRAC</span>
            <span className="text-brand-orange text-[9px] font-extrabold tracking-widest mt-1">ENERGY</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={link.name} className="relative group py-2" onMouseEnter={() => setActiveDropdown(index)} onMouseLeave={() => setActiveDropdown(null)}>
              {link.dropdown ? (
                <button
                  className="flex items-center space-x-1.5 text-slate-700 hover:text-brand-teal font-bold text-sm transition-colors py-1 cursor-pointer"
                  onClick={() => handleDropdownToggle(index)}
                >
                  <span>{link.name}</span>
                  <ChevronDown size={13} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
              ) : (
                <Link to={link.path} className="text-slate-700 hover:text-brand-teal font-bold text-sm transition-colors py-1">
                  {link.name}
                </Link>
              )}

              {/* Dropdown Menu Cards */}
              {link.dropdown && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl py-3.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-white border-t border-l border-slate-200 rotate-45"></div>
                  {link.dropdown.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.path}
                      className="block px-6 py-2.5 text-xs text-slate-700 hover:text-brand-teal hover:bg-slate-50 transition-all font-bold"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Quick Dealership Request Button */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/partner"
            className="flex items-center space-x-2 bg-brand-teal hover:bg-teal-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-300 group"
          >
            <span>Partner Portal</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-700 hover:text-brand-teal focus:outline-none p-1.5 bg-slate-100 rounded-xl border border-slate-200"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-0 top-[72px] bg-white border-b border-slate-250 h-[calc(100vh-72px)] overflow-y-auto z-40 py-6 px-6 shadow-xl"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <div key={link.name} className="border-b border-slate-100 pb-4">
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(index)}
                        className="flex justify-between items-center w-full text-slate-800 hover:text-brand-teal font-extrabold text-lg"
                      >
                        <span>{link.name}</span>
                        <ChevronDown size={18} className={`transition-transform duration-300 ${activeDropdown === index ? 'rotate-180 text-brand-teal' : 'text-slate-500'}`} />
                      </button>

                      {/* Dropdown Items list */}
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 ml-4 space-y-3.5 overflow-hidden"
                          >
                            {link.dropdown.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.path}
                                onClick={() => setIsOpen(false)}
                                className="block text-sm text-slate-600 hover:text-brand-teal py-1 font-bold"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-slate-800 hover:text-brand-teal font-extrabold text-lg"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              <Link
                to="/partner"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-brand-teal text-white font-bold py-3.5 rounded-xl block shadow-sm"
              >
                Become a Partner
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
