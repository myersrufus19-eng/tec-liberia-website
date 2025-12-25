
import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { THEMES } from "../constants";

// Locally defined UI components to fix the module resolution error
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white shadow-lg rounded-2xl overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-8 ${className}`}>
    {children}
  </div>
);

const Button = ({ 
  children, 
  variant = "default", 
  className = "", 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" }) => {
  const baseStyles = "px-6 py-2.5 rounded-xl font-bold transition-all active:scale-95 text-center inline-block text-sm";
  const variants = {
    default: "bg-emerald-700 text-white hover:bg-emerald-800 shadow-lg shadow-emerald-900/10",
    outline: "border-2 border-white text-white hover:bg-white/10"
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default function ThematicAreaPage() {
  const { id } = useParams<{ id: string }>();
  
  // Try to find the specific theme based on the URL parameter
  const themeDetail = THEMES.find(t => t.id === id);

  // If we are looking at a specific theme detail
  if (themeDetail) {
    return (
      <div className="min-h-screen bg-gray-50 pb-20">
        {/* Full Screen Hero for Theme Detail using theme-specific image */}
        <section className="relative min-h-[60vh] flex items-center pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={themeDetail.image} 
              alt={themeDetail.title} 
              className="w-full h-full object-cover brightness-[0.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-transparent"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <Link to="/" className="text-emerald-300 font-semibold flex items-center mb-8 hover:text-white transition group">
              <span className="group-hover:-translate-x-1 transition-transform mr-2">←</span> Back to All Programs
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight font-playfair max-w-4xl">
                {themeDetail.title}
              </h1>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 -mt-16 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <p className="text-xl text-slate-600 mb-10 italic border-l-4 border-emerald-500 bg-white/80 backdrop-blur-md p-8 rounded-r-3xl shadow-xl text-inter">
              {themeDetail.context}
            </p>
            
            <Card className="mb-10 border border-gray-100">
              <CardContent>
                <h2 className="text-2xl font-bold mb-6 text-emerald-800 font-playfair">Program Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-10 text-inter text-lg">{themeDetail.description}</p>
                
                <h3 className="text-xl font-bold mb-6 text-emerald-800 font-playfair">Our Strategic Focus</h3>
                <ul className="grid md:grid-cols-2 gap-4 text-inter">
                  {themeDetail.focus.map((item, i) => (
                    <li key={i} className="flex items-start bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100/50 group hover:bg-white hover:shadow-lg transition-all">
                      <span className="text-emerald-600 mr-4 font-bold text-xl group-hover:scale-125 transition-transform">·</span>
                      <span className="text-emerald-900 text-sm font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {themeDetail.impact && (
              <div className="bg-emerald-800 text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-4 text-inter">Impact Snapshot</h3>
                  <p className="text-2xl md:text-3xl font-bold leading-tight font-playfair">{themeDetail.impact}</p>
                </div>
                <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                  <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    );
  }

  // Fallback / Overview view
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO SECTION with background representing education and progress */}
      <section className="relative min-h-[60vh] flex items-center pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1920&auto=format&fit=crop" 
            alt="Growth and Progress" 
            className="w-full h-full object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair text-white">Our Thematic Pillars</h1>
            <p className="text-xl max-w-2xl text-emerald-100/90 text-inter leading-relaxed">
              Transforming the lives of women, girls, and youth through a holistic framework of intervention and advocacy.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 text-inter">
              <Button>Partner With Us</Button>
              <a href="mailto:info@tecliberia.org">
                <Button variant="outline">Contact Our Team</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THEMATIC GRID */}
      <section className="bg-white py-24 px-6 relative z-20 -mt-10 rounded-t-[3rem] shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 font-playfair mb-4">Thematic Framework</h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-500 text-inter max-w-xl mx-auto">
              Explore the core areas where we drive meaningful social and economic change across Liberia.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {THEMES.map((theme, index) => (
              <motion.div key={index} whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                <Card className="h-full border border-gray-100 hover:shadow-2xl transition-all">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={theme.image} 
                      alt={theme.title} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-emerald-800 leading-snug font-playfair">
                      <Link to={`/theme/${theme.id}`} className="hover:underline">
                        {theme.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-500 mb-6 line-clamp-2 text-inter italic">
                      {theme.context}
                    </p>
                    <Link to={`/theme/${theme.id}`} className="text-emerald-700 font-bold text-sm flex items-center group">
                      Deep Dive
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
