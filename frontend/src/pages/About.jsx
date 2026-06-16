import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import { ShieldCheck, Target, Eye, Compass, ShieldAlert } from 'lucide-react';

export default function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  const values = [
    { title: "Safety First", desc: "No compromises on thermal boundaries. Every pack exceeds standard testing limits to assure total customer safety.", icon: ShieldAlert },
    { title: "Innovation", desc: "Continuous research in cell configurations, advanced BMS firmware, and smart IoT telemetry controls.", icon: Target },
    { title: "Sustainability", desc: "We utilize eco-friendly battery components and actively support lithium-ion recycling pipelines.", icon: Compass }
  ];

  const leaders = [
    { name: "Dr. K. Raghavan", role: "Managing Director & CEO", bio: "Former energy storage adviser to the Ministry of Power, with 30+ years in lead-acid and lithium research.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
    { name: "Shalini Kapoor", role: "Chief Financial Officer", bio: "Ex-investment banker with a focus on manufacturing and clean-tech startups across South Asia.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
    { name: "Dr. Arjan Dev", role: "VP - Research & Development", bio: "Ph.D. in Electrochemistry. Designer of Voltrac's signature dual-processor BMS system.", image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop" }
  ];

  const timeline = [
    { year: "2018", title: "Inception", desc: "Voltrac Energy founded in Noida as a small lithium cell research lab." },
    { year: "2020", title: "First Manufacturing Unit", desc: "Launched Bengaluru Unit I for assembling lightweight electric two-wheeler batteries." },
    { year: "2022", title: "Enterprise Scaling", desc: "Introduced Rickshaw Power packs and TurfMaster golf cart modules. Obtained ISO 9001 certifications." },
    { year: "2024", title: "AIS 156 Compliance", desc: "Secured AIS 156 Phase II safety clearances across all mobility pack models." },
    { year: "2026", title: "Industrial Traction", desc: "Launched Megawatt-Scale Forklift Traction Modules & smart charger lines." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-800">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-24 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
            Corporate Profile
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">About Voltrac Energy</h1>
          <p className="text-slate-655 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-semibold">
            Powering electric two-wheelers, three-wheelers, golf carts, and heavy Material Handling Equipment with reliable, AIS 156 certified LFP lithium technology.
          </p>
        </div>
      </section>

      {/* Overview Block */}
      <section className="py-24 px-4 md:px-6 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
              Overview
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">Engineering Smart Motive Power</h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Voltrac Energy is a premier, full-stack lithium energy company. We own and operate advanced assembly units in Delhi NCR (Noida) and Bengaluru, crafting battery modules for electric scooter fleets, e-rickshaws, commercial loaders, golf carts, and forklift traction drivetrains.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Unlike standard importers, Voltrac manages the entire lifecycle of battery packs. From raw LFP cell diagnostics and internal welding array design to developing custom smart BMS software modules, we monitor every step to deliver reliable quality.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-video bg-slate-100 shadow-md border border-slate-200/60">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=500&auto=format&fit=crop"
              alt="Voltrac storage solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="py-24 px-4 md:px-6 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="glass-card bg-white p-8 rounded-3xl space-y-4 border border-slate-200/80 shadow-sm">
              <div className="bg-brand-teal/10 w-12 h-12 rounded-xl flex items-center justify-center text-brand-teal border border-brand-teal/20 shadow-sm">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-850">Our Mission</h3>
              <p className="text-slate-650 text-sm leading-relaxed">
                To design and manufacture the safest, most durable lithium-ion traction battery systems in the world, enabling global fleet operators and logistics companies to accelerate the transition to sustainable electric mobility.
              </p>
            </div>
            <div className="glass-card bg-white p-8 rounded-3xl space-y-4 border border-slate-200/80 shadow-sm">
              <div className="bg-brand-orange/10 w-12 h-12 rounded-xl flex items-center justify-center text-brand-orange border border-brand-orange/20 shadow-sm">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-850">Our Vision</h3>
              <p className="text-slate-655 text-sm leading-relaxed font-semibold">
                To become the premier motive power technology partner for automotive OEMs, fleet managers, and industrial warehouse operations, paving the way for a circular, zero-emission transportation economy.
              </p>
            </div>
          </div>

          {/* Core Values grid */}
          <SectionHeader
            tag="Foundation Principles"
            title="Our Core Values"
            description="The pillars that support our engineering choices, workplace standards, and client relationships."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div key={i} className="glass-card bg-white p-8 rounded-2xl text-center space-y-4 border border-slate-200/60 shadow-sm">
                  <div className="bg-slate-50 w-12 h-12 rounded-full flex items-center justify-center text-brand-teal mx-auto border border-slate-200/60">
                    <IconComp size={22} />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-slate-800">{v.title}</h4>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-24 px-4 md:px-6 bg-white border-b border-slate-200/60" id="timeline">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Corporate Milestones"
            title="The Voltrac Journey"
            description="A timeline of our achievements and technological milestones."
          />
          
          <div className="relative border-l border-slate-200 ml-4 md:ml-32 space-y-12">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group">
                {/* Year tag left aligned on desktop */}
                <div className="absolute -left-4 md:-left-32 top-1 w-8 md:w-24 text-left font-extrabold text-brand-teal text-lg font-heading tracking-wide">
                  {item.year}
                </div>
                
                {/* Bubble point */}
                <div className="absolute -left-1.5 top-2.5 w-3.5 h-3.5 bg-brand-teal border-2 border-white rounded-full group-hover:scale-125 transition-transform shadow-sm"></div>
                
                {/* Content */}
                <div className="glass-card bg-slate-50/50 p-6 rounded-2xl border border-slate-200/60 hover:bg-slate-50 transition-colors">
                  <h4 className="font-bold text-slate-800 font-heading text-base mb-1">{item.title}</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Board */}
      <section className="py-24 px-4 md:px-6 bg-slate-50 border-b border-slate-200/60" id="leadership">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Executive Board"
            title="Our Leadership Team"
            description="Meet the engineers and business leaders driving our product vision and operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <div key={i} className="glass-card bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-sm">
                <div className="h-64 bg-slate-100 overflow-hidden relative border-b border-slate-200/40">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-850 font-heading">{leader.name}</h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-teal block mb-3 mt-0.5">{leader.role}</span>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing facility & Certificates preview */}
      <section className="py-24 px-4 md:px-6 bg-white" id="facility">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
              Safety & Standards
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">Approved Quality & Certifications</h2>
            <p className="text-slate-650 leading-relaxed text-sm md:text-base font-semibold">
              Voltrac maintains complete transparency in its testing reports. Every batch undergoes rigorous cycle capacity tests, shock tests, and extreme temperature thermal chamber operations before shipment.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-slate-200 p-4 rounded-xl flex items-center space-x-3 bg-slate-55/40">
                <ShieldCheck className="text-brand-teal shrink-0" size={18} />
                <span className="text-xs font-bold text-slate-700 tracking-wider">AIS 156 Safety Standard</span>
              </div>
              <div className="border border-slate-200 p-4 rounded-xl flex items-center space-x-3 bg-slate-55/40">
                <ShieldCheck className="text-brand-teal shrink-0" size={18} />
                <span className="text-xs font-bold text-slate-700 tracking-wider">ISO 9001:2015 Quality</span>
              </div>
              <div className="border border-slate-200 p-4 rounded-xl flex items-center space-x-3 bg-slate-55/40">
                <ShieldCheck className="text-brand-teal shrink-0" size={18} />
                <span className="text-xs font-bold text-slate-700 tracking-wider">CE Certified Products</span>
              </div>
              <div className="border border-slate-200 p-4 rounded-xl flex items-center space-x-3 bg-slate-55/40">
                <ShieldCheck className="text-brand-teal shrink-0" size={18} />
                <span className="text-xs font-bold text-slate-700 tracking-wider">RoHS Green Compliant</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-100 rounded-xl overflow-hidden h-44 relative border border-slate-200 shadow-sm">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop" alt="Lab station" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md p-3 text-xs font-bold text-slate-800 border-t border-slate-200">Noida Unit I</div>
            </div>
            <div className="bg-slate-100 rounded-xl overflow-hidden h-44 relative border border-slate-200 shadow-sm">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400&auto=format&fit=crop" alt="Production array" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md p-3 text-xs font-bold text-slate-800 border-t border-slate-200">Bengaluru Unit II</div>
            </div>
            <div className="bg-slate-100 rounded-xl overflow-hidden h-44 relative col-span-2 border border-slate-200 shadow-sm">
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop" alt="Facility exterior" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md p-3 text-xs font-bold text-slate-800 border-t border-slate-200">Advanced Testing Yard</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
