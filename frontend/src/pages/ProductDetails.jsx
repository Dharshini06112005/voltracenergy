import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchProductById, fetchProducts } from '../services/api';
import Button from '../components/common/Button';
import { ArrowLeft, CheckCircle2, ShieldCheck, Mail, Cpu, RefreshCw } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadDetails = async () => {
      setLoading(true);
      try {
        const prodData = await fetchProductById(id);
        setProduct(prodData);
        
        // Load related products
        const allProds = await fetchProducts();
        const filtered = allProds.filter(p => p.id !== id && p.category === prodData.category);
        setRelated(filtered.slice(0, 3));
      } catch (err) {
        console.error('Failed to load product details:', err);
        navigate('/products');
      } finally {
        setLoading(false);
      }
    };
    loadDetails();
  }, [id, navigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setEnquirySuccess(true);
    setTimeout(() => {
      setEnquirySuccess(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 5000);
  };

  if (loading) {
    return (
      <div className="py-48 bg-slate-50 flex flex-col items-center justify-center space-y-4">
        <RefreshCw className="animate-spin text-brand-teal" size={40} />
        <p className="text-slate-650 font-bold text-sm tracking-wide">Loading detailed specifications...</p>
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-700">
      
      {/* Upper Navigation Bar banner */}
      <div className="bg-white border-b border-slate-200 py-4.5 px-4 md:px-6 select-none shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-semibold text-slate-550">
          <Link to="/products" className="flex items-center space-x-2 hover:text-brand-teal transition-colors duration-300">
            <ArrowLeft size={15} />
            <span>Back to Products</span>
          </Link>
          <div className="space-x-2 flex items-center">
            <Link to="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-brand-teal transition-colors">Products</Link>
            <span>/</span>
            <span className="text-slate-800">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main product display section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Image Gallery Box */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-brand-cyan rounded-3xl blur opacity-10"></div>
              <div className="relative bg-white rounded-3xl overflow-hidden aspect-video shadow-md border border-slate-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Certifications and reliability tag flags */}
            <div className="glass-card bg-white border border-slate-200 rounded-2xl p-5 grid grid-cols-3 gap-4 text-center shadow-sm">
              <div className="space-y-1">
                <ShieldCheck size={20} className="text-brand-teal mx-auto" />
                <h5 className="font-extrabold text-slate-800 text-[9px] uppercase tracking-wider mt-1">100% LFP Safe</h5>
              </div>
              <div className="space-y-1 border-x border-slate-200">
                <Cpu size={20} className="text-brand-teal mx-auto" />
                <h5 className="font-extrabold text-slate-800 text-[9px] uppercase tracking-wider mt-1">Smart BMS</h5>
              </div>
              <div className="space-y-1">
                <Mail size={20} className="text-brand-orange mx-auto" />
                <h5 className="font-extrabold text-slate-800 text-[9px] uppercase tracking-wider mt-1">10-Yr Warranty</h5>
              </div>
            </div>
          </div>

          {/* Right Column: Key Details & Overview */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20 inline-block font-bold">
              {product.category.replace('-', ' ')}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              {product.name}
            </h1>
            <p className="text-slate-650 italic text-sm md:text-base font-semibold leading-relaxed">
              {product.tagline}
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {product.description}
            </p>

            {/* Key Features Bullet List */}
            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-slate-850 text-xs uppercase tracking-wider mb-4 border-l-2 border-brand-teal pl-3">Product Features</h4>
              {product.features.map((feat, i) => (
                <div key={i} className="flex items-start space-x-3 text-xs md:text-sm text-slate-650 font-medium">
                  <CheckCircle2 size={16} className="text-brand-teal mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <a href="#enquiry" className="w-full md:w-auto">
                <Button variant="primary" className="w-full md:w-auto">Request Price Quote</Button>
              </a>
            </div>
          </div>

        </div>

        {/* Technical Specifications & Application grids */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-24 pt-16 border-t border-slate-200/60">
          
          {/* Specifications Table */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold font-heading text-slate-900 border-l-2 border-brand-teal pl-3">Technical Specifications</h3>
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[9px] tracking-wider">
                    <th className="px-6 py-4.5">Parameter</th>
                    <th className="px-6 py-4.5">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 font-semibold">
                  {product.specifications.map((spec, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-slate-550">{spec.label}</td>
                      <td className="px-6 py-4 font-bold text-slate-850">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Applications list */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading text-slate-900 border-l-2 border-brand-teal pl-3">Suitable Applications</h3>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4">
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                This unit is optimized to operate in various electrical and environmental profiles, certified for:
              </p>
              <div className="space-y-3">
                {product.applications.map((app, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs md:text-sm font-bold text-slate-700 shadow-sm">
                    {app}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Enquiry form submission panel */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-14 shadow-md mt-24 relative overflow-hidden" id="enquiry">
          <div className="absolute right-0 top-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="max-w-2xl mx-auto space-y-8 relative z-10">
            <div className="text-center space-y-2">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-heading">
                B2B Price Enquiry
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-lg mx-auto font-medium">
                Are you interested in testing or deploying the <span className="font-bold text-brand-teal">{product.name}</span> in bulk? Submit details to retrieve custom trade pricing.
              </p>
            </div>

            {enquirySuccess ? (
              <div className="bg-brand-teal/10 border border-brand-teal/20 rounded-2xl p-6 text-center text-brand-teal space-y-2.5">
                <CheckCircle2 className="mx-auto" size={32} />
                <h4 className="font-bold text-lg">Enquiry Logged Successfully</h4>
                <p className="text-xs">Thank you for choosing Voltrac. A dedicated product manager will contact you with a datasheet and quotation shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Corporate Email *</label>
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
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Contact Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="space-y-1 md:col-span-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Message & Requirements</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={`Hello Voltrac Team, I am interested in bulk quantities of ${product.name}...`}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300 shadow-sm"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-2">
                  <Button type="submit" variant="primary" className="w-full py-4.5">
                    Submit Quotation Request
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        {related.length > 0 && (
          <div className="mt-24 pt-16 border-t border-slate-200/60">
            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-8 border-l-2 border-brand-teal pl-3">Related Battery Modules</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map(prod => (
                <div key={prod.id} className="glass-card bg-white rounded-2xl p-5 flex flex-col justify-between group border border-slate-200 shadow-sm hover:shadow-md transition-all">
                  <div>
                    <div className="h-40 bg-slate-50 rounded-xl overflow-hidden mb-4 border border-slate-200">
                      <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm font-heading group-hover:text-brand-teal transition-colors duration-300">{prod.name}</h4>
                    <p className="text-[10px] text-slate-500 italic mt-0.5 line-clamp-1">{prod.tagline}</p>
                  </div>
                  <Link to={`/products/${prod.id}`} className="mt-4 text-xs font-bold text-brand-teal hover:text-brand-orange block transition-colors duration-300">
                    Technical Specifications &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

      </section>

    </div>
  );
}
