import React, { useState } from 'react';
import { 
  Boxes, 
  AlertTriangle, 
  ArrowRightLeft, 
  Receipt, 
  TrendingDown, 
  CheckCircle2, 
  Building, 
  PlusCircle,
  FileCheck2
} from 'lucide-react';

export function InventoryDashboardMockup() {
  const [activeTab, setActiveTab] = useState<'stock' | 'reorder' | 'transfer'>('stock');
  const [poCreated, setPoCreated] = useState<boolean>(false);

  const stockItems = [
    { code: 'SKU-0941', name: 'Alloy Fastener 10mm', category: 'Fasteners', onHand: 4200, min: 1000, max: 8000, status: 'Healthy', value: '₹2,10,000' },
    { code: 'SKU-1823', name: 'Micro Relays 24V', category: 'Electrical', onHand: 310, min: 500, max: 3000, status: 'Low Stock', value: '₹1,55,000' },
    { code: 'SKU-4490', name: 'Thermal Compound 50g', category: 'Chemicals', onHand: 890, min: 200, max: 1500, status: 'Healthy', value: '₹89,000' },
    { code: 'SKU-7712', name: 'Packaging Film Rolls', category: 'Packing', onHand: 45, min: 80, max: 400, status: 'Critical Low', value: '₹45,000' }
  ];

  return (
    <div className="w-full bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-700/80 shadow-2xl shadow-cyan-950/30 text-slate-100 overflow-hidden">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/60">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-semibold text-slate-400 font-mono">Codefest IMS Multi-Location Stock Controller</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            <Boxes className="w-3 h-3 text-cyan-400" />
            6 Multi-City Locations Live
          </span>
        </div>
      </div>

      {/* Mockup Subnav */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs">
        <div className="flex gap-1">
          <button 
            onClick={() => setActiveTab('stock')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'stock' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Multi-Location Stock Levels
          </button>
          <button 
            onClick={() => setActiveTab('reorder')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'reorder' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Automated Reorder Engine
          </button>
          <button 
            onClick={() => setActiveTab('transfer')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'transfer' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Inter-Depot Transfers
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-slate-400 font-mono text-[11px]">
          <span>Valuation: ₹4.85 Cr (FIFO)</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 space-y-5">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Total Active SKUs</span>
              <Boxes className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div className="text-xl font-bold text-white">14,280 SKUs</div>
            <div className="text-[10px] text-cyan-300 mt-1 font-medium">99.95% Audit Accuracy</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Reorder Triggers</span>
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-xl font-bold text-white">6 Critical Items</div>
            <div className="text-[10px] text-amber-400 mt-1 font-medium">Auto-drafted POs ready</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>In-Transit Transfers</span>
              <ArrowRightLeft className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-xl font-bold text-white">8 Transfers</div>
            <div className="text-[10px] text-blue-400 mt-1 font-medium">₹8.4L stock in transit</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Stock-out Rate</span>
              <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-xl font-bold text-white">0.08%</div>
            <div className="text-[10px] text-emerald-400 mt-1 font-medium">-85% vs prior quarter</div>
          </div>
        </div>

        {/* Tab 1: Stock Table */}
        {activeTab === 'stock' && (
          <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-200">Catalog SKUs & Threshold Monitors</span>
              <span className="text-[11px] text-cyan-300">Live Balance Sync</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-700/60 text-slate-400 text-[11px]">
                    <th className="pb-2 font-medium">SKU Code</th>
                    <th className="pb-2 font-medium">Description</th>
                    <th className="pb-2 font-medium">On-Hand Qty</th>
                    <th className="pb-2 font-medium">Safety Min/Max</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium text-right">FIFO Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-200">
                  {stockItems.map((item) => (
                    <tr key={item.code} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-2.5 font-mono text-cyan-300 font-bold">{item.code}</td>
                      <td className="py-2.5 font-medium text-white">{item.name}</td>
                      <td className="py-2.5 font-mono">{item.onHand.toLocaleString()} units</td>
                      <td className="py-2.5 text-slate-400 font-mono text-[11px]">{item.min} / {item.max}</td>
                      <td className="py-2.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] ${
                          item.status === 'Healthy' ? 'bg-emerald-500/20 text-emerald-300' :
                          item.status === 'Low Stock' ? 'bg-amber-500/20 text-amber-300' :
                          'bg-rose-500/20 text-rose-300 animate-pulse'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-2.5 text-right font-mono text-slate-300">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Reorder Trigger Engine */}
        {activeTab === 'reorder' && (
          <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 text-xs space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-200">Dynamic Reorder Suggestion Engine</span>
              <span className="text-[11px] text-amber-400 font-mono">Lead Time: 3 Days</span>
            </div>
            <div className="p-3 bg-slate-900/90 rounded-xl border border-slate-700/60 space-y-2">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold text-white">SKU-7712 • Packaging Film Rolls (45 units left)</div>
                  <div className="text-[11px] text-slate-400">Preferred Supplier: PackPro Sustainable Boxes (VEND-03)</div>
                </div>
                <button
                  onClick={() => setPoCreated(true)}
                  disabled={poCreated}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    poCreated 
                      ? 'bg-emerald-600 text-white cursor-default' 
                      : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-md'
                  }`}
                >
                  {poCreated ? 'PO #88419 Dispatched!' : 'Auto-Generate PO (300 units)'}
                </button>
              </div>
              {poCreated && (
                <div className="text-[11px] text-emerald-400 bg-emerald-950/40 p-2 rounded border border-emerald-500/30 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Purchase Order auto-emailed to supplier with contracted rate ₹1,000/roll.
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: Inter-Depot Transfers */}
        {activeTab === 'transfer' && (
          <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 text-xs space-y-2">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-slate-200">Inter-Warehouse Stock Transfer Slips</span>
              <span className="text-[11px] text-slate-400">Transit Verification</span>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-700/50 flex justify-between items-center">
              <div>
                <div className="font-bold text-white">TR-2026-091 • 500 Alloy Fasteners</div>
                <div className="text-[11px] text-slate-400">From: Central Mother Hub ➔ To: Retail Hub #04</div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                In-Transit (Dispatched 08:30 AM)
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
