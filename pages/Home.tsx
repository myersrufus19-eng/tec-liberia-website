
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { THEMES, ACTIVITY_STORIES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920&auto=format&fit=crop" 
            alt="Empowered Community in Liberia" 
            className="w-full h-full object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-950/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-600/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              Empowerment in Action
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Bridging the Cycle of <span className="text-emerald-400">Inequality</span> in Liberia.
            </h1>
            <p className="text-xl text-emerald-50/80 mb-10 leading-relaxed max-w-2xl">
              The Empowerment Cycle (TEC) is a grassroots civil society organization dedicated to strengthening the agency of women, girls, and youth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-center hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/40">
                Discover Our Story
              </Link>
              <Link to="/partnership" className="px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-xl font-bold text-center hover:bg-white/20 transition">
                Become a Partner
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative -mt-16 z-20">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Community Members", value: "10k+" },
              { label: "Girls in Schools", value: "1,200" },
              { label: "Women-led VSLAs", value: "150" },
              { label: "Counties Active", value: "5" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-5xl font-bold text-emerald-800 mb-2">{stat.value}</p>
                <p className="text-xs md:text-sm text-slate-500 font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission Summary */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=800&auto=format&fit=crop" 
                alt="Liberian youth empowerment" 
                className="rounded-3xl shadow-xl z-10 relative object-cover h-[400px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full z-0"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-200 rounded-full z-0 opacity-50"></div>
            </motion.div>
            
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 font-playfair">Our Core Framework</h2>
              <div className="space-y-8 text-inter">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">The Vision</h3>
                    <p className="text-slate-600">Empowered women, girls, and youth driving inclusive, peaceful, and sustainable development in Liberia.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">The Mission</h3>
                    <p className="text-slate-600">To strengthen the social, economic, civic, and environmental agency through advocacy, skills development, and community-led solutions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Activity Section (NEW) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold font-playfair mb-4">Community Voices</h2>
              <p className="text-slate-400 text-inter">A glimpse into the impact of our programs across Liberia through photos and direct stories from the field.</p>
            </div>
            <Link to="/activities" className="text-emerald-400 font-bold hover:text-emerald-300 transition-all flex items-center">
              View All Stories
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACTIVITY_STORIES.slice(0, 4).map((story, idx) => (
              <motion.div 
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-2 block">{story.category}</span>
                  <h3 className="text-xl font-bold mb-2 font-playfair">{story.title}</h3>
                  <p className="text-xs text-slate-300 line-clamp-2 text-inter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    "{story.story}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thematic Areas Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-playfair">Our Thematic Pillars</h2>
            <p className="text-slate-500 text-inter">Transforming Liberia through a multi-dimensional approach to empowerment and community resilience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {THEMES.map((theme) => (
              <motion.div 
                key={theme.id}
                whileHover={{ y: -10 }}
                className="group p-0 rounded-3xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 overflow-hidden"
              >
                <div className="h-52 w-full overflow-hidden">
                  <img 
                    src={theme.image} 
                    alt={theme.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 font-playfair">{theme.title}</h3>
                  <p className="text-sm text-slate-500 mb-6 italic text-inter">{theme.context}</p>
                  <ul className="space-y-2 mb-8 text-inter">
                    {theme.focus.slice(0, 3).map((item, i) => (
                      <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={`/theme/${theme.id}`} 
                    className="inline-flex items-center text-emerald-700 font-bold text-sm group-hover:gap-2 transition-all text-inter"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story / Call to Action */}
      <section className="py-24 bg-emerald-700 overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 max-w-3xl font-playfair">Be Part of the Cycle of Change.</h2>
          <p className="text-xl text-emerald-100 mb-12 max-w-2xl text-inter">
            Whether you are an organization, a volunteer, or a local community leader, your collaboration can help us reach more lives in Liberia.
          </p>
          <Link 
            to="/partnership"
            className="px-10 py-5 bg-yellow-400 text-emerald-950 rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-300 transition-all hover:scale-105 shadow-xl shadow-emerald-950/20 text-inter"
          >
            Get Involved Now
          </Link>
        </div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-emerald-600 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-400 rounded-full blur-3xl opacity-10"></div>
      </section>
    </div>
  );
};

export default Home;
