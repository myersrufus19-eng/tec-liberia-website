
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import ThematicAreaPage from './pages/ThematicAreaPage';
import Partnership from './pages/Partnership';
import PartnershipIntake from './pages/PartnershipIntake';
import Reports from './pages/Reports';
import Activities from './pages/Activities';
import ChatBot from './components/ChatBot';

// ScrollToTop component to ensure navigation starts at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <span className="text-xl font-bold text-emerald-900 hidden md:block">TEC Liberia</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-sm font-medium ${location.pathname === '/' ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-600'}`}>Home</Link>
            <Link to="/about" className={`text-sm font-medium ${location.pathname === '/about' ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-600'}`}>Who We Are</Link>
            <Link to="/activities" className={`text-sm font-medium ${location.pathname === '/activities' ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-600'}`}>Stories</Link>
            <div className="relative group">
              <button className="text-sm font-medium text-slate-600 hover:text-emerald-600 flex items-center">
                Our Work
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-2 space-y-1">
                  <Link to="/theme/e-vawg" className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 rounded-lg">Ending Violence (E-VAWG)</Link>
                  <Link to="/theme/economic-empowerment" className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 rounded-lg">Economic Empowerment</Link>
                  <Link to="/theme/girls-education" className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 rounded-lg">Girls' Education</Link>
                  <Link to="/theme/civic-engagement" className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 rounded-lg">Civic Engagement</Link>
                  <Link to="/theme/climate-justice" className="block px-4 py-2 text-sm text-slate-700 hover:bg-emerald-50 rounded-lg">Climate Action</Link>
                </div>
              </div>
            </div>
            <Link to="/partnership">
              <button className="bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-800 transition shadow-sm">
                Partner With Us
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <Link onClick={() => setIsOpen(false)} to="/" className="block text-lg font-medium text-slate-700">Home</Link>
              <Link onClick={() => setIsOpen(false)} to="/about" className="block text-lg font-medium text-slate-700">Who We Are</Link>
              <Link onClick={() => setIsOpen(false)} to="/activities" className="block text-lg font-medium text-slate-700">Stories</Link>
              <Link onClick={() => setIsOpen(false)} to="/reports" className="block text-lg font-medium text-slate-700">Reports</Link>
              <Link onClick={() => setIsOpen(false)} to="/partnership" className="block text-lg font-medium text-slate-700">Partner With Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-emerald-950 text-emerald-100/70 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-1">
        <div className="flex items-center space-x-2 mb-6">
          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">T</div>
          <span className="text-xl font-bold text-white">TEC Liberia</span>
        </div>
        <p className="text-sm leading-relaxed">
          Empowering women, girls, and youth to lead inclusive, peaceful, and sustainable development across Liberia.
        </p>
      </div>
      
      <div>
        <h4 className="text-white font-bold mb-6">Quick Links</h4>
        <ul className="space-y-3 text-sm">
          <li><Link to="/" className="hover:text-white transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-white transition">Our Story</Link></li>
          <li><Link to="/activities" className="hover:text-white transition">Community Stories</Link></li>
          <li><Link to="/partnership" className="hover:text-white transition">Become a Partner</Link></li>
          <li><Link to="/reports" className="hover:text-white transition">Impact Reports</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Thematic Areas</h4>
        <ul className="space-y-3 text-sm">
          <li><Link to="/theme/e-vawg" className="hover:text-white transition">Gender Equality</Link></li>
          <li><Link to="/theme/economic-empowerment" className="hover:text-white transition">Economic Empowerment</Link></li>
          <li><Link to="/theme/girls-education" className="hover:text-white transition">Girls' Education</Link></li>
          <li><Link to="/theme/climate-justice" className="hover:text-white transition">Climate Justice</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-bold mb-6">Contact</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span>Monrovia, Liberia</span>
          </li>
          <li className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span>info@tecliberia.org</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-emerald-900 flex flex-col md:flex-row justify-between items-center text-xs">
      <p>&copy; {new Date().getFullYear()} The Empowerment Cycle (TEC). All Rights Reserved.</p>
      <div className="flex space-x-6 mt-4 md:mt-0">
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/theme/:id" element={<ThematicAreaPage />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/partnership-intake" element={<PartnershipIntake />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}
