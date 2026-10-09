import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import { PRODUCT_PAGE_SLUGS } from '../data/products';

export type ProductSlug =
  | 'wms'
  | 'tms'
  | 'gate-yard-management'
  | 'vendor-management'
  | 'hotel-erp'
  | 'inventory-management';

export type PageRoute =
  | 'home'
  | 'products'
  | ProductSlug
  | 'solutions'
  | 'custom-technology'
  | 'about'
  | 'contact'
  | 'book-demo'
  | 'privacy'
  | 'terms'
  | 'not-found';

const STATIC_PAGE_ROUTES = new Set<string>([
  'home',
  'products',
  'solutions',
  'custom-technology',
  'about',
  'contact',
  'book-demo',
  'privacy',
  'terms',
]);

interface NavigationContextType {
  currentPage: PageRoute;
  selectedIndustry?: string | null;
  navigate: (page: PageRoute, params?: { industry?: string; preselectedProduct?: string }) => void;
}

interface DemoModalContextType {
  demoModalOpen: boolean;
  preselectedProduct: string;
  openDemoModal: (product?: string) => void;
  closeDemoModal: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);
const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function isProductSlug(page: string): page is ProductSlug {
  return PRODUCT_PAGE_SLUGS.has(page);
}

export function getHashForPage(page: PageRoute): string {
  if (page === 'home') return '#/';
  if (page === 'not-found') return '#/404';
  if (isProductSlug(page)) return `#/products/${page}`;
  return `#/${page}`;
}

export function parseHashPage(): PageRoute {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  if (pathname !== '/' && pathname !== '/index.html') {
    return 'not-found';
  }

  const raw = window.location.hash.replace(/^#\/?/, '').replace(/\/$/, '');
  if (!raw) return 'home';
  if (raw === '404' || raw === 'not-found') return 'not-found';

  if (raw.startsWith('products/')) {
    const slug = raw.slice('products/'.length).split('/')[0];
    return isProductSlug(slug) ? slug : 'not-found';
  }

  if (raw === 'solutions' || raw.startsWith('solutions/')) return 'solutions';
  if (isProductSlug(raw)) return raw;
  if (STATIC_PAGE_ROUTES.has(raw)) return raw as PageRoute;
  return 'not-found';
}

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState('Warehouse Management System');

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPage(parseHashPage());
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigate = useCallback((page: PageRoute, params?: { industry?: string; preselectedProduct?: string }) => {
    if (params?.industry) {
      setSelectedIndustry(params.industry);
    }
    if (params?.preselectedProduct) {
      setPreselectedProduct(params.preselectedProduct);
    }

    setCurrentPage(page);

    window.history.pushState(null, '', `/${getHashForPage(page)}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openDemoModal = useCallback((product?: string) => {
    if (product) {
      setPreselectedProduct(product);
    }
    setDemoModalOpen(true);
  }, []);

  const closeDemoModal = useCallback(() => {
    setDemoModalOpen(false);
  }, []);

  const navigationValue = useMemo<NavigationContextType>(
    () => ({
      currentPage,
      selectedIndustry,
      navigate,
    }),
    [currentPage, selectedIndustry, navigate]
  );

  const demoModalValue = useMemo<DemoModalContextType>(
    () => ({
      demoModalOpen,
      preselectedProduct,
      openDemoModal,
      closeDemoModal,
    }),
    [demoModalOpen, preselectedProduct, openDemoModal, closeDemoModal]
  );

  return (
    <NavigationContext.Provider value={navigationValue}>
      <DemoModalContext.Provider value={demoModalValue}>
        {children}
      </DemoModalContext.Provider>
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

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error('useDemoModal must be used within a NavigationProvider');
  }
  return context;
}
