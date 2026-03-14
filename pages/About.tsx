import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BOARD, STAFF } from '../constants';
import { TeamMember } from '../types';

// Portable TeamCard with square aspect ratio and tighter padding
const TeamCard: React.FC<{ member: TeamMember, index: number }> = ({ member, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
  >
    <div className="aspect-square overflow-hidden bg-slate-100 relative">
      {member.image ? (
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-all duration-700 scale-100 group-hover:scale-110"
          loading="lazy"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
    <div className="p-3 text-center border-t border-gray-50">
      <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1 text-[13px]">{member.name}</h4>
      <p className="text-[9px] text-emerald-600 font-black uppercase tracking-widest mt-0.5">{member.role}</p>
    </div>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <div className="pb-24 overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1920&auto=format&fit=crop" 
            alt="Collective empowerment and unity" 
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
            Our Identity
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-emerald-200/90 text-xl max-w-2xl mx-auto font-inter"
          >
            A professional women-led organization dedicated to local leadership and sustainable development across Liberia.
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 -mt-16 relative z-20 mb-24">
        <div className="grid lg:grid-cols-3 gap-12 items-start bg-white p-6 md:p-16 rounded-[2.5rem] shadow-2xl border border-gray-100">
          <div className="lg:col-span-2 space-y-16">
            
            {/* SECTION: About the Organization */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-emerald-50/30 p-8 md:p-10 rounded-3xl border border-emerald-100/50"
            >
              <span className="text-emerald-700 font-bold uppercase tracking-[0.2em] text-xs mb-6 block">The Organization</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 font-playfair leading-tight">Championing Gender Equality & Social Justice</h2>
              <div className="space-y-6 text-slate-700 leading-relaxed font-inter text-lg">
                <p>
                  The Empowerment Circle Inc. (TEC) is a women-led, community-based organization in Liberia championing gender equality, social justice, and peace by advancing the leadership and participation of women, girls, and youth. Guided by the belief that empowered women and youth are powerful drivers of sustainable change, TEC works to challenge systemic inequalities and promote inclusive decision-making at all levels of society.
                </p>
                <p>
                  Founded to expand opportunities for women and youth to lead transformative change, TEC amplifies marginalized voices, strengthens community capacity, and promotes economic independence through rights-based, inclusive, and sustainable initiatives that build resilience and foster long-term social impact.
                </p>
                <div className="pt-4">
                  <Link to="/partnership" className="text-emerald-700 font-bold hover:underline inline-flex items-center group">
                    Join our mission <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            <div className="h-px bg-slate-100 w-full"></div>

            {/* SECTION: Our Origin / Founder Spotlight - REDESIGNED FOR ALIGNMENT */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-2"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-px w-12 bg-emerald-300"></div>
                <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-xs">Our Founder</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                {/* Founder Photo - Adjusted for Tablets/PC */}
                <div className="md:col-span-5 lg:col-span-4">
                  <div className="sticky top-24">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-emerald-100 rounded-[2.5rem] -rotate-3 group-hover:rotate-0 transition-transform duration-500 opacity-50"></div>
                      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                        <img 
                          src="https://i.ibb.co/xtpj2Gs4/bmm-photo.jpg" 
                          alt="Joseph K. Darwolo"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="mt-6 text-center md:text-left px-4">
                      <h3 className="text-xl font-bold text-slate-900 font-playfair">Joseph K. Darwolo</h3>
                      <p className="text-emerald-600 text-[10px] font-black uppercase tracking-widest mt-1">Founder & Visionary</p>
                    </div>
                  </div>
                </div>
                
                {/* Statement Content - Redesigned for Neater Arrangement */}
                <div className="md:col-span-7 lg:col-span-8">
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8 font-playfair leading-tight">Resilience and Vision</h2>
                  
                  <div className="space-y-6 text-slate-600 leading-relaxed font-inter text-md">
                    {/* Pull Quote style for first paragraph */}
                    <div className="relative mb-10">
                      <svg className="absolute -top-4 -left-4 w-12 h-12 text-emerald-100 -z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.899 14.899 16 16 16L18 16C18.11 16 18.21 15.96 18.3 15.89C18.44 15.78 18.5 15.61 18.5 15.44V12.44C18.5 12.16 18.28 11.94 18 11.94H15C13.89 11.94 13 11.05 13 9.94V6.94C13 6.66 13.22 6.44 13.5 6.44H19.5C19.78 6.44 20 6.66 20 6.94V15.44C20 18.51 17.51 21 14.44 21H14.017ZM4.017 21L4.017 18C4.017 16.899 4.899 16 6 16L8 16C8.11 16 8.21 15.96 8.3 15.89C8.44 15.78 8.5 15.61 8.5 15.44V12.44C18.5 12.16 8.28 11.94 8 11.94H5C3.89 11.94 3 11.05 3 9.94V6.94C3 6.66 3.22 6.44 3.5 6.44H9.5C9.78 6.44 10 6.66 10 6.94V15.44C10 18.51 7.51 21 4.44 21H4.017Z" /></svg>
                      <p className="text-lg lg:text-xl text-emerald-900 font-medium italic border-l-4 border-emerald-500 pl-6 py-2">
                        "Born on January 31, 1987, in Monrovia and raised in Gbarnga City, Bong County, my life was shaped by the challenges and resilience of post-war Liberia."
                      </p>
                    </div>

                    <p>
                      <strong>Joseph K. Darwolo</strong> is the visionary Founder of The Empowerment Circle Inc. (TEC), a community leader dedicated to advancing women’s participation in Peacebuilding, Economic empowerment, Advocacy, Governance, and sustainable development across Liberia.
                    </p>
                    <p>
                      His passion for empowerment grew from witnessing the strength of Liberian women who, despite social and economic barriers, continued to lead their families and communities toward recovery and hope. This observation became the catalyst for action.
                    </p>
                    <p>
                      Joseph established The Empowerment Circle Inc. (TEC) to provide a platform where women and youth can gain access to education, leadership opportunities, and resources for economic independence. Through TEC, he envisions a more inclusive Liberia, one where women play a central role in peace processes, decision-making, and national development.
                    </p>
                    
                    <div className="pt-6 flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                      </div>
                      <span className="font-playfair font-bold text-slate-800 text-lg">Joseph K. Darwolo</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sticky Values Card */}
          <div className="bg-emerald-900 text-white p-10 rounded-3xl sticky top-24 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-8 font-playfair">Core Pillars</h3>
            <ul className="space-y-6 font-inter">
              {[
                { title: "Inclusivity", desc: "No one is left behind in the development process." },
                { title: "Transparency", desc: "Accountability to communities and partners." },
                { title: "Innovation", desc: "Adaptive, community-led local solutions." },
                { title: "Equality", desc: "Gender justice as a fundamental human right." }
              ].map((val, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-emerald-950 text-[10px]">✓</div>
                  <div>
                    <strong className="block text-white font-bold text-sm mb-1">{val.title}</strong>
                    <span className="text-xs text-emerald-100/60 leading-relaxed">{val.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="container mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-playfair">Our Leadership</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="text-slate-500 mt-4 text-sm font-medium uppercase tracking-widest">Guiding the Cycle of Change</p>
        </div>
        
        {/* Board */}
        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-10">
            <div className="h-px flex-grow bg-slate-200"></div>
            <h3 className="text-xl font-bold text-emerald-900 font-playfair px-4 uppercase tracking-widest">Board of Directors</h3>
            <div className="h-px flex-grow bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {BOARD.map((member, idx) => (
              <TeamCard key={`board-${idx}`} member={member} index={idx} />
            ))}
          </div>
        </div>

        {/* Management */}
        <div>
          <div className="flex items-center space-x-4 mb-10">
            <div className="h-px flex-grow bg-slate-200"></div>
            <h3 className="text-xl font-bold text-emerald-900 font-playfair px-4 uppercase tracking-widest">Management Team</h3>
            <div className="h-px flex-grow bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {STAFF.map((member, idx) => (
              <TeamCard key={`staff-${idx}`} member={member} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-emerald-900 text-white rounded-[3rem] p-10 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-playfair">Join the Circle</h2>
              <p className="text-emerald-100 mb-8 font-inter text-lg">We are looking for partners, volunteers, and leaders who share our vision for Liberia.</p>
              <Link to="/partnership-intake" className="inline-block px-10 py-5 bg-yellow-400 text-emerald-950 rounded-2xl font-black uppercase tracking-widest hover:bg-yellow-300 transition-all shadow-xl shadow-black/20">
                Partner With Us
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-widest mb-2">Primary Office</h4>
                <p className="font-bold text-sm md:text-base">Bong County, Liberia</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-widest mb-2">Contact Support</h4>
                <p className="font-bold text-sm md:text-base">+231 77 064 3944</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-800 rounded-full blur-[100px] opacity-40"></div>
        </div>
      </section>
    </div>
  );
};

export default About;