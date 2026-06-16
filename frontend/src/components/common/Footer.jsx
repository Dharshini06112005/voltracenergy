import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Send, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to Voltrac Energy Updates!');
    e.target.reset();
  };

  return (
    <footer className="bg-slate-100 text-slate-600 pt-20 pb-10 border-t border-slate-200/80 select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-200">
          
          {/* Column 1: Brand details & Newsletter */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2.5 font-extrabold text-xl font-heading tracking-tight group">
              <div className="bg-brand-teal p-2 rounded-xl flex items-center justify-center shadow-sm">
                <Cpu size={20} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-slate-900 font-black tracking-tight leading-none">VOLTRAC</span>
                <span className="text-brand-orange text-[9px] font-extrabold tracking-widest mt-1">ENERGY</span>
              </div>
            </Link>
            <p className="text-xs text-slate-650 leading-relaxed max-w-sm font-medium">
              Powering the future of electric mobility with highly intelligent lithium traction packs and advanced BMS controllers. Leading India's green transport transition.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2 max-w-xs">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                Corporate newsletter
              </label>
              <div className="flex relative">
                <input
                  type="email"
                  placeholder="business@example.com"
                  required
                  className="w-full bg-white border border-slate-250 rounded-xl px-4 py-3 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all duration-300 shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bg-brand-teal hover:bg-teal-700 text-white p-2 rounded-lg transition-colors cursor-pointer shadow-sm"
                >
                  <Send size={12} />
                </button>
              </div>
            </form>
          </div>

          {/* Column 2: Solutions Navigation */}
          <div>
            <h4 className="text-slate-800 font-bold text-xs uppercase tracking-wider mb-6 font-heading border-l-2 border-brand-teal pl-3">
              Vehicle Solutions
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link to="/solutions/two-wheeler" className="hover:text-brand-teal transition-colors block font-bold text-slate-600">
                  Two-Wheeler Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/three-wheeler" className="hover:text-brand-teal transition-colors block font-bold text-slate-600">
                  Three-Wheeler Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/golf-cart" className="hover:text-brand-teal transition-colors block font-bold text-slate-600">
                  Golf Cart Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/mhe" className="hover:text-brand-teal transition-colors block font-bold text-slate-600">
                  MHE & Forklift Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/custom" className="hover:text-brand-teal transition-colors block font-bold text-slate-600">
                  Custom Traction Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Info */}
          <div>
            <h4 className="text-slate-800 font-bold text-xs uppercase tracking-wider mb-6 font-heading border-l-2 border-brand-teal pl-3">
              Company Portal
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link to="/about" className="hover:text-brand-teal transition-colors block font-bold text-slate-600">
                  About Voltrac
                </Link>
              </li>
              <li>
                <Link to="/about#leadership" className="hover:text-brand-teal transition-colors block font-bold text-slate-600">
                  Leadership Board
                </Link>
              </li>
              <li>
                <Link to="/about#facility" className="hover:text-brand-teal transition-colors block font-bold text-slate-600">
                  Manufacturing Plant
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-brand-teal transition-colors block font-bold text-slate-600">
                  News & Blogs
                </Link>
              </li>
              <li>
                <Link to="/partner" className="text-brand-teal hover:text-teal-700 transition-colors block font-black">
                  Become a Dealer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="space-y-4 text-xs font-semibold">
            <h4 className="text-slate-800 font-bold text-xs uppercase tracking-wider mb-6 font-heading border-l-2 border-brand-teal pl-3">
              Corporate Office
            </h4>
            <div className="flex items-start space-x-3 text-slate-650">
              <MapPin size={16} className="text-brand-teal mt-0.5 shrink-0" />
              <span className="leading-relaxed">Plot 24, Electronic City Phase II, Hosur Road, Bengaluru, Karnataka - 560100</span>
            </div>
            <a href="tel:+918049918000" className="flex items-center space-x-3 text-slate-650 hover:text-brand-teal transition-colors">
              <Phone size={15} className="text-brand-teal shrink-0" />
              <span>+91 80 4991 8000</span>
            </a>
            <a href="mailto:contact@voltracenergy.com" className="flex items-center space-x-3 text-slate-650 hover:text-brand-teal transition-colors">
              <Mail size={15} className="text-brand-teal shrink-0" />
              <span>contact@voltracenergy.com</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar Area */}
        <div className="pt-8 flex flex-col lg:flex-row justify-between items-center text-[10px] space-y-4 lg:space-y-0 text-slate-500 font-bold tracking-wide">
          
          {/* Copyright */}
          <div>
            &copy; {currentYear} Voltrac Energy Pvt. Ltd. All rights reserved.
          </div>

          {/* Certification badges */}
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center space-x-1.5 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
              <ShieldCheck size={13} className="text-brand-teal" />
              <span>ISO 9001:2015 CERTIFIED</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
              <ShieldCheck size={13} className="text-brand-teal" />
              <span>CE & ROHS COMPLIANT</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm">
              <ShieldCheck size={13} className="text-brand-orange" />
              <span>MADE IN INDIA</span>
            </div>
          </div>

          {/* Legal Pages */}
          <div className="flex space-x-4 uppercase">
            <a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-slate-700 transition-colors">Terms of Use</a>
          </div>

        </div>

      </div>
    </footer>
  );
}
