import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fetchBlogById } from '../services/api';
import { Calendar, User, ArrowLeft, RefreshCw, Bookmark } from 'lucide-react';

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadBlogDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchBlogById(id);
        setBlog(data);
      } catch (err) {
        console.error('Failed to load blog article:', err);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };
    loadBlogDetails();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="py-48 bg-slate-50 flex flex-col items-center justify-center space-y-4">
        <RefreshCw className="animate-spin text-brand-teal" size={40} />
        <p className="text-slate-600 font-bold text-sm tracking-wide">Loading article contents...</p>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-700">
      
      {/* Top Navigation banner */}
      <div className="bg-white border-b border-slate-200 py-4.5 px-4 md:px-6 select-none shadow-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-xs font-semibold text-slate-550">
          <Link to="/blog" className="flex items-center space-x-2 hover:text-brand-teal transition-colors duration-300">
            <ArrowLeft size={15} />
            <span>Back to Blogs</span>
          </Link>
          <div className="space-x-2 flex items-center">
            <Link to="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-brand-teal transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-800 line-clamp-1">{blog.title}</span>
          </div>
        </div>
      </div>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm p-6 md:p-12 space-y-6">
          
          {/* Article Header info */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold text-slate-550 uppercase tracking-widest">
              <div className="flex items-center space-x-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
                <Calendar size={12} className="text-brand-teal" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center space-x-1.5 bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-200">
                <User size={12} className="text-brand-teal" />
                <span>{blog.author}</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-5xl font-extrabold text-slate-900 font-heading leading-tight tracking-tight">
              {blog.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal to-brand-cyan rounded-2xl blur opacity-10"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-100 border border-slate-200/60 shadow-sm">
              <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Main text content parsing custom mockup blocks */}
          <div className="prose max-w-none text-slate-650 leading-relaxed text-sm md:text-base space-y-6 pt-6 border-t border-slate-200/60">
            {/* Split content by double newlines and render paragraph frames */}
            {blog.content.split('\n\n').map((para, i) => {
              if (para.startsWith('###')) {
                return (
                  <h3 key={i} className="text-xl md:text-2xl font-bold font-heading text-slate-900 pt-4 border-l-2 border-brand-teal pl-3">
                    {para.replace('###', '').trim()}
                  </h3>
                );
              }
              if (para.startsWith('####')) {
                return (
                  <h4 key={i} className="text-lg font-bold font-heading text-slate-805 pt-2">
                    {para.replace('####', '').trim()}
                  </h4>
                );
              }
              if (para.startsWith('*') || para.startsWith('-')) {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 text-xs md:text-sm text-slate-600">
                    {para.split('\n').map((li, j) => (
                      <li key={j}>{li.replace(/^[\s*-]+/, '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-slate-650 leading-relaxed">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Article Footer Tags */}
          {blog.tags && (
            <div className="pt-8 border-t border-slate-200/60 flex flex-wrap gap-2.5 items-center">
              <Bookmark size={15} className="text-slate-400" />
              {blog.tags.map(tag => (
                <span key={tag} className="bg-slate-50 border border-slate-200 text-slate-500 font-bold text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">
                  #{tag}
                </span>
              ))}
            </div>
          )}

        </div>
      </article>
 
    </div>
  );
}
