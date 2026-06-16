import React, { useEffect, useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import FAQAccordion from '../../components/support/FAQAccordion';
import Button from '../../components/common/Button';
import { fetchProducts } from '../../services/api';
import { ShieldCheck, Truck, Zap, Battery } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThreeWheelerSolutions() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadProducts = async () => {
      try {
        const data = await fetchProducts('three-wheeler');
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadProducts();
  }, []);

  const benefits = [
    { title: "High Usable Capacity", desc: "Unlike lead-acid batteries limited to 50% discharge, our LFP packs safely support up to 95% Depth of Discharge (DOD) without voltage sag.", icon: Battery },
    { title: "Heavy Payload Support", desc: "Built with structural cell linking and low internal resistance, providing high current draw and the high torque needed for steep climbs under full loads.", icon: Truck },
    { title: "Opportunity Charging", desc: "Charge batteries during lunch or tea breaks. LFP chemistry has no memory effect, meaning partial charges will not degrade pack lifetime.", icon: Zap },
    { title: "Dual Safety Venting", desc: "Every steel case features dual pressure relief valves and anti-propagation barriers to release internal pressure and protect passengers.", icon: ShieldCheck }
  ];

  const faqs = [
    { question: "What is the warranty period on e-rickshaw batteries?", answer: "We offer a 3-year or 3000-cycle commercial replacement warranty (whichever comes first) on our rickshaw battery packs, covering all electronic and cell configurations." },
    { question: "How much weight do we save by switching to Voltrac LFP batteries?", answer: "A typical lead-acid battery string weighs around 120 Kg. The Voltrac Rickshaw LFP weighs just 38.5 Kg, saving over 80 Kg of weight, which translates to reduced tire wear, better braking, and higher mileage." },
    { question: "Is the battery box shockproof and water-resistant?", answer: "Yes, our e-rickshaw batteries are housed in heavy gauge, powder-coated steel enclosures that are IP65 dust and water-resistant, specifically constructed to survive rough municipal roads." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-700 animate-fade-in-up bg-blueprint-rickshaw">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
            Commercial Transit
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">Three-Wheeler Battery Solutions</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-semibold">
            Premium LFP battery modules designed for e-rickshaws and cargo loaders. Powering last-mile public transit and urban logistics.
          </p>
        </div>
      </section>

      {/* Technical Benefits Grid */}
      <section className="py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Fleet Operations"
            title="Maximized Revenue, Minimized Down-time"
            description="Our heavy-duty three-wheeler batteries help operators run longer, load heavier, and eliminate maintenance costs."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="glass-card bg-white p-6 rounded-2xl flex items-start space-x-4 border border-slate-200/60 shadow-sm hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-brand-teal/10 text-brand-teal p-3 rounded-xl shrink-0 border border-brand-teal/20 shadow-sm animate-pulse-slow">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 font-heading mb-1.5 text-base">{b.title}</h4>
                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      {products.length > 0 && (
        <section className="py-24 px-4 md:px-6 bg-white border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              tag="Product Line"
              title="Electric Rickshaw & Cargo Batteries"
              description="Rugged steel cabinets built to withstand high vibration and daily commercial charge cycles."
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

      {/* FAQs Panel */}
      <section className="py-24 px-4 md:px-6 bg-slate-50" id="faq">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Support FAQs"
            title="Frequently Asked Questions"
            description="Clear answers regarding our passenger and cargo traction packs."
          />
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
