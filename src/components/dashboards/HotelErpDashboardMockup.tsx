import React, { useState, useEffect } from 'react';
import { 
  Hotel, 
  QrCode, 
  Utensils, 
  ChefHat, 
  BellRing, 
  CheckCircle2, 
  Receipt, 
  BedDouble, 
  Sparkles,
  ArrowRight,
  Play,
  RotateCcw,
  Key,
  UserCheck,
  CreditCard,
  ShieldCheck
} from 'lucide-react';

export function HotelErpDashboardMockup() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<'workflow' | 'rooms' | 'folio'>('workflow');

  const workflowSteps = [
    {
      id: 'checkin',
      title: '1. Express Check-In',
      role: 'Reception / Front Desk',
      desc: 'Guest arrives; staff performs instant Aadhaar/Passport OCR verification and allocates Deluxe Suite #402 in 45s.',
      icon: UserCheck,
      badge: 'KYC Verified'
    },
    {
      id: 'key',
      title: '2. Smart Key Issuance',
      role: 'RFID / Mobile Key',
      desc: 'Digital smart pass issued to guest phone for contactless door opening and elevator access.',
      icon: Key,
      badge: 'NFC Active'
    },
    {
      id: 'qr',
      title: '3. Bedside QR Scan',
      role: 'Guest Smartphone',
      desc: 'Guest relaxes in Suite #402 and scans the acrylic bedside QR stand with no app download required.',
      icon: QrCode,
      badge: 'Interactive Menu'
    },
    {
      id: 'order',
      title: '4. In-Room Food Order',
      role: 'Folio Attached',
      desc: 'Guest selects Grilled Salmon & Truffle Pasta with note: "Less spicy, extra garlic bread".',
      icon: Utensils,
      badge: 'Order #ORD-992'
    },
    {
      id: 'kitchen',
      title: '5. Kitchen KDS Prep',
      role: 'Kitchen Display',
      desc: 'Order pings Kitchen Display System (KDS); Chef accepts ticket and timer starts (14 mins est).',
      icon: ChefHat,
      badge: 'KOT Printed'
    },
    {
      id: 'dispatch',
      title: '6. Butler Delivery',
      role: 'Room Service',
      desc: 'Dish plated and delivered to Suite #402. Minibar sensors & laundry charges auto-sync.',
      icon: BellRing,
      badge: 'Dispatched (Tray #12)'
    },
    {
      id: 'folio',
      title: '7. Master Folio Ledger',
      role: 'Consolidated Billing',
      desc: 'Tariff, F&B, and minibar charges aggregate into a single GST-compliant room ledger in real time.',
      icon: Receipt,
      badge: 'Zero Dispute'
    },
    {
      id: 'checkout',
      title: '8. 1-Tap Check-Out',
      role: 'Departure & Turnover',
      desc: 'Guest completes 1-click mobile checkout, receives WhatsApp e-invoice, and room status resets to Housekeeping.',
      icon: CheckCircle2,
      badge: 'Room Released'
    }
  ];

  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev >= workflowSteps.length - 1) {
            setIsAutoPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, workflowSteps.length]);

  const rooms = [
    { number: '101', type: 'Executive Suite', status: 'Occupied', guest: 'Mr. Adani', stay: '2 nights' },
    { number: '102', type: 'Deluxe King', status: 'Available', guest: 'Cleaned', stay: 'Ready' },
    { number: '201', type: 'Deluxe King', status: 'Occupied', guest: 'Dr. Mehta', stay: '1 night' },
    { number: '202', type: 'Standard Twin', status: 'Cleaning', guest: 'Housekeeping', stay: 'In-Progress' },
    { number: '301', type: 'Presidential', status: 'Occupied', guest: 'Ms. Kapoor', stay: '4 nights' },
    { number: '402', type: 'Deluxe Suite', status: 'Dining Active', guest: 'Mr. Verma', stay: '3 nights' }
  ];

  return (
    <div className="w-full bg-slate-900/95 backdrop-blur-2xl rounded-2xl border border-slate-700/80 shadow-2xl shadow-amber-950/30 text-slate-100 overflow-hidden">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/60">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          <span className="ml-2 text-xs font-semibold text-slate-400 font-mono">Codefest Hotel ERP & Contactless Dining Engine</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Hotel className="w-3 h-3 text-amber-400" />
            Grand Horizon Hotel & Suites
          </span>
        </div>
      </div>

      {/* Mockup Subnav */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs">
        <div className="flex gap-1">
          <button 
            onClick={() => setActiveView('workflow')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeView === 'workflow' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Interactive QR Dining Flow (Live Simulator)
          </button>
          <button 
            onClick={() => setActiveView('rooms')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeView === 'rooms' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Room Grid & Housekeeping
          </button>
          <button 
            onClick={() => setActiveView('folio')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${activeView === 'folio' ? 'bg-amber-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
          >
            GST Folio & POS Billing
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-slate-400 font-mono text-[11px]">
          <span>Occupancy: 88%</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-6 space-y-5">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Room Occupancy</span>
              <BedDouble className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-xl font-bold text-white">88.4%</div>
            <div className="text-[10px] text-amber-400 mt-1 font-medium">84 of 95 Rooms Booked</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Avg Check-In Time</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-xl font-bold text-white">45 Seconds</div>
            <div className="text-[10px] text-emerald-400 mt-1 font-medium">Corporate express scan</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Today QR F&B Orders</span>
              <Utensils className="w-3.5 h-3.5 text-orange-400" />
            </div>
            <div className="text-xl font-bold text-white">124 Orders</div>
            <div className="text-[10px] text-orange-400 mt-1 font-medium">+32% F&B Revenue lift</div>
          </div>
          <div className="bg-slate-800/60 p-3.5 rounded-xl border border-slate-700/50">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Kitchen Avg Prep</span>
              <ChefHat className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="text-xl font-bold text-white">14.2 Mins</div>
            <div className="text-[10px] text-blue-400 mt-1 font-medium">Direct KDS sync</div>
          </div>
        </div>

        {/* View 1: Interactive QR Food Ordering & Kitchen Flow */}
        {activeView === 'workflow' && (
          <div className="bg-slate-800/40 rounded-xl p-4 sm:p-5 border border-slate-700/40 space-y-4">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Interactive Order-to-Delivery Lifecycle
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Click through the 8 stages below or hit Auto-Play to experience the touchless guest dining flow:
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-colors shadow-md shadow-amber-500/20"
                >
                  <Play className={`w-3 h-3 ${isAutoPlaying ? 'animate-spin' : ''}`} />
                  {isAutoPlaying ? 'Pause Flow' : 'Auto-Play Simulation'}
                </button>
                <button
                  onClick={() => { setActiveStep(0); setIsAutoPlaying(false); }}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-colors"
                  title="Reset flow"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stepper Buttons Horizontal Bar */}
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 pt-2">
              {workflowSteps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = activeStep === idx;
                const isPassed = activeStep > idx;
                return (
                  <button
                    key={step.id}
                    onClick={() => { setActiveStep(idx); setIsAutoPlaying(false); }}
                    className={`p-2 rounded-xl border text-center flex flex-col items-center gap-1 transition-all ${
                      isActive 
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 ring-2 ring-amber-400/40 shadow-lg scale-105' 
                        : isPassed
                          ? 'bg-emerald-950/60 text-emerald-300 border-emerald-600/50'
                          : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-[10px] font-medium truncate w-full">{step.title.split(' ')[1]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Spotlight Card */}
            <div className="bg-slate-900/90 rounded-2xl p-4 sm:p-6 border border-amber-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0">
                  {React.createElement(workflowSteps[activeStep].icon, { className: 'w-7 h-7' })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                      Step 0{activeStep + 1} of 08
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {workflowSteps[activeStep].badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">{workflowSteps[activeStep].title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-xl">
                    {workflowSteps[activeStep].desc}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                {activeStep < workflowSteps.length - 1 ? (
                  <button
                    onClick={() => setActiveStep(prev => prev + 1)}
                    className="w-full md:w-auto px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-transform shadow-lg shadow-amber-500/20"
                  >
                    Next Stage <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="px-4 py-2.5 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-xl text-xs font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Workflow Complete & Billed
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* View 2: Room Grid */}
        {activeView === 'rooms' && (
          <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-200">Live Room Availability & Housekeeping Matrix</span>
              <span className="text-[11px] text-amber-400">95 Total Units</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {rooms.map((rm) => (
                <div key={rm.number} className="p-3 bg-slate-900/80 rounded-xl border border-slate-700/60 text-xs">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white font-mono">Room #{rm.number}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      rm.status === 'Occupied' ? 'bg-blue-500/20 text-blue-300' :
                      rm.status === 'Available' ? 'bg-emerald-500/20 text-emerald-300' :
                      rm.status === 'Cleaning' ? 'bg-amber-500/20 text-amber-300' :
                      'bg-orange-500/20 text-orange-300'
                    }`}>
                      {rm.status}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300">{rm.type}</div>
                  <div className="text-[10px] text-slate-400 mt-1 flex justify-between">
                    <span>{rm.guest}</span>
                    <span className="font-mono text-amber-300">{rm.stay}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View 3: GST Folio */}
        {activeView === 'folio' && (
          <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 text-xs space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-slate-200">Consolidated Guest Stay & In-Room Dining Folio</span>
              <span className="text-[11px] text-emerald-400 font-mono">GST Verified Invoice #INV-2026-HERP</span>
            </div>
            <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-700/60 space-y-2">
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Room Tariff (3 Nights @ ₹4,500)</span>
                <span className="text-white font-mono">₹13,500.00</span>
              </div>
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>In-Room QR Dining (Order #ORD-992)</span>
                <span className="text-white font-mono">₹1,450.00</span>
              </div>
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>GST (18% Room + 5% F&B)</span>
                <span className="text-white font-mono">₹2,502.50</span>
              </div>
              <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-sm text-amber-400">
                <span>Total Net Payable</span>
                <span className="font-mono">₹17,452.50</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
