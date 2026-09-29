import React, { useState } from 'react';
import { 
  Boxes, 
  ArrowDownToLine, 
  ArrowUpFromLine, 
  ScanLine, 
  CheckCircle2, 
  AlertCircle, 
  BarChart3, 
  Layers, 
  Search,
  RefreshCw,
  QrCode
} from 'lucide-react';

export function WmsDashboardMockup({ interactive = true }: { interactive?: boolean }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'inward' | 'bins' | 'dispatch'>('overview');
  const [selectedBin, setSelectedBin] = useState<string>('A-02-B');
  const [scannedItem, setScannedItem] = useState<boolean>(true);

  const binsData = [
    { code: 'A-01-A', item: 'Industrial Sensor IC-40', qty: '450 pcs', cap: '90%', status: 'Full', lot: 'LOT-2026-X8' },
    { code: 'A-01-B', item: 'Hydraulic Coupler 24mm', qty: '180 pcs', cap: '60%', status: 'Available', lot: 'LOT-2026-X7' },
    { code: 'A-02-A', item: 'Lithium Battery Pack 48V', qty: '92 pcs', cap: '85%', status: 'Reserved', lot: 'LOT-2026-X9' },
    { code: 'A-02-B', item: 'Micro-Controller Board V2', qty: '320 pcs', cap: '64%', status: 'Available', lot: 'LOT-2026-Y1' },
    { code: 'B-01-A', item: 'Heavy Duty Bearings #9', qty: '600 pcs', cap: '95%', status: 'Full', lot: 'LOT-2026-Y4' },
    { code: 'B-01-B', item: 'Optical Transceiver Mod', qty: '210 pcs', cap: '42%', status: 'Available', lot: 'LOT-2026-Y8' }
  ];

  return (
    <div className="w-full bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-700/80 shadow-2xl shadow-indigo-950/40 text-slate-100 overflow-hidden">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/60">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-semibold text-slate-400 font-mono">Codefest WMS Core v4.2 • Central Hub #01</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Sync: Real-Time
          </span>
        </div>
      </div>

      {/* Mockup Subnav */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs">
        <div className="flex gap-1">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Overview & Telemetry
          </button>
          <button 
            onClick={() => setActiveTab('bins')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'bins' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            3D Bin Matrix
          </button>
          <button 
            onClick={() => setActiveTab('inward')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'inward' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Inward & GRN
          </button>
          <button 
            onClick={() => setActiveTab('dispatch')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'dispatch' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Wave Picking & Dispatch
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-slate-400">
          <Search className="w-3.5 h-3.5" />
          <span className="text-[11px]">Barcode / Lot Lookup</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 space-y-5">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Inventory Accuracy</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-xl font-bold text-white">99.94%</div>
            <div className="text-[10px] text-emerald-400 mt-1 font-medium">+0.8% post cycle audit</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Today Inward GRN</span>
              <ArrowDownToLine className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-xl font-bold text-white">4,820 <span className="text-xs font-normal text-slate-400">SKUs</span></div>
            <div className="text-[10px] text-blue-400 mt-1 font-medium">100% Quality Passed</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Wave Picks Active</span>
              <Layers className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-xl font-bold text-white">18 Waves</div>
            <div className="text-[10px] text-amber-400 mt-1 font-medium">Avg pick time: 1.8 min</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Dispatched Today</span>
              <ArrowUpFromLine className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div className="text-xl font-bold text-white">1,248 Orders</div>
            <div className="text-[10px] text-purple-400 mt-1 font-medium">98.9% on-time dispatch</div>
          </div>
        </div>

        {/* Tab Specific Views */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Live Operational Status */}
            <div className="md:col-span-2 bg-slate-800/40 rounded-xl p-4 border border-slate-700/40">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-indigo-400" />
                  Live Operational Velocity & Zone Density
                </h4>
                <span className="text-[10px] text-slate-400">Hub Occupancy: 84%</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Zone A (High Velocity Fast-Movers)</span>
                    <span className="text-indigo-400 font-semibold">92% Utilized</span>
                  </div>
                  <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-full w-[92%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Zone B (Heavy Bulk & Pallets)</span>
                    <span className="text-indigo-400 font-semibold">78% Utilized</span>
                  </div>
                  <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-full w-[78%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Zone C (Temperature-Controlled Storage)</span>
                    <span className="text-indigo-400 font-semibold">64% Utilized</span>
                  </div>
                  <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-500 to-emerald-500 h-full w-[64%] rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/40 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-slate-900/60 p-2 rounded-lg">
                  <div className="text-[10px] text-slate-400">Putaway Pending</div>
                  <div className="font-bold text-white mt-0.5">14 Pallets</div>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-lg">
                  <div className="text-[10px] text-slate-400">Cycle Count Verified</div>
                  <div className="font-bold text-emerald-400 mt-0.5">380 Bins</div>
                </div>
                <div className="bg-slate-900/60 p-2 rounded-lg">
                  <div className="text-[10px] text-slate-400">Dock Manifests</div>
                  <div className="font-bold text-indigo-400 mt-0.5">24 Ready</div>
                </div>
              </div>
            </div>

            {/* Live Putaway & Scan Assistant */}
            <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <QrCode className="w-4 h-4 text-emerald-400" />
                    Handheld Scanner Link
                  </h4>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-mono">
                    HHT #08 Active
                  </span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-700/50 text-xs space-y-2">
                  <div className="text-[10px] text-slate-400">Last Scanned SKU</div>
                  <div className="font-mono font-bold text-indigo-300 text-sm">SKU-IC40-99812</div>
                  <div className="text-slate-300 text-[11px]">Industrial Sensor Micro-IC</div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between text-[10px]">
                    <span className="text-slate-400">Allocated Putaway:</span>
                    <span className="font-mono font-bold text-amber-300">Aisle 04 • Bin A-02-B</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setScannedItem(!scannedItem)}
                className="mt-3 w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-indigo-600/20"
              >
                <ScanLine className="w-3.5 h-3.5" />
                Simulate Barcode Verification
              </button>
            </div>
          </div>
        )}

        {activeTab === 'bins' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300">Select any Bin to inspect SKU breakdown & lot parameters:</span>
              <span className="text-[11px] text-indigo-400 font-mono">Current Focus: {selectedBin}</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {binsData.map((bin) => (
                <button
                  key={bin.code}
                  onClick={() => setSelectedBin(bin.code)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedBin === bin.code 
                      ? 'bg-indigo-950/80 border-indigo-400 shadow-md ring-1 ring-indigo-400/50' 
                      : 'bg-slate-800/50 border-slate-700/60 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono text-xs font-bold text-white">{bin.code}</span>
                    <span className={`w-2 h-2 rounded-full ${bin.status === 'Full' ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
                  </div>
                  <div className="text-[10px] text-slate-300 truncate">{bin.item}</div>
                  <div className="text-[10px] text-indigo-300 font-semibold mt-1">{bin.qty}</div>
                  <div className="w-full bg-slate-700 h-1 rounded-full mt-1.5 overflow-hidden">
                    <div 
                      className="bg-indigo-500 h-full rounded-full" 
                      style={{ width: bin.cap }}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
            {/* Bin Detail Callout */}
            {binsData.find(b => b.code === selectedBin) && (
              <div className="bg-slate-800/80 p-3 rounded-xl border border-indigo-500/30 flex flex-wrap items-center justify-between text-xs gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-lg">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{binsData.find(b => b.code === selectedBin)?.item}</div>
                    <div className="text-[11px] text-slate-400 font-mono">Lot: {binsData.find(b => b.code === selectedBin)?.lot} • Capacity: {binsData.find(b => b.code === selectedBin)?.cap}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="px-2 py-1 rounded bg-slate-900 text-slate-300">FEFO Expiry: 2028-12</span>
                  <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Verified In-Stock</span>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'inward' && (
          <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 text-xs">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold text-slate-200">Active Inbound Consignments (GRN Staging)</span>
              <span className="text-[11px] text-slate-400">Total 3 Trucks Unloading</span>
            </div>
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-indigo-400">PO-88421</span>
                  <div>
                    <div className="font-medium text-slate-200">Apex Precision Components Ltd</div>
                    <div className="text-[10px] text-slate-400">Dock Bay 02 • 1,200 Units (Hydraulic Couplers)</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  GRN Generated • Putaway Pending
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-indigo-400">PO-88422</span>
                  <div>
                    <div className="font-medium text-slate-200">ElectroTech Micro Systems</div>
                    <div className="text-[10px] text-slate-400">Dock Bay 04 • 850 Units (Sensor Arrays)</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  QC Sample Inspection (80/850)
                </span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'dispatch' && (
          <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 text-xs">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold text-slate-200">Wave Picking & Outbound Carrier Handover</span>
              <span className="text-[11px] text-slate-400">Shift #1 Target: 1,500 Orders</span>
            </div>
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-indigo-400">WAVE-9021</span>
                  <div>
                    <div className="font-medium text-slate-200">Express Courier Line • 240 Orders</div>
                    <div className="text-[10px] text-slate-400">Assigned Pickers: 4 • Aisle 01 to 06</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Packed & Manifest Printed
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-700/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-indigo-400">WAVE-9022</span>
                  <div>
                    <div className="font-medium text-slate-200">Heavy Freight Regional • 48 Bulk Pallets</div>
                    <div className="text-[10px] text-slate-400">Forklift Operator: Rajesh K. • Zone B</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  Picking in Progress (85%)
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
