import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import ProductCard from '../components/products/ProductCard';
import { fetchProducts } from '../services/api';
import { Search, RefreshCw } from 'lucide-react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Get active category from URL search query params
  const activeCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadProducts = async () => {
      setLoading(true);
      try {
        const catFilter = activeCategory === 'all' ? '' : activeCategory;
        const data = await fetchProducts(catFilter);
        setProducts(data);
      } catch (err) {
        console.error('Failed to load products:', err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [activeCategory]);

  const categories = [
    { label: 'All Categories', value: 'all' },
    { label: 'E-2 Wheeler', value: 'two-wheeler' },
    { label: 'E-3 Wheeler', value: 'three-wheeler' },
    { label: 'Golf Cart', value: 'golf-cart' },
    { label: 'MHE / Forklift', value: 'mhe' },
    { label: 'EV Chargers', value: 'ev-charger' },
    { label: 'Custom Packs', value: 'custom-traction' }
  ];

  const handleCategorySelect = (val) => {
    if (val === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', val);
    }
    setSearchParams(searchParams);
  };

  // Filter products by search query text
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-700">
      
      {/* Hero Banner Header */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
            Catalog
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">Power Catalog</h1>
          <p className="text-slate-650 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-semibold">
            Discover our comprehensive range of high-efficiency electric vehicle traction batteries, smart chargers, and custom powertrain power modules.
          </p>
        </div>
      </section>

      {/* Main Catalog Body */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        
        {/* Search & Filter Controls Panel */}
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm mb-12 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          
          {/* Search Field */}
          <div className="relative">
            <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search battery or model name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-xs text-slate-750 focus:outline-none focus:border-brand-teal transition-all duration-300"
            />
          </div>

          {/* Category Scrollers / Dropdown Links */}
          <div className="lg:col-span-2 flex flex-wrap gap-2 justify-start lg:justify-end">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategorySelect(cat.value)}
                className={`px-4 py-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.value
                    ? 'bg-brand-teal text-white shadow-sm border-transparent'
                    : 'bg-slate-50 border border-slate-250 text-slate-600 hover:bg-slate-100 hover:text-brand-teal'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Catalog Grid */}
        {loading ? (
          <div className="py-36 flex flex-col items-center justify-center space-y-4">
            <RefreshCw className="animate-spin text-brand-teal" size={40} />
            <p className="text-slate-600 font-bold text-sm tracking-wide">Retrieving product profiles...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white border border-slate-200 rounded-3xl p-12 max-w-2xl mx-auto shadow-sm">
            <p className="text-slate-800 font-bold text-xl mb-2 font-heading">No matching products found</p>
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm mx-auto mb-6">
              We couldn't find any models matching your query. Try resetting your search terms or choosing a different filter.
            </p>
            <button
              onClick={() => {
                setSearchParams({});
                setSearchTerm('');
              }}
              className="bg-brand-teal hover:bg-teal-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

    </div>
  );
}
