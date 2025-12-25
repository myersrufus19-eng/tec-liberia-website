
import React from 'react';
import { motion } from 'framer-motion';
import { BOARD, STAFF } from '../constants';
import { TeamMember } from '../types';

const TeamCard = ({ member, index }: { member: TeamMember, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
  >
    <div className="aspect-[3/4] overflow-hidden bg-slate-100 relative">
      {member.image ? (
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-slate-300">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
    <div className="p-5 text-center">
      <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">{member.name}</h4>
      <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider mt-1">{member.role}</p>
    </div>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-20 pb-32 overflow-hidden">
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
            Who We Are
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-emerald-200/90 text-xl max-w-2xl mx-auto text-inter"
          >
            A dedicated team of changemakers driving Liberia toward an inclusive and sustainable future through local leadership.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 -mt-16 relative z-20 mb-24">
        <div className="grid lg:grid-cols-3 gap-12 items-start bg-white p-8 md:p-16 rounded-[2.5rem] shadow-2xl border border-gray-100">
          <div className="lg:col-span-2">
            <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 block">Our Origin</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 font-playfair">Founded on Vision & Resilience</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-inter">
              <p>
                <strong>Joseph K. Darwolo</strong> is the visionary Founder of The Empowerment Circle Inc. (TEC), a women-led, community-based organization dedicated to advancing women’s participation in Peacebuilding, Economic empowerment, Advocacy, Governance, and sustainable development across Liberia.
              </p>
              <p>
                Born on January 31, 1987, in Monrovia, Liberia, and raised in Gbarnga City, Bong County, Joseph’s life has been shaped by the challenges and resilience of post-war Liberia. His passion for empowerment grew from witnessing the strength of Liberian women who, despite social and economic barriers, continued to lead their families and communities toward recovery and hope.
              </p>
              <p>
                Joseph established The Empowerment Circle Inc. (TEC) to provide a platform where women and youth can gain access to education, leadership opportunities, and resources for economic independence. Through TEC, he envisions a more inclusive Liberia, one where women play a central role in peace processes, decision-making, and national development.
              </p>
              <p>
                With years of community service and advocacy experience, Joseph continues to champion gender equality, sustainable livelihoods, and social justice. His leadership combines compassion, integrity, and a strong belief in collective action as the foundation for lasting peace and empowerment.
              </p>
            </div>
          </div>
          <div className="bg-emerald-50 p-10 rounded-3xl border border-emerald-100 sticky top-24">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6 font-playfair">Our Values</h3>
            <ul className="space-y-4 text-inter">
              {[
                { title: "Inclusivity", desc: "No one is left behind in the development process." },
                { title: "Transparency", desc: "We are accountable to our communities and partners." },
                { title: "Innovation", desc: "Adaptive, community-led solutions for complex challenges." },
                { title: "Equality", desc: "A firm belief in gender justice as a human right." }
              ].map((val, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[10px]">✓</div>
                  <div>
                    <strong className="block text-emerald-950 font-bold">{val.title}</strong>
                    <span className="text-sm text-emerald-700/70">{val.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-playfair">Our Leadership</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Board of Directors */}
        <div className="mb-24">
          <div className="flex items-center space-x-4 mb-10">
            <div className="h-px flex-grow bg-slate-200"></div>
            <h3 className="text-2xl font-bold text-emerald-900 font-playfair px-4">Board of Directors</h3>
            <div className="h-px flex-grow bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {BOARD.map((member, idx) => (
              <TeamCard key={idx} member={member} index={idx} />
            ))}
          </div>
        </div>

        {/* Management & Staff */}
        <div>
          <div className="flex items-center space-x-4 mb-10">
            <div className="h-px flex-grow bg-slate-200"></div>
            <h3 className="text-2xl font-bold text-emerald-900 font-playfair px-4">Management & Staff</h3>
            <div className="h-px flex-grow bg-slate-200"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {STAFF.map((member, idx) => (
              <TeamCard key={idx} member={member} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
