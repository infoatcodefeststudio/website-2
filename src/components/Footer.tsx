import React from 'react';
import { useNavigation, PageRoute } from '../context/NavigationContext';
import { COMPANY_INFO } from '../data/company';
import { PRODUCTS } from '../data/products';
import { WiproBrandMark, WiproDotCluster } from './WiproBrandMark';
import { 
  Mail, 
  Globe, 
  ArrowUpRight, 
  ChevronRight,
  ShieldCheck,
  Building2
} from 'lucide-react';

export function Footer() {
  const { navigate, openDemoModal } = useNavigation();

  return (
    <footer className="bg-[#071326] text-slate-300 border-t border-slate-800 pt-0 pb-12 relative overflow-hidden">
      {/* Top Wipro Multi-Color Accent Line */}
      <div className="w-full h-1 wipro-multi-gradient" />

      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#053674]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#389BB5]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                <WiproBrandMark size="md" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  Codefest <span className="text-[#389BB5]">Studio</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#389BB5]">
                  Enterprise Tech
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <WiproDotCluster />
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Connecting Technology, People & Business
              </p>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Codefest Studio empowers modern enterprises with purpose-built digital platforms, automated supply chain workflows, and bespoke software engineering.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs">
              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="focus-ring inline-flex items-center gap-2 py-1.5 text-slate-300 hover:text-white transition-colors group rounded-md"
              >
                <div className="w-7 h-7 rounded-lg bg-[#053674]/50 border border-slate-700 flex items-center justify-center group-hover:border-[#389BB5] transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#389BB5]" />
                </div>
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-7 h-7 rounded-lg bg-[#053674]/50 border border-slate-700 flex items-center justify-center">
                  <Globe className="w-3.5 h-3.5 text-[#389BB5]" />
                </div>
                <span>{COMPANY_INFO.website}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <span>Capabilities</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => navigate('home')} 
                  className="focus-ring text-left py-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-md"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('solutions')} 
                  className="focus-ring text-left py-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-md"
                >
                  Industry Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('custom-technology')} 
                  className="focus-ring text-left py-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-md"
                >
                  Custom Technology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('about')} 
                  className="focus-ring text-left py-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-md"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigate('contact')} 
                  className="focus-ring text-left py-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-md"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => openDemoModal()} 
                  className="focus-ring text-[#389BB5] font-semibold hover:text-[#5bc1dc] transition-colors inline-flex items-center gap-1 py-1.5 cursor-pointer rounded-md"
                >
                  <span>Request Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Products Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span>Enterprise Platforms</span>
              <span className="text-[10px] bg-[#053674] text-[#389BB5] px-2 py-0.5 rounded font-mono">
                6 Suites
              </span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              {PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => navigate(prod.slug as PageRoute)}
                  className="focus-ring text-left py-1.5 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group cursor-pointer rounded-md"
                >
                  <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#389BB5] transition-colors shrink-0" />
                  <span className="truncate">{prod.name}</span>
                </button>
              ))}
            </div>

            {/* Support / Demo Callout in Footer */}
            <div className="mt-6 p-4 rounded-xl bg-[#031b3b] border border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-white">Accelerate Your Digital Transformation</div>
                <div className="text-[11px] text-slate-400">Consult with our enterprise architects</div>
              </div>
              <button
                onClick={() => openDemoModal()}
                className="btn-primary btn-sm shrink-0"
              >
                Connect
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <WiproDotCluster />
            <span>© {COMPANY_INFO.year} {COMPANY_INFO.name}. All Rights Reserved.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <button
              onClick={() => navigate('privacy')}
              className="focus-ring py-1.5 hover:text-[#389BB5] transition-colors cursor-pointer rounded-md"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => navigate('terms')}
              className="focus-ring py-1.5 hover:text-[#389BB5] transition-colors cursor-pointer rounded-md"
            >
              Terms & Conditions
            </button>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="focus-ring py-1.5 hover:text-[#389BB5] transition-colors rounded-md"
            >
              {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
