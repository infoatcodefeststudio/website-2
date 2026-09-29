import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANY_INFO } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GlobalCtaSection } from '../components/GlobalCtaSection';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/MotionSection';
import { WiproBrandMark, WiproDotCluster } from '../components/WiproBrandMark';
import { 
  Mail, 
  Globe, 
  Phone, 
  Send, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  User, 
  MessageSquare, 
  Clock 
} from 'lucide-react';

export function ContactPage() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Warehouse Management System');
  const [requirement, setRequirement] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTicketId('ENQ-' + Math.floor(100000 + Math.random() * 900000));
    }, 700);
  };

  return (
    <div className="bg-slate-50 dark:bg-[#071326] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />
      </div>

      {/* Hero */}
      <section className="pt-6 pb-16 lg:pt-10 lg:pb-20 bg-white dark:bg-[#071326] overflow-hidden border-b border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-3 shadow-sm">
              <WiproDotCluster />
              <span>Get in Touch</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071326] dark:text-white tracking-tight">
              Let's Build Your Next Technology Solution
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
              Have a project in mind or need a product walkthrough? Reach out to our technology and solutions consulting team.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Info Card */}
            <FadeIn direction="right" className="lg:col-span-5 w-full">
              <div className="bg-[#0b1c36] text-white rounded-3xl p-8 sm:p-10 space-y-8 shadow-xl relative overflow-hidden border border-slate-700/80">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#053674]/30 rounded-full blur-3xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1 bg-white rounded-lg shadow-sm">
                      <WiproBrandMark size="sm" />
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-white">
                      Codefest <span className="text-[#389BB5]">Studio</span>
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-[#389BB5] uppercase tracking-wider">
                    Technology Solutions & Product Management
                  </p>
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    We build technology around the way your business works. Reach out for enterprise demos, RFP inquiries, or custom engineering consultations.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <motion.a 
                    whileHover={{ scale: 1.02 }}
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="p-4 rounded-2xl bg-[#071326] border border-slate-700 flex items-center gap-3 hover:border-[#389BB5] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#053674]/50 text-[#389BB5] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Official Email</div>
                      <div className="font-bold text-white text-sm mt-0.5">{COMPANY_INFO.email}</div>
                    </div>
                  </motion.a>

                  <div className="p-4 rounded-2xl bg-[#071326] border border-slate-700 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#053674]/50 text-[#389BB5] flex items-center justify-center shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Website Portal</div>
                      <div className="font-bold text-white text-sm mt-0.5">{COMPANY_INFO.website}</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#071326] border border-slate-700 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#053674]/50 text-[#389BB5] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Response Window</div>
                      <div className="font-bold text-white text-sm mt-0.5">&lt; 4 Hours on Business Days</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right Contact Form Card */}
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
                      <h3 className="text-2xl font-extrabold text-[#071326] dark:text-white">Message Received!</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you for contacting Codefest Studio. Our team will connect with you shortly.
                      </p>
                      <div className="bg-slate-50 dark:bg-[#071326] p-4 rounded-2xl border border-slate-200 dark:border-slate-700 text-xs max-w-sm mx-auto space-y-1">
                        <div className="text-slate-500 dark:text-slate-400">Inquiry Ticket Ref:</div>
                        <div className="font-mono font-bold text-[#053674] dark:text-[#389BB5] text-sm">{ticketId}</div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { setIsSubmitted(false); setName(''); setRequirement(''); }}
                        className="mt-4 bg-[#053674] hover:bg-[#0066CC] text-white text-xs font-bold py-2.5 px-6 rounded-xl cursor-pointer border border-[#389BB5]/40"
                      >
                        Send Another Message
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
                      <h3 className="text-xl font-extrabold text-[#071326] dark:text-white mb-2">
                        Send Us a Message
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Name <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your full name"
                            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#389BB5]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Company <span className="text-rose-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Company or Organization"
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
                            placeholder="name@company.com"
                            className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#389BB5]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                            Phone <span className="text-rose-500">*</span>
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
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Product / Service Interest <span className="text-rose-500">*</span>
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#389BB5]"
                        >
                          <option value="Warehouse Management System">Warehouse Management System (WMS)</option>
                          <option value="Transport Management System">Transport Management System (TMS)</option>
                          <option value="Gate / Yard Management System">Gate / Yard Management System (YMS)</option>
                          <option value="Vendor Management System">Vendor Management System (VMS)</option>
                          <option value="Hotel ERP">Hotel ERP & Hospitality Suite</option>
                          <option value="Inventory Management System">Inventory Management System (IMS)</option>
                          <option value="Custom Technology Solution">Custom Technology Solution</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Operational Requirement / Scope
                        </label>
                        <textarea
                          rows={4}
                          value={requirement}
                          onChange={(e) => setRequirement(e.target.value)}
                          placeholder="Tell us about your facility size, active systems, or operational goals..."
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#389BB5]"
                        ></textarea>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#053674] hover:bg-[#0066CC] text-white font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm shadow-md shadow-[#053674]/20 flex items-center justify-center gap-2 transition-all cursor-pointer border border-[#389BB5]/40"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-[#FFC412]" />
                            <span>Submit Inquiry</span>
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

      {/* Global CTA */}
      <GlobalCtaSection />
    </div>
  );
}

export default ContactPage;
