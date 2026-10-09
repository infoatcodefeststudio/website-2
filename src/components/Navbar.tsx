import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { useDemoModal, useNavigation, PageRoute } from '../context/NavigationContext';
import { useTheme } from '../context/ThemeContext';
import { PRODUCTS, PRODUCT_PAGE_SLUGS } from '../data/products';
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
  type LucideIcon,
} from 'lucide-react';

const NAV_PRODUCT_ICONS: Record<string, { Icon: LucideIcon; className: string }> = {
  Warehouse: { Icon: Warehouse, className: 'w-4 h-4 text-wipro-navy dark:text-wipro-cyan' },
  Truck: { Icon: Truck, className: 'w-4 h-4 text-wipro-cyan' },
  ShieldCheck: { Icon: ShieldCheck, className: 'w-4 h-4 text-wipro-green' },
  Users: { Icon: Users, className: 'w-4 h-4 text-wipro-pink' },
  Hotel: { Icon: Hotel, className: 'w-4 h-4 text-wipro-yellow' },
  Boxes: { Icon: Boxes, className: 'w-4 h-4 text-wipro-purple dark:text-wipro-green' },
};

const DEFAULT_NAV_PRODUCT_ICON = { Icon: Boxes, className: 'w-4 h-4 text-wipro-navy dark:text-wipro-cyan' };

function preloadDemoModal() {
  void import('./DemoModal');
}

const PRIMARY_LINKS: { page: PageRoute; short: string; full: string }[] = [
  { page: 'home', short: 'Home', full: 'Home' },
  { page: 'solutions', short: 'Solutions', full: 'Industry Solutions' },
  { page: 'custom-technology', short: 'Consulting', full: 'Consulting & Dev' },
  { page: 'about', short: 'About', full: 'About Us' },
  { page: 'contact', short: 'Contact', full: 'Contact' },
];

