import React from 'react';
import { useNavigation, PageRoute } from '../context/NavigationContext';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  page?: PageRoute;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const { navigate } = useNavigation();

  return (
    <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-6 py-2 overflow-x-auto">
      <button 
        onClick={() => navigate('home')} 
        className="flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-[#053674] dark:hover:text-[#389BB5] transition-colors cursor-pointer"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight className="w-3 h-3 text-slate-400 dark:text-slate-600 shrink-0" />
            {isLast || !item.page ? (
              <span className="font-semibold text-slate-900 dark:text-white truncate">{item.label}</span>
            ) : (
              <button
                onClick={() => item.page && navigate(item.page)}
                className="hover:text-[#053674] dark:hover:text-[#389BB5] transition-colors truncate cursor-pointer"
              >
                {item.label}
              </button>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;
