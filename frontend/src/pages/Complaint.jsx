import React, { useEffect, useState } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { submitComplaintForm } from '../services/api';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

export default function Complaint() {
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    email: '',
    productSerial: '',
    invoiceNumber: '',
    purchaseDate: '',
    issueDescription: ''
  });
  const [status, setStatus] = useState({ success: false, message: '', ticketId: '' });
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
      const result = await submitComplaintForm(formData);
      if (result.success) {
        setStatus({
          success: true,
          message: result.message,
          ticketId: result.ticketId
        });
        setFormData({ customerName: '', phone: '', email: '', productSerial: '', invoiceNumber: '', purchaseDate: '', issueDescription: '' });
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred lodging the complaint ticket. Please verify backend state.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-700">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
            Customer Support
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">Lodging & Warranty Support</h1>
          <p className="text-slate-650 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-semibold">
            Register your product complaint or warranty repair tickets directly. Our service engineers will respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Form container */}
      <section className="max-w-3xl mx-auto px-4 md:px-6 py-12">
        <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="flex items-start space-x-3.5 mb-8 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange p-5 rounded-2xl text-xs md:text-sm shadow-sm">
            <AlertTriangle className="shrink-0 text-brand-orange mt-0.5" size={18} />
            <span className="font-semibold leading-relaxed">Please have your purchase invoice and battery serial number ready before submitting a claim.</span>
          </div>

          {status.success ? (
            <div className="bg-brand-teal/10 border border-brand-teal/20 text-brand-teal p-8 rounded-2xl text-center space-y-4 shadow-sm">
              <CheckCircle2 size={40} className="mx-auto" />
              <h3 className="font-bold text-xl font-heading text-brand-teal">Ticket Registered Successfully</h3>
              <p className="text-xs md:text-sm leading-relaxed text-slate-700">{status.message}</p>
              <div className="bg-slate-50 border border-slate-200 inline-block px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-800">
                Support Ticket ID: {status.ticketId}
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Customer Full Name *</label>
                  <input
                    type="text"
                    name="customerName"
                    required
                    value={formData.customerName}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Contact Number *</label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Product Serial *</label>
                  <input
                    type="text"
                    name="productSerial"
                    required
                    placeholder="e.g. VT-LFP-2026-X"
                    value={formData.productSerial}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 placeholder-slate-400 shadow-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Invoice Number *</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    required
                    placeholder="e.g. INV-2026-X"
                    value={formData.invoiceNumber}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 placeholder-slate-400 shadow-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Purchase Date *</label>
                  <input
                    type="date"
                    name="purchaseDate"
                    required
                    value={formData.purchaseDate}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Details of Issue / Defect *</label>
                <textarea
                  name="issueDescription"
                  required
                  rows={5}
                  value={formData.issueDescription}
                  onChange={handleInputChange}
                  placeholder="Describe details regarding indicators, warnings, runtime drop..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 placeholder-slate-400 shadow-sm"
                ></textarea>
              </div>

              <div className="pt-4">
                <Button type="submit" variant="secondary" className="w-full py-4" disabled={loading}>
                  {loading ? 'Submitting ticket...' : 'Register Complaint Ticket'}
                </Button>
              </div>

            </form>
          )}

        </div>
      </section>

    </div>
  );
}
