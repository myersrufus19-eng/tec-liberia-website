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

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'vertical';
}

const TECLogo = ({ className = "", variant = "horizontal" }: LogoProps) => {
  const isVertical = variant === 'vertical';
  
  // Shared Emblem Group
  const Emblem = () => (
    <g>
      {/* HANDS EMBLEM */}
      <g transform="translate(0, 50)">
        {/* Left Hand (Brown) */}
        <path
          d="M30 180 C30 110, 60 70, 100 45 C110 90, 130 140, 200 190 C270 240, 300 270, 300 310 L300 370 L200 370 C140 370, 30 280, 30 180Z"
          fill="#925A3F"
        />
        {/* Right Hand (Dark Grey) */}
        <path
          d="M530 180 C530 110, 500 70, 460 45 C450 90, 430 140, 360 190 C290 240, 260 270, 260 310 L260 370 L360 370 C420 370, 530 280, 530 180Z"
          fill="#4B4B4B"
        />
        
        {/* FIGURES SILHOUETTES */}
        <g transform="translate(100, 10)">
          {/* Figure 1: Grey Female (Left) */}
          <g transform="translate(0, 50)">
            <circle cx={50} cy={0} r={22} fill="#A7A9AC" />
            <path d="M50 30 L25 100 L75 100 Z" fill="#A7A9AC" />
            <path d="M50 35 L10 10" stroke="#A7A9AC" strokeWidth={12} strokeLinecap="round" />
            <rect x={35} y={100} width={10} height={40} fill="#A7A9AC" />
            <rect x={55} y={100} width={10} height={40} fill="#A7A9AC" />
          </g>

          {/* Figure 2: Orange Female (Middle-Left) */}
          <g transform="translate(100, 30)">
            <circle cx={50} cy={0} r={24} fill="#E95E35" />
            <circle cx={30} cy={-5} r={10} fill="#E95E35" />
            <circle cx={70} cy={-5} r={10} fill="#E95E35" />
            <path d="M50 30 L25 105 L75 105 Z" fill="#E95E35" />
            <path d="M35 50 L10 10" stroke="#E95E35" strokeWidth={12} strokeLinecap="round" />
            <path d="M65 50 L90 10" stroke="#E95E35" strokeWidth={12} strokeLinecap="round" />
            <rect x={38} y={105} width={10} height={45} fill="#E95E35" />
            <rect x={52} y={105} width={10} height={45} fill="#E95E35" />
          </g>

          {/* Figure 3: Yellow Male (Middle-Right) */}
          <g transform="translate(210, 30)">
            <circle cx={50} cy={0} r={22} fill="#FDB913" />
            <rect x={35} y={30} width={30} height={50} rx={5} fill="#FDB913" />
            <rect x={35} y={80} width={12} height={70} fill="#FDB913" />
            <rect x={53} y={80} width={12} height={70} fill="#FDB913" />
            <path d="M35 40 L15 70 L35 80" fill="none" stroke="#FDB913" strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M65 40 L90 10" stroke="#FDB913" strokeWidth={12} strokeLinecap="round" />
          </g>

          {/* Figure 4: Dark Blue Male (Right) */}
          <g transform="translate(310, 50)">
            <circle cx={50} cy={0} r={22} fill="#545E6B" />
            <rect x={35} y={30} width={30} height={50} rx={5} fill="#545E6B" />
            <rect x={35} y={80} width={12} height={70} fill="#545E6B" />
            <rect x={53} y={80} width={12} height={70} fill="#545E6B" />
            <path d="M65 40 L95 10" stroke="#545E6B" strokeWidth={12} strokeLinecap="round" />
            <path d="M35 40 L20 80" stroke="#545E6B" strokeWidth={12} strokeLinecap="round" />
          </g>
        </g>
      </g>
    </g>
  );

  const Text = ({ x = 0, y = 0 }: { x?: number; y?: number }) => (
    <g transform={`translate(${x}, ${y})`}>
      <text
        x={0}
        y={50}
        fill="currentColor"
        style={{
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "80px",
          fontFamily: '"Playfair Display", serif',
        }}
      >
        The
      </text>

      <text
        x={0}
        y={155}
        fill="currentColor"
        style={{
          fontWeight: 900,
          fontSize: "115px",
          fontFamily: '"Arial Black", "Helvetica", sans-serif',
          letterSpacing: "-0.03em",
        }}
      >
        EMPOWERMENT
      </text>

      <text
        x={0}
        y={260}
        fill="currentColor"
        style={{
          fontWeight: 900,
          fontSize: "115px",
          fontFamily: '"Arial Black", "Helvetica", sans-serif',
          letterSpacing: "-0.03em",
        }}
      >
        CIRCLE
      </text>
    </g>
  );

  if (isVertical) {
    return (
      <svg
        viewBox="0 0 1000 900"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        className={className}
      >
        <g transform="translate(220, 20) scale(0.9)">
          <Emblem />
        </g>
        <g transform="translate(50, 480)">
          <Text x={0} y={0} />
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1600 450"
      width="100%"
      height="100%"
      preserveAspectRatio="xMinYMid meet"
      className={`${className} max-w-full`}
    >
      <g transform="translate(40, 20)">
        <Emblem />
      </g>
      <g transform="translate(580, 80)">
        <Text x={0} y={0} />
      </g>
    </svg>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-40">
          <div className="flex items-center h-full max-w-[70%] md:max-w-none">
            <Link to="/" className="flex items-center group py-2 h-full">
              <div className="transition-transform group-hover:scale-105 duration-300 h-full flex items-center">
                <TECLogo className="h-14 md:h-32 w-auto text-slate-900" />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className={`text-sm font-bold uppercase tracking-widest transition-all ${location.pathname === '/' ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-600'}`}>Home</Link>
            <Link to="/about" className={`text-sm font-bold uppercase tracking-widest transition-all ${location.pathname === '/about' ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-600'}`}>Who We Are</Link>
            <Link to="/activities" className={`text-sm font-bold uppercase tracking-widest transition-all ${location.pathname === '/activities' ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-600'}`}>Stories</Link>
            <div className="relative group">
              <button className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-emerald-600 flex items-center">
                Our Work
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="p-3 space-y-1 text-left">
                  <Link to="/theme/e-vawg" className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-emerald-50 rounded-xl transition">Ending Violence (E-VAWG)</Link>
                  <Link to="/theme/economic-empowerment" className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-emerald-50 rounded-xl transition">Economic Empowerment</Link>
                  <Link to="/theme/girls-education" className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-emerald-50 rounded-xl transition">Girls' Education</Link>
                  <Link to="/theme/civic-engagement" className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-emerald-50 rounded-xl transition">Civic Engagement</Link>
                  <Link to="/theme/climate-justice" className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-emerald-50 rounded-xl transition">Climate Action</Link>
                </div>
              </div>
            </div>
            <Link to="/partnership">
              <button className="bg-emerald-700 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.25em] hover:bg-emerald-800 transition shadow-xl shadow-emerald-900/20 active:scale-95">
                Partner With Us
              </button>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 p-2 focus:outline-none">
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
            <div className="px-6 py-12 space-y-10 text-center">
              <Link onClick={() => setIsOpen(false)} to="/" className="block text-2xl font-black uppercase tracking-widest text-slate-700">Home</Link>
              <Link onClick={() => setIsOpen(false)} to="/about" className="block text-2xl font-black uppercase tracking-widest text-slate-700">Who We Are</Link>
              <Link onClick={() => setIsOpen(false)} to="/activities" className="block text-2xl font-black uppercase tracking-widest text-slate-700">Stories</Link>
              <Link onClick={() => setIsOpen(false)} to="/reports" className="block text-2xl font-black uppercase tracking-widest text-slate-700">Reports</Link>
              <Link onClick={() => setIsOpen(false)} to="/partnership" className="block text-2xl font-black uppercase tracking-widest text-emerald-700">Partner With Us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-emerald-950 text-emerald-100/70 pt-20 md:pt-32 pb-16 w-full">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-20 md:mb-32">
      <div className="col-span-1">
        <div className="flex flex-col items-start mb-8">
          <TECLogo 
            variant="vertical" 
            className="h-32 md:h-56 w-auto text-white opacity-95" 
          />
        </div>
        <p className="text-lg leading-relaxed mt-4 max-w-sm">
          Empowering women, girls, and youth to lead inclusive, peaceful, and sustainable development across Liberia.
        </p>
      </div>
      
      <div>
        <h4 className="text-white font-black uppercase tracking-[0.3em] mb-8 md:mb-12 text-sm">Quick Access</h4>
        <ul className="space-y-4 md:space-y-6 text-sm font-bold uppercase tracking-[0.2em]">
          <li><Link to="/" className="hover:text-white transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-white transition">Our Identity</Link></li>
          <li><Link to="/activities" className="hover:text-white transition">Activity Log</Link></li>
          <li><Link to="/partnership" className="hover:text-white transition">Partnerships</Link></li>
          <li><Link to="/reports" className="hover:text-white transition">Transparency</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-black uppercase tracking-[0.3em] mb-8 md:mb-12 text-sm">Focus Areas</h4>
        <ul className="space-y-4 md:space-y-6 text-sm font-bold uppercase tracking-[0.2em]">
          <li><Link to="/theme/e-vawg" className="hover:text-white transition">Ending Violence</Link></li>
          <li><Link to="/theme/economic-empowerment" className="hover:text-white transition">Economic Agency</Link></li>
          <li><Link to="/theme/girls-education" className="hover:text-white transition">Girls' Education</Link></li>
          <li><Link to="/theme/civic-engagement" className="hover:text-white transition">Civic Leadership</Link></li>
          <li><Link to="/theme/climate-justice" className="hover:text-white transition">Climate Justice</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white font-black uppercase tracking-[0.3em] mb-8 md:mb-12 text-sm">Connect</h4>
        <ul className="space-y-6 md:space-y-8 text-sm font-medium">
          <li className="flex items-start space-x-5">
            <svg className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span className="text-white font-black uppercase tracking-widest text-md md:text-lg">Bong County, Liberia</span>
          </li>
          <li className="flex items-start space-x-5">
            <svg className="w-6 h-6 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span className="text-white font-black uppercase tracking-widest text-md md:text-lg">info@tecliberia.org</span>
          </li>
          <li className="flex items-start space-x-5">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61579621132068" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
              </a>
              <a href="https://www.instagram.com/theempowermentcircle2026?utm_source=qr&igsh=MTB0a2psNHA1NWVhOA%3D%3D" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/company/the-empowerment-circle-inc/" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 pt-16 border-t border-emerald-900/50 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-black opacity-50 text-center">
      <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} The Empowerment Circle Inc. (TEC). All Rights Reserved.</p>
      <div className="flex space-x-8 md:space-x-16">
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
      <div className="flex flex-col min-h-screen w-full overflow-x-clip relative">
        <Navbar />
        <main className="flex-grow w-full overflow-x-clip">
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