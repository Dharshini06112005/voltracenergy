import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../services/api';
import { Calendar, User, ArrowRight, RefreshCw } from 'lucide-react';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadBlogs = async () => {
      setLoading(true);
      try {
        const data = await fetchBlogs();
        setBlogs(data);
      } catch (err) {
        console.error('Failed to load blogs:', err);
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-700">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200 py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
            Media Hub
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold font-heading text-slate-900 tracking-tight">Voltrac Energy Blog</h1>
          <p className="text-slate-655 max-w-xl mx-auto text-sm md:text-base leading-relaxed font-semibold">
            Stay informed with the latest insights in Lithium battery chemistry, smart BMS development, and industrial power storage.
          </p>
        </div>
      </section>

      {/* Blog Listing Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {loading ? (
          <div className="py-36 flex flex-col items-center justify-center space-y-4">
            <RefreshCw className="animate-spin text-brand-teal" size={40} />
            <p className="text-slate-600 font-bold text-sm tracking-wide">Loading articles...</p>
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="glass-card bg-white rounded-2xl overflow-hidden flex flex-col h-full group border border-slate-200 shadow-sm hover:shadow-md transition-all">
                
                {/* Image Header */}
                <div className="h-48 bg-slate-100 overflow-hidden shrink-0 border-b border-slate-200/60">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Content Block */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-3">
                    
                    {/* Meta tags */}
                    <div className="flex items-center space-x-4 text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                      <div className="flex items-center space-x-1.5">
                        <Calendar size={12} className="text-brand-teal" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <User size={12} className="text-brand-teal" />
                        <span>{blog.author.split(',')[0]}</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-slate-800 font-heading hover:text-brand-teal transition-colors duration-300 line-clamp-2 leading-snug">
                      <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </h3>

                    <p className="text-xs md:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>

                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 shrink-0">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-xs font-bold text-brand-teal hover:text-brand-orange transition-colors duration-300 flex items-center space-x-1.5"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                </div>

              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-3xl p-8 max-w-lg mx-auto shadow-sm">
            <p className="text-slate-600 font-bold text-lg">No articles currently published</p>
          </div>
        )}
      </section>

    </div>
  );
}
