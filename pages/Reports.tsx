
import React from 'react';
import { motion } from 'framer-motion';
import { REPORTS } from '../constants';

const Reports: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920&auto=format&fit=crop" 
            alt="Reports and Documentation" 
            className="w-full h-full object-cover brightness-[0.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/95 to-emerald-950/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 font-playfair"
          >
            Insights & Reports
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-emerald-200/90 text-xl max-w-3xl mx-auto text-inter"
          >
            Transparent reporting on our activities, impact, and community development across Liberia.
          </motion.p>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {REPORTS.map((report, idx) => (
            <motion.div 
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={report.image} 
                  alt={report.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-700 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {report.year}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-playfair group-hover:text-emerald-700 transition-colors">
                  {report.title}
                </h3>
                <p className="text-slate-600 text-sm mb-8 leading-relaxed text-inter">
                  {report.summary}
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href={report.downloadUrl}
                    className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm hover:underline"
                    onClick={(e) => {
                        e.preventDefault();
                        alert("Report download functionality will be active in the live production environment.");
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    View Report
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-gray-100"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-playfair">Data-Driven Change</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 text-inter leading-relaxed">
            Our monitoring and evaluation team ensures every dollar and hour invested translates into measurable community agency.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-emerald-50 p-6 rounded-2xl">
              <span className="block text-4xl font-bold text-emerald-700 mb-1">92%</span>
              <span className="text-xs font-bold text-emerald-950/50 uppercase tracking-widest">Program Efficiency</span>
            </div>
            <div className="bg-emerald-50 p-6 rounded-2xl">
              <span className="block text-4xl font-bold text-emerald-700 mb-1">15k</span>
              <span className="text-xs font-bold text-emerald-950/50 uppercase tracking-widest">Lives Impacted 2023</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Reports;
