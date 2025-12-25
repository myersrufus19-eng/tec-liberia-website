
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ACTIVITY_STORIES } from '../constants';

const Activities: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(ACTIVITY_STORIES.map(s => s.category)))];

  const filteredStories = filter === 'All' 
    ? ACTIVITY_STORIES 
    : ACTIVITY_STORIES.filter(s => s.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1920&auto=format&fit=crop" 
            alt="Activities and Stories" 
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
            Our Activities & Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-emerald-200/90 text-xl max-w-2xl mx-auto text-inter"
          >
            A window into the lives we touch and the change we build together across Liberia.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="container mx-auto px-4 -mt-8 relative z-30 mb-16">
        <div className="flex flex-wrap justify-center gap-3 bg-white p-4 rounded-3xl shadow-xl border border-gray-100 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-emerald-700 text-white shadow-lg' 
                  : 'bg-gray-100 text-slate-500 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Stories Grid */}
      <section className="container mx-auto px-4">
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredStories.map((story) => (
              <motion.div
                key={story.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group bg-white rounded-[2.5rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-emerald-700/90 backdrop-blur text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex items-center text-xs text-slate-400 mb-4 font-bold uppercase tracking-widest">
                    <span>{story.location}</span>
                    <span className="mx-2">•</span>
                    <span>{story.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 font-playfair group-hover:text-emerald-700 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-slate-600 text-inter leading-relaxed italic">
                    "{story.story}"
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default Activities;
