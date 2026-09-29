import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FileText } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="bg-slate-50 dark:bg-[#071326] min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

        <div className="bg-white dark:bg-[#0b1c36] rounded-3xl border border-slate-200 dark:border-slate-700 p-8 sm:p-12 shadow-sm space-y-6 text-slate-700 dark:text-slate-300 text-sm leading-relaxed transition-colors duration-300">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
            <div className="flex items-center gap-2 text-[#053674] dark:text-[#389BB5] font-bold text-xs uppercase tracking-wider mb-2">
              <FileText className="w-4 h-4" />
              <span>Service Terms & Governance</span>
            </div>
            <h1 className="text-3xl font-extrabold text-[#071326] dark:text-white">
              Terms & Conditions
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Last Updated: January 1, {COMPANY_INFO.year} • {COMPANY_INFO.name}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-[#071326] dark:text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing {COMPANY_INFO.website} or engaging {COMPANY_INFO.name} for software platforms or custom engineering solutions, you agree to comply with and be bound by these Terms and Conditions.
            </p>

            <h2 className="text-lg font-bold text-[#071326] dark:text-white">2. Software Licensing & Enterprise Deployments</h2>
            <p>
              All software suites (WMS, TMS, Gate/Yard Management, Vendor Management, Hotel ERP, and Inventory Management) provided by {COMPANY_INFO.name} are licensed under specific Enterprise Master Service Agreements (MSA) and Service Level Agreements (SLA).
            </p>

            <h2 className="text-lg font-bold text-[#071326] dark:text-white">3. Intellectual Property</h2>
            <p>
              The trademarks, product architectures, and core software engines are the exclusive intellectual property of {COMPANY_INFO.name}, unless custom development deliverables are explicitly transferred under bespoke contract agreements.
            </p>

            <h2 className="text-lg font-bold text-[#071326] dark:text-white">4. Contact Inquiries</h2>
            <p>
              For legal questions or SLA terms, please reach out directly to{' '}
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

export default TermsPage;
