import React, { useState } from 'react';
import { 
  ShieldCheck, 
  DoorOpen, 
  Clock, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Scale, 
  QrCode,
  ArrowRightLeft
} from 'lucide-react';

export function YardDashboardMockup() {
  const [selectedDock, setSelectedDock] = useState<number>(2);

  const docks = [
    { id: 1, name: 'Dock Bay 01', type: 'Unloading (Raw Material)', vehicle: 'GJ-06-AV-1044', status: 'In-Progress (65%)', eta: '18 mins left', carrier: 'BlueDart Line' },
    { id: 2, name: 'Dock Bay 02', type: 'Loading (Finished Goods)', vehicle: 'MH-04-EK-9021', status: 'In-Progress (90%)', eta: '05 mins left', carrier: 'Apex Logistics' },
    { id: 3, name: 'Dock Bay 03', type: 'Empty / Reserved', vehicle: 'Awaiting (KA-01-MJ-4411)', status: 'Slot Booked', eta: 'Calling up...', carrier: 'VRL Roadways' },
    { id: 4, name: 'Dock Bay 04', type: 'Unloading (Packaging)', vehicle: 'DL-01-AB-7712', status: 'In-Progress (30%)', eta: '35 mins left', carrier: 'SafeXpress' },
    { id: 5, name: 'Dock Bay 05', type: 'Maintenance Check', vehicle: 'None', status: 'Inspection', eta: 'Available in 10m', carrier: 'Internal Bay' },
    { id: 6, name: 'Dock Bay 06', type: 'Loading (Bulk Export)', vehicle: 'HR-55-XY-3120', status: 'In-Progress (80%)', eta: '12 mins left', carrier: 'TCI Freight' }
  ];

  return (
    <div className="w-full bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-700/80 shadow-2xl shadow-emerald-950/30 text-slate-100 overflow-hidden">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/60">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-semibold text-slate-400 font-mono">Codefest YMS Gate & Dock Control • Plant 03</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            Security Gates 1 & 2 Online
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 space-y-5">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Yard Occupancy</span>
              <DoorOpen className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-xl font-bold text-white">78% <span className="text-xs text-slate-400 font-normal">(28/36 slots)</span></div>
            <div className="text-[10px] text-emerald-400 mt-1 font-medium">Optimal staging flow</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Avg Gate In Dwell</span>
              <Clock className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-xl font-bold text-white">45 Seconds</div>
            <div className="text-[10px] text-blue-400 mt-1 font-medium">QR fast-track verification</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Active Docks</span>
              <ArrowRightLeft className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-xl font-bold text-white">5 of 6 Bays</div>
            <div className="text-[10px] text-amber-400 mt-1 font-medium">Turnaround: 34 mins avg</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Weighbridge Sync</span>
              <Scale className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div className="text-xl font-bold text-white">100% Match</div>
            <div className="text-[10px] text-purple-400 mt-1 font-medium">Zero tare/gross variances</div>
          </div>
        </div>

        {/* Interactive Dock Bays Grid */}
        <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-slate-200">Real-Time Dock Allocation Matrix</span>
            <span className="text-[11px] text-emerald-400">Click a bay to view cargo and driver manifest</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {docks.map((dock) => (
              <button
                key={dock.id}
                onClick={() => setSelectedDock(dock.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedDock === dock.id
                    ? 'bg-emerald-950/60 border-emerald-400 ring-1 ring-emerald-400/40 shadow-lg'
                    : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/80'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-white text-xs">{dock.name}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    dock.status.includes('In-Progress') ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    {dock.status}
                  </span>
                </div>
                <div className="text-[11px] text-slate-300">{dock.type}</div>
                <div className="font-mono text-[11px] text-indigo-300 mt-1 font-semibold">{dock.vehicle}</div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 pt-1 border-t border-slate-800">
                  <span>{dock.carrier}</span>
                  <span className="text-emerald-400 font-mono">{dock.eta}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Live Gate Verification Pass preview */}
        <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-700/50 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white flex items-center gap-2">
                Digital Gate Pass #GP-2026-9042
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full">Driver KYC Verified</span>
              </div>
              <div className="text-[11px] text-slate-400">Driver: Ramesh Patil • License: DL-04-2018-9921 • Inward Gate #01</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-slate-300 font-mono bg-slate-800 px-2.5 py-1 rounded">Gross Wt: 24,850 kg</span>
            <span className="text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 rounded flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Barrier Lifted
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
