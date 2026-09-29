import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GlobalCtaSection } from '../components/GlobalCtaSection';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/MotionSection';
import { WiproDotCluster } from '../components/WiproBrandMark';
import { 
  CalendarCheck, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

export function BookDemoPage() {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [product, setProduct] = useState('Warehouse Management System');
  const [businessType, setBusinessType] = useState('Logistics & 3PL');
  const [locations, setLocations] = useState('1 - 3 Locations');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setRefId('DEMO-' + Math.floor(100000 + Math.random() * 900000));
    }, 700);
  };

  return (
    <div className="bg-slate-50 dark:bg-[#071326] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Book a Demo' }]} />
      </div>

      {/* Hero */}
      <section className="pt-6 pb-12 bg-white dark:bg-[#071326] overflow-hidden border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-3 shadow-sm">
              <WiproDotCluster />
              <span>Live Architecture Walkthrough</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071326] dark:text-white tracking-tight">
              See Codefest Studio in Action
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              Schedule a personalized enterprise product demonstration with our solution architecture team.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Form & Benefits Container */}
      <section className="py-8 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Value Highlights */}
            <FadeIn direction="right" className="lg:col-span-5 w-full">
              <div className="bg-[#0b1c36] text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl relative overflow-hidden border border-slate-700/80">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#053674]/30 rounded-full blur-3xl pointer-events-none"></div>

                <div>
                  <h3 className="text-xl font-bold text-white">What You'll Experience in the 30-Min Demo:</h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    A live, interactive demonstration configured to your specific operational scale and industry requirements.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="p-3.5 rounded-2xl bg-[#071326] border border-slate-700 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A4CE4F] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Tailored Workflow Simulation</strong>
                      <span className="text-slate-400">See your exact inward, dispatch, gate, or room service processes mapped live.</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="p-3.5 rounded-2xl bg-[#071326] border border-slate-700 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A4CE4F] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Live Dashboard & MIS Telemetry</strong>
                      <span className="text-slate-400">Explore real-time KPI scorecards, audit ledgers, and executive analytics.</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 4 }}
                    className="p-3.5 rounded-2xl bg-[#071326] border border-slate-700 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#A4CE4F] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Integration Architecture Review</strong>
                      <span className="text-slate-400">Discuss how our REST APIs synchronize with your current ERP, GPS, or hardware.</span>
                    </div>
                  </motion.div>
                </div>

                <div className="p-4 rounded-2xl bg-[#071326] border border-[#389BB5]/40 text-xs text-slate-300">
                  Direct email inquiry: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#389BB5] font-bold underline">{COMPANY_INFO.email}</a>
                </div>
              </div>
            </FadeIn>

            {/* Right Form */}
            <FadeIn direction="left" delay={0.1} className="lg:col-span-7 w-full">
              <div className="bg-white dark:bg-[#0b1c36] rounded-3xl border border-slate-200 dark:border-slate-700 p-8 sm:p-10 shadow-xl transition-colors duration-300">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div 
                      key="submitted"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-10 space-y-4"
                    >
                      <div className="w-16 h-16 bg-emerald-500/20 text-[#A4CE4F] rounded-full flex items-center justify-center mx-auto shadow-lg border border-emerald-500/30">
                        <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-[#071326] dark:text-white">Demo Scheduled!</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you for contacting Codefest Studio. Our team will connect with you shortly.
                      </p>
                      <div className="bg-slate-50 dark:bg-[#071326] p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs max-w-sm mx-auto space-y-1 text-left">
                        <div className="flex justify-between">
                          <span className="text-slate-500 dark:text-slate-400">Booking Ref:</span>
                          <span className="font-mono font-bold text-[#053674] dark:text-[#389BB5]">{refId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 dark:text-slate-400">Selected Product:</span>
                          <span className="font-semibold text-slate-800 dark:text-white">{product}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 dark:text-slate-400">Email:</span>
                          <span className="font-semibold text-slate-800 dark:text-white">{email}</span>
                        </div>
                      </div>
                      <div className="pt-2 text-xs text-slate-500 dark:text-slate-400">
                        Direct inquiries: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#389BB5] font-bold underline">{COMPANY_INFO.email}</a>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 bg-[#053674] hover:bg-[#0066CC] text-white text-xs font-bold py-2.5 px-6 rounded-xl cursor-pointer border border-[#389BB5]/40"
                      >
                        Schedule Another Demo
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Full Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="e.g. Anand Mehta"
                            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#389BB5]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Company Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="e.g. Apex Global Logistics"
                            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#389BB5]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Business Email <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="anand@company.com"
                            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#389BB5]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Phone Number <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 98765 43210"
                            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#389BB5]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Designation <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            placeholder="e.g. VP Operations"
                            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#389BB5]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Select Product <span className="text-rose-500">*</span>
                          </label>
                          <select
                            value={product}
                            onChange={(e) => setProduct(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#389BB5]"
                          >
                            <option value="Warehouse Management System">Warehouse Management System</option>
                            <option value="Transport Management System">Transport Management System</option>
                            <option value="Gate / Yard Management System">Gate / Yard Management System</option>
                            <option value="Vendor Management System">Vendor Management System</option>
                            <option value="Hotel ERP">Hotel ERP</option>
                            <option value="Inventory Management System">Inventory Management System</option>
                            <option value="Custom Technology Solution">Custom Technology Solution</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Business Type
                          </label>
                          <select
                            value={businessType}
                            onChange={(e) => setBusinessType(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#389BB5]"
                          >
                            <option value="Logistics & 3PL">Logistics & 3PL</option>
                            <option value="Warehousing">Warehousing & Fulfillment</option>
                            <option value="Manufacturing">Manufacturing & Plants</option>
                            <option value="Retail & Stores">Retail & Stores</option>
                            <option value="Hospitality & Hotels">Hospitality & Hotels</option>
                            <option value="Distribution">Distribution & Wholesale</option>
                            <option value="Enterprise">Enterprise Operations</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Number of Locations
                          </label>
                          <select
                            value={locations}
                            onChange={(e) => setLocations(e.target.value)}
                            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#389BB5]"
                          >
                            <option value="1 Location">1 Location</option>
                            <option value="2 - 5 Locations">2 - 5 Locations</option>
                            <option value="6 - 20 Locations">6 - 20 Locations</option>
                            <option value="20+ Enterprise Multi-City">20+ Enterprise Multi-City</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Message / Specific Requirement
                        </label>
                        <textarea
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Share your current challenges, systems in use, or expected timeline..."
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#389BB5]"
                        ></textarea>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#053674] hover:bg-[#0066CC] text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-xl shadow-[#053674]/20 flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#389BB5]/40"
                      >
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-[#FFC412]" />
                            <span>Request Enterprise Demo</span>
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <GlobalCtaSection />
    </div>
  );
}

export default BookDemoPage;
