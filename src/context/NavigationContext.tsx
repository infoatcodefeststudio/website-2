import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type PageRoute = 
  | 'home'
  | 'products'
  | 'wms'
  | 'tms'
  | 'gate-yard-management'
  | 'vendor-management'
  | 'hotel-erp'
  | 'inventory-management'
  | 'solutions'
  | 'custom-technology'
  | 'about'
  | 'contact'
  | 'book-demo'
  | 'privacy'
  | 'terms';

interface NavigationContextType {
  currentPage: PageRoute;
  selectedIndustry?: string | null;
  demoModalOpen: boolean;
  preselectedProduct: string;
  navigate: (page: PageRoute, params?: { industry?: string; preselectedProduct?: string }) => void;
  openDemoModal: (product?: string) => void;
  closeDemoModal: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);
  const [preselectedProduct, setPreselectedProduct] = useState<string>('Warehouse Management System');

  // Handle URL hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (!hash || hash === '') {
        setCurrentPage('home');
      } else if (hash.startsWith('products/')) {
        const productSlug = hash.replace('products/', '') as PageRoute;
        setCurrentPage(productSlug);
      } else {
        setCurrentPage((hash as PageRoute) || 'home');
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  const navigate = (page: PageRoute, params?: { industry?: string; preselectedProduct?: string }) => {
    if (params?.industry) {
      setSelectedIndustry(params.industry);
    }
    if (params?.preselectedProduct) {
      setPreselectedProduct(params.preselectedProduct);
    }

    setCurrentPage(page);

    let targetHash = '#/';
    if (page === 'home') {
      targetHash = '#/';
    } else if (['wms', 'tms', 'gate-yard-management', 'vendor-management', 'hotel-erp', 'inventory-management'].includes(page)) {
      targetHash = `#/products/${page}`;
    } else {
      targetHash = `#/${page}`;
    }

    window.history.pushState(null, '', targetHash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDemoModal = (product?: string) => {
    if (product) {
      setPreselectedProduct(product);
    }
    setDemoModalOpen(true);
  };

  const closeDemoModal = () => {
    setDemoModalOpen(false);
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        selectedIndustry,
        demoModalOpen,
        preselectedProduct,
        navigate,
        openDemoModal,
        closeDemoModal
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
