import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { PRODUCTS } from './data/products';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { CustomTechnologyPage } from './pages/CustomTechnologyPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookDemoPage } from './pages/BookDemoPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

function AppContent() {
  const { currentPage } = useNavigation();
  const { isDark } = useTheme();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'wms':
        return <ProductDetailPage product={PRODUCTS.find(p => p.slug === 'wms') || PRODUCTS[0]} />;
      case 'tms':
        return <ProductDetailPage product={PRODUCTS.find(p => p.slug === 'tms') || PRODUCTS[1]} />;
      case 'gate-yard-management':
        return <ProductDetailPage product={PRODUCTS.find(p => p.slug === 'gate-yard-management') || PRODUCTS[2]} />;
      case 'vendor-management':
        return <ProductDetailPage product={PRODUCTS.find(p => p.slug === 'vendor-management') || PRODUCTS[3]} />;
      case 'hotel-erp':
        return <ProductDetailPage product={PRODUCTS.find(p => p.slug === 'hotel-erp') || PRODUCTS[4]} />;
      case 'inventory-management':
        return <ProductDetailPage product={PRODUCTS.find(p => p.slug === 'inventory-management') || PRODUCTS[5]} />;
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
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between selection:bg-[#053674] selection:text-white transition-colors duration-300 ${
      isDark ? 'bg-[#071326] text-slate-100' : 'bg-slate-50 text-[#071326]'
    }`}>
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
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <DemoModal />
      <FloatingActions />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
