import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigation } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';
import { COMPANY_INFO } from '../data/company';
import { WiproDotCluster } from './WiproBrandMark';
import { 
  X, 
  CheckCircle2, 
  Mail, 
  Building2, 
  Send, 
  Phone,
  User,
  Briefcase
} from 'lucide-react';

export function DemoModal() {
  const { demoModalOpen, closeDemoModal, preselectedProduct } = useNavigation();
  const { isDark } = useTheme();

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [product, setProduct] = useState(preselectedProduct || 'Warehouse Management System');
  const [businessType, setBusinessType] = useState('Logistics & 3PL');
  const [locations, setLocations] = useState('1 - 3 Locations');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (preselectedProduct) {
      setProduct(preselectedProduct);
    }
  }, [preselectedProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomRef = 'CONSULT-' + Math.floor(100000 + Math.random() * 900000);
      setRefId(randomRef);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    closeDemoModal();
  };

  return (
    <AnimatePresence>
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeDemoModal}
            className="fixed inset-0 bg-[#040b17]/85 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={`rounded-3xl border shadow-2xl w-full max-w-2xl overflow-hidden relative my-8 z-10 transition-colors duration-200 ${
              isDark 
                ? 'bg-[#0b1c36] border-slate-700 shadow-black/80 text-slate-100' 
                : 'bg-white border-slate-200 shadow-[#071326]/40 text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Multi-Color Connecting Dots Stripe */}
            <div className="w-full h-1.5 wipro-multi-gradient" />

            {/* Top Header Banner */}
            <div className="bg-[#071326] text-white p-6 sm:p-7 relative border-b border-slate-800">
              <button
                onClick={closeDemoModal}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#053674] border border-[#389BB5]/40 rounded-full text-[11px] font-bold text-[#389BB5] mb-2">
                <WiproDotCluster />
                <span>Enterprise Solution Architecture</span>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight">
                Schedule an Architecture Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
                Connect directly with Codefest Studio enterprise architects to evaluate platform fit and bespoke engineering.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    key="submitted-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-6 space-y-4"
                  >
                    <div className="w-16 h-16 bg-emerald-500/20 text-[#A4CE4F] rounded-full flex items-center justify-center mx-auto shadow-lg border border-emerald-500/30">
                      <CheckCircle2 className="w-9 h-9 text-emerald-500" />
                    </div>
                    <h4 className={`text-2xl font-extrabold ${isDark ? 'text-white' : 'text-[#071326]'}`}>
                      Consultation Request Confirmed!
                    </h4>
                    <p className={`text-sm max-w-md mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      Thank you for contacting Codefest Studio. Our enterprise architects will review your parameters and connect promptly.
                    </p>

                    <div className={`p-4 rounded-xl border text-xs text-left max-w-md mx-auto space-y-2 ${
                      isDark 
                        ? 'bg-[#071326] border-slate-700 text-slate-300' 
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Reference Number:</span>
                        <span className="font-mono font-bold text-[#389BB5]">{refId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Selected Platform:</span>
                        <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{product}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Confirmation Sent to:</span>
                        <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{email}</span>
                      </div>
                    </div>

                    <div className="pt-2 text-xs text-slate-400">
                      Direct executive enquiries:{' '}
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#389BB5] font-bold underline">
                        {COMPANY_INFO.email}
                      </a>
                    </div>

                    <div className="pt-4">
                      <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={handleReset}
                        className="bg-[#053674] hover:bg-[#0066CC] text-white font-bold py-2.5 px-6 rounded-xl text-xs shadow-md transition-all cursor-pointer border border-[#389BB5]/40"
                      >
                        Done
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Rajesh Sharma"
                            className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#389BB5] ${
                              isDark 
                                ? 'bg-[#071326] border border-slate-700 text-white placeholder-slate-500 focus:bg-[#071326]' 
                                : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          Company Name <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="e.g. Apex Global Logistics"
                            className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#389BB5] ${
                              isDark 
                                ? 'bg-[#071326] border border-slate-700 text-white placeholder-slate-500 focus:bg-[#071326]' 
                                : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Business Email */}
                      <div>
                        <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          Corporate Email <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. rajesh@apexlogistics.com"
                            className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#389BB5] ${
                              isDark 
                                ? 'bg-[#071326] border border-slate-700 text-white placeholder-slate-500 focus:bg-[#071326]' 
                                : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          Contact Phone <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="e.g. +91 98765 43210"
                            className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#389BB5] ${
                              isDark 
                                ? 'bg-[#071326] border border-slate-700 text-white placeholder-slate-500 focus:bg-[#071326]' 
                                : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Designation */}
                      <div>
                        <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          Role / Title <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            placeholder="e.g. VP Operations / CTO"
                            className={`w-full pl-9 pr-3 py-2.5 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#389BB5] ${
                              isDark 
                                ? 'bg-[#071326] border border-slate-700 text-white placeholder-slate-500 focus:bg-[#071326]' 
                                : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Select Product */}
                      <div>
                        <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          Select Platform Scope <span className="text-rose-500">*</span>
                        </label>
                        <select
                          value={product}
                          onChange={(e) => setProduct(e.target.value)}
                          className={`w-full px-3 py-2.5 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#389BB5] ${
                            isDark 
                              ? 'bg-[#071326] border border-slate-700 text-white focus:bg-[#071326]' 
                              : 'bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white'
                          }`}
                        >
                          <option value="Warehouse Management System">Warehouse Management System (WMS)</option>
                          <option value="Transport Management System">Transport Management System (TMS)</option>
                          <option value="Gate / Yard Management System">Gate / Yard Management System (YMS)</option>
                          <option value="Vendor Management System">Vendor Management System (VMS)</option>
                          <option value="Hotel ERP">Hotel ERP & Hospitality Suite</option>
                          <option value="Inventory Management System">Inventory Management System (IMS)</option>
                          <option value="Custom Technology Solution">Custom Technology Solution (Bespoke Development)</option>
                        </select>
                      </div>

                      {/* Business Type */}
                      <div>
                        <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          Industry Vertical
                        </label>
                        <select
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          className={`w-full px-3 py-2.5 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#389BB5] ${
                            isDark 
                              ? 'bg-[#071326] border border-slate-700 text-white focus:bg-[#071326]' 
                              : 'bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white'
                          }`}
                        >
                          <option value="Logistics & 3PL">Logistics & 3PL</option>
                          <option value="Warehousing & Fulfillment">Warehousing & Fulfillment</option>
                          <option value="Manufacturing & Plant">Manufacturing & Plant</option>
                          <option value="Retail & Multi-Store">Retail & Multi-Store</option>
                          <option value="Hospitality & Hotel">Hospitality & Hotel</option>
                          <option value="Wholesale & Distribution">Wholesale & Distribution</option>
                          <option value="Enterprise / Corporate">Enterprise / Corporate</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Number of Locations */}
                      <div>
                        <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                          Facility Scale
                        </label>
                        <select
                          value={locations}
                          onChange={(e) => setLocations(e.target.value)}
                          className={`w-full px-3.5 py-2.5 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#389BB5] ${
                            isDark 
                              ? 'bg-[#071326] border border-slate-700 text-white focus:bg-[#071326]' 
                              : 'bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white'
                          }`}
                        >
                          <option value="1 Location (Single Site)">1 Location (Single Site)</option>
                          <option value="2 - 5 Locations">2 - 5 Locations</option>
                          <option value="6 - 20 Locations">6 - 20 Locations</option>
                          <option value="20+ Enterprise Multi-City">20+ Enterprise Multi-City</option>
                        </select>
                      </div>
                    </div>

                    {/* Message / Requirement */}
                    <div>
                      <label className={`block text-xs font-bold mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Operational Scope & Architecture Requirements
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Detail your throughput volume, ERP systems (SAP, Oracle, Tally), or specific modules..."
                        className={`w-full px-3 py-2 rounded-xl text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-[#389BB5] ${
                          isDark 
                            ? 'bg-[#071326] border border-slate-700 text-white placeholder-slate-500 focus:bg-[#071326]' 
                            : 'bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white'
                        }`}
                      ></textarea>
                    </div>

                    {/* Direct Mail Option Notice */}
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span>Direct executive email:</span>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#389BB5] font-bold hover:underline">
                        {COMPANY_INFO.email}
                      </a>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#053674] hover:bg-[#0066CC] text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-md shadow-[#053674]/30 flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#389BB5]/40"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Submitting Consultation Request...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-[#FFC412]" />
                            <span>Submit Architecture Request</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default DemoModal;
