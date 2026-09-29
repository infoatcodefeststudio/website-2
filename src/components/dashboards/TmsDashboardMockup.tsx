import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Navigation, 
  Clock, 
  Fuel, 
  CheckCircle2, 
  FileCheck, 
  ShieldAlert, 
  UserCheck,
  TrendingUp,
  Share2
} from 'lucide-react';

export function TmsDashboardMockup() {
  const [activeTab, setActiveTab] = useState<'map' | 'trips' | 'pod' | 'drivers'>('map');
  const [selectedVehicle, setSelectedVehicle] = useState<string>('TRUCK-08');

  const fleet = [
    { id: 'TRUCK-08', driver: 'Vikram Singh', route: 'Mumbai Hub → Pune DC', status: 'In-Transit', eta: '45 mins', speed: '62 km/h', fuel: '78%', load: '94%', sla: 'On-Time' },
    { id: 'TRUCK-14', driver: 'Anand Kumar', route: 'Delhi Hub → Jaipur Bay', status: 'In-Transit', eta: '1 hr 20m', speed: '58 km/h', fuel: '85%', load: '100%', sla: 'On-Time' },
    { id: 'TRUCK-03', driver: 'Sunil Rao', route: 'Bengaluru DC → Chennai Port', status: 'Unloading', eta: 'Docked', speed: '0 km/h', fuel: '62%', load: '12%', sla: 'Delivered' },
    { id: 'TRUCK-22', driver: 'Mohd. Imran', route: 'Ahmedabad → Surat City', status: 'Loading', eta: 'Dep: 10 mins', speed: '0 km/h', fuel: '92%', load: '80%', sla: 'Scheduled' }
  ];

  return (
    <div className="w-full bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-700/80 shadow-2xl shadow-indigo-950/40 text-slate-100 overflow-hidden">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/60">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-semibold text-slate-400 font-mono">Codefest TMS Live Fleet Telematics • Global Corridor</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            <Navigation className="w-3 h-3 text-indigo-400 animate-spin" style={{ animationDuration: '6s' }} />
            GPS Active (148/150 Vehicles)
          </span>
        </div>
      </div>

      {/* Mockup Subnav */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs">
        <div className="flex gap-1">
          <button 
            onClick={() => setActiveTab('map')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'map' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Live Fleet Map & Telemetry
          </button>
          <button 
            onClick={() => setActiveTab('trips')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'trips' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Trip Orchestrator & AI Route
          </button>
          <button 
            onClick={() => setActiveTab('pod')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'pod' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Digital e-POD Vault
          </button>
          <button 
            onClick={() => setActiveTab('drivers')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeTab === 'drivers' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Driver Attendance & Fuel
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-slate-400">
          <span className="text-[11px] text-emerald-400 font-mono">98.6% On-Time SLA</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 space-y-5">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Active Freight Trips</span>
              <Truck className="w-3.5 h-3.5 text-indigo-400" />
            </div>
            <div className="text-xl font-bold text-white">42 Vehicles</div>
            <div className="text-[10px] text-indigo-300 mt-1 font-medium">94.2% Fleet Utilization</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Fuel Economy Rate</span>
              <Fuel className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-xl font-bold text-white">4.82 <span className="text-xs font-normal text-slate-400">km/L</span></div>
            <div className="text-[10px] text-emerald-400 mt-1 font-medium">+18.4% saved via AI routing</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Avg e-POD Collection</span>
              <FileCheck className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-xl font-bold text-white">&lt; 90 Seconds</div>
            <div className="text-[10px] text-blue-400 mt-1 font-medium">Paperless photo & e-sign</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>SLA Target Score</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div className="text-xl font-bold text-white">99.1%</div>
            <div className="text-[10px] text-purple-400 mt-1 font-medium">Zero geofence breaches</div>
          </div>
        </div>

        {/* Tab 1: Live Fleet Map & Telemetry */}
        {activeTab === 'map' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Interactive Simulated Map */}
            <div className="md:col-span-2 bg-slate-950 rounded-xl p-4 border border-slate-800 relative overflow-hidden flex flex-col justify-between min-h-[260px]">
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
              
              <div className="relative z-10 flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-200">Western Corridor • Multi-Hub Grid</span>
                  <span className="bg-indigo-900/60 text-indigo-300 border border-indigo-700/40 px-2 py-0.5 rounded text-[10px]">AI Route Active</span>
                </div>
                <div className="text-[11px] text-slate-400">Live Traffic: Normal Flow</div>
              </div>

              {/* Simulated Map Markers & Routes */}
              <div className="relative z-10 my-6 flex flex-col gap-3">
                <div className="relative bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-indigo-500/40 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white flex items-center gap-1.5">
                        MH-12-QB-8842 <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded font-normal">In-Transit</span>
                      </div>
                      <div className="text-[10px] text-slate-400">Driver: Vikram S. • Mumbai Expressway KM 64</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-indigo-400 font-mono font-bold">ETA: 42 mins</div>
                    <div className="text-[10px] text-slate-400">Speed: 64 km/h • 24°C Temp-Safe</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 px-2">
                  <span>Origin: Bhiwandi Central Hub</span>
                  <span className="text-indigo-400 font-mono">➔ ➔ ➔ Highway Express ➔ ➔ ➔</span>
                  <span>Destination: Chakan Pune DC</span>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-between text-[11px] pt-2 border-t border-slate-800 text-slate-400">
                <span>Geofence Status: Inside Corridor Zone</span>
                <span className="text-emerald-400 font-mono">Consignment Safe & Sealed</span>
              </div>
            </div>

            {/* Vehicle Selection List */}
            <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/40 space-y-2 text-xs">
              <div className="text-[11px] font-semibold text-slate-300 mb-2">Active Fleet Status</div>
              {fleet.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVehicle(v.id)}
                  className={`w-full p-2.5 rounded-lg text-left transition-all border ${
                    selectedVehicle === v.id
                      ? 'bg-indigo-950/70 border-indigo-400 ring-1 ring-indigo-400/40'
                      : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-mono font-bold text-white">{v.id}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                      v.status === 'In-Transit' ? 'bg-blue-500/20 text-blue-300' : 'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {v.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 truncate">{v.route}</div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>ETA: {v.eta}</span>
                    <span>Fuel: {v.fuel}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Trip Orchestrator */}
        {activeTab === 'trips' && (
          <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 text-xs space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-200">AI-Optimized Multi-Drop Manifests</span>
              <span className="text-[11px] text-indigo-400">Total Distance Saved: 142 km today</span>
            </div>
            <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-700/50 space-y-2">
              <div className="flex justify-between">
                <span className="font-bold text-indigo-300">TRIP-2026-8801 • 3 Drops</span>
                <span className="text-emerald-400 font-mono">Load Capacity: 98% (Optimal)</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-300 pt-1">
                <div>Drop 1: Andheri Retail Hub (09:30 AM)</div>
                <div>Drop 2: Kurla Distribution (11:15 AM)</div>
                <div>Drop 3: Thane Fulfillment (01:45 PM)</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Digital e-POD Vault */}
        {activeTab === 'pod' && (
          <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 text-xs">
            <div className="flex justify-between items-center mb-3">
              <span className="font-semibold text-slate-200">Instant Electronic Proof of Delivery (e-POD)</span>
              <span className="text-[11px] text-emerald-400 font-mono">Instant Freight Settlement</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white font-mono">LR-994821 • Delivered</span>
                  <span className="text-[10px] text-slate-400">Today, 11:24 AM</span>
                </div>
                <div className="text-slate-300 text-[11px]">Consignee: Global Logistics Park Ltd</div>
                <div className="p-2 bg-slate-950 rounded border border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Signatory: R. Sharma (Store Mgr)</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified e-Sign
                  </span>
                </div>
              </div>
              <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white font-mono">LR-994822 • Delivered</span>
                  <span className="text-[10px] text-slate-400">Today, 10:15 AM</span>
                </div>
                <div className="text-slate-300 text-[11px]">Consignee: Metro Retail Outlets #12</div>
                <div className="p-2 bg-slate-950 rounded border border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Geo-Tagged Cargo Photo</span>
                  <span className="text-indigo-400 font-semibold">Attached (2 Photos)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Driver Attendance & Fuel */}
        {activeTab === 'drivers' && (
          <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 text-xs space-y-2">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-slate-200">Driver Roster & Advance Expense Reconciliation</span>
              <span className="text-[11px] text-slate-400">64 Active Drivers on Duty</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-700/40">
                <div className="text-[10px] text-slate-400">Driver Duty Check-In</div>
                <div className="font-bold text-white mt-0.5">Vikram S. (DL-MH-881)</div>
                <div className="text-[10px] text-emerald-400 mt-1">Breathalyzer: Passed 0.00%</div>
              </div>
              <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-700/40">
                <div className="text-[10px] text-slate-400">Toll & FASTag Auto-Debit</div>
                <div className="font-bold text-white mt-0.5">₹1,450 Synchronized</div>
                <div className="text-[10px] text-blue-400 mt-1">Automatic Trip Ledger Sync</div>
              </div>
              <div className="p-2.5 bg-slate-900/60 rounded-lg border border-slate-700/40">
                <div className="text-[10px] text-slate-400">Driver Safety Rating</div>
                <div className="font-bold text-white mt-0.5">4.92 / 5.0 Star Score</div>
                <div className="text-[10px] text-purple-400 mt-1">Zero harsh braking alerts</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
