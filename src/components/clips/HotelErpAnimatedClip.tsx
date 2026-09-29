import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hotel, 
  BedDouble, 
  Smartphone, 
  ChefHat, 
  CheckCircle2, 
  Clock, 
  QrCode, 
  Sparkles,
  BellRing,
  Receipt,
  CreditCard,
  Key,
  UserCheck,
  ShieldCheck,
  ArrowRight,
  Send,
  Sparkle
} from 'lucide-react';

interface ClipProps {
  isPlaying: boolean;
  playbackSpeed: number;
  currentStep: number;
  onStepChange?: (step: number) => void;
}

export function HotelErpAnimatedClip({ isPlaying, playbackSpeed, currentStep, onStepChange }: ClipProps) {
  const [activeStage, setActiveStage] = useState<number>(currentStep);
  const [kitchenStatus, setKitchenStatus] = useState<'RECEIVED' | 'PREPARING' | 'READY'>('PREPARING');
  const [checkoutPaid, setCheckoutPaid] = useState<boolean>(false);

  // Sync with parent step if provided
  useEffect(() => {
    setActiveStage(currentStep);
  }, [currentStep]);

  // Handle stage-specific internal animations
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setKitchenStatus((prev) => (prev === 'RECEIVED' ? 'PREPARING' : prev === 'PREPARING' ? 'READY' : 'RECEIVED'));
      setCheckoutPaid((prev) => !prev);
    }, 2400 / playbackSpeed);
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const stages = [
    {
      id: 0,
      phase: 'CHECK-IN',
      title: 'Digital Express Check-In & KYC Registration',
      subtitle: 'Guest verifies ID, gets assigned Deluxe Suite #402, and receives mobile RFID smart key pass.',
      badge: 'Arrival Stage (00:45s)',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 1,
      phase: 'IN-STAY DINING',
      title: 'Contactless QR Room Dining & Kitchen KDS Sync',
      subtitle: 'Bedside QR code launches dynamic visual menu; KDS notifies Head Chef with live cooking timer.',
      badge: 'F&B Order #HOTEL-8891',
      color: 'from-amber-600 to-orange-600'
    },
    {
      id: 2,
      phase: 'HOUSEKEEPING & FOLIO',
      title: 'Housekeeping Telemetry & Real-Time Folio Sync',
      subtitle: 'Room tariff, in-room dining, minibar, and laundry charges automatically post to unified ledger.',
      badge: 'Zero Billing Disputes',
      color: 'from-purple-600 to-indigo-600'
    },
    {
      id: 3,
      phase: 'CHECK-OUT',
      title: '1-Click Express Check-Out & GST e-Invoice',
      subtitle: 'Guest reviews consolidated bill on smartphone, pays via UPI/Card, and receives instant WhatsApp invoice.',
      badge: 'Settlement & Departure',
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  const currentStageData = stages[activeStage] || stages[0];

  return (
    <div className="w-full h-full bg-slate-950 text-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden font-sans select-none">
      {/* Background Grid & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top HUD */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
            HOTEL PMS • CHECK-IN TO CHECK-OUT PIPELINE
          </span>
          <span className="text-[10px] bg-slate-800 border border-slate-700 text-slate-300 font-mono px-2 py-0.5 rounded">
            GUEST: MR. VIKRAM MEHTA
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
          <span className="text-amber-300 font-bold">ROOM: #402 (DELUXE)</span>
          <span className="bg-amber-950/80 border border-amber-500/40 text-amber-300 px-2 py-0.5 rounded text-[10px]">
            {currentStageData.phase}
          </span>
        </div>
      </div>

      {/* Main Interactive Stage Canvas */}
      <div className="relative z-10 my-4 flex-1">
        <AnimatePresence mode="wait">
          {/* ========================================================================= */}
          {/* STAGE 0: CHECK-IN */}
          {/* ========================================================================= */}
          {activeStage === 0 && (
            <motion.div
              key="stage-checkin"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center min-h-[270px]"
            >
              {/* Left: Front Desk / Guest KYC Card */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <UserCheck className="w-4 h-4 text-indigo-400" />
                    Express Digital Check-In
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">
                    KYC VERIFIED
                  </span>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>GUEST NAME:</span>
                    <span className="text-white font-bold">Vikram Mehta</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>GOVT ID / PASSPORT:</span>
                    <span className="text-indigo-300">XXXX-XXXX-8912 (Aadhaar OCR)</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>ALLOCATED ROOM:</span>
                    <span className="text-amber-400 font-bold">Room #402 (Deluxe City View)</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>CHECK-IN TIMESTAMP:</span>
                    <span className="text-emerald-400">Today, 02:15 PM (45s elapsed)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-indigo-300 bg-indigo-950/40 border border-indigo-500/20 p-2 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Advance deposit ₹5,000 pre-authorized via integrated PG.</span>
                </div>
              </div>

              {/* Right: Smart Mobile Key Issuance */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Key className="w-4 h-4 text-amber-400" />
                    Digital Key & Access Pass
                  </span>
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-mono">
                    NFC / RFID ACTIVE
                  </span>
                </div>

                <div className="p-4 bg-gradient-to-br from-slate-900 to-indigo-950 rounded-xl border border-indigo-500/30 text-center space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-indigo-600/30 border border-indigo-400 flex items-center justify-center text-indigo-300 animate-pulse">
                    <Key className="w-6 h-6" />
                  </div>
                  <div className="text-sm font-bold text-white">Smart Room Pass Issued</div>
                  <p className="text-[11px] text-slate-400">
                    Sent instantly to guest WhatsApp with 1-tap door unlock & contactless elevator access.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* STAGE 1: IN-STAY DINING & KDS */}
          {/* ========================================================================= */}
          {activeStage === 1 && (
            <motion.div
              key="stage-dining"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center min-h-[270px]"
            >
              {/* Left: Guest Smartphone Screen & Order Simulator */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-xl p-4 min-h-[250px] flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                    Bedside QR Dining Scan
                  </span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">
                    SUITE #402
                  </span>
                </div>

                <div className="my-2 p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5 font-mono text-xs">
                  <div className="text-[11px] font-bold text-white flex justify-between font-sans">
                    <span>Order #HOTEL-8891 (In-Room Dining)</span>
                    <span className="text-amber-400 font-mono">₹1,450.00</span>
                  </div>
                  <div className="flex justify-between text-slate-300 text-[11px]">
                    <span>1x Artisan Grilled Salmon</span>
                    <span className="text-slate-500">Kitchen KOT #1</span>
                  </div>
                  <div className="flex justify-between text-slate-300 text-[11px]">
                    <span>1x Truffle Infused Pasta</span>
                    <span className="text-slate-500">Kitchen KOT #2</span>
                  </div>
                </div>

                <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Zero paper cash; auto-charged to Room 402 master folio.
                </div>
              </div>

              {/* Right: Kitchen Display System (KDS) */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-xl p-4 min-h-[250px] flex flex-col justify-between">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <ChefHat className="w-3.5 h-3.5 text-amber-400" />
                    Kitchen Display System (KDS)
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                    kitchenStatus === 'READY' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {kitchenStatus} (EST 14 MINS)
                  </span>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 font-mono text-xs">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">ASSIGNED CHEF:</span>
                    <span className="text-white font-bold">Executive Chef Marcus</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">PREPARATION NOTE:</span>
                    <span className="text-cyan-300">Gluten-free, extra rosemary</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">BUTLER RUNNER:</span>
                    <span className="text-emerald-400 font-bold">Amit (4th Floor)</span>
                  </div>
                </div>

                <div className="text-[10px] text-slate-400 flex justify-between items-center font-mono">
                  <span>Recipe inventory deducted in central store</span>
                  <span className="text-amber-400">Auto-Synced</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* STAGE 2: HOUSEKEEPING & FOLIO */}
          {/* ========================================================================= */}
          {activeStage === 2 && (
            <motion.div
              key="stage-folio"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center min-h-[270px]"
            >
              {/* Left: Housekeeping Telemetry */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <BedDouble className="w-4 h-4 text-purple-400" />
                    Housekeeping & Minibar Telemetry
                  </span>
                  <span className="text-[10px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono">
                    LIVE ROOM STATUS
                  </span>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>ROOM STATE:</span>
                    <span className="text-emerald-400 font-bold">Occupied / Do Not Disturb OFF</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>MINIBAR SENSOR:</span>
                    <span className="text-white">2x Sparkling Water Consumed</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>LAUNDRY SERVICE:</span>
                    <span className="text-white">Express Dry Clean (1 Suit)</span>
                  </div>
                </div>

                <div className="text-[10px] text-purple-300 bg-purple-950/40 border border-purple-500/20 p-2 rounded-lg flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>Real-time billing without manual end-of-day chit collation.</span>
                </div>
              </div>

              {/* Right: Master Folio Aggregator */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Receipt className="w-4 h-4 text-amber-400" />
                    Unified GST Master Folio Ledger
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">
                    AUTO-BALANCED
                  </span>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5 text-xs font-mono">
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Room Tariff (2 Nights @ ₹4,500)</span>
                    <span className="text-white">₹9,000.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>In-Room QR Dining (Order #8891)</span>
                    <span className="text-white">₹1,450.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[11px]">
                    <span>Smart Minibar & Laundry</span>
                    <span className="text-white">₹950.00</span>
                  </div>
                  <div className="pt-1.5 border-t border-slate-800 flex justify-between font-bold text-amber-400">
                    <span>Total Folio (Inc. GST)</span>
                    <span>₹13,452.00</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* STAGE 3: CHECK-OUT */}
          {/* ========================================================================= */}
          {activeStage === 3 && (
            <motion.div
              key="stage-checkout"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center min-h-[270px]"
            >
              {/* Left: Express Digital Check-Out & Settlement */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                    Express Mobile Check-Out
                  </span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold">
                    PAID & SETTLED
                  </span>
                </div>

                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>PAYMENT METHOD:</span>
                    <span className="text-white font-bold">UPI / Corporate Corporate Card</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>TRANSACTION REF:</span>
                    <span className="text-indigo-300">TXN-HERP-99201</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>NET CHARGE SETTLED:</span>
                    <span className="text-emerald-400 font-bold">₹13,452.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>KEY PASS DEACTIVATED:</span>
                    <span className="text-amber-400 font-bold">Room #402 Released</span>
                  </div>
                </div>

                <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Automated dispatch of GST e-Invoice to guest WhatsApp and Email.
                </div>
              </div>

              {/* Right: Instant Room Turnover & Housekeeping Ping */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Instant Housekeeping Dispatch
                  </span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">
                    READY FOR TURNOVER
                  </span>
                </div>

                <div className="p-4 bg-gradient-to-br from-slate-900 to-emerald-950 rounded-xl border border-emerald-500/30 space-y-2 text-center">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-white">Room #402 Queued for Cleaning</div>
                  <p className="text-[11px] text-slate-300">
                    Housekeeping tablet alerted immediately. Room status resets to <strong className="text-amber-300">Cleaning</strong> to prepare for 03:00 PM check-in.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Step Caption & Navigation */}
      <div className="relative z-10 bg-slate-900/90 border border-slate-800 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center font-mono text-xs font-bold shrink-0">
            0{activeStage + 1}
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-2">
              <span>{currentStageData.title}</span>
              <span className="text-[10px] text-amber-400 font-mono bg-amber-950/80 px-1.5 py-0.5 rounded">
                {currentStageData.badge}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
              {currentStageData.subtitle}
            </div>
          </div>
        </div>

        {/* Step Selector Pills */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto justify-end">
          {stages.map((stg, idx) => (
            <button
              key={stg.id}
              onClick={() => {
                setActiveStage(idx);
                onStepChange?.(idx);
              }}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                activeStage === idx
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {stg.phase}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HotelErpAnimatedClip;
