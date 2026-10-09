import { COMPANY_INFO, SITE_ORIGIN } from './company';
import { PRODUCTS, PRODUCTS_BY_SLUG } from './products';
import { getHashForPage, isProductSlug, type PageRoute, type ProductSlug } from '../context/NavigationContext';

export const DEFAULT_SEO_TITLE =
  'Codefest Studio | Technology Solutions & Enterprise Software Products';

export const DEFAULT_SEO_DESCRIPTION =
  'Codefest Studio provides customised technology solutions and ready-to-deploy enterprise products including Warehouse Management, Transport Management, Gate & Yard Management, Vendor Management, Hotel ERP and Inventory Management.';

export const OG_IMAGE_PATH = '/og-image.png';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const THEME_COLOR = '#053674';

export interface SeoRecord {
  title: string;
  description: string;
  canonical: string;
  ogType: 'website' | 'article';
}

function urlFor(page: PageRoute): string {
  const hash = getHashForPage(page);
  return hash === '#/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}/${hash}`;
}

const PAGE_SEO: Record<Exclude<PageRoute, ProductSlug>, Omit<SeoRecord, 'canonical' | 'ogType'>> = {
  home: {
    title: DEFAULT_SEO_TITLE,
    description: DEFAULT_SEO_DESCRIPTION,
  },
  products: {
    title: 'Enterprise Software Products | Codefest Studio',
    description:
      'Explore Codefest Studio ready-to-deploy enterprise products for warehouse, transport, yard, vendor, hotel and inventory operations.',
  },
  solutions: {
    title: 'Industry Technology Solutions | Codefest Studio',
    description:
      'Technology solutions across logistics, warehousing, supply chain, manufacturing, retail, hospitality and enterprise operations.',
  },
  'custom-technology': {
    title: 'Custom Technology Solutions | Codefest Studio',
    description:
      'Codefest Studio designs and develops customised web, mobile, SaaS and enterprise software around your exact operational workflows.',
  },
  about: {
    title: 'About Us | Codefest Studio',
    description:
      'Codefest Studio is a technology solutions and product management company focused on practical, scalable, business-driven digital products.',
  },
  contact: {
    title: 'Contact Us | Codefest Studio',
    description: `Reach the Codefest Studio technology team at ${COMPANY_INFO.email} for product demos, RFPs and custom engineering consultations.`,
  },
  'book-demo': {
    title: 'Book a Demo | Codefest Studio',
    description:
      'Schedule a personalized product demonstration with the Codefest Studio technology team for WMS, TMS, YMS, VMS, Hotel ERP or Inventory.',
  },
  privacy: {
    title: 'Privacy Policy | Codefest Studio',
    description: 'Read how Codefest Studio collects, uses and protects information when you use our website and enquiry forms.',
  },
  terms: {
    title: 'Terms & Conditions | Codefest Studio',
    description: 'Terms of use for the Codefest Studio website, product information and demonstration requests.',
  },
};

export function getSeoForPage(page: PageRoute): SeoRecord {
  if (isProductSlug(page)) {
    const product = PRODUCTS_BY_SLUG[page];
    if (product) {
      return {
        title: product.seoTitle,
        description: product.seoDescription,
        canonical: urlFor(page),
        ogType: 'website',
      };
    }
  }

  const fallback = PAGE_SEO[page as keyof typeof PAGE_SEO] ?? PAGE_SEO.home;
  return {
    ...fallback,
    canonical: urlFor(page),
    ogType: 'website',
  };
}

export function getOrganizationJsonLd() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_ORIGIN}/#organization`,
    name: COMPANY_INFO.name,
    url: SITE_ORIGIN,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_ORIGIN}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_ORIGIN}${OG_IMAGE_PATH}`,
    email: COMPANY_INFO.email,
    description: COMPANY_INFO.positioning,
    slogan: COMPANY_INFO.tagline,
    contactPoint: {
      '@type': 'ContactPoint',
      email: COMPANY_INFO.email,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
  };
}

export function getWebsiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_ORIGIN}/#website`,
    url: SITE_ORIGIN,
    name: COMPANY_INFO.name,
    description: DEFAULT_SEO_DESCRIPTION,
    inLanguage: 'en-IN',
    publisher: { '@id': `${SITE_ORIGIN}/#organization` },
  };
}

function breadcrumbFor(page: PageRoute) {
  const items: { name: string; item: string }[] = [
    { name: 'Home', item: `${SITE_ORIGIN}/` },
  ];

  if (page === 'home') {
    return items;
  }

  if (isProductSlug(page)) {
    const product = PRODUCTS_BY_SLUG[page];
    items.push({ name: 'Products', item: urlFor('products') });
    items.push({ name: product?.name ?? 'Product', item: urlFor(page) });
    return items;
  }

  const labels: Partial<Record<PageRoute, string>> = {
    products: 'Products',
    solutions: 'Solutions',
    'custom-technology': 'Custom Technology',
    about: 'About Us',
    contact: 'Contact',
    'book-demo': 'Book a Demo',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
  };

  items.push({ name: labels[page] ?? page, item: urlFor(page) });
  return items;
}

export function getJsonLdForPage(page: PageRoute) {
  const seo = getSeoForPage(page);
  const crumbs = breadcrumbFor(page);
  const graph: Record<string, unknown>[] = [
    getOrganizationJsonLd(),
    getWebsiteJsonLd(),
    {
      '@type': 'WebPage',
      '@id': `${seo.canonical}#webpage`,
      url: seo.canonical,
      name: seo.title,
      description: seo.description,
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
      about: { '@id': `${SITE_ORIGIN}/#organization` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.item,
      })),
    },
  ];

  if (page === 'home' || page === 'products') {
    graph.push({
      '@type': 'ItemList',
      name: 'Enterprise Software Products',
      itemListElement: PRODUCTS.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.name,
        url: urlFor(product.slug as ProductSlug),
      })),
    });
  }

  if (isProductSlug(page)) {
    const product = PRODUCTS_BY_SLUG[page];
    if (product) {
      graph.push({
        '@type': 'SoftwareApplication',
        name: product.name,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: product.seoDescription,
        url: urlFor(page),
        image: `${SITE_ORIGIN}${OG_IMAGE_PATH}`,
        provider: { '@id': `${SITE_ORIGIN}/#organization` },
      });
    }
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