export function Navbar() {
  const { currentPage, navigate } = useNavigation();
  const { openDemoModal } = useDemoModal();
  const { isDark, toggleTheme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState<boolean>(false);
  const productsMenuRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!productsDropdownOpen && !mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProductsDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [productsDropdownOpen, mobileMenuOpen]);

  useEffect(() => {
    if (!productsDropdownOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!productsMenuRef.current?.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };
    window.addEventListener('pointerdown', onPointerDown);
    return () => window.removeEventListener('pointerdown', onPointerDown);
  }, [productsDropdownOpen]);

  const getProductIcon = (iconName: string) => {
    const { Icon, className } = NAV_PRODUCT_ICONS[iconName] ?? DEFAULT_NAV_PRODUCT_ICON;
    return <Icon className={className} />;
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

  const isProductPage = PRODUCT_PAGE_SLUGS.has(currentPage);

  const desktopLinkClass = (active: boolean) =>
    `inline-flex h-9 items-center rounded-full px-3 text-[13px] font-semibold leading-none tracking-tight transition-colors ${
      active
        ? isDark
          ? 'bg-white/10 text-white'
          : 'bg-white text-wipro-navy shadow-sm'
        : isDark
          ? 'text-slate-300 hover:bg-white/5 hover:text-white'
          : 'text-slate-600 hover:bg-white/70 hover:text-wipro-navy'
    }`;

  const mobileLinkClass = (active: boolean) =>
    `flex h-11 w-full items-center rounded-xl px-3 text-left text-sm font-semibold ${
      active
        ? isDark
          ? 'bg-wipro-surface-dark text-wipro-cyan'
          : 'bg-slate-100 text-wipro-navy'
        : isDark
          ? 'text-slate-200 hover:bg-white/5'
          : 'text-slate-700 hover:bg-slate-50'
    }`;

  return (
    <header className={`sticky top-0 z-50 overflow-visible border-b transition-colors duration-300 ${
      isDark
        ? isScrolled
          ? 'border-slate-800 bg-wipro-dark/95 shadow-lg shadow-black/30 backdrop-blur-xl'
          : 'border-slate-800/80 bg-wipro-dark/90 backdrop-blur-lg'
        : isScrolled
          ? 'border-slate-200/90 bg-white/95 shadow-sm shadow-wipro-navy/5 backdrop-blur-xl'
          : 'border-slate-200/70 bg-white/92 backdrop-blur-lg'
    }`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:gap-4 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="focus-ring flex h-11 shrink-0 items-center gap-2.5 rounded-xl text-left"
        >
          <span className={`grid size-10 shrink-0 place-items-center rounded-xl border ${
            isDark ? 'border-slate-700/80 bg-wipro-surface-dark' : 'border-slate-200 bg-white'
          }`}>
            <WiproBrandMark size="md" animate={isScrolled} />
          </span>
          <span className="flex h-10 flex-col justify-center gap-1">
            <span className={`text-[15px] font-bold leading-none tracking-tight ${
              isDark ? 'text-white' : 'text-wipro-dark'
            }`}>
              Codefest <span className={isDark ? 'text-wipro-cyan' : 'text-wipro-navy'}>Studio</span>
            </span>
            <span className={`text-[10px] font-semibold uppercase leading-none tracking-[0.16em] ${
              isDark ? 'text-wipro-cyan' : 'text-wipro-navy'
            }`}>
              Enterprise Tech
            </span>
          </span>
        </button>

        <nav
          aria-label="Primary"
          className={`hidden items-center gap-0.5 overflow-visible rounded-full border p-1 lg:flex ${
            isDark
              ? 'border-slate-700/80 bg-wipro-surface-dark/80'
              : 'border-slate-200/90 bg-slate-100/80'
          }`}
        >
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            aria-current={currentPage === 'home' ? 'page' : undefined}
            className={desktopLinkClass(currentPage === 'home')}
          >
            Home
          </button>

          <div
            ref={productsMenuRef}
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <button
              type="button"
              aria-expanded={productsDropdownOpen}
              aria-haspopup="true"
              aria-controls="products-mega-menu"
              onClick={() => setProductsDropdownOpen((open) => !open)}
              className={desktopLinkClass(isProductPage)}
            >
              <span className="xl:hidden">Products</span>
              <span className="hidden xl:inline">Products & Platforms</span>
              <ChevronDown
                aria-hidden="true"
                className={`ml-1 h-3.5 w-3.5 transition-transform duration-200 ${
                  productsDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {productsDropdownOpen && (
                <motion.div
                  id="products-mega-menu"
                  role="menu"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full z-[60] w-[min(36rem,calc(100vw-2rem))] -translate-x-1/2 pt-2"
                >
                  <div className={`overflow-hidden rounded-2xl border p-3 shadow-2xl ${
                    isDark
                      ? 'border-slate-700 bg-wipro-surface-dark shadow-black/70'
                      : 'border-slate-200 bg-white shadow-wipro-dark/10'
                  }`}>
                    <div className="-mx-3 -mt-3 mb-3 h-1 wipro-multi-gradient" />

                    <div className="mb-2 flex items-center justify-between px-1">
                      <div className="flex items-center gap-2">
                        <WiproDotCluster />
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Enterprise Ready Platforms
                        </span>
                      </div>
                      <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${
                        isDark
                          ? 'border-slate-700 bg-wipro-dark text-wipro-cyan'
                          : 'border-slate-200 bg-slate-100 text-wipro-navy'
                      }`}>
                        6 Suites
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {PRODUCTS.map((prod) => (
                        <button
                          key={prod.id}
                          type="button"
                          onClick={() => handleProductClick(prod.slug)}
                          className={`flex items-start gap-3 rounded-xl border border-transparent p-2.5 text-left transition-colors ${
                            isDark
                              ? 'hover:border-slate-700 hover:bg-wipro-card-dark'
                              : 'hover:border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <span className={`mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg border ${
                            isDark
                              ? 'border-slate-700 bg-wipro-dark'
                              : 'border-slate-200 bg-slate-100'
                          }`}>
                            {getProductIcon(prod.iconName)}
                          </span>
                          <span className="min-w-0">
                            <span className={`block text-xs font-bold ${
                              isDark ? 'text-white' : 'text-slate-900'
                            }`}>
                              {prod.name}
                            </span>
                            <span className="mt-0.5 line-clamp-1 block text-[11px] text-slate-400">
                              {prod.shortDescription}
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>

                    <div className="mt-2 flex items-center justify-between gap-3 rounded-xl bg-gradient-to-r from-wipro-dark via-wipro-navy to-[#0a2347] px-4 py-3 text-white">
                      <div>
                        <span className="block text-xs font-bold">Custom Engineering & Consulting</span>
                        <span className="text-[11px] text-slate-300">Turnkey architectures and legacy modernization</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleNavClick('custom-technology')}
                        className="inline-flex h-8 shrink-0 items-center gap-1 rounded-full bg-wipro-cyan px-3 text-xs font-bold text-wipro-dark transition-colors hover:bg-[#4aadc4]"
                      >
                        Explore <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {PRIMARY_LINKS.filter((item) => item.page !== 'home').map((item) => (
            <button
              key={item.page}
              type="button"
              onClick={() => handleNavClick(item.page)}
              aria-current={currentPage === item.page ? 'page' : undefined}
              className={desktopLinkClass(currentPage === item.page)}
            >
              <span className="xl:hidden">{item.short}</span>
              <span className="hidden xl:inline">{item.full}</span>
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className={`focus-ring inline-flex size-11 items-center justify-center rounded-full border transition-colors ${
              isDark
                ? 'border-slate-700 bg-wipro-surface-dark text-wipro-yellow hover:border-wipro-yellow/40'
                : 'border-slate-200 bg-white text-wipro-navy hover:border-wipro-navy/30 hover:bg-slate-50'
            }`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onMouseEnter={preloadDemoModal}
            onFocus={preloadDemoModal}
            onClick={() => openDemoModal()}
            className={`focus-ring inline-flex h-11 items-center gap-2 rounded-full px-4 text-[13px] font-semibold transition-colors ${
              isDark
                ? 'bg-white text-wipro-navy hover:bg-slate-100'
                : 'bg-wipro-navy text-white shadow-sm shadow-wipro-navy/25 hover:bg-wipro-blue'
            }`}
          >
            <CalendarCheck className={`h-4 w-4 ${isDark ? 'text-wipro-navy' : 'text-wipro-yellow'}`} aria-hidden="true" />
            <span className="xl:hidden">Consult</span>
            <span className="hidden xl:inline">Schedule a Consultation</span>
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className={`focus-ring inline-flex size-11 items-center justify-center rounded-full border transition-colors ${
              isDark
                ? 'border-slate-700 bg-wipro-surface-dark text-wipro-yellow'
                : 'border-slate-200 bg-white text-wipro-navy'
            }`}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`focus-ring inline-flex size-11 items-center justify-center rounded-full border transition-colors ${
              isDark
                ? 'border-slate-700 bg-wipro-surface-dark text-slate-100'
                : 'border-slate-200 bg-white text-slate-700'
            }`}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`overflow-hidden border-b px-4 pb-4 pt-2 lg:hidden ${
              isDark
                ? 'border-slate-800 bg-wipro-dark/98 text-slate-200'
                : 'border-slate-200 bg-white/98 text-slate-700'
            }`}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              <button
                type="button"
                onClick={() => handleNavClick('home')}
                aria-current={currentPage === 'home' ? 'page' : undefined}
                className={mobileLinkClass(currentPage === 'home')}
              >
                Home
              </button>

              <div>
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  aria-expanded={mobileProductsOpen}
                  className={`${mobileLinkClass(isProductPage)} justify-between`}
                >
                  <span>Products & Platforms</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`my-1 overflow-hidden rounded-xl border ${
                        isDark ? 'border-slate-700 bg-wipro-surface-dark' : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      {PRODUCTS.map((prod) => (
                        <button
                          key={prod.id}
                          type="button"
                          onClick={() => handleProductClick(prod.slug)}
                          className={`flex h-11 w-full items-center gap-2.5 px-3 text-left text-sm font-medium ${
                            isDark
                              ? 'text-slate-200 hover:bg-wipro-card-dark hover:text-wipro-cyan'
                              : 'text-slate-700 hover:bg-white hover:text-wipro-navy'
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

              {PRIMARY_LINKS.filter((item) => item.page !== 'home').map((item) => (
                <button
                  key={item.page}
                  type="button"
                  onClick={() => handleNavClick(item.page)}
                  aria-current={currentPage === item.page ? 'page' : undefined}
                  className={mobileLinkClass(currentPage === item.page)}
                >
                  {item.full}
                </button>
              ))}

              <div className={`mt-2 grid grid-cols-[auto_1fr] items-center gap-2 border-t pt-3 ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <div className={`grid h-11 grid-cols-2 rounded-full border p-1 ${
                  isDark ? 'border-slate-700 bg-wipro-surface-dark' : 'border-slate-200 bg-slate-100'
                }`}>
                  <button
                    type="button"
                    onClick={() => setTheme('light')}
                    aria-pressed={!isDark}
                    className={`inline-flex items-center justify-center gap-1 rounded-full px-3 text-xs font-semibold ${
                      !isDark ? 'bg-white text-wipro-navy shadow-sm' : 'text-slate-400'
                    }`}
                  >
                    <Sun className="h-3.5 w-3.5" aria-hidden="true" />
                    Light
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme('dark')}
                    aria-pressed={isDark}
                    className={`inline-flex items-center justify-center gap-1 rounded-full px-3 text-xs font-semibold ${
                      isDark ? 'bg-wipro-dark text-white' : 'text-slate-500'
                    }`}
                  >
                    <Moon className="h-3.5 w-3.5" aria-hidden="true" />
                    Dark
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openDemoModal();
                  }}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-wipro-navy px-4 text-sm font-semibold text-white"
                >
                  <CalendarCheck className="h-4 w-4 text-wipro-yellow" aria-hidden="true" />
                  Consult
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`pointer-events-none absolute -bottom-[1.5px] left-0 right-0 z-50 h-[2.5px] overflow-hidden ${
        isDark ? 'bg-slate-900' : 'bg-slate-100'
      }`}>
        <motion.div
          style={{
            scaleX,
            transformOrigin: '0%',
            background: 'linear-gradient(90deg, #301157 0%, #B4156E 20%, #FFC412 40%, #A4CE4F 60%, #389BB5 80%, #053674 100%)'
          }}
          className="h-full w-full"
        />
      </div>
    </header>
  );
}

export default Navbar;
