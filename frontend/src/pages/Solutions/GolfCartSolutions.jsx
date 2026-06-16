import React, { useEffect, useState } from 'react';
import SectionHeader from '../../components/common/SectionHeader';
import FAQAccordion from '../../components/support/FAQAccordion';
import Button from '../../components/common/Button';
import { fetchProducts } from '../../services/api';
import { ShieldCheck, Sparkles, Smile, Feather } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GolfCartSolutions() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadProducts = async () => {
      try {
        const data = await fetchProducts('golf-cart');
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadProducts();
  }, []);

  const benefits = [
    { title: "Saves 150+ Kg of Weight", desc: "Swapping heavy lead-acid sets for our LFP modules sheds massive deadweight, protecting turf lawns and reducing mechanical strain.", icon: Feather },
    { title: "Zero Maintenance Requirements", desc: "Say goodbye to acid spills, water top-ups, terminal corrosion, and complex monthly maintenance chores.", icon: ShieldCheck },
    { title: "Extended Run Times", desc: "Higher energy density yields more course rounds per charge, ensuring your cart fleet is always operational when needed.", icon: Sparkles },
    { title: "Integrated Bluetooth BMS", desc: "Track battery status, temperature, and cell balance in real-time directly on your smartphone via Bluetooth.", icon: Smile }
  ];

  const faqs = [
    { question: "How long does it take to charge a Voltrac golf cart battery?", answer: "Using our high-frequency chargers, a full recharge takes 3 to 4 hours, compared to 8 to 12 hours for traditional lead-acid battery banks." },
    { question: "Do I need to modify my golf cart to fit Voltrac lithium batteries?", answer: "No. Our TurfMaster battery series is designed as a direct drop-in replacement, matching standard battery compartment dimensions for major golf cart brands." },
    { question: "What is the lifespan of Voltrac golf cart batteries?", answer: "Our LFP batteries have a design life of over 10 years and are rated for 3,500+ charge cycles, backed by a 5-year replacement warranty." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-700 animate-fade-in-up bg-blueprint-golf">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
            Leisure & Utility
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">Golf Cart Battery Solutions</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-semibold">
            High-performance, drop-in Lithium Iron Phosphate (LiFePO4) batteries built to replace outdated lead-acid banks in golf cart fleets and resort shuttles.
          </p>
        </div>
      </section>

      {/* Technical Benefits Grid */}
      <section className="py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Turf Master Series"
            title="Premium Performance on the Greens"
            description="Experience lighter vehicles, faster charging times, and zero-maintenance operations with our premium LFP cells."
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
              title="Electric Golf Cart Batteries"
              description="Drop-in lithium modules constructed in compact, corrosion-resistant housings."
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
            description="Clear answers regarding golf cart battery replacements and maintenance."
          />
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
