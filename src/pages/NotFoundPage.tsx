import React from 'react';
import { useDemoModal, useNavigation, type PageRoute } from '../context/NavigationContext';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/animations/MotionSection';
import { WiproDotCluster } from '../components/WiproBrandMark';
import {
  ArrowRight,
  CalendarCheck,
  Home,
  Mail,
  Warehouse,
  Truck,
  ShieldCheck,
  Users,
  Hotel,
  Boxes,
  type LucideIcon,
} from 'lucide-react';

const PRODUCT_ICONS: Record<string, LucideIcon> = {
  Warehouse,
  Truck,
  ShieldCheck,
  Users,
  Hotel,
  Boxes,
};

const EXPLORE_LINKS: { page: PageRoute; title: string; detail: string }[] = [
  { page: 'solutions', title: 'Industry Solutions', detail: 'Logistics, warehousing, retail, hospitality and more' },
  { page: 'custom-technology', title: 'Custom Technology', detail: 'Web, mobile, SaaS and enterprise engineering' },
  { page: 'about', title: 'About Us', detail: 'How Codefest Studio builds business-first platforms' },
  { page: 'contact', title: 'Contact', detail: `Reach ${COMPANY_INFO.email} for RFPs and demos` },
];

export function NotFoundPage() {
  const { navigate } = useNavigation();
  const { openDemoModal } = useDemoModal();

  return (
    <div className="bg-slate-50 dark:bg-[#071326] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumbs items={[{ label: 'Page Not Found' }]} />
      </div>

      <section className="relative pt-4 pb-16 lg:pt-8 lg:pb-24 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-[#053674]/5 dark:bg-[#053674]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] bg-[#389BB5]/5 dark:bg-[#389BB5]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn direction="down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-slate-100 dark:bg-[#0b1c36] border border-slate-200 dark:border-slate-700 rounded-full text-xs font-bold uppercase tracking-wider text-[#053674] dark:text-[#389BB5] mb-5 shadow-xs">
              <WiproDotCluster />
              <span>Error 404</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <p className="font-extrabold text-7xl sm:text-8xl tracking-tight text-[#053674]/15 dark:text-[#389BB5]/20 select-none">
              404
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071326] dark:text-white tracking-tight mt-2">
              This page isn’t on the map
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-4 leading-relaxed max-w-2xl mx-auto">
              The link may be outdated or mistyped. Stay with Codefest Studio — explore enterprise platforms, industry solutions, or talk to the technology team.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-8">
              <button type="button" onClick={() => navigate('home')} className="btn-primary">
                <Home className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
              <button type="button" onClick={() => openDemoModal()} className="btn-ghost">
                <CalendarCheck className="w-4 h-4 text-[#053674] dark:text-[#389BB5]" />
                <span>Schedule Consultation</span>
              </button>
              <a href={`mailto:${COMPANY_INFO.email}`} className="btn-ghost">
                <Mail className="w-4 h-4 text-[#389BB5]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="text-lg font-extrabold text-[#071326] dark:text-white mb-4">
              Explore enterprise platforms
            </h2>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRODUCTS.map((product) => {
                const Icon = PRODUCT_ICONS[product.iconName] ?? Boxes;
                return (
                  <StaggerItem key={product.slug}>
                    <button
                      type="button"
                      onClick={() => navigate(product.slug as PageRoute)}
                      className="w-full text-left bg-white dark:bg-[#0b1c36] rounded-2xl border border-slate-200 dark:border-slate-700 p-5 hover:border-[#389BB5]/50 hover:shadow-sm transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-[#071326] border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-[#053674] dark:text-[#389BB5]" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-sm text-[#071326] dark:text-white group-hover:text-[#053674] dark:group-hover:text-[#389BB5] transition-colors">
                            {product.name}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                            {product.shortDescription}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#389BB5] shrink-0 mt-1" />
                      </div>
                    </button>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>

          <div>
            <h2 className="text-lg font-extrabold text-[#071326] dark:text-white mb-4">
              Helpful pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXPLORE_LINKS.map((link) => (
                <button
                  key={link.page}
                  type="button"
                  onClick={() => navigate(link.page)}
                  className="text-left bg-white dark:bg-[#0b1c36] rounded-2xl border border-slate-200 dark:border-slate-700 p-5 hover:border-[#389BB5]/50 transition-colors"
                >
                  <p className="font-bold text-sm text-[#071326] dark:text-white">{link.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{link.detail}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;
