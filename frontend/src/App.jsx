import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Frames
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Page Views
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Complaint from './pages/Complaint';
import Partner from './pages/Partner';

// Solutions Pages
import TwoWheelerSolutions from './pages/Solutions/TwoWheelerSolutions';
import ThreeWheelerSolutions from './pages/Solutions/ThreeWheelerSolutions';
import GolfCartSolutions from './pages/Solutions/GolfCartSolutions';
import MHESolutions from './pages/Solutions/MHESolutions';
import CustomSolutions from './pages/Solutions/CustomSolutions';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800">
        {/* Global Header Layout */}
        <Navbar />

        {/* Dynamic Route Switcher */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            
            {/* Solutions Routes */}
            <Route path="/solutions/two-wheeler" element={<TwoWheelerSolutions />} />
            <Route path="/solutions/three-wheeler" element={<ThreeWheelerSolutions />} />
            <Route path="/solutions/golf-cart" element={<GolfCartSolutions />} />
            <Route path="/solutions/mhe" element={<MHESolutions />} />
            <Route path="/solutions/custom" element={<CustomSolutions />} />

            {/* Blogs */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetails />} />

            {/* Support Forms */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/complaint" element={<Complaint />} />
            <Route path="/partner" element={<Partner />} />

            {/* Redirect fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer Layout */}
        <Footer />
      </div>
    </Router>
  );
}
