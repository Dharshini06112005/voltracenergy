import React, { useEffect, useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import Button from '../../components/common/Button';
import { fetchProducts } from '../../services/api';
import { ShieldCheck, Anchor, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CustomSolutions() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadProducts = async () => {
      try {
        const data = await fetchProducts('custom-traction');
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadProducts();
  }, []);

  const useCases = [
    { title: "Electric Marine Propulsion", desc: "Custom LFP packs designed for electric boats, yachts, and passenger ferries with IP67 marine grade enclosures.", icon: Anchor },
    { title: "Specialized Utility Vehicles", desc: "Tailored voltage and dimensions for airport ground support vehicles, agricultural tractors, and tow vehicles.", icon: Compass },
    { title: "Retrofit EV Conversions", desc: "Design bespoke battery layouts and communication links to convert vintage cars or specialized machinery to electric drive.", icon: ShieldCheck }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-700 animate-fade-in-up bg-blueprint-custom">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
            Custom Engineering
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">Custom Traction Packs</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-semibold">
            Bespoke Lithium Iron Phosphate (LiFePO4) and Lithium NMC battery systems engineered for specialized electric vehicles, marine propulsion, and industrial applications.
          </p>
        </div>
      </section>

      {/* Custom Use Cases */}
      <section className="py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Specialty Electrification"
            title="Custom Engineering Deployments"
            description="Our custom battery team collaborates with designers and OEMs to deliver reliable energy solutions for unique electric vehicle architectures."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCases.map((uc, idx) => {
              const Icon = uc.icon;
              return (
                <div key={idx} className="glass-card bg-white p-8 rounded-2xl space-y-4 text-center border border-slate-200/60 shadow-sm hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-brand-teal/10 text-brand-teal w-12 h-12 rounded-full flex items-center justify-center mx-auto border border-brand-teal/20 shadow-sm animate-pulse-slow">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-bold text-slate-800 font-heading text-lg">{uc.title}</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{uc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Products Showcase */}
      {products.length > 0 && (
        <section className="py-24 px-4 md:px-6 bg-white border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              tag="Bespoke Systems"
              title="Voltrac Custom Engineered Range"
              description="Review our tailored vehicle battery offerings designed for specialized OEM parameters."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {products.map(prod => (
                <div key={prod.id} className="glass-card bg-slate-50/50 p-6 rounded-2xl flex flex-col justify-between group border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                  <div>
                    <div className="h-48 bg-slate-100 rounded-xl overflow-hidden mb-5 border border-slate-200">
                      <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h4 className="font-bold text-lg text-slate-850 font-heading group-hover:text-brand-teal transition-colors duration-300">{prod.name}</h4>
                    <p className="text-xs text-slate-500 italic mt-0.5 mb-4">{prod.tagline}</p>
                  </div>
                  <Link to={`/products/${prod.id}`}>
                    <Button variant="outline" className="w-full cursor-pointer">Technical Specifications</Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Consultation CTA banner */}
      <section className="py-16 bg-slate-50 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        {/* Card wrapper */}
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10 bg-white border border-slate-200 p-10 md:p-14 rounded-3xl shadow-sm">
          <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
            Design a Custom Vehicle Battery Pack for Your Project
          </h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto font-semibold">
            Collaborate with our R&D and applications engineering teams to design, weld, and deploy custom cell chemistry arrays configured for your specific voltage, size, and communication needs.
          </p>
          <div className="pt-2">
            <Link to="/contact">
              <Button variant="primary">Request Technical Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
