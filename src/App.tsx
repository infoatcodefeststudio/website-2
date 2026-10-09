import React, { lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavigationProvider, useDemoModal, useNavigation, type PageRoute } from './context/NavigationContext';
import { ThemeProvider } from './context/ThemeContext';
import { PRODUCTS, PRODUCTS_BY_SLUG } from './data/products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { SeoHead } from './components/SeoHead';
import { HomePage } from './pages/HomePage';

const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'));
const CustomTechnologyPage = lazy(() => import('./pages/CustomTechnologyPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BookDemoPage = lazy(() => import('./pages/BookDemoPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const DemoModal = lazy(() => import('./components/DemoModal'));

const PRODUCT_ROUTES = new Set<PageRoute>([
  'wms',
  'tms',
  'gate-yard-management',
  'vendor-management',
  'hotel-erp',
  'inventory-management',
]);

function PageFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center" role="status" aria-label="Loading page">
      <div className="h-8 w-8 rounded-full border-2 border-[#389BB5] border-t-transparent animate-spin" />
    </div>
  );
}

function DemoModalHost() {
  const { demoModalOpen } = useDemoModal();

  return demoModalOpen ? (
    <Suspense fallback={null}>
      <DemoModal />
    </Suspense>
  ) : null;
}

function renderCurrentPage(currentPage: PageRoute) {
  if (PRODUCT_ROUTES.has(currentPage)) {
    const product = PRODUCTS_BY_SLUG[currentPage] ?? PRODUCTS[0];
    return <ProductDetailPage product={product} />;
  }

  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'solutions':
      return <SolutionsPage />;
    case 'custom-technology':
      return <CustomTechnologyPage />;
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    case 'book-demo':
      return <BookDemoPage />;
    case 'privacy':
      return <PrivacyPolicyPage />;
    case 'terms':
      return <TermsPage />;
    case 'not-found':
      return <NotFoundPage />;
    default:
      return <NotFoundPage />;
  }
}

function AppContent() {
  const { currentPage } = useNavigation();

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[#053674] selection:text-white transition-colors duration-300 bg-slate-50 text-[#071326] dark:bg-[#071326] dark:text-slate-100">
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Suspense fallback={<PageFallback />}>
              {renderCurrentPage(currentPage)}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <DemoModalHost />
      <FloatingActions />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <SeoHead />
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
