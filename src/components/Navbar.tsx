import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { useNavigation, PageRoute } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';
import { PRODUCTS } from '../data/products';
import { WiproBrandMark, WiproDotCluster } from './WiproBrandMark';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Warehouse, 
  Truck, 
  ShieldCheck, 
  Users, 
  Hotel, 
  Boxes, 
  ArrowRight, 
  CalendarCheck, 
  Sun, 
  Moon,
  Sparkles
} from 'lucide-react';

export function Navbar() {
  const { currentPage, navigate, openDemoModal } = useNavigation();
  const { theme, isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState<boolean>(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Warehouse': return <Warehouse className="w-4 h-4 text-[#053674] dark:text-[#389BB5]" />;
      case 'Truck': return <Truck className="w-4 h-4 text-[#389BB5] dark:text-[#389BB5]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-[#A4CE4F]" />;
      case 'Users': return <Users className="w-4 h-4 text-[#B4156E]" />;
      case 'Hotel': return <Hotel className="w-4 h-4 text-[#FFC412]" />;
      case 'Boxes': return <Boxes className="w-4 h-4 text-[#301157] dark:text-[#A4CE4F]" />;
      default: return <Boxes className="w-4 h-4 text-[#053674] dark:text-[#389BB5]" />;
    }
  };

  const handleNavClick = (page: PageRoute) => {
    navigate(page);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  };

  const handleProductClick = (slug: string) => {
    navigate(slug as PageRoute);
    setProductsDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const isProductPage = ['wms', 'tms', 'gate-yard-management', 'vendor-management', 'hotel-erp', 'inventory-management'].includes(currentPage);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isDark
        ? isScrolled
          ? 'bg-[#071326]/95 backdrop-blur-xl border-b border-slate-800 shadow-lg shadow-black/40 py-3'
          : 'bg-[#071326]/90 backdrop-blur-lg border-b border-slate-800/80 py-4'
        : isScrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm shadow-[#053674]/5 py-3'
          : 'bg-white/90 backdrop-blur-lg border-b border-slate-200/60 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Wipro-inspired Connecting Dots Mark */}
          <button 
            onClick={() => handleNavClick('home')}
            className="focus-ring flex items-center gap-3 group text-left cursor-pointer rounded-xl"
          >
            <motion.div 
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`relative p-1 rounded-xl shadow-sm border flex items-center justify-center transition-colors ${
                isDark 
                  ? 'bg-[#0b1c36] border-slate-700/80' 
                  : 'bg-white border-slate-100'
              }`}
            >
              <WiproBrandMark size="md" animate={isScrolled} />
            </motion.div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className={`text-xl font-extrabold tracking-tight transition-colors ${
                  isDark ? 'text-white' : 'text-[#071326]'
                }`}>
                  Codefest <span className={isDark ? 'text-[#389BB5]' : 'text-[#053674]'}>Studio</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400">
                  Ambitions Realized
                </span>
                <span className="w-1 h-1 rounded-full bg-[#B4156E]" />
                <span className={`text-[9px] uppercase tracking-wider font-semibold ${
                  isDark ? 'text-[#389BB5]' : 'text-[#053674]'
                }`}>
                  Enterprise Tech
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium transition-colors ${
            isDark ? 'text-slate-300' : 'text-slate-700'
          }`}>
            <button
              onClick={() => handleNavClick('home')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer text-sm font-semibold ${
                currentPage === 'home' 
                  ? isDark
                    ? 'text-white bg-[#0b1c36] font-bold border-b-2 border-[#389BB5]'
                    : 'text-[#053674] bg-slate-100 font-bold border-b-2 border-[#053674]'
                  : isDark
                    ? 'hover:text-white hover:bg-[#0b1c36]/60'
                    : 'hover:text-[#053674] hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer text-sm font-semibold ${
                  isProductPage 
                    ? isDark
                      ? 'text-white bg-[#0b1c36] font-bold border-b-2 border-[#389BB5]'
                      : 'text-[#053674] bg-slate-100 font-bold border-b-2 border-[#053674]'
                    : isDark
                      ? 'hover:text-white hover:bg-[#0b1c36]/60'
                      : 'hover:text-[#053674] hover:bg-slate-50'
                }`}
              >
                <span>Products & Platforms</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  productsDropdownOpen ? 'rotate-180 ' + (isDark ? 'text-[#389BB5]' : 'text-[#053674]') : ''
                }`} />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {productsDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className={`absolute top-full left-0 w-[600px] rounded-2xl border shadow-2xl p-4 grid grid-cols-2 gap-2 z-50 overflow-hidden ${
                      isDark 
                        ? 'bg-[#0b1c36] border-slate-700 shadow-black/70' 
                        : 'bg-white border-slate-200 shadow-[#071326]/10'
                    }`}
                  >
                    {/* Top Multi-Color Brand Line */}
                    <div className="col-span-2 -mx-4 -mt-4 mb-2 h-1 wipro-multi-gradient" />

                    <div className="col-span-2 px-3 py-1 flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <WiproDotCluster />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Enterprise Ready Platforms
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                        isDark 
                          ? 'bg-[#071326] text-[#389BB5] border-slate-700' 
                          : 'bg-slate-100 text-[#053674] border-slate-200'
                      }`}>
                        6 Enterprise Suites
                      </span>
                    </div>

                    {PRODUCTS.map((prod) => (
                      <motion.button
                        key={prod.id}
                        whileHover={{ scale: 1.01 }}
                        onClick={() => handleProductClick(prod.slug)}
                        className={`p-3 rounded-xl text-left transition-all group flex items-start gap-3 border cursor-pointer ${
                          isDark 
                            ? 'hover:bg-[#0e2242] border-transparent hover:border-slate-700' 
                            : 'hover:bg-slate-50 border-transparent hover:border-slate-200/90'
                        }`}
                      >
                        <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 border transition-all ${
                          isDark 
                            ? 'bg-[#071326] border-slate-700 group-hover:bg-[#053674]/30' 
                            : 'bg-slate-100 border-slate-200/50 group-hover:bg-white group-hover:shadow-sm'
                        }`}>
                          {getProductIcon(prod.iconName)}
                        </div>
                        <div>
                          <div className={`text-xs font-bold flex items-center gap-1.5 transition-colors ${
                            isDark 
                              ? 'text-white group-hover:text-[#389BB5]' 
                              : 'text-slate-900 group-hover:text-[#053674]'
                          }`}>
                            {prod.name}
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                            {prod.shortDescription}
                          </p>
                        </div>
                      </motion.button>
                    ))}

                    <div className="col-span-2 mt-2 p-3 bg-gradient-to-r from-[#071326] via-[#053674] to-[#0a2347] rounded-xl text-white flex items-center justify-between px-4 border border-slate-700/60">
                      <div>
                        <span className="text-xs font-bold block text-white">Custom Engineering & Consulting</span>
                        <span className="text-slate-300 text-[11px]">Turnkey enterprise architectures & legacy modernization</span>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavClick('custom-technology')}
                        className="text-xs font-bold bg-[#389BB5] hover:bg-[#2e8299] text-white px-3.5 py-1.5 rounded-lg transition-colors flex items-center gap-1 cursor-pointer shadow-sm"
                      >
                        Explore <ArrowRight className="w-3 h-3" />
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => handleNavClick('solutions')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer text-sm font-semibold ${
                currentPage === 'solutions' 
                  ? isDark
                    ? 'text-white bg-[#0b1c36] font-bold border-b-2 border-[#389BB5]'
                    : 'text-[#053674] bg-slate-100 font-bold border-b-2 border-[#053674]'
                  : isDark
                    ? 'hover:text-white hover:bg-[#0b1c36]/60'
                    : 'hover:text-[#053674] hover:bg-slate-50'
              }`}
            >
              Industry Solutions
            </button>

            <button
              onClick={() => handleNavClick('custom-technology')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer text-sm font-semibold ${
                currentPage === 'custom-technology' 
                  ? isDark
                    ? 'text-white bg-[#0b1c36] font-bold border-b-2 border-[#389BB5]'
                    : 'text-[#053674] bg-slate-100 font-bold border-b-2 border-[#053674]'
                  : isDark
                    ? 'hover:text-white hover:bg-[#0b1c36]/60'
                    : 'hover:text-[#053674] hover:bg-slate-50'
              }`}
            >
              Consulting & Dev
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer text-sm font-semibold ${
                currentPage === 'about' 
                  ? isDark
                    ? 'text-white bg-[#0b1c36] font-bold border-b-2 border-[#389BB5]'
                    : 'text-[#053674] bg-slate-100 font-bold border-b-2 border-[#053674]'
                  : isDark
                    ? 'hover:text-white hover:bg-[#0b1c36]/60'
                    : 'hover:text-[#053674] hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`px-3 py-2 rounded-lg transition-colors cursor-pointer text-sm font-semibold ${
                currentPage === 'contact' 
                  ? isDark
                    ? 'text-white bg-[#0b1c36] font-bold border-b-2 border-[#389BB5]'
                    : 'text-[#053674] bg-slate-100 font-bold border-b-2 border-[#053674]'
                  : isDark
                    ? 'hover:text-white hover:bg-[#0b1c36]/60'
                    : 'hover:text-[#053674] hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Header Action CTA & Theme Toggle Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle Pill Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`focus-ring relative min-h-11 px-3 rounded-xl flex items-center gap-2 text-xs font-semibold border transition-all cursor-pointer ${
                isDark 
                  ? 'bg-[#0b1c36] border-slate-700 text-amber-300 hover:bg-[#0e2242] hover:border-amber-400/50 shadow-md shadow-black/30' 
                  : 'bg-slate-100 border-slate-200 text-[#053674] hover:bg-slate-200 hover:border-[#053674]/30 shadow-xs'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Deep-Navy Dark Mode'}
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="dark-icon"
                    initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5"
                  >
                    <Sun className="w-4 h-4 text-[#FFC412] fill-[#FFC412]/30" />
                    <span className="text-[11px] font-bold text-slate-200">Light</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="light-icon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.6 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5"
                  >
                    <Moon className="w-4 h-4 text-[#053674] fill-[#053674]/20" />
                    <span className="text-[11px] font-bold text-[#053674]">Deep Navy</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Schedule Consultation Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openDemoModal()}
              className="btn-primary btn-sm"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-[#FFC412]" />
              Schedule a Consultation
            </motion.button>
          </div>

          {/* Mobile Actions: Theme Toggle & Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`focus-ring min-h-11 min-w-11 inline-flex items-center justify-center rounded-lg border transition-colors cursor-pointer ${
                isDark 
                  ? 'bg-[#0b1c36] border-slate-700 text-[#FFC412]' 
                  : 'bg-slate-100 border-slate-200 text-[#053674]'
              }`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => openDemoModal()}
              className="btn-primary btn-sm"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`focus-ring min-h-11 min-w-11 inline-flex items-center justify-center rounded-lg transition-colors ${
                isDark 
                  ? 'text-slate-200 hover:bg-[#0b1c36]' 
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-3 overflow-hidden backdrop-blur-2xl ${
              isDark 
                ? 'bg-[#071326]/98 border-slate-800 text-slate-200' 
                : 'bg-white/98 border-slate-200 text-slate-700'
            }`}
          >
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => handleNavClick('home')}
                className={`p-2.5 rounded-lg text-left font-semibold text-sm ${
                  currentPage === 'home' 
                    ? isDark 
                      ? 'bg-[#0b1c36] text-[#389BB5] font-bold' 
                      : 'bg-slate-100 text-[#053674] font-bold' 
                    : isDark ? 'text-slate-200' : 'text-slate-700'
                }`}
              >
                Home
              </button>

              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className={`w-full p-2.5 rounded-lg text-left font-semibold text-sm flex justify-between items-center ${
                    isDark ? 'text-slate-200' : 'text-slate-700'
                  }`}
                >
                  <span>Products & Platforms</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`pl-3 pr-1 py-1 space-y-1 rounded-xl my-1 border overflow-hidden ${
                        isDark 
                          ? 'bg-[#0b1c36] border-slate-700' 
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      {PRODUCTS.map((prod) => (
                        <button
                          key={prod.id}
                          onClick={() => handleProductClick(prod.slug)}
                          className={`w-full p-2 text-left text-xs font-medium flex items-center gap-2 rounded-lg transition-colors ${
                            isDark 
                              ? 'text-slate-300 hover:text-[#389BB5] hover:bg-[#0e2242]' 
                              : 'text-slate-700 hover:text-[#053674] hover:bg-white'
                          }`}
                        >
                          {getProductIcon(prod.iconName)}
                          <span>{prod.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => handleNavClick('solutions')}
                className={`p-2.5 rounded-lg text-left font-semibold text-sm ${
                  currentPage === 'solutions' 
                    ? isDark 
                      ? 'bg-[#0b1c36] text-[#389BB5] font-bold' 
                      : 'bg-slate-100 text-[#053674] font-bold' 
                    : isDark ? 'text-slate-200' : 'text-slate-700'
                }`}
              >
                Industry Solutions
              </button>

              <button
                onClick={() => handleNavClick('custom-technology')}
                className={`p-2.5 rounded-lg text-left font-semibold text-sm ${
                  currentPage === 'custom-technology' 
                    ? isDark 
                      ? 'bg-[#0b1c36] text-[#389BB5] font-bold' 
                      : 'bg-slate-100 text-[#053674] font-bold' 
                    : isDark ? 'text-slate-200' : 'text-slate-700'
                }`}
              >
                Consulting & Dev
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`p-2.5 rounded-lg text-left font-semibold text-sm ${
                  currentPage === 'about' 
                    ? isDark 
                      ? 'bg-[#0b1c36] text-[#389BB5] font-bold' 
                      : 'bg-slate-100 text-[#053674] font-bold' 
                    : isDark ? 'text-slate-200' : 'text-slate-700'
                }`}
              >
                About Us
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`p-2.5 rounded-lg text-left font-semibold text-sm ${
                  currentPage === 'contact' 
                    ? isDark 
                      ? 'bg-[#0b1c36] text-[#389BB5] font-bold' 
                      : 'bg-slate-100 text-[#053674] font-bold' 
                    : isDark ? 'text-slate-200' : 'text-slate-700'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Mobile Drawer Footer with Theme Toggle and Consult */}
            <div className={`pt-3 border-t flex flex-col gap-2.5 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <button
                onClick={toggleTheme}
                className={`w-full py-2.5 px-3 rounded-xl border flex items-center justify-between text-xs font-bold transition-colors ${
                  isDark 
                    ? 'bg-[#0b1c36] border-slate-700 text-slate-200' 
                    : 'bg-slate-100 border-slate-200 text-[#053674]'
                }`}
              >
                <div className="flex items-center gap-2">
                  {isDark ? <Sun className="w-4 h-4 text-[#FFC412]" /> : <Moon className="w-4 h-4 text-[#053674]" />}
                  <span>Active Theme:</span>
                </div>
                <span className="capitalize px-2 py-0.5 rounded bg-white/10">{isDark ? 'Deep-Navy Dark' : 'Light Mode'}</span>
              </button>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDemoModal();
                }}
                className="btn-primary w-full"
              >
                <CalendarCheck className="w-4 h-4 text-[#FFC412]" /> Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wipro Signature Multi-Color Dots Spectrum Scroll Progress Bar */}
      <div className={`absolute -bottom-[1.5px] left-0 right-0 h-[2.5px] overflow-hidden pointer-events-none z-50 ${
        isDark ? 'bg-slate-900' : 'bg-slate-100'
      }`}>
        <motion.div
          style={{ 
            scaleX, 
            transformOrigin: '0%',
            background: 'linear-gradient(90deg, #301157 0%, #B4156E 20%, #FFC412 40%, #A4CE4F 60%, #389BB5 80%, #053674 100%)'
          }}
          className="h-full w-full shadow-[0_0_8px_rgba(56,155,181,0.6)]"
        />
      </div>
    </header>
  );
}

export default Navbar;
