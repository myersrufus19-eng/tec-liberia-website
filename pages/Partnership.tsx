
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Partnership: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1920&auto=format&fit=crop" 
            alt="Collaboration and Partnership" 
            className="w-full h-full object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/95 to-emerald-950/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair"
          >
            Become a Partner
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-emerald-200/90 text-xl max-w-3xl mx-auto text-inter"
          >
            Partner with The Empowerment Circle Inc. (TEC) – Liberia to advance gender equality, youth empowerment, peacebuilding, climate justice, and inclusive governance.
          </motion.p>
        </div>
      </section>

      {/* Main Partnership Section */}
      <section id="become-a-partner" className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Programmatic Partnerships */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 font-playfair">Programmatic Partnerships</h3>
              <p className="text-slate-600 mb-6 text-inter">
                Co-design and implement community-driven programs aligned with TEC’s thematic areas.
              </p>
              <ul className="list-disc ml-5 text-sm space-y-2 mb-8 text-slate-500 text-inter">
                <li>Joint project implementation</li>
                <li>Consortium and donor-funded programs</li>
                <li>Pilot innovative community solutions</li>
              </ul>
              <Link
                to="/partnership-intake?type=Programmatic"
                className="inline-flex items-center text-emerald-700 font-bold hover:gap-2 transition-all text-inter"
              >
                Provide details for this partnership <span className="ml-2">→</span>
              </Link>
            </motion.div>

            {/* Funding & Grants */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 font-playfair">Funding & Grant Partnerships</h3>
              <p className="text-slate-600 mb-6 text-inter">
                Support high-impact programs for women, girls, and youth across Liberia.
              </p>
              <ul className="list-disc ml-5 text-sm space-y-2 mb-8 text-slate-500 text-inter">
                <li>Core and project funding</li>
                <li>Small grants for community initiatives</li>
                <li>Emergency and rapid-response funding</li>
              </ul>
              <Link
                to="/partnership-intake?type=Funding"
                className="inline-flex items-center text-emerald-700 font-bold hover:gap-2 transition-all text-inter"
              >
                Provide details for funding <span className="ml-2">→</span>
              </Link>
            </motion.div>

            {/* Technical & Knowledge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 font-playfair">Technical & Knowledge Partnerships</h3>
              <p className="text-slate-600 mb-6 text-inter">
                Strengthen learning, innovation, and evidence-based programming.
              </p>
              <ul className="list-disc ml-5 text-sm space-y-2 mb-8 text-slate-500 text-inter">
                <li>Research and learning</li>
                <li>M&E and impact measurement</li>
                <li>Capacity building and training</li>
              </ul>
              <Link
                to="/partnership-intake?type=Technical"
                className="inline-flex items-center text-emerald-700 font-bold hover:gap-2 transition-all text-inter"
              >
                Provide technical collaboration details <span className="ml-2">→</span>
              </Link>
            </motion.div>

            {/* Private Sector */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2rem] shadow-xl p-10 border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 font-playfair">Private Sector & CSR Partnerships</h3>
              <p className="text-slate-600 mb-6 text-inter">
                Align CSR and ESG goals with community transformation in Liberia.
              </p>
              <ul className="list-disc ml-5 text-sm space-y-2 mb-8 text-slate-500 text-inter">
                <li>Youth employment & skills</li>
                <li>Women-led enterprise support</li>
                <li>Agribusiness & value chains</li>
              </ul>
              <Link
                to="/partnership-intake?type=Private Sector"
                className="inline-flex items-center text-emerald-700 font-bold hover:gap-2 transition-all text-inter"
              >
                Provide private sector details <span className="ml-2">→</span>
              </Link>
            </motion.div>
          </div>

          {/* FINAL CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-emerald-800 text-white rounded-[3rem] p-12 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold mb-6 font-playfair">
                Ready to Partner With The Empowerment Circle Inc.?
              </h3>
              <p className="mb-10 max-w-2xl mx-auto text-emerald-100 text-lg text-inter">
                Let’s work together to empower women, girls, and youth and build resilient communities across Liberia.
              </p>
              <Link
                to="/partnership-intake"
                className="inline-block bg-white text-emerald-800 font-black uppercase tracking-widest text-sm px-10 py-5 rounded-2xl hover:bg-emerald-50 hover:scale-105 transition-all shadow-xl shadow-emerald-950/20"
              >
                Submit Partnership Interest
              </Link>
            </div>
            {/* Abstract decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-emerald-700 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-600 rounded-full blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
