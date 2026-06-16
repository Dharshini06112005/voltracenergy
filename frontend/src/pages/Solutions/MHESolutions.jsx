import React, { useEffect, useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import FAQAccordion from '../../components/support/FAQAccordion';
import Button from '../../components/common/Button';
import { fetchProducts } from '../../services/api';
import { ShieldCheck, Truck, Zap, BatteryCharging } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MHESolutions() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadProducts = async () => {
      try {
        const data = await fetchProducts('mhe');
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadProducts();
  }, []);

  const benefits = [
    { title: "Rapid Opportunity Charging", desc: "Our MHE packs support fast opportunity charging. Plug in for 15-20 minutes during worker shifts to maintain charge without memory loss.", icon: BatteryCharging },
    { title: "24/7 Warehouse Uptime", desc: "Eliminates the need to exchange heavy battery blocks or maintain specialized battery charging rooms. Keep your forklifts in operation continuously.", icon: Zap },
    { title: "Industrial-Grade Safety", desc: "Equipped with heavy gauge steel enclosures, integrated safety contactors, and multi-sensor BMS protocols preventing over-current issues.", icon: ShieldCheck },
    { title: "High Vibration Resistance", desc: "Traction packs designed and certified to withstand constant shocks, rough warehouse floors, and dock-crossing environments.", icon: Truck }
  ];

  const faqs = [
    { question: "Can we replace a forklift lead-acid battery directly with Voltrac LFP?", answer: "Yes, our Forklift Pro series can be custom-weighted to match the counterweight specifications of your forklift, making it a direct drop-in replacement." },
    { question: "What is opportunity charging, and how does it benefit warehouse operations?", answer: "Opportunity charging means charging the battery whenever the vehicle is idle (e.g., during coffee breaks, shift changes, or loading idle time). Unlike lead-acid, LFP chemistry has no memory effect, allowing a single battery to operate 24/7." },
    { question: "Do these batteries communicate with the vehicle's controller?", answer: "Yes, our MHE packs feature integrated CAN-bus interface protocols (CAN 2.0B) that integrate with the forklift's controller and warehouse fleet telematics systems." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-700 animate-fade-in-up bg-blueprint-mhe">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
            Industrial Logistics
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">MHE & Forklift Solutions</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-semibold">
            Heavy-duty, fast-charging Lithium Iron Phosphate (LiFePO4) traction batteries built to power forklifts, reach trucks, and warehouse stackers under intense 24/7 shifts.
          </p>
        </div>
      </section>

      {/* Technical Benefits Grid */}
      <section className="py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Warehouse Efficiency"
            title="Engineered for Continuous Material Handling"
            description="Our industrial-grade traction battery packs eliminate battery rooms, acid spills, and off-hour charging delays."
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
              title="Material Handling Battery Packs"
              description="Heavy industrial steel battery boxes engineered to deliver peak power and fast recharges."
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
            description="Clear answers regarding forklift and forklift charger replacements."
          />
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
