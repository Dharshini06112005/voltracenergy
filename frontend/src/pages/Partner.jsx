import React, { useEffect, useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { submitPartnerForm } from '../services/api';
import { ShieldCheck, Award, Handshake, CheckCircle2 } from 'lucide-react';

export default function Partner() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: 'Retailer',
    experienceYears: '',
    address: '',
    city: '',
    state: '',
    message: ''
  });
  const [status, setStatus] = useState({ success: false, message: '', applicationId: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await submitPartnerForm(formData);
      if (result.success) {
        setStatus({
          success: true,
          message: result.message,
          applicationId: result.applicationId
        });
        setFormData({
          businessName: '',
          contactPerson: '',
          email: '',
          phone: '',
          businessType: 'Retailer',
          experienceYears: '',
          address: '',
          city: '',
          state: '',
          message: ''
        });
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred submitting the dealership application. Please check backend connection.');
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    { title: "High Trade Margins", desc: "Gain highly competitive product wholesale pricing and premium quarterly bonuses.", icon: Award },
    { title: "Sales & Marketing Kit", desc: "Access high-quality banners, brochure booklets, product templates, and local ads support.", icon: ShieldCheck },
    { title: "Technical Training", desc: "Receive hands-on training for sizing battery banks, reading BMS codes, and installation operations.", icon: Handshake }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-700">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
            Partnership Portal
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">Become a Voltrac Dealer</h1>
          <p className="text-slate-655 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-semibold">
            Expand your portfolio by distributing India's safest and most intelligent lithium motive battery modules.
          </p>
        </div>
      </section>

      {/* Benefits Block */}
      <section className="py-24 px-4 md:px-6 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Why Voltrac?"
            title="Partner Benefits & Network Advantages"
            description="Our dealers gain access to a dedicated support desk and comprehensive training."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div key={idx} className="glass-card bg-white p-8 rounded-2xl text-center space-y-4 border border-slate-200/60 shadow-sm">
                  <div className="bg-brand-teal/10 text-brand-teal w-12 h-12 rounded-full flex items-center justify-center mx-auto border border-brand-teal/20 shadow-sm">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-bold text-slate-800 font-heading text-lg">{b.title}</h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 py-16">
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="text-center space-y-2 mb-12 relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">Dealership Registration</h2>
            <p className="text-slate-600 text-xs md:text-sm font-semibold">Submit your organization profile below to register your application.</p>
          </div>

          {status.success ? (
            <div className="bg-brand-teal/10 border border-brand-teal/20 text-brand-teal p-8 rounded-2xl text-center space-y-4 shadow-sm">
              <CheckCircle2 size={40} className="mx-auto" />
              <h3 className="font-bold text-xl font-heading text-brand-teal">Application Logged Successfully</h3>
              <p className="text-xs md:text-sm leading-relaxed text-slate-700">{status.message}</p>
              <div className="bg-slate-50 border border-slate-200 inline-block px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-800">
                Application Code: {status.applicationId}
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Business Name *</label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Contact Person Name *</label>
                  <input
                    type="text"
                    name="contactPerson"
                    required
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Nature of Business *</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-700 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  >
                    <option value="Retailer">Retailer / Sub-Dealer</option>
                    <option value="Distributor">Regional Distributor</option>
                    <option value="Fleet Operator">EV Fleet Operator / Aggregator</option>
                    <option value="OEM Partner">Automotive OEM Partner</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Years of Experience</label>
                  <input
                    type="number"
                    name="experienceYears"
                    value={formData.experienceYears}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">City *</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">State *</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Office Address *</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Message & Business Proposal</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Detail your sales target, network coverage, current battery brands you distribute..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-755 focus:outline-none focus:border-brand-teal transition-all duration-300 placeholder-slate-400 shadow-sm"
                ></textarea>
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" className="w-full py-4">
                  {loading ? 'Submitting registration...' : 'Submit Dealership Request'}
                </Button>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}
