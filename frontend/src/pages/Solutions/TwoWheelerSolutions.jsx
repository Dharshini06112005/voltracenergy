import React, { useEffect, useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import FAQAccordion from '../../components/support/FAQAccordion';
import Button from '../../components/common/Button';
import { fetchProducts } from '../../services/api';
import { ShieldCheck, Zap, Award, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TwoWheelerSolutions() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadProducts = async () => {
      try {
        const data = await fetchProducts('two-wheeler');
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadProducts();
  }, []);

  const benefits = [
    { title: "AIS 156 Phase II Certified", desc: "Our 2W EV packs are fully certified under India's latest security directives. Built-in pressure relief vents and cell-to-cell thermal barriers prevent propagation.", icon: Award },
    { title: "High Thermal Margins", desc: "Engineered to operate safely in hot Indian summers up to 55°C without current clipping, voltage drops, or thermal degradation.", icon: Thermometer },
    { title: "Rapid Charging Support", desc: "Advanced cell layouts and smart charging algorithms allow 2W chargers to restore 80% capacity in under 45 minutes.", icon: Zap },
    { title: "IoT Connected Smart BMS", desc: "Integrated microcontrollers tracking individual cell health, voltage, temperature, and cycles with native CAN communications.", icon: ShieldCheck }
  ];

  const faqs = [
    { question: "Are Voltrac 2W batteries compliant with AIS 156 regulations?", answer: "Yes. All Voltrac two-wheeler traction packs are fully certified under AIS 156 Phase II regulations, including testing for thermal containment, water ingestion (IP67), and mechanical vibration resistance." },
    { question: "What is the expected lifecycle for the 2W battery packs?", answer: "Our 2W LFP packs are rated for 2,500 to 3,000 charge cycles at 80% Depth of Discharge (DOD). This translates to 7-10 years of typical daily commuting use." },
    { question: "Can I use standard chargers on your electric scooter batteries?", answer: "We highly recommend using our Voltrac ChargePack 2W smart charger, which is programmed with the optimal CC/CV profile and communicates directly with the pack BMS to prevent overcharging." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-700 animate-fade-in-up bg-blueprint-scooter">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
            E-Mobility Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">Two-Wheeler Battery Solutions</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-semibold">
            Highly secure, high-torque traction packs engineered to supply maximum mileage and safety to commuter and commercial electric 2W fleets.
          </p>
        </div>
      </section>

      {/* Technical Benefits Grid */}
      <section className="py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Engineering Standards"
            title="Designed for Daily Commutes & Deliveries"
            description="Our two-wheeler battery modules combine robust design with smart firmware to ensure high reliability."
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
              title="Electric 2-Wheeler Pack Modules"
              description="High-density traction battery cells built inside IP67 cast metal housings."
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
            description="Clear answers regarding our two-wheeler battery specifications, AIS 156 clearances, and charging recommendations."
          />
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
