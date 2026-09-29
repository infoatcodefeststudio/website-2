import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { WiproDotCluster } from '../components/WiproBrandMark';
import { ShieldCheck } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#071326] min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

        <div className="bg-white dark:bg-[#0b1c36] rounded-3xl border border-slate-200 dark:border-slate-700 p-8 sm:p-12 shadow-sm space-y-6 text-slate-700 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex items-center gap-2 text-[#053674] dark:text-[#389BB5] font-bold text-xs uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Privacy & Data Protection</span>
            </div>
            <h1 className="text-3xl font-extrabold text-[#071326] dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Effective Date: January 1, {COMPANY_INFO.year} • {COMPANY_INFO.name}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#071326] dark:text-white">1. Information We Collect</h2>
            <p>
              When you submit a consultation request, contact inquiry, or interact with {COMPANY_INFO.name} services, we collect your name, business email address, phone number, organization name, and specific operational parameters.
            </p>

            <h2 className="text-lg font-bold text-[#071326] dark:text-white">2. How We Use Information</h2>
            <p>
              We use collected information solely to schedule product demonstrations, respond to technical service queries, provide enterprise proposals, and deliver customer support. We do not sell or rent personal information to third parties.
            </p>

            <h2 className="text-lg font-bold text-[#071326] dark:text-white">3. Enterprise Data Security</h2>
            <p>
              {COMPANY_INFO.name} implements industry-standard encryption protocols (TLS/HTTPS in transit, AES-256 at rest) and strict role-based access controls to safeguard your business data.
            </p>

            <h2 className="text-lg font-bold text-[#071326] dark:text-white">4. Contacting Us</h2>
            <p>
              If you have any questions about this Privacy Policy or wish to request data updates, please contact us at{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#053674] dark:text-[#389BB5] font-semibold underline">
                {COMPANY_INFO.email}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
