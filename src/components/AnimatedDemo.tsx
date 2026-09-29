import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../data/products';
import { useNavigation } from '../context/NavigationContext';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  CalendarCheck,
  ScanLine,
  Truck,
  Box,
  QrCode,
  ShieldCheck,
  Zap,
  Navigation,
  FileCheck,
  Radio,
  Camera,
  DoorOpen,
  Users,
  Utensils,
  ChefHat,
  Boxes,
  ArrowRightLeft,
  Activity,
  Gauge,
  Key,
  BedDouble,
  CreditCard,
  UserCheck,
  Receipt
} from 'lucide-react';

interface AnimatedDemoProps {
  product: Product;
  className?: string;
}

interface StepDetail {
  id: number;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  highlightColor: string;
}

export function AnimatedDemo({ product, className = '' }: AnimatedDemoProps) {
  const { openDemoModal } = useNavigation();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [stepProgress, setStepProgress] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  // Generate domain-specific steps based on product slug
  const getProductDemoSteps = (): StepDetail[] => {
    switch (product.slug) {
      case 'wms':
        return [
          {
            id: 0,
            title: 'Automated Inbound Ingest & Barcode Scan',
            shortTitle: '1. Inbound Ingest',
            tagline: 'High-speed optical laser scan decodes SKU, batch, and dimensions in 200ms.',
            description: 'Pallet arrives at loading dock. Overhead optical barcode scanners capture manufacturer barcodes, dimensional weight, and lot expiry data without manual paperwork.',
            metrics: [
              { label: 'Scan Latency', value: '0.18s' },
              { label: 'Ingest Speed', value: '1,480 SKUs/hr' },
              { label: 'Validation', value: '100% ASN Match' }
            ],
            highlightColor: 'from-blue-600 to-indigo-600'
          },
          {
            id: 1,
            title: 'Dynamic AI Bin Slotting & Putaway',
            shortTitle: '2. Smart Slotting',
            tagline: 'Algorithmic bin allocation calculates optimal rack coordinate by velocity.',
            description: 'System assigns the closest high-velocity rack bin (Zone A / Rack 04). Forklift operator tablet updates instantly with the optimal travel path, cutting empty transit distance by 34%.',
            metrics: [
              { label: 'Space Utilization', value: '+38%' },
              { label: 'Putaway Time', value: '1.4 mins' },
              { label: 'Travel Reduction', value: '-34%' }
            ],
            highlightColor: 'from-indigo-600 to-violet-600'
          },
          {
            id: 2,
            title: 'Wave & Batch Picking with Route Guidance',
            shortTitle: '3. Wave Picking',
            tagline: 'Consolidated order batches picked with minimal floor traversal routes.',
            description: 'Warehouse associates receive color-coded pick tasks on handheld scanners. Pick-to-light and barcode verification prevent picking errors before goods reach packing stations.',
            metrics: [
              { label: 'Pick Accuracy', value: '99.98%' },
              { label: 'Picking Velocity', value: '3.4x faster' },
              { label: 'Zero Floor Errors', value: 'ISO Certified' }
            ],
            highlightColor: 'from-purple-600 to-indigo-600'
          },
          {
            id: 3,
            title: 'Weight Check, e-AWB & Dispatch Manifest',
            shortTitle: '4. Dispatch Manifest',
            tagline: 'Automatic courier API synchronization and instant electronic dispatch.',
            description: 'Automated packing scale validates exact package weight. Shipping labels and digital e-Way bills generate instantly with direct courier API dispatch confirmation.',
            metrics: [
              { label: 'Label Gen Speed', value: '0.4s' },
              { label: 'Courier Integration', value: 'Real-time API' },
              { label: 'Dispatch Lead Time', value: '< 10 mins' }
            ],
            highlightColor: 'from-emerald-600 to-teal-600'
          }
        ];
      case 'tms':
        return [
          {
            id: 0,
            title: 'AI Multi-Stop Route Optimization',
            shortTitle: '1. Route Optimizer',
            tagline: 'Calculates optimal delivery sequence avoiding tolls and high-traffic bottlenecks.',
            description: 'Trip planner consolidates multi-order consignments, analyzing live traffic matrices and toll costs to generate fuel-optimal routes across delivery corridors.',
            metrics: [
              { label: 'Fuel Savings', value: '18.4%' },
              { label: 'Route Computation', value: '1.2s' },
              { label: 'Drop Efficiency', value: '+42%' }
            ],
            highlightColor: 'from-blue-600 to-cyan-600'
          },
          {
            id: 1,
            title: 'Live GPS Telematics & Geo-fence Monitoring',
            shortTitle: '2. Live Telematics',
            tagline: 'Continuous speed, fuel sensor, engine diagnostics, and cold-chain temperature telemetry.',
            description: 'Live sensor telemetry streams every 5 seconds. Automated geo-fence alerts trigger when trucks arrive at customer hubs, eliminating detention disputes.',
            metrics: [
              { label: 'Ping Frequency', value: '5 seconds' },
              { label: 'Cold Chain', value: '-18°C Monitored' },
              { label: 'Geo-fence Auto Alert', value: 'Instant' }
            ],
            highlightColor: 'from-cyan-600 to-blue-600'
          },
          {
            id: 2,
            title: 'Contactless Mobile ePOD Signoff',
            shortTitle: '3. Mobile ePOD',
            tagline: 'Driver collects customer digital signature, receiver OTP, and tamper-proof photo.',
            description: 'Upon arrival, the driver captures receiver verification on the mobile driver app. Digital timestamp and GPS coordinates seal the delivery proof irreversibly.',
            metrics: [
              { label: 'Turnaround Time', value: '< 60 secs' },
              { label: 'Paperless Proof', value: '100% Digital' },
              { label: 'Dispute Reduction', value: '-95%' }
            ],
            highlightColor: 'from-emerald-600 to-cyan-600'
          },
          {
            id: 3,
            title: 'Instant Trip Reconciliation & ERP Invoice Payout',
            shortTitle: '4. Instant Payout',
            tagline: 'Auto-reconciles toll slips, driver allowances, and triggers customer invoice.',
            description: 'The moment ePOD is submitted, trip financial ledgers post directly to ERP (SAP / Oracle / Tally), allowing instant freight billing and transporter settlement.',
            metrics: [
              { label: 'Billing Cycle', value: 'Same-day' },
              { label: 'Reconciliation Error', value: '0.0%' },
              { label: 'Audit Compliance', value: '100%' }
            ],
            highlightColor: 'from-indigo-600 to-purple-600'
          }
        ];
      case 'gate-yard-management':
        return [
          {
            id: 0,
            title: 'ANPR Camera License Plate & Driver KYC Check',
            shortTitle: '1. ANPR OCR Scan',
            tagline: 'Automated OCR captures truck registration numbers and verifies driver Aadhaar.',
            description: 'As vehicle approaches security gate, ANPR cameras capture plate digits within 400ms, cross-referencing pre-booked inward PO appointments.',
            metrics: [
              { label: 'Plate Accuracy', value: '99.8%' },
              { label: 'Check Time', value: '2.1s' },
              { label: 'Security Level', value: 'Enterprise' }
            ],
            highlightColor: 'from-emerald-600 to-teal-600'
          },
          {
            id: 1,
            title: 'Automated Boom Barrier Clearance',
            shortTitle: '2. Gate Clearance',
            tagline: 'Paperless digital gate pass issued with QR barcode access.',
            description: 'Boom barrier lifts autonomously without manual log registers. Driver receives digital SMS gate pass detailing allotted dock bay coordinate.',
            metrics: [
              { label: 'Gate Clearance', value: 'Zero Paper' },
              { label: 'Gate Line-Up', value: '-65%' },
              { label: 'Automated Log', value: 'Real-Time' }
            ],
            highlightColor: 'from-teal-600 to-emerald-600'
          },
          {
            id: 2,
            title: 'Dynamic Dock Bay Allocation & Live Queue',
            shortTitle: '3. Dock Scheduling',
            tagline: 'Live bay telemetry directs driver straight to available unloading dock.',
            description: 'Yard scheduler balances 6+ loading docks dynamically. Unloading crews receive advance notification with pallet count and forklift assignments.',
            metrics: [
              { label: 'Dock Utilization', value: '94%' },
              { label: 'Avg Turnaround', value: '24 mins' },
              { label: 'Detention Fees', value: '$0.00' }
            ],
            highlightColor: 'from-indigo-600 to-blue-600'
          },
          {
            id: 3,
            title: 'Weighbridge Tare-Weight Audit & Outward Gate Pass',
            shortTitle: '4. Outward Audit',
            tagline: 'Gross/Tare weight reconciliation validates exact cargo release.',
            description: 'Vehicle passes over integrated weighbridge. System confirms gross-tare discrepancy is zero, stamps digital outward pass and clears departure.',
            metrics: [
              { label: 'Weight Leakage', value: '0.00%' },
              { label: 'Outward Clearance', value: '3.2s' },
              { label: 'Audit Trail', value: '100% Logged' }
            ],
            highlightColor: 'from-violet-600 to-indigo-600'
          }
        ];
      case 'hotel-erp':
        return [
          {
            id: 0,
            title: 'Express Contactless Guest Check-In & Digital KYC',
            shortTitle: '1. Express Check-In',
            tagline: 'ID verification, Aadhaar/Passport OCR, room allocation, and digital smart keycard issuance.',
            description: 'Guest completes pre-arrival mobile check-in or arrives at reception. Front desk verifies KYC credentials in seconds, assigns Deluxe Suite #402, and issues an NFC/RFID mobile room key.',
            metrics: [
              { label: 'Check-In Speed', value: '45 Seconds' },
              { label: 'KYC Accuracy', value: '100% OCR' },
              { label: 'Digital Keycard', value: 'Instant Mobile' }
            ],
            highlightColor: 'from-blue-600 to-indigo-600'
          },
          {
            id: 1,
            title: 'Contactless QR Room Dining & Kitchen KDS Sync',
            shortTitle: '2. QR Dining & KDS',
            tagline: 'Instant digital table/room menu ordering with live Kitchen Display System dispatch.',
            description: 'Guest scans bedside acrylic QR stand to order gourmet dishes. Order routes straight to the Head Chef KDS station with active countdown timers and automatic ingredient depletion.',
            metrics: [
              { label: 'Order to Kitchen', value: '0.2s' },
              { label: 'F&B Revenue Lift', value: '+32%' },
              { label: 'Kitchen Prep Time', value: '-22%' }
            ],
            highlightColor: 'from-amber-600 to-orange-600'
          },
          {
            id: 2,
            title: 'Housekeeping Telemetry & Real-Time Folio Sync',
            shortTitle: '3. Folio Auto-Sync',
            tagline: 'All room tariffs, dining chits, minibar, and laundry auto-post to a unified master folio.',
            description: 'Eliminates lost paper chits and billing disputes. Room charges, room service items, and minibar telemetry aggregate in real time under a single GST-compliant guest folio ledger.',
            metrics: [
              { label: 'Folio Sync', value: 'Real-Time' },
              { label: 'Billing Disputes', value: '0.0%' },
              { label: 'Paperless PMS', value: '100%' }
            ],
            highlightColor: 'from-purple-600 to-indigo-600'
          },
          {
            id: 3,
            title: '1-Click Express Check-Out & GST e-Invoice',
            shortTitle: '4. Express Check-Out',
            tagline: 'Instant settlement via UPI/Card, key deactivation, and automated room turnover alert.',
            description: 'Guest reviews consolidated bill on their phone, completes 1-click payment, and receives a digital GST e-invoice via WhatsApp. System automatically alerts housekeeping for quick room turnover.',
            metrics: [
              { label: 'Check-Out Time', value: '< 30s' },
              { label: 'Room Turnover', value: '25 mins' },
              { label: 'GST e-Invoice', value: 'Instant WhatsApp' }
            ],
            highlightColor: 'from-emerald-600 to-teal-600'
          }
        ];
      default: // vms, inventory-management, etc.
        return [
          {
            id: 0,
            title: 'Multi-Node Stock Telemetry & Level Ingestion',
            shortTitle: '1. Stock Telemetry',
            tagline: 'Aggregates stock levels across mother hubs, regional DCs, and retail stores.',
            description: 'Real-time telemetry continuously calculates buffer stock across all operational nodes, identifying surplus stock and low-inventory locations.',
            metrics: [
              { label: 'Network Visibility', value: '100% Nodes' },
              { label: 'Sync Latency', value: '< 1s' },
              { label: 'Inventory Accuracy', value: '99.9%' }
            ],
            highlightColor: 'from-cyan-600 to-blue-600'
          },
          {
            id: 1,
            title: 'Automated Safety Buffer Threshold Trigger',
            shortTitle: '2. Safety Buffer',
            tagline: 'Detects fast-selling SKU dips below 15-day safety buffer dynamically.',
            description: 'AI velocity algorithms evaluate 30-day sales trends and lead times, raising automated replenishment flags before stock-outs impact customers.',
            metrics: [
              { label: 'Stockout Risk', value: '-85%' },
              { label: 'Buffer Precision', value: '99.4%' },
              { label: 'Working Capital', value: '+22% Free' }
            ],
            highlightColor: 'from-blue-600 to-indigo-600'
          },
          {
            id: 2,
            title: 'Inter-Warehouse Stock Transfer Balancing',
            shortTitle: '3. Inter-Hub Transfer',
            tagline: 'Transfers surplus inventory from nearby facilities before buying new stock.',
            description: 'Generates automated inter-store transfer manifests, routing available surplus from low-demand regional depots to high-demand flagship stores.',
            metrics: [
              { label: 'Transfer Lead Time', value: '-40%' },
              { label: 'Dead Stock Cut', value: '-60%' },
              { label: 'Rebalance Speed', value: 'Instant' }
            ],
            highlightColor: 'from-purple-600 to-indigo-600'
          },
          {
            id: 3,
            title: 'Autonomous Supplier Purchase Requisition',
            shortTitle: '4. Auto PO Requisition',
            tagline: 'Creates draft POs mapped to contracted vendor rate cards with 3-way match.',
            description: 'When rebalance is insufficient, system auto-drafts Purchase Orders mapped to approved suppliers, eliminating procurement delay and pricing errors.',
            metrics: [
              { label: 'Procurement Speed', value: '5x faster' },
              { label: 'Rate Variance', value: '0.0%' },
              { label: 'ERP Approval', value: '1-Click' }
            ],
            highlightColor: 'from-emerald-600 to-teal-600'
          }
        ];
    }
  };

  const steps = getProductDemoSteps();
  const currentStepData = steps[activeStep] || steps[0];

  // Auto-progression loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setStepProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((curr) => (curr + 1) % steps.length);
          return 0;
        }
        return prev + 1.5 * playbackSpeed;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, steps.length]);

  const handleStepClick = (stepIndex: number) => {
    setActiveStep(stepIndex);
    setStepProgress(0);
  };

  return (
    <div className={`w-full bg-[#071326] text-white rounded-3xl border border-slate-800 shadow-2xl overflow-hidden relative ${className}`}>
      {/* Top Multi-Color Brand Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 wipro-multi-gradient" />

      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#053674]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#389BB5]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Banner */}
      <div className="bg-[#031b3b]/90 border-b border-slate-800 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-4 relative z-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A4CE4F] animate-ping" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A4CE4F]">
              Autonomous Operational Lifecycle
            </span>
            <span className="text-[10px] bg-[#053674] border border-[#389BB5]/40 text-[#389BB5] font-mono px-2 py-0.5 rounded">
              {product.shortCode} ENGINE
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white">
            How {product.name} Works End-to-End
          </h3>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="px-3.5 py-1.5 rounded-xl bg-[#053674] hover:bg-[#0066CC] text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-[#053674]/30 cursor-pointer border border-[#389BB5]/40"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-white" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-[#FFC412] text-[#FFC412] ml-0.5" />
                <span>Play</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              setActiveStep(0);
              setStepProgress(0);
              setIsPlaying(true);
            }}
            className="p-2 rounded-xl bg-[#071326] hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
            title="Restart Lifecycle"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Speed Selector */}
          <div className="bg-[#071326] border border-slate-700 rounded-xl p-0.5 flex items-center">
            {[1, 1.5, 2].map((spd) => (
              <button
                key={spd}
                onClick={() => setPlaybackSpeed(spd)}
                className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                  playbackSpeed === spd ? 'bg-[#053674] text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Step Navigation Tabs Bar */}
      <div className="bg-slate-950/60 border-b border-slate-800/80 p-2 sm:p-3 overflow-x-auto scrollbar-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => handleStepClick(idx)}
                className={`p-3 rounded-2xl text-left transition-all relative overflow-hidden cursor-pointer border ${
                  isActive
                    ? 'bg-slate-800/90 border-indigo-500/80 shadow-lg shadow-indigo-500/10'
                    : 'bg-slate-950/60 border-slate-800/60 hover:bg-slate-900 text-slate-400'
                }`}
              >
                {/* Active progress bar indicator on tab */}
                {isActive && (
                  <div 
                    style={{ width: `${stepProgress}%` }} 
                    className="absolute top-0 left-0 bottom-0 bg-indigo-600/15 pointer-events-none transition-all"
                  />
                )}

                <div className="flex items-center justify-between mb-1 relative z-10">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                  }`}>
                    STEP 0{idx + 1}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />}
                </div>

                <div className={`text-xs font-bold truncate relative z-10 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {step.shortTitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Animated Stage Viewport */}
      <div className="p-4 sm:p-8 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Stage {activeStep + 1} of 4 • Active Execution</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                {currentStepData.title}
              </h4>

              <p className="text-xs sm:text-sm font-semibold text-indigo-300">
                {currentStepData.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                {currentStepData.description}
              </p>

              {/* Real-world Impact Metrics */}
              <div className="grid grid-cols-3 gap-2.5 pt-3">
                {currentStepData.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                    <div className="text-base font-extrabold text-emerald-400 font-mono">{m.value}</div>
                    <div className="text-[10px] text-slate-400 font-medium mt-0.5 truncate">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => openDemoModal(`${product.name} - Stage ${activeStep + 1}`)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Book Custom Walkthrough</span>
                </button>
              </div>
            </div>

            {/* Right High-Fidelity Animated Visual Simulation */}
            <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-slate-800 p-5 relative overflow-hidden min-h-[300px] flex flex-col justify-between shadow-inner">
              {/* Top Sensor HUD Bar */}
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-slate-800 pb-2.5">
                <span className="flex items-center gap-1.5 text-white font-bold">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  REAL-TIME PIPELINE VISUALIZER
                </span>
                <span className="text-emerald-400 font-bold">STATUS: RUNNING (60 FPS)</span>
              </div>

              {/* Dynamic Animated Core Graphic */}
              <div className="my-6 relative py-4 flex items-center justify-center">
                {/* Central Visual Hub based on active step */}
                <div className="w-full max-w-sm bg-slate-900/90 rounded-2xl border border-slate-700/80 p-5 text-center relative overflow-hidden">
                  {/* Glowing perimeter stroke */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                    className="absolute -inset-20 bg-[conic-gradient(from_0deg,#6366f1,#38bdf8,#10b981,#6366f1)] opacity-15 blur-xl pointer-events-none"
                  />

                  <div className="relative z-10 space-y-3">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-950 border border-indigo-500/50 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/20">
                      {product.slug === 'hotel-erp' ? (
                        activeStep === 0 ? <UserCheck className="w-7 h-7 text-indigo-400 animate-pulse" /> :
                        activeStep === 1 ? <Utensils className="w-7 h-7 text-amber-400" /> :
                        activeStep === 2 ? <Receipt className="w-7 h-7 text-purple-400" /> :
                        <CreditCard className="w-7 h-7 text-emerald-400" />
                      ) : (
                        activeStep === 0 ? <ScanLine className="w-7 h-7 text-indigo-400 animate-pulse" /> :
                        activeStep === 1 ? <Layers className="w-7 h-7 text-cyan-400" /> :
                        activeStep === 2 ? <Box className="w-7 h-7 text-purple-400" /> :
                        <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                      )}
                    </div>

                    <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      {currentStepData.shortTitle} Engine
                    </div>

                    <div className="p-2.5 bg-slate-950/90 rounded-xl border border-slate-800 text-[11px] font-mono text-left space-y-1">
                      <div className="flex justify-between text-slate-400">
                        <span>PIPELINE TASK:</span>
                        <span className="text-emerald-400 font-bold">AUTONOMOUS</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>DATA PACKET:</span>
                        <span className="text-white">ENCRYPTED TLS 1.3</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>ERP LEDGER:</span>
                        <span className="text-indigo-400 font-bold">SYNCHRONIZED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Scrubber Timeline */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800">
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    style={{ width: `${stepProgress}%` }} 
                    className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full transition-all"
                  />
                </div>
                <div className="flex justify-between items-center text-[9px] font-mono text-slate-500">
                  <span>Step {activeStep + 1} Progression: {Math.floor(stepProgress)}%</span>
                  <span>Loop Time: 8.0s / step</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
