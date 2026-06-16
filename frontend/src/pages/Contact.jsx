import React, { useEffect, useState } from 'react';
import Button from '../components/common/Button';
import { submitContactForm } from '../services/api';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ success: false, message: '', referenceId: '' });
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
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus({
          success: true,
          message: result.message,
          referenceId: result.referenceId
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred submitting the contact enquiry. Please check backend connection.');
    } finally {
      setLoading(false);
    }
  };

  const offices = [
    { city: "Bengaluru Corporate HQ", addr: "Plot 24, Electronic City Phase II, Hosur Road, Bengaluru, Karnataka - 560100", phone: "+91 80 4991 8000", email: "hq@voltracenergy.com" },
    { city: "Noida Production Unit", addr: "B-48, Sector 63, Noida, Uttar Pradesh - 201301", phone: "+91 120 4552 900", email: "noida@voltracenergy.com" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-700">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">Contact Voltrac</h1>
          <p className="text-slate-650 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-semibold">
            Reach out to our product consultants, support desks, or corporate offices across India.
          </p>
        </div>
      </section>

      {/* Main content grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Office Details */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold font-heading text-slate-900 border-l-2 border-brand-teal pl-3">Corporate Offices</h2>
            
            <div className="space-y-6">
              {offices.map((off, idx) => (
                <div key={idx} className="glass-card bg-white border border-slate-200 p-6 rounded-2xl space-y-3 shadow-sm">
                  <h4 className="font-bold text-brand-teal text-xs uppercase tracking-widest">{off.city}</h4>
                  <div className="flex items-start space-x-2.5 text-xs md:text-sm text-slate-650 font-semibold">
                    <MapPin size={16} className="text-brand-teal mt-0.5 shrink-0" />
                    <span>{off.addr}</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs md:text-sm text-slate-650 font-semibold">
                    <Phone size={15} className="text-brand-teal shrink-0" />
                    <span>{off.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2.5 text-xs md:text-sm text-slate-650 font-semibold">
                    <Mail size={15} className="text-brand-teal shrink-0" />
                    <span>{off.email}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Clickable Map Frame */}
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Plot+24,+Electronic+City+Phase+II,+Hosur+Road,+Bengaluru,+Karnataka+-+560100"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-slate-100 rounded-2xl aspect-video relative overflow-hidden border border-slate-200 shadow-sm hover:border-brand-teal/50 hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400&auto=format&fit=crop"
                alt="HQ location Map screenshot"
                className="w-full h-full object-cover opacity-25 filter contrast-100 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-3 bg-white/40 backdrop-blur-[1px]">
                <div className="bg-brand-teal/10 p-3 rounded-full border border-brand-teal/20 text-brand-teal shadow-sm animate-bounce">
                  <MapPin size={32} />
                </div>
                <h5 className="font-bold text-slate-800 text-sm group-hover:text-brand-teal transition-colors duration-300">Plot 24, Hosur Road, Bengaluru</h5>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Security Gate 2 access for freight carriers</p>
              </div>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-2">Send an Inquiry</h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-6 font-semibold">
              Fill out the query form below. A business executive or technician will contact you shortly.
            </p>

            {status.success ? (
              <div className="bg-brand-teal/10 border border-brand-teal/20 text-brand-teal p-6 rounded-2xl text-center space-y-4 shadow-sm">
                <CheckCircle2 size={32} className="mx-auto" />
                <h4 className="font-bold text-lg">Message Sent Successfully</h4>
                <p className="text-xs">{status.message}</p>
                <div className="bg-slate-50 inline-block px-4 py-2 rounded-lg border border-slate-205 text-[10px] font-bold uppercase tracking-widest text-slate-700">
                  Reference ID: {status.referenceId}
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Contact Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button type="submit" variant="primary" className="w-full py-4" disabled={loading}>
                    {loading ? 'Submitting query...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
