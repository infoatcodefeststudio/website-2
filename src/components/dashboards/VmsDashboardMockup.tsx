import React, { useState } from 'react';
import { 
  Users, 
  FileCheck, 
  Award, 
  CreditCard, 
  AlertCircle, 
  CheckCircle2, 
  Building2, 
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

export function VmsDashboardMockup() {
  const [selectedVendor, setSelectedVendor] = useState<string>('VEND-01');

  const vendors = [
    { id: 'VEND-01', name: 'Apex Industrial Parts Ltd', category: 'Mechanical & Hardware', score: '98.4%', kyc: 'Verified', otif: '99.1%', spend: '₹28.4L', contracts: '3 Active' },
    { id: 'VEND-02', name: 'ElectroPulse Components', category: 'Electronics & Sensors', score: '97.2%', kyc: 'Verified', otif: '96.8%', spend: '₹42.1L', contracts: '2 Active' },
    { id: 'VEND-03', name: 'PackPro Sustainable Boxes', category: 'Packaging Materials', score: '99.0%', kyc: 'Verified', otif: '100%', spend: '₹14.2L', contracts: '1 Active' },
    { id: 'VEND-04', name: 'SwiftExpress Freight 3PL', category: 'Logistics Carrier', score: '95.6%', kyc: 'Renewal Due (15d)', otif: '95.2%', spend: '₹62.8L', contracts: '4 Active' }
  ];

  return (
    <div className="w-full bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-700/80 shadow-2xl shadow-purple-950/30 text-slate-100 overflow-hidden">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/60">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-semibold text-slate-400 font-mono">Codefest VMS Supplier Lifecycle & Governance Hub</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <CheckCircle2 className="w-3 h-3 text-purple-400" />
            Statutory KYC 99.8% Compliant
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 space-y-5">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Active Vendors</span>
              <Building2 className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div className="text-xl font-bold text-white">248 Vendors</div>
            <div className="text-[10px] text-purple-300 mt-1 font-medium">12 Self-Service Onboarding</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Average OTIF Score</span>
              <Award className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-xl font-bold text-white">98.2%</div>
            <div className="text-[10px] text-emerald-400 mt-1 font-medium">On-Time In-Full delivery</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Active Rate Cards</span>
              <FileSpreadsheet className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-xl font-bold text-white">1,420 Items</div>
            <div className="text-[10px] text-blue-400 mt-1 font-medium">Auto-enforced in POs</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>3-Way Invoices</span>
              <CreditCard className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-xl font-bold text-white">₹1.84 Cr</div>
            <div className="text-[10px] text-amber-400 mt-1 font-medium">PO-GRN-Invoice matched</div>
          </div>
        </div>

        {/* Interactive Vendor Table */}
        <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-200">Vendor Performance & Compliance Scorecards</span>
            <span className="text-[11px] text-purple-300">Live Supplier Audit</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-700/60 text-slate-400 text-[11px]">
                  <th className="pb-2 font-medium">Vendor Partner</th>
                  <th className="pb-2 font-medium">Category</th>
                  <th className="pb-2 font-medium">Performance Score</th>
                  <th className="pb-2 font-medium">KYC Status</th>
                  <th className="pb-2 font-medium">OTIF Rate</th>
                  <th className="pb-2 font-medium text-right">Contracts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-200">
                {vendors.map((v) => (
                  <tr 
                    key={v.id} 
                    onClick={() => setSelectedVendor(v.id)}
                    className={`cursor-pointer transition-colors ${selectedVendor === v.id ? 'bg-purple-950/40' : 'hover:bg-slate-800/40'}`}
                  >
                    <td className="py-2.5 font-medium text-white flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-purple-600/20 text-purple-400 flex items-center justify-center font-bold text-[10px]">
                        {v.name.charAt(0)}
                      </div>
                      {v.name}
                    </td>
                    <td className="py-2.5 text-slate-400">{v.category}</td>
                    <td className="py-2.5">
                      <span className="font-bold text-emerald-400">{v.score}</span>
                    </td>
                    <td className="py-2.5">
                      <span className={`px-2 py-0.5 rounded text-[10px] ${
                        v.kyc.includes('Renewal') ? 'bg-amber-500/20 text-amber-300' : 'bg-emerald-500/20 text-emerald-300'
                      }`}>
                        {v.kyc}
                      </span>
                    </td>
                    <td className="py-2.5 font-mono text-slate-300">{v.otif}</td>
                    <td className="py-2.5 text-right font-medium text-purple-300">{v.contracts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
