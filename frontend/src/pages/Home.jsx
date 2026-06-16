import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, ShieldCheck, Factory, Award, ArrowRight, Zap, RefreshCw, 
  Layers, Sliders, Battery, Scale, Eye, CheckCircle, Navigation, Info, Star 
} from 'lucide-react';
import HeroSlider from '../components/home/HeroSlider';
import StatsCounter from '../components/home/StatsCounter';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { fetchProducts, fetchBlogs } from '../services/api';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);

  // Battery specifications comparison tool state
  const [batteryA, setBatteryA] = useState("volt-moto-2w-lite");
  const [batteryB, setBatteryB] = useState("volt-moto-2w-pro");

  const comparisonData = {
    "volt-moto-2w-lite": {
      name: "Voltrac Moto 2W Lite",
      voltage: "60 V",
      capacity: "30 Ah",
      energy: "1.8 kWh",
      chemistry: "LiFePO4 (LFP)",
      cycles: "2500+ Cycles",
      weight: "12.8 Kg",
      ipRating: "IP67 Waterproof",
      compliance: "AIS 156 Phase 2 Certified",
      application: "Commuter Electric Scooters & Delivery E-Bikes"
    },
    "volt-moto-2w-pro": {
      name: "Voltrac Moto 2W Pro",
      voltage: "72 V",
      capacity: "42 Ah",
      energy: "3.0 kWh",
      chemistry: "LiFePO4 (LFP)",
      cycles: "3000+ Cycles",
      weight: "18.5 Kg",
      ipRating: "IP67 Waterproof",
      compliance: "AIS 156 Phase 2 Certified",
      application: "High-speed Scooters & Commercial Fleets"
    },
    "volt-rickshaw-lfp-48": {
      name: "Voltrac Rickshaw LFP 48V",
      voltage: "48 V (51.2V Nominal)",
      capacity: "100 Ah",
      energy: "5.12 kWh",
      chemistry: "LiFePO4 (LFP)",
      cycles: "3000+ Cycles",
      weight: "38.5 Kg",
      ipRating: "IP65 Weatherproof",
      compliance: "AIS 156 Compliant",
      application: "Passenger E-Rickshaws & Shuttles"
    },
    "volt-rickshaw-cargo": {
      name: "Voltrac Rickshaw Cargo",
      voltage: "51.2 V",
      capacity: "130 Ah",
      energy: "6.65 kWh",
      chemistry: "LiFePO4 (LFP)",
      cycles: "3500+ Cycles",
      weight: "49.0 Kg",
      ipRating: "IP66 Rugged Metal Case",
      compliance: "AIS 156 Compliant",
      application: "Commercial E-Cargo Loaders & Tow Carts"
    },
    "volt-turf-48": {
      name: "Voltrac TurfMaster 48V",
      voltage: "51.2 V",
      capacity: "100 Ah",
      energy: "5.12 kWh",
      chemistry: "LiFePO4 (LFP)",
      cycles: "3500+ Cycles",
      weight: "39.0 Kg",
      ipRating: "IP65 Enclosure",
      compliance: "N/A (Golf Cart Standard)",
      application: "Golf Carts & Resort Transit Shuttles"
    },
    "volt-traction-forklift": {
      name: "Voltrac Forklift Pro 80V",
      voltage: "83.2 V",
      capacity: "400 Ah",
      energy: "33.28 kWh",
      chemistry: "LiFePO4 (LFP)",
      cycles: "4000+ Cycles",
      weight: "395.0 Kg",
      ipRating: "IP65 Industrial Steel",
      compliance: "IEC 60068 Standards",
      application: "Heavy Counterbalance Forklifts & Lift Trucks"
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadHomeData = async () => {
      try {
        const prodData = await fetchProducts();
        // Get first three products to feature on front page
        setFeaturedProducts(prodData.filter(p => p.category !== 'ev-charger').slice(0, 3));
        
        const blogData = await fetchBlogs();
        setLatestBlogs(blogData.slice(0, 2));
      } catch (err) {
        console.error('Error fetching landing data:', err);
      }
    };
    loadHomeData();
  }, []);

  const solutions = [
    { title: "Two-Wheeler Solutions", desc: "Premium compact traction packs engineered to supply safety and range to e-scooter fleets.", path: "/solutions/two-wheeler", icon: Zap },
    { title: "Three-Wheeler Solutions", desc: "Heavy-duty electric 3W packs offering long lifetimes and opportunity charging for e-rickshaws.", path: "/solutions/three-wheeler", icon: RefreshCw },
    { title: "MHE & Forklift Solutions", desc: "Industrial LFP batteries for forklifts and pallet jacks, enabling 24/7 opportunity charge operations.", path: "/solutions/mhe", icon: Layers }
  ];

  // Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-700 select-none overflow-x-hidden bg-blueprint-home">
      {/* 1. Hero Slider Carousel */}
      <HeroSlider />

      {/* 2. Company Introduction */}
      <section className="py-24 px-4 md:px-6 bg-white border-b border-slate-200/60 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
        >
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Leading Electric Mobility with Intelligent LFP Vehicle Batteries
            </h2>
            <p className="text-slate-650 leading-relaxed text-sm md:text-base font-semibold">
              Voltrac Energy is a premier lithium battery manufacturer specialized in designing next-generation traction packs for electric scooters, e-rickshaws, golf carts, and material handling equipment. Driven by research and smart technology, we deliver reliable, safe, and highly efficient motive energy solutions across India.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-200/60 shadow-sm">
                <ShieldCheck className="text-brand-teal" size={22} />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">AIS 156 Certified</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-50 p-4 rounded-xl border border-slate-200/60 shadow-sm">
                <Factory className="text-brand-teal" size={22} />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">ISO 9001:2015 Units</span>
              </div>
            </div>
            <div className="pt-4">
              <Link to="/about">
                <Button variant="outline">Learn More About Us</Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-brand-cyan rounded-3xl blur opacity-10"></div>
            <div className="relative bg-white rounded-3xl overflow-hidden aspect-video shadow-lg border border-slate-200/40">
              <img
                src="/voltrac_battery_pack.png"
                alt="Voltrac premium lithium battery pack design"
                className="w-full h-full object-cover filter contrast-100"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. Statistics Counter Banner */}
      <StatsCounter />

      {/* 4. Product Categories Preview */}
      <section className="py-24 px-4 md:px-6 bg-slate-50 relative border-b border-slate-200/60">
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            tag="Products Showcase"
            title="Premium Vehicle Battery Solutions"
            description="Explore our range of engineered products built to power electric mobility, transport, and charging infrastructure."
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {featuredProducts.map((product) => (
              <motion.div 
                variants={cardVariants}
                key={product.id} 
                className="glass-card bg-white rounded-2xl p-6 flex flex-col justify-between border border-slate-200/80 shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <div className="h-48 bg-slate-100 rounded-xl overflow-hidden mb-5 border border-slate-200/50">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 font-heading">{product.name}</h3>
                  <p className="text-slate-550 text-xs italic mb-4">{product.tagline}</p>
                </div>
                <Link to={`/products/${product.id}`} className="mt-4 text-brand-teal hover:text-brand-orange text-xs font-bold uppercase tracking-wider flex items-center space-x-1 transition-colors duration-300">
                  <span>Specifications Profiles</span>
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link to="/products">
              <Button variant="primary">View Complete Catalog</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Demonstration Video Section */}
      <section className="py-24 px-4 md:px-6 bg-white border-b border-slate-200/60 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20 animate-pulse-slow">
              Motive Batteries in Action
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              Voltrac Product Performance Demonstration
            </h2>
            <p className="text-slate-650 leading-relaxed text-sm md:text-base font-semibold">
              Watch how our advanced motive batteries power various vehicle classes on municipal roads and industrial fields. Engineered to support high-speed EV controllers and aggressive energy recovery, our battery packs achieve maximum efficiency.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm font-bold text-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange shrink-0"></span>
                <span>Active load monitoring and voltage stabilization</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-bold text-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange shrink-0"></span>
                <span>Regenerative braking safety limits and control</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-bold text-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-orange shrink-0"></span>
                <span>Submersed vibration and water pressure testing standards</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-teal rounded-3xl blur opacity-15"></div>
            <div className="relative rounded-3xl overflow-hidden aspect-video bg-slate-900 shadow-lg border border-slate-200/40">
              <video
                src="https://raw.githubusercontent.com/intel-iot-devkit/sample-videos/master/car-detection.mp4"
                poster="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop"
                controls
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Battery Specification Comparison Tool */}
      <section className="py-24 px-4 md:px-6 bg-white relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            tag="Comparison Board"
            title="Vehicle Battery Specifications Finder"
            description="Select and compare technical specifications across our premium traction battery lines side-by-side."
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 border border-slate-200/80 p-6 md:p-10 rounded-3xl shadow-md max-w-5xl mx-auto"
          >
            {/* Selection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Compare Battery A</label>
                <div className="relative">
                  <select
                    value={batteryA}
                    onChange={(e) => setBatteryA(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-750 font-bold focus:outline-none focus:border-brand-teal shadow-sm cursor-pointer hover:border-slate-300 transition-colors"
                  >
                    {Object.keys(comparisonData).map(key => (
                      <option key={key} value={key}>{comparisonData[key].name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Compare Battery B</label>
                <div className="relative">
                  <select
                    value={batteryB}
                    onChange={(e) => setBatteryB(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-750 font-bold focus:outline-none focus:border-brand-teal shadow-sm cursor-pointer hover:border-slate-300 transition-colors"
                  >
                    {Object.keys(comparisonData).map(key => (
                      <option key={key} value={key}>{comparisonData[key].name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Specification Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="min-w-full divide-y divide-slate-200 text-xs">
                <thead>
                  <tr className="bg-slate-55/60 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                    <th className="px-6 py-4 text-left font-extrabold w-1/3 border-r border-slate-100">Parameters</th>
                    <th className="px-6 py-4 text-left font-extrabold text-brand-teal w-1/3 border-r border-slate-100">{comparisonData[batteryA].name}</th>
                    <th className="px-6 py-4 text-left font-extrabold text-brand-orange w-1/3">{comparisonData[batteryB].name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 font-semibold">
                  <tr className="hover:bg-slate-50/55 transition-colors">
                    <td className="px-6 py-4 bg-slate-50/30 text-slate-500 uppercase tracking-wider text-[9px] font-bold border-r border-slate-100 flex items-center space-x-2">
                      <Zap size={14} className="text-brand-teal" />
                      <span>Nominal Voltage</span>
                    </td>
                    <td className="px-6 py-4 border-r border-slate-100">{comparisonData[batteryA].voltage}</td>
                    <td className="px-6 py-4">{comparisonData[batteryB].voltage}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/55 transition-colors">
                    <td className="px-6 py-4 bg-slate-50/30 text-slate-500 uppercase tracking-wider text-[9px] font-bold border-r border-slate-100 flex items-center space-x-2">
                      <Battery size={14} className="text-brand-teal" />
                      <span>Battery Capacity</span>
                    </td>
                    <td className="px-6 py-4 border-r border-slate-100">{comparisonData[batteryA].capacity}</td>
                    <td className="px-6 py-4">{comparisonData[batteryB].capacity}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/55 transition-colors">
                    <td className="px-6 py-4 bg-slate-50/30 text-slate-500 uppercase tracking-wider text-[9px] font-bold border-r border-slate-100 flex items-center space-x-2">
                      <Layers size={14} className="text-brand-teal" />
                      <span>Total Energy</span>
                    </td>
                    <td className="px-6 py-4 border-r border-slate-100">{comparisonData[batteryA].energy}</td>
                    <td className="px-6 py-4">{comparisonData[batteryB].energy}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/55 transition-colors">
                    <td className="px-6 py-4 bg-slate-50/30 text-slate-500 uppercase tracking-wider text-[9px] font-bold border-r border-slate-100 flex items-center space-x-2">
                      <Cpu size={14} className="text-brand-teal" />
                      <span>Cell Chemistry</span>
                    </td>
                    <td className="px-6 py-4 border-r border-slate-100">{comparisonData[batteryA].chemistry}</td>
                    <td className="px-6 py-4">{comparisonData[batteryB].chemistry}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/55 transition-colors">
                    <td className="px-6 py-4 bg-slate-50/30 text-slate-500 uppercase tracking-wider text-[9px] font-bold border-r border-slate-100 flex items-center space-x-2">
                      <RefreshCw size={14} className="text-brand-teal" />
                      <span>Cycle Lifetime</span>
                    </td>
                    <td className="px-6 py-4 text-brand-teal font-bold border-r border-slate-100">{comparisonData[batteryA].cycles}</td>
                    <td className="px-6 py-4 text-brand-orange font-bold">{comparisonData[batteryB].cycles}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/55 transition-colors">
                    <td className="px-6 py-4 bg-slate-50/30 text-slate-500 uppercase tracking-wider text-[9px] font-bold border-r border-slate-100 flex items-center space-x-2">
                      <Scale size={14} className="text-brand-teal" />
                      <span>Net Weight</span>
                    </td>
                    <td className="px-6 py-4 border-r border-slate-100">{comparisonData[batteryA].weight}</td>
                    <td className="px-6 py-4">{comparisonData[batteryB].weight}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/55 transition-colors">
                    <td className="px-6 py-4 bg-slate-50/30 text-slate-500 uppercase tracking-wider text-[9px] font-bold border-r border-slate-100 flex items-center space-x-2">
                      <Eye size={14} className="text-brand-teal" />
                      <span>IP protection</span>
                    </td>
                    <td className="px-6 py-4 border-r border-slate-100">{comparisonData[batteryA].ipRating}</td>
                    <td className="px-6 py-4">{comparisonData[batteryB].ipRating}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/55 transition-colors">
                    <td className="px-6 py-4 bg-slate-50/30 text-slate-500 uppercase tracking-wider text-[9px] font-bold border-r border-slate-100 flex items-center space-x-2">
                      <CheckCircle size={14} className="text-brand-teal" />
                      <span>Compliance Status</span>
                    </td>
                    <td className="px-6 py-4 text-brand-teal font-bold border-r border-slate-100">{comparisonData[batteryA].compliance}</td>
                    <td className="px-6 py-4 text-brand-orange font-bold">{comparisonData[batteryB].compliance}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/55 transition-colors">
                    <td className="px-6 py-4 bg-slate-50/30 text-slate-500 uppercase tracking-wider text-[9px] font-bold border-r border-slate-100 flex items-center space-x-2">
                      <Navigation size={14} className="text-brand-teal" />
                      <span>Best Suited For</span>
                    </td>
                    <td className="px-6 py-4 leading-relaxed text-[11px] border-r border-slate-100">{comparisonData[batteryA].application}</td>
                    <td className="px-6 py-4 leading-relaxed text-[11px]">{comparisonData[batteryB].application}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Battery Technology Explainer Video Section */}
      <section className="py-24 px-4 md:px-6 bg-slate-50 border-b border-slate-200/60 relative overflow-hidden">
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-brand-cyan rounded-3xl blur opacity-15"></div>
            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-lg border border-slate-200/40">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop"
                alt="Voltrac advanced BMS microprocessor circuit board"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20 animate-pulse-slow">
              Inside The Cells
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              LFP Battery Technology Explainer
            </h2>
            <p className="text-slate-655 leading-relaxed text-sm md:text-base font-semibold">
              Dive into the technical mechanics of Voltrac Lithium Iron Phosphate (LiFePO4) traction cells. By designing safety valves and automated cell sorting, we ensure uniform cell health and prevent thermal degradation.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-1 font-heading">Thermal Stability</h4>
                <p className="text-[11px] text-slate-600 font-medium">Safe operations up to 60°C ambient temperatures without fire hazard risk.</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-1 font-heading">Smart Balancing</h4>
                <p className="text-[11px] text-slate-600 font-medium">Active multi-core BMS balancing ensures uniform cell aging and lifespan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Industry Solutions Area */}
      <section className="py-24 px-4 md:px-6 bg-slate-50 relative border-t border-b border-slate-200/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.03),transparent_40%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            tag="Industry Applications"
            title="Tailored Traction Deployments"
            description="Optimized battery solutions that support green mobility initiatives and industrial transit networks."
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {solutions.map((sol, index) => {
              const IconComp = sol.icon;
              return (
                <motion.div 
                  variants={cardVariants}
                  key={index} 
                  className="glass-card bg-white p-8 rounded-2xl space-y-4 border border-slate-200/60 hover:bg-slate-55 transition-all"
                >
                  <div className="bg-brand-teal/10 text-brand-teal w-12 h-12 rounded-xl flex items-center justify-center border border-brand-teal/20 shadow-sm">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">{sol.title}</h3>
                  <p className="text-slate-655 text-sm leading-relaxed font-semibold">{sol.desc}</p>
                  <Link to={sol.path} className="text-brand-teal hover:text-brand-orange text-xs font-bold uppercase tracking-widest block pt-2 transition-colors duration-300">
                    Solutions Overview &rarr;
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 7. Manufacturing & Technology Showcase */}
      <section className="py-24 px-4 md:px-6 bg-white border-b border-slate-200/60">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-orange to-brand-teal rounded-3xl blur opacity-10"></div>
            <div className="relative rounded-3xl overflow-hidden aspect-video bg-white shadow-lg border border-slate-200/40">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=500&auto=format&fit=crop"
                alt="Production plant assembly"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
              Quality Assurance
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              State-of-the-Art EV Battery Assembly Facility
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Voltrac batteries are assembled in dust-free, ESD-protected manufacturing facilities located in Noida and Bengaluru. Utilizing fully automated sorting, laser welding, and dynamic BMS diagnostic suites, we ensure every battery pack complies with strict automotive durability guidelines.
            </p>
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/60 shadow-sm">
                <div className="bg-brand-orange/10 text-brand-orange p-2.5 rounded-xl border border-brand-orange/20 shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">AIS 156 Phase II Compliant</h4>
                  <p className="text-xs text-slate-650 mt-0.5 font-semibold">Rigorous thermal containment tests prevent thermal propagation and venting issues.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/60 shadow-sm">
                <div className="bg-brand-teal/10 text-brand-teal p-2.5 rounded-xl border border-brand-teal/20 shrink-0">
                  <Cpu size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Smart Cell Balancing System</h4>
                  <p className="text-xs text-slate-650 mt-0.5 font-semibold">Every pack integrates a smart multi-core BMS that optimizes cell charging.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 8. Interactive Video & Safety Labs Gallery */}
      <section className="py-24 px-4 md:px-6 bg-slate-50 relative border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Safety & Automation"
            title="Voltrac Production & Labs in Motion"
            description="Witness our advanced manufacturing, automatic BMS programming, and rigorous cell stress testing."
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Video Card 1 */}
            <motion.div 
              variants={cardVariants}
              className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-100 bg-slate-100 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop"
                  alt="E-Scooter Battery Assembly"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-2.5 py-1 rounded-full border border-brand-orange/20">Precision Assembly</span>
                <h4 className="font-bold text-slate-800 text-sm mt-3 font-heading">E-Scooter Battery Assembly</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">Automatic welding of nickel strips onto lithium-ion cell cylindrical brackets for structural durability.</p>
              </div>
            </motion.div>

            {/* Video Card 2 */}
            <motion.div 
              variants={cardVariants}
              className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-100 bg-slate-100 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop"
                  alt="Automated Robot Sorting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-2.5 py-1 rounded-full border border-brand-teal/20">Intelligent BMS</span>
                <h4 className="font-bold text-slate-800 text-sm mt-3 font-heading">Automated Robot Sorting</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-medium">High speed cell impedance testing and grading matrix to guarantee perfect matching in each motive pack.</p>
              </div>
            </motion.div>

            {/* Video Card 3 */}
            <motion.div 
              variants={cardVariants}
              className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-100 bg-slate-100 shadow-inner">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop"
                  alt="Motive Charger Integrity"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-cyan bg-brand-cyan/10 px-2.5 py-1 rounded-full border border-brand-cyan/20">Fleet Validation</span>
                <h4 className="font-bold text-slate-800 text-sm mt-3 font-heading">Motive Charger Integrity</h4>
                <p className="text-xs text-slate-655 mt-1 font-semibold leading-relaxed">Simulated vehicle charging protocols validating continuous heavy high-amp thermal performance.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 9. Fleet Operator Reviews & Testimonials */}
      <section className="py-24 px-4 md:px-6 bg-white border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Customer Success"
            title="Trusted by Fleet Operators & OEMs"
            description="See how major transport cooperatives, e-commerce delivery hubs, and industrial warehousing partners rate Voltrac."
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Review 1 */}
            <motion.div 
              variants={cardVariants}
              className="glass-card bg-slate-50 p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex text-brand-orange space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-brand-orange" />
                  ))}
                </div>
                <p className="text-slate-600 text-xs md:text-sm italic leading-relaxed font-semibold">
                  "Switching our delivery fleet of 250 e-scooters to Voltrac Moto 2W Pro batteries completely changed our bottom line. Thermal safety concerns have dropped to zero, and range consistency is unparalleled."
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center font-bold text-brand-teal text-xs">
                  RS
                </div>
                <div>
                  <h5 className="font-bold text-xs text-slate-800">Rajesh Sharma</h5>
                  <p className="text-[10px] text-slate-500 font-semibold">Fleet Operations Manager, SwiftDelivery</p>
                </div>
              </div>
            </motion.div>

            {/* Review 2 */}
            <motion.div 
              variants={cardVariants}
              className="glass-card bg-slate-50 p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex text-brand-orange space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-brand-orange" />
                  ))}
                </div>
                <p className="text-slate-600 text-xs md:text-sm italic leading-relaxed font-semibold">
                  "Our passenger rickshaws run 14 hours a day with opportunity charging. The Voltrac Rickshaw LFP packs handle the high temperatures of NCR perfectly, with over 3000 charge cycles completed without degradation."
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center font-bold text-brand-orange text-xs">
                  AM
                </div>
                <div>
                  <h5 className="font-bold text-xs text-slate-800">Amit Mishra</h5>
                  <p className="text-[10px] text-slate-500 font-semibold">President, Metro E-Rickshaw Cooperative</p>
                </div>
              </div>
            </motion.div>

            {/* Review 3 */}
            <motion.div 
              variants={cardVariants}
              className="glass-card bg-slate-50 p-8 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex text-brand-orange space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="text-brand-orange" />
                  ))}
                </div>
                <p className="text-slate-600 text-xs md:text-sm italic leading-relaxed font-semibold">
                  "The heavy lift forklift operations in our warehouse require continuous, high-amp traction power. The Voltrac 80V LFP packs replaced our traditional lead-acid units, saving us thousands in maintenance and down-time."
                </p>
              </div>
              <div className="pt-6 border-t border-slate-200 mt-6 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center font-bold text-brand-cyan text-xs">
                  VK
                </div>
                <div>
                  <h5 className="font-bold text-xs text-slate-800">Vikram Kulkarni</h5>
                  <p className="text-[10px] text-slate-500 font-semibold">VP Supply Chain, Indus Logistics Hub</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 10. Corporate Blog Section */}
      <section className="py-24 px-4 md:px-6 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Knowledge Hub"
            title="Insights & EV Battery Advancements"
            description="Catch up on the latest technical discussions, thermal safety papers, and fleet management achievements."
          />

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {latestBlogs.map((blog) => (
              <motion.div 
                variants={cardVariants}
                key={blog.id} 
                className="glass-card bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row border border-slate-200/60 shadow-sm hover:shadow-md transition-all"
              >
                <div className="md:w-1/3 bg-slate-100 border-r border-slate-200/60">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover aspect-video md:aspect-auto" />
                </div>
                <div className="p-6 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal">{blog.date}</span>
                    <h3 className="font-bold text-base text-slate-900 mb-2 line-clamp-2 mt-1 font-heading leading-snug">{blog.title}</h3>
                    <p className="text-xs text-slate-655 leading-relaxed line-clamp-3 font-semibold">{blog.excerpt}</p>
                  </div>
                  <Link to={`/blog/${blog.id}`} className="text-xs font-bold text-brand-teal hover:text-brand-orange mt-4 inline-flex items-center space-x-1 transition-colors duration-300">
                    <span>Read Article</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 11. Partner B2B CTA */}
      <section className="py-20 bg-white px-4 md:px-6 relative overflow-hidden border-t border-slate-200/60">
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
        
        {/* Futuristic Card Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center space-y-6 relative z-10 bg-slate-50 border border-slate-200/80 p-10 md:p-16 rounded-3xl shadow-lg"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
            Partnership Opportunities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-slate-900 leading-tight">
            Join the Voltrac Distribution Network
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed font-semibold">
            Expand your product offering with India's safest, most intelligent electric vehicle battery modules. We offer comprehensive sales training, marketing toolkits, and premium technical support.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/partner">
              <Button variant="primary">Apply for Dealership</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">
                Contact Sales
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
