import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigation } from '../../context/NavigationContext';
import { PRODUCTS } from '../../data/products';
import { WmsAnimatedClip } from './WmsAnimatedClip';
import { TmsAnimatedClip } from './TmsAnimatedClip';
import { YardAnimatedClip } from './YardAnimatedClip';
import { VmsAnimatedClip } from './VmsAnimatedClip';
import { HotelErpAnimatedClip } from './HotelErpAnimatedClip';
import { InventoryAnimatedClip } from './InventoryAnimatedClip';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  CalendarCheck, 
  ChevronRight, 
  Warehouse, 
  Truck, 
  ShieldCheck, 
  Users, 
  Hotel, 
  Boxes,
  Film,
  FastForward,
  Maximize2
} from 'lucide-react';

interface ProductAnimatedClipPlayerProps {
  initialProductId?: string;
  showProductTabs?: boolean;
  className?: string;
}

export function ProductAnimatedClipPlayer({
  initialProductId = 'wms',
  showProductTabs = true,
  className = ''
}: ProductAnimatedClipPlayerProps) {
  const { openDemoModal } = useNavigation();
  const [selectedProductId, setSelectedProductId] = useState<string>(initialProductId);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Sync initialProductId if prop changes
  useEffect(() => {
    if (initialProductId) {
      setSelectedProductId(initialProductId);
      setCurrentStep(0);
      setProgressPercent(0);
    }
  }, [initialProductId]);

  // Automated Timeline Loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgressPercent((prev) => {
        if (prev >= 100) {
          setCurrentStep((s) => (s + 1) % 4);
          return 0;
        }
        return prev + 1.25 * playbackSpeed;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const currentProduct = PRODUCTS.find((p) => p.slug === selectedProductId) || PRODUCTS[0];

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Warehouse': return <Warehouse className="w-4 h-4 text-blue-400" />;
      case 'Truck': return <Truck className="w-4 h-4 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-emerald-400" />;
      case 'Users': return <Users className="w-4 h-4 text-purple-400" />;
      case 'Hotel': return <Hotel className="w-4 h-4 text-amber-400" />;
      case 'Boxes': return <Boxes className="w-4 h-4 text-teal-400" />;
      default: return <Boxes className="w-4 h-4 text-indigo-400" />;
    }
  };

  const handleStepJump = (stepIndex: number) => {
    setCurrentStep(stepIndex);
    setProgressPercent(stepIndex * 25);
  };

  const renderClipContent = () => {
    switch (selectedProductId) {
      case 'wms':
        return (
          <WmsAnimatedClip 
            isPlaying={isPlaying} 
            playbackSpeed={playbackSpeed} 
            currentStep={currentStep}
            onStepChange={handleStepJump}
          />
        );
      case 'tms':
        return (
          <TmsAnimatedClip 
            isPlaying={isPlaying} 
            playbackSpeed={playbackSpeed} 
            currentStep={currentStep}
            onStepChange={handleStepJump}
          />
        );
      case 'gate-yard-management':
        return (
          <YardAnimatedClip 
            isPlaying={isPlaying} 
            playbackSpeed={playbackSpeed} 
            currentStep={currentStep}
            onStepChange={handleStepJump}
          />
        );
      case 'vendor-management':
        return (
          <VmsAnimatedClip 
            isPlaying={isPlaying} 
            playbackSpeed={playbackSpeed} 
            currentStep={currentStep}
            onStepChange={handleStepJump}
          />
        );
      case 'hotel-erp':
        return (
          <HotelErpAnimatedClip 
            isPlaying={isPlaying} 
            playbackSpeed={playbackSpeed} 
            currentStep={currentStep}
            onStepChange={handleStepJump}
          />
        );
      case 'inventory-management':
        return (
          <InventoryAnimatedClip 
            isPlaying={isPlaying} 
            playbackSpeed={playbackSpeed} 
            currentStep={currentStep}
            onStepChange={handleStepJump}
          />
        );
      default:
        return (
          <WmsAnimatedClip 
            isPlaying={isPlaying} 
            playbackSpeed={playbackSpeed} 
            currentStep={currentStep}
            onStepChange={handleStepJump}
          />
        );
    }
  };

  return (
    <div className={`w-full rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden ${className}`}>
      {/* Product Selector Ribbon (if enabled) */}
      {showProductTabs && (
        <div className="bg-slate-950/80 border-b border-slate-800 p-2 sm:p-3 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-1.5 min-w-max">
            <span className="text-slate-500 text-[11px] font-bold uppercase tracking-wider px-2 flex items-center gap-1">
              <Film className="w-3.5 h-3.5 text-indigo-400" />
              Product Clip:
            </span>
            {PRODUCTS.map((prod) => {
              const active = prod.slug === selectedProductId;
              return (
                <button
                  key={prod.id}
                  onClick={() => {
                    setSelectedProductId(prod.slug);
                    setCurrentStep(0);
                    setProgressPercent(0);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    active
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {getProductIcon(prod.iconName)}
                  <span>{prod.name.replace(' System', '')}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Animated Stage Viewport */}
      <div className="relative aspect-video sm:min-h-[480px] w-full bg-slate-950 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProductId}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full flex-1"
          >
            {renderClipContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Video Scrubber & Playback Controls Bar */}
      <div className="bg-slate-950/95 border-t border-slate-800/90 p-3 sm:p-4 space-y-3">
        {/* Timeline Scrubber Bar */}
        <div className="space-y-1">
          <div 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newPct = (clickX / rect.width) * 100;
              setProgressPercent(newPct);
              setCurrentStep(Math.min(3, Math.floor((newPct / 100) * 4)));
            }}
            className="w-full h-2 bg-slate-800 rounded-full overflow-hidden cursor-pointer relative group"
          >
            {/* Progress Fill */}
            <div 
              style={{ width: `${progressPercent}%` }} 
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full relative"
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform" />
            </div>

            {/* Chapter Step Ticks */}
            {[25, 50, 75].map((tick) => (
              <div 
                key={tick} 
                style={{ left: `${tick}%` }} 
                className="absolute top-0 bottom-0 w-0.5 bg-slate-900 pointer-events-none" 
              />
            ))}
          </div>

          <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
            <span>00:{Math.floor(progressPercent * 0.3).toString().padStart(2, '0')} / 00:30 (Live Workflow Simulation)</span>
            <span>Speed: {playbackSpeed}x • 60 FPS Engine</span>
          </div>
        </div>

        {/* Player Controls Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2">
            {/* Play/Pause */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/30 cursor-pointer flex items-center justify-center"
              aria-label={isPlaying ? 'Pause Clip' : 'Play Clip'}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
            </button>

            {/* Restart */}
            <button
              onClick={() => {
                setProgressPercent(0);
                setCurrentStep(0);
                setIsPlaying(true);
              }}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Restart Simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {/* Playback Speed Toggles */}
            <div className="bg-slate-900 rounded-xl p-0.5 border border-slate-800 flex items-center">
              {[1, 1.5, 2].map((speed) => (
                <button
                  key={speed}
                  onClick={() => setPlaybackSpeed(speed)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                    playbackSpeed === speed
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-xs text-slate-400">
              Want a customized walkthrough of <strong className="text-white">{currentProduct.name}</strong>?
            </span>
            <button
              onClick={() => openDemoModal(currentProduct.name)}
              className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-md flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-indigo-600" />
              <span>Book Demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
