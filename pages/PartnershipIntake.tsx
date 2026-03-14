
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

const PartnershipIntake: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialType = queryParams.get('type') || 'General';

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    position: '',
    organization: '',
    email: '',
    phone: '',
    partnershipType: initialType,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link for direct submission
    const subject = `Partnership Inquiry: ${formData.partnershipType} - ${formData.organization}`;
    const body = `
Partnership Inquiry Details:
---------------------------
Full Name: ${formData.fullName}
Position: ${formData.position}
Organization: ${formData.organization}
Email: ${formData.email}
Phone: ${formData.phone}
Partnership Category: ${formData.partnershipType}

Collaboration Proposal:
---------------------------
${formData.message || 'No specific proposal provided.'}

---
Submitted via TEC Liberia Website
    `;

    const mailtoUrl = `mailto:info@tecliberia.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the user's email client
    window.location.href = mailtoUrl;
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[2.5rem] shadow-2xl text-center border border-emerald-100"
        >
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4 font-playfair">Message Received!</h2>
          <p className="text-slate-600 mb-10 text-inter">
            Thank you for reaching out to TEC Liberia. Our partnership coordination team will review your details and contact you within 2-3 business days.
          </p>
          <Link to="/" className="inline-block px-8 py-4 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-800 transition">
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <Link to="/partnership" className="text-emerald-600 font-bold flex items-center mb-6 hover:text-emerald-700 transition group">
            <span className="group-hover:-translate-x-1 transition-transform mr-2">←</span> Back to Partnership Overview
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-playfair">Partnership Inquiry</h1>
          <p className="text-slate-500 text-inter">Please provide your professional details below to start a collaboration with The Empowerment Circle Inc.</p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="e.g. John Doe"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition text-inter"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Position / Job Title</label>
              <input 
                required
                type="text" 
                placeholder="e.g. Program Director"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition text-inter"
                value={formData.position}
                onChange={(e) => setFormData({...formData, position: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Organization Name</label>
            <input 
              required
              type="text" 
              placeholder="Your organization or agency"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition text-inter"
              value={formData.organization}
              onChange={(e) => setFormData({...formData, organization: e.target.value})}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@organization.org"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition text-inter"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+231..."
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition text-inter"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Partnership Category</label>
            <select 
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition text-inter appearance-none"
              value={formData.partnershipType}
              onChange={(e) => setFormData({...formData, partnershipType: e.target.value})}
            >
              <option value="Programmatic">Programmatic Partnerships</option>
              <option value="Funding">Funding & Grant Partnerships</option>
              <option value="Technical">Technical & Knowledge Partnerships</option>
              <option value="Private Sector">Private Sector & CSR Partnerships</option>
              <option value="General">General Inquiry</option>
            </select>
          </div>

          <div className="space-y-2 mb-10">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Collaboration Proposal (Optional)</label>
            <textarea 
              rows={4}
              placeholder="Briefly describe how you would like to work with TEC Liberia..."
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition text-inter resize-none"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-emerald-700 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-emerald-900/20 hover:bg-emerald-800 transition-all active:scale-95"
          >
            Submit Partnership Details
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default PartnershipIntake;
